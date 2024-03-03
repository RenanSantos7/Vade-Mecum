# Caminho para a pasta que contém os arquivos HTML
$folderPath = ".\leis"

# Especifica a pasta de saída para os arquivos JavaScript
$outputFolderPath = ".\leisConvertidas"

# Lista de arquivos HTML na pasta
$htmlFiles = Get-ChildItem -Path $folderPath -Filter *.html

# Loop através de cada arquivo HTML
foreach ($file in $htmlFiles) {
    # Lê o conteúdo do arquivo HTML
    $htmlContent = Get-Content -Path $file.FullName -Raw

    # Extrai o título da lei
    $tituloMatch = $htmlContent -match '<p id=titulo>(.*?)<\/p>'
    $titulo = $matches[1]

    # Extrai o conteúdo da lei
    $conteudoMatch = $htmlContent -match '<section id=corpo>(.*?)<\/main>'
    $conteudo = $matches[1]

    # Remove a extensão ".html" do nome do arquivo
    $objName = $file.BaseName.ToLower()

    # Inicializa a lista de links relacionados
    $linksRelacionados = @()

    # Verifica se há um elemento <nav id="menu"> no HTML
    $menuElement = $htmlContent -match '<nav id=menu>(.*?)<\/nav>'
    if ($matches[1]) {
        Write-Host "Encontrou elemento <nav id=menu>"

        # Extrai os links relacionados dentro do elemento <nav id="menu">
        $links = $matches[1] -split '<li>' | ForEach-Object {
            if ($_ -match '<a.*?href="(.*?)".*?>(.*?)<\/a>') {
                [PSCustomObject]@{
                    id = (Get-Item $matches[1]).BaseName -replace '\.html$'
                    nome = $matches[2]
                }
            }
        }

        $linksRelacionados = $links | Where-Object { $_ -ne $null }
    } else {
        Write-Host "Nenhum elemento <nav id=menu> encontrado"
    }

    # Cria o objeto JavaScript
    $jsObject = @"
const $objName = @{
    id = "$objName"
    titulo = "$titulo"
    alias = "$titulo"
    linksRelacionados = @(
        $linksRelacionados
    )
    jurisdicao = "nacional"
    area = "consumidor"
    conteudo = @'
$conteudo
'@
}
"@

    # Salva o objeto JavaScript em um novo arquivo
    $jsFilePath = Join-Path $outputFolderPath "$objName.js"
    $jsObject | Out-File -FilePath $jsFilePath -Encoding UTF8

    Write-Host "Arquivo convertido: $($file.FullName) -> $($jsFilePath)"
}

Write-Host "Conversão concluída!"