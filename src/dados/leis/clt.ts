import { ILei } from "../../types/types.ts"

const clt:ILei = {
	id: 'clt',
	titulo: 'Consolidação das Leis do Trabalho',
	alias: 'Cons. das Leis do Trabalho',
	linksRelacionados: [
		{ id: 'CF', nome: 'Constituição Federal' },
		{ id: 'CPC', nome: 'Código de Processo Civil' },
		{ id: 'FGTS', nome: 'Lei do FGTS' },
		{ id: 'L9610', nome: 'Lei do Trabalho Temporário' },
		//{ link: 'http://www.tst.jus.br/sumulas', nome: 'Súmulas do TST' },
	],
	jurisdicao: 'nacional',
	area: 'trabalho',
	conteudo: `
        <p id="subtit"><a href="https://www.planalto.gov.br/ccivil_03/decreto-lei/Del5452compilado.htm">DECRETO-LEI Nº 5.452, DE 1º. DE MAIO DE 1943</a></p>

        <p id="ementa">Aprova a Consolidação das Leis do Trabalho.</p>
        
        <p>O <strong>PRESIDENTE DA REPÚBLICA</strong>, usando da atribuição que lhe confere o art. 180 da Constituição,</p>
        
        <p>DECRETA:</p>
        
        <p id="art1"><span class="artigo">Art. 1º.</span> Fica aprovada a Consolidação das Leis do Trabalho, que a este decreto-lei acompanha, com as alterações por ela introduzidas na legislação vigente.</p>
        
        <p id="art1p">Parágrafo único. Continuam em vigor as disposições legais transitórias ou de emergência, bem como as que não tenham aplicação em todo o território nacional.</p>
        
        <p id="art2"><span class="artigo">Art. 2º.</span> O presente decreto-lei entrará em vigor em 10 de novembro de 1943.</p>
        
        <p>Rio de Janeiro, 1 de maio de 1943, 122º. da Independência e 55º. da República.</p>
        
        <p>GETÚLIO VARGAS.</p>
        
        <p>Alexandre Marcondes Filho.</p>
        
        <h2>CONSOLIDAÇÃO DAS LEIS DO TRABALHO</h2>
        
        <h1 id="tituloi">TÍTULO I<br>
        INTRODUÇÃO</h1>
        
        <p id="art1."><span class="artigo">Art. 1º.</span> Esta Consolidação estatui as normas que regulam as relações individuais e coletivas de trabalho, nela previstas.</p>
        
        <p id="art2"><span class="artigo">Art. 2º.</span> Considera-se empregador a empresa, individual ou coletiva, que, assumindo os riscos da atividade econômica, admite, assalaria e dirige a prestação pessoal de serviço.</p>
        
        <p id="art2§1">§ 1º. Equiparam-se ao empregador, para os efeitos exclusivos da relação de emprego, os profissionais liberais, as instituições de beneficência, as associações recreativas ou outras instituições sem fins lucrativos, que admitirem trabalhadores como empregados.</p>
        
        <p id="art2§2">§ 2º. Sempre que uma ou mais empresas, tendo, embora, cada uma delas, personalidade jurídica própria, estiverem sob a direção, controle ou administração de outra, ou ainda quando, mesmo guardando cada uma sua autonomia, integrem grupo econômico, serão responsáveis solidariamente pelas obrigações decorrentes da relação de emprego.</p>
        
        <p id="art2§3">§ 3º. Não caracteriza grupo econômico a mera identidade de sócios, sendo necessárias, para a configuração do grupo, a demonstração do interesse integrado, a efetiva comunhão de interesses e a atuação conjunta das empresas dele integrantes.</p>
        
        <p id="art3"><span class="artigo">Art. 3º.</span> Considera-se empregado toda pessoa física que prestar serviços de natureza não eventual a empregador, sob a dependência deste e mediante salário.</p>
        
        <p id="art3p">Parágrafo único. Não haverá distinções relativas à espécie de emprego e à condição de trabalhador, nem entre o trabalho intelectual, técnico e manual.</p>
        
        <p id="art4"><span class="artigo">Art. 4º.</span> Considera-se como de serviço efetivo o período em que o empregado esteja à disposição do empregador, aguardando ou executando ordens, salvo disposição especial expressamente consignada.</p>
        
        <p id="art4§1">§ 1º. Computar-se-ão, na contagem de tempo de serviço, para efeito de indenização e estabilidade, os períodos em que o empregado estiver afastado do trabalho prestando serviço militar e por motivo de acidente do trabalho.</p>
        
        <p id="art4§2">§ 2º. Por não se considerar tempo à disposição do empregador, não será computado como período extraordinário o que exceder a jornada normal, ainda que ultrapasse o limite de cinco minutos previsto no § 1º. do art. 58 desta Consolidação, quando o empregado, por escolha própria, buscar proteção pessoal, em caso de insegurança nas vias públicas ou más condições climáticas, bem como adentrar ou permanecer nas dependências da empresa para exercer atividades particulares, entre outras:</p>
        
        <p id="art4§2i">I - práticas religiosas;</p>
        
        <p id="art4§2ii">II - descanso;</p>
        
        <p id="art4§2iii">III - lazer;</p>
        
        <p id="art4§2iv">IV - estudo;</p>
        
        <p id="art4§2v">V - alimentação;</p>
        
        <p id="art4§2vi">VI - atividades de relacionamento social;</p>
        
        <p id="art4§2vii">VII - higiene pessoal;</p>
        
        <p id="art4§2viii">VIII - troca de roupa ou uniforme, quando não houver obrigatoriedade de realizar a troca na empresa.</p>
        
        <p id="art5"><span class="artigo">Art. 5º.</span> A todo trabalho de igual valor corresponderá salário igual, sem distinção de sexo.</p>
        
        <p id="art6"><span class="artigo">Art. 6º.</span> Não se distingue entre o trabalho realizado no estabelecimento do empregador, o executado no domicílio do empregado e o realizado a distância, desde que estejam caracterizados os pressupostos da relação de emprego.</p>
        
        <p id="art6p">Parágrafo único. Os meios telemáticos e informatizados de comando, controle e supervisão se equiparam, para fins de subordinação jurídica, aos meios pessoais e diretos de comando, controle e supervisão do trabalho alheio.</p>
        
        <p id="art7"><span class="artigo">Art. 7º.</span> Os preceitos constantes da presente Consolidação salvo quando for em cada caso, expressamente determinado em contrário, não se aplicam: (Redação dada pelo Decreto-lei nº 8.079, 11.10.1945)</p>
        
        <p id="art92a" class="alinea">a) aos empregados domésticos, assim considerados, de um modo geral, os que prestam serviços de natureza não-econômica à pessoa ou à família, no âmbito residencial destas;</p>
        
        <p id="art92b" class="alinea">b) aos trabalhadores rurais, assim considerados aqueles que, exercendo funções diretamente ligadas à agricultura e à pecuária, não sejam empregados em atividades que, pelos métodos de execução dos respectivos trabalhos ou pela finalidade de suas operações, se classifiquem como industriais ou comerciais;</p>
        
        <p id="art7c" class="alinea">c) aos funcionários públicos da União, dos Estados e dos Municípios e aos respectivos extranumerários em serviço nas próprias repartições; (Redação dada pelo Decreto-lei nº 8.079, 11.10.1945)</p>
        
        <p id="art7d." class="alinea">d) aos servidores de autarquias paraestatais, desde que sujeitos a regime próprio de proteção ao trabalho que lhes assegure situação análoga à dos funcionários públicos. (Redação dada pelo Decreto-lei nº 8.079, 11.10.1945)</p>
        
        <p class="alinea">e) (Vide Decreto-lei nº 8.079, 11.10.1945)</p>
        
        <p class="alinea">f) às atividades de direção e assessoramento nos órgãos, institutos e fundações dos partidos, assim definidas em normas internas de organização partidária.</p>
        
        <p id="art7p">Parágrafo único (Revogado pelo Decreto-lei nº 8.249, de 1945)</p>
        
        <p id="art8"><span class="artigo">Art. 8º.</span> As autoridades administrativas e a Justiça do Trabalho, na falta de disposições legais ou contratuais, decidirão, conforme o caso, pela jurisprudência, por analogia, por equidade e outros princípios e normas gerais de direito, principalmente do direito do trabalho, e, ainda, de acordo com os usos e costumes, o direito comparado, mas sempre de maneira que nenhum interesse de classe ou particular prevaleça sobre o interesse público.</p>
        
        <p id="art8§1">§ 1º. O direito comum será fonte subsidiária do direito do trabalho.</p>
        
        <p id="art8§2">§ 2º. Súmulas e outros enunciados de jurisprudência editados pelo Tribunal Superior do Trabalho e pelos Tribunais Regionais do Trabalho não poderão restringir direitos legalmente previstos nem criar obrigações que não estejam previstas em lei.</p>
        
        <p id="art8§3">§ 3º. No exame de convenção coletiva ou acordo coletivo de trabalho, a Justiça do Trabalho analisará exclusivamente a conformidade dos elementos essenciais do negócio jurídico, respeitado o disposto no art. 104 da Lei no 10.406, de 10 de janeiro de 2002 (Código Civil), e balizará sua atuação pelo princípio da intervenção mínima na autonomia da vontade coletiva.</p>
        
        <p id="art9"><span class="artigo">Art. 9º.</span> Serão nulos de pleno direito os atos praticados com o objetivo de desvirtuar, impedir ou fraudar a aplicação dos preceitos contidos na presente Consolidação.</p>
        
        <p id="art10"><span class="artigo">Art. 10.</span> Qualquer alteração na estrutura jurídica da empresa não afetará os direitos adquiridos por seus empregados.</p>
        
        <p id="art10a"><span class="artigo">Art. 10-A.</span> O sócio retirante responde subsidiariamente pelas obrigações trabalhistas da sociedade relativas ao período em que figurou como sócio, somente em ações ajuizadas até dois anos depois de averbada a modificação do contrato, observada a seguinte ordem de preferência:</p>
        
        <p id="art10ai">I - a empresa devedora;</p>
        
        <p id="art10aii">II - os sócios atuais; e</p>
        
        <p id="art10aiii">III - os sócios retirantes.</p>
        
        <p id="art10ap">Parágrafo único. O sócio retirante responderá solidariamente com os demais quando ficar comprovada fraude na alteração societária decorrente da modificação do contrato.</p>
        
        <p id="art11.."><span class="artigo">Art. 11.</span> A pretensão quanto a créditos resultantes das relações de trabalho prescreve em cinco anos para os trabalhadores urbanos e rurais, até o limite de dois anos após a extinção do contrato de trabalho.</p>
        
        <p>I - (revogado);</p>
        
        <p>II - (revogado).</p>
        
        <p id="art11§1">§ 1º. O disposto neste artigo não se aplica às ações que tenham por objeto anotações para fins de prova junto à Previdência Social.</p>
        
        <p id="art11§2">§ 2º. Tratando-se de pretensão que envolva pedido de prestações sucessivas decorrente de alteração ou descumprimento do pactuado, a prescrição é total, exceto quando o direito à parcela esteja também assegurado por preceito de lei.</p>
        
        <p id="art11§3">§ 3º. A interrupção da prescrição somente ocorrerá pelo ajuizamento de reclamação trabalhista, mesmo que em juízo incompetente, ainda que venha a ser extinta sem resolução do mérito, produzindo efeitos apenas em relação aos pedidos idênticos.</p>
        
        <p id="art11a"><span class="artigo">Art. 11-A.</span> Ocorre a prescrição intercorrente no processo do trabalho no prazo de dois anos.</p>
        
        <p id="art11a§1">§ 1º. A fluência do prazo prescricional intercorrente inicia-se quando o exequente deixa de cumprir determinação judicial no curso da execução.</p>
        
        <p id="art11a§2">§ 2º. A declaração da prescrição intercorrente pode ser requerida ou declarada de ofício em qualquer grau de jurisdição.</p>
        
        <p id="art12"><span class="artigo">Art. 12.</span> Os preceitos concernentes ao regime de seguro social são objeto de lei especial.</p>
        
        <h1 id="tituloii">TÍTULO II<br>
        DAS NORMAS GERAIS DE TUTELA DO TRABALHO</h1>
        
        <h2 id="tituloiicapituloi">CAPÍTULO I<br>
        DA IDENTIFICAÇÃO PROFISSIONAL</h2>
        
        <h3 id="tituloiicapituloisecaoi">SEÇÃO I<br>
        DA CARTEIRA DE TRABALHO E PREVIDÊNCIA SOCIAL<a name=art13></a></h3>
        
        <p><span class="artigo">Art. 13.</span> A Carteira de Trabalho e Previdência Social é obrigatória para o exercício de qualquer emprego, inclusive de natureza rural, ainda que em caráter temporário, e para o exercício por conta própria de atividade profissional remunerada. (Redação dada pelo Decreto-lei nº 926, de 10.10.1969)</p>
        
        <p id="art13§1.">§ 1º. O disposto neste artigo aplica-se, igualmente, a quem: (Redação dada pelo Decreto-lei nº 926, de 10.10.1969)</p>
        
        <p id="art13§1i">I - proprietário rural ou não, trabalhe individualmente ou em regime de economia familiar, assim entendido o trabalho dos membros da mesma família, indispensável à própria subsistência, e exercido em condições de mútua dependência e colaboração; (Incluído pelo Decreto-lei nº 926, de 10.10.1969)</p>
        
        <p id="art13§1ii">II - em regime de economia familiar e sem empregado, explore área não excedente do módulo rural ou de outro limite que venha a ser fixado, para cada região, pelo Ministério do Trabalho e Previdência Social. (Incluído pelo Decreto-lei nº 926, de 10.10.1969)</p>
        
        <p id="art13§2..">§ 2º. A Carteira de Trabalho e Previdência Social (CTPS) obedecerá aos modelos que o Ministério da Economia adotar.</p>
        
        <p>§ 3º (Revogado).</p>
        
        <p>§ 4º (Revogado).</p>
        
        <h3 id="tituloiicapituloisecaoii">SEÇÃO II<br>
        DA EMISSÃO DA CARTEIRA</h3>
        
        <p id="art14.0"><span class="artigo">Art. 14.</span> A CTPS será emitida pelo Ministério da Economia preferencialmente em meio eletrônico.</p>
        
        <p>Parágrafo único. Excepcionalmente, a CTPS poderá ser emitida em meio físico, desde que:</p>
        
        <p>I - nas unidades descentralizadas do Ministério da Economia que forem habilitadas para a emissão;</p>
        
        <p>II - mediante convênio, por órgãos federais, estaduais e municipais da administração direta ou indireta;</p>
        
        <p>III - mediante convênio com serviços notariais e de registro, sem custos para a administração, garantidas as condições de segurança das informações.</p>
        
        <p id="art15.0"><span class="artigo">Art. 15.</span> Os procedimentos para emissão da CTPS ao interessado serão estabelecidos pelo Ministério da Economia em regulamento próprio, privilegiada a emissão em formato eletrônico.</p>
        
        <p id="art16.0"><span class="artigo">Art. 16.</span> A CTPS terá como identificação única do empregado o número de inscrição no Cadastro de Pessoas Físicas (CPF).</p>
        
        <p>I a IV - (revogados pela Lei nº 13.874, de 2019);</p>
        
        <p>Parágrafo único. (Revogado pela Lei nº 13.874, de 2019).</p>
            
        <p id="art17"><span class="artigo">Art. 17.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art18."><span class="artigo">Art. 18</span>. (Revogado pela Lei nº 7.855, de 1989)</p>
        
        <p id="art19"><span class="artigo">Art. 19.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art20."><span class="artigo">Art. 20.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art21..."><span class="artigo">Art. 21.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art22"><span class="artigo">Art. 22.</span> (Revogado pelo Decreto-Lei nº 926, de 10.10.1969)</p>
        
        <p id="art23"><span class="artigo">Art. 23.</span> (Revogado pelo Decreto-Lei nº 926, de 10.10.1969)</p>
        
        <p id="art24"><span class="artigo">Art. 24.</span> (Revogado pelo Decreto-Lei nº 926, de 10.10.1969)</p>
        
        <h3 id="tituloiicapituloisecaoiii">SEÇÃO III<br>
        DA ENTREGA DAS CARTEIRAS DE TRABALHO E PREVIDÊNCIA SOCIAL</h3>
        
        <p id="art25"><span class="artigo">Art. 25.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art26"><span class="artigo">Art. 26.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art27"><span class="artigo">Art. 27.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art28"><span class="artigo">Art. 28.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <h3 id="tituloiicapituloisecaoiv">SEÇÃO IV<br>
        DAS ANOTAÇÕES</h3>
        
        <p class="titart">Anotações na Carteira de Trabalho e Previdência Social</p>
        
        <p id="art29.0"><span class="artigo">Art. 29.</span> O empregador terá o prazo de 5 (cinco) dias úteis para anotar na CTPS, em relação aos trabalhadores que admitir, a data de admissão, a remuneração e as condições especiais, se houver, facultada a adoção de sistema manual, mecânico ou eletrônico, conforme instruções a serem expedidas pelo Ministério da Economia.</p>
        
        <p id="art29§1..">§ 1º. As anotações concernentes à remuneração devem especificar o salário, qualquer que seja sua forma de pagamento, seja ele em dinheiro ou em utilidades, bem como a estimativa da gorjeta. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art29§2..">§ 2º. As anotações na Carteira de Trabalho e Previdência Social serão feitas:</p>
        
        <p id="art29§2a" class="alinea">a) na data-base;</p>
        
        <p id="art29§2b" class="alinea">b) a qualquer tempo, por solicitação do trabalhador;</p>
        
        <p id="art29§2c" class="alinea">c) no caso de rescisão contratual; ou</p>
        
        <p id="art29§2d" class="alinea">d) necessidade de comprovação perante a Previdência Social.</p>
        
        <p id="art29§3.0">§ 3º. A falta de cumprimento pelo empregador do disposto neste artigo acarretará a lavratura do auto de infração, pelo Fiscal do Trabalho, que deverá, de ofício, comunicar a falta de anotação ao órgão competente, para o fim de instaurar o processo de anotação.</p>
        
        <p id="art29§4">§ 4º. É vedado ao empregador efetuar anotações desabonadoras à conduta do empregado em sua Carteira de Trabalho e Previdência Social.</p>
        
        <p id="art29§9">§ 5º. O descumprimento do disposto no § 4º. deste artigo submeterá o empregador ao pagamento de multa prevista no art. 52 deste Capítulo.</p>
        
        <p>§ 6º. A comunicação pelo trabalhador do número de inscrição no CPF ao empregador equivale à apresentação da CTPS em meio digital, dispensado o empregador da emissão de recibo.</p>
        
        <p>§ 7º. Os registros eletrônicos gerados pelo empregador nos sistemas informatizados da CTPS em meio digital equivalem às anotações a que se refere esta Lei.</p>
        
        <p>§ 8º. O trabalhador deverá ter acesso às informações da sua CTPS no prazo de até 48 (quarenta e oito) horas a partir de sua anotação.</p>
        
        <p><span class="artigo">Art. 29-A.</span> O empregador que infringir o disposto no caput e no § 1º. do art. 29 desta Consolidação ficará sujeito a multa no valor de R$ 3.000,00 (três mil reais) por empregado prejudicado, acrescido de igual valor em cada reincidência. Produção de efeitos</p>
        
        <p>§ 1º. No caso de microempresa ou de empresa de pequeno porte, o valor final da multa aplicada será de R$ 800,00 (oitocentos reais) por empregado prejudicado.</p>
        
        <p>§ 2º. A infração de que trata o caput deste artigo constitui exceção ao critério da dupla visita. Produção de efeitos</p>
        
        <p><span class="artigo">Art. 29-B.</span> Na hipótese de não serem realizadas as anotações a que se refere o § 2º. do art. 29 desta Consolidação, o empregador ficará sujeito a multa no valor de R$ 600,00 (seiscentos reais) por empregado prejudicado.</p>
        
        <p id="art30"><span class="artigo">Art. 30.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art31"><span class="artigo">Art. 31.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art32"><span class="artigo">Art. 32.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art33"><span class="artigo">Art. 33.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art34"><span class="artigo">Art. 34.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art35"><span class="artigo">Art. 35.</span> (Revogado pela Lei nº 6.533, de 24.5.1978)</p>
        
        <h3 id="tituloiicapituloisecaov">SEÇÃO V<br>
        DAS RECLAMAÇÕES POR FALTA OU RECUSA DE ANOTAÇÃO</h3>
        
        <p id="art36"><span class="artigo">Art. 36.</span> Recusando-se a empresa fazer às anotações a que se refere o art. 29 ou a devolver a Carteira de Trabalho e Previdência Social recebida, poderá o empregado comparecer, pessoalmente ou intermédio de seu sindicato perante a Delegacia Regional ou órgão autorizado, para apresentar reclamação. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art37"><span class="artigo">Art. 37.</span> No caso do art. 36, lavrado o termo de reclamação, determinar-se-á a realizarão de diligência para instrução do feito, observado, se for o caso o disposto no § 2º. do art. 29, notificando-se posteriormente o reclamado por carta registrada, caso persista a recusa, para que, em dia e hora previamente designados, venha prestar esclarecimentos ou efetuar as devidas anotações na Carteira de Trabalho e Previdência Social ou sua entrega. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art37p.">Parágrafo único. Não comparecendo o reclamado, lavrar-se-á termo de ausência, sendo considerado revel e confesso sobre os termos da reclamação feita, devendo as anotações serem efetuadas por despacho da autoridade que tenha processado a reclamação. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art38"><span class="artigo">Art. 38.</span> Comparecendo o empregador e recusando-se a fazer as anotações reclamadas, será lavrado um termo de comparecimento, que deverá conter, entre outras indicações, o lugar, o dia e hora de sua lavratura, o nome e a residência do empregador, assegurando-se-lhe o prazo de 48 (quarenta e oito) horas, a contar do termo, para apresentar defesa.</p>
        
        <p id="art38p">Parágrafo único. Findo o prazo para a defesa, subirá o processo à autoridade administrativa de primeira instância, para se ordenarem diligências, que completem a instrução do feito, ou para julgamento, se o caso estiver suficientemente esclarecido.</p>
        
        <p id="art39"><span class="artigo">Art. 39.</span> Verificando-se que as alegações feitas pelo reclamado versam sobre a não existência de relação de emprego ou sendo impossível verificar essa condição pelos meios administrativos, será o processo encaminhado a Justiça do Trabalho ficando, nesse caso, sobrestado o julgamento do auto de infração que houver sido lavrado. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art39§3">§ 1º. Se não houver acordo, a Junta de Conciliação e Julgamento, em sua sentença ordenará que a Secretaria efetue as devidas anotações uma vez transitada em julgado, e faça a comunicação à autoridade competente para o fim de aplicar a multa cabível. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art39§2">§ 2º. Igual procedimento observar-se-á no caso de processo trabalhista de qualquer natureza, quando for verificada a falta de anotações na Carteira de Trabalho e Previdência Social, devendo o Juiz, nesta hipótese, mandar proceder, desde logo, àquelas sobre as quais não houver controvérsia (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <h3 id="tituloiicapituloisecaovi">SEÇÃO VI<br>
        DO VALOR DAS ANOTAÇÕES</h3>
        
        <p id="art40.0"><span class="artigo">Art. 40.</span> A CTPS regularmente emitida e anotada servirá de prova:</p>
        
        <p id="art40i">I - Nos casos de dissídio na Justiça do Trabalho entre a empresa e o empregado por motivo de salário, férias ou tempo de serviço; (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>II - (revogado);</p>
        
        <p id="art40iii">III - Para cálculo de indenização por acidente do trabalho ou moléstia profissional. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <h3 id="tituloiicapituloisecaovii">SEÇÃO VII<br>
        DOS LIVROS DE REGISTRO DE EMPREGADOS</h3>
        
        <p><span class="artigo">Art. 41.</span> Em todas as atividades será obrigatório para o empregador o registro dos respectivos trabalhadores, podendo ser adotados livros, fichas ou sistema eletrônico, conforme instruções a serem expedidas pelo Ministério do Trabalho.</p>
        
        <p id="art41p.">Parágrafo único. Além da qualificação civil ou profissional de cada trabalhador, deverão ser anotados todos os dados relativos à sua admissão no emprego, duração e efetividade do trabalho, a férias, acidentes e demais circunstâncias que interessem à proteção do trabalhador.</p>
        
        <p id="art42"><span class="artigo">Art. 42.</span> (Revogada pela Lei nº 10.243, de 19.6.2001)</p>
        
        <p id="art43"><span class="artigo">Art. 43.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art44"><span class="artigo">Art. 44.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art45"><span class="artigo">Art. 45.</span> (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art46"><span class="artigo">Art. 46.</span> (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art47..0"><span class="artigo">Art. 47.</span> O empregador que mantiver empregado não registrado nos termos do art. 41 desta Consolidação ficará sujeito a multa no valor de R$ 3.000,00 (três mil reais) por empregado não registrado, acrescido de igual valor em cada reincidência.</p>
        
        <p id="art47§1">§ 1º. Especificamente quanto à infração a que se refere o caput deste artigo, o valor final da multa aplicada será de R$ 800,00 (oitocentos reais) por empregado não registrado, quando se tratar de microempresa ou empresa de pequeno porte.</p>
        
        <p id="art47§3">§ 2º. A infração de que trata o caput deste artigo constitui exceção ao critério da dupla visita.</p>
        
        <p id="art47a0"><span class="artigo">Art. 47-A.</span> Na hipótese de não serem informados os dados a que se refere o parágrafo único do art. 41 desta Consolidação, o empregador ficará sujeito à multa de R$ 600,00 (seiscentos reais) por empregado prejudicado.</p>
        
        <p id="art48"><span class="artigo">Art. 48.</span> As multas previstas nesta Seção serão aplicadas pela autoridade de primeira instância no Distrito Federal, e pelas autoridades regionais do Ministério do Trabalho, Industria e Comercio, nos Estados e no Território do Acre.</p>
        
        <h3 id="tituloiicapituloisecaoviii">SEÇÃO VIII<br>
        DAS PENALIDADES</h3>
        
        <p id="art49"><span class="artigo">Art. 49.</span> Para os efeitos da emissão, substituição ou anotação de Carteiras de Trabalho e Previdência Social, considerar-se-á, crime de falsidade, com as penalidades previstas no art. 299 do Código Penal: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art49i">I - Fazer, no todo ou em parte, qualquer documento falso ou alterar o verdadeiro; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art49ii">II - Afirmar falsamente a sua própria identidade, filiação, lugar de nascimento, residência, profissão ou estado civil e beneficiários, ou atestar os de outra pessoa; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art49iii">III - Servir-se de documentos, por qualquer forma falsificados; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art49iv">IV - falsificar, fabricando ou alterando, ou vender, usar ou possuir Carteira de Trabalho e Previdência Social assim alteradas; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art49v">V - Anotar dolosamente em Carteira de Trabalho e Previdência Social ou registro de empregado, ou confessar ou declarar em juízo ou fora dele, data de admissão em emprego diversa da verdadeira. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art50"><span class="artigo">Art. 50.</span> Comprovando-se falsidade, quer nas declarações para emissão de Carteira de Trabalho e Previdência Social, quer nas respectivas anotações, o fato será levado ao conhecimento da autoridade que houver emitido a carteira, para fins de direito.</p>
        
        <p>Falsificação de carteira de trabalho</p>
        
        <p id="art923"><span class="artigo">Art. 51.</span> Incorrerá em multa de valor igual a 3 (três) vezes o salário-mínimo regional aquele que, comerciante ou não, vender ou expuser à venda qualquer tipo de carteira igual ou semelhante ao tipo oficialmente adotado. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art52.1"><span class="artigo">Art. 52.</span> O extravio ou inutilização da Carteira de Trabalho e Previdência Social por culpa da empresa sujeitará esta à multa de valor igual á metade do salário mínimo regional. (Redação dada pelo Decreto-lei nº 926, de 10.10.1969)</p>
        
        <p id="art53"><span class="artigo">Art. 53.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art54"><span class="artigo">Art. 54.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art924"><span class="artigo">Art. 55.</span> Incorrerá na multa de valor igual a 1 (um) salário-mínimo regional a empresa que infringir o art. 13 e seus parágrafos. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art56"><span class="artigo">Art. 56.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <h2>SEÇÃO II<br>
        DA DURAÇÃO DO TRABALHO</h2>
        
        <h3 id="tituloiicapituloiisecaoi">SEÇÃO I<br>
        DISPOSIÇÃO PRELIMINAR</h3>
        
        <p id="art57"><span class="artigo">Art. 57.</span> Os preceitos deste Capítulo aplicam-se a todas as atividades, salvo as expressamente excluídas, constituindo exceções as disposições especiais, concernentes estritamente a peculiaridades profissionais constantes do Capítulo I do Título III.</p>
        
        <h3 id="tituloiicapituloiisecaoii">SEÇÃO II<br>
        DA JORNADA DE TRABALHO</h3>
        
        <p id="art58"><span class="artigo">Art. 58.</span> A duração normal do trabalho, para os empregados em qualquer atividade privada, não excederá de 8 (oito) horas diárias, desde que não seja fixado expressamente outro limite.</p>
        
        <p id="art58§1">§ 1º. Não serão descontadas nem computadas como jornada extraordinária as variações de horário no registro de ponto não excedentes de cinco minutos, observado o limite máximo de dez minutos diários. (Parágrafo incluído pela Lei nº 10.243, de 19.6.2001)</p>
        
        <p id="art58§2.">§ 2º. O tempo despendido pelo empregado desde a sua residência até a efetiva ocupação do posto de trabalho e para o seu retorno, caminhando ou por qualquer meio de transporte, inclusive o fornecido pelo empregador, não será computado na jornada de trabalho, por não ser tempo à disposição do empregador.</p>
        
        <p id="art58§3">§ 3º (Revogado pela Lei nº 13.467, de 2017)</p>
        
        <p id="art58a."><span class="artigo">Art. 58-A.</span> Considera-se trabalho em regime de tempo parcial aquele cuja duração não exceda a trinta horas semanais, sem a possibilidade de horas suplementares semanais, ou, ainda, aquele cuja duração não exceda a vinte e seis horas semanais, com a possibilidade de acréscimo de até seis horas suplementares semanais.</p>
        
        <p id="art58a§1">§ 1º. O salário a ser pago aos empregados sob o regime de tempo parcial será proporcional à sua jornada, em relação aos empregados que cumprem, nas mesmas funções, tempo integral. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art58a§2">§ 2º. Para os atuais empregados, a adoção do regime de tempo parcial será feita mediante opção manifestada perante a empresa, na forma prevista em instrumento decorrente de negociação coletiva. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art58a§3">§ 3º. As horas suplementares à duração do trabalho semanal normal serão pagas com o acréscimo de 50% (cinquenta por cento) sobre o salário-hora normal.</p>
        
        <p id="art58a§4">§ 4º. Na hipótese de o contrato de trabalho em regime de tempo parcial ser estabelecido em número inferior a vinte e seis horas semanais, as horas suplementares a este quantitativo serão consideradas horas extras para fins do pagamento estipulado no § 3o, estando também limitadas a seis horas suplementares semanais.</p>
        
        <p id="art58a§5">§ 5º. As horas suplementares da jornada de trabalho normal poderão ser compensadas diretamente até a semana imediatamente posterior à da sua execução, devendo ser feita a sua quitação na folha de pagamento do mês subsequente, caso não sejam compensadas.</p>
        
        <p id="art58a§6">§ 6º. É facultado ao empregado contratado sob regime de tempo parcial converter um terço do período de férias a que tiver direito em abono pecuniário.</p>
        
        <p id="art58a§7">§ 7º. As férias do regime de tempo parcial são regidas pelo disposto no art. 130 desta Consolidação.</p>
        
        <p id="art59."><span class="artigo">Art. 59.</span> A duração diária do trabalho poderá ser acrescida de horas extras, em número não excedente de duas, por acordo individual, convenção coletiva ou acordo coletivo de trabalho.</p>
        
        <p id="art59§1.">§ 1º. A remuneração da hora extra será, pelo menos, 50% (cinquenta por cento) superior à da hora normal.</p>
        
        <p id="art59§2">§ 2º. Poderá ser dispensado o acréscimo de salário se, por força de acordo ou convenção coletiva de trabalho, o excesso de horas em um dia for compensado pela correspondente diminuição em outro dia, de maneira que não exceda, no período máximo de um ano, à soma das jornadas semanais de trabalho previstas, nem seja ultrapassado o limite máximo de dez horas diárias. (Redação dada pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art59§3.">§ 3º. Na hipótese de rescisão do contrato de trabalho sem que tenha havido a compensação integral da jornada extraordinária, na forma dos §§ 2º. e 5º. deste artigo, o trabalhador terá direito ao pagamento das horas extras não compensadas, calculadas sobre o valor da remuneração na data da rescisão.</p>
        
        <p id="art59§5">§ 5º. O banco de horas de que trata o § 2º. deste artigo poderá ser pactuado por acordo individual escrito, desde que a compensação ocorra no período máximo de seis meses.</p>
        
        <p id="art59§6">§ 6º. É lícito o regime de compensação de jornada estabelecido por acordo individual, tácito ou escrito, para a compensação no mesmo mês.</p>
        
        <p id="art59a"><span class="artigo">Art. 59-A.</span> Em exceção ao disposto no art. 59 desta Consolidação, é facultado às partes, mediante acordo individual escrito, convenção coletiva ou acordo coletivo de trabalho, estabelecer horário de trabalho de doze horas seguidas por trinta e seis horas ininterruptas de descanso, observados ou indenizados os intervalos para repouso e alimentação.</p>
        
        <p id="art59ap">Parágrafo único. A remuneração mensal pactuada pelo horário previsto no caput deste artigo abrange os pagamentos devidos pelo descanso semanal remunerado e pelo descanso em feriados, e serão considerados compensados os feriados e as prorrogações de trabalho noturno, quando houver, de que tratam o art. 70 e o § 5º. do art. 73 desta Consolidação.</p>
        
        <p id="art59b"><span class="artigo">Art. 59-B.</span> O não atendimento das exigências legais para compensação de jornada, inclusive quando estabelecida mediante acordo tácito, não implica a repetição do pagamento das horas excedentes à jornada normal diária se não ultrapassada a duração máxima semanal, sendo devido apenas o respectivo adicional.</p>
        
        <p id="art59bp">Parágrafo único. A prestação de horas extras habituais não descaracteriza o acordo de compensação de jornada e o banco de horas.</p>
        
        <p><span class="artigo">Art. 60.</span> Nas atividades insalubres, assim consideradas as constantes dos quadros mencionados no capítulo &quot;Da Segurança e da Medicina do Trabalho&quot;, ou que neles venham a ser incluídas por ato do Ministro do Trabalho, Industria e Comercio, quaisquer prorrogações só poderão ser acordadas mediante licença prévia das autoridades competentes em matéria de higiene do trabalho, as quais, para esse efeito, procederão aos necessários exames locais e à verificação dos métodos e processos de trabalho, quer diretamente, quer por intermédio de autoridades sanitárias federais, estaduais e municipais, com quem entrarão em entendimento para tal fim.</p>
        
        <p id="art60p">Parágrafo único. Excetuam-se da exigência de licença prévia as jornadas de doze horas de trabalho por trinta e seis horas ininterruptas de descanso.</p>
        
        <p id="art61"><span class="artigo">Art. 61.</span> Ocorrendo necessidade imperiosa, poderá a duração do trabalho exceder do limite legal ou convencionado, seja para fazer face a motivo de força maior, seja para atender à realização ou conclusão de serviços inadiáveis ou cuja inexecução possa acarretar prejuízo manifesto.</p>
        
        <p id="art61§1.">§ 1º. O excesso, nos casos deste artigo, pode ser exigido independentemente de convenção coletiva ou acordo coletivo de trabalho.</p>
        
        <p id="art61§2">§ 2º. Nos casos de excesso de horário por motivo de força maior, a remuneração da hora excedente não será inferior à da hora normal. Nos demais casos de excesso previstos neste artigo, a remuneração será, pelo menos, 25% (vinte e cinco por cento) superior à da hora normal, e o trabalho não poderá exceder de 12 (doze) horas, desde que a lei não fixe expressamente outro limite.</p>
        
        <p id="art61§3">§ 3º. Sempre que ocorrer interrupção do trabalho, resultante de causas acidentais, ou de força maior, que determinem a impossibilidade de sua realização, a duração do trabalho poderá ser prorrogada pelo tempo necessário até o máximo de 2 (duas) horas, durante o número de dias indispensáveis à recuperação do tempo perdido, desde que não exceda de 10 (dez) horas diárias, em período não superior a 45 (quarenta e cinco) dias por ano, sujeita essa recuperação à prévia autorização da autoridade competente.</p>
        
        <p id="art62"><span class="artigo">Art. 62.</span> Não são abrangidos pelo regime previsto neste capítulo:</p>
        
        <p id="art62i">I - os empregados que exercem atividade externa incompatível com a fixação de horário de trabalho, devendo tal condição ser anotada na Carteira de Trabalho e Previdência Social e no registro de empregados;</p>
        
        <p id="art62ii">II - os gerentes, assim considerados os exercentes de cargos de gestão, aos quais se equiparam, para efeito do disposto neste artigo, os diretores e chefes de departamento ou filial.</p>
        
        <p id="art62iii.1">III - os empregados em regime de teletrabalho que prestam serviço por produção ou tarefa.</p>
        
        <p id="art62p">Parágrafo único. O regime previsto neste capítulo será aplicável aos empregados mencionados no inciso II deste artigo, quando o salário do cargo de confiança, compreendendo a gratificação de função, se houver, for inferior ao valor do respectivo salário efetivo acrescido de 40% (quarenta por cento).</p>
        
        <p id="art63"><span class="artigo">Art. 63.</span> Não haverá distinção entre empregados e interessados, e a participação em lucros e comissões, salvo em lucros de caráter social, não exclui o participante do regime deste Capítulo.</p>
        
        <p id="art64></a><span class="artigo">Art. 64.</span> O salário-hora normal, no caso de empregado mensalista, será obtido dividindo-se o salário mensal correspondente à duração do trabalho, a que se refere o art. 58, por 30 (trinta) vezes o número de horas dessa duração.<a name=art64p"></p>
        
        <p>Parágrafo único. Sendo o número de dias inferior a 30 (trinta), adotar-se-á para o cálculo, em lugar desse número, o de dias de trabalho por mês. <a name=art65></a>art. 65. No caso do empregado diarista, o salário-hora normal será obtido dividindo-se o salário diário correspondente à duração do trabalho, estabelecido no art. 58, pelo número de horas de efetivo trabalho.</p>
        
        <h3 id="tituloiicapituloiisecaoiii">SEÇÃO III<br>
        DOS PERÍODOS DE DESCANSO</h3>
        
        <p id="art66"><span class="artigo">Art. 66.</span> Entre 2 (duas) jornadas de trabalho haverá um período mínimo de 11 (onze) horas consecutivas para descanso.</p>
        
        <p>Trabalho aos domingos</p>
        
        <p id="art925"><span class="artigo">Art. 67.</span> Será assegurado a todo empregado um descanso semanal de 24 (vinte e quatro) horas consecutivas, o qual, salvo motivo de conveniência pública ou necessidade imperiosa do serviço, deverá coincidir com o domingo, no todo ou em parte.</p>
        
        <p id="art67p">Parágrafo único. Nos serviços que exijam trabalho aos domingos, com exceção quanto aos elencos teatrais, será estabelecida escala de revezamento, mensalmente organizada e constando de quadro sujeito à fiscalização.</p>
        
        <p id="art68"><span class="artigo">Art. 68.</span> O trabalho em domingo, seja total ou parcial, na forma do art. 67, será sempre subordinado à permissão prévia da autoridade competente em matéria de trabalho.</p>
        
        <p id="art68p">Parágrafo único. A permissão será concedida a título permanente nas atividades que, por sua natureza ou pela conveniência pública, devem ser exercidas aos domingos, cabendo ao Ministro do Trabalho, Industria e Comercio, expedir instruções em que sejam especificadas tais atividades. Nos demais casos, ela será dada sob forma transitória, com discriminação do período autorizado, o qual, de cada vez, não excederá de 60 (sessenta) dias.</p>
        
        <p id="art69"><span class="artigo">Art. 69.</span> Na regulamentação do funcionamento de atividades sujeitas ao regime deste Capítulo, os municípios atenderão aos preceitos nele estabelecidos, e as regras que venham a fixar não poderão contrariar tais preceitos nem as instruções que, para seu cumprimento, forem expedidas pelas autoridades competentes em matéria de trabalho.</p>
        
        <p id="art926"><span class="artigo">Art. 70.</span> Salvo o disposto nos artigos 68 e 69, é vedado o trabalho em dias feriados nacionais e feriados religiosos, nos termos da legislação própria. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art71"><span class="artigo">Art. 71.</span> Em qualquer trabalho contínuo, cuja duração exceda de 6 (seis) horas, é obrigatória a concessão de um intervalo para repouso ou alimentação, o qual será, no mínimo, de 1 (uma) hora e, salvo acordo escrito ou contrato coletivo em contrário, não poderá exceder de 2 (duas) horas.</p>
        
        <p id="art71§1">§ 1º. Não excedendo de 6 (seis) horas o trabalho, será, entretanto, obrigatório um intervalo de 15 (quinze) minutos quando a duração ultrapassar 4 (quatro) horas.</p>
        
        <p id="art71§2">§ 2º. Os intervalos de descanso não serão computados na duração do trabalho.</p>
        
        <p id="art71§3">§ 3º. O limite mínimo de uma hora para repouso ou refeição poderá ser reduzido por ato do Ministro do Trabalho, Indústria e Comércio, quando ouvido o Serviço de Alimentação de Previdência Social, se verificar que o estabelecimento atende integralmente às exigências concernentes à organização dos refeitórios, e quando os respectivos empregados não estiverem sob regime de trabalho prorrogado a horas suplementares.</p>
        
        <p id="art71§4."></a>§ 4º. A não concessão ou a concessão parcial do intervalo intrajornada mínimo, para repouso e alimentação, a empregados urbanos e rurais, implica o pagamento, de natureza indenizatória, apenas do período suprimido, com acréscimo de 50% (cinquenta por cento) sobre o valor da remuneração da hora normal de trabalho.<a name="art71§5."></p>
        
        <p>§ 5º. O intervalo expresso no caput poderá ser reduzido e/ou fracionado, e aquele estabelecido no § 1º. poderá ser fracionado, quando compreendidos entre o término da primeira hora trabalhada e o início da última hora trabalhada, desde que previsto em convenção ou acordo coletivo de trabalho, ante a natureza do serviço e em virtude das condições especiais de trabalho a que são submetidos estritamente os motoristas, cobradores, fiscalização de campo e afins nos serviços de operação de veículos rodoviários, empregados no setor de transporte coletivo de passageiros, mantida a remuneração e concedidos intervalos para descanso menores ao final de cada viagem.</p>
        
        <p id="art72"><span class="artigo">Art. 72.</span> Nos serviços permanentes de mecanografia (datilografia, escrituração ou cálculo), a cada período de 90 (noventa) minutos de trabalho consecutivo corresponderá um repouso de 10 (dez) minutos não deduzidos da duração normal de trabalho.</p>
        
        <h3 id="tituloiicapituloiisecaoiv">SEÇÃO IV<br>
        DO TRABALHO NOTURNO</h3>
        
        <p id="art73"><span class="artigo">Art. 73.</span> Salvo nos casos de revezamento semanal ou quinzenal, o trabalho noturno terá remuneração superior a do diurno e, para esse efeito, sua remuneração terá um acréscimo de 20 % (vinte por cento), pelo menos, sobre a hora diurna. (Redação dada pelo Decreto-lei nº 9.666, de 1946)</p>
        
        <p id="art73§1.">§ 1º. A hora do trabalho noturno será computada como de 52 minutos e 30 segundos. (Redação dada pelo Decreto-lei nº 9.666, de 1946)</p>
        
        <p id="art73§2.">§ 2º. Considera-se noturno, para os efeitos deste artigo, o trabalho executado entre as 22 horas de um dia e as 5 horas do dia seguinte. (Redação dada pelo Decreto-lei nº 9.666, de 1946)</p>
        
        <p id="art73§3.">§ 3º. O acréscimo, a que se refere o presente artigo, em se tratando de empresas que não mantêm, pela natureza de suas atividades, trabalho noturno habitual, será feito, tendo em vista os quantitativos pagos por trabalhos diurnos de natureza semelhante. Em relação às empresas cujo trabalho noturno decorra da natureza de suas atividades, o aumento será calculado sobre o salário mínimo geral vigente na região, não sendo devido quando exceder desse limite, já acrescido da percentagem. (Redação dada pelo Decreto-lei nº 9.666, de 1946)</p>
        
        <p id="art73§4.">§ 4º. As prorrogações do trabalho noturno aplica-se o disposto neste capítulo.</p>
        
        <p id="art73§4">§ 4º. Nos horários mistos, assim entendidos os que abrangem períodos diurnos e noturnos, aplica-se às horas de trabalho noturno o disposto neste artigo e seus parágrafos. (Redação dada pelo Decreto-lei nº 9.666, de 1946)</p>
        
        <p id="art73§5">§ 5º. Às prorrogações do trabalho noturno aplica-se o disposto neste capítulo. (Incluído pelo Decreto-lei nº 9.666, de 1946)</p>
        
        <h3 id="tituloiicapituloiisecaov">SEÇÃO V<br>
        DO QUADRO DE HORÁRIO</h3>
        
        <p id="art74."><span class="artigo">Art. 74.</span> O horário de trabalho será anotado em registro de empregados.</p>
        
        <p>§ 1º (Revogado).</p>
        
        <p>§ 2º. Para os estabelecimentos com mais de 20 (vinte) trabalhadores será obrigatória a anotação da hora de entrada e de saída, em registro manual, mecânico ou eletrônico, conforme instruções expedidas pela Secretaria Especial de Previdência e Trabalho do Ministério da Economia, permitida a pré-assinalação do período de repouso.</p>
        
        <p>§ 3º. Se o trabalho for executado fora do estabelecimento, o horário dos empregados constará do registro manual, mecânico ou eletrônico em seu poder, sem prejuízo do que dispõe o caput deste artigo.</p>
        
        <p>§ 4º. Fica permitida a utilização de registro de ponto por exceção à jornada regular de trabalho, mediante acordo individual escrito, convenção coletiva ou acordo coletivo de trabalho.</p>
        
        <h3 id="tituloiicapituloiisecaovi">SEÇÃO VI<br>
        DAS PENALIDADES</h3>
        
        <p id="art75"><span class="artigo">Art. 75.</span> Os infratores dos dispositivos do presente Capítulo incorrerão na multa de cinquenta a cinco mil cruzeiros, segundo a natureza da infração, sua extensão e a intenção de quem a praticou, aplicada em dobro no caso de reincidência e oposição à fiscalização ou desacato à autoridade.</p>
        
        <p id="art75p">Parágrafo único. São competentes para impor penalidades, no Distrito Federal, a autoridade de 1ª instância do Departamento Nacional do Trabalho e, nos Estados e no Território do Acre, as autoridades regionais do Ministério do Trabalho, Industria e Comercio.</p>
        
        <h2 id="tituloiicapituloiia">CAPÍTULO II-A<br>
        DO TELETRABALHO</h2>
        
        <p id="art75a"><span class="artigo">Art. 75-A.</span> A prestação de serviços pelo empregado em regime de teletrabalho observará o disposto neste Capítulo.</p>
        
        <p id="art75b.1"><span class="artigo">Art. 75-B.</span> Considera-se teletrabalho ou trabalho remoto a prestação de serviços fora das dependências do empregador, de maneira preponderante ou não, com a utilização de tecnologias de informação e de comunicação, que, por sua natureza, não configure trabalho externo.</p>
        
        <p>§ 1º. O comparecimento, ainda que de modo habitual, às dependências do empregador para a realização de atividades específicas que exijam a presença do empregado no estabelecimento não descaracteriza o regime de teletrabalho ou trabalho remoto.</p>
        
        <p>§ 2º. O empregado submetido ao regime de teletrabalho ou trabalho remoto poderá prestar serviços por jornada ou por produção ou tarefa.</p>
        
        <p>§ 3º. Na hipótese da prestação de serviços em regime de teletrabalho ou trabalho remoto por produção ou tarefa, não se aplicará o disposto no Capítulo II do Título II desta Consolidação.</p>
        
        <p>§ 4º. O regime de teletrabalho ou trabalho remoto não se confunde nem se equipara à ocupação de operador de telemarketing ou de teleatendimento.</p>
        
        <p>§ 5º. O tempo de uso de equipamentos tecnológicos e de infraestrutura necessária, bem como de softwares, de ferramentas digitais ou de aplicações de internet utilizados para o teletrabalho, fora da jornada de trabalho normal do empregado não constitui tempo à disposição ou regime de prontidão ou de sobreaviso, exceto se houver previsão em acordo individual ou em acordo ou convenção coletiva de trabalho.</p>
        
        <p>§ 6º. Fica permitida a adoção do regime de teletrabalho ou trabalho remoto para estagiários e aprendizes.</p>
        
        <p>§ 7º. Aos empregados em regime de teletrabalho aplicam-se as disposições previstas na legislação local e nas convenções e nos acordos coletivos de trabalho relativas à base territorial do estabelecimento de lotação do empregado.</p>
        
        <p>§ 8º. Ao contrato de trabalho do empregado admitido no Brasil que optar pela realização de teletrabalho fora do território nacional aplica-se a legislação brasileira, excetuadas as disposições constantes da Lei nº 7.064, de 6 de dezembro de 1982, salvo disposição em contrário estipulada entre as partes.</p>
        
        <p>§ 9º. Acordo individual poderá dispor sobre os horários e os meios de comunicação entre empregado e empregador, desde que assegurados os repousos legais.</p>
        
        <p><span class="artigo">Art. 75-C.</span> A prestação de serviços na modalidade de teletrabalho deverá constar expressamente do instrumento de contrato individual de trabalho.</p>
        
        <p id="art75c§1">§ 1º. Poderá ser realizada a alteração entre regime presencial e de teletrabalho desde que haja mútuo acordo entre as partes, registrado em aditivo contratual.</p>
        
        <p id="art75c§2">§ 2º. Poderá ser realizada a alteração do regime de teletrabalho para o presencial por determinação do empregador, garantido prazo de transição mínimo de quinze dias, com correspondente registro em aditivo contratual.</p>
        
        <p>§ 3º. O empregador não será responsável pelas despesas resultantes do retorno ao trabalho presencial, na hipótese de o empregado optar pela realização do teletrabalho ou trabalho remoto fora da localidade prevista no contrato, salvo disposição em contrário estipulada entre as partes.</p>
        
        <p id="art75d"><span class="artigo">Art. 75-D.</span> As disposições relativas à responsabilidade pela aquisição, manutenção ou fornecimento dos equipamentos tecnológicos e da infraestrutura necessária e adequada à prestação do trabalho remoto, bem como ao reembolso de despesas arcadas pelo empregado, serão previstas em contrato escrito.</p>
        
        <p id="art75dp">Parágrafo único. As utilidades mencionadas no caput deste artigo não integram a remuneração do empregado.</p>
        
        <p id="art75e"><span class="artigo">Art. 75-E.</span> O empregador deverá instruir os empregados, de maneira expressa e ostensiva, quanto às precauções a tomar a fim de evitar doenças e acidentes de trabalho.</p>
        
        <p id="art75ep">Parágrafo único. O empregado deverá assinar termo de responsabilidade comprometendo-se a seguir as instruções fornecidas pelo empregador.</p>
        
        <p><span class="artigo">Art. 75-F.</span> Os empregadores deverão conferir prioridade aos empregados com deficiência e aos empregados e empregadas com filhos ou criança sob guarda judicial até quatro anos de idade na alocação em vagas para atividades que possam ser efetuadas por meio do teletrabalho ou trabalho remoto. (Incluído pela Medida Provisória nº 1.108, de 2022)</p>
        
        <h2 id="tituloiicapituloiii">CAPÍTULO III<br>
        DO SALÁRIO MÍNIMO</h2>
        
        <h3 id="tituloiicapituloiiisecaoi">SEÇÃO I<br>
        DO CONCEITO</h3>
        
        <p id="art76"><span class="artigo">Art. 76.</span> Salário mínimo é a contraprestação mínima devida e paga diretamente pelo empregador a todo trabalhador, inclusive ao trabalhador rural, sem distinção de sexo, por dia normal de serviço, e capaz de satisfazer, em determinada época e região do País, as suas necessidades normais de alimentação, habitação, vestuário, higiene e transporte.</p>
        
        <p id="art77"><span class="artigo">Art. 77.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art78"><span class="artigo">Art. 78.</span> Quando o salário for ajustado por empreitada, ou convencionado por tarefa ou peça, será garantida ao trabalhador uma remuneração diária nunca inferior à do salário mínimo por dia normal da região, zona ou subzona.</p>
        
        <p id="art78p">Parágrafo único. Quando o salário-mínimo mensal do empregado a comissão ou que tenha direito a percentagem for integrado por parte fixa e parte variável, ser-lhe-á sempre garantido o salário-mínimo, vedado qualquer desconto em mês subsequente a título de compensação. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art80."><span class="artigo">Art. 80.</span> (Revogado pela Lei 10.097, de 2000)</p>
        
        <p id="art81"><span class="artigo">Art. 81.</span> O salário mínimo será determinado pela fórmula Sm = a + b + c + d + e, em que &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot; e &quot;e&quot; representam, respectivamente, o valor das despesas diárias com alimentação, habitação, vestuário, higiene e transporte necessários à vida de um trabalhador adulto.</p>
        
        <p id="art81§1">§ 1º. A parcela correspondente à alimentação terá um valor mínimo igual aos valores da lista de provisões, constantes dos quadros devidamente aprovados e necessários à alimentação diária do trabalhador adulto.</p>
        
        <p id="art81§2">§ 2º. Poderão ser substituídos pelos equivalentes de cada grupo, também mencionados nos quadros a que alude o parágrafo anterior, os alimentos, quando as condições da região, zona ou subzona o aconselharem, respeitados os valores nutritivos determinados nos mesmos quadros.</p>
        
        <p id="art81§3">§ 3º. O Ministério do Trabalho, Industria e Comercio fará, periodicamente, a revisão dos quadros a que se refere o § 1º. deste artigo.</p>
        
        <p id="art82"><span class="artigo">Art. 82.</span> Quando o empregador fornecer, in natura, uma ou mais das parcelas do salário mínimo, o salário em dinheiro será determinado pela fórmula Sd = Sm - P, em que Sd representa o salário em dinheiro, Sm o salário mínimo e P a soma dos valores daquelas parcelas na região, zona ou subzona.</p>
        
        <p id="art82p">Parágrafo único. O salário mínimo pago em dinheiro não será inferior a 30% (trinta por cento) do salário mínimo fixado para a região, zona ou subzona.</p>
        
        <p id="art83"><span class="artigo">Art. 83.</span> É devido o salário mínimo ao trabalhador em domicílio, considerado este como o executado na habitação do empregado ou em oficina de família, por conta de empregador que o remunere.</p>
        
        <h3 id="tituloiicapituloiiisecaoii">SEÇÃO II<br>
        DAS REGIÕES, ZONAS E SUBZONAS</h3>
        
        <p id="art84"><span class="artigo">Art. 84.</span> (Revogado pela Lei nº 13.467, de 2017)</p>
        
        <p id="art85"><span class="artigo">Art. 85.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art86"><span class="artigo">Art. 86.</span> (Revogado pela Lei nº 13.467, de 2017)</p>
        
        <h3 id="tituloiicapituloiiisecaoiii">SEÇÃO III<br>
        DA CONSTITUIÇÃO DAS COMISSÕES</h3>
        
        <p id="art87"><span class="artigo">Art. 87.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art88"><span class="artigo">Art. 88.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art89"><span class="artigo">Art. 89.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art90"><span class="artigo">Art. 90.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art91"><span class="artigo">Art. 91.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art92"><span class="artigo">Art. 92.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art93"><span class="artigo">Art. 93.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art94"><span class="artigo">Art. 94.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art95"><span class="artigo">Art. 95.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art96"><span class="artigo">Art. 96.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art97"><span class="artigo">Art. 97.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art98"><span class="artigo">Art. 98.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art99"><span class="artigo">Art. 99.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art100"><span class="artigo">Art. 100.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <h3 id="tituloiicapituloiiisecaoiv">SEÇÃO IV<br>
        DAS ATRIBUIÇÕES DAS COMISSÕES DE SALÁRIO MÍNIMO</h3>
        
        <p id="art101"><span class="artigo">Art. 101.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art102"><span class="artigo">Art. 102.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art103"><span class="artigo">Art. 103.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art104"><span class="artigo">Art. 104.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art105"><span class="artigo">Art. 105.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art106"><span class="artigo">Art. 106.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art107"><span class="artigo">Art. 107.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art108"><span class="artigo">Art. 108.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art109"><span class="artigo">Art. 109.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art110"><span class="artigo">Art. 110.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art111"><span class="artigo">Art. 111.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <h3 id="tituloiicapituloiiisecaov">SEÇÃO V<br>
        DA FIXAÇÃO DO SALÁRIO MÍNIMO</h3>
        
        <p id="art112"><span class="artigo">Art. 112.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art113"><span class="artigo">Art. 113.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art114"><span class="artigo">Art. 114.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art115"><span class="artigo">Art. 115.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art116"><span class="artigo">Art. 116.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <h3 id="tituloiicapituloiiisecaovi">SEÇÃO VI<br>
        DISPOSIÇÕES GERAIS</h3>
        
        <p id="art117"><span class="artigo">Art. 117.</span> Será nulo de pleno direito, sujeitando o empregador às sanções do art. 120, qualquer contrato ou convenção que estipule remuneração inferior ao salário mínimo estabelecido na região, zona ou subzona, em que tiver de ser cumprido.</p>
        
        <p id="art118"><span class="artigo">Art. 118.</span> O trabalhador a quem for pago salário inferior ao mínimo terá direito, não obstante qualquer contrato ou convenção em contrário, a reclamar do empregador o complemento de seu salário mínimo estabelecido na região, zona ou subzona, em que tiver de ser cumprido.</p>
        
        <p id="art119"><span class="artigo">Art. 119.</span> Prescreve em 2 (dois) anos a ação para reaver a diferença, contados, para cada pagamento, da data em que o mesmo tenha sido efetuado.</p>
        
        <p id="art927"><span class="artigo">Art. 120.</span> Aquele que infringir qualquer dispositivo concernente ao salário mínimo será passível da multa de cinquenta e dois mil cruzeiros, elevada ao dobro na reincidência.</p>
        
        <p id="art121"><span class="artigo">Art. 121.</span> (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art122"><span class="artigo">Art. 122.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art123"><span class="artigo">Art. 123.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art124"><span class="artigo">Art. 124.</span> A aplicação dos preceitos deste Capítulo não poderá, em caso algum, ser causa determinante da redução do salário.</p>
        
        <p id="art125"><span class="artigo">Art. 125.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art126"><span class="artigo">Art. 126.</span> O Ministro do Trabalho, Industria e Comercio, expedirá as instruções necessárias à fiscalização do salário mínimo, podendo cometer essa fiscalização a qualquer dos órgãos componentes do respectivo Ministério, e, bem assim, aos fiscais dos Institutos de Aposentadoria e Pensões na forma da legislação em vigor.</p>
        
        <p><span class="artigo">Art. 127.</span> (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art128"><span class="artigo">Art. 128.</span> (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <h2>CAPÍTULO IV<br>
        DAS FÉRIAS ANUAIS</h2>
        
        <h3 id="tituloiicapituloivsecaoi">SEÇÃO I<br>
        DO DIREITO A FÉRIAS E DA SUA DURAÇÃO</h3>
        
        <p id="art129"><span class="artigo">Art. 129.</span> Todo empregado terá direito anualmente ao gozo de um período de férias, sem prejuízo da remuneração. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art130"><span class="artigo">Art. 130.</span> Após cada período de 12 (doze) meses de vigência do contrato de trabalho, o empregado terá direito a férias, na seguinte proporção: (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art130i">I - 30 (trinta) dias corridos, quando não houver faltado ao serviço mais de 5 (cinco) vezes; (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art130ii">II - 24 (vinte e quatro) dias corridos, quando houver tido de 6 (seis) a 14 (quatorze) faltas; (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art130iii">III - 18 (dezoito) dias corridos, quando houver tido de 15 (quinze) a 23 (vinte e três) faltas; (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art130iv">IV - 12 (doze) dias corridos, quando houver tido de 24 (vinte e quatro) a 32 (trinta e duas) faltas. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art130§1">§ 1º. É vedado descontar, do período de férias, as faltas do empregado ao serviço. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art130§2">§ 2º. O período das férias será computado, para todos os efeitos, como tempo de serviço. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art130a"><span class="artigo">Art. 130-A.</span> (Revogado pela Lei nº 13.467, de 2017)</p>
        
        <p id="art131"><span class="artigo">Art. 131.</span> Não será considerada falta ao serviço, para os efeitos do artigo anterior, a ausência do empregado: (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art131i">I - nos casos referidos no art. 473; (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p>II - durante o licenciamento compulsório da empregada por motivo de maternidade ou aborto, observados os requisitos para percepção do salário-maternidade custeado pela Previdência Social;</p>
        
        <p>III - por motivo de acidente do trabalho ou enfermidade atestada pelo Instituto Nacional do Seguro Social - INSS, excetuada a hipótese do inciso IV do art. 133;</p>
        
        <p id="art131iv">IV - justificada pela empresa, entendendo-se como tal a que não tiver determinado o desconto do correspondente salário; (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art131v">V - durante a suspensão preventiva para responder a inquérito administrativo ou de prisão preventiva, quando for impronunciado ou absolvido; e (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art131vi">VI - nos dias em que não tenha havido serviço, salvo na hipótese do inciso III do art. 133. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art132"><span class="artigo">Art. 132.</span> O tempo de trabalho anterior à apresentação do empregado para serviço militar obrigatório será computado no período aquisitivo, desde que ele compareça ao estabelecimento dentro de 90 (noventa) dias da data em que se verificar a respectiva baixa. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art133"><span class="artigo">Art. 133.</span> Não terá direito a férias o empregado que, no curso do período aquisitivo: (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art133i">I - deixar o emprego e não for readmitido dentro de 60 (sessenta) dias subsequentes à sua saída; (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art133ii">II - permanecer em gozo de licença, com percepção de salários, por mais de 30 (trinta) dias; (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art133iii">III - deixar de trabalhar, com percepção do salário, por mais de 30 (trinta) dias, em virtude de paralisação parcial ou total dos serviços da empresa; e (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art133iv">IV - tiver percebido da Previdência Social prestações de acidente de trabalho ou de auxílio-doença por mais de 6 (seis) meses, embora descontínuos. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art133§1">§ 1º. A interrupção da prestação de serviços deverá ser anotada na Carteira de Trabalho e Previdência Social. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art133§2">§ 2º. Iniciar-se-á o decurso de novo período aquisitivo quando o empregado, após o implemento de qualquer das condições previstas neste artigo, retornar ao serviço. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art133§3">§ 3º. Para os fins previstos no inciso lIl deste artigo a empresa comunicará ao órgão local do Ministério do Trabalho, com antecedência mínima de 15 (quinze) dias, as datas de início e fim da paralisação total ou parcial dos serviços da empresa, e, em igual prazo, comunicará, nos mesmos termos, ao sindicato representativo da categoria profissional, bem como afixará aviso nos respectivos locais de trabalho.</p>
        
        <p id="art133§4">§ 4º (Vetado)</p>
        
        <h3 id="tituloiicapituloivsecaoii.></a><a name=tituloiicapituloivsecaoii">SEÇÃO II<br>
        DA CONCESSÃO E DA ÉPOCA DAS FÉRIAS</h3>
        
        <p id="art134"><span class="artigo">Art. 134.</span> As férias serão concedidas por ato do empregador, em um só período, nos 12 (doze) meses subsequentes à data em que o empregado tiver adquirido o direito. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art134§1.">§ 1º. Desde que haja concordância do empregado, as férias poderão ser usufruídas em até três períodos, sendo que um deles não poderá ser inferior a quatorze dias corridos e os demais não poderão ser inferiores a cinco dias corridos, cada um.</p>
        
        <p id="art134§2..">§ 2º (Revogado).</p>
        
        <p id="art134§3">§ 3º. É vedado o início das férias no período de dois dias que antecede feriado ou dia de repouso semanal remunerado.</p>
        
        <p id="art135"><span class="artigo">Art. 135.</span> A concessão das férias será participada, por escrito, ao empregado, com antecedência de, no mínimo, 30 (trinta) dias. Dessa participação o interessado dará recibo.</p>
        
        <p id="art135§1">§ 1º. O empregado não poderá entrar no gozo das férias sem que apresente ao empregador sua Carteira de Trabalho e Previdência Social, para que nela seja anotada a respectiva concessão. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art135§2">§ 2º. A concessão das férias será, igualmente, anotada no livro ou nas fichas de registro dos empregados. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art135§3">§ 3º. Nos casos em que o empregado possua a CTPS em meio digital, a anotação será feita nos sistemas a que se refere o § 7º. do art. 29 desta Consolidação, na forma do regulamento, dispensadas as anotações de que tratam os §§ 1º. e 2º. deste artigo.</p>
        
        <p id="art136"><span class="artigo">Art. 136.</span> A época da concessão das férias será a que melhor consulte os interesses do empregador. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art136§1.">§ 1º. Os membros de uma família, que trabalharem no mesmo estabelecimento ou empresa, terão direito a gozar férias no mesmo período, se assim o desejarem e se disto não resultar prejuízo para o serviço. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art136§2"></a>§ 2º. Aos menores de 18 anos e aos maiores de 50 anos de idade, as férias serão sempre concedidas de uma só vez. <a name="art136§2.">§ 2º. O empregado estudante, menor de 18 (dezoito) anos, terá direito a fazer coincidir suas férias com as férias escolares. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art137"><span class="artigo">Art. 137.</span> Sempre que as férias forem concedidas após o prazo de que trata o art. 134, o empregador pagará em dobro a respectiva remuneração. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art137§1">§ 1º. Vencido o mencionado prazo sem que o empregador tenha concedido as férias, o empregado poderá ajuizar reclamação pedindo a fixação, por sentença, da época de gozo das mesmas. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art137§2">§ 2º. A sentença cominará pena diária de 5% (cinco por cento) do salário mínimo da região, devida ao empregado até que seja cumprida. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art137§3">§ 3º. Cópia da decisão judicial transitada em julgado será remetida ao órgão local do Ministério do Trabalho, para fins de aplicação da multa de caráter administrativo. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <p id="art138"><span class="artigo">Art. 138.</span> Durante as férias, o empregado não poderá prestar serviços a outro empregador, salvo se estiver obrigado a fazê-lo em virtude de contrato de trabalho regularmente mantido com aquele. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977)</p>
        
        <h3 id="tituloiicapituloivsecaoiii></a><a name=tituloiicapituloivsecaoiii.">SEÇÃO III<br>
        DAS FÉRIAS COLETIVAS</h3>
        
        <p id="art139"><span class="artigo">Art. 139.</span> Poderão ser concedidas férias coletivas a todos os empregados de uma empresa ou de determinados estabelecimentos ou setores da empresa. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art139§1.">§ 1º. As férias poderão ser gozadas em 2 (dois) períodos anuais desde que nenhum deles seja inferior a 10 (dez) dias corridos. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art139§2.">§ 2º. Para os fins previstos neste artigo, o empregador comunicará ao órgão local do Ministério do Trabalho, com a antecedência mínima de 15 (quinze) dias, as datas de início e fim das férias, precisando quais os estabelecimentos ou setores abrangidos pela medida. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art139§3">§ 3º. Em igual prazo, o empregador enviará cópia da aludida comunicação aos sindicatos representativos da respectiva categoria profissional, e providenciará a afixação de aviso nos locais de trabalho. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art140"><span class="artigo">Art. 140.</span> Os empregados contratados há menos de 12 (doze) meses gozarão, na oportunidade, férias proporcionais, iniciando-se, então, novo período aquisitivo. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art141"><span class="artigo">Art. 141.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <h3 id="tituloiicapituloivsecaoiv.">SEÇÃO IV<br>
        DA REMUNERAÇÃO E DO ABONO DE FÉRIAS</h3>
        
        <p id="art142"><span class="artigo">Art. 142.</span> O empregado perceberá, durante as férias, a remuneração que lhe for devida na data da sua concessão. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art142§1">§ 1º. Quando o salário for pago por hora com jornadas variáveis, apurar-se-á a média do período aquisitivo, aplicando-se o valor do salário na data da concessão das férias. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art142§2">§ 2º. Quando o salário for pago por tarefa tomar-se-á por base a media da produção no período aquisitivo do direito a férias, aplicando-se o valor da remuneração da tarefa na data da concessão das férias. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art142§3">§ 3º. Quando o salário for pago por percentagem, comissão ou viagem, apurar-se-á a média percebida pelo empregado nos 12 (doze) meses que precederem à concessão das férias. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art142§4">§ 4º. A parte do salário paga em utilidades será computada de acordo com a anotação na Carteira de Trabalho e Previdência Social. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art142§5">§ 5º. Os adicionais por trabalho extraordinário, noturno, insalubre ou perigoso serão computados no salário que servirá de base ao cálculo da remuneração das férias. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art142§6">§ 6º. Se, no momento das férias, o empregado não estiver percebendo o mesmo adicional do período aquisitivo, ou quando o valor deste não tiver sido uniforme será computada a média duodecimal recebida naquele período, após a atualização das importâncias pagas, mediante incidência dos percentuais dos reajustamentos salariais supervenientes. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art143"><span class="artigo">Art. 143.</span> É facultado ao empregado converter 1/3 (um terço) do período de férias a que tiver direito em abono pecuniário, no valor da remuneração que lhe seria devida nos dias correspondentes. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977 (Vide Lei nº 7.923, de 1989)</p>
        
        <p id="art143§1">§ 1º. O abono de férias deverá ser requerido até 15 (quinze) dias antes do término do período aquisitivo. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art143§2">§ 2º. Tratando-se de férias coletivas, a conversão a que se refere este artigo deverá ser objeto de acordo coletivo entre o empregador e o sindicato representativo da respectiva categoria profissional, independendo de requerimento individual a concessão do abono. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art143§3">§ 3º (Revogado pela Lei nº 13.467, de 2017)</p>
        
        <p id="art144."><span class="artigo">Art. 144.</span> O abono de férias de que trata o artigo anterior, bem como o concedido em virtude de cláusula do contrato de trabalho, do regulamento da empresa, de convenção ou acordo coletivo, desde que não excedente de vinte dias do salário, não integrarão a remuneração do empregado para os efeitos da legislação do trabalho.</p>
        
        <p id="art145"><span class="artigo">Art. 145.</span> O pagamento da remuneração das férias e, se for o caso, o do abono referido no art. 143 serão efetuados até 2 (dois) dias antes do início do respectivo período. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art145p">Parágrafo único. O empregado dará quitação do pagamento, com indicação do início e do termo das férias. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <h3 id="tituloiicapituloivsecaov.">SEÇÃO V<br>
        DOS EFEITOS DA CESSAÇÃO DO CONTRATO DE TRABALHO</h3>
        
        <p id="art146"><span class="artigo">Art. 146.</span> Na cessação do contrato de trabalho, qualquer que seja a sua causa, será devida ao empregado a remuneração simples ou em dobro, conforme o caso, correspondente ao período de férias cujo direito tenha adquirido. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art146p">Parágrafo único. Na cessação do contrato de trabalho, após 12 (doze) meses de serviço, o empregado, desde que não haja sido demitido por justa causa, terá direito à remuneração relativa ao período incompleto de férias, de acordo com o art. 130, na proporção de 1/12 (um doze avos) por mês de serviço ou fração superior a 14 (quatorze) dias. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art147"><span class="artigo">Art. 147.</span> O empregado que for despedido sem justa causa, ou cujo contrato de trabalho se extinguir em prazo predeterminado, antes de completar 12 (doze) meses de serviço, terá direito à remuneração relativa ao período incompleto de férias, de conformidade com o disposto no artigo anterior. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art148"><span class="artigo">Art. 148.</span> A remuneração das férias, ainda quando devida após a cessação do contrato de trabalho, terá natureza salarial, para os efeitos do art. 449. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <h3 id="tituloiicapituloivsecaovi.">SEÇÃO VI<br>
        DO INÍCIO DA PRESCRIÇÃO</h3>
        
        <p id="art149"><span class="artigo">Art. 149.</span> A prescrição do direito de reclamar a concessão das férias ou o pagamento da respectiva remuneração é contada do término do prazo mencionado no art. 134 ou, se for o caso, da cessação do contrato de trabalho. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <h3 id="tituloiicapituloivsecaovii">SEÇÃO VII<br>
        DISPOSIÇÕES ESPECIAIS</h3>
        
        <p id="art150"><span class="artigo">Art. 150.</span> O tripulante que, por determinação do armador, for transferido para o serviço de outro, terá computado, para o efeito de gozo de férias, o tempo de serviço prestado ao primeiro, ficando obrigado a concedê-las o armador em cujo serviço ele se encontra na época de gozá-las. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art150§1">§ 1º. As férias poderão ser concedidas, a pedido dos interessados e com aquiescência do armador, parceladamente, nos portos de escala de grande estadia do navio, aos tripulantes ali residentes. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art150§2">§ 2º. Será considerada grande estadia a permanência no porto por prazo excedente de 6 (seis) dias. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art150§3">§ 3º. Os embarcadiços, para gozarem férias nas condições deste artigo, deverão pedi-las, por escrito, ao armador, antes do início da viagem, no porto de registro ou armação. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art150§4">§ 4º. O tripulante, ao terminar as férias, apresentar-se-á ao armador, que deverá designá-lo para qualquer de suas embarcações ou o adir a algum dos seus serviços terrestres, respeitadas a condição pessoal e a remuneração. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art150§5">§ 5º. Em caso de necessidade, determinada pelo interesse público, e comprovada pela autoridade competente, poderá o armador ordenar a suspensão das férias já iniciadas ou a iniciar-se, ressalvado ao tripulante o direito ao respectivo gozo posteriormente. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art150§6">§ 6º. O Delegado do Trabalho Marítimo poderá autorizar a acumulação de 2 (dois) períodos de férias do marítimo, mediante requerimento justificado: (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art150§6i">I - do sindicato, quando se tratar de sindicalizado; e (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art150§6ii">II - da empresa, quando o empregado não for sindicalizado. (Incluído pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art151"><span class="artigo">Art. 151.</span> Enquanto não se criar um tipo especial de caderneta profissional para os marítimos, as férias serão anotadas pela Capitania do Porto na caderneta-matrícula do tripulante, na página das observações. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <p id="art152"><span class="artigo">Art. 152.</span> A remuneração do tripulante, no gozo de férias, será acrescida da importância correspondente à etapa que estiver vencendo. (Redação dada pelo Decreto-lei nº 1.535, de 13.4.1977</p>
        
        <h3 id="tituloiicapituloivsecaoviii">SEÇÃO VIII<br>
        DAS PENALIDADES</h3>
        
        <p><span class="artigo">Art. 153.</span> As infrações ao disposto neste Capítulo serão punidas com multas de valor igual a 160 BTN por empregado em situação irregular.</p>
        
        <p id="art153p.></a>Parágrafo único. Em caso de reincidência, embaraço ou resistência à fiscalização, emprego de artifício ou simulação com o objetivo de fraudar a lei, a multa será aplicada em dobro.<a name=tituloiicapitulov.."></p>
        
        <h2>CAPÍTULO V<br>
        DA SEGURANÇA E DA MEDICINA DO TRABALHO</h2>
        
        <h3 id="tituloiicapitulovsecaoi..">SEÇÃO I<br>
        DISPOSIÇÕES GERAIS</h3>
        
        <p id="art154.."><span class="artigo">Art. 154.</span> A observância, em todos os locais de trabalho, do disposto neste Capitulo, não desobriga as empresas do cumprimento de outras disposições que, com relação à matéria, sejam incluídas em códigos de obras ou regulamentos sanitários dos Estados ou Municípios em que se situem os respectivos estabelecimentos, bem como daquelas oriundas de convenções coletivas de trabalho.</p>
        
        <p><span class="artigo">Art. 155.</span> Incumbe ao órgão de âmbito nacional competente em matéria de segurança e medicina do trabalho:</p>
        
        <p id="art155i">I - estabelecer, nos limites de sua competência, normas sobre a aplicação dos preceitos deste Capítulo, especialmente os referidos no art. 200;</p>
        
        <p id="art155ii">II - coordenar, orientar, controlar e supervisionar a fiscalização e as demais atividades relacionadas com a segurança e a medicina do trabalho em todo o território nacional, inclusive a Campanha Nacional de Prevenção de Acidentes do Trabalho;</p>
        
        <p id="art155iii">III - conhecer, em última instância, dos recursos, voluntários ou de ofício, das decisões proferidas pelos Delegados Regionais do Trabalho, em matéria de segurança e medicina do trabalho.</p>
        
        <p><span class="artigo">Art. 156.</span> Compete especialmente às Delegacias Regionais do Trabalho, nos limites de sua jurisdição:</p>
        
        <p id="art156i">I - promover a fiscalização do cumprimento das normas de segurança e medicina do trabalho;</p>
        
        <p id="art156ii">II - adotar as medidas que se tornem exigíveis, em virtude das disposições deste Capítulo, determinando as obras e reparos que, em qualquer local de trabalho, se façam necessárias;</p>
        
        <p id="art156iii">III - impor as penalidades cabíveis por descumprimento das normas constantes deste Capítulo, nos termos do art. 201.</p>
        
        <p><span class="artigo">Art. 157.</span> Cabe às empresas:</p>
        
        <p id="art157i">I - cumprir e fazer cumprir as normas de segurança e medicina do trabalho;</p>
        
        <p id="art157ii">II - instruir os empregados, através de ordens de serviço, quanto às precauções a tomar no sentido de evitar acidentes do trabalho ou doenças ocupacionais;</p>
        
        <p id="art157iii">III - adotar as medidas que lhes sejam determinadas pelo órgão regional competente;</p>
        
        <p id="art157iv">IV - facilitar o exercício da fiscalização pela autoridade competente.</p>
        
        <p><span class="artigo">Art. 158.</span> Cabe aos empregados: (Redação dada pela Lei nº 6.514, de 22.12.1977</p>
        
        <p id="art158i.">I - observar as normas de segurança e medicina do trabalho, inclusive as instruções de que trata o item II do artigo anterior;</p>
        
        <p id="art158ii.">Il - colaborar com a empresa na aplicação dos dispositivos deste Capítulo.</p>
        
        <p id="art158iii">III - conhecer, em segunda e última instância, dos recursos voluntários ou de ofício, das decisões proferidas pelos Delegados Regionais do Trabalho em matéria de segurança e higiene do trabalho. (Incluído pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art158p">Parágrafo único. Constitui ato faltoso do empregado a recusa injustificada:</p>
        
        <p id="art158pa" class="alinea">a) à observância das instruções expedidas pelo empregador na forma do item II do artigo anterior;</p>
        
        <p id="art158pb" class="alinea">b) ao uso dos equipamentos de proteção individual fornecidos pela empresa.</p>
        
        <p id="art159.0></a><span class="artigo">Art. 159.</span> Mediante convênio autorizado pelo Ministro do Trabalho, poderão ser delegadas a outros órgãos federais, estaduais ou municipais atribuições de fiscalização ou orientação às empresas quanto ao cumprimento das disposições constantes deste Capítulo.<a name=secaoii"></p>
        
        <h3>SEÇÃO II<br>
        DA INSPEÇÃO PRÉVIA E DO EMBARGO OU INTERDIÇÃO</h3>
        
        <p><span class="artigo">Art. 160.</span> Nenhum estabelecimento poderá iniciar suas atividades sem prévia inspeção e aprovação das respectivas instalações pela autoridade regional competente em matéria de segurança e medicina do trabalho.</p>
        
        <p id="art160§3">§ 1º. Nova inspeção deverá ser feita quando ocorrer modificação substancial nas instalações, inclusive equipamentos, que a empresa fica obrigada a comunicar, prontamente, à Delegacia Regional do Trabalho.</p>
        
        <p id="art160§4">§ 2º. É facultado às empresas solicitar prévia aprovação, pela Delegacia Regional do Trabalho, dos projetos de construção e respectivas instalações.</p>
        
        <p>Embargo ou interdição</p>
        
        <p><span class="artigo">Art. 161.</span> O Delegado Regional do Trabalho, à vista do laudo técnico do serviço competente que demonstre grave e iminente risco para o trabalhador, poderá interditar estabelecimento, setor de serviço, máquina ou equipamento, ou embargar obra, indicando na decisão, tomada com a brevidade que a ocorrência exigir, as providências que deverão ser adotadas para prevenção de infortúnios de trabalho.</p>
        
        <p id="art161§7">§ 1º. As autoridades federais, estaduais e municipais darão imediato apoio às medidas determinadas pelo Delegado Regional do Trabalho.</p>
        
        <p id="art161§8">§ 2º. A interdição ou embargo poderão ser requeridos pelo serviço competente da Delegacia Regional do Trabalho e, ainda, por agente da inspeção do trabalho ou por entidade sindical.</p>
        
        <p id="art161§9">§ 3º. Da decisão do Delegado Regional do Trabalho poderão os interessados recorrer, no prazo de 10 (dez) dias, para o órgão de âmbito nacional competente em matéria de segurança e medicina do trabalho, ao qual será facultado dar efeito suspensivo ao recurso.</p>
        
        <p id="art161§4">§ 4º. Responderá por desobediência, além das medidas penais cabíveis, quem, após determinada a interdição ou embargo, ordenar ou permitir o funcionamento do estabelecimento ou de um dos seus setores, a utilização de máquina ou equipamento, ou o prosseguimento de obra, se, em consequência, resultarem danos a terceiros.</p>
        
        <p id="art161§10">§ 5º. O Delegado Regional do Trabalho, independente de recurso, e após laudo técnico do serviço competente, poderá levantar a interdição.</p>
        
        <p id="art161§6"></a>§ 6º. Durante a paralisação dos serviços, em decorrência da interdição ou embargo, os empregados receberão os salários como se estivessem em efetivo exercício.<a name=secaoiii"></p>
        
        <h3>SEÇÃO III<br>
        DOS ÓRGÃOS DE SEGURANÇA E DE MEDICINA DO TRABALHO NAS EMPRESAS</h3>
        
        <p><span class="artigo">Art. 162.</span> As empresas, de acordo com normas a serem expedidas pelo Ministério do Trabalho, estarão obrigadas a manter serviços especializados em segurança e em medicina do trabalho.</p>
        
        <p id="art162p..">Parágrafo único. As normas a que se refere este artigo estabelecerão:</p>
        
        <p id="art162pa" class="alinea">a) classificação das empresas segundo o número de empregados e a natureza do risco de suas atividades;</p>
        
        <p id="art162pb" class="alinea">b) o número mínimo de profissionais especializados exigido de cada empresa, segundo o grupo em que se classifique, na forma da alínea anterior;</p>
        
        <p id="art162pc" class="alinea">c) a qualificação exigida para os profissionais em questão e o seu regime de trabalho;</p>
        
        <p id="art162pd" class="alinea">d) as demais características e atribuições dos serviços especializados em segurança e em medicina do trabalho, nas empresas.</p>
        
        <p><span class="artigo">Art. 163.</span> Será obrigatória a constituição de Comissão Interna de Prevenção de Acidentes e de Assédio (Cipa), em conformidade com instruções expedidas pelo Ministério do Trabalho e Previdência, nos estabelecimentos ou nos locais de obra nelas especificadas.</p>
        
        <p id="art163p.">Parágrafo único. O Ministério do Trabalho regulamentará as atribuições, a composição e o funcionamento das CIPA (s).</p>
        
        <p id="art164."><span class="artigo">Art. 164.</span> Cada CIPA será composta de representantes da empresa e dos empregados, de acordo com os critérios que vierem a ser adotados na regulamentação de que trata o parágrafo único do artigo anterior.</p>
        
        <p id="art164§1.">§ 1º. Os representantes dos empregadores, titulares e suplentes, serão por eles designados.</p>
        
        <p id="art164§2.">§ 2º. Os representantes dos empregados, titulares e suplentes, serão eleitos em escrutínio secreto, do qual participem, independentemente de filiação sindical, exclusivamente os empregados interessados.</p>
        
        <p id="art164§3">§ 3º. O mandato dos membros eleitos da CIPA terá a duração de 1 (um) ano, permitida uma reeleição.</p>
        
        <p id="art164§4">§ 4º. O disposto no parágrafo anterior não se aplicará ao membro suplente que, durante o seu mandato, tenha participado de menos da metade do número de reuniões da CIPA.</p>
        
        <p id="art164§5">§ 5º. O empregador designará, anualmente, dentre os seus representantes, o Presidente da CIPA e os empregados elegerão, dentre eles, o Vice-Presidente.</p>
        
        <p><span class="artigo">Art. 165.</span> Os titulares da representação dos empregados nas CIPA (s) não poderão sofrer despedida arbitrária, entendendo-se como tal a que não se fundar em motivo disciplinar, técnico, econômico ou financeiro.</p>
        
        <p id="art165p.></a>Parágrafo único. Ocorrendo a despedida, caberá ao empregador, em caso de reclamação à Justiça do Trabalho, comprovar a existência de qualquer dos motivos mencionados neste artigo, sob pena de ser condenado a reintegrar o empregado.<a name=secaoiv"></p>
        
        <h3>SEÇÃO IV<br>
        DO EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL</h3>
        
        <p id="art166."><span class="artigo">Art. 166.</span> A empresa é obrigada a fornecer aos empregados, gratuitamente, equipamento de proteção individual adequado ao risco e em perfeito estado de conservação e funcionamento, sempre que as medidas de ordem geral não ofereçam completa proteção contra os riscos de acidentes e danos à saúde dos empregados. Redistribuição de aprovações burocráticas emitidas pelo extinto Ministério do Trabalho</p>
        
        <p><span class="artigo">Art. 167.</span> O equipamento de proteção só poderá ser posto à venda ou utilizado com a indicação do Certificado de Aprovação do Ministério do Trabalho.</p>
        
        <h3 id="tituloiicapitulovsecaov">SEÇÃO V<br>
        DAS MEDIDAS PREVENTIVAS DE MEDICINA DO TRABALHO</h3>
        
        <p><span class="artigo">Art. 168.</span> Será obrigatório exame médico, por conta do empregador, nas condições estabelecidas neste artigo e nas instruções complementares a serem expedidas pelo Ministério do Trabalho:</p>
        
        <p id="art168i">I - a admissão;</p>
        
        <p id="art168ii">II - na demissão;</p>
        
        <p id="art168iii">III - periodicamente.</p>
        
        <p id="art168§1">§ 1º. O Ministério do Trabalho baixará instruções relativas aos casos em que serão exigíveis exames:</p>
        
        <p id="art168§1a" class="alinea">a) por ocasião da demissão;</p>
        
        <p id="art168§1b" class="alinea">b) complementares.</p>
        
        <p id="art168§2">§ 2º. Outros exames complementares poderão ser exigidos, a critério médico, para apuração da capacidade ou aptidão física e mental do empregado para a função que deva exercer.</p>
        
        <p id="art168§3">§ 3º. O Ministério do Trabalho estabelecerá, de acordo com o risco da atividade e o tempo de exposição, a periodicidade dos exames médicos.</p>
        
        <p id="art168§4">§ 4º. O empregador manterá, no estabelecimento, o material necessário à prestação de primeiros socorros médicos, de acordo com o risco da atividade.</p>
        
        <p id="art168§5"></a>§ 5º. O resultado dos exames médicos, inclusive o exame complementar, será comunicado ao trabalhador, observados os preceitos da ética médica.<a name="art168§6"></p>
        
        <p>§ 6º. Serão exigidos exames toxicológicos, previamente à admissão e por ocasião do desligamento, quando se tratar de motorista profissional, assegurados o direito à contraprova em caso de resultado positivo e a confidencialidade dos resultados dos respectivos exames.<a name="art168§7"></a></p>
        
        <p>§ 7º. Para os fins do disposto no § 6o, será obrigatório exame toxicológico com janela de detecção mínima de 90 (noventa) dias, específico para substâncias psicoativas que causem dependência ou, comprovadamente, comprometam a capacidade de direção, podendo ser utilizado para essa finalidade o exame toxicológico previsto na Lei no 9.503, de 23 de setembro de 1997. Código de Trânsito Brasileiro, desde que realizado nos últimos 60 (sessenta) dias.</p>
        
        <p><span class="artigo">Art. 169.</span> Será obrigatória a notificação das doenças profissionais e das produzidas em virtude de condições especiais de trabalho, comprovadas ou objeto de suspeita, de conformidade com as instruções expedidas pelo Ministério do Trabalho.<a name=secaovi></a></p>
        
        <h3>SEÇÃO VI<br>
        DAS EDIFICAÇÕES</h3>
        
        <p><span class="artigo">Art. 170.</span> As edificações deverão obedecer aos requisitos técnicos que garantam perfeita segurança aos que nelas trabalhem.</p>
        
        <p><span class="artigo">Art. 171.</span> Os locais de trabalho deverão ter, no mínimo, 3 (três) metros de pé-direito, assim considerada a altura livre do piso ao teto.</p>
        
        <p id="art171p">Parágrafo único. Poderá ser reduzido esse mínimo desde que atendidas as condições de iluminação e conforto térmico compatíveis com a natureza do trabalho, sujeitando-se tal redução ao controle do órgão competente em matéria de segurança e medicina do trabalho.</p>
        
        <p><span class="artigo">Art. 172.</span> 0s pisos dos locais de trabalho não deverão apresentar saliências nem depressões que prejudiquem a circulação de pessoas ou a movimentação de materiais.</p>
        
        <p><span class="artigo">Art. 173.</span> As aberturas nos pisos e paredes serão protegidas de forma que impeçam a queda de pessoas ou de objetos.</p>
        
        <p><span class="artigo">Art. 174.</span> As paredes, escadas, rampas de acesso, passarelas, pisos, corredores, coberturas e passagens dos locais de trabalho deverão obedecer às condições de segurança e de higiene do trabalho estabelecidas pelo Ministério do Trabalho e manter-se em perfeito estado de conservação e limpeza.<a name=secaovii></a></p>
        
        <h3>SEÇÃO VII<br>
        DA ILUMINAÇÃO</h3>
        
        <p><span class="artigo">Art. 175.</span> Em todos os locais de trabalho deverá haver iluminação adequada, natural ou artificial, apropriada à natureza da atividade.</p>
        
        <p id="art175§1">§ 1º. A iluminação deverá ser uniformemente distribuída, geral e difusa, a fim de evitar ofuscamento, reflexos incômodos, sombras e contrastes excessivos.</p>
        
        <p id="art175§2"></a>§ 2º. O Ministério do Trabalho estabelecerá os níveis mínimos de iluminamento a serem observados.<a name=secaoviii"></p>
        
        <h3>SEÇÃO VIII<br>
        DO CONFORTO TÉRMICO</h3>
        
        <p><span class="artigo">Art. 176.</span> Os locais de trabalho deverão ter ventilação natural, compatível com o serviço realizado.</p>
        
        <p id="art176p">Parágrafo único. A ventilação artificial será obrigatória sempre que a natural não preencha as condições de conforto térmico.</p>
        
        <p><span class="artigo">Art. 177.</span> Se as condições de ambiente se tornarem desconfortáveis, em virtude de instalações geradoras de frio ou de calor, será obrigatório o uso de vestimenta adequada para o trabalho em tais condições ou de capelas, anteparos, paredes duplas, isolamento térmico e recursos similares, de forma que os empregados fiquem protegidos contra as radiações térmicas.</p>
        
        <p><span class="artigo">Art. 178.</span> As condições de conforto térmico dos locais de trabalho devem ser mantidas dentro dos limites fixados pelo Ministério do Trabalho.<a name=secaoix></a></p>
        
        <h3>SEÇÃO IX<br>
        DAS INSTALAÇÕES ELÉTRICAS</h3>
        
        <p><span class="artigo">Art. 179.</span> O Ministério do Trabalho disporá sobre as condições de segurança e as medidas especiais a serem observadas relativamente a instalações elétricas, em qualquer das fases de produção, transmissão, distribuição ou consumo de energia.</p>
        
        <p><span class="artigo">Art. 180.</span> Somente profissional qualificado poderá instalar, operar, inspecionar ou reparar instalações elétricas.</p>
        
        <p><span class="artigo">Art. 181.</span> Os que trabalharem em serviços de eletricidade ou instalações elétricas devem estar familiarizados com os métodos de socorro a acidentados por choque elétrico.</p>
        
        <h3>SEÇÃO X<br>
        DA MOVIMENTAÇÃO, ARMAZENAGEM E MANUSEIO DE MATERIAIS</h3>
        
        <p><span class="artigo">Art. 182.</span> O Ministério do Trabalho estabelecerá normas sobre:</p>
        
        <p id="art182i">I - as precauções de segurança na movimentação de materiais nos locais de trabalho, os equipamentos a serem obrigatoriamente utilizados e as condições especiais a que estão sujeitas a operação e a manutenção desses equipamentos, inclusive exigências de pessoal habilitado;</p>
        
        <p id="art182ii">II - as exigências similares relativas ao manuseio e à armazenagem de materiais, inclusive quanto às condições de segurança e higiene relativas aos recipientes e locais de armazenagem e os equipamentos de proteção individual;</p>
        
        <p id="art182iii">III - a obrigatoriedade de indicação de carga máxima permitida nos equipamentos de transporte, dos avisos de proibição de fumar e de advertência quanto à natureza perigosa ou nociva à saúde das substâncias em movimentação ou em depósito, bem como das recomendações de primeiros socorros e de atendimento médico e símbolo de perigo, segundo padronização internacional, nos rótulos dos materiais ou substâncias armazenados ou transportados.</p>
        
        <p id="art182p">Parágrafo único. As disposições relativas ao transporte de materiais aplicam-se, também, no que couber, ao transporte de pessoas nos locais de trabalho.</p>
        
        <p><span class="artigo">Art. 183.</span> As pessoas que trabalharem na movimentação de materiais deverão estar familiarizados com os métodos raciocinais de levantamento de cargas.</p>
        
        <h3>SEÇÃO XI<br>
        DAS MÁQUINAS E EQUIPAMENTOS</h3>
        
        <p id="art184.">Art.184. As máquinas e os equipamentos deverão ser dotados de dispositivos de partida e parada e outros que se fizerem necessários para a prevenção de acidentes do trabalho, especialmente quanto ao risco de acionamento acidental.</p>
        
        <p id="art184p">Parágrafo único. É proibida a fabricação, a importação, a venda, a locação e o uso de máquinas e equipamentos que não atendam ao disposto neste artigo.</p>
        
        <p><span class="artigo">Art. 185.</span> Os reparos, limpeza e ajustes somente poderão ser executados com as máquinas paradas, salvo se o movimento for indispensável à realização do ajuste.</p>
        
        <p><span class="artigo">Art. 186.</span> O Ministério do Trabalho estabelecerá normas adicionais sobre proteção e medidas de segurança na operação de máquinas e equipamentos, especialmente quanto à proteção das partes móveis, distância entre estas, vias de acesso às máquinas e equipamentos de grandes dimensões, emprego de ferramentas, sua adequação e medidas de proteção exigidas quando motorizadas ou elétricas.</p>
        
        <h3>SEÇÃO XII<br>
        DAS CALDEIRAS, FORNOS E RECIPIENTES SOB PRESSÃO</h3>
        
        <p id="art187.">Art.187. As caldeiras, equipamentos e recipientes em geral que operam sob pressão deverão dispor de válvula e outros dispositivos de segurança, que evitem seja ultrapassada a pressão interna de trabalho compatível com a sua resistência.</p>
        
        <p id="art187p">Parágrafo único. O Ministério do Trabalho expedirá normas complementares quanto à segurança das caldeiras, fornos e recipientes sob pressão, especialmente quanto ao revestimento interno, à localização, à ventilação dos locais e outros meios de eliminação de gases ou vapores prejudiciais à saúde, e demais instalações ou equipamentos necessários à execução segura das tarefas de cada empregado.</p>
        
        <p id="art188.1"><span class="artigo">Art. 188.</span> As caldeiras serão periodicamente submetidas a inspeções de segurança, por engenheiro ou empresa especializada, inscritos no Ministério do Trabalho, de conformidade com as instruções que, para esse fim, forem expedidas.</p>
        
        <p id="art188§1">§ 1º. Toda caldeira será acompanhada de &quot;Prontuário&quot;, com documentação original do fabricante, abrangendo, no mínimo: especificação técnica, desenhos, detalhes, provas e testes realizados durante a fabricação e a montagem, características funcionais e a pressão máxima de trabalho permitida (PMTP), esta última indicada, em local visível, na própria caldeira.</p>
        
        <p id="art188§2">§ 2º. O proprietário da caldeira deverá organizar, manter atualizado e apresentar, quando exigido pela autoridade competente, o Registro de Segurança, no qual serão anotadas, sistematicamente, as indicações das provas efetuadas, inspeções, reparos e quaisquer outras ocorrências.</p>
        
        <p id="art188§4">§ 3º. Os projetos de instalação de caldeiras, fornos e recipientes sob pressão deverão ser submetidos à aprovação prévia do órgão regional competente em matéria de segurança do trabalho.</p>
        
        <h3>SEÇÃO XIII<br>
        DAS ATIVIDADES INSALUBRES OU PERIGOSAS</h3>
        
        <p><span class="artigo">Art. 189.</span> Serão consideradas atividades ou operações insalubres aquelas que, por sua natureza, condições ou métodos de trabalho, exponham os empregados a agentes nocivos à saúde, acima dos limites de tolerância fixados em razão da natureza e da intensidade do agente e do tempo de exposição aos seus efeitos.</p>
        
        <p><span class="artigo">Art. 190.</span> O Ministério do Trabalho aprovará o quadro das atividades e operações insalubres e adotará normas sobre os critérios de caracterização da insalubridade, os limites de tolerância aos agentes agressivos, meios de proteção e o tempo máximo de exposição do empregado a esses agentes.</p>
        
        <p id="art190p">Parágrafo único. As normas referidas neste artigo incluirão medidas de proteção do organismo do trabalhador nas operações que produzem aerodispersóides tóxicos, irritantes, alérgicos ou incômodos.</p>
        
        <p id="art191."><span class="artigo">Art. 191.</span> A eliminação ou a neutralização da insalubridade ocorrerá:</p>
        
        <p id="art191i">I - com a adoção de medidas que conservem o ambiente de trabalho dentro dos limites de tolerância;</p>
        
        <p id="art191ii">II - com a utilização de equipamentos de proteção individual ao trabalhador, que diminuam a intensidade do agente agressivo a limites de tolerância.</p>
        
        <p id="art191p">Parágrafo único. Caberá às Delegacias Regionais do Trabalho, comprovada a insalubridade, notificar as empresas, estipulando prazos para sua eliminação ou neutralização, na forma deste artigo.</p>
        
        <p><span class="artigo">Art. 192.</span> O exercício de trabalho em condições insalubres, acima dos limites de tolerância estabelecidos pelo Ministério do Trabalho, assegura a percepção de adicional respectivamente de 40% (quarenta por cento), 20% (vinte por cento) e 10% (dez por cento) do salário-mínimo da região, segundo se classifiquem nos graus máximo, médio e mínimo.</p>
        
        <p id="art193.."><span class="artigo">Art. 193.</span> São consideradas atividades ou operações perigosas, na forma da regulamentação aprovada pelo Ministério do Trabalho e Emprego, aquelas que, por sua natureza ou métodos de trabalho, impliquem risco acentuado em virtude de exposição permanente do trabalhador a:</p>
        
        <p id="art193i">I - inflamáveis, explosivos ou energia elétrica;</p>
        
        <p id="art193ii">II - roubos ou outras espécies de violência física nas atividades profissionais de segurança pessoal ou patrimonial.</p>
        
        <p>III – colisões, atropelamentos ou outras espécies de acidentes ou violências nas atividades profissionais dos agentes das autoridades de trânsito.</p>
        
        <p id="art193§1">§ 1º. O trabalho em condições de periculosidade assegura ao empregado um adicional de 30% (trinta por cento) sobre o salário sem os acréscimos resultantes de gratificações, prêmios ou participações nos lucros da empresa.</p>
        
        <p id="art193§2">§ 2º. O empregado poderá optar pelo adicional de insalubridade que porventura lhe seja devido.</p>
        
        <p id="art193§3">§ 3º. Serão descontados ou compensados do adicional outros da mesma natureza eventualmente já concedidos ao vigilante por meio de acordo coletivo.</p>
        
        <p id="art193§4">§ 4º. São também consideradas perigosas as atividades de trabalhador em motocicleta.</p>
        
        <p id="art194.">Art.194. O direito do empregado ao adicional de insalubridade ou de periculosidade cessará com a eliminação do risco à sua saúde ou integridade física, nos termos desta Seção e das normas expedidas pelo Ministério do Trabalho.</p>
        
        <p><span class="artigo">Art. 195.</span> A caracterização e a classificação da insalubridade e da periculosidade, segundo as normas do Ministério do Trabalho, far-se-ão através de perícia a cargo de Médico do Trabalho ou Engenheiro do Trabalho, registrados no Ministério do Trabalho.</p>
        
        <p id="art195§1.">§ 1º. É facultado às empresas e aos sindicatos das categorias profissionais interessadas requererem ao Ministério do Trabalho a realização de perícia em estabelecimento ou setor deste, com o objetivo de caracterizar e classificar ou delimitar as atividades insalubres ou perigosas.</p>
        
        <p id="art195§2.">§ 2º. Arguida em juízo insalubridade ou periculosidade, seja por empregado, seja por Sindicato em favor de grupo de associado, o juiz designará perito habilitado na forma deste artigo, e, onde não houver, requisitará perícia ao órgão competente do Ministério do Trabalho.</p>
        
        <p id="art195§3.">§ 3º. O disposto nos parágrafos anteriores não prejudica a ação fiscalizadora do Ministério do Trabalho, nem a realização ex officio da perícia.</p>
        
        <p id="art195§4">§ 4º. Antes de aceso um forno, serão tomadas precauções para evitar explosões ou retrocesso de chama. (Incluído pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art196.">Art.196. Os efeitos pecuniários decorrentes do trabalho em condições de insalubridade ou periculosidade serão devidos a contar da data da inclusão da respectiva atividade nos quadros aprovados pelo Ministro do Trabalho, respeitadas as normas do artigo 11.</p>
        
        <p><span class="artigo">Art. 197.</span> Os materiais e substâncias empregados, manipulados ou transportados nos locais de trabalho, quando perigosos ou nocivos à saúde, devem conter, no rótulo, sua composição, recomendações de socorro imediato e o símbolo de perigo correspondente, segundo a padronização internacional.</p>
        
        <p id="art197p.">Parágrafo único. Os estabelecimentos que mantenham as atividades previstas neste artigo afixarão, nos setores de trabalho atingidas, avisos ou cartazes, com advertência quanto aos materiais e substâncias perigosos ou nocivos à saúde.</p>
        
        <h3 id="tituloiicapitulovsecaoxiv">SEÇÃO XIV<br>
        DA PREVENÇÃO DA FADIGA</h3>
        
        <p><span class="artigo">Art. 198.</span> É de 60 kg (sessenta quilogramas) o peso máximo que um empregado pode remover individualmente, ressalvadas as disposições especiais relativas ao trabalho do menor e da mulher.</p>
        
        <p id="art198p">Parágrafo único. Não está compreendida na proibição deste artigo a remoção de material feita por impulsão ou tração de vagonetes sobre trilhos, carros de mão ou quaisquer outros aparelhos mecânicos, podendo o Ministério do Trabalho, em tais casos, fixar limites diversos, que evitem sejam exigidos do empregado serviços superiores às suas forças.</p>
        
        <p id="art199.">Art.199. Será obrigatória a colocação de assentos que assegurem postura correta ao trabalhador, capazes de evitar posições incômodas ou forçadas, sempre que a execução da tarefa exija que trabalhe sentado.</p>
        
        <p id="art199p">Parágrafo único. Quando o trabalho deva ser executado de pé, os empregados terão à sua disposição assentos para serem utilizados nas pausas que o serviço permitir.</p>
        
        <h3>SEÇÃO XV<br>
        DAS OUTRAS MEDIDAS ESPECIAIS DE PROTEÇÃO</h3>
        
        <p id="art200."><span class="artigo">Art. 200.</span> Cabe ao Ministério do Trabalho estabelecer disposições complementares às normas de que trata este Capítulo, tendo em vista as peculiaridades de cada atividade ou setor de trabalho, especialmente sobre:</p>
        
        <p id="art200i">I - medidas de prevenção de acidentes e os equipamentos de proteção individual em obras de construção, demolição ou reparos;</p>
        
        <p id="art200ii">II - depósitos, armazenagem e manuseio de combustíveis, inflamáveis e explosivos, bem como trânsito e permanência nas áreas respectivas;</p>
        
        <p id="art200iii">III - trabalho em escavações, túneis, galerias, minas e pedreiras, sobretudo quanto à prevenção de explosões, incêndios, desmoronamentos e soterramentos, eliminação de poeiras, gases, etc. e facilidades de rápida saída dos empregados;</p>
        
        <p id="art200iv">IV - proteção contra incêndio em geral e as medidas preventivas adequadas, com exigências ao especial revestimento de portas e paredes, construção de paredes contra-fogo, diques e outros anteparos, assim como garantia geral de fácil circulação, corredores de acesso e saídas amplas e protegidas, com suficiente sinalização;</p>
        
        <p id="art200v">V - proteção contra insolação, calor, frio, umidade e ventos, sobretudo no trabalho a céu aberto, com provisão, quanto a este, de água potável, alojamento profilaxia de endemias;(Incluído pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art200vi">VI - proteção do trabalhador exposto a substâncias químicas nocivas, radiações ionizantes e não ionizantes, ruídos, vibrações e trepidações ou pressões anormais ao ambiente de trabalho, com especificação das medidas cabíveis para eliminação ou atenuação desses efeitos limites máximos quanto ao tempo de exposição, à intensidade da ação ou de seus efeitos sobre o organismo do trabalhador, exames médicos obrigatórios, limites de idade controle permanente dos locais de trabalho e das demais exigências que se façam necessárias;</p>
        
        <p id="art200vii">VII - higiene nos locais de trabalho, com discriminação das exigências, instalações sanitárias, com separação de sexos, chuveiros, lavatórios, vestiários e armários individuais, refeitórios ou condições de conforto por ocasião das refeições, fornecimento de água potável, condições de limpeza dos locais de trabalho e modo de sua execução, tratamento de resíduos industriais;</p>
        
        <p id="art200viii">VIII - emprego das cores nos locais de trabalho, inclusive nas sinalizações de perigo.</p>
        
        <p id="art200p">Parágrafo único. Tratando-se de radiações ionizantes e explosivos, as normas a que se referem este artigo serão expedidas de acordo com as resoluções a respeito adotadas pelo órgão técnico.</p>
        
        <h3>SEÇÃO XVI<br>
        DAS PENALIDADES</h3>
        
        <p>Atualização do valor das multas</p>
        
        <p id="art201.1"><span class="artigo">Art. 201.</span> As infrações ao disposto neste Capítulo relativas à medicina do trabalho serão punidas com multa de 3 (três) a 30 (trinta) vezes o valor de referência previsto no artigo 2º, parágrafo único, da Lei nº 6.205, de 29 de abril de 1975, e as concernentes à segurança do trabalho com multa de 5 (cinco) a 50 (cinquenta) vezes o mesmo valor.</p>
        
        <p id="art201p">Parágrafo único. Em caso de reincidência, embaraço ou resistência à fiscalização, emprego de artifício ou simulação com o objetivo de fraudar a lei, a multa será aplicada em seu valor máximo.</p>
        
        <p id="art202."><span class="artigo">Art. 202.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art203."><span class="artigo">Art. 203.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art204"><span class="artigo">Art. 204.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art205."><span class="artigo">Art. 205.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art206."><span class="artigo">Art. 206.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art207."><span class="artigo">Art. 207.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art208."><span class="artigo">Art. 208.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art209."><span class="artigo">Art. 209.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art210."><span class="artigo">Art. 210.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art211."><span class="artigo">Art. 211.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art212."><span class="artigo">Art. 212.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art213."><span class="artigo">Art. 213.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art214."><span class="artigo">Art. 214.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art215.">Art. 215 (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art216."><span class="artigo">Art. 216.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art217."><span class="artigo">Art. 217.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art218."><span class="artigo">Art. 218.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art219."><span class="artigo">Art. 219.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art220."><span class="artigo">Art. 220.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art221."><span class="artigo">Art. 221.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art222."><span class="artigo">Art. 222.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <p id="art223."><span class="artigo">Art. 223.</span> (Revogado pela Lei nº 6.514, de 22.12.1977)</p>
        
        <h1>TÍTULO II-A<br>
        DO DANO EXTRAPATRIMONIAL</h1>
        
        <p id="art223a"><span class="artigo">Art. 223-A.</span> Aplicam-se à reparação de danos de natureza extrapatrimonial decorrentes da relação de trabalho apenas os dispositivos deste Título. (Vide ADI 6050) (Vide ADI 6069) (Vide ADI 6082)</p>
        
        <p id="art223b"><span class="artigo">Art. 223-B.</span> Causa dano de natureza extrapatrimonial a ação ou omissão que ofenda a esfera moral ou existencial da pessoa física ou jurídica, as quais são as titulares exclusivas do direito à reparação. (Vide ADI 6050) (Vide ADI 6069) (Vide ADI 6082)</p>
        
        <p id="art223c"><span class="artigo">Art. 223-C.</span> A honra, a imagem, a intimidade, a liberdade de ação, a autoestima, a sexualidade, a saúde, o lazer e a integridade física são os bens juridicamente tutelados inerentes à pessoa física.</p>
        
        <p id="art223d"><span class="artigo">Art. 223-D.</span> A imagem, a marca, o nome, o segredo empresarial e o sigilo da correspondência são bens juridicamente tutelados inerentes à pessoa jurídica.</p>
        
        <p id="art223e"><span class="artigo">Art. 223-E.</span> São responsáveis pelo dano extrapatrimonial todos os que tenham colaborado para a ofensa ao bem jurídico tutelado, na proporção da ação ou da omissão.</p>
        
        <p id="art223f"><span class="artigo">Art. 223-F.</span> A reparação por danos extrapatrimoniais pode ser pedida cumulativamente com a indenização por danos materiais decorrentes do mesmo ato lesivo.</p>
        
        <p id="art223f§1">§ 1º. Se houver cumulação de pedidos, o juízo, ao proferir a decisão, discriminará os valores das indenizações a título de danos patrimoniais e das reparações por danos de natureza extrapatrimonial.</p>
        
        <p id="art223f§2">§ 2º. A composição das perdas e danos, assim compreendidos os lucros cessantes e os danos emergentes, não interfere na avaliação dos danos extrapatrimoniais.</p>
        
        <p id="art223g"><span class="artigo">Art. 223-G.</span> Ao apreciar o pedido, o juízo considerará: (Vide ADI 6050) (Vide ADI 6069) (Vide ADI 6082)</p>
        
        <p id="art223gi">I - a natureza do bem jurídico tutelado;</p>
        
        <p id="art223gii">II - a intensidade do sofrimento ou da humilhação;</p>
        
        <p id="art223giii">III - a possibilidade de superação física ou psicológica;</p>
        
        <p id="art223giv">IV - os reflexos pessoais e sociais da ação ou da omissão;</p>
        
        <p id="art223gv">V - a extensão e a duração dos efeitos da ofensa;</p>
        
        <p id="art223gvi">VI - as condições em que ocorreu a ofensa ou o prejuízo moral;</p>
        
        <p id="art223gvii">VII - o grau de dolo ou culpa;</p>
        
        <p id="art223gviii">VIII - a ocorrência de retratação espontânea;</p>
        
        <p id="art223gix">IX - o esforço efetivo para minimizar a ofensa;</p>
        
        <p id="art223gx">X - o perdão, tácito ou expresso;</p>
        
        <p id="art223gxi">XI - a situação social e econômica das partes envolvidas;</p>
        
        <p id="art223gxii">XII - o grau de publicidade da ofensa.</p>
        
        <p id="art223g§1">§ 1º. Se julgar procedente o pedido, o juízo fixará a indenização a ser paga, a cada um dos ofendidos, em um dos seguintes parâmetros, vedada a acumulação: (Vide ADI 6050) (Vide ADI 6069) (Vide ADI 6082)</p>
        
        <p id="art223g§1i">I - ofensa de natureza leve, até três vezes o último salário contratual do ofendido; (Vide Processo 1004752-21.2020.5.02.0000) (Vide ADI 6050) (Vide ADI 6069) (Vide ADI 6082)</p>
        
        <p id="art223g§1ii">II - ofensa de natureza média, até cinco vezes o último salário contratual do ofendido; (Vide Processo 1004752-21.2020.5.02.0000) (Vide ADI 6050) (Vide ADI 6069) (Vide ADI 6082)</p>
        
        <p id="art223g§1iii">III - ofensa de natureza grave, até vinte vezes o último salário contratual do ofendido; (Vide Processo 1004752-21.2020.5.02.0000) (Vide ADI 6050) (Vide ADI 6069) (Vide ADI 6082)</p>
        
        <p id="art223g§1iv">IV - ofensa de natureza gravíssima, até cinquenta vezes o último salário contratual do ofendido. (Vide Processo 1004752-21.2020.5.02.0000) (Vide ADI 6050) (Vide ADI 6069) (Vide ADI 6082)</p>
        
        <p id="art223g§2">§ 2º. Se o ofendido for pessoa jurídica, a indenização será fixada com observância dos mesmos parâmetros estabelecidos no § 1º. deste artigo, mas em relação ao salário contratual do ofensor.</p>
        
        <p id="art223g§3">§ 3º. Na reincidência entre partes idênticas, o juízo poderá elevar ao dobro o valor da indenização.</p>
        
        <h1 id="tituloiii">TÍTULO III<br>
        DAS NORMAS ESPECIAIS DE TUTELA DO TRABALHO</h1>
        
        <h2 id="tituloiiicapituloi">CAPÍTULO I<br>
        DAS DISPOSIÇÕES ESPECIAIS SOBRE DURAÇÃO E CONDIÇÕES DE TRABALHO</h2>
        
        <h3 id="tituloiiicapituloisecaoi">SEÇÃO I<br>
        DOS BANCÁRIOS</h3>
        
        <p>Trabalho aos sábados em bancos</p>
        
        <p id="art928"><span class="artigo">Art. 224.</span> A duração normal do trabalho dos empregados em bancos, casas bancárias e Caixa Econômica Federal será de 6 (seis) horas continuas nos dias úteis, com exceção dos sábados, perfazendo um total de 30 (trinta) horas de trabalho por semana.</p>
        
        <p id="art224§1">§ 1º. A duração normal do trabalho estabelecida neste artigo ficará compreendida entre sete e vinte e duas horas, assegurando-se ao empregado, no horário diário, um intervalo de quinze minutos para alimentação. (Redação dada pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art224§2">§ 2º. As disposições deste artigo não se aplicam aos que exercem funções de direção, gerência, fiscalização, chefia e equivalentes ou que desempenhem outros cargos de confiança desde que o valor da gratificação não seja inferior a um terço do salário do cargo efetivo. (Redação dada pelo Decreto-Lei nº 754, de 1969)</p>
        
        <p id="art225"><span class="artigo">Art. 225.</span> A duração normal de trabalho dos bancários poderá ser excepcionalmente prorrogada até 8 (oito) horas diárias, não excedendo de 40 (quarenta) horas semanais, observados os preceitos gerais sobre a duração do trabalho.</p>
        
        <p id="art226"><span class="artigo">Art. 226.</span> O regime especial de 6 (seis) horas de trabalho também se aplica aos empregados de portaria e de limpeza, tais como porteiros, telefonistas de mesa, contínuos e serventes, empregados em bancos e casas bancárias.</p>
        
        <p id="art226p">Parágrafo único. A direção de cada banco organizará a escala de serviço do estabelecimento de maneira a haver empregados do quadro da portaria em função, meia hora antes e até meia hora após o encerramento dos trabalhos, respeitado o limite de 6 (seis) horas diárias.</p>
        
        <h3 id="tituloiiicapituloisecaoii">SEÇÃO II<br>
        DOS EMPREGADOS NOS SERVIÇOS DE TELEFONIA, DE TELEGRAFIA SUBMARINA E SUBFLUVIAL, DE RADIOTELEGRAFIA E RADIOTELEFONIA</h3>
        
        <p id="art227"><span class="artigo">Art. 227.</span> Nas empresas que explorem o serviço de telefonia, telegrafia submarina ou subfluvial, de radiotelegrafia ou de radiotelefonia, fica estabelecida para os respectivos operadores a duração máxima de seis horas contínuas de trabalho por dia ou 36 (trinta e seis) horas semanais.</p>
        
        <p id="art227§1">§ 1º. Quando, em caso de indeclinável necessidade, forem os operadores obrigados a permanecer em serviço além do período normal fixado neste artigo, a empresa pagar-lhes-á extraordinariamente o tempo excedente com acréscimo de 50% (cinquenta por cento) sobre o seu salário-hora normal.</p>
        
        <p id="art227§3">§ 2º. O trabalho aos domingos, feriados e dias santos de guarda será considerado extraordinário e obedecerá, quanto à sua execução e remuneração, ao que dispuserem empregadores e empregados em acordo, ou os respectivos sindicatos em contrato coletivo de trabalho.</p>
        
        <p id="art228"><span class="artigo">Art. 228.</span> Os operadores não poderão trabalhar, de modo ininterrupto, na transmissão manual, bem como na recepção visual, auditiva, com escrita manual ou datilográfica, quando a velocidade for superior a 25 (vinte e cinco) palavras por minuto.</p>
        
        <p id="art229"><span class="artigo">Art. 229.</span> Para os empregados sujeitos a horários variáveis, fica estabelecida a duração máxima de 7 (sete) horas diárias de trabalho e 17 (dezessete) horas de folga, deduzindo-se deste tempo 20 (vinte) minutos para descanso, de cada um dos empregados, sempre que se verificar um esforço contínuo de mais de 3 (três) horas.</p>
        
        <p id="art229§1">§ 1º. São considerados empregados sujeitos a horários variáveis, além dos operadores, cujas funções exijam classificação distinta, os que pertençam a seções de técnica, telefones, revisão, expedição, entrega e balcão.</p>
        
        <p id="art229§2">§ 2º. Quanto à execução e remuneração aos domingos, feriados e dias santos de guarda e às prorrogações de expediente, o trabalho dos empregados a que se refere o parágrafo anterior será regido pelo que se contém no § 1º. do art. 227 desta Seção.</p>
        
        <p id="art230"><span class="artigo">Art. 230.</span> A direção das empresas deverá organizar as turmas de empregados, para a execução dos seus serviços, de maneira que prevaleça sempre o revezamento entre os que exercem a mesma função, quer em escalas diurnas, quer em noturnas.</p>
        
        <p id="art230§1">§ 1º. Aos empregados que exerçam a mesma função será permitida, entre si, a troca de turmas, desde que isso não importe em prejuízo dos serviços, cujo chefe ou encarregado resolverá sobre a oportunidade ou possibilidade dessa medida, dentro das prescrições desta Seção.</p>
        
        <p id="art230§2">§ 2º. As empresas não poderão organizar horários que obriguem os empregados a fazer a refeição do almoço antes das 10 (dez) e depois das 13 (treze) horas e a de jantar antes das 16 (dezesseis) e depois das 19:30 (dezenove e trinta) horas.</p>
        
        <p id="art231"><span class="artigo">Art. 231.</span> As disposições desta Seção não abrangem o trabalho dos operadores de radiotelegrafia embarcados em navios ou aeronaves.</p>
        
        <h3 id="tituloiiicapituloisecaoiii">SEÇÃO III<br>
        DOS MÚSICOS PROFISSIONAIS</h3>
        
        <p id="art232"><span class="artigo">Art. 232.</span> Será de seis horas a duração de trabalho dos músicos em teatro e congêneres.</p>
        
        <p id="art232p">Parágrafo único. Toda vez que o trabalho contínuo em espetáculo ultrapassar de seis horas, o tempo de duração excedente será pago com um acréscimo de 25 % (vinte e cinco por cento) sobre o salário da hora normal.</p>
        
        <p id="art233"><span class="artigo">Art. 233.</span> A duração normal de trabalho dos músicos profissionais poderá ser elevada até oito horas diárias, observados os preceitos gerais sobre duração do trabalho.</p>
        
        <h3 id="tituloiiicapituloisecaoiv">SEÇÃO IV<br>
        DOS OPERADORES CINEMATOGRÁFICOS</h3>
        
        <p id="art234"><span class="artigo">Art. 234.</span> A duração normal do trabalho dos operadores cinematográficos e seus ajudantes não excederá de seis horas diárias, assim distribuídas:</p>
        
        <p id="art234a" class="alinea">a) 5 (cinco) horas consecutivas de trabalho em cabina, durante o funcionamento cinematográfico;</p>
        
        <p id="art234b" class="alinea">b) 1 (um) período suplementar, até o máximo de 1 (uma) hora para limpeza, lubrificação dos aparelhos de projeção, ou revisão de filmes.</p>
        
        <p id="art234p">Parágrafo único. Mediante remuneração adicional de 25% (vinte e cinco por cento) sobre o salário da hora normal e observado um intervalo de 2 (duas) horas para folga, entre o período a que se refere a alínea &quot;b&quot; deste artigo e o trabalho em cabina de que trata a alínea &quot;a&quot;, poderá o trabalho dos operadores cinematográficos e seus ajudantes ter a duração prorrogada por 2 (duas) horas diárias, para exibições extraordinárias.</p>
        
        <p id="art235"><span class="artigo">Art. 235.</span> Nos estabelecimentos cujo funcionamento normal seja noturno, será facultado aos operadores cinematográficos e seus ajudantes, mediante acordo ou contrato coletivo de trabalho e com um acréscimo de 25% (vinte e cinco por cento) sobre o salário da hora normal, executar o trabalho em sessões diurnas extraordinárias e, cumulativamente, nas noturnas, desde que isso se verifique até 3 (três) vezes por semana e entre as sessões diurnas e as noturnas haja o intervalo de 1 (uma) hora, no mínimo, de descanso.</p>
        
        <p id="art235§1">§ 1º. A duração de trabalho cumulativo a que alude o presente artigo não poderá exceder de 10 (dez) horas.</p>
        
        <p id="art235§2"></a>§ 2º. Em seguida a cada período de trabalho haverá um intervalo de repouso no mínimo de 12 (doze) horas. <a name=secaoiva">Seção IV-A</p>
        
        <p>Do Serviço do Motorista Profissional Empregado <br>
        (Redação dada pela Lei nº 13.103, de 2015)</p>
        
        <p id="art235a."><span class="artigo">Art. 235-A.</span> Os preceitos especiais desta Seção aplicam-se ao motorista profissional empregado:</p>
        
        <p id="art235ai">I - de transporte rodoviário coletivo de passageiros;</p>
        
        <p id="art235aii">II - de transporte rodoviário de cargas.</p>
        
        <p id="art235b."><span class="artigo">Art. 235-B.</span> São deveres do motorista profissional empregado:</p>
        
        <p id="art235bi">I - estar atento às condições de segurança do veículo;</p>
        
        <p id="art235bii">II - conduzir o veículo com perícia, prudência, zelo e com observância aos princípios de direção defensiva;</p>
        
        <p id="art235biii.></a>III - respeitar a legislação de trânsito e, em especial, as normas relativas ao tempo de direção e de descanso controlado e registrado na forma do previsto no art. 67-E da Lei no 9.503, de 23 de setembro de 1997. Código de Trânsito Brasileiro;<a name=art235biv"></p>
        
        <p>IV - zelar pela carga transportada e pelo veículo;</p>
        
        <p id="art235bvii.">VII - submeter-se a exames toxicológicos com janela de detecção mínima de 90 (noventa) dias e a programa de controle de uso de droga e de bebida alcoólica, instituído pelo empregador, com sua ampla ciência, pelo menos uma vez a cada 2 (dois) anos e 6 (seis) meses, podendo ser utilizado para esse fim o exame obrigatório previsto na Lei no 9.503, de 23 de setembro de 1997. Código de Trânsito Brasileiro, desde que realizado nos últimos 60 (sessenta) dias.</p>
        
        <p id="art235bp.">Parágrafo único. A recusa do empregado em submeter-se ao teste ou ao programa de controle de uso de droga e de bebida alcoólica previstos no inciso VII será considerada infração disciplinar, passível de penalização nos termos da lei.</p>
        
        <p id="art235c."><span class="artigo">Art. 235-C.</span> A jornada diária de trabalho do motorista profissional será de 8 (oito) horas, admitindo-se a sua prorrogação por até 2 (duas) horas extraordinárias ou, mediante previsão em convenção ou acordo coletivo, por até 4 (quatro) horas extraordinárias.</p>
        
        <p id="art235c§1.">§ 1º. Será considerado como trabalho efetivo o tempo em que o motorista empregado estiver à disposição do empregador, excluídos os intervalos para refeição, repouso e descanso e o tempo de espera. (Vide ADI 5322)</p>
        
        <p id="art235c§2.">§ 2º. Será assegurado ao motorista profissional empregado intervalo mínimo de 1 (uma) hora para refeição, podendo esse período coincidir com o tempo de parada obrigatória na condução do veículo estabelecido pela Lei no 9.503, de 23 de setembro de 1997. Código de Trânsito Brasileiro, exceto quando se tratar do motorista profissional enquadrado no § 5º. do art. 71 desta Consolidação.</p>
        
        <p id="art235c§3.">§ 3º. Dentro do período de 24 (vinte e quatro) horas, são asseguradas 11 (onze) horas de descanso, sendo facultados o seu fracionamento e a coincidência com os períodos de parada obrigatória na condução do veículo estabelecida pela Lei no 9.503, de 23 de setembro de 1997. Código de Trânsito Brasileiro, garantidos o mínimo de 8 (oito) horas ininterruptas no primeiro período e o gozo do remanescente dentro das 16 (dezesseis) horas seguintes ao fim do primeiro período. (Vide ADI 5322)</p>
        
        <p id="art235c§4.">§ 4º. Nas viagens de longa distância, assim consideradas aquelas em que o motorista profissional empregado permanece fora da base da empresa, matriz ou filial e de sua residência por mais de 24 (vinte e quatro) horas, o repouso diário pode ser feito no veículo ou em alojamento do empregador, do contratante do transporte, do embarcador ou do destinatário ou em outro local que ofereça condições adequadas.</p>
        
        <p id="art235c§5.">§ 5º. As horas consideradas extraordinárias serão pagas com o acréscimo estabelecido na Constituição Federal ou compensadas na forma do § 2º. do art. 59 desta Consolidação.</p>
        
        <p id="art235c§6."></a>§ 6º. À hora de trabalho noturno aplica-se o disposto no art. 73 desta Consolidação. <a name="art235c§7">§ 7º (VETADO).</p>
        
        <p id="art235c§8.">§ 8º. São considerados tempo de espera as horas em que o motorista profissional empregado ficar aguardando carga ou descarga do veículo nas dependências do embarcador ou do destinatário e o período gasto com a fiscalização da mercadoria transportada em barreiras fiscais ou alfandegárias, não sendo computados como jornada de trabalho e nem como horas extraordinárias. (Vide ADI 5322)</p>
        
        <p id="art235c§9.">§ 9º. As horas relativas ao tempo de espera serão indenizadas na proporção de 30% (trinta por cento) do salário-hora normal. (Vide ADI 5322)</p>
        
        <p id="art235c§10">§ 10. Em nenhuma hipótese, o tempo de espera do motorista empregado prejudicará o direito ao recebimento da remuneração correspondente ao salário-base diário.</p>
        
        <p id="art235c§11">§ 11. Quando a espera de que trata o § 8º. for superior a 2 (duas) horas ininterruptas e for exigida a permanência do motorista empregado junto ao veículo, caso o local ofereça condições adequadas, o tempo será considerado como de repouso para os fins do intervalo de que tratam os §§ 2º. e 3o, sem prejuízo do disposto no § 9o.</p>
        
        <p id="art235c§12">§ 12. Durante o tempo de espera, o motorista poderá realizar movimentações necessárias do veículo, as quais não serão consideradas como parte da jornada de trabalho, ficando garantido, porém, o gozo do descanso de 8 (oito) horas ininterruptas aludido no § 3o. (Vide ADI 5322)</p>
        
        <p id="art235c§13">§ 13. Salvo previsão contratual, a jornada de trabalho do motorista empregado não tem horário fixo de início, de final ou de intervalos.</p>
        
        <p id="art235c§14">§ 14. O empregado é responsável pela guarda, preservação e exatidão das informações contidas nas anotações em diário de bordo, papeleta ou ficha de trabalho externo, ou no registrador instantâneo inalterável de velocidade e tempo, ou nos rastreadores ou sistemas e meios eletrônicos, instalados nos veículos, normatizados pelo Contran, até que o veículo seja entregue à empresa.</p>
        
        <p id="art235c§15">§ 15. Os dados referidos no § 14 poderão ser enviados a distância, a critério do empregador, facultando-se a anexação do documento original posteriormente.</p>
        
        <p id="art235c§16">§ 16. Aplicam-se as disposições deste artigo ao ajudante empregado nas operações em que acompanhe o motorista.</p>
        
        <p id="art235c§17">§ 17. O disposto no caput deste artigo aplica-se também aos operadores de automotores destinados a puxar ou a arrastar maquinaria de qualquer natureza ou a executar trabalhos de construção ou pavimentação e aos operadores de tratores, colheitadeiras, autopropelidos e demais aparelhos automotores destinados a puxar ou a arrastar maquinaria agrícola ou a executar trabalhos agrícolas.</p>
        
        <p id="art235d."><span class="artigo">Art. 235-D.</span> Nas viagens de longa distância com duração superior a 7 (sete) dias, o repouso semanal será de 24 (vinte e quatro) horas por semana ou fração trabalhada, sem prejuízo do intervalo de repouso diário de 11 (onze) horas, totalizando 35 (trinta e cinco) horas, usufruído no retorno do motorista à base (matriz ou filial) ou ao seu domicílio, salvo se a empresa oferecer condições adequadas para o efetivo gozo do referido repouso. (Vide ADI 5322)</p>
        
        <p id="art235di.">I - revogado;</p>
        
        <p id="art235dii.">II - revogado;</p>
        
        <p id="art235diii.">III - revogado.</p>
        
        <p id="art235d§1">§ 1º. É permitido o fracionamento do repouso semanal em 2 (dois) períodos, sendo um destes de, no mínimo, 30 (trinta) horas ininterruptas, a serem cumpridos na mesma semana e em continuidade a um período de repouso diário, que deverão ser usufruídos no retorno da viagem. (Vide ADI 5322)</p>
        
        <p id="art235d§2">§ 2º. A cumulatividade de descansos semanais em viagens de longa distância de que trata o caput fica limitada ao número de 3 (três) descansos consecutivos. (Vide ADI 5322)</p>
        
        <p id="art235d§3">§ 3º. O motorista empregado, em viagem de longa distância, que ficar com o veículo parado após o cumprimento da jornada normal ou das horas extraordinárias fica dispensado do serviço, exceto se for expressamente autorizada a sua permanência junto ao veículo pelo empregador, hipótese em que o tempo será considerado de espera.</p>
        
        <p id="art235d§4">§ 4º. Não será considerado como jornada de trabalho, nem ensejará o pagamento de qualquer remuneração, o período em que o motorista empregado ou o ajudante ficarem espontaneamente no veículo usufruindo dos intervalos de repouso.</p>
        
        <p id="art235d§5">§ 5º. Nos casos em que o empregador adotar 2 (dois) motoristas trabalhando no mesmo veículo, o tempo de repouso poderá ser feito com o veículo em movimento, assegurado o repouso mínimo de 6 (seis) horas consecutivas fora do veículo em alojamento externo ou, se na cabine leito, com o veículo estacionado, a cada 72 (setenta e duas) horas. (Vide ADI 5322)</p>
        
        <p id="art235d§6">§ 6º. Em situações excepcionais de inobservância justificada do limite de jornada de que trata o art. 235-C, devidamente registradas, e desde que não se comprometa a segurança rodoviária, a duração da jornada de trabalho do motorista profissional empregado poderá ser elevada pelo tempo necessário até o veículo chegar a um local seguro ou ao seu destino.</p>
        
        <p id="art235d§7">§ 7º. Nos casos em que o motorista tenha que acompanhar o veículo transportado por qualquer meio onde ele siga embarcado e em que o veículo disponha de cabine leito ou a embarcação disponha de alojamento para gozo do intervalo de repouso diário previsto no § 3º. do art. 235-C, esse tempo será considerado como tempo de descanso.</p>
        
        <p id="art235d§8">§ 8º. Para o transporte de cargas vivas, perecíveis e especiais em longa distância ou em território estrangeiro poderão ser aplicadas regras conforme a especificidade da operação de transporte realizada, cujas condições de trabalho serão fixadas em convenção ou acordo coletivo de modo a assegurar as adequadas condições de viagem e entrega ao destino final.</p>
        
        <p id="art235e."><span class="artigo">Art. 235-E.</span> Para o transporte de passageiros, serão observados os seguintes dispositivos:</p>
        
        <p id="art235ei">I - é facultado o fracionamento do intervalo de condução do veículo previsto na Lei no 9.503, de 23 de setembro de 1997. Código de Trânsito Brasileiro, em períodos de no mínimo 5 (cinco) minutos;</p>
        
        <p id="art235eii">II - será assegurado ao motorista intervalo mínimo de 1 (uma) hora para refeição, podendo ser fracionado em 2 (dois) períodos e coincidir com o tempo de parada obrigatória na condução do veículo estabelecido pela Lei no 9.503, de 23 de setembro de 1997. Código de Trânsito Brasileiro, exceto quando se tratar do motorista profissional enquadrado no § 5º. do art. 71 desta Consolidação;</p>
        
        <p id="art235eiii">III - nos casos em que o empregador adotar 2 (dois) motoristas no curso da mesma viagem, o descanso poderá ser feito com o veículo em movimento, respeitando-se os horários de jornada de trabalho, assegurado, após 72 (setenta e duas) horas, o repouso em alojamento externo ou, se em poltrona correspondente ao serviço de leito, com o veículo estacionado. (Vide ADI 5322)</p>
        
        <p id="art235e§1."></a>§ 1º (Revogado). <a name="art235e§2">§ 2º (VETADO).</p>
        
        <p id="art235e§3.">§ 3º (Revogado).</p>
        
        <p id="art235e§4.">§ 4º (Revogado).</p>
        
        <p id="art235e§5.">§ 5º (Revogado).</p>
        
        <p id="art235e§6.">§ 6º (Revogado).</p>
        
        <p id="art235e§7."></a>§ 7º (Revogado). <a name="art235e§8">§ 8º (VETADO).</p>
        
        <p id="art235e§9.">§ 9º (Revogado).</p>
        
        <p id="art235e§10.">§ 10. (Revogado).</p>
        
        <p id="art235e§11.">§ 11. (Revogado).</p>
        
        <p id="art235e§12.">§ 12. (Revogado).</p>
        
        <p id="art235f."><span class="artigo">Art. 235-F.</span> Convenção e acordo coletivo poderão prever jornada especial de 12 (doze) horas de trabalho por 36 (trinta e seis) horas de descanso para o trabalho do motorista profissional empregado em regime de compensação.</p>
        
        <p id="art235g."><span class="artigo">Art. 235-G.</span> É permitida a remuneração do motorista em função da distância percorrida, do tempo de viagem ou da natureza e quantidade de produtos transportados, inclusive mediante oferta de comissão ou qualquer outro tipo de vantagem, desde que essa remuneração ou comissionamento não comprometa a segurança da rodovia e da coletividade ou possibilite a violação das normas previstas nesta Lei.</p>
        
        <p id="art235h."><span class="artigo">Art. 235-H.</span> (Revogado).</p>
        
        <h3 id="tituloiiicapituloisecaov">SEÇÃO V<br>
        DO SERVIÇO FERROVIÁRIO</h3>
        
        <p id="art236"><span class="artigo">Art. 236.</span> No serviço ferroviário - considerado este o de transporte em estradas de ferro abertas ao tráfego público, compreendendo a administração, construção, conservação e remoção das vias férreas e seus edifícios, obras-de-arte, material rodante, instalações complementares e acessórias, bem como o serviço de tráfego, de telegrafia, telefonia e funcionamento de todas as instalações ferroviárias - aplicam-se os preceitos especiais constantes desta Seção.</p>
        
        <p id="art237"><span class="artigo">Art. 237.</span> O pessoal a que se refere o artigo antecedente fica dividido nas seguintes categorias:</p>
        
        <p id="art237a" class="alinea">a) funcionários de alta administração, chefes e ajudantes de departamentos e seções, engenheiros residentes, chefes de depósitos, inspetores e demais empregados que exercem funções administrativas ou fiscalizadoras;</p>
        
        <p id="art237b" class="alinea">b) pessoal que trabalhe em lugares ou trechos determinados e cujas tarefas requeiram atenção constante; pessoal de escritório, turmas de conservação e construção da via permanente, oficinas e estações principais, inclusive os respectivos telegrafistas; pessoal de tração, lastro e revistadores;</p>
        
        <p id="art237c" class="alinea">c) das equipagens de trens em geral;</p>
        
        <p id="art237d" class="alinea">d) pessoal cujo serviço é de natureza intermitente ou de pouca intensidade, embora com permanência prolongada nos locais de trabalho; vigias e pessoal das estações do interior, inclusive os respectivos telegrafistas.</p>
        
        <p id="art238"><span class="artigo">Art. 238.</span> Será computado como de trabalho efetivo todo o tempo, em que o empregado estiver à disposição da estrada. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art238§1..">§ 1º. Nos serviços efetuados pelo pessoal da categoria c, não será considerado como de trabalho efetivo o tempo gasto em viagens do local ou para o local de terminação e início dos mesmos serviços. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art238§2..">§ 2º. Ao pessoal removido ou comissionado fora da sede será contado como de trabalho normal e efetivo o tempo gasto em viagens, sem direito à percepção de horas extraordinárias. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art238§3..">§ 3º. No caso das turmas de conservação da via permanente, o tempo efetivo do trabalho será contado desde a hora da saída da casa da turma até a hora em que cessar o serviço em qualquer ponto compreendido centro dos limites da respectiva turma. Quando o empregado trabalhar fora dos limites da sua turma, ser-lhe-á tambem computado como de trabalho efetivo o tempo gasto no percurso da volta a esses limites. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art238§4.">§ 4º. Para o pessoal da equipagem de trens, só será considerado esse trabalho efetivo, depois de chegado ao destino, o tempo em que o ferroviário estiver ocupado ou retido à disposição da Estrada. Quando, entre dois períodos de trabalho, não mediar intervalo superior a uma hora, será essa intervalo computado como de trabaIho efetivo. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art238§5.">§ 5º. O tempo concedido para refeição não se computa como de trabalho efetivo, senão para o pessoal da categoria c, quando as refeições forem tomadas em viagem ou nas estações durante as paradas. Esse tempo não será inferior a uma hora, exceto para o pessoal da referida categoria em serviço de trens. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art238§6.">§ 6º. No trabalho das turmas encarregadas da conservação de obras de arte, linhas telegráficas ou telefônicas e edifícios, não será contado, como de trabalho efetivo, o tempo de viagem para o local do serviço, sempre que não exceder de uma hora, seja para ida ou para volta, e a Estrada fornecer os meios de locomoção, computando-se, sempre o tempo excedente a esse limite. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p><span class="artigo">Art. 239.</span> Para o pessoal da categoria &quot;c&quot;, a prorrogação do trabalho independe de acordo ou contrato coletivo, não podendo, entretanto, exceder de 12 (doze) horas, pelo que as empresas organizarão, sempre que possível, os serviços de equipagens de trens com destacamentos nos trechos das linhas de modo a ser observada a duração normal de oito horas de trabalho. (Vide Decreto-Lei nº 6.361, de 1944)</p>
        
        <p id="art239§1">§ 1º. Para o pessoal sujeito ao regime do presente artigo, depois de cada jornada de trabalho haverá um repouso de 10 (dez) horas contínuas, no mínimo, observando-se, outrossim, o descanso semanal.</p>
        
        <p id="art239§2">§ 2º. Para o pessoal da equipagem de trens, a que se refere o presente artigo, quando a empresa não fornecer alimentação, em viagem, e hospedagem, no destino, concederá uma ajuda de custo para atender a tais despesas.</p>
        
        <p id="art239§3">§ 3º. As escalas do pessoal abrangido pelo presente artigo serão organizadas de modo que não caiba a qualquer empregado, quinzenalmente, um total de horas de serviço noturno superior às de serviço diurno.</p>
        
        <p id="art239§4">§ 4º. Os períodos de trabalho do pessoal a que alude o presente artigo serão registrados em cadernetas especiais, que ficarão sempre em poder do empregado, de acordo com o modelo aprovado pelo Ministro do Trabalho, Industria e Comercio.</p>
        
        <p id="art240"><span class="artigo">Art. 240.</span> Nos casos de urgência ou de acidente, capazes de afetar a segurança ou regularidade do serviço, poderá a duração do trabalho ser excepcionalmente elevada a qualquer número de horas, incumbindo à Estrada zelar pela incolumidade dos seus empregados e pela possibilidade de revezamento de turmas, assegurando ao pessoal um repouso correspondente e comunicando a ocorrência ao Ministério do Trabalho, Industria e Comercio, dentro de 10 (dez) dias da sua verificação.</p>
        
        <p id="art240p">Parágrafo único. Nos casos previstos neste artigo, a recusa, sem causa justificada, por parte de qualquer empregado, à execução de serviço extraordinário será considerada falta grave.</p>
        
        <p id="art241"><span class="artigo">Art. 241.</span> As horas excedentes das do horário normal de oito horas serão pagas como serviço extraordinário na seguinte base: as duas primeiras com o acréscimo de 25% (vinte e cinco por cento) sobre o salário-hora normal; as duas subsequentes com um adicional de 50% (cinquenta por cento) e as restantes com um adicional de 75% (setenta e cinco por cento). (Vide Decreto-Lei nº 6.361, de 1944)</p>
        
        <p id="art241p">Parágrafo único. Para o pessoal da categoria &quot;c&quot;, a primeira hora será majorada de 25% (vinte e cinco por cento), a segunda hora será paga com o acréscimo de 50% (cinquenta por cento) e as duas subsequentes com o de 60% (sessenta por cento), salvo caso de negligência comprovada.</p>
        
        <p id="art242"><span class="artigo">Art. 242.</span> As frações de meia hora superiores a 10 (dez) minutos serão computadas como meia hora.</p>
        
        <p id="art243"><span class="artigo">Art. 243.</span> Para os empregados de estações do interior, cujo serviço for de natureza intermitente ou de pouca intensidade, não se aplicam os preceitos gerais sobre duração do trabalho, sendo-lhes, entretanto, assegurado o repouso contínuo de dez horas, no mínimo, entre dois períodos de trabalho e descanso semanal.</p>
        
        <p id="art244"><span class="artigo">Art. 244.</span> As estradas de ferro poderão ter empregados extranumerários, de sobre-aviso e de prontidão, para executarem serviços imprevistos ou para substituições de outros empregados que faltem à escala organizada. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art244§1">§ 1º. Considera-se &quot;extranumerário&quot; o empregado não efetivo, candidato efetivação, que se apresentar normalmente ao servico, embora só trabalhe quando for necessário. O extranumerário só receberá os dias de trabalho efetivo. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p>§ 2º. Considera-se de &quot;sobre-aviso&quot; o empregado efetivo, que permanecer em sua própria casa, aguardando a qualquer momento o chamado para o serviço. Cada escala de &quot;sobre-aviso&quot; será, no máximo, de vinte e quatro horas, As horas de &quot;sobre-aviso&quot;, para todos os efeitos, serão contadas à razão de 1/3 (um terço) do salário normal. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art244§3">§ 3º. Considera-se de &quot;prontidão&quot; o empregado que ficar nas dependências da estrada, aguardando ordens. A escala de prontidão será, no máximo, de doze horas. As horas de prontidão serão, para todos os efeitos, contadas à razão de 2/3 (dois terços) do salário-hora normal. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art244§4">§ 4º. Quando, no estabelecimento ou dependência em que se achar o empregado, houver facilidade de alimentação, as doze horas do prontidão, a que se refere o parágrafo anterior, poderão ser contínuas. Quando não existir essa facilidade, depois de seis horas de prontidão, haverá sempre um intervalo de uma hora para cada refeição, que não será, nesse caso, computada como de serviço. (Restaurado pelo Decreto-lei n º 5, de 4.4.1966)</p>
        
        <p id="art245"><span class="artigo">Art. 245.</span> O horário normal de trabalho dos cabineiros nas estações de tráfego intenso não excederá de 8 (oito) horas e deverá ser dividido em 2 (dois) turnos com intervalo não inferior a 1 (uma) hora de repouso, não podendo nenhum turno ter duração superior a 5 (cinco) horas, com um período de descanso entre 2 (duas) jornadas de trabalho de 14 (quatorze) horas consecutivas.</p>
        
        <p id="art246"><span class="artigo">Art. 246.</span> O horário de trabalho dos operadores telegrafistas nas estações de tráfego intenso não excederá de 6 (seis) horas diárias.</p>
        
        <p id="art247"><span class="artigo">Art. 247.</span> As estações principais, estações de tráfego intenso e estações do interior serão classificadas para cada empresa pelo Departamento Nacional da Estradas de Ferro.</p>
        
        <h3 id="tituloiiicapituloisecaovi">SEÇÃO VI<br>
        DAS EQUIPAGENS DAS EMBARCAÇÕES DA MARINHA MERCANTE NACIONAL, DE NAVEGAÇÃO FLUVIAL E LACUSTRE, DO TRÁFEGO NOS PORTOS E DA PESCA</h3>
        
        <p id="art248"><span class="artigo">Art. 248.</span> Entre as horas 0 (zero) e 24 (vinte e quatro) de cada dia civil, o tripulante poderá ser conservado em seu posto durante 8 (oito) horas, quer de modo contínuo, quer de modo intermitente.</p>
        
        <p id="art248§1">§ 1º. A exigência do serviço contínuo ou intermitente ficará a critério do comandante e, neste último caso, nunca por período menor que 1 (uma) hora.</p>
        
        <p id="art248§2">§ 2º. Os serviços de quarto nas máquinas, passadiço, vigilância e outros que, consoante parecer médico, possam prejudicar a saúde do tripulante serão executados por períodos não maiores e com intervalos não menores de 4 (quatro) horas.</p>
        
        <p id="art249"><span class="artigo">Art. 249.</span> Todo o tempo de serviço efetivo, excedente de 8 (oito) horas, ocupado na forma do artigo anterior, será considerado de trabalho extraordinário, sujeito à compensação a que se refere o art. 250, exceto se se tratar de trabalho executado:</p>
        
        <p id="art249a" class="alinea">a) em virtude de responsabilidade pessoal do tripulante e no desempenho de funções de direção, sendo consideradas como tais todas aquelas que a bordo se achem constituídas em um único indivíduo com responsabilidade exclusiva e pessoal;</p>
        
        <p id="art249b" class="alinea">b) na iminência de perigo, para salvaguarda ou defesa da embarcação, dos passageiros, ou da carga, a juízo exclusivo do comandante ou do responsável pela segurança a bordo;</p>
        
        <p id="art249c" class="alinea">c) por motivo de manobras ou fainas gerais que reclamem a presença, em seus postos, de todo o pessoal de bordo;</p>
        
        <p id="art249d" class="alinea">d) na navegação lacustre e fluvial, quando se destina ao abastecimento do navio ou embarcação de combustível e rancho, ou por efeito das contingências da natureza da navegação, na transposição de passos ou pontos difíceis, inclusive operações de alívio ou transbordo de carga, para obtenção de calado menor para essa transposição.</p>
        
        <p id="art249§1">§ 1º. O trabalho executado aos domingos e feriados será considerado extraordinário, salvo se se destinar:</p>
        
        <p id="art249§1a" class="alinea">a) ao serviço de quartos e vigilância, movimentação das máquinas e aparelhos de bordo, limpeza e higiene da embarcação, preparo de alimentação da equipagem e dos passageiros, serviço pessoal destes e, bem assim, aos socorros de urgência ao navio ou ao pessoal;</p>
        
        <p id="art249§1b" class="alinea">b) ao fim da navegação ou das manobras para a entrada ou saída de portos, atracação, desatracação, embarque ou desembarque de carga e passageiros.</p>
        
        <p id="art249§2">§ 2º. Não excederá de 30 (trinta) horas semanais o serviço extraordinário prestado para o tráfego nos portos.</p>
        
        <p id="art250"><span class="artigo">Art. 250.</span> As horas de trabalho extraordinário serão compensadas, segundo a conveniência do serviço, por descanso em período equivalente no dia seguinte ou no subsequente dentro das do trabalho normal, ou no fim da viagem, ou pelo pagamento do salário correspondente.</p>
        
        <p id="art250p">Parágrafo único. As horas extraordinárias de trabalho são indivisíveis, computando-se a fração de hora como hora inteira.</p>
        
        <p id="art251"><span class="artigo">Art. 251.</span> Em cada embarcação haverá um livro em que serão anotadas as horas extraordinárias de trabalho de cada tripulante, e outro, do qual constarão, devidamente circunstanciadas, as transgressões dos mesmos tripulantes.</p>
        
        <p id="art251p">Parágrafo único. Os livros de que trata este artigo obedecerão a modelos organizados pelo Ministério do Trabalho, Industria e Comercio, serão escriturados em dia pelo comandante da embarcação e ficam sujeitos às formalidades instituídas para os livros de registro de empregados em geral.</p>
        
        <p id="art252"><span class="artigo">Art. 252.</span> Qualquer tripulante que se julgue prejudicado por ordem emanada de superior hierárquico poderá interpor recurso, em termos, perante a Delegacia do Trabalho Marítimo, por intermédio do respectivo comandante, o qual deverá encaminhá-lo com a respectiva informação dentro de 5 (cinco) dias, contados de sua chegada ao porto.</p>
        
        <h3 id="tituloiiicapituloisecaovii">SEÇÃO VII<br>
        DOS SERVIÇOS FRIGORÍFICOS</h3>
        
        <p id="art253"><span class="artigo">Art. 253.</span> Para os empregados que trabalham no interior das câmaras frigoríficas e para os que movimentam mercadorias do ambiente quente ou normal para o frio e vice-versa, depois de 1 (uma) hora e 40 (quarenta) minutos de trabalho contínuo, será assegurado um período de 20 (vinte) minutos de repouso, computado esse intervalo como de trabalho efetivo.</p>
        
        <p id="art253p">Parágrafo único. Considera-se artificialmente frio, para os fins do presente artigo, o que for inferior, nas primeira, segunda e terceira zonas climáticas do mapa oficial do Ministério do Trabalho, Industria e Comercio, a 15º (quinze graus), na quarta zona a 12º (doze graus), e nas quinta, sexta e sétima zonas a 10º (dez graus).</p>
        
        <h3 id="tituloiiicapituloisecaoviii">SEÇÃO VIII<br>
        DOS SERVIÇOS DE ESTIVA</h3>
        
        <p id="art254"><span class="artigo">Art. 254.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art255">Art. 255 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art256"><span class="artigo">Art. 256.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art257"><span class="artigo">Art. 257.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art258"><span class="artigo">Art. 258.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art259"><span class="artigo">Art. 259.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art260"><span class="artigo">Art. 260.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art261">Art. 261 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art262">Art. 262 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art263"><span class="artigo">Art. 263.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art264"><span class="artigo">Art. 264.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art265"><span class="artigo">Art. 265.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art266"><span class="artigo">Art. 266.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art267">Art. 267 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art268"><span class="artigo">Art. 268.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art269">Art. 269 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art270">Art. 270 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art271">Art. 271 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art272"><span class="artigo">Art. 272.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art273">Art. 273 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art274"><span class="artigo">Art. 274.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art275">Art. 275 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art276"><span class="artigo">Art. 276.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art277">Art. 277 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art278"><span class="artigo">Art. 278.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art279"><span class="artigo">Art. 279.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art280"><span class="artigo">Art. 280.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art281">Art. 281 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art282">Art. 282 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art283">Art. 283 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art284">Art. 284 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <h3 id="tituloiiicapituloisecaoix">SEÇÃO IX<br>
        DOS SERVIÇOS DE CAPATAZIAS NOS PORTOS</h3>
        
        <p id="art285"><span class="artigo">Art. 285.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art286">Art. 286 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art287">Art. 287 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art288">Art. 288 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art289">Art. 289 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art290">Art. 290 (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art291"><span class="artigo">Art. 291.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p id="art292"><span class="artigo">Art. 292.</span> (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <h3 id="tituloiiicapituloisecaox">SEÇÃO X<br>
        DO TRABALHO EM MINAS DE SUBSOLO</h3>
        
        <p id="art293"><span class="artigo">Art. 293.</span> A duração normal do trabalho efetivo para os empregados em minas no subsolo não excederá de 6 (seis) horas diárias ou de 36 (trinta e seis) semanais.</p>
        
        <p id="art294"><span class="artigo">Art. 294.</span> O tempo despendido pelo empregado da boca da mina ao local do trabalho e vice-versa será computado para o efeito de pagamento do salário.</p>
        
        <p id="art295"><span class="artigo">Art. 295.</span> A duração normal do trabalho efetivo no subsolo poderá ser elevada até 8 (oito) horas diárias ou 48 (quarenta e oito) semanais, mediante acordo escrito entre empregado e empregador ou contrato coletivo de trabalho, sujeita essa prorrogação à prévia licença da autoridade competente em matéria de higiene do trabalho.</p>
        
        <p id="art295p">Parágrafo único. A duração normal do trabalho efetivo no subsolo poderá ser inferior a 6 (seis) horas diárias, por determinação da autoridade de que trata este artigo, tendo em vista condições locais de insalubridade e os métodos e processos do trabalho adotado.</p>
        
        <p id="art296"><span class="artigo">Art. 296.</span> A remuneração da hora prorrogada será no mínimo de 25% (vinte e cinco por cento) superior à da hora normal e deverá constar do acordo ou contrato coletivo de trabalho.</p>
        
        <p id="art297"><span class="artigo">Art. 297.</span> Ao empregado no subsolo será fornecida, pelas empresas exploradoras de minas, alimentação adequada à natureza do trabalho, de acordo com as instruções estabelecidas pelo Serviço de Alimentação da Previdência Social e aprovadas pelo Ministério do Trabalho, Industria e Comercio.</p>
        
        <p id="art298"><span class="artigo">Art. 298.</span> Em cada período de 3 (três) horas consecutivas de trabalho, será obrigatória uma pausa de 15 (quinze) minutos para repouso, a qual será computada na duração normal de trabalho efetivo.</p>
        
        <p id="art299"><span class="artigo">Art. 299.</span> Quando nos trabalhos de subsolo ocorrer acontecimentos que possam comprometer a vida ou saúde do empregado, deverá a empresa comunicar o fato imediatamente à autoridade regional do trabalho, do Ministério do Trabalho, Industria e Comercio.</p>
        
        <p id="art300"><span class="artigo">Art. 300.</span> Sempre que, por motivo de saúde, for necessária a transferência do empregado, a juízo da autoridade competente em matéria da segurança e da medicina do trabalho, dos serviços no subsolo para os de superfície, é a empresa obrigada a realizar essa transferência, assegurando ao transferido a remuneração atribuída ao trabalhador de superfície em serviço equivalente, respeitada a capacidade profissional do interessado.</p>
        
        <p id="art300p.">Parágrafo único. No caso de recusa do empregado em atender a essa transferência, será ouvida a autoridade competente em matéria de higiene e segurança do trabalho, que decidirá a respeito.</p>
        
        <p id="art301"><span class="artigo">Art. 301.</span> O trabalho no subsolo somente será permitido a homens, com idade compreendida entre 21 (vinte e um) e 50 (cinquenta) anos, assegurada a transferência para a superfície nos termos previstos no artigo anterior.</p>
        
        <h3 id="tituloiiicapituloisecaoxi">SEÇÃO XI<br>
        DOS JORNALISTAS PROFISSIONAIS</h3>
        
        <p id="art302"><span class="artigo">Art. 302.</span> Os dispositivos da presente Seção se aplicam aos que nas empresas jornalísticas prestem serviços como jornalistas, revisores, fotógrafos, ou na ilustração, com as exceções nela previstas.</p>
        
        <p id="art301§1">§ 1º. Entende-se como jornalista o trabalhador intelectual cuja função se estende desde a busca de informações até a redação de notícias e artigos e a organização, orientação e direção desse trabalho.</p>
        
        <p id="art301§2">§ 2º. Consideram-se empresas jornalísticas, para os fins desta Seção, aquelas que têm a seu cargo a edição de jornais, revistas, boletins e periódicos, ou a distribuição de noticiário, e, ainda, a radiodifusão em suas seções destinadas à transmissão de notícias e comentários.</p>
        
        <p id="art303"><span class="artigo">Art. 303.</span> A duração normal do trabalho dos empregados compreendidos nesta Seção não deverá exceder de 5 (cinco) horas, tanto de dia como à noite.</p>
        
        <p>Simplificação da legislação trabalhista em setores específicos</p>
        
        <p id="art304"><span class="artigo">Art. 304.</span> Poderá a duração normal do trabalho ser elevada a 7 (sete) horas, mediante acordo escrito, em que se estipule aumento de ordenado, correspondente ao excesso do tempo de trabalho, em que se fixe um intervalo destinado a repouso ou a refeição.</p>
        
        <p id="art304p.1">Parágrafo único. Para atender a motivos de força maior, poderá o empregado prestar serviços por mais tempo do que aquele permitido nesta Seção. Em tais casos, porém o excesso deve ser comunicado à Divisão de Fiscalização do Departamento Nacional do Trabalho ou às Delegacias Regionais do Ministério do Trabalho, Industria e Comercio, dentro de 5 (cinco) dias, com a indicação expressa dos seus motivos.</p>
        
        <p id="art305"><span class="artigo">Art. 305.</span> As horas de serviço extraordinário, quer as prestadas em virtude de acordo, quer as que derivam das causas previstas no parágrafo único do artigo anterior, não poderão ser remuneradas com quantia inferior à que resulta do quociente da divisão da importância do salário mensal por 150 (cento e cinquenta) para os mensalistas, e do salário diário por 5 (cinco) para os diaristas, acrescido de, pelo menos, 25% (vinte e cinco por cento).</p>
        
        <p id="art306"><span class="artigo">Art. 306.</span> Os dispositivos dos arts. 303, 304 e 305 não se aplicam àqueles que exercem as funções de redator-chefe, secretário, subsecretário, chefe e subchefe de revisão, chefe de oficina, de ilustração e chefe de portaria.</p>
        
        <p id="art306p">Parágrafo único. Não se aplicam, do mesmo modo, os artigos acima referidos aos que se ocuparem unicamente em serviços externos.</p>
        
        <p id="art307"><span class="artigo">Art. 307.</span> A cada 6 (seis) dias de trabalho efetivo corresponderá 1 (um) dia de descanso obrigatório, que coincidirá com o domingo, salvo acordo escrito em contrário, no qual será expressamente estipulado o dia em que se deve verificar o descanso.</p>
        
        <p id="art308"><span class="artigo">Art. 308.</span> Em seguida a cada período diário de trabalho haverá um intervalo mínimo de 10 (dez) horas, destinado ao repouso.</p>
        
        <p id="art309"><span class="artigo">Art. 309.</span> Será computado como de trabalho efetivo o tempo em que o empregado estiver à disposição do empregador .</p>
        
        <p id="art310"><span class="artigo">Art. 310.</span> (Revogado pelo Decreto-Lei nº 972, de 17.10.1969)</p>
        
        <p id="art311"><span class="artigo">Art. 311.</span> Para o registro de que trata o artigo anterior, deve o requerente exibir os seguintes documentos:</p>
        
        <p id="art311a" class="alinea">a) prova de nacionalidade brasileira;</p>
        
        <p id="art311b" class="alinea">b) folha corrida;</p>
        
        <p id="art311c" class="alinea">c) prova de que não responde a processo ou não sofreu condenação por crime contra a segurança nacional;</p>
        
        <p id="art311d" class="alinea">d) carteira de trabalho e previdência social.</p>
        
        <p id="art311§1">§ 1º. Aos profissionais devidamente registrados será feita a necessária declaração na carteira de trabalho e previdência social.</p>
        
        <p id="art311§2">§ 2º. Aos novos empregados será concedido o prazo de 60 dias para a apresentação da carteira de trabalho e previdência social, fazendo-se o registro condicionado a essa apresentação e expedindo-se um certificado provisório para aquele período.</p>
        
        <p id="art312"><span class="artigo">Art. 312.</span> O registro dos diretores-proprietários de jornais será feito, no Distrito Federal e nos Estados, e independentemente da exigência constante do art. 311, letra &quot;d&quot;, da presente seção.</p>
        
        <p id="art312§2">§ 1º. A prova de profissão, apresentada pelo diretor-proprietário juntamente com os demais documentos exigidos, consistirá em uma certidão, fornecida nos Estados e Território do Acre, pelas Juntas Comerciais ou Cartórios, e, no Distrito Federal, pela seção competente do Departamento Nacional de Indústria e Comércio, do Ministério do Trabalho, Indústria e Comércio.</p>
        
        <p id="art312§3">§ 2º. Aos diretores-proprietários regularmente inscritos será fornecido um certificado do qual deverão constar o livro e a folha em que houver sido feito o registro.</p>
        
        <p id="art966"><span class="artigo">Art. 313.</span> Aqueles que, sem caráter profissional, exercerem atividades jornalísticas, visando fins culturais, científicos ou religiosos, poderão promover sua inscrição como jornalistas, na forma desta seção.</p>
        
        <p id="art313§4">§ 1º. As repartições competentes do Ministério do Trabalho, Indústria e Comércio manterão, para os fins do artigo anterior, um registro especial, anexo ao dos jornalistas profissionais, nele inscrevendo os que satisfaçam os requisitos das alíneas &quot;a&quot;, &quot;b&quot; e &quot;c&quot; do artigo 311 e apresentem prova do exercício de atividade jornalística não profissional, o que poderá ser feito por meio de atestado de associação cultural, científica ou religiosa idônea.</p>
        
        <p id="art313§5">§ 2º. O pedido de registro será submetido a despacho do ministro que, em cada caso, apreciará o valor da prova oferecida.</p>
        
        <p id="art313§6">§ 3º. O registro de que trata o presente artigo tem caráter puramente declaratório e não implica no reconhecimento de direitos que decorrem do exercício remunerado e profissional do jornalismo.</p>
        
        <p id="art314"><span class="artigo">Art. 314.</span> (Revogado pelo Decreto-Lei nº 972, de 17.10.1969)</p>
        
        <p id="art315"><span class="artigo">Art. 315.</span> O Governo Federal, de acordo com os governos estaduais, promoverá a criação de escolas de preparação ao jornalismo, destinadas à formação dos profissionais da imprensa.</p>
        
        <p id="art316"><span class="artigo">Art. 316.</span> A empresa jornalística que deixar de pagar pontualmente, e na forma acordada, os salários devidos a seus empregados, terá suspenso o seu funcionamento, até que se efetue o pagamento devido.</p>
        
        <p id="art316p">Parágrafo único. Para os efeitos do cumprimento deste artigo deverão os prejudicados reclamar contra a falta de pagamento perante a autoridade competente e, proferida a condenação, desde que a empresa não a cumpra, ou, em caso de recurso, não deposite o valor da indenização, a autoridade que proferir a condenação oficiará à autoridade competente, para a suspensão da circulação do jornal. Em igual pena de suspensão incorrerá a empresa que deixar de recolher as contribuições devidas às instituições de previdência social.</p>
        
        <h3 id="tituloiiicapituloisecaoxii">SEÇÃO XII<br>
        DOS PROFESSORES</h3>
        
        <p id="art317"><span class="artigo">Art. 317.</span> O exercício remunerado do magistério, em estabelecimentos particulares de ensino, exigirá apenas habilitação legal e registro no Ministério da Educação.</p>
        
        <p id="art318."><span class="artigo">Art. 318.</span> O professor poderá lecionar em um mesmo estabelecimento por mais de um turno, desde que não ultrapasse a jornada de trabalho semanal estabelecida legalmente, assegurado e não computado o intervalo para refeição. (Redação dada pela lei nº 13.415, de 2017)</p>
        
        <p id="art965"><span class="artigo">Art. 319.</span> Aos professores é vedado, aos domingos, a regência de aulas e o trabalho em exames.</p>
        
        <p id="art320"><span class="artigo">Art. 320.</span> A remuneração dos professores será fixada pelo número de aulas semanais, na conformidade dos horários.</p>
        
        <p id="art320§1">§ 1º. O pagamento far-se-á mensalmente, considerando-se para este efeito cada mês constituído de quatro semanas e meia.</p>
        
        <p id="art320§2">§ 2º. Vencido cada mês, será descontada, na remuneração dos professores, a importância correspondente ao número de aulas a que tiverem faltado.</p>
        
        <p id="art320§3">§ 3º. Não serão descontadas, no decurso de 9 (nove) dias, as faltas verificadas por motivo de gala ou de luto em consequência de falecimento do cônjuge, do pai ou mãe, ou de filho.</p>
        
        <p id="art321"><span class="artigo">Art. 321.</span> Sempre que o estabelecimento de ensino tiver necessidade de aumentar o número de aulas marcado nos horários, remunerará o professor, findo cada mês, com uma importância correspondente ao número de aulas excedentes.</p>
        
        <p id="art322"><span class="artigo">Art. 322.</span> No período de exames e no de férias escolares, é assegurado aos professores o pagamento, na mesma periodicidade contratual, da remuneração por eles percebida, na conformidade dos horários, durante o período de aulas.</p>
        
        <p id="art322§1">§ 1º. Não se exigirá dos professores, no período de exames, a prestação de mais de 8 (oito) horas de trabalho diário, salvo mediante o pagamento complementar de cada hora excedente pelo preço correspondente ao de uma aula.</p>
        
        <p id="art322§4">§ 2º. No período de férias, não se poderá exigir dos professores outro serviço senão o relacionado com a realização de exames.</p>
        
        <p id="art322§3">§ 3º. Na hipótese de dispensa sem justa causa, ao término do ano letivo ou no curso das férias escolares, é assegurado ao professor o pagamento a que se refere o caput deste artigo.</p>
        
        <p id="art323"><span class="artigo">Art. 323.</span> Não será permitido o funcionamento do estabelecimento particular de ensino que não remunere condignamente os seus professores, ou não lhes pague pontualmente a remuneração de cada mês.</p>
        
        <p id="art323p">Parágrafo único. Compete ao Ministério da Educação e Saúde fixar os critérios para a determinação da condigna remuneração devida aos professores bem como assegurar a execução do preceito estabelecido no presente artigo.</p>
        
        <p id="art324"><span class="artigo">Art. 324.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <h3 id="tituloiiicapituloisecaoxiii">SEÇÃO XIII<br>
        DOS QUÍMICOS</h3>
        
        <p id="art325"><span class="artigo">Art. 325.</span> É livre o exercício da profissão de químico em todo o território da República, observadas as condições de capacidade técnica e outras exigências previstas na presente Seção:</p>
        
        <p id="art325a" class="alinea">a) aos possuidores de diploma de químico, químico industrial, químico industrial agrícola ou engenheiro químico, concedido, no Brasil, por escola oficial ou oficialmente reconhecida;</p>
        
        <p id="art325b" class="alinea">b) aos diplomados em química por instituto estrangeiro de ensino superior, que tenham, de acordo com a lei e a partir de 14 de julho de 1934, revalidado os seus diplomas;</p>
        
        <p id="art325c" class="alinea">c) aos que, ao tempo da publicação do Decreto nº 24.693 de 12 de julho de 1934, se achavam no exercício efetivo de função pública ou particular, para a qual seja exigida a qualidade de químico, e que tenham requerido o respectivo registro até a extinção do prazo fixado pelo Decreto-Lei nº 2.298, de 10 de junho de 1940.</p>
        
        <p id="art325§1">§ 1º. Aos profissionais incluídos na alínea &quot;c&quot; deste artigo, se dará, para os efeitos da presente Seção, a denominação de &quot;licenciados&quot;.</p>
        
        <p id="art325§2">§ 2º. O livre exercício da profissão de que trata o presente artigo só é permitido a estrangeiros, quando compreendidos:</p>
        
        <p id="art325§2a" class="alinea">a) nas alíneas &quot;a&quot; e &quot;b&quot;, independentemente de revalidação do diploma, se exerciam, legitimamente, na República, a profissão de químico em a data da promulgação da Constituição de 1934;</p>
        
        <p id="art325§2b" class="alinea">b) na alínea &quot;b&quot;, se a seu favor militar a existência de reciprocidade internacional, admitida em lei, para o reconhecimento dos respectivos diplomas;</p>
        
        <p id="art325§2c" class="alinea">c) na alínea &quot;c&quot;, satisfeitas as condições nela estabelecidas.</p>
        
        <p id="art325§3">§ 3º. O livre exercício da profissão a brasileiros naturalizados está subordinado à prévia prestação do serviço militar, no Brasil.</p>
        
        <p id="art325§4">§ 4º. Só aos brasileiros natos é permitida a revalidação dos diplomas de químicos, expedidos por institutos estrangeiros de ensino superior.</p>
        
        <p id="art964"><span class="artigo">Art. 326.</span> Todo aquele que exercer ou pretender exercer as funções de químico é obrigado ao uso de Carteira de Trabalho e Previdência Social, devendo os profissionais que se encontrarem nas condições das alíneas &quot;a&quot; e &quot;b&quot; do art. 325, registrar os seus diplomas de acordo com a legislação vigente. (Vide Lei nº 2.800, de 18.6.1956)</p>
        
        <p id="art326§4">§ 1º. A requisição de Carteira de Trabalho e Previdência Social para uso dos químicos, além do disposto no capítulo &quot;Da Identificação Profissional&quot;, somente será processada mediante apresentação dos seguintes documentos que provem:</p>
        
        <p id="art326§1a0" class="alinea">a) ser o requerente brasileiro, nato ou naturalizado, ou estrangeiro;</p>
        
        <p id="art326§1b0" class="alinea">b) estar, se for brasileiro, de posse dos direitos civis e políticos;</p>
        
        <p id="art326§1c0" class="alinea">c) ter diploma de químico, químico industrial, químico industrial agrícola ou engenheiro químico, expedido por escola superior oficial ou oficializada;</p>
        
        <p id="art326§1d0" class="alinea">d) ter, se diplomado no estrangeiro, o respectivo diploma revalidado nos termos da lei;</p>
        
        <p id="art326§1e0" class="alinea">e) haver, o que for brasileiro naturalizado, prestado serviço militar no Brasil;</p>
        
        <p id="art326§1f0" class="alinea">f) achar-se o estrangeiro, ao ser promulgada a Constituição de 1934, exercendo legitimamente, na República, a profissão de químico, ou concorrer a seu favor a existência de reciprocidade internacional, admitida em lei, para o reconhecimento dos diplomas dessa especialidade.</p>
        
        <p id="art326§5">§ 2º. A requisição de que trata o parágrafo anterior deve ser acompanhada:</p>
        
        <p id="art326§2a0" class="alinea">a) do diploma devidamente autenticado no caso da alínea &quot;b&quot; do artigo precedente, e com as firmas reconhecidas no país de origem e na Secretaria de Estado das Relações Exteriores, ou da respectiva certidão, bem como do título de revalidação, ou certidão respectiva, de acordo com a legislação em vigor;</p>
        
        <p id="art326§2b0" class="alinea">b) do certificado ou atestado comprobatório de se achar o requerente na hipótese da alínea &quot;c&quot; do referido artigo, ao tempo da publicação do Decreto nº 24.693 de 12 de julho de 1934, no exercício efetivo de função pública, ou particular, para a qual seja exigida a qualidade de químico, devendo esses documentos ser autenticados pelo Delegado Regional do Trabalho, quando se referirem a requerentes moradores nas capitais dos Estados, ou coletor federal, no caso de residirem os interessados nos municípios do interior;</p>
        
        <p id="art326§2c0" class="alinea">c) de 3 (três) exemplares de fotografia exigida pelo art. 329 e de 1 (uma) folha com as declarações que devem ser lançadas na Carteira de Trabalho e Previdência Social de conformidade com o disposto nas alíneas do mesmo artigo e seu parágrafo único.</p>
        
        <p id="art326§6">§ 3º. Reconhecida a validade dos documentos apresentados, o Serviço de Identificação Profissional do Departamento Nacional do Trabalho, no Distrito Federal, ou os órgãos regionais do Ministério do Trabalho, Industria e Comercio, nos Estados e no Território do Acre, registrarão, em livros próprios, os documentos a que se refere a alínea &quot;c&quot; do § 1º. e, juntamente com a Carteira de Trabalho e Previdência Social emitida, os devolverão ao interessado.</p>
        
        <p id="art963"><span class="artigo">Art. 327.</span> Além dos emolumentos fixados no Capítulo &quot;Da Identificação Profissional&quot;, o registro do diploma fica sujeito à taxa de Cr$ 30,00 (trinta cruzeiros).</p>
        
        <p id="art328"><span class="artigo">Art. 328.</span> Só poderão ser admitidos a registro os diplomas, certificados de diplomas, cartas e outros títulos, bem como atestados e certificados que estiverem na devida forma e cujas firmas hajam sido regularmente reconhecidas por tabelião público e, sendo estrangeiros, pela Secretaria do Estado das Relações Exteriores, companhados estes últimos da respectiva tradução, feita por intérprete comercial brasileiro.</p>
        
        <p id="art328p0">Parágrafo único. O Departamento Nacional do Trabalho e as Delegacias Regionais do Ministério do Trabalho, Industria e Comercio, nos Estados, publicarão, periodicamente, a lista dos químicos registrados na forma desta Seção.</p>
        
        <p id="art962"><span class="artigo">Art. 329.</span> A cada inscrito, e como documento comprobatório do registro, será fornecida pelo Departamento Nacional do Trabalho, no Distrito Federal, ou pelas Delegacias Regionais, nos Estados e no Território do Acre, uma Carteira de Trabalho e Previdência Social numerada, que, além da fotografia, medindo 3 (três) por 4 (quatro) centímetros, tirada de frente, com a cabeça descoberta, e das impressões do polegar, conterá as declarações seguintes:</p>
        
        <p id="art329a0" class="alinea">a) o nome por extenso;</p>
        
        <p id="art329b0" class="alinea">b) a nacionalidade e, se estrangeiro, a circunstância de ser ou não naturalizado;</p>
        
        <p id="art329c0" class="alinea">c) a data e lugar do nascimento;</p>
        
        <p id="art329d0" class="alinea">d) a denominação da escola em que houver feito o curso;</p>
        
        <p id="art329e0" class="alinea">e) a data da expedição do diploma e o número do registro no Ministério do Trabalho, Industria e Comercio;</p>
        
        <p id="art329f0" class="alinea">f) a data da revalidação do diploma, se de instituto estrangeiro;</p>
        
        <p id="art329g0" class="alinea">g) a especificação, inclusive data, de outro título ou títulos de habilitação;</p>
        
        <p id="art329h0" class="alinea">h) a assinatura do inscrito.</p>
        
        <p id="art329p0">Parágrafo único. A carteira destinada aos profissionais a que se refere o § 1º. do art. 325 deverá, em vez das declarações indicadas nas alíneas &quot;d&quot;, &quot;e&quot; e &quot;f&quot; deste artigo, e além do título - licenciado - posto em destaque, conter a menção do título de nomeação ou admissão e respectiva data, se funcionário público, ou do atestado relativo ao exercício, na qualidade de químico, de um cargo em empresa particular, com designação desta e da data inicial do exercício.</p>
        
        <p id="art330.1"><span class="artigo">Art. 330.</span> A carteira profissional, expedida nos termos deste secção, é obrigatória para o exercício da profissão, substitui em todos os casos o diploma ou título e servirá de carteira de identidade. (Redação dada pelo Decreto-Lei nº 5.922, de 1943)</p>
        
        <p id="art331"><span class="artigo">Art. 331.</span> Nenhuma autoridade poderá receber impostos relativos ao exercício profissional de químico, senão à vista da prova de que o interessado se acha registrado de acordo com a presente Seção, e essa prova será também exigida para a realização de concursos periciais e todos os outros atos oficiais que exijam capacidade técnica de químico.</p>
        
        <p id="art332"><span class="artigo">Art. 332.</span> Quem, mediante anúncios, placas, cartões comerciais ou outros meios capazes de ser identificados, se propuser ao exercício da química, em qualquer dos seus ramos, sem que esteja devidamente registrado, fica sujeito às penalidades aplicáveis ao exercício ilegal da profissão.</p>
        
        <p id="art961"><span class="artigo">Art. 333.</span> Os profissionais a que se referem os dispositivos anteriores só poderão exercer legalmente as funções de químicos depois de satisfazerem as obrigações constantes do art. 330 desta Seção.</p>
        
        <p id="art334"><span class="artigo">Art. 334.</span> O exercício da profissão de químico compreende:</p>
        
        <p id="art334a" class="alinea">a) a fabricação de produtos e subprodutos químicos em seus diversos graus de pureza;</p>
        
        <p id="art334b" class="alinea">b) a análise química, a elaboração de pareceres, atestados e projetos de especialidade e sua execução, perícia civil ou judiciária sobre essa matéria, a direção e a responsabilidade de laboratórios ou departamentos químicos, de indústria e empresas comerciais;</p>
        
        <p id="art334c" class="alinea">c) o magistério nas cadeiras de química dos cursos superiores especializados em química;</p>
        
        <p id="art334d" class="alinea">d) a engenharia química.</p>
        
        <p id="art334§1">§ 1º. Aos químicos, químicos industriais e químicos industriais agrícolas que estejam nas condições estabelecidas no art. 325, alíneas &quot;a&quot; e &quot;b&quot;, compete o exercício das atividades definidas nos itens &quot;a&quot;, &quot;b&quot; e &quot;c&quot; deste artigo, sendo privativa dos engenheiros químicos a do item &quot;d&quot;.</p>
        
        <p id="art334§2">§ 2º. Aos que estiverem nas condições do art. 325, alíneas &quot;a&quot; e &quot;b&quot;, compete, como aos diplomados em medicina ou farmácia, as atividades definidas no art. 2º, alíneas &quot;d&quot;, &quot;e&quot; e &quot;f&quot; do Decreto nº 20.377, de 8 de setembro de 1931, cabendo aos agrônomos e engenheiros agrônomos as que se acham especificadas no art. 6º, alínea &quot;h&quot;, do Decreto nº 23.196, de 12 de outubro de 1933.</p>
        
        <p id="art335"><span class="artigo">Art. 335.</span> É obrigatória a admissão de químicos nos seguintes tipos de indústria:</p>
        
        <p id="art335a" class="alinea">a) de fabricação de produtos químicos;</p>
        
        <p id="art335b" class="alinea">b) que mantenham laboratório de controle químico;</p>
        
        <p id="art335c" class="alinea">c) de fabricação de produtos industriais que são obtidos por meio de reações químicas dirigidas, tais como: cimento, açúcar e álcool, vidro, curtume, massas plásticas artificiais, explosivos, derivados de carvão ou de petróleo, refinação de óleos vegetais ou minerais, sabão, celulose e derivados.</p>
        
        <p id="art336"><span class="artigo">Art. 336.</span> No preenchimento de cargos públicos, para os quais se faz mister a qualidade de químico, ressalvadas as especializações referidas no § 2º. do art. 334, a partir da data da publicação do Decreto nº 24.693, de 12 de julho de 1934, requer-se, como condição essencial, que os candidatos previamente hajam satisfeito as exigências do art. 333 desta Seção.</p>
        
        <p id="art337"><span class="artigo">Art. 337.</span> Fazem fé pública os certificados de análises químicas, pareceres, atestados, laudos de perícias e projetos relativos a essa especialidade, assinados por profissionais que satisfaçam as condições estabelecidas nas alíneas &quot;a&quot; e &quot;b&quot; do art. 325.</p>
        
        <p id="art338"><span class="artigo">Art. 338.</span> É facultado aos químicos que satisfizerem as condições constantes do art. 325, alíneas &quot;a&quot; e &quot;b&quot;, o ensino da especialidade a que se dedicarem, nas escolas superiores, oficiais ou oficializadas.</p>
        
        <p id="art338p">Parágrafo único. Na hipótese de concurso para o provimento de cargo ou emprego público, os químicos a que este artigo se refere terão preferência, em igualdade de condições.</p>
        
        <p id="art339"><span class="artigo">Art. 339.</span> O nome do químico responsável pela fabricação dos produtos de uma fábrica, usina ou laboratório deverá figurar nos respectivos rótulos, faturas e anúncios, compreendida entre estes últimos a legenda impressa em cartas e sobrecartas.</p>
        
        <p id="art340"><span class="artigo">Art. 340.</span> Somente os químicos habilitados, nos termos do art. 325, alíneas &quot;a&quot; e &quot;b&quot;, poderão ser nomeados ex officio para os exames periciais de fábricas, laboratórios e usinas e de produtos aí fabricados.</p>
        
        <p id="art340p">Parágrafo único. Não se acham compreendidos no artigo anterior os produtos farmacêuticos e os laboratórios de produtos farmacêuticos.</p>
        
        <p id="art341"><span class="artigo">Art. 341.</span> Cabe aos químicos habilitados, conforme estabelece o art. 325, alíneas &quot;a&quot; e &quot;b&quot;, a execução de todos os serviços que, não especificados no presente regulamento, exijam por sua natureza o conhecimento de química.</p>
        
        <p id="art342"><span class="artigo">Art. 342.</span> A fiscalização do exercício da profissão de químico incumbe ao Departamento Nacional do Trabalho no Distrito Federal e às autoridades regionais do Ministério do Trabalho, Industria e Comercio, nos Estados e Território do Acre.</p>
        
        <p id="art343"><span class="artigo">Art. 343.</span> São atribuições dos órgãos de fiscalização:</p>
        
        <p id="art343a" class="alinea">a) examinar os documentos exigidos para o registro profissional de que trata o art. 326 e seus §§ 1º. e 2º. e o art. 327, proceder à respectiva inscrição e indeferir o pedido dos interessados que não satisfizerem as exigências desta Seção;</p>
        
        <p id="art343b" class="alinea">b) registrar as comunicações e contratos, a que aludem o</p>
        
        <p>Art. 350 e seus parágrafos, e dar as respectivas baixas;</p>
        
        <p id="art343c" class="alinea">c) verificar o exato cumprimento das disposições desta Seção, realizando as investigações que forem necessárias, bem como o exame dos arquivos, livros de escrituração, folhas de pagamento, contratos e outros documentos de uso de firmas ou empresas industriais ou comerciais, em cujos serviços tome parte 1 (um) ou mais profissionais que desempenhem função para a qual se deva exigir a qualidade de químico.</p>
        
        <p id="art344"><span class="artigo">Art. 344.</span> Aos sindicatos de químicos devidamente reconhecidos é facultado auxiliar a fiscalização, no tocante à observação da alínea &quot;c&quot; do artigo anterior.</p>
        
        <p id="art345"><span class="artigo">Art. 345.</span> Verificando-se, pelo Ministério do Trabalho, Industria e Comercio, serem falsos os diplomas ou outros títulos dessa natureza, atestados, certificados e quaisquer documentos exibidos para os fins de que trata esta Seção, incorrerão os seus autores e cúmplices nas penalidades estabelecidas em lei.</p>
        
        <p id="art345p">Parágrafo único. A falsificação de diploma ou outros quaisquer títulos, uma vez verificada, será imediatamente comunicada ao Serviço de Identificação Profissional, do Departamento Nacional do Trabalho, remetendo-se-lhe os documentos falsificados, para instauração do processo que no caso couber.</p>
        
        <p id="art346"><span class="artigo">Art. 346.</span> Será suspenso do exercício de suas funções, independentemente de outras penas em que possa incorrer, o químico, inclusive o licenciado, que incidir em alguma das seguintes faltas:</p>
        
        <p id="art346a" class="alinea">a) revelar improbidade profissional, dar falso testemunho, quebrar o sigilo profissional e promover falsificações, referentes à prática de atos de que trata esta Seção;</p>
        
        <p id="art346b" class="alinea">b) concorrer com seus conhecimentos científicos para a prática de crime ou atentado contra a pátria, a ordem social ou a saúde pública;</p>
        
        <p id="art346c" class="alinea">c) deixar, no prazo marcado nesta Seção, de requerer a revalidação e registro do diploma estrangeiro, ou o seu registro profissional no Ministério do Trabalho, Industria e Comercio.</p>
        
        <p id="art346p">Parágrafo único. O tempo de suspensão a que alude este artigo variará entre 1 (um) mês e 1 (um) ano, a critério do Departamento Nacional do Trabalho, após processo regular, ressalvada a ação da justiça pública.</p>
        
        <p id="art929"><span class="artigo">Art. 347.</span> Aqueles que exercerem a profissão de químico sem ter preenchido as condições do art. 325 e suas alíneas, nem promovido o seu registro, nos termos do art. 326, incorrerão na multa de 200 cruzeiros a 5.000 cruzeiros, que será elevada ao dobro, no caso de reincidência.</p>
        
        <p id="art348"><span class="artigo">Art. 348.</span> Aos licenciados a que alude o § 1º. do art. 325 poderão, por ato do Departamento Nacional do Trabalho, sujeito à aprovação do Ministro, ser cassadas as garantias asseguradas por esta Seção, desde que interrompam, por motivo de falta prevista no art. 346, a função pública ou particular em que se encontravam por ocasião da publicação do Decreto nº 24.693, de 12 de julho de 1934.</p>
        
        <p id="art349"><span class="artigo">Art. 349.</span> O número de químicos estrangeiros a serviço de particulares, empresas ou companhias não poderá exceder de 1/3 (um terço) aos dos profissionais brasileiros compreendidos nos respectivos quadros.</p>
        
        <p id="art350"><span class="artigo">Art. 350.</span> O químico que assumir a direção técnica ou cargo de químico de qualquer usina, fábrica, ou laboratório indústrial ou de análise deverá, dentro de 24 (vinte e quatro) horas e por escrito, comunicar essa ocorrência ao órgão fiscalizador, contraindo, desde essa data, a responsabilidade da parte técnica referente à sua profissão, assim como a responsabilidade técnica dos produtos manufaturados.</p>
        
        <p id="art350§1">§ 1º. Firmando-se contrato entre o químico e o proprietário da usina fábrica, ou laboratório, será esse documento apresentado, dentro do prazo de 30 (trinta) dias, para registro, ao órgão fiscalizador.</p>
        
        <p id="art350§2">§ 2º. Comunicação idêntica à de que trata a primeira parte deste artigo fará o químico quando deixar a direção técnica ou o cargo de químico, em cujo exercício se encontrava, a fim de ressalvar a sua responsabilidade e fazer-se o cancelamento do contrato. Em caso de falência do estabelecimento, a comunicação será feita pela firma proprietária.</p>
        
        <h3 id="tituloiiicapituloisecaoxiv">SEÇÃO XIV<br>
        DAS PENALIDADES</h3>
        
        <p id="art930"><span class="artigo">Art. 351.</span> Os infratores dos dispositivos do presente Capítulo incorrerão na multa de cinquenta a cinco mil cruzeiros, segundo a natureza da infração, sua extensão e a intenção de quem a praticou, aplicada em dobro no caso de reincidência, oposição à fiscalização ou desacato à autoridade.</p>
        
        <p id="art351p0">Parágrafo único. São competentes para impor penalidades as autoridades de primeira instância incumbidas da fiscalização dos preceitos constantes do presente Capítulo.</p>
        
        <h2 id="tituloiiicapituloii">CAPÍTULO II<br>
        DA NACIONALIZAÇÃO DO TRABALHO</h2>
        
        <h3 id="tituloiiicapituloiisecaoi">SEÇÃO I<br>
        DA PROPORCIONALIDADE DE EMPREGADOS BRASILEIROS</h3>
        
        <p id="art352"><span class="artigo">Art. 352.</span> As empresas, individuais ou coletivas, que explorem serviços públicos dados em concessão, ou que exerçam atividades industriais ou comerciais, são obrigadas a manter, no quadro do seu pessoal, quando composto de 3 (três) ou mais empregados, uma proporção de brasileiros não inferior à estabelecida no presente Capítulo.</p>
        
        <p id="art352§1">§ 1º. Sob a denominação geral de atividades industriais e comerciais compreende-se, além de outras que venham a ser determinadas em portaria do Ministro do Trabalho, Industria e Comercio, as exercidas:</p>
        
        <p id="art352§1a" class="alinea">a) nos estabelecimentos industriais em geral;</p>
        
        <p id="art352§1b" class="alinea">b) nos serviços de comunicações, de transportes terrestres, marítimos, fluviais, lacustres e aéreos;</p>
        
        <p id="art352§1c" class="alinea">c) nas garagens, oficinas de reparos e postos de abastecimento de automóveis e nas cocheiras;</p>
        
        <p id="art352§1d" class="alinea">d) na indústria da pesca;</p>
        
        <p id="art352§1e" class="alinea">e) nos estabelecimentos comerciais em geral;</p>
        
        <p id="art352§1f" class="alinea">f) nos escritórios comerciais em geral;</p>
        
        <p id="art352§1g" class="alinea">g) nos estabelecimentos bancários, ou de economia coletiva, nas empresas de seguros e nas de capitalização;</p>
        
        <p id="art352§1h" class="alinea">h) nos estabelecimentos jornalísticos, de publicidade e de radiodifusão;</p>
        
        <p id="art352§1i" class="alinea">i) nos estabelecimentos de ensino remunerado, excluídos os que neles trabalhem por força de voto religioso;</p>
        
        <p id="art352§1j" class="alinea">j) nas drogarias e farmácias;</p>
        
        <p id="art352§1k" class="alinea">k) nos salões de barbeiro ou cabeleireiro e de beleza;</p>
        
        <p id="art352§1l" class="alinea">l) nos estabelecimentos de diversões públicas, excluídos os elencos teatrais, e nos clubes esportivos;</p>
        
        <p id="art352§1m" class="alinea">m) nos hotéis, restaurantes, bares e estabelecimentos congêneres;</p>
        
        <p id="art352§1n" class="alinea">n) nos estabelecimentos hospitalares e fisioterápicos cujos serviços sejam remunerados, excluídos os que neles trabalhem por força de voto religioso;</p>
        
        <p id="art352§1o" class="alinea">o) nas empresas de mineração;</p>
        
        <p id="art352§2">§ 2º. Não se acham sujeitas às obrigações da proporcionalidade as indústrias rurais, as que, em zona agrícola, se destinem ao beneficiamento ou transformação de produtos da região e as atividades industriais de natureza extrativa, salvo a mineração.</p>
        
        <p id="art353"><span class="artigo">Art. 353.</span> Equiparam-se aos brasileiros, para os fins deste Capítulo, ressalvado o exercício de profissões reservadas aos brasileiros natos ou aos brasileiros em geral, os estrangeiros que, residindo no País há mais de dez anos, tenham cônjuge ou filho brasileiro, e os portugueses.</p>
        
        <p id="art354"><span class="artigo">Art. 354.</span> A proporcionalidade será de 2/3 (dois terços) de empregados brasileiros, podendo, entretanto, ser fixada proporcionalidade inferior, em atenção às circunstâncias especiais de cada atividade, mediante ato do Poder Executivo, e depois de devidamente apurada pelo Departamento Nacional do Trabalho e pelo Serviço de Estatística de Previdência e Trabalho a insuficiência do número de brasileiros na atividade de que se tratar.</p>
        
        <p id="ART354P">Parágrafo único. A proporcionalidade é obrigatória não só em relação à totalidade do quadro de empregados, com as exceções desta Lei, como ainda em relação à correspondente folha de salários.</p>
        
        <p id="art355"><span class="artigo">Art. 355.</span> Consideram-se como estabelecimentos autônomos, para os efeitos da proporcionalidade a ser observada, as sucursais, filiais e agências em que trabalhem 3 (três) ou mais empregados.</p>
        
        <p id="art356"><span class="artigo">Art. 356.</span> Sempre que uma empresa ou indivíduo explore atividades sujeitas a proporcionalidades diferentes, observar-se-á, em relação a cada uma delas, a que lhe corresponder.</p>
        
        <p id="art357"><span class="artigo">Art. 357.</span> Não se compreendem na proporcionalidade os empregados que exerçam funções técnicas especializadas, desde que, a juízo do Ministério do Trabalho, Industria e Comercio, haja falta de trabalhadores nacionais.</p>
        
        <p id="art358"><span class="artigo">Art. 358.</span> Nenhuma empresa, ainda que não sujeita à proporcionalidade, poderá pagar a brasileiro que exerça função análoga, a juízo do Ministério do Trabalho, Industria e Comercio, à que é exercida por estrangeiro a seu serviço, salário inferior ao deste, excetuando-se os casos seguintes:</p>
        
        <p id="art358a" class="alinea">a) quando, nos estabelecimentos que não tenham quadros de empregados organizados em carreira, o brasileiro contar menos de 2 (dois) anos de serviço, e o estrangeiro mais de 2 (dois) anos;</p>
        
        <p id="art358b" class="alinea">b) quando, mediante aprovação do Ministério do Trabalho, Industria e Comercio, houver quadro organizado em carreira em que seja garantido o acesso por antiguidade;</p>
        
        <p id="art358c" class="alinea">c) quando o brasileiro for aprendiz, ajudante ou servente, e não o for o estrangeiro;</p>
        
        <p id="art358d" class="alinea">d) quando a remuneração resultar de maior produção, para os que trabalham à comissão ou por tarefa.</p>
        
        <p id="art358p">Parágrafo único. Nos casos de falta ou cessação de serviço, a dispensa do empregado estrangeiro deve preceder à de brasileiro que exerça função análoga.</p>
        
        <h3 id="tituloiiicapituloiisecaoii">SEÇÃO II<br>
        DAS RELAÇÕES ANUAIS DE EMPREGADOS</h3>
        
        <p id="art359"><span class="artigo">Art. 359.</span> Nenhuma empresa poderá admitir a seu serviço empregado estrangeiro sem que este exiba a carteira de identidade de estrangeiro devidamente anotada .</p>
        
        <p id="art359p">Parágrafo único. A empresa é obrigada a assentar no registro de empregados os dados referentes à nacionalidade de qualquer empregado estrangeiro e o número da respectiva carteira de identidade.</p>
        
        <p id="art959"><span class="artigo">Art. 360.</span> Toda empresa compreendida na enumeração do art. 352, § 1º, deste Capítulo, qualquer que seja o número de seus empregados, deve apresentar anualmente às repartições competentes do Ministério do Trabalho, de 2 de maio a 30 de junho, uma relação, em três vias, de todos os seus empregados, segundo o modelo que for expedido.</p>
        
        <p id="art360§4">§ 1º. As relações terão, na primeira via, o selo de três cruzeiros pela folha inicial e dois cruzeiros por folha excedente, além do selo do Fundo de Educação, e nelas será assinalada, em tinta vermelha, a modificação havida com referência à última relação apresentada. Se se tratar de nova empresa, a relação, encimada pelos dizeres - Primeira Relação - deverá ser feita dentro de 30 (trinta) dias de seu registro no Departamento Nacional da Indústria e Comércio ou repartições competentes.</p>
        
        <p id="art360§5">§ 2º. A entrega das relações far-se-á diretamente às repartições competentes do Ministério do Trabalho, Industria e Comercio, ou, onde não as houver, às Coletorias Federais, que as remeterão desde logo àquelas repartições. A entrega operar-se-á contra recibo especial, cuja exibição é obrigatória, em caso de fiscalização, enquanto não for devolvida ao empregador a via autenticada da declaração.</p>
        
        <p id="art360§6">§ 3º. Quando não houver empregado far-se-á declaração negativa.</p>
        
        <p id="art958"><span class="artigo">Art. 361.</span> Apurando-se, das relações apresentadas, qualquer infração, será concedido ao infrator o prazo de 10 (dez) dias para defesa, seguindo-se o despacho pela autoridade competente.</p>
        
        <p id="art362"><span class="artigo">Art. 362.</span> As repartições às quais competir a fiscalização do disposto no presente Capítulo manterão fichário especial de empresas, do qual constem as anotações referentes ao respectivo cumprimento, e fornecerão aos interessados as certidões de quitação que se tornarem necessárias, no prazo de 30 (trinta) dias, contados da data do pedido. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 1º. As certidões de quitação farão prova até 30 de setembro do ano seguinte àquele a que se referiram e estarão sujeitas à taxa correspondente a 1/10 (um décimo do salário-mínimo regional. Sem elas nenhum fornecimento ou contrato poderá ser feito com o Governo da União, dos Estados ou Municípios, ou com as instituições paraestatais a eles subordinadas, nem será renovada autorização a empresa estrangeira para funcionar no País. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967) (Vide Lei nº 8.522, de 1992) (Vide Medida Provisória nº 958, de 2020) (Vide Lei nº 13.999, de 2020) (Vide Medida Provisória nº 975, de 2020). (Vide Medida Provisória nº 1.028, de 2021). (Vide Lei nº 14.179, de 2021)</p>
        
        <p id="art362§2">§ 2º. A primeira via da relação, depois de considerada pela repartição fiscalizadora, será remetida anualmente ao Departamento Nacional de Mão-de-Obra (DNMO), como subsídio ao estudo das condições de mercado de trabalho, de um modo geral, e, em particular, no que se refere à mão-de-obra qualificada. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art362§3">§ 3º. A segunda via da relação será remetida pela repartição competente ao Serviço de Estatística da Previdência e Trabalho e a terceira via devolvida à empresa, devidamente autenticada. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <h3 id="tituloiiicapituloiisecaoiii">SEÇÃO III<br>
        DAS PENALIDADES</h3>
        
        <p id="art363"><span class="artigo">Art. 363.</span> O processo das infrações do presente Capítulo obedecerá ao disposto no Título &quot;Do Processo de Multas Administrativas&quot;, no que lhe for aplicável, com observância dos modelos de auto a serem expedidos.</p>
        
        <p id="art364"><span class="artigo">Art. 364.</span> As infrações do presente Capítulo serão punidas com a multa de cem a dez mil cruzeiros.</p>
        
        <p id="art364p">Parágrafo único. Em se tratando de empresa concessionária de serviço público, ou de sociedade estrangeira autorizada a funcionar no País, se a infratora, depois de multada, não atender afinal ao cumprimento do texto infringido poderá ser-lhe cassada a concessão ou autorização.</p>
        
        <h3 id="tituloiiicapituloiisecaoiv">SEÇÃO IV<br>
        DISPOSIÇÕES GERAIS</h3>
        
        <p id="art365"><span class="artigo">Art. 365.</span> O presente Capítulo não derroga as restrições vigentes quanto às exigências de nacionalidade brasileira para o exercício de determinadas profissões nem as que vigoram para as faixas de fronteiras, na conformidade da respectiva legislação.</p>
        
        <p id="art366"><span class="artigo">Art. 366.</span> Enquanto não for expedida a carteira a que se refere o art. 359 deste Capítulo, valerá, a título precário, como documento hábil, uma certidão, passada pelo serviço competente do Registro de Estrangeiros, provando que o empregado requereu sua permanência no País.</p>
        
        <p id="art367"><span class="artigo">Art. 367.</span> A redução a que se refere o art. 354, enquanto o Serviço de Estatística da Previdência e Trabalho não dispuser dos dados estatísticos necessários à fixação da proporcionalidade conveniente para cada atividade, poderá ser feita por ato do Ministro do Trabalho, Industria e Comercio, mediante representação fundamentada da associação sindical.</p>
        
        <p id="art367p">Parágrafo único. O Serviço de Estatística da Previdência e Trabalho deverá promover, e manter em dia, estudos necessários aos fins do presente Capítulo.</p>
        
        <h3 id="tituloiiicapituloiisecaov">SEÇÃO V<br>
        DAS DISPOSIÇÕES ESPECIAIS SOBRE A NACIONALIZAÇÃO DA MARINHA MERCANTE</h3>
        
        <p id="art368"><span class="artigo">Art. 368.</span> O comando de navio mercante nacional só poderá ser exercido por brasileiro nato.</p>
        
        <p id="art369"><span class="artigo">Art. 369.</span> A tripulação de navio ou embarcação nacional será constituída, pelo menos, de 2/3 (dois terços) de brasileiros natos.</p>
        
        <p id="art369p">Parágrafo único. O disposto neste artigo não se aplica aos navios nacionais de pesca, sujeitos a legislação específica.</p>
        
        <p id="art370"><span class="artigo">Art. 370.</span> As empresas de navegação organizarão as relações dos tripulantes das respectivas embarcações, enviando-as no prazo a que se refere a Seção Il deste Capítulo à Delegacia do Trabalho Marítimo onde as mesmas tiverem sede.</p>
        
        <p id="art370p">Parágrafo único. As relações a que alude o presente artigo obedecerão, na discriminação hierárquica e funcional do pessoal embarcadiço, ao quadro aprovado pelo regulamento das Capitanias dos Portos.</p>
        
        <p id="art371"><span class="artigo">Art. 371.</span> A presente Seção é também aplicável aos serviços de navegação fluvial e lacustre e à praticagem nas barras, portos, rios, lagos e canais.</p>
        
        <h2>SEÇÃO III<br>
        DA PROTEÇÃO DO TRABALHO DA MULHER</h2>
        
        <h3 id="tituloiiicapituloiiisecaoi">SEÇÃO I<br>
        DA DURAÇÃO, CONDIÇÕES DO TRABALHO E DA DISCRIMINAÇÃO CONTRA A MULHER</h3>
        
        <p id="art372"><span class="artigo">Art. 372.</span> Os preceitos que regulam o trabalho masculino são aplicáveis ao trabalho feminino, naquilo em que não colidirem com a proteção especial instituída por este Capítulo.</p>
        
        <p id="art372p">Parágrafo único. (Revogado pela Lei nº 13.467, de 2017)</p>
        
        <p id="art373"><span class="artigo">Art. 373.</span> A duração normal de trabalho da mulher será de 8 (oito) horas diárias, exceto nos casos para os quais for fixada duração inferior.</p>
        
        <p><span class="artigo">Art. 373-A.</span> Ressalvadas as disposições legais destinadas a corrigir as distorções que afetam o acesso da mulher ao mercado de trabalho e certas especificidades estabelecidas nos acordos trabalhistas, é vedado:</p>
        
        <p id="art373ai">I - publicar ou fazer publicar anúncio de emprego no qual haja referência ao sexo, à idade, à cor ou situação familiar, salvo quando a natureza da atividade a ser exercida, pública e notoriamente, assim o exigir;</p>
        
        <p id="art373aii">II - recusar emprego, promoção ou motivar a dispensa do trabalho em razão de sexo, idade, cor, situação familiar ou estado de gravidez, salvo quando a natureza da atividade seja notória e publicamente incompatível;</p>
        
        <p id="art373aiii">III - considerar o sexo, a idade, a cor ou situação familiar como variável determinante para fins de remuneração, formação profissional e oportunidades de ascensão profissional;</p>
        
        <p id="art373aiv">IV - exigir atestado ou exame, de qualquer natureza, para comprovação de esterilidade ou gravidez, na admissão ou permanência no emprego;</p>
        
        <p id="art373av">V - impedir o acesso ou adotar critérios subjetivos para deferimento de inscrição ou aprovação em concursos, em empresas privadas, em razão de sexo, idade, cor, situação familiar ou estado de gravidez;</p>
        
        <p id="art373avi">VI - proceder o empregador ou preposto a revistas íntimas nas empregadas ou funcionárias.</p>
        
        <p id="art373ap">Parágrafo único. O disposto neste artigo não obsta a adoção de medidas temporárias que visem ao estabelecimento das políticas de igualdade entre homens e mulheres, em particular as que se destinam a corrigir as distorções que afetam a formação profissional, o acesso ao emprego e as condições gerais de trabalho da mulher.</p>
        
        <p id="art374."><span class="artigo">Art. 374.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art375"><span class="artigo">Art. 375.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art376">Art. 376 (Revogado pela Lei nº 10.244, de 2001)</p>
        
        <p id="art377"><span class="artigo">Art. 377.</span> A adoção de medidas de proteção ao trabalho das mulheres é considerada de ordem pública, não justificando, em hipótese alguma, a redução de salário.</p>
        
        <p id="art378"><span class="artigo">Art. 378.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <h3 id="tituloiiicapituloiiisecaoii">SEÇÃO II<br>
        DO TRABALHO NOTURNO</h3>
        
        <p id="art379"><span class="artigo">Art. 379.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art380">Art. 380 (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art381"><span class="artigo">Art. 381.</span> O trabalho noturno das mulheres terá salário superior ao diurno.</p>
        
        <p id="art381§1">§ 1º. Para os fins desse artigo, os salários serão acrescidos duma percentagem adicional de 20% (vinte por cento) no mínimo.</p>
        
        <p id="art381§2">§ 2º. Cada hora do período noturno de trabalho das mulheres terá 52 (cinquenta e dois) minutos e 30 (trinta) segundos.</p>
        
        <h3 id="tituloiiicapituloiiisecaoiii">SEÇÃO III<br>
        DOS PERÍODOS DE DESCANSO</h3>
        
        <p id="art382"><span class="artigo">Art. 382.</span> Entre 2 (duas) jornadas de trabalho, haverá um intervalo de 11(onze) horas consecutivas, no mínimo, destinado ao repouso.</p>
        
        <p id="art383"><span class="artigo">Art. 383.</span> Durante a jornada de trabalho, será concedido à empregada um período para refeição e repouso não inferior a 1 (uma) hora nem superior a 2 (duas) horas salvo a hipótese prevista no art. 71, § 3º.</p>
        
        <p id="art384"><span class="artigo">Art. 384.</span> (Revogado pela Lei nº 13.467, de 2017)</p>
        
        <p id="art957"><span class="artigo">Art. 385.</span> O descanso semanal será de 24 (vinte e quatro) horas consecutivas e coincidirá no todo ou em parte com o domingo, salvo motivo de conveniência pública ou necessidade imperiosa de serviço, a juízo da autoridade competente, na forma das disposições gerais, caso em que recairá em outro dia.</p>
        
        <p id="art385p0">Parágrafo único. Observar-se-ão, igualmente, os preceitos da legislação geral sobre a proibição de trabalho nos feriados civis e religiosos.</p>
        
        <p id="art956"><span class="artigo">Art. 386.</span> Havendo trabalho aos domingos, será organizada uma escala de revezamento quinzenal, que favoreça o repouso dominical.</p>
        
        <h3 id="tituloiiicapituloiiisecaoiv">SEÇÃO IV<br>
        DOS MÉTODOS E LOCAIS DE TRABALHO</h3>
        
        <p id="art387"><span class="artigo">Art. 387.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art388"><span class="artigo">Art. 388.</span> Em virtude de exame e parecer da autoridade competente, o Ministro do Trabalho, Industria e Comercio poderá estabelecer derrogações totais ou parciais às proibições a que alude o artigo anterior, quando tiver desaparecido, nos serviços considerados perigosos ou insalubres, todo e qualquer caráter perigoso ou prejudicial mediante a aplicação de novos métodos de trabalho ou pelo emprego de medidas de ordem preventiva.</p>
        
        <p id="art389"><span class="artigo">Art. 389.</span> Toda empresa é obrigada: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art389i">I - a prover os estabelecimentos de medidas concernentes à higienização dos métodos e locais de trabalho, tais como ventilação e iluminação e outros que se fizerem necessários à segurança e ao conforto das mulheres, a critério da autoridade competente; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art389ii">II - a instalar bebedouros, lavatórios, aparelhos sanitários; dispor de cadeiras ou bancos, em número suficiente, que permitam às mulheres trabalhar sem grande esgotamento físico; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art389iii">III - a instalar vestiários com armários individuais privativos das mulheres, exceto os estabelecimentos comerciais, escritórios, bancos e atividades afins, em que não seja exigida a troca de roupa e outros, a critério da autoridade competente em matéria de segurança e higiene do trabalho, admitindo-se como suficientes as gavetas ou escaninhos, onde possam as empregadas guardar seus pertences; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art389iv">IV - a fornecer, gratuitamente, a juízo da autoridade competente, os recursos de proteção individual, tais como óculos, máscaras, luvas e roupas especiais, para a defesa dos olhos, do aparelho respiratório e da pele, de acordo com a natureza do trabalho. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art389§1">§ 1º. Os estabelecimentos em que trabalharem pelo menos 30 (trinta) mulheres com mais de 16 (dezesseis) anos de idade terão local apropriado onde seja permitido às empregadas guardar sob vigilância e assistência os seus filhos no período da amamentação. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art389§2">§ 2º. A exigência do § 1º. poderá ser suprida por meio de creches distritais mantidas, diretamente ou mediante convênios, com outras entidades públicas ou privadas, pelas próprias empresas, em regime comunitário, ou a cargo do SESI, do SESC, da LBA ou de entidades sindicais. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p><span class="artigo">Art. 390.</span> Ao empregador é vedado empregar a mulher em serviço que demande o emprego de força muscular superior a 20 (vinte) quilos para o trabalho continuo, ou 25 (vinte e cinco) quilos para o trabalho ocasional.</p>
        
        <p id="art390p">Parágrafo único. Não está compreendida na determinação deste artigo a remoção de material feita por impulsão ou tração de vagonetes sobre trilhos, de carros de mão ou quaisquer aparelhos mecânicos.</p>
        
        <p id="art390a"><span class="artigo">Art. 390-A.</span> (VETADO).</p>
        
        <p id="art390b"><span class="artigo">Art. 390-B.</span> As vagas dos cursos de formação de mão-de-obra, ministrados por instituições governamentais, pelos próprios empregadores ou por qualquer órgão de ensino profissionalizante, serão oferecidas aos empregados de ambos os sexos.</p>
        
        <p id="art390c"><span class="artigo">Art. 390-C.</span> As empresas com mais de cem empregados, de ambos os sexos, deverão manter programas especiais de incentivos e aperfeiçoamento profissional da mão-de-obra.</p>
        
        <p id="art390d"><span class="artigo">Art. 390-D.</span> (VETADO).</p>
        
        <p id="art390e"><span class="artigo">Art. 390-E.</span> A pessoa jurídica poderá associar-se a entidade de formação profissional, sociedades civis, sociedades cooperativas, órgãos e entidades públicas ou entidades sindicais, bem como firmar convênios para o desenvolvimento de ações conjuntas, visando à execução de projetos relativos ao incentivo ao trabalho da mulher.</p>
        
        <h3 id="tituloiiicapituloiiisecaov">SEÇÃO V<br>
        DA PROTEÇÃO À MATERNIDADE</h3>
        
        <p id="art391"><span class="artigo">Art. 391.</span> Não constitui justo motivo para a rescisão do contrato de trabalho da mulher o fato de haver contraído matrimônio ou de encontrar-se em estado de gravidez.</p>
        
        <p id="art391p">Parágrafo único. Não serão permitidos em regulamentos de qualquer natureza contratos coletivos ou individuais de trabalho, restrições ao direito da mulher ao seu emprego, por motivo de casamento ou de gravidez.</p>
        
        <p id="art391-a"><span class="artigo">Art. 391-A.</span> A confirmação do estado de gravidez advindo no curso do contrato de trabalho, ainda que durante o prazo do aviso prévio trabalhado ou indenizado, garante à empregada gestante a estabilidade provisória prevista na alínea b do inciso II do art. 10 do Ato das Disposições Constitucionais Transitórias.</p>
        
        <p id="art391ap">Parágrafo único. O disposto no caput deste artigo aplica-se ao empregado adotante ao qual tenha sido concedida guarda provisória para fins de adoção.</p>
        
        <p id="art392"><span class="artigo">Art. 392.</span> A empregada gestante tem direito à licença-maternidade de 120 (cento e vinte) dias, sem prejuízo do emprego e do salário.</p>
        
        <p id="art392§1">§ 1º. A empregada deve, mediante atestado médico, notificar o seu empregador da data do início do afastamento do emprego, que poderá ocorrer entre o 28º (vigésimo oitavo) dia antes do parto e ocorrência deste. (Redação dada pela Lei nº 10.421, 15.4.2002) (Vide ADI 6327)</p>
        
        <p id="art392§2...">§ 2º. Os períodos de repouso, antes e depois do parto, poderão ser aumentados de 2 (duas) semanas cada um, mediante atestado médico. (Redação dada pela Lei nº 10.421, 15.4.2002) (Vide ADI 6327)</p>
        
        <p id="art392§3..">§ 3º. Em caso de parto antecipado, a mulher terá direito aos 120 (cento e vinte) dias previstos neste artigo. (Redação dada pela Lei nº 10.421, 15.4.2002)</p>
        
        <p id="art392§4..">§ 4º. É garantido à empregada, durante a gravidez, sem prejuízo do salário e demais direitos:</p>
        
        <p id="art392§4i.">I - transferência de função, quando as condições de saúde o exigirem, assegurada a retomada da função anteriormente exercida, logo após o retorno ao trabalho;</p>
        
        <p id="art392§4ii.">II - dispensa do horário de trabalho pelo tempo necessário para a realização de, no mínimo, seis consultas médicas e demais exames complementares.</p>
        
        <p id="art392§5">§ 5º (VETADO) (incluído pela Lei nº 10.421, de 2002)</p>
        
        <p id="art392a.."><span class="artigo">Art. 392-A.</span> À empregada que adotar ou obtiver guarda judicial para fins de adoção de criança ou adolescente será concedida licença-maternidade nos termos do art. 392 desta Lei.</p>
        
        <p id="art392a§1">§ 1º (Revogado pela Lei nº 12.010, de 2009) Vigência</p>
        
        <p id="art392a§2">§ 2º (Revogado pela Lei nº 12.010, de 2009) Vigência</p>
        
        <p id="art392a§3">§ 3º (Revogado pela Lei nº 12.010, de 2009) Vigência</p>
        
        <p id="art392a§4">§ 4º. A licença-maternidade só será concedida mediante apresentação do termo judicial de guarda à adotante ou guardiã. (Incluído pela Lei nº 10.421, 15.4.2002)</p>
        
        <p id="art392a§5">§ 5º. A adoção ou guarda judicial conjunta ensejará a concessão de licença-maternidade a apenas um dos adotantes ou guardiães empregado ou empregada.</p>
        
        <p id="art392b"><span class="artigo">Art. 392-B.</span> Em caso de morte da genitora, é assegurado ao cônjuge ou companheiro empregado o gozo de licença por todo o período da licença-maternidade ou pelo tempo restante a que teria direito a mãe, exceto no caso de falecimento do filho ou de seu abandono.</p>
        
        <p id="art392c"><span class="artigo">Art. 392-C.</span> Aplica-se, no que couber, o disposto no art. 392-A e 392-B ao empregado que adotar ou obtiver guarda judicial para fins de adoção.</p>
        
        <p id="art393"><span class="artigo">Art. 393.</span> Durante o período a que se refere o art. 392, a mulher terá direito ao salário integral e, quando variável, calculado de acordo com a média dos 6 (seis) últimos meses de trabalho, bem como os direitos e vantagens adquiridos, sendo-lhe ainda facultado reverter à função que anteriormente ocupava. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art394"><span class="artigo">Art. 394.</span> Mediante atestado médico, à mulher grávida é facultado romper o compromisso resultante de qualquer contrato de trabalho, desde que este seja prejudicial à gestação.</p>
        
        <p id="art394a."><span class="artigo">Art. 394-A.</span> Sem prejuízo de sua remuneração, nesta incluído o valor do adicional de insalubridade, a empregada deverá ser afastada de:</p>
        
        <p id="art394ai">I - atividades consideradas insalubres em grau máximo, enquanto durar a gestação;</p>
        
        <p id="art394aiii">II - atividades consideradas insalubres em grau médio ou mínimo, quando apresentar atestado de saúde, emitido por médico de confiança da mulher, que recomende o afastamento durante a gestação; (Vide ADIN 5938)</p>
        
        <p id="art394aiiii">III - atividades consideradas insalubres em qualquer grau, quando apresentar atestado de saúde, emitido por médico de confiança da mulher, que recomende o afastamento durante a lactação. (Vide ADIN 5938)</p>
        
        <p id="art394a§1">§ 1º (VETADO)</p>
        
        <p id="art394a§2">§ 2º. Cabe à empresa pagar o adicional de insalubridade à gestante ou à lactante, efetivando-se a compensação, observado o disposto no art. 248 da Constituição Federal, por ocasião do recolhimento das contribuições incidentes sobre a folha de salários e demais rendimentos pagos ou creditados, a qualquer título, à pessoa física que lhe preste serviço.</p>
        
        <p id="art394a§3">§ 3º. Quando não for possível que a gestante ou a lactante afastada nos termos do caput deste artigo exerça suas atividades em local salubre na empresa, a hipótese será considerada como gravidez de risco e ensejará a percepção de salário-maternidade, nos termos da Lei no 8.213, de 24 de julho de 1991, durante todo o período de afastamento.</p>
        
        <p id="art395"><span class="artigo">Art. 395.</span> Em caso de aborto não criminoso, comprovado por atestado médico oficial, a mulher terá um repouso remunerado de 2 (duas) semanas, ficando-lhe assegurado o direito de retornar à função que ocupava antes de seu afastamento.</p>
        
        <p id="art396."><span class="artigo">Art. 396.</span> Para amamentar seu filho, inclusive se advindo de adoção, até que este complete 6 (seis) meses de idade, a mulher terá direito, durante a jornada de trabalho, a 2 (dois) descansos especiais de meia hora cada um.</p>
        
        <p id="art396§1">§ 1º. Quando o exigir a saúde do filho, o período de 6 (seis) meses poderá ser dilatado, a critério da autoridade competente.</p>
        
        <p id="art396§2">§ 2º. Os horários dos descansos previstos no caput deste artigo deverão ser definidos em acordo individual entre a mulher e o empregador.</p>
        
        <p id="art397"><span class="artigo">Art. 397.</span> O SESI, o SESC, a LBA e outras entidades públicas destinadas à assistência à infância manterão ou subvencionarão, de acordo com suas possibilidades financeiras, escolas maternais e jardins de infância, distribuídos nas zonas de maior densidade de trabalhadores, destinados especialmente aos filhos das mulheres empregadas. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art398"><span class="artigo">Art. 398.</span> (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art399"><span class="artigo">Art. 399.</span> O Ministro do Trabalho, Industria e Comercio conferirá diploma de benemerência aos empregadores que se distinguirem pela organização e manutenção de creches e de instituições de proteção aos menores em idade pré-escolar, desde que tais serviços se recomendem por sua generosidade e pela eficiência das respectivas instalações.</p>
        
        <p id="art400"><span class="artigo">Art. 400.</span> Os locais destinados à guarda dos filhos das operárias durante o período da amamentação deverão possuir, no mínimo, um berçário, uma saleta de amamentação, uma cozinha dietética e uma instalação sanitária.</p>
        
        <h3 id="tituloiiicapituloiiisecaovi">SEÇÃO VI<br>
        DAS PENALIDADES</h3>
        
        <p id="art931"><span class="artigo">Art. 401.</span> Pela infração de qualquer dispositivo deste Capítulo, será imposta ao empregador a multa de cem a mil cruzeiros, aplicada, nesta Capital, pela autoridade competente de 1ª instância do Departamento Nacional do Trabalho, e, nos Estados e Território do Acre, pelas autoridades competentes do Ministério do Trabalho, Industria e Comercio ou por aquelas que exerçam funções delegadas.</p>
        
        <p id="art401§3">§ 1º. A penalidade será sempre aplicada no grau máximo</p>
        
        <p id="art401§1a0" class="alinea">a) se ficar apurado o emprego de artifício ou simulação para fraudar a aplicação dos dispositivos deste Capítulo;</p>
        
        <p id="art401§1b0" class="alinea">b) nos casos de reincidência.</p>
        
        <p id="art401§4">§ 2º. O processo na verificação das infrações, bem como na aplicação e cobrança das multas, será o previsto no título &quot;Do Processo de Multas Administrativas&quot;, observadas as disposições deste artigo.</p>
        
        <p id="art401a"><span class="artigo">Art. 401-A.</span> (VETADO)</p>
        
        <p id="art401b"><span class="artigo">Art. 401-B.</span> (VETADO)</p>
        
        <h2>SEÇÃO IV<br>
        DA PROTEÇÃO DO TRABALHO DO MENOR</h2>
        
        <h3 id="tituloiiicapituloivsecaoi">SEÇÃO I<br>
        DISPOSIÇÕES GERAIS</h3>
        
        <p><span class="artigo">Art. 402.</span> Considera-se menor para os efeitos desta Consolidação o trabalhador de quatorze até dezoito anos</p>
        
        <p id="art402p.">Parágrafo único. O trabalho do menor reger-se-á pelas disposições do presente Capítulo, exceto no serviço em oficinas em que trabalhem exclusivamente pessoas da família do menor e esteja este sob a direção do pai, mãe ou tutor, observado, entretanto, o disposto nos arts. 404, 405 e na Seção II. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art403."><span class="artigo">Art. 403.</span> É proibido qualquer trabalho a menores de dezesseis anos de idade, salvo na condição de aprendiz, a partir dos quatorze anos.</p>
        
        <p id="art403p..">Parágrafo único. O trabalho do menor não poderá ser realizado em locais prejudiciais à sua formação, ao seu desenvolvimento físico, psíquico, moral e social e em horários e locais que não permitam a frequência à escola.</p>
        
        <p id="art403pa." class="alinea">a) revogada;</p>
        
        <p id="art403pb." class="alinea">b) revogada.</p>
        
        <p id="art404"><span class="artigo">Art. 404.</span> Ao menor de 18 (dezoito) anos é vedado o trabalho noturno, considerado este o que for executado no período compreendido entre as 22 (vinte e duas) e as 5 (cinco) horas.</p>
        
        <p id="art405"><span class="artigo">Art. 405.</span> Ao menor não será permitido o trabalho: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art405i.">I - nos locais e serviços perigosos ou insalubres, constantes de quadro para esse fim aprovado pelo Diretor Geral do Departamento de Segurança e Higiene do Trabalho; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art405ii.">II - em locais ou serviços prejudiciais à sua moralidade. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 1º (Revogado pela Lei 10.097, de 2000)</p>
        
        <p id="art405§2">§ 2º. O trabalho exercido nas ruas, praças e outros logradouros dependerá de prévia autorização do Juiz de Menores, ao qual cabe verificar se a ocupação é indispensável à sua própria subsistência ou à de seus pais, avós ou irmãos e se dessa ocupação não poderá advir prejuízo à sua formação moral. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art405§3.">§ 3º. Considera-se prejudicial à moralidade do menor o trabalho: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art405§3a" class="alinea">a) prestado de qualquer modo, em teatros de revista, cinemas, buates, cassinos, cabarés, dancings e estabelecimentos análogos; (Incluída pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art405§3b" class="alinea">b) em empresas circenses, em funções de acróbata, saltimbanco, ginasta e outras semelhantes; (Incluída pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art405§3c" class="alinea">c) de produção, composição, entrega ou venda de escritos, impressos, cartazes, desenhos, gravuras, pinturas, emblemas, imagens e quaisquer outros objetos que possam, a juízo da autoridade competente, prejudicar sua formação moral; (Incluída pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art405§3d" class="alinea">d) consistente na venda, a varejo, de bebidas alcoólicas. (Incluída pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art405§4">§ 4º. Nas localidades em que existirem, oficialmente reconhecidas, instituições destinadas ao amparo dos menores jornaleiros, só aos que se encontrem sob o patrocínio dessas entidades será outorgada a autorização do trabalho a que alude o § 2º. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art405§5">§ 5º. Aplica-se ao menor o disposto no art. 390 e seu parágrafo único. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art406"><span class="artigo">Art. 406.</span> O Juiz de Menores poderá autorizar ao menor o trabalho a que se referem as letras &quot;a&quot; e &quot;b&quot; do § 3º. do art. 405: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art406i">I - desde que a representação tenha fim educativo ou a peça de que participe não possa ser prejudicial à sua formação moral; (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art406ii">II - desde que se certifique ser a ocupação do menor indispensável à própria subsistência ou à de seus pais, avós ou irmãos e não advir nenhum prejuízo à sua formação moral. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art407"><span class="artigo">Art. 407.</span> Verificado pela autoridade competente que o trabalho executado pelo menor é prejudicial à sua saúde, ao seu desenvolvimento físico ou a sua moralidade, poderá ela obrigá-lo a abandonar o serviço, devendo a respectiva empresa, quando for o caso, proporcionar ao menor todas as facilidades para mudar de funções. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art407p">Parágrafo único. Quando a empresa não tomar as medidas possíveis e recomendadas pela autoridade competente para que o menor mude de função, configurar-se-á a rescisão do contrato de trabalho, na forma do art. 483. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art408"><span class="artigo">Art. 408.</span> Ao responsável legal do menor é facultado pleitear a extinção do contrato de trabalho, desde que o serviço possa acarretar para ele prejuízos de ordem física ou moral. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art409"><span class="artigo">Art. 409.</span> Para maior segurança do trabalho e garantia da saúde dos menores, a autoridade fiscalizadora poderá proibir-lhes o gozo dos períodos de repouso nos locais de trabalho.</p>
        
        <p id="art410"><span class="artigo">Art. 410.</span> O Ministro do Trabalho, Industria e Comercio poderá derrogar qualquer proibição decorrente do quadro a que se refere a alínea &quot;a&quot; do art. 405 quando se certificar haver desaparecido, parcial ou totalmente, o caráter perigoso ou insalubre, que determinou a proibição.</p>
        
        <h3 id="tituloiiicapituloivsecaoii">SEÇÃO II<br>
        DA DURAÇÃO DO TRABALHO</h3>
        
        <p id="art411"><span class="artigo">Art. 411.</span> A duração do trabalho do menor regular-se-á pelas disposições legais relativas à duração do trabalho em geral, com as restrições estabelecidas neste Capítulo.</p>
        
        <p id="art412"><span class="artigo">Art. 412.</span> Após cada período de trabalho efetivo, quer contínuo, quer dividido em 2 (dois) turnos, haverá um intervalo de repouso, não inferior a 11(onze) horas.</p>
        
        <p id="art413"><span class="artigo">Art. 413.</span> É vedado prorrogar a duração normal diária do trabalho do menor, salvo: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art413i">I - até mais 2 (duas) horas, independentemente de acréscimo salarial, mediante convenção ou acordo coletivo nos termos do Título VI desta Consolidação, desde que o excesso de horas em um dia seja compensado pela diminuição em outro, de modo a ser observado o limite máximo de 48 (quarenta e oito) horas semanais ou outro inferior legalmente fixada; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art413ii">II - excepcionalmente, por motivo de força maior, até o máximo de 12 (doze) horas, com acréscimo salarial de, pelo menos, 25% (vinte e cinco por cento) sobre a hora normal e desde que o trabalho do menor seja imprescindível ao funcionamento do estabelecimento. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art413p">Parágrafo único. Aplica-se à prorrogação do trabalho do menor o disposto no art. 375, no parágrafo único do art. 376, no art. 378 e no art. 384 desta Consolidação. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art414"><span class="artigo">Art. 414.</span> Quando o menor de 18 (dezoito) anos for empregado em mais de um estabelecimento, as horas de trabalho em cada um serão totalizadas.</p>
        
        <h3 id="tituloiiicapituloivsecaoiii">SEÇÃO III<br>
        DA ADMISSÃO EM EMPREGO E DA CARTEIRA DE TRABALHO E PREVIDÊNCIA SOCIAL</h3>
        
        <p id="art415"><span class="artigo">Art. 415.</span> Haverá a Carteira de Trabalho e Previdência Social para todos os menores de 18 anos, sem distinção do sexo, empregados em empresas ou estabelecimentos de fins econômicos e daqueles que lhes forem equiparados. (Vide Decreto-lei nº 926, de 10.10.1969)</p>
        
        <p id="art415p">Parágrafo único. (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art416"><span class="artigo">Art. 416.</span> Os menores de 18 anos só poderão ser admitidos, como empregados, nas empresas ou estabelecimentos de fins econômicos e naqueles que lhes forem equiparados, quando possuidores da carteira a que se refere o artigo anterior, salvo a hipótese do art. 422. (Vide Decreto-lei nº 926, de 10.10.1969)</p>
        
        <p><span class="artigo">Art. 417.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art418."><span class="artigo">Art. 418.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art419"><span class="artigo">Art. 419.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art420"><span class="artigo">Art. 420.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art421"><span class="artigo">Art. 421.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art422"><span class="artigo">Art. 422.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p id="art423"><span class="artigo">Art. 423.</span> O empregador não poderá fazer outras anotações na carteira de trabalho e previdência social além das referentes ao salário, data da admissão, férias e saída. (Vide Lei nº 5.686, de 1971)</p>
        
        <h3 id="tituloiiicapituloivsecaoiv">SEÇÃO IV<br>
        DOS DEVERES DOS RESPONSÁVEIS LEGAIS DE MENORES E DOS EMPREGADORES DA APRENDIZAGEM</h3>
        
        <p id="art424"><span class="artigo">Art. 424.</span> É dever dos responsáveis legais de menores, pais, mães, ou tutores, afastá-los de empregos que diminuam consideravelmente o seu tempo de estudo, reduzam o tempo de repouso necessário à sua saúde e constituição física, ou prejudiquem a sua educação moral.</p>
        
        <p id="art425"><span class="artigo">Art. 425.</span> Os empregadores de menores de 18 (dezoito) anos são obrigados a velar pela observância, nos seus estabelecimentos ou empresas, dos bons costumes e da decência pública, bem como das regras da segurança e da medicina do trabalho.</p>
        
        <p id="art426"><span class="artigo">Art. 426.</span> É dever do empregador, na hipótese do art. 407, proporcionar ao menor todas as facilidades para mudar de serviço.</p>
        
        <p id="art427"><span class="artigo">Art. 427.</span> O empregador, cuja empresa ou estabelecimento ocupar menores, será obrigado a conceder-lhes o tempo que for necessário para a frequência às aulas.</p>
        
        <p id="art427p">Parágrafo único. Os estabelecimentos situados em lugar onde a escola estiver a maior distância que 2 (dois) quilômetros, e que ocuparem, permanentemente, mais de 30 (trinta) menores analfabetos, de 14 (quatorze) a 18 (dezoito) anos, serão obrigados a manter local apropriado em que lhes seja ministrada a instrução primária.</p>
        
        <p id="art428."><span class="artigo">Art. 428.</span> Contrato de aprendizagem é o contrato de trabalho especial, ajustado por escrito e por prazo determinado, em que o empregador se compromete a assegurar ao maior de 14 (quatorze) e menor de 24 (vinte e quatro) anos inscrito em programa de aprendizagem formação técnico-profissional metódica, compatível com o seu desenvolvimento físico, moral e psicológico, e o aprendiz, a executar com zelo e diligência as tarefas necessárias a essa formação.</p>
        
        <p id="art428§1">§ 1º. A validade do contrato de aprendizagem pressupõe anotação na Carteira de Trabalho e Previdência Social, matrícula e frequência do aprendiz na escola, caso não haja concluído o ensino médio, e inscrição em programa de aprendizagem desenvolvido sob orientação de entidade qualificada em formação técnico-profissional metódica.</p>
        
        <p id="art428§2.">§ 2º. Ao aprendiz, salvo condição mais favorável, será garantido o salário mínimo hora.</p>
        
        <p id="art428§13">§ 3º. O contrato de aprendizagem não poderá ser estipulado por mais de 2 (dois) anos, exceto quando se tratar de aprendiz portador de deficiência.</p>
        
        <p id="art428§4">§ 4º. A formação técnico-profissional a que se refere o caput deste artigo caracteriza-se por atividades teóricas e práticas, metodicamente organizadas em tarefas de complexidade progressiva desenvolvidas no ambiente de trabalho.</p>
        
        <p id="art428§14">§ 5º. A idade máxima prevista no caput deste artigo não se aplica a aprendizes portadores de deficiência.</p>
        
        <p id="art428§6.">§ 6º. Para os fins do contrato de aprendizagem, a comprovação da escolaridade de aprendiz com deficiência deve considerar, sobretudo, as habilidades e competências relacionadas com a profissionalização.</p>
        
        <p id="art428§7">§ 7º. Nas localidades onde não houver oferta de ensino médio para o cumprimento do disposto no § 1º. deste artigo, a contratação do aprendiz poderá ocorrer sem a frequência à escola, desde que ele já tenha concluído o ensino fundamental.</p>
        
        <p id="art428§8">§ 8º. Para o aprendiz com deficiência com 18 (dezoito) anos ou mais, a validade do contrato de aprendizagem pressupõe anotação na CTPS e matrícula e frequência em programa de aprendizagem desenvolvido sob orientação de entidade qualificada em formação técnico-profissional metódica.</p>
        
        <p id="art429"><span class="artigo">Art. 429.</span> Os estabelecimentos de qualquer natureza são obrigados a empregar e matricular nos cursos dos Serviços Nacionais de Aprendizagem número de aprendizes equivalente a cinco por cento, no mínimo, e quinze por cento, no máximo, dos trabalhadores existentes em cada estabelecimento, cujas funções demandem formação profissional.</p>
        
        <p id="art429a." class="alinea">a) revogada;</p>
        
        <p id="art429b." class="alinea">b) revogada.</p>
        
        <p id="art429§1a">§ 1o-A. O limite fixado neste artigo não se aplica quando o empregador for entidade sem fins lucrativos, que tenha por objetivo a educação profissional.</p>
        
        <p id="art429§1b">§ 1º-B Os estabelecimentos a que se refere o caput poderão destinar o equivalente a até 10% (dez por cento) de sua cota de aprendizes à formação técnico-profissional metódica em áreas relacionadas a práticas de atividades desportivas, à prestação de serviços relacionados à infraestrutura, incluindo as atividades de construção, ampliação, recuperação e manutenção de instalações esportivas e à organização e promoção de eventos esportivos.</p>
        
        <p id="art429§1">§ 1º. As frações de unidade, no cálculo da percentagem de que trata o caput, darão lugar à admissão de um aprendiz.</p>
        
        <p id="art429§2">§ 2º. Os estabelecimentos de que trata o caput ofertarão vagas de aprendizes a adolescentes usuários do Sistema Nacional de Atendimento Socioeducativo (Sinase) nas condições a serem dispostas em instrumentos de cooperação celebrados entre os estabelecimentos e os gestores dos Sistemas de Atendimento Socioeducativo locais. (Vide)</p>
        
        <p>§ 3º. Os estabelecimentos de que trata o caput poderão ofertar vagas de aprendizes a adolescentes usuários do Sistema Nacional de Políticas Públicas sobre Drogas - SISNAD nas condições a serem dispostas em instrumentos de cooperação celebrados entre os estabelecimentos e os gestores locais responsáveis pela prevenção do uso indevido, atenção e reinserção social de usuários e dependentes de drogas.</p>
        
        <p id="art430"><span class="artigo">Art. 430.</span> Na hipótese de os Serviços Nacionais de Aprendizagem não oferecerem cursos ou vagas suficientes para atender à demanda dos estabelecimentos, esta poderá ser suprida por outras entidades qualificadas em formação técnico-profissional metódica, a saber:</p>
        
        <p id="art430i0">I – Escolas Técnicas de Educação;</p>
        
        <p id="art430ii">II – entidades sem fins lucrativos, que tenham por objetivo a assistência ao adolescente e à educação profissional, registradas no Conselho Municipal dos Direitos da Criança e do Adolescente.</p>
        
        <p id="art430iii">III - entidades de prática desportiva das diversas modalidades filiadas ao Sistema Nacional do Desporto e aos Sistemas de Desporto dos Estados, do Distrito Federal e dos Municípios.</p>
        
        <p id="art430§1">§ 1º. As entidades mencionadas neste artigo deverão contar com estrutura adequada ao desenvolvimento dos programas de aprendizagem, de forma a manter a qualidade do processo de ensino, bem como acompanhar e avaliar os resultados.</p>
        
        <p id="art430§2">§ 2º. Aos aprendizes que concluírem os cursos de aprendizagem, com aproveitamento, será concedido certificado de qualificação profissional.</p>
        
        <p id="art430§3.">§ 3º. O Ministério do Trabalho fixará normas para avaliação da competência das entidades mencionadas nos incisos II e III deste artigo.</p>
        
        <p>§ 4º. As entidades mencionadas nos incisos II e III deste artigo deverão cadastrar seus cursos, turmas e aprendizes matriculados no Ministério do Trabalho.</p>
        
        <p>§ 5º. As entidades mencionadas neste artigo poderão firmar parcerias entre si para o desenvolvimento dos programas de aprendizagem, conforme regulamento.</p>
        
        <p id="art431..0"><span class="artigo">Art. 431.</span> A contratação do aprendiz poderá ser efetivada pela empresa onde se realizará a aprendizagem ou pelas entidades mencionadas nos incisos II e III do art. 430, caso em que não gera vínculo de emprego com a empresa tomadora dos serviços.</p>
        
        <p id="art431a.0" class="alinea">a) revogada;</p>
        
        <p id="art431b.0" class="alinea">b) revogada;</p>
        
        <p id="art431c.0" class="alinea">c) revogada.</p>
        
        <p id="art431p0">Parágrafo único. Aos candidatos rejeitados pela seleção profissional deverá ser dada, tanto quanto possível, orientação profissional para ingresso em atividade mais adequada às qualidades e aptidões que tiverem demonstrado.</p>
        
        <p id="art432."><span class="artigo">Art. 432.</span> A duração do trabalho do aprendiz não excederá de seis horas diárias, sendo vedadas a prorrogação e a compensação de jornada.</p>
        
        <p id="art432§1.">§ 1º. O limite previsto neste artigo poderá ser de até oito horas diárias para os aprendizes que já tiverem completado o ensino fundamental, se nelas forem computadas as horas destinadas à aprendizagem teórica.</p>
        
        <p id="art432§2.">§ 2º. Revogado.</p>
        
        <p id="art433.."><span class="artigo">Art. 433.</span> O contrato de aprendizagem extinguir-se-á no seu termo ou quando o aprendiz completar 24 (vinte e quatro) anos, ressalvada a hipótese prevista no § 5º. do art. 428 desta Consolidação, ou ainda antecipadamente nas seguintes hipóteses:</p>
        
        <p id="art433a." class="alinea">a) revogada;</p>
        
        <p id="art433b." class="alinea">b) revogada.</p>
        
        <p id="art433i.">I - desempenho insuficiente ou inadaptação do aprendiz, salvo para o aprendiz com deficiência quando desprovido de recursos de acessibilidade, de tecnologias assistivas e de apoio necessário ao desempenho de suas atividades;</p>
        
        <p id="art433ii">II – falta disciplinar grave;</p>
        
        <p id="art433iii">III – ausência injustificada à escola que implique perda do ano letivo; ou</p>
        
        <p id="art433iv">IV – a pedido do aprendiz.</p>
        
        <p id="art433p.">Parágrafo único. Revogado.</p>
        
        <p id="art433§2">§ 2º. Não se aplica o disposto nos arts. 479 e 480 desta Consolidação às hipóteses de extinção do contrato mencionadas neste artigo.</p>
        
        <h3 id="tituloiiicapituloivsecaov">SEÇÃO V<br>
        DAS PENALIDADES</h3>
        
        <p id="art932"><span class="artigo">Art. 434.</span> Os infratores das disposições deste Capítulo ficam sujeitos à multa de valor igual a 1 (um) salário mínimo regional, aplicada tantas vezes quantos forem os menores empregados em desacordo com a lei, não podendo, todavia, a soma das multas exceder a 5 (cinco) vezes o salário-mínimo, salvo no caso de reincidência em que esse total poderá ser elevado ao dobro. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art435.0"><span class="artigo">Art. 435.</span> Fica sujeita à multa de valor igual a 1 (um) salário-mínimo regional e ao pagamento da emissão de nova via a empresa que fizer na Carteira de Trabalho e Previdência Social anotação não prevista em lei. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art436."><span class="artigo">Art. 436.</span> (Revogado pela Lei 10.097, de 2000)</p>
        
        <p id="art437">Art. 437 (Revogado pela Lei 10.097, de 2000)</p>
        
        <p id="art933"><span class="artigo">Art. 438.</span> São competentes para impor as penalidades previstas neste Capítulo:</p>
        
        <p id="art438a0" class="alinea">a) no Distrito Federal, a autoridade de 1ª instância do Departamento Nacional do Trabalho;</p>
        
        <p id="art438b0" class="alinea">b) nos Estados e Território do Acre, os delegados regionais do Ministério do Trabalho, Industria e Comercio ou os funcionários por eles designados para tal fim.</p>
        
        <p id="art438p0">Parágrafo único. O processo, na verificação das infrações, bem como na aplicação e cobrança das multas, será o previsto no título &quot;Do Processo de Multas Administrativas&quot;, observadas as disposições deste artigo.</p>
        
        <h3 id="tituloiiicapituloivsecaovi">SEÇÃO VI<br>
        DISPOSIÇÕES FINAIS</h3>
        
        <p id="art439"><span class="artigo">Art. 439.</span> É lícito ao menor firmar recibo pelo pagamento dos salários. Tratando-se, porém, de rescisão do contrato de trabalho, é vedado ao menor de 18 (dezoito) anos dar, sem assistência dos seus responsáveis legais, quitação ao empregador pelo recebimento da indenização que lhe for devida.</p>
        
        <p id="art440"><span class="artigo">Art. 440.</span> Contra os menores de 18 (dezoito) anos não corre nenhum prazo de prescrição.</p>
        
        <p id="art441"><span class="artigo">Art. 441.</span> O quadro a que se refere o item I do art. 405 será revisto bienalmente. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <h1 id="tituloiv">TÍTULO IV<br>
        DO CONTRATO INDIVIDUAL DO TRABALHO</h1>
        
        <h2 id="tituloivcapituloi">CAPÍTULO I<br>
        DISPOSIÇÕES GERAIS</h2>
        
        <p id="art442"><span class="artigo">Art. 442.</span> Contrato individual de trabalho é o acordo tácito ou expresso, correspondente à relação de emprego.</p>
        
        <p>§ 1º. Qualquer que seja o ramo de atividade da sociedade cooperativa, não existe vínculo empregatício entre ela e seus associados, nem entre estes e os tomadores de serviços daquela.</p>
        
        <p>§ 2º. Não existe vínculo empregatício entre entidades religiosas de qualquer denominação ou natureza ou instituições de ensino vocacional e ministros de confissão religiosa, membros de instituto de vida consagrada, de congregação ou de ordem religiosa, ou quaisquer outros que a eles se equiparem, ainda que se dediquem parcial ou integralmente a atividades ligadas à administração da entidade ou instituição a que estejam vinculados ou estejam em formação ou treinamento.</p>
        
        <p>§ 3º. O disposto no § 2º. não se aplica em caso de desvirtuamento da finalidade religiosa e voluntária.</p>
        
        <p id="art442a"><span class="artigo">Art. 442-A.</span> Para fins de contratação, o empregador não exigirá do candidato a emprego comprovação de experiência prévia por tempo superior a 6 (seis) meses no mesmo tipo de atividade..</p>
        
        <p id="art442b"><span class="artigo">Art. 442-B.</span> A contratação do autônomo, cumpridas por este todas as formalidades legais, com ou sem exclusividade, de forma contínua ou não, afasta a qualidade de empregado prevista no art. 3º. desta Consolidação.</p>
        
        <p id="art443b."><span class="artigo">Art. 443.</span> O contrato individual de trabalho poderá ser acordado tácita ou expressamente, verbalmente ou por escrito, por prazo determinado ou indeterminado, ou para prestação de trabalho intermitente.</p>
        
        <p id="art443§1">§ 1º. Considera-se como de prazo determinado o contrato de trabalho cuja vigência dependa de termo prefixado ou da execução de serviços especificados ou ainda da realização de certo acontecimento suscetível de previsão aproximada. (Parágrafo único renumerado pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art443§2">§ 2º. O contrato por prazo determinado só será válido em se tratando: (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art443§2a" class="alinea">a) de serviço cuja natureza ou transitoriedade justifique a predeterminação do prazo; (Incluída pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art443§2b" class="alinea">b) de atividades empresariais de caráter transitório; (Incluída pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art443§2c" class="alinea">c) de contrato de experiência. (Incluída pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art443§3">§ 3º. Considera-se como intermitente o contrato de trabalho no qual a prestação de serviços, com subordinação, não é contínua, ocorrendo com alternância de períodos de prestação de serviços e de inatividade, determinados em horas, dias ou meses, independentemente do tipo de atividade do empregado e do empregador, exceto para os aeronautas, regidos por legislação própria.</p>
        
        <p id="art444"><span class="artigo">Art. 444.</span> As relações contratuais de trabalho podem ser objeto de livre estipulação das partes interessadas em tudo quanto não contravenha às disposições de proteção ao trabalho, aos contratos coletivos que lhes sejam aplicáveis e às decisões das autoridades competentes.</p>
        
        <p id="art444p">Parágrafo único. A livre estipulação a que se refere o caput deste artigo aplica-se às hipóteses previstas no art. 611-A desta Consolidação, com a mesma eficácia legal e preponderância sobre os instrumentos coletivos, no caso de empregado portador de diploma de nível superior e que perceba salário mensal igual ou superior a duas vezes o limite máximo dos benefícios do Regime Geral de Previdência Social.</p>
        
        <p id="art445"><span class="artigo">Art. 445.</span> O contrato de trabalho por prazo determinado não poderá ser estipulado por mais de 2 (dois) anos, observada a regra do art. 451. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art445p">Parágrafo único. O contrato de experiência não poderá exceder de 90 (noventa) dias. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art446"><span class="artigo">Art. 446.</span> (Revogado pela Lei nº 7.855, de 24.10.1989)</p>
        
        <p id="art447"><span class="artigo">Art. 447.</span> Na falta de acordo ou prova sobre condição essencial ao contrato verbal, esta se presume existente, como se a tivessem estatuído os interessados na conformidade dos preceitos jurídicos adequados à sua legitimidade.</p>
        
        <p id="art448"><span class="artigo">Art. 448.</span> A mudança na propriedade ou na estrutura jurídica da empresa não afetará os contratos de trabalho dos respectivos empregados.</p>
        
        <p id="srt448a"><span class="artigo">Art. 448-A.</span> Caracterizada a sucessão empresarial ou de empregadores prevista nos arts. 10 e 448 desta Consolidação, as obrigações trabalhistas, inclusive as contraídas à época em que os empregados trabalhavam para a empresa sucedida, são de responsabilidade do sucessor.</p>
        
        <p id="srt448ap">Parágrafo único. A empresa sucedida responderá solidariamente com a sucessora quando ficar comprovada fraude na transferência.</p>
        
        <p id="art449"><span class="artigo">Art. 449.</span> Os direitos oriundos da existência do contrato de trabalho subsistirão em caso de falência, concordata ou dissolução da empresa.</p>
        
        <p id="art449§1">§ 1º. Na falência constituirão créditos privilegiados a totalidade dos salários devidos ao empregado e a totalidade das indenizações a que tiver direito.</p>
        
        <p id="art449§2">§ 2º. Havendo concordata na falência, será facultado aos contratantes tornar sem efeito a rescisão do contrato de trabalho e consequente indenização, desde que o empregador pague, no mínimo, a metade dos salários que seriam devidos ao empregado durante o interregno.</p>
        
        <p id="art450"><span class="artigo">Art. 450.</span> Ao empregado chamado a ocupar, em comissão, interinamente, ou em substituição eventual ou temporária, cargo diverso do que exercer na empresa, serão garantidas a contagem do tempo naquele serviço, bem como volta ao cargo anterior.</p>
        
        <p id="art451"><span class="artigo">Art. 451.</span> O contrato de trabalho por prazo determinado que, tácita ou expressamente, for prorrogado mais de uma vez passará a vigorar sem determinação de prazo. (Vide Lei nº 9.601, de 1998)</p>
        
        <p id="art452"><span class="artigo">Art. 452.</span> Considera-se por prazo indeterminado todo contrato que suceder, dentro de 6 (seis) meses, a outro contrato por prazo determinado, salvo se a expiração deste dependeu da execução de serviços especializados ou da realização de certos acontecimentos.</p>
        
        <p id="art452a"><span class="artigo">Art. 452-A.</span> O contrato de trabalho intermitente deve ser celebrado por escrito e deve conter especificamente o valor da hora de trabalho, que não pode ser inferior ao valor horário do salário mínimo ou àquele devido aos demais empregados do estabelecimento que exerçam a mesma função em contrato intermitente ou não.</p>
        
        <p id="art452a§1">§ 1º. O empregador convocará, por qualquer meio de comunicação eficaz, para a prestação de serviços, informando qual será a jornada, com, pelo menos, três dias corridos de antecedência.</p>
        
        <p id="art452a§2">§ 2º. Recebida a convocação, o empregado terá o prazo de um dia útil para responder ao chamado, presumindo-se, no silêncio, a recusa.</p>
        
        <p id="art452a§3">§ 3º. A recusa da oferta não descaracteriza a subordinação para fins do contrato de trabalho intermitente.</p>
        
        <p id="art452a§4">§ 4º. Aceita a oferta para o comparecimento ao trabalho, a parte que descumprir, sem justo motivo, pagará à outra parte, no prazo de trinta dias, multa de 50% (cinquenta por cento) da remuneração que seria devida, permitida a compensação em igual prazo.</p>
        
        <p id="art452a§5">§ 5º. O período de inatividade não será considerado tempo à disposição do empregador, podendo o trabalhador prestar serviços a outros contratantes.</p>
        
        <p id="art452a§6">§ 6º. Ao final de cada período de prestação de serviço, o empregado receberá o pagamento imediato das seguintes parcelas:</p>
        
        <p id="art452a§6i">I - remuneração;</p>
        
        <p id="art452a§6ii">II - férias proporcionais com acréscimo de um terço;</p>
        
        <p id="art452a§6iii">III - décimo terceiro salário proporcional;</p>
        
        <p id="art452a§6iv">IV - repouso semanal remunerado; e</p>
        
        <p id="art452a§6v">V - adicionais legais.</p>
        
        <p id="art452a§7">§ 7º. O recibo de pagamento deverá conter a discriminação dos valores pagos relativos a cada uma das parcelas referidas no § 6º. deste artigo.</p>
        
        <p id="art452a§8">§ 8º. O empregador efetuará o recolhimento da contribuição previdenciária e o depósito do Fundo de Garantia do Tempo de Serviço, na forma da lei, com base nos valores pagos no período mensal e fornecerá ao empregado comprovante do cumprimento dessas obrigações.</p>
        
        <p id="art452a§9">§ 9º. A cada doze meses, o empregado adquire direito a usufruir, nos doze meses subsequentes, um mês de férias, período no qual não poderá ser convocado para prestar serviços pelo mesmo empregador.</p>
        
        <p id="art453"><span class="artigo">Art. 453.</span> No tempo de serviço do empregado, quando readmitido, serão computados os períodos, ainda que não contínuos, em que tiver trabalhado anteriormente na empresa, salvo se houver sido despedido por falta grave, recebido indenização legal ou se aposentado espontaneamente.</p>
        
        <p>§ 1º</p>
        
        <p>§ 2º. O ato de concessão de benefício de aposentadoria a empregado que não tiver completado 35 (trinta e cinco) anos de serviço, se homem, ou trinta, se mulher, importa em extinção do vínculo empregatício.</p>
        
        <p id="art454"><span class="artigo">Art. 454.</span> Na vigência do contrato de trabalho, as invenções do empregado, quando decorrentes de sua contribuição pessoal e da instalação ou equipamento fornecidos pelo empregador, serão de propriedade comum, em partes iguais, salvo se o contrato de trabalho tiver por objeto, implícita ou explicitamente, pesquisa científica. (Vide Lei nº 9.279, de 14.5.1996)</p>
        
        <p id="art454p">Parágrafo único. Ao empregador caberá a exploração do invento, ficando obrigado a promovê-la no prazo de um ano da data da concessão da patente, sob pena de reverter em favor do empregado da plena propriedade desse invento. (Vide Lei nº 9.279, de 14.5.1996)</p>
        
        <p id="art455"><span class="artigo">Art. 455.</span> Nos contratos de subempreitada responderá o subempreiteiro pelas obrigações derivadas do contrato de trabalho que celebrar, cabendo, todavia, aos empregados, o direito de reclamação contra o empreiteiro principal pelo inadimplemento daquelas obrigações por parte do primeiro.</p>
        
        <p id="art455p">Parágrafo único. Ao empreiteiro principal fica ressalvada, nos termos da lei civil, ação regressiva contra o subempreiteiro e a retenção de importâncias a este devidas, para a garantia das obrigações previstas neste artigo.</p>
        
        <p id="art456"><span class="artigo">Art. 456.</span> A prova do contrato individual do trabalho será feita pelas anotações constantes da carteira profissional ou por instrumento escrito e suprida por todos os meios permitidos em direito. (Vide Decreto-Lei nº 926, de 1969)</p>
        
        <p id="art456p">Parágrafo único. A falta de prova ou inexistindo cláusula expressa e tal respeito, entender-se-á que o empregado se obrigou a todo e qualquer serviço compatível com a sua condição pessoal.</p>
        
        <p id="art456a"><span class="artigo">Art. 456-A.</span> Cabe ao empregador definir o padrão de vestimenta no meio ambiente laboral, sendo lícita a inclusão no uniforme de logomarcas da própria empresa ou de empresas parceiras e de outros itens de identificação relacionados à atividade desempenhada.</p>
        
        <p id="art456ap">Parágrafo único. A higienização do uniforme é de responsabilidade do trabalhador, salvo nas hipóteses em que forem necessários procedimentos ou produtos diferentes dos utilizados para a higienização das vestimentas de uso comum.</p>
        
        <h2 id="tituloivcapituloii">CAPÍTULO II<br>
        DA REMUNERAÇÃO Alimentação</h2>
        
        <p id="art457"><span class="artigo">Art. 457.</span> Compreendem-se na remuneração do empregado, para todos os efeitos legais, além do salário devido e pago diretamente pelo empregador, como contraprestação do serviço, as gorjetas que receber.</p>
        
        <p id="art457§1..">§ 1º. Integram o salário a importância fixa estipulada, as gratificações legais e as comissões pagas pelo empregador.</p>
        
        <p id="art457§2..">§ 2º. As importâncias, ainda que habituais, pagas a título de ajuda de custo, auxílio-alimentação, vedado seu pagamento em dinheiro, diárias para viagem, prêmios e abonos não integram a remuneração do empregado, não se incorporam ao contrato de trabalho e não constituem base de incidência de qualquer encargo trabalhista e previdenciário.</p>
        
        <p id="art457§3..">§ 3º. Considera-se gorjeta não só a importância espontaneamente dada pelo cliente ao empregado, como também o valor cobrado pela empresa, como serviço ou adicional, a qualquer título, e destinado à distribuição aos empregados.</p>
        
        <p id="art457§4.">§ 4º. Consideram-se prêmios as liberalidades concedidas pelo empregador em forma de bens, serviços ou valor em dinheiro a empregado ou a grupo de empregados, em razão de desempenho superior ao ordinariamente esperado no exercício de suas atividades.</p>
        
        <p><span class="artigo">Art. 458.</span> Além do pagamento em dinheiro, compreende-se no salário, para todos os efeitos legais, a alimentação, habitação, vestuário ou outras prestações &quot;in natura&quot; que a empresa, por força do contrato ou do costume, fornecer habitualmente ao empregado. Em caso algum será permitido o pagamento com bebidas alcoólicas ou drogas nocivas. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 1º. Os valores atribuídos às prestações &quot;in natura&quot; deverão ser justos e razoáveis, não podendo exceder, em cada caso, os dos percentuais das parcelas componentes do salário-mínimo (arts. 81 e 82). Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 2º. Para os efeitos previstos neste artigo, não serão consideradas como salário as seguintes utilidades concedidas pelo empregador:</p>
        
        <p>I – vestuários, equipamentos e outros acessórios fornecidos aos empregados e utilizados no local de trabalho, para a prestação do serviço;</p>
        
        <p>II – educação, em estabelecimento de ensino próprio ou de terceiros, compreendendo os valores relativos a matrícula, mensalidade, anuidade, livros e material didático;</p>
        
        <p>III – transporte destinado ao deslocamento para o trabalho e retorno, em percurso servido ou não por transporte público;</p>
        
        <p>IV – assistência médica, hospitalar e odontológica, prestada diretamente ou mediante seguro-saúde;</p>
        
        <p>V – seguros de vida e de acidentes pessoais;</p>
        
        <p>VI – previdência privada;</p>
        
        <p>VII – (VETADO)</p>
        
        <p>VIII - o valor correspondente ao vale-cultura.</p>
        
        <p>§ 3º. A habitação e a alimentação fornecidas como salário-utilidade deverão atender aos fins a que se destinam e não poderão exceder, respectivamente, a 25% (vinte e cinco por cento) e 20% (vinte por cento) do salário-contratual.</p>
        
        <p>§ 4º. Tratando-se de habitação coletiva, o valor do salário-utilidade a ela correspondente será obtido mediante a divisão do justo valor da habitação pelo número de coabitantes, vedada, em qualquer hipótese, a utilização da mesma unidade residencial por mais de uma família.</p>
        
        <p>§ 5º. O valor relativo à assistência prestada por serviço médico ou odontológico, próprio ou não, inclusive o reembolso de despesas com medicamentos, óculos, aparelhos ortopédicos, próteses, órteses, despesas médico-hospitalares e outras similares, mesmo quando concedido em diferentes modalidades de planos e coberturas, não integram o salário do empregado para qualquer efeito nem o salário de contribuição, para efeitos do previsto na alínea q do § 9º. do art. 28 da Lei no 8.212, de 24 de julho de 1991.</p>
        
        <p><span class="artigo">Art. 459.</span> O pagamento do salário, qualquer que seja a modalidade do trabalho, não deve ser estipulado por período superior a 1 (um) mês, salvo no que concerne a comissões, percentagens e gratificações.</p>
        
        <p>§ 1º. Quando o pagamento houver sido estipulado por mês, deverá ser efetuado, o mais tardar, até o quinto dia útil do mês subsequente ao vencido.</p>
        
        <p><span class="artigo">Art. 460.</span> Na falta de estipulação do salário ou não havendo prova sobre a importância ajustada, o empregado terá direito a perceber salário igual ao daquela que, na mesma empresa, fizer serviço equivalente ou do que for habitualmente pago para serviço semelhante.</p>
        
        <p><span class="artigo">Art. 461.</span> Sendo idêntica a função, a todo trabalho de igual valor, prestado ao mesmo empregador, no mesmo estabelecimento empresarial, corresponderá igual salário, sem distinção de sexo, etnia, nacionalidade ou idade.</p>
        
        <p>§ 1º. Trabalho de igual valor, para os fins deste Capítulo, será o que for feito com igual produtividade e com a mesma perfeição técnica, entre pessoas cuja diferença de tempo de serviço para o mesmo empregador não seja superior a quatro anos e a diferença de tempo na função não seja superior a dois anos.</p>
        
        <p>§ 2º. Os dispositivos deste artigo não prevalecerão quando o empregador tiver pessoal organizado em quadro de carreira ou adotar, por meio de norma interna da empresa ou de negociação coletiva, plano de cargos e salários, dispensada qualquer forma de homologação ou registro em órgão público.</p>
        
        <p>§ 3º. No caso do § 2º. deste artigo, as promoções poderão ser feitas por merecimento e por antiguidade, ou por apenas um destes critérios, dentro de cada categoria profissional.</p>
        
        <p>§ 4º. O trabalhador readaptado em nova função por motivo de deficiência física ou mental atestada pelo órgão competente da Previdência Social não servirá de paradigma para fins de equiparação salarial.</p>
        
        <p>§ 5º. A equiparação salarial só será possível entre empregados contemporâneos no cargo ou na função, ficando vedada a indicação de paradigmas remotos, ainda que o paradigma contemporâneo tenha obtido a vantagem em ação judicial própria.</p>
        
        <p>§ 6º. Na hipótese de discriminação por motivo de sexo, raça, etnia, origem ou idade, o pagamento das diferenças salariais devidas ao empregado discriminado não afasta seu direito de ação de indenização por danos morais, consideradas as especificidades do caso concreto.</p>
        
        <p>§ 7º. Sem prejuízo do disposto no § 6º, no caso de infração ao previsto neste artigo, a multa de que trata o art. 510 desta Consolidação corresponderá a 10 (dez) vezes o valor do novo salário devido pelo empregador ao empregado discriminado, elevada ao dobro, no caso de reincidência, sem prejuízo das demais cominações legais.</p>
        
        <p><span class="artigo">Art. 462.</span> Ao empregador é vedado efetuar qualquer desconto nos salários do empregado, salvo quando este resultar de adiantamentos, de dispositivos de lei ou de contrato coletivo.</p>
        
        <p id="art462§1">§ 1º. Em caso de dano causado pelo empregado, o desconto será lícito, desde que esta possibilidade tenha sido acordada ou na ocorrência de dolo do empregado. (Parágrafo único renumerado pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art462§2">§ 2º. É vedado à empresa que mantiver armazém para venda de mercadorias aos empregados ou serviços estimados a proporcionar-lhes prestações &quot; in natura &quot; exercer qualquer coação ou induzimento no sentido de que os empregados se utilizem do armazém ou dos serviços. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art462§3">§ 3º. Sempre que não for possível o acesso dos empregados a armazéns ou serviços não mantidos pela Empresa, é lícito à autoridade competente determinar a adoção de medidas adequadas, visando a que as mercadorias sejam vendidas e os serviços prestados a preços razoáveis, sem intuito de lucro e sempre em benefício dos empregados. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art462§4">§ 4º. Observado o disposto neste Capítulo, é vedado às empresas limitar, por qualquer forma, a liberdade dos empregados de dispor do seu salário. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art463"><span class="artigo">Art. 463.</span> A prestação, em espécie, do salário será paga em moeda corrente do País.</p>
        
        <p id="art463p">Parágrafo único. O pagamento do salário realizado com inobservância deste artigo considera-se como não feito.</p>
        
        <p id="art464"><span class="artigo">Art. 464.</span> O pagamento do salário deverá ser efetuado contra recibo, assinado pelo empregado; em se tratando de analfabeto, mediante sua impressão digital, ou, não sendo esta possível, a seu rogo. Parágrafo único. Terá força de recibo o comprovante de depósito em conta bancária, aberta para esse fim em nome de cada empregado, com o consentimento deste, em estabelecimento de crédito próximo ao local de trabalho. (Parágrafo incluído pela Lei nº 9.528, de 10.12.1997)</p>
        
        <p><span class="artigo">Art. 465.</span> O pagamento dos salários será efetuado em dia útil e no local do trabalho, dentro do horário do serviço ou imediatamente após o encerramento deste, salvo quando efetuado por depósito em conta bancária, observado o disposto no artigo anterior.</p>
        
        <p id="art466"><span class="artigo">Art. 466.</span> O pagamento de comissões e percentagens só é exigível depois de ultimada a transação a que se referem.</p>
        
        <p id="art466§1">§ 1º. Nas transações realizadas por prestações sucessivas, é exigível o pagamento das percentagens e comissões que lhes disserem respeito proporcionalmente à respectiva liquidação.</p>
        
        <p id="art466§2">§ 2º. A cessação das relações de trabalho não prejudica a percepção das comissões e percentagens devidas na forma estabelecida por este artigo.</p>
        
        <p><span class="artigo">Art. 467.</span> Em caso de rescisão de contrato de trabalho, havendo controvérsia sobre o montante das verbas rescisórias, o empregador é obrigado a pagar ao trabalhador, à data do comparecimento à Justiça do Trabalho, a parte incontroversa dessas verbas, sob pena de pagá-las acrescidas de cinquenta por cento.</p>
        
        <h2 id="tituloivcapituloiii">CAPÍTULO III<br>
        DA ALTERAÇÃO</h2>
        
        <p id="art468"><span class="artigo">Art. 468.</span> Nos contratos individuais de trabalho só é lícita a alteração das respectivas condições por mútuo consentimento, e ainda assim desde que não resultem, direta ou indiretamente, prejuízos ao empregado, sob pena de nulidade da cláusula infringente desta garantia.</p>
        
        <p id="art468§1">§ 1º. Não se considera alteração unilateral a determinação do empregador para que o respectivo empregado reverta ao cargo efetivo, anteriormente ocupado, deixando o exercício de função de confiança.</p>
        
        <p>§ 2º. A alteração de que trata o § 1º. deste artigo, com ou sem justo motivo, não assegura ao empregado o direito à manutenção do pagamento da gratificação correspondente, que não será incorporada, independentemente do tempo de exercício da respectiva função.</p>
        
        <p id="art469"><span class="artigo">Art. 469.</span> Ao empregador é vedado transferir o empregado, sem a sua anuência, para localidade diversa da que resultar do contrato, não se considerando transferência a que não acarretar necessariamente a mudança do seu domicílio .</p>
        
        <p>§ 1º. Não estão compreendidos na proibição deste artigo: os empregados que exerçam cargo de confiança e aqueles cujos contratos tenham como condição, implícita ou explícita, a transferência, quando esta decorra de real necessidade de serviço.</p>
        
        <p id="art469§2">§ 2º. É lícita a transferência quando ocorrer extinção do estabelecimento em que trabalhar o empregado. § 3º. Em caso de necessidade de serviço o empregador poderá transferir o empregado para localidade diversa da que resultar do contrato, não obstante as restrições do artigo anterior, mas, nesse caso, ficará obrigado a um pagamento suplementar, nunca inferior a 25% (vinte e cinco por cento) dos salários que o empregado percebia naquela localidade, enquanto durar essa situação. (Parágrafo incluído pela Lei nº 6.203, de 17.4.1975)</p>
        
        <p><span class="artigo">Art. 470.</span> As despesas resultantes da transferência correrão por conta do empregador.</p>
        
        <h2 id="tituloivcapituloiv">CAPÍTULO IV<br>
        DA SUSPENSÃO E DA INTERRUPÇÃO</h2>
        
        <p id="art471"><span class="artigo">Art. 471.</span> Ao empregado afastado do emprego, são asseguradas, por ocasião de sua volta, todas as vantagens que, em sua ausência, tenham sido atribuídas à categoria a que pertencia na empresa.</p>
        
        <p id="art472"><span class="artigo">Art. 472.</span> O afastamento do empregado em virtude das exigências do serviço militar, ou de outro encargo público, não constituirá motivo para alteração ou rescisão do contrato de trabalho por parte do empregador.</p>
        
        <p id="art472§1">§ 1º. Para que o empregado tenha direito a voltar a exercer o cargo do qual se afastou em virtude de exigências do serviço militar ou de encargo público, é indispensável que notifique o empregador dessa intenção, por telegrama ou carta registrada, dentro do prazo máximo de 30 (trinta) dias, contados da data em que se verificar a respectiva baixa ou a terminação do encargo a que estava obrigado.</p>
        
        <p id="art472§2">§ 2º. Nos contratos por prazo determinado, o tempo de afastamento, se assim acordarem as partes interessadas, não será computado na contagem do prazo para a respectiva terminação.</p>
        
        <p id="art472§3">§ 3º. Ocorrendo motivo relevante de interesse para a segurança nacional, poderá a autoridade competente solicitar o afastamento do empregado do serviço ou do local de trabalho, sem que se configure a suspensão do contrato de trabalho. (Incluído pelo Decreto-lei nº 3, de 27.1.1966)</p>
        
        <p id="art472§4">§ 4º. O afastamento a que se refere o parágrafo anterior será solicitado pela autoridade competente diretamente ao empregador, em representação fundamentada com audiência da Procuradoria Regional do Trabalho, que providenciará desde logo a instauração do competente inquérito administrativo. (Incluído pelo Decreto-lei nº 3, de 27.1.1966)</p>
        
        <p id="art472§5">§ 5º. Durante os primeiros 90 (noventa) dias desse afastamento, o empregado continuará percebendo sua remuneração. (Incluído pelo Decreto-lei nº 3, de 27.1.1966)</p>
        
        <p id="art473"><span class="artigo">Art. 473.</span> O empregado poderá deixar de comparecer ao serviço sem prejuízo do salário: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art473i">I - até 2 (dois) dias consecutivos, em caso de falecimento do cônjuge, ascendente, descendente, irmão ou pessoa que, declarada em sua carteira de trabalho e previdência social, viva sob sua dependência econômica; (Inciso incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art473ii">II - até 3 (três) dias consecutivos, em virtude de casamento; (Inciso incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>III - por 5 (cinco) dias consecutivos, em caso de nascimento de filho, de adoção ou de guarda compartilhada;</p>
        
        <p id="art473iv">IV - por um dia, em cada 12 (doze) meses de trabalho, em caso de doação voluntária de sangue devidamente comprovada; (Inciso incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art473v">V - até 2 (dois) dias consecutivos ou não, para o fim de se alistar eleitor, nos termos da lei respectiva. (Inciso incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art473VI">VI - no período de tempo em que tiver de cumprir as exigências do Serviço Militar referidas na letra &quot;c&quot; do art. 65 da Lei nº 4.375, de 17 de agosto de 1964 (Lei do Serviço Militar). (Incluído pelo Decreto-lei nº 757, de 12.8.1969) VII - nos dias em que estiver comprovadamente realizando provas de exame vestibular para ingresso em estabelecimento de ensino superior. (Inciso incluído pela Lei nº 9.471, de 14.7.1997) VIII - pelo tempo que se fizer necessário, quando tiver que comparecer a juízo.</p>
        
        <p id="art473ix">IX - pelo tempo que se fizer necessário, quando, na qualidade de representante de entidade sindical, estiver participando de reunião oficial de organismo internacional do qual o Brasil seja membro.</p>
        
        <p>X - pelo tempo necessário para acompanhar sua esposa ou companheira em até 6 (seis) consultas médicas, ou em exames complementares, durante o período de gravidez;</p>
        
        <p id="art473xi">XI - por 1 (um) dia por ano para acompanhar filho de até 6 (seis) anos em consulta médica. (Incluído dada pela Lei nº 13.257, de 2016)</p>
        
        <p>XII - até 3 (três) dias, em cada 12 (doze) meses de trabalho, em caso de realização de exames preventivos de câncer devidamente comprovada.</p>
        
        <p>Parágrafo único. O prazo a que se refere o inciso III do caput deste artigo será contado a partir da data de nascimento do filho.</p>
        
        <p id="art474"><span class="artigo">Art. 474.</span> A suspensão do empregado por mais de 30 (trinta) dias consecutivos importa na rescisão injusta do contrato de trabalho.</p>
        
        <p id="art475"><span class="artigo">Art. 475.</span> O empregado que for aposentado por invalidez terá suspenso o seu contrato de trabalho durante o prazo fixado pelas leis de previdência social para a efetivação do benefício.</p>
        
        <p id="art475§1">§ 1º. Recuperando o empregado a capacidade de trabalho e sendo a aposentadoria cancelada, ser-lhe-á assegurado o direito à função que ocupava ao tempo da aposentadoria, facultado, porém, ao empregador, o direito de indenizá-lo por rescisão do contrato de trabalho, nos termos dos arts. 477 e 478, salvo na hipótese de ser ele portador de estabilidade, quando a indenização deverá ser paga na forma do art. 497.</p>
        
        <p id="art475§2">§ 2º. Se o empregador houver admitido substituto para o aposentado, poderá rescindir, com este, o respectivo contrato de trabalho sem indenização, desde que tenha havido ciência inequívoca da interinidade ao ser celebrado o contrato.</p>
        
        <p id="art476"><span class="artigo">Art. 476.</span> Em caso de seguro-doença ou auxílio-enfermidade, o empregado é considerado em licença não remunerada, durante o prazo desse benefício.</p>
        
        <p id="art476a"><span class="artigo">Art. 476-A.</span> O contrato de trabalho poderá ser suspenso, por um período de dois a cinco meses, para participação do empregado em curso ou programa de qualificação profissional oferecido pelo empregador, com duração equivalente à suspensão contratual, mediante previsão em convenção ou acordo coletivo de trabalho e aquiescência formal do empregado, observado o disposto no art. 471 desta Consolidação. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art476a§1">§ 1º. Após a autorização concedida por intermédio de convenção ou acordo coletivo, o empregador deverá notificar o respectivo sindicato, com antecedência mínima de quinze dias da suspensão contratual. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art476a§2">§ 2º. O contrato de trabalho não poderá ser suspenso em conformidade com o disposto no caput deste artigo mais de uma vez no período de dezesseis meses. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art476a§3">§ 3º. O empregador poderá conceder ao empregado ajuda compensatória mensal, sem natureza salarial, durante o período de suspensão contratual nos termos do caput deste artigo, com valor a ser definido em convenção ou acordo coletivo.</p>
        
        <p id="art476a§4">§ 4º. Durante o período de suspensão contratual para participação em curso ou programa de qualificação profissional, o empregado fará jus aos benefícios voluntariamente concedidos pelo empregador. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art476a§5">§ 5º. Se ocorrer a dispensa do empregado no transcurso do período de suspensão contratual ou nos três meses subsequentes ao seu retorno ao trabalho, o empregador pagará ao empregado, além das parcelas indenizatórias previstas na legislação em vigor, multa a ser estabelecida em convenção ou acordo coletivo, sendo de, no mínimo, cem por cento sobre o valor da última remuneração mensal anterior à suspensão do contrato. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art476a§6">§ 6º. Se durante a suspensão do contrato não for ministrado o curso ou programa de qualificação profissional, ou o empregado permanecer trabalhando para o empregador, ficará descaracterizada a suspensão, sujeitando o empregador ao pagamento imediato dos salários e dos encargos sociais referentes ao período, às penalidades cabíveis previstas na legislação em vigor, bem como às sanções previstas em convenção ou acordo coletivo. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art476a§7">§ 7º. O prazo limite fixado no caput poderá ser prorrogado mediante convenção ou acordo coletivo de trabalho e aquiescência formal do empregado, desde que o empregador arque com o ônus correspondente ao valor da bolsa de qualificação profissional, no respectivo período. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <h2>SEÇÃO V<br>
        DA RESCISÃO</h2>
        
        <p id="art477.."><span class="artigo">Art. 477.</span> Na extinção do contrato de trabalho, o empregador deverá proceder à anotação na Carteira de Trabalho e Previdência Social, comunicar a dispensa aos órgãos competentes e realizar o pagamento das verbas rescisórias no prazo e na forma estabelecidos neste artigo.</p>
        
        <p id="art477§1...">§ 1º (Revogado).</p>
        
        <p id="art477§2">§ 2º. O instrumento de rescisão ou recibo de quitação, qualquer que seja a causa ou forma de dissolução do contrato, deve ter especificada a natureza de cada parcela paga ao empregado e discriminado o seu valor, sendo válida a quitação, apenas, relativamente às mesmas parcelas.</p>
        
        <p id="art477§3..">§ 3º (Revogado).</p>
        
        <p id="art477§4..">§ 4º. O pagamento a que fizer jus o empregado será efetuado:</p>
        
        <p>I - em dinheiro, depósito bancário ou cheque visado, conforme acordem as partes; ou</p>
        
        <p>II - em dinheiro ou depósito bancário quando o empregado for analfabeto.</p>
        
        <p id="art477§5">§ 5º. Qualquer compensação no pagamento de que trata o parágrafo anterior não poderá exceder o equivalente a um mês de remuneração do empregado.</p>
        
        <p id="art477§6..">§ 6º. A entrega ao empregado de documentos que comprovem a comunicação da extinção contratual aos órgãos competentes bem como o pagamento dos valores constantes do instrumento de rescisão ou recibo de quitação deverão ser efetuados até dez dias contados a partir do término do contrato.</p>
        
        <p class="alinea">a) (revogado);</p>
        
        <p class="alinea">b) (revogado).</p>
        
        <p id="art477§7..">§ 7º (Revogado).</p>
        
        <p id="art477§11">§ 8º. A inobservância do disposto no § 6º. deste artigo sujeitará o infrator à multa de 160 BTN, por trabalhador, bem assim ao pagamento da multa a favor do empregado, em valor equivalente ao seu salário, devidamente corrigido pelo índice de variação do BTN, salvo quando, comprovadamente, o trabalhador der causa à mora.</p>
        
        <p id="art477§9">§ 9º (vetado).</p>
        
        <p id="art477§10">§ 10. A anotação da extinção do contrato na Carteira de Trabalho e Previdência Social é documento hábil para requerer o benefício do seguro-desemprego e a movimentação da conta vinculada no Fundo de Garantia do Tempo de Serviço, nas hipóteses legais, desde que a comunicação prevista no caput deste artigo tenha sido realizada.</p>
        
        <p id="art477a"><span class="artigo">Art. 477-A.</span> As dispensas imotivadas individuais, plúrimas ou coletivas equiparam-se para todos os fins, não havendo necessidade de autorização prévia de entidade sindical ou de celebração de convenção coletiva ou acordo coletivo de trabalho para sua efetivação.</p>
        
        <p id="art477b"><span class="artigo">Art. 477-B.</span> Plano de Demissão Voluntária ou Incentivada, para dispensa individual, plúrima ou coletiva, previsto em convenção coletiva ou acordo coletivo de trabalho, enseja quitação plena e irrevogável dos direitos decorrentes da relação empregatícia, salvo disposição em contrário estipulada entre as partes.</p>
        
        <p id="art478"><span class="artigo">Art. 478.</span> A indenização devida pela rescisão de contrato por prazo indeterminado será de 1 (um) mês de remuneração por ano de serviço efetivo, ou por ano e fração igual ou superior a 6 (seis) meses. (Vide Lei nº 2.959, de 1956)</p>
        
        <p id="art478§1">§ 1º. O primeiro ano de duração do contrato por prazo indeterminado é considerado como período de experiência, e, antes que se complete, nenhuma indenização será devida.</p>
        
        <p id="art478§2">§ 2º. Se o salário for pago por dia, o cálculo da indenização terá por base 25 (vinte e cinco) dias. (Vide Constituição Federal Art.7 inciso XIII)</p>
        
        <p id="art478§3">§ 3º. Se pago por hora, a indenização apurar-se-á na base de 200 (duzentas) horas por mês. (Vide Constituição Federal Art.7 inciso XIII)</p>
        
        <p id="art478§4">§ 4º. Para os empregados que trabalhem a comissão ou que tenham direito a percentagens, a indenização será calculada pela média das comissões ou percentagens percebidas nos últimos 12 (doze) meses de serviço. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art478§5">§ 5º. Para os empregados que trabalhem por tarefa ou serviço feito, a indenização será calculada na base média do tempo costumeiramente gasto pelo interessado para realização de seu serviço, calculando-se o valor do que seria feito durante 30 (trinta) dias.</p>
        
        <p id="art479"><span class="artigo">Art. 479.</span> Nos contratos que tenham termo estipulado, o empregador que, sem justa causa, despedir o empregado será obrigado a pagar-lhe, a título de indenização, e por metade, a remuneração a que teria direito até o termo do contrato. (Vide Lei nº 9.601, de 1998)</p>
        
        <p id="art479p">Parágrafo único. Para a execução do que dispõe o presente artigo, o cálculo da parte variável ou incerta dos salários será feito de acordo com o prescrito para o cálculo da indenização referente à rescisão dos contratos por prazo indeterminado.</p>
        
        <p id="art480"><span class="artigo">Art. 480.</span> Havendo termo estipulado, o empregado não se poderá desligar do contrato, sem justa causa, sob pena de ser obrigado a indenizar o empregador dos prejuízos que desse fato lhe resultarem. (Vide Lei nº 9.601, de 1998)</p>
        
        <p id="art480§1">§ 1º. A indenização, porém, não poderá exceder àquela a que teria direito o empregado em idênticas condições. (Renumerado do parágrafo único pelo Decreto-lei nº 6.353, de 20.3.1944)</p>
        
        <p id="art481"><span class="artigo">Art. 481.</span> Aos contratos por prazo determinado, que contiverem cláusula assecuratória do direito recíproco de rescisão antes de expirado o termo ajustado, aplicam-se, caso seja exercido tal direito por qualquer das partes, os princípios que regem a rescisão dos contratos por prazo indeterminado.</p>
        
        <p id="art482"><span class="artigo">Art. 482.</span> Constituem justa causa para rescisão do contrato de trabalho pelo empregador:</p>
        
        <p id="art482a" class="alinea">a) ato de improbidade;</p>
        
        <p id="art482b" class="alinea">b) incontinência de conduta ou mau procedimento;</p>
        
        <p id="art482c" class="alinea">c) negociação habitual por conta própria ou alheia sem permissão do empregador, e quando constituir ato de concorrência à empresa para a qual trabalha o empregado, ou for prejudicial ao serviço;</p>
        
        <p id="art482d" class="alinea">d) condenação criminal do empregado, passada em julgado, caso não tenha havido suspensão da execução da pena;</p>
        
        <p id="art482e" class="alinea">e) desídia no desempenho das respectivas funções;</p>
        
        <p id="art482f" class="alinea">f) embriaguez habitual ou em serviço;</p>
        
        <p id="art482g" class="alinea">g) violação de segredo da empresa;</p>
        
        <p id="art482h" class="alinea">h) ato de indisciplina ou de insubordinação;</p>
        
        <p id="art482i" class="alinea">i) abandono de emprego;</p>
        
        <p id="art482j" class="alinea">j) ato lesivo da honra ou da boa fama praticado no serviço contra qualquer pessoa, ou ofensas físicas, nas mesmas condições, salvo em caso de legítima defesa, própria ou de outrem;</p>
        
        <p id="art482k" class="alinea">k) ato lesivo da honra ou da boa fama ou ofensas físicas praticadas contra o empregador e superiores hierárquicos, salvo em caso de legítima defesa, própria ou de outrem;</p>
        
        <p id="art482l" class="alinea">l) prática constante de jogos de azar.</p>
        
        <p id="art482m" class="alinea">m) perda da habilitação ou dos requisitos estabelecidos em lei para o exercício da profissão, em decorrência de conduta dolosa do empregado.</p>
        
        <p id="art482pu">Parágrafo único. Constitui igualmente justa causa para dispensa de empregado a prática, devidamente comprovada em inquérito administrativo, de atos atentatórios à segurança nacional. (Incluído pelo Decreto-lei nº 3, de 27.1.1966)</p>
        
        <p id="art483"><span class="artigo">Art. 483.</span> O empregado poderá considerar rescindido o contrato e pleitear a devida indenização quando:</p>
        
        <p id="art483a" class="alinea">a) forem exigidos serviços superiores às suas forças, defesos por lei, contrários aos bons costumes, ou alheios ao contrato;</p>
        
        <p id="art483b" class="alinea">b) for tratado pelo empregador ou por seus superiores hierárquicos com rigor excessivo;</p>
        
        <p id="art483c" class="alinea">c) correr perigo manifesto de mal considerável;</p>
        
        <p id="art483d" class="alinea">d) não cumprir o empregador as obrigações do contrato;</p>
        
        <p id="art483e" class="alinea">e) praticar o empregador ou seus prepostos, contra ele ou pessoas de sua família, ato lesivo da honra e boa fama;</p>
        
        <p id="art483f" class="alinea">f) o empregador ou seus prepostos ofenderem-no fisicamente, salvo em caso de legítima defesa, própria ou de outrem;</p>
        
        <p id="art483g" class="alinea">g) o empregador reduzir o seu trabalho, sendo este por peça ou tarefa, de forma a afetar sensivelmente a importância dos salários.</p>
        
        <p id="art483§1">§ 1º. O empregado poderá suspender a prestação dos serviços ou rescindir o contrato, quando tiver de desempenhar obrigações legais, incompatíveis com a continuação do serviço.</p>
        
        <p id="art483§2">§ 2º. No caso de morte do empregador constituído em empresa individual, é facultado ao empregado rescindir o contrato de trabalho.</p>
        
        <p id="art483§3">§ 3º. Nas hipóteses das letras &quot;d&quot; e &quot;g&quot;, poderá o empregado pleitear a rescisão de seu contrato de trabalho e o pagamento das respectivas indenizações, permanecendo ou não no serviço até final decisão do processo.</p>
        
        <p id="art484"><span class="artigo">Art. 484.</span> Havendo culpa recíproca no ato que determinou a rescisão do contrato de trabalho, o tribunal de trabalho reduzirá a indenização à que seria devida em caso de culpa exclusiva do empregador, por metade.</p>
        
        <p id="art484a"><span class="artigo">Art. 484-A.</span> O contrato de trabalho poderá ser extinto por acordo entre empregado e empregador, caso em que serão devidas as seguintes verbas trabalhistas:</p>
        
        <p>I - por metade:</p>
        
        <p class="alinea">a) o aviso prévio, se indenizado; e</p>
        
        <p class="alinea">b) a indenização sobre o saldo do Fundo de Garantia do Tempo de Serviço, prevista no § 1º. do art. 18 da Lei no 8.036, de 11 de maio de 1990;</p>
        
        <p>II - na integralidade, as demais verbas trabalhistas.</p>
        
        <p>§ 1º. A extinção do contrato prevista no caput deste artigo permite a movimentação da conta vinculada do trabalhador no Fundo de Garantia do Tempo de Serviço na forma do inciso I-A do art. 20 da Lei no 8.036, de 11 de maio de 1990, limitada até 80% (oitenta por cento) do valor dos depósitos.</p>
        
        <p>§ 2º. A extinção do contrato por acordo prevista no caput deste artigo não autoriza o ingresso no Programa de Seguro-Desemprego.</p>
        
        <p id="art485"><span class="artigo">Art. 485.</span> Quando cessar a atividade da empresa, por morte do empregador, os empregados terão direito, conforme o caso, à indenização a que se referem os art. 477 e 497.</p>
        
        <p id="art486"><span class="artigo">Art. 486.</span> No caso de paralisação temporária ou definitiva do trabalho, motivada por ato de autoridade municipal, estadual ou federal, ou pela promulgação de lei ou resolução que impossibilite a continuação da atividade, prevalecerá o pagamento da indenização, que ficará a cargo do governo responsável.</p>
        
        <p id="art486§1">§ 1º. Sempre que o empregador invocar em sua defesa o preceito do presente artigo, o tribunal do trabalho competente notificará a pessoa de direito público apontada como responsável pela paralisação do trabalho, para que, no prazo de 30 (trinta) dias, alegue o que entender devido, passando a figurar no processo como chamada à autoria. (Incluído pelo Decreto-lei nº 6.110, de 16.12.1943)</p>
        
        <p id="art486§2.">§ 2º. Sempre que a parte interessada, firmada em documento hábil, invocar defesa baseada na disposição deste artigo e indicar qual o juiz competente, será ouvida a parte contrária, para, dentro de 3 (três) dias, falar sobre essa alegação.</p>
        
        <p id="art486§3">§ 3º. Verificada qual a autoridade responsável, a Junta de Conciliação ou Juiz dar-se-á por incompetente, remetendo os autos ao Juiz Privativo da Fazenda, perante o qual correrá o feito nos termos previstos no processo comum.</p>
        
        <h2>SEÇÃO VI<br>
        DO AVISO PRÉVIO</h2>
        
        <p id="art487"><span class="artigo">Art. 487.</span> Não havendo prazo estipulado, a parte que, sem justo motivo, quiser rescindir o contrato deverá avisar a outra da sua resolução com a antecedência mínima de:</p>
        
        <p id="art487i">I - oito dias, se o pagamento for efetuado por semana ou tempo inferior;</p>
        
        <p id="art487ii.">II - trinta dias aos que perceberem por quinzena ou mês, ou que tenham mais de 12 (doze) meses de serviço na empresa.</p>
        
        <p id="art487§1">§ 1º. A falta do aviso prévio por parte do empregador dá ao empregado o direito aos salários correspondentes ao prazo do aviso, garantida sempre a integração desse período no seu tempo de serviço.</p>
        
        <p id="art487§2">§ 2º. A falta de aviso prévio por parte do empregado dá ao empregador o direito de descontar os salários correspondentes ao prazo respectivo.</p>
        
        <p id="art487§3">§ 3º. Em se tratando de salário pago na base de tarefa, o cálculo, para os efeitos dos parágrafos anteriores, será feito de acordo com a média dos últimos 12 (doze) meses de serviço.</p>
        
        <p id="art487§4">§ 4º. É devido o aviso prévio na despedida indireta. (Parágrafo incluído pela Lei nº 7.108, de 5.7.1983)</p>
        
        <p id="art487§5">§ 5º. O valor das horas extraordinárias habituais integra o aviso prévio indenizado. (Parágrafo incluído pela Lei nº 10.218, de 11.4.2001)</p>
        
        <p id="art487§6">§ 6º. O reajustamento salarial coletivo, determinado no curso do aviso prévio, beneficia o empregado pré-avisado da despedida, mesmo que tenha recebido antecipadamente os salários correspondentes ao período do aviso, que integra seu tempo de serviço para todos os efeitos legais. (Parágrafo incluído pela Lei nº 10.218, de 11.4.2001)</p>
        
        <p id="art488"><span class="artigo">Art. 488.</span> O horário normal de trabalho do empregado, durante o prazo do aviso, e se a rescisão tiver sido promovida pelo empregador, será reduzido de 2 (duas) horas diárias, sem prejuízo do salário integral.</p>
        
        <p id="art488p">Parágrafo único. É facultado ao empregado trabalhar sem a redução das 2 (duas) horas diárias previstas neste artigo, caso em que poderá faltar ao serviço, sem prejuízo do salário integral, por 1 (um) dia, na hipótese do inciso l, e por 7 (sete) dias corridos, na hipótese do inciso II do art. 487 desta Consolidação.</p>
        
        <p id="art489"><span class="artigo">Art. 489.</span> Dado o aviso prévio, a rescisão torna-se efetiva depois de expirado o respectivo prazo, mas, se a parte notificante reconsiderar o ato, antes de seu termo, à outra parte é facultado aceitar ou não a reconsideração.</p>
        
        <p id="art489p">Parágrafo único. Caso seja aceita a reconsideração ou continuando a prestação depois de expirado o prazo, o contrato continuará a vigorar, como se o aviso prévio não tivesse sido dado.</p>
        
        <p id="art490"><span class="artigo">Art. 490.</span> O empregador que, durante o prazo do aviso prévio dado ao empregado, praticar ato que justifique a rescisão imediata do contrato, sujeita-se ao pagamento da remuneração correspondente ao prazo do referido aviso, sem prejuízo da indenização que for devida.</p>
        
        <p id="art491"><span class="artigo">Art. 491.</span> O empregado que, durante o prazo do aviso prévio, cometer qualquer das faltas consideradas pela lei como justas para a rescisão, perde o direito ao restante do respectivo prazo.</p>
        
        <h2 id="tituloivcapitulovii">CAPÍTULO VII<br>
        DA ESTABILIDADE</h2>
        
        <p id="art492"><span class="artigo">Art. 492.</span> O empregado que contar mais de 10 (dez) anos de serviço na mesma empresa não poderá ser despedido senão por motivo de falta grave ou circunstância de força maior, devidamente comprovadas.</p>
        
        <p id="art492p">Parágrafo único. Considera-se como de serviço todo o tempo em que o empregado esteja à disposição do empregador.</p>
        
        <p id="art493"><span class="artigo">Art. 493.</span> Constitui falta grave a prática de qualquer dos fatos a que se refere o art. 482, quando por sua repetição ou natureza representem séria violação dos deveres e obrigações do empregado.</p>
        
        <p id="art494"><span class="artigo">Art. 494.</span> O empregado acusado de falta grave poderá ser suspenso de suas funções, mas a sua despedida só se tornará efetiva após o inquérito e que se verifique a procedência da acusação.</p>
        
        <p id="art494p">Parágrafo único. A suspensão, no caso deste artigo, perdurará até a decisão final do processo.</p>
        
        <p id="art495"><span class="artigo">Art. 495.</span> Reconhecida a inexistência de falta grave praticada pelo empregado, fica o empregador obrigado a readmiti-lo no serviço e a pagar-lhe os salários a que teria direito no período da suspensão.</p>
        
        <p id="art496"><span class="artigo">Art. 496.</span> Quando a reintegração do empregado estável for desaconselhável, dado o grau de incompatibilidade resultante do dissídio, especialmente quando for o empregador pessoa física, o tribunal do trabalho poderá converter aquela obrigação em indenização devida nos termos do artigo seguinte.</p>
        
        <p id="art497"><span class="artigo">Art. 497.</span> Extinguindo-se a empresa, sem a ocorrência de motivo de força maior, ao empregado estável despedido é garantida a indenização por rescisão do contrato por prazo indeterminado, paga em dobro.</p>
        
        <p id="art498"><span class="artigo">Art. 498.</span> Em caso de fechamento do estabelecimento, filial ou agência, ou supressão necessária de atividade, sem ocorrência de motivo de força maior, é assegurado aos empregados estáveis, que ali exerçam suas funções, direito à indenização, na forma do artigo anterior.</p>
        
        <p id="art499"><span class="artigo">Art. 499.</span> Não haverá estabilidade no exercício dos cargos de diretoria, gerência ou outros de confiança imediata do empregador, ressalvado o cômputo do tempo de serviço para todos os efeitos legais.</p>
        
        <p id="art499§1">§ 1º. Ao empregado garantido pela estabilidade que deixar de exercer cargo de confiança, é assegurada, salvo no caso de falta grave, a reversão ao cargo efetivo que haja anteriormente ocupado.</p>
        
        <p id="art499§2">§ 2º. Ao empregado despedido sem justa causa, que só tenha exercido cargo de confiança e que contar mais de 10 (dez) anos de serviço na mesma empresa, é garantida a indenização proporcional ao tempo de serviço nos termos dos arts. 477 e 478.</p>
        
        <p id="art499§3">§ 3º. A despedida que se verificar com o fim de obstar ao empregado a aquisição de estabilidade sujeitará o empregador a pagamento em dobro da indenização prescrita nos arts. 477 e 478.</p>
        
        <p id="art500."><span class="artigo">Art. 500.</span> O pedido de demissão do empregado estável só será válido quando feito com a assistência do respectivo Sindicato e, se não o houver, perante autoridade local competente do Ministério do Trabalho e Previdência Social ou da Justiça do Trabalho. (Revigorado com nova redação, pela Lei nº 5.584, de 26.6.1970)</p>
        
        <h2 id="tituloivcapituloviii">CAPÍTULO VIII<br>
        DA FORÇA MAIOR</h2>
        
        <p id="art501"><span class="artigo">Art. 501.</span> Entende-se como força maior todo acontecimento inevitável, em relação à vontade do empregador, e para a realização do qual este não concorreu, direta ou indiretamente.</p>
        
        <p id="art501§1">§ 1º. A imprevidência do empregador exclui a razão de força maior.</p>
        
        <p id="art501§2">§ 2º. À ocorrência do motivo de força maior que não afetar substancialmente, nem for suscetível de afetar, em tais condições, a situação econômica e financeira da empresa não se aplicam as restrições desta Lei referentes ao disposto neste Capítulo.</p>
        
        <p id="art502"><span class="artigo">Art. 502.</span> Ocorrendo motivo de força maior que determine a extinção da empresa, ou de um dos estabelecimentos em que trabalhe o empregado, é assegurada a este, quando despedido, uma indenização na forma seguinte:</p>
        
        <p id="art502i">I - sendo estável, nos termos dos arts. 477 e 478;</p>
        
        <p id="art502ii">II - não tendo direito à estabilidade, metade da que seria devida em caso de rescisão sem justa causa;</p>
        
        <p id="art502iii">III - havendo contrato por prazo determinado, aquela a que se refere o art. 479 desta Lei, reduzida igualmente à metade.</p>
        
        <p id="art503"><span class="artigo">Art. 503.</span> É lícita, em caso de força maior ou prejuízos devidamente comprovados, a redução geral dos salários dos empregados da empresa, proporcionalmente aos salários de cada um, não podendo, entretanto, ser superior a 25% (vinte e cinco por cento), respeitado, em qualquer caso, o salário mínimo da região.</p>
        
        <p id="art503p">Parágrafo único. Cessados os efeitos decorrentes do motivo de força maior, é garantido o restabelecimento dos salários reduzidos.</p>
        
        <p id="art504"><span class="artigo">Art. 504.</span> Comprovada a falsa alegação do motivo de força maior, é garantida a reintegração aos empregados estáveis, e aos não-estáveis o complemento da indenização já percebida, assegurado a ambos o pagamento da remuneração atrasada.</p>
        
        <h2 id="tituloivcapituloix">CAPÍTULO IX<br>
        DISPOSIÇÕES ESPECIAIS</h2>
        
        <p id="art505"><span class="artigo">Art. 505.</span> São aplicáveis aos trabalhadores rurais os dispositivos constantes dos Capítulos I, II e VI do presente Título.</p>
        
        <p id="art506"><span class="artigo">Art. 506.</span> No contrato de trabalho agrícola é lícito o acordo que estabelecer a remuneração in natura, contanto que seja de produtos obtidos pela exploração do negócio e não exceda de 1/3 (um terço) do salário total do empregado.</p>
        
        <p id="art507"><span class="artigo">Art. 507.</span> As disposições do Capítulo VII do presente Título não serão aplicáveis aos empregados em consultórios ou escritórios de profissionais liberais. Parágrafo único. (Revogado pela Lei nº 6.533, de 24.5.1978)</p>
        
        <p id="art507a"><span class="artigo">Art. 507-A.</span> Nos contratos individuais de trabalho cuja remuneração seja superior a duas vezes o limite máximo estabelecido para os benefícios do Regime Geral de Previdência Social, poderá ser pactuada cláusula compromissória de arbitragem, desde que por iniciativa do empregado ou mediante a sua concordância expressa, nos termos previstos na Lei no 9.307, de 23 de setembro de 1996.</p>
        
        <p id="art507b"><span class="artigo">Art. 507-B.</span> É facultado a empregados e empregadores, na vigência ou não do contrato de emprego, firmar o termo de quitação anual de obrigações trabalhistas, perante o sindicato dos empregados da categoria.</p>
        
        <p>Parágrafo único. O termo discriminará as obrigações de dar e fazer cumpridas mensalmente e dele constará a quitação anual dada pelo empregado, com eficácia liberatória das parcelas nele especificadas.</p>
        
        <p id="art508"><span class="artigo">Art. 508.</span> (Revogado pela Lei nº 12.347, de 2010)</p>
        
        <p id="art509"><span class="artigo">Art. 509.</span> (Revogado pela Lei nº 6.533, de 24.5.1978)</p>
        
        <p id="art935"><span class="artigo">Art. 510.</span> Pela infração das proibições constantes deste Título, será imposta à empresa a multa de valor igual a 1 (um) salário mínimo regional, elevada ao dobro, no caso de reincidência, sem prejuízo das demais cominações legais.</p>
        
        <h1 id="tituloiva">TÍTULO IV-A<br>
        DA REPRESENTAÇÃO DOS EMPREGADOS</h1>
        
        <p id="art510a"><span class="artigo">Art. 510-A.</span> Nas empresas com mais de duzentos empregados, é assegurada a eleição de uma comissão para representá-los, com a finalidade de promover-lhes o entendimento direto com os empregadores.</p>
        
        <p>§ 1º. A comissão será composta:</p>
        
        <p>I - nas empresas com mais de duzentos e até três mil empregados, por três membros;</p>
        
        <p>II - nas empresas com mais de três mil e até cinco mil empregados, por cinco membros;</p>
        
        <p>III - nas empresas com mais de cinco mil empregados, por sete membros.</p>
        
        <p>§ 2º. No caso de a empresa possuir empregados em vários Estados da Federação e no Distrito Federal, será assegurada a eleição de uma comissão de representantes dos empregados por Estado ou no Distrito Federal, na mesma forma estabelecida no § 1º. deste artigo.</p>
        
        <p id="art510b"><span class="artigo">Art. 510-B.</span> A comissão de representantes dos empregados terá as seguintes atribuições:</p>
        
        <p>I - representar os empregados perante a administração da empresa;</p>
        
        <p>II - aprimorar o relacionamento entre a empresa e seus empregados com base nos princípios da boa-fé e do respeito mútuo;</p>
        
        <p>III - promover o diálogo e o entendimento no ambiente de trabalho com o fim de prevenir conflitos;</p>
        
        <p>IV - buscar soluções para os conflitos decorrentes da relação de trabalho, de forma rápida e eficaz, visando à efetiva aplicação das normas legais e contratuais;</p>
        
        <p>V - assegurar tratamento justo e imparcial aos empregados, impedindo qualquer forma de discriminação por motivo de sexo, idade, religião, opinião política ou atuação sindical;</p>
        
        <p>VI - encaminhar reivindicações específicas dos empregados de seu âmbito de representação;</p>
        
        <p>VII - acompanhar o cumprimento das leis trabalhistas, previdenciárias e das convenções coletivas e acordos coletivos de trabalho.</p>
        
        <p>§ 1º. As decisões da comissão de representantes dos empregados serão sempre colegiadas, observada a maioria simples.</p>
        
        <p>§ 2º. A comissão organizará sua atuação de forma independente.</p>
        
        <p id="art510c"><span class="artigo">Art. 510-C.</span> A eleição será convocada, com antecedência mínima de trinta dias, contados do término do mandato anterior, por meio de edital que deverá ser fixado na empresa, com ampla publicidade, para inscrição de candidatura.</p>
        
        <p>§ 1º. Será formada comissão eleitoral, integrada por cinco empregados, não candidatos, para a organização e o acompanhamento do processo eleitoral, vedada a interferência da empresa e do sindicato da categoria.</p>
        
        <p>§ 2º. Os empregados da empresa poderão candidatar-se, exceto aqueles com contrato de trabalho por prazo determinado, com contrato suspenso ou que estejam em período de aviso prévio, ainda que indenizado.</p>
        
        <p>§ 3º. Serão eleitos membros da comissão de representantes dos empregados os candidatos mais votados, em votação secreta, vedado o voto por representação.</p>
        
        <p>§ 4º. A comissão tomará posse no primeiro dia útil seguinte à eleição ou ao término do mandato anterior.</p>
        
        <p>§ 5º. Se não houver candidatos suficientes, a comissão de representantes dos empregados poderá ser formada com número de membros inferior ao previsto no art. 510-A desta Consolidação.</p>
        
        <p>§ 6º. Se não houver registro de candidatura, será lavrada ata e convocada nova eleição no prazo de um ano.</p>
        
        <p id="art510d"><span class="artigo">Art. 510-D.</span> O mandato dos membros da comissão de representantes dos empregados será de um ano.</p>
        
        <p>§ 1º. O membro que houver exercido a função de representante dos empregados na comissão não poderá ser candidato nos dois períodos subsequentes.</p>
        
        <p>§ 2º. O mandato de membro de comissão de representantes dos empregados não implica suspensão ou interrupção do contrato de trabalho, devendo o empregado permanecer no exercício de suas funções.</p>
        
        <p>§ 3º. Desde o registro da candidatura até um ano após o fim do mandato, o membro da comissão de representantes dos empregados não poderá sofrer despedida arbitrária, entendendo-se como tal a que não se fundar em motivo disciplinar, técnico, econômico ou financeiro.</p>
        
        <p>§ 4º. Os documentos referentes ao processo eleitoral devem ser emitidos em duas vias, as quais permanecerão sob a guarda dos empregados e da empresa pelo prazo de cinco anos, à disposição para consulta de qualquer trabalhador interessado, do Ministério Público do Trabalho e do Ministério do Trabalho.</p>
        
        <h1 id="titulov">TÍTULO V<br>
        DA ORGANIZAÇÃO SINDICAL</h1>
        
        <h2 id="titulovcapituloi">CAPÍTULO I<br>
        DA INSTITUIÇÃO SINDICAL</h2>
        
        <h3 id="titulovcapituloisecaoi">SEÇÃO I<br>
        DA ASSOCIAÇÃO EM SINDICATO</h3>
        
        <p id="art511."><span class="artigo">Art. 511.</span> É lícita a associação para fins de estudo, defesa e coordenação dos seus interesses econômicos ou profissionais de todos os que, como empregadores, empregados, agentes ou trabalhadores autônomos ou profissionais liberais exerçam, respectivamente, a mesma atividade ou profissão ou atividades ou profissões similares ou conexas. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art511§1">§ 1º. A solidariedade de interesses econômicos dos que empreendem atividades idênticas, similares ou conexas, constitui o vínculo social básico que se denomina categoria econômica. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art511§2">§ 2º. A similitude de condições de vida oriunda da profissão ou trabalho em comum, em situação de emprego na mesma atividade econômica ou em atividades econômicas similares ou conexas, compõe a expressão social elementar compreendida como categoria profissional. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art511§3">§ 3º. Categoria profissional diferenciada é a que se forma dos empregados que exerçam profissões ou funções diferenciadas por força de estatuto profissional especial ou em consequência de condições de vida singulares. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946) (Vide Lei nº 12.998, de 2014)</p>
        
        <p id="art511§4">§ 4º. Os limites de identidade, similaridade ou conexidade fixam as dimensões dentro das quais a categoria econômica ou profissional é homogênea e a associação é natural. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art512."><span class="artigo">Art. 512.</span> Somente as associações profissionais constituídas para os fins e na forma do artigo anterior e registradas de acordo com o art. 558 poderão ser reconhecidas como Sindicatos e investidas nas prerrogativas definidas nesta Lei.</p>
        
        <p id="art513."><span class="artigo">Art. 513.</span> São prerrogativas dos sindicatos: (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art513a.." class="alinea">a) representar, perante as autoridades administrativas e judiciárias os interesses gerais da respectiva categoria ou profissão liberal ou interesses individuais dos associados relativos à atividade ou profissão exercida; (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art513b.." class="alinea">b) celebrar contratos coletivos de trabalho; (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art513c.." class="alinea">c) eleger ou designar os representantes da respectiva categoria ou profissão liberal; (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art513d.." class="alinea">d) colaborar com o Estado, como órgãos técnicos e consultivos, na estudo e solução dos problemas que se relacionam com a respectiva categoria ou profissão liberal; (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art513e." class="alinea">e) impor contribuições a todos aqueles que participam das categorias econômicas ou profissionais ou das profissões liberais representadas. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art513p.">Parágrafo Único. Os sindicatos de empregados terão, outrossim, a prerrogativa de fundar e manter agências de colocação. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art514."><span class="artigo">Art. 514.</span> São deveres dos sindicatos: (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art514a.." class="alinea">a) colaborar com os poderes públicos no desenvolvimento da solidariedade social; (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art514b.." class="alinea">b) manter serviços de assistência judiciária para os associados; (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art514c.." class="alinea">c) promover a conciliação nos dissídios de trabalho. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art514d" class="alinea">d) sempre que possível, e de acordo com as suas possibilidades, manter no seu quadro de pessoal, em convênio com entidades assistenciais ou por conta própria, um assistente social com as atribuições específicas de promover a cooperação operacional na empresa e a integração profissional na Classe.</p>
        
        <p id="art514p..">Parágrafo único. Os sindicatos de empregados terão, outrossim, o dever de: (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art514pa." class="alinea">a) promover a fundação de cooperativas de consumo e de crédito; (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art514pb." class="alinea">b) fundar e manter escolas da alfabetização e pré-vocacionais. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <h3 id="titulovcapituloisecaoii">SEÇÃO II<br>
        DO RECONHECIMENTO E INVESTIDURA SINDICAL</h3>
        
        <p id="art515."><span class="artigo">Art. 515.</span> As associações profissionais deverão satisfazer os seguintes requisitos para serem reconhecidas como sindicatos: (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art515a.." class="alinea">a) reunião de um terço, no mínimo, de empresas legalmente constituídas, sob a forma individual ou de sociedade, se se tratar de associação de empregadores; ou de um terço dos que integrem a mesma categoria ou exerçam a mesma profissão liberal se se tratar de associação de empregados ou de trabalhadores ou agentes autônomos ou de profissão liberal; (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art515b" class="alinea">b) duração de 3 (três) anos para o mandato da diretoria; (Redação dada pelo Decreto-lei nº 771, de 19.8.1969)</p>
        
        <p id="art515c.." class="alinea">c) exercício do cargo de presidente por brasileiro nato, e dos demais cargos de administração e representação por brasileiros. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art515p..">Parágrafo único. O ministro do Trabalho, Indústria, e Comércio poderá, excepcionalmente, reconhecer como sindicato a associação cujo número de associados seja inferior ao terço a que se refere a alínea a. (Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art516."><span class="artigo">Art. 516.</span> Não será reconhecido mais de um Sindicato representativo da mesma categoria econômica ou profissional, ou profissão liberal, em uma dada base territorial.</p>
        
        <p id="art517."><span class="artigo">Art. 517.</span> Os sindicatos poderão ser distritais, municipais, intermunicipais, estaduais e interestaduais. Excepcionalmente, e atendendo às peculiaridades de determinadas categorias ou profissões, o ministro do Trabalho, Indústria e Comércio poderá autorizar o reconhecimento de sindicatos nacionais.</p>
        
        <p id="art517§1">§ 1º. O ministro do Trabalho, Indústria e Comércio, outorgará e delimitará a base territorial do sindicato.</p>
        
        <p id="art517§2">§ 2º. Dentro da base territorial que lhe for determinada é facultado ao sindicato instituir delegacias ou secções para melhor proteção dos associados e da categoria econômica ou profissional ou profissão liberal representada.</p>
        
        <p id="art518."><span class="artigo">Art. 518.</span> O pedido de reconhecimento será dirigido ao ministro do Trabalho, Indústria e Comércio, instruído com exemplar ou cópia autenticada dos estatutos da associação.</p>
        
        <p id="art518§1..">§ 1º. Os estatutos deverão conter:</p>
        
        <p id="art518§1a.." class="alinea">a) a denominação e a sede da associação;</p>
        
        <p id="art518§1b.." class="alinea">b) a categoria econômica ou profissional ou a profissão liberal cuja representação é requerida;</p>
        
        <p id="art518§1c.." class="alinea">c) a afirmação de que a associação agirá como órgão de colaboração com os poderes públicos e as demais associações no sentido da solidariedade social e da subordinação dos interesses econômicos ou profissionais ao interesse nacional;</p>
        
        <p id="art518§1d" class="alinea">d) as atribuições, o processo eleitoral e das votações, os casos de perda de mandato e de substituição dos administradores;</p>
        
        <p id="art518§1e" class="alinea">e) o modo de constituição e administração do patrimônio social e o destino que lhe será dado no caso de dissolução;</p>
        
        <p id="art518§1f" class="alinea">f) as condições em que se dissolverá associação.</p>
        
        <p id="art518§2..">§ 2º. O processo de reconhecimento será regulado em instruções baixadas pelo ministro do Trabalho, Indústria e Comércio.</p>
        
        <p id="art519."><span class="artigo">Art. 519.</span> A investidura sindical será conferida sempre à associação profissional mais representativa, a juízo do Ministro do Trabalho, constituindo elementos para essa apreciação, entre outros:</p>
        
        <p id="art519a." class="alinea">a) o número de associados;</p>
        
        <p id="art519b." class="alinea">b) os serviços sociais fundados e mantidos;</p>
        
        <p id="art519c." class="alinea">c) o valor do patrimônio.</p>
        
        <p id="art520."><span class="artigo">Art. 520.</span> Reconhecida como sindicato a associação profissional, ser-lhe-á expedida carta de reconhecimento, assinada pelo ministro do Trabalho, Indústria e Comércio, na qual será especificada a representação econômica ou profissional conferida e mencionada a base territorial outorgada.</p>
        
        <p id="art520§4">Parágrafo único. O reconhecimento investe a associação nas prerrogativas do art. 513 e a obriga aos deveres do art. 514, cujo inadimplemento a sujeitará às sanções desta lei.</p>
        
        <p id="art521"><span class="artigo">Art. 521.</span> São condições para o funcionamento do Sindicato:</p>
        
        <p id="art521a" class="alinea">a) proibição de qualquer propaganda de doutrinas incompatíveis com as instituições e os interesses da Nação, bem como de candidaturas a cargos eletivos estranhos ao sindicato. (Redação dada pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art521b" class="alinea">b) proibição de exercício de cargo eletivo cumulativamente com o de emprego remunerado pelo sindicato ou por entidade sindical de grau superior;</p>
        
        <p id="art521c" class="alinea">c) gratuidade do exercício dos cargos eletivos.</p>
        
        <p id="art521d" class="alinea">d) proibição de quaisquer atividades não compreendidas nas finalidades mencionadas no art. 511, inclusive as de caráter político-partidário; (Incluída pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art521e" class="alinea">e) proibição de cessão gratuita ou remunerada da respectiva sede a entidade de índole político-partidária. (Incluída pelo Decreto-lei nº 9.502, de 23.7.1946</p>
        
        <p id="art521p">Parágrafo único. Quando, para o exercício de mandato, tiver o associado de sindicato de empregados, de trabalhadores autônomos ou de profissionais liberais de se afastar do seu trabalho, poderá ser-lhe arbitrada pela assembleia geral uma gratificação nunca excedente da importância de sua remuneração na profissão respectiva.</p>
        
        <h3 id="titulovcapituloisecaoiii">SEÇÃO III<br>
        DA ADMINISTRAÇÃO DO SINDICATO</h3>
        
        <p id="art522."><span class="artigo">Art. 522.</span> A administração do sindicato será exercida por uma diretoria constituída no máximo de sete e no mínimo de três membros e de um Conselho Fiscal composto de três membros, eleitos esses órgãos pela Assembleia Geral. (Vide ADPF 276)</p>
        
        <p id="art522§1..">§ 1º. A diretoria elegerá, dentre os seus membros, o presidente do sindicato.</p>
        
        <p id="art522§2..">§ 2º. A competência do Conselho Fiscal é limitada à fiscalização da gestão financeira do sindicato.</p>
        
        <p id="art522§3">§ 3º. Constituirão atribuição exclusiva da Diretoria do Sindicato e dos Delegados Sindicais, a que se refere o art. 523, a representação e a defesa dos interesses da entidade perante os poderes públicos e as empresas, salvo mandatário com poderes outorgados por procuração da Diretoria, ou associado investido em representação prevista em lei. (Incluído pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art523"><span class="artigo">Art. 523.</span> Os Delegados Sindicais destinados à direção das delegacias ou seções instituídas na forma estabelecida no § 2º. do art. 517 serão designados pela diretoria dentre os associados radicados no território da correspondente delegacia.</p>
        
        <p id="art524"><span class="artigo">Art. 524.</span> Serão sempre tomadas por escrutínio secreto, na forma estatutária, as deliberações da Assembleia Geral concernentes aos seguintes assuntos:</p>
        
        <p id="art524a." class="alinea">a) eleição de associado para representação da respectiva categoria prevista em lei; (Redação dada pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art524b." class="alinea">b) tomada e aprovação de contas da diretoria; (Redação dada pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art524c." class="alinea">c) aplicação do patrimônio; (Redação dada pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art524d." class="alinea">d) julgamento dos atos da Diretoria, relativos a penalidades impostas a associados; (Redação dada pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art524e." class="alinea">e) pronunciamento sobre relações ou dissídio de trabalho. Neste caso, as deliberações da Assembleia Geral só serão consideradas válidas quando ela tiver sido especialmente convocada para esse fim, de acordo com as disposições dos estatutos da entidade sindical. O quórum para validade da Assembleia será de metade mais um dos associados quites; não obtido esse quórum em primeira convocação, reunir-se-á a Assembleia em segunda convocação com os presentes, considerando-se aprovadas as deliberações que obtiverem 2/3 (dois terços) dos votos.</p>
        
        <p id="art524§1">§ 1º. A eleição para cargos de diretoria e conselho fiscal será realizada por escrutínio secreto, durante 6 (seis) horas contínuas, pelo menos, na sede do Sindicato, na de suas delegacias e seções e nos principais locais de trabalho, onde funcionarão as mesas coletoras designadas pelos Delegados Regionais do Trabalho. (Incluído pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art524§2">§ 2º. Concomitantemente ao término do prazo estipulado para a votação, instalar-se-á, em Assembleia Eleitoral pública e permanente, na sede do Sindicato, a mesa apuradora, para a qual serão enviadas, imediatamente, pelos presidentes das mesas coletoras, as urnas receptoras e as atas respectivas. Será facultada a designação de mesa apuradora supletiva sempre que as peculiaridades ou conveniências do pleito a exigirem. (Incluído pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art524§3">§ 3º. A mesa apuradora será presidida por membro do Ministério Público do Trabalho ou pessoa de notória idoneidade, designado pelo Procurador-Geral da Justiça do Trabalho ou Procuradores Regionais. (Incluído pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art524§4.">§ 4º. O pleito só será válido na hipótese de participarem da votação mais de 2/3 (dois terços) dos associados com capacidade para votar. Não obtido esse coeficiente, será realizada nova eleição dentro de 15 (quinze) dias, a qual terá validade se nela tomarem parte mais de 50% (cinquenta por cento) dos referidos associados. Na hipótese de não ter sido alcançado, na segunda votação, o coeficiente exigido, será realizado o terceiro e último pleito, cuja validade dependerá do voto de mais de 40% (quarenta por cento) dos aludidos associados, proclamando o Presidente da mesa apuradora em qualquer dessas hipóteses os eleitos, os quais serão empossados automaticamente na data do término do mandato expirante, não tendo efeito suspensivo os protestos ou recursos oferecidos na conformidade da lei.</p>
        
        <p id="art524§5">§ 5º. Não sendo atingido o coeficiente legal para eleição, o Ministério do Trabalho, Industria e Comercio declarará a vacância da administração, a partir do término do mandato dos membros em exercício, e designará administrador para o Sindicato, realizando-se novas eleições dentro de 6 (seis) meses. (Incluído pelo Decreto-lei nº 9.502, de 23.7.1946)</p>
        
        <p id="art525"><span class="artigo">Art. 525.</span> É vedada a pessoas físicas ou jurídicas, estranhas ao Sindicato, qualquer interferência na sua administração ou nos seus serviços. (Redação dada pelo Decreto-lei nº 9.502, de 23.7.1946),</p>
        
        <p id="art525p.">Parágrafo único. Estão excluídos dessa proibição:</p>
        
        <p id="art525pa.." class="alinea">a) os delegados do Ministério do Trabalho, Indústria e Comércio, especialmente designados pelo ministro ou por quem o represente;</p>
        
        <p id="art525pb." class="alinea">b) os que, como empregados, exerçam cargos no Sindicato mediante autorização da Assembleia Geral.</p>
        
        <p id="art526."><span class="artigo">Art. 526.</span> Os empregados do Sindicato serão nomeados pela diretoria respectiva ad referendum, da Assembleia Geral, não podendo recair tal nomeação nos que estiverem nas condições previstas nos itens II, IV, V, VI, VII e VIII do art. 530 e, na hipótese de o nomeador haver sido dirigente sindical, também nas do item I do mesmo artigo. (Redação dada pelo Decreto-lei nº 925, de 10.10.1969)</p>
        
        <p id="art526p.">Parágrafo único. (revogado)</p>
        
        <p id="art526§2">§ 2º. Aplicam-se ao empregado de entidade sindical os preceitos das leis de proteção do trabalho e de previdência social, inclusive o direito de associação em sindicato.</p>
        
        <p id="art527."><span class="artigo">Art. 527.</span> Na sede de cada sindicato haverá um livro de registro, autenticado pelo funcionário competente do Ministério do Trabalho, Indústria e Comércio, e do qual deverão constar:</p>
        
        <p id="art527a.." class="alinea">a) tratando-se de sindicato de empregadores; a firma, individual ou coletiva, ou a denominação das empresas e sua sede, o nome, idade, estado civil, nacionalidade e residência dos respectivos sócios ou, em se tratando de sociedade por ações, dos diretores, bem como a indicação desses dados quanto ao sócio ou diretor que representar a empresa no sindicato;</p>
        
        <p id="art527b." class="alinea">b) tratando-se de sindicato de empregados ou de agentes ou trabalhadores autônomos ou de profissionais liberais, além do nome, idade, estado civil, nacionalidade, profissão ou função e residência de cada associado, o estabelecimento ou lugar onde exerce a sua profissão ou função, o número e a série da respectiva carteira profissional e o número da inscrição na instituição de previdência a que pertencer.</p>
        
        <p id="art528">Art. 528 -Ocorrendo dissídio ou circunstâncias que perturbem o funcionamento de entidade sindical ou motivos relevantes de segurança nacional, o Ministro do Trabalho e Previdência Social poderá nela intervir, por intermédio de Delegado ou de Junta Interventora, com atribuições para administrá-la e executar ou propor as medidas necessárias para moralizar-lhe o funcionamento. (Redação dada pelo Decreto-lei nº 3, de 27.1.1966)</p>
        
        <h3 id="titulovcapituloisecaoiv">SEÇÃO IV<br>
        DAS ELEIÇÕES SINDICAIS</h3>
        
        <p id="art529"><span class="artigo">Art. 529.</span> São condições para o exercício do direito do voto como para a investidura em cargo de administração ou representação econômica ou profissional:</p>
        
        <p id="art529a" class="alinea">a) ter o associado mais de seis meses de inscrição no Quadro Social e mais de 2 (dois) anos de exercício da atividade ou da profissão; (Redação dada pelo Decreto-lei nº 8.080, 11.10.1945)</p>
        
        <p id="art529b" class="alinea">b) ser maior de 18 (dezoito) anos;</p>
        
        <p id="art529c" class="alinea">c) estar no gozo dos direitos sindicais.</p>
        
        <p id="art529p">Parágrafo único. É obrigatório aos associados o voto nas eleições sindicais. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art530"><span class="artigo">Art. 530.</span> Não podem ser eleitos para cargos administrativos ou de representação econômica ou profissional, nem permanecer no exercício desses cargos: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art530i">I - os que não tiverem definitivamente aprovadas as suas contas de exercício em cargos de administração; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art530ii">II - os que houverem lesado o patrimônio de qualquer entidade sindical; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art530iii">III - os que não estiverem, desde dois (2) anos antes, pelo menos, no exercício efetivo da atividade ou da profissão dentro da base territorial do sindicato, ou no desempenho de representação econômica ou profissional; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art530iv">IV - os que tiverem sido condenados por crime doloso enquanto persistirem os efeitos da pena; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art530v">V - os que não estiverem no gozo de seus direitos políticos; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art530VI">VI - (Revogado pela Lei nº 8.865, de 29.3.1994)</p>
        
        <p id="art530vii">VII - má conduta, devidamente comprovada; (Incluído pelo Decreto-lei nº 507, de 18.3.1969)</p>
        
        <p id="art530viii">VIII - (Revogado pela Lei nº 8.865, de 29.3.1994)</p>
        
        <p id="art530p...">Parágrafo único. (Revogado pela Lei nº 2.693, de 23.12.1955)</p>
        
        <p id="art531"><span class="artigo">Art. 531.</span> Nas eleições para cargos de diretoria e do conselho fiscal serão considerados eleitos os candidatos que obtiverem maioria absoluta de votos em relação ao total dos associados eleitores.</p>
        
        <p id="art531§1">§ 1º. Não concorrendo à primeira convocação maioria absoluta de eleitores, ou não obtendo nenhum dos candidatos essa maioria, proceder-se-á à nova convocação para dia posterior, sendo então considerados eleitos os candidatos que obtiverem maioria dos eleitores presentes.</p>
        
        <p id="art531§2">§ 2º. Havendo somente uma chapa registada para as eleições, poderá a assembleia em última convocação ser realizada duas horas após à primeira convocação desde que do edital respectivo conste essa advertência.</p>
        
        <p id="art531§3">§ 3º. Concorrendo mais de uma chapa poderá o Ministério do Trabalho, Indústria e Comércio designar o presidente da sessão eleitoral, desde que o requeiram os associados que encabeçarem as respectivas chapas. (Redação dada pelo Decreto-lei nº 8.080, 11.10.1945)</p>
        
        <p id="art531§4..">§ 4º. O ministro do Trabalho, Indústria e Comércio expedirá instruções regulando o processo das eleições.</p>
        
        <p id="art532"><span class="artigo">Art. 532.</span> As eleições para a renovação da Diretoria e do Conselho Fiscal deverão ser procedidas dentro do prazo máximo de 60 (sessenta) dias e mínimo de 30 (trinta) dias, antes do término do mandato dos dirigentes em exercício. (Redação dada pelo Decreto-lei nº 8.080, 11.10.1945)</p>
        
        <p id="art532§1.">§ 1º. Não havendo protesto na ata da assembleia eleitoral ou recurso interposto por algum dos candidatos, dentro de 15 dias a contar da data das eleições, a posse da diretoria eleita independerá, da aprovação das eleições pelo Ministério do Trabalho, Indústria e Comercio. (Incluído pelo Decreto-lei nº 8.080, 11.10.1945)</p>
        
        <p id="art532§2.">§ 2º. Competirá, à diretoria em exercício, dentro de 30 dias da realização das eleições&quot; e não tendo havido recurso, dar publicidade ao resultado do pleito, fazendo comunicação ao órgão local do Ministério do Trabalho, Indústria e Comércio, da relação dos eleitos, com os dados pessoais de cada um e a designação da função que vai exercer. (Incluído pelo Decreto-lei nº 8.080, 11.10.1945)</p>
        
        <p id="art532§3.">§ 3º. Havendo protesto na ata da assembleia eleitoral ou recurso interposto dentro de 15 dias da realização das eleições, competirá a diretoria em exercício encaminhar, devidamente instruído, o processo eleitoral ao órgão local do Ministério do Trabalho, Indústria e Comércio, que o encaminhará para decisão do Ministro de Estado. Nesta hipótese, permanecerão na administração até despacho final do processo a diretoria e o conselho fiscal que se encontrarem em exercício. (Incluído pelo Decreto-lei nº 8.080, 11.10.1945)</p>
        
        <p id="art532§4">§ 4º. Não se verificando as hipóteses previstas no parágrafo anterior, a posse da nova diretoria deverá se verificar dentro de 30 dias subsequentes ao término do mandato da anterior. (Incluído pelo Decreto-lei nº 8.080, 11.10.1945)</p>
        
        <p id="art532§5">§ 5º. Ao assumir o cargo, o eleito prestará, por escrito e solenemente, o compromisso de respeitar, no exercício do mandato, a Constituição, as leis vigentes e os estatutos da entidade. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <h3 id="titulovcapituloisecaov">SEÇÃO V<br>
        DAS ASSOCIAÇÕES SINDICAIS DE GRAU SUPERIOR</h3>
        
        <p id="art533"><span class="artigo">Art. 533.</span> Constituem associações sindicais de grau superior as federações e confederações organizadas nos termos desta Lei.</p>
        
        <p id="art534"><span class="artigo">Art. 534.</span> É facultado aos Sindicatos, quando em número não inferior a 5 (cinco), desde que representem a maioria absoluta de um grupo de atividades ou profissões idênticas, similares ou conexas, organizarem-se em federação.</p>
        
        <p id="art534§1...">§ 1º. Se já existir federação no grupo de atividades ou profissões em que deva ser constituída a nova entidade, a criação desta não poderá reduzir a menos de 5 (cinco) o número de Sindicatos que àquela devam continuar filiados.</p>
        
        <p id="art534§2.">§ 2º. As federações serão constituídas por Estados, podendo o Ministro do Trabalho, Industria e Comercio autorizar a constituição de Federações interestaduais ou nacionais. (Parágrafo 1º. renumerado pela Lei nº 3.265, de 22.9.1957)</p>
        
        <p id="art534§3">§ 3º. É permitido a qualquer federação, para o fim de lhes coordenar os interesses, agrupar os Sindicatos de determinado município ou região a ela filiados; mas a união não terá direito de representação das atividades ou profissões agrupadas. (Parágrafo 2º. renumerado pela Lei nº 3.265, de 22.9.1957)</p>
        
        <p id="art535"><span class="artigo">Art. 535.</span> As Confederações organizar-se-ão com o mínimo de 3 (três) federações e terão sede na Capital da República.</p>
        
        <p id="art535§1">§ 1º. As confederações formadas por federações de Sindicatos de empregadores denominar-se-ão: Confederação Nacional da Indústria, Confederação Nacional do Comércio, Confederação Nacional de Transportes Marítimos, Fluviais e Aéreos, Confederação Nacional de Transportes Terrestres, Confederação Nacional de Comunicações e Publicidade, Confederação Nacional das Empresas de Crédito e Confederação Nacional de Educação e Cultura.</p>
        
        <p id="art535§2">§ 2º. As confederações formadas por federações de Sindicatos de empregados terão a denominação de: Confederação Nacional dos Trabalhadores na Indústria, Confederação Nacional dos Trabalhadores no Comércio, Confederação Nacional dos Trabalhadores em Transportes Marítimos, Fluviais e Aéreos, Confederação Nacional dos Trabalhadores em Transportes Terrestres, Confederação Nacional dos Trabalhadores em Comunicações e Publicidade, Confederação Nacional dos Trabalhadores nas Empresas de Crédito e Confederação Nacional dos Trabalhadores em Estabelecimentos de Educação e Cultura.</p>
        
        <p id="art535§3">§ 3º. Denominar-se-á Confederação Nacional das Profissões Liberais a reunião das respectivas federações.</p>
        
        <p id="art535§4">§ 4º. As associações sindicais de grau superior da Agricultura e Pecuária serão organizadas na conformidade do que dispuser a lei que regular a sindicalização dessas atividades ou profissões.</p>
        
        <p id="art536"><span class="artigo">Art. 536.</span> (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art537."><span class="artigo">Art. 537.</span> O pedido de reconhecimento de uma federação será dirigido ao ministro do Trabalho, Indústria e Comércio, acompanhado de um exemplar dos respectivos estatutos e das cópias autenticadas das atas da assembleia de cada sindicato ou federação que autorizar a filiação.</p>
        
        <p id="art537§1.">§ 1º. A organização das federações e confederações obedecerá às exigências contidas nas alíneas b e c do art. 515.</p>
        
        <p id="art537§2..">§ 2º. A carta de reconhecimento das federações será expedida pelo ministro do Trabalho, Indústria e Comércio, na qual será especificada a coordenação econômica ou profissional conferida e mencionada a base territorial outorgada.</p>
        
        <p id="art537§3..">§ 3º. O reconhecimento das confederações será feito por decreto do Presidente da República.</p>
        
        <p id="art538"><span class="artigo">Art. 538.</span> A administração das federações e confederações será exercida pelos seguintes órgãos:</p>
        
        <p id="art538a." class="alinea">a) Diretoria;</p>
        
        <p id="art538b." class="alinea">b) Conselho de Representantes;</p>
        
        <p id="art538c." class="alinea">c) Conselho Fiscal.</p>
        
        <p id="art538§1.">§ 1º. A Diretoria será constituída no mínimo de 3 (três) membros e de 3 (três) membros se comporá o Conselho Fiscal, os quais serão eleitos pelo Conselho de Representantes com mandato por 3 (três) anos. (Redação dada pelo Decreto-lei nº 771, de 19.8.1969)</p>
        
        <p id="art538§2...">§ 2º. Só poderão ser eleitos os integrantes dos grupos das federações ou dos planos das confederações, respectivamente. (Parágrafo incluído pela Lei nº 2.693, de 23.12.1955)</p>
        
        <p id="art538§3.">§ 3º. O Presidente da federação ou confederação será escolhido dentre os seus membros, pela Diretoria. (Parágrafo 2º. renumerado pela Lei nº 2.693, de 23.12.1955)</p>
        
        <p id="art538§4">§ 4º. O Conselho de Representantes será formado pelas delegações dos Sindicatos ou das Federações filiadas, constituída cada delegação de 2 (dois) membros, com mandato por 3 (três) anos, cabendo 1 (um) voto a cada delegação. (Parágrafo 3º. renumerado e alterado dada pelo Decreto-lei nº 771, de 19.8.1969)</p>
        
        <p id="art538§5">§ 5º. A competência do Conselho Fiscal é limitada à fiscalização da gestão financeira.</p>
        
        <p id="art539"><span class="artigo">Art. 539.</span> Para a constituição e administração das Federações serão observadas, no que for aplicável, as disposições das Seções II e III do presente Capítulo.</p>
        
        <h3 id="titulovcapituloisecaovi">SEÇÃO VI<br>
        DOS DIREITOS DOS EXERCENTES DE ATIVIDADES OU PROFISSÕES E DOS SINDICALIZADOS</h3>
        
        <p><span class="artigo">Art. 540.</span> A toda empresa, ou indivíduo que exerçam respectivamente atividade ou profissão, desde que satisfaçam as exigências desta lei, assiste o direito de ser admitido no sindicato da respectiva categoria.</p>
        
        <p>§ 1º. Perderá os direitos de associado o sindicalizado que, por qualquer motivo, deixar o exercício de atividade ou de profissão.</p>
        
        <p>§ 2º. Os associados de Sindicatos de empregados, de agentes ou trabalhadores autônomos e de profissões liberais que forem aposentados, estiverem em desemprego ou falta de trabalho ou tiverem sido convocados para prestação de serviço militar não perderão os respectivos direitos sindicais e ficarão isentos de qualquer contribuição, não podendo, entretanto, exercer cargo de administração sindical ou de representação econômica ou profissional.</p>
        
        <p><span class="artigo">Art. 541.</span> Os que exercerem determinada atividade ou profissão onde não haja Sindicato da respectiva categoria, ou de atividade ou profissão similar ou conexa, poderão filiar-se a Sindicato de profissão idêntica, similar ou conexa, existente na localidade mais próxima.</p>
        
        <p>Parágrafo único. O disposto neste artigo se aplica aos Sindicatos em relação às respectivas federações, na conformidade do Quadro de Atividades e Profissões a que se refere o art. 577.</p>
        
        <p><span class="artigo">Art. 542.</span> De todo o ato lesivo de direitos ou contrário a esta lei, emanado da Diretoria, do Conselho ou da Assembleia Geral da entidade sindical, poderá qualquer exercente de atividade ou profissão recorrer, dentro de 30 dias, para a autoridade competente do Ministério do Trabalho, Indústria e Comércio.</p>
        
        <p><span class="artigo">Art. 543.</span> O empregado eleito para cargo de administração sindical ou representação profissional, inclusive junto a órgão de deliberação coletiva, não poderá ser impedido do exercício de suas funções, nem transferido para lugar ou mister que lhe dificulte ou torne impossível o desempenho das suas atribuições sindicais. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 1º. O empregado perderá o mandato se a transferência for por ele solicitada ou voluntariamente aceita. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 2º. Considera-se de licença não remunerada, salvo assentimento da empresa ou cláusula contratual, o tempo em que o empregado se ausentar do trabalho no desempenho das funções a que se refere este artigo. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 3º. Fica vedada a dispensa do empregado sindicalizado ou associado, a partir do momento do registro de sua candidatura a cargo de direção ou representação de entidade sindical ou de associação profissional, até 1 (um) ano após o final do seu mandato, caso seja eleito inclusive como suplente, salvo se cometer falta grave devidamente apurada nos termos desta Consolidação.</p>
        
        <p>§ 4º. Considera-se cargo de direção ou de representação sindical aquele cujo exercício ou indicação decorre de eleição prevista em lei.</p>
        
        <p>§ 5º. Para os fins deste artigo, a entidade sindical comunicará por escrito à empresa, dentro de 24 (vinte e quatro) horas, o dia e a hora do registro da candidatura do seu empregado e, em igual prazo, sua eleição e posse, fornecendo, outrossim, a este, comprovante no mesmo sentido. O Ministério do Trabalho e Previdência Social fará no mesmo prazo a comunicação no caso da designação referida no final do § 4º. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 6º. A empresa que, por qualquer modo, procurar impedi que o empregado se associe a sindicato, organize associação profissional ou sindical ou exerça os direitos inerentes à condição de sindicalizado fica sujeita à penalidade prevista na letra a do art. 553, sem prejuízo da reparação a que tiver direito o empregado. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p><span class="artigo">Art. 544.</span> É livre a associação profissional ou sindical, mas ao empregado sindicalizado é assegurada, em igualdade de condições, preferência: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>I - para a admissão nos trabalhos de empresa que explore serviços públicos ou mantenha contrato com os poderes públicos; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>II - para ingresso em funções públicas ou assemelhadas, em caso de cessação coletiva de trabalho, por motivo de fechamento de estabelecimento; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>III - nas concorrências para aquisição de casa própria, pelo Plano Nacional de Habitação ou por intermédio de quaisquer instituições públicas; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>IV - nos loteamentos urbanos ou rurais, promovidos pela União, por seus órgãos de administração direta ou indireta ou sociedades de economia mista; (Incluído pelo Decreto-lei nº 229, de 28.2.1967))</p>
        
        <p>V - na locação ou compra de imóveis, de propriedade de pessoa de direito público ou sociedade de economia mista, quando sob ação de despejo em tramitação judicial; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>VI - na concessão de empréstimos simples concedidos pelas agências financeiras do Governo ou a ele vinculadas; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>VII - na aquisição de automóveis, outros veículos e instrumentos relativos ao exercício da profissão, quando financiados pelas autarquias sociedades de economia mista ou agências financeiras do Governo; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>VIII - (Revogado pela Lei nº 8.630, de 25.2.1993)</p>
        
        <p>IX - na concessão de bolsas de estudo para si ou para seus filhos, obedecida a legislação que regule a matéria. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p><span class="artigo">Art. 545.</span> Os empregadores ficam obrigados a descontar da folha de pagamento dos seus empregados, desde que por eles devidamente autorizados, as contribuições devidas ao sindicato, quando por este notificados.</p>
        
        <p>Parágrafo único. O recolhimento à entidade sindical beneficiária do importe descontado deverá ser feito até o décimo dia subsequente ao do desconto, sob pena de juros de mora no valor de 10% (dez por cento) sobre o montante retido, sem prejuízo da multa prevista no art. 553 e das cominações penais relativas à apropriação indébita. (Incluído pelo Decreto-lei nº 925, de 10.10.1969)</p>
        
        <p><span class="artigo">Art. 546.</span> Às empresas sindicalizadas é assegurada preferência, em igualdade de condições, nas concorrências para exploração de serviços públicos, bem como nas concorrências para fornecimento às repartições federais, estaduais e municipais e às entidades paraestatais.</p>
        
        <p><span class="artigo">Art. 547.</span> É exigida a qualidade de sindicalizado para o exercício de qualquer função representativa de categoria econômica ou profissional, em órgão oficial de deliberação coletiva, bem como para o gozo de favores ou isenções tributárias, salvo em se tratando de atividades não econômicas.</p>
        
        <p>Parágrafo único. Antes da posse ou exercício das funções a que alude o artigo anterior ou de concessão dos favores será indispensável comprovar a sindicalização, ou oferecer prova, mediante certidão negativa no Departamento Nacional do Trabalho, no Distrito Federal, ou da autoridade regional do Ministério do Trabalho, Indústria e Comércio, nos Estados e no Território do Acre, de que não existe sindicato no local onde o interessado exerce a respectiva atividade ou profissão.</p>
        
        <h3>SEÇÃO VII<br>
        DA GESTÃO FINANCEIRA DO SINDICATO E SUA FISCALIZAÇÃO</h3>
        
        <p><span class="artigo">Art. 548.</span> Constituem o patrimônio das associações sindicais:</p>
        
        <p class="alinea">a) as contribuições devidas aos Sindicatos pelos que participem das categorias econômicas ou profissionais ou das profissões liberais representadas pelas referidas entidades, sob a denominação de imposto sindical, pagas e arrecadadas na forma do Capítulo III deste Título;</p>
        
        <p class="alinea">b) as contribuições dos associados, na forma estabelecida nos estatutos ou pelas Assembleias Gerais;</p>
        
        <p class="alinea">c) os bens e valores adquiridos e as rendas produzidas pelos mesmos;</p>
        
        <p class="alinea">d) as doações e legados;</p>
        
        <p class="alinea">e) as multas e outras rendas eventuais.</p>
        
        <p><span class="artigo">Art. 549.</span> A receita dos sindicatos, federações e confederações só poderá ter aplicação na forma prevista nos respectivos orçamentos anuais, obedecidas as disposições estabelecidas na lei e nos seus estatutos.</p>
        
        <p>§ 1º. Para alienação, locação ou aquisição de bens imóveis, ficam as entidades sindicais obrigadas a realizar avaliação prévia pela Caixa Econômica Federal ou pele Banco Nacional da Habitação ou, ainda, por qualquer outra organização legalmente habilitada a tal fim.</p>
        
        <p>§ 2º. Os bens imóveis das entidades sindicais não serão alienados sem a prévia autorização das respectivas assembleias gerais, reunidas com a presença da maioria absoluta dos associados com direito a voto ou dos Conselhos de Representantes com a maioria absoluta dos seus membros.</p>
        
        <p>§ 3º. Caso não seja obtido o quórum estabelecido no parágrafo anterior, a matéria poderá ser decidida em nova assembleia geral, reunida com qualquer número de associados com direito a voto, após o transcurso de 10 (dez) dias da primeira convocação.</p>
        
        <p>§ 4º. Nas hipóteses previstas no § 2º. e 3º. a decisão somente terá validade se adotada pelo mínimo de 2/3 (dois terços) dos presentes, em escrutínio secreto.</p>
        
        <p>§ 5º. Da deliberação da assembleia geral, concernente à alienação de bens imóveis, caberá recurso voluntário, dentro do prazo de 15 (quinze) dias, ao Ministro do Trabalho, com efeito suspensivo.</p>
        
        <p>§ 6º. A venda do imóvel será efetuada pela diretoria da entidade, após a decisão da Assembleia Geral ou do Conselho de Representantes, mediante concorrência pública, com edital publicado no Diário oficial da União e na imprensa diária, com antecedência mínima de 30 (trinta) dias da data de sua realização.</p>
        
        <p>§ 7º. Os recursos destinados ao pagamento total ou parcelado dos bens imóveis adquiridos serão consignados, obrigatoriamente, nos orçamentos anuais das entidades sindicais.</p>
        
        <p><span class="artigo">Art. 550.</span> Os orçamentos das entidades sindicais serão aprovados, em escrutínio secreto, pelas respectivas Assembleias Gerais ou Conselho de Representantes, até 30 (trinta) dias antes do início do exercício financeiro a que se referem, e conterão a discriminação da receita e da despesa, na forma das instruções e modelos expedidos pelo Ministério do Trabalho.</p>
        
        <p>§ 1º. Os orçamentos, após a aprovação prevista no presente artigo, serão publicados, em resumo, no prazo de 30 (trinta) dias, contados da data da realização da respectiva Assembleia Geral ou da reunião do Conselho de Representantes, que os aprovou, observada a seguinte sistemática:</p>
        
        <p class="alinea">a) no Diário oficial da União - Seção I - Parte II, os orçamentos das confederações, federações e sindicatos de base interestadual ou nacional;</p>
        
        <p class="alinea">b) no órgão de imprensa oficial do Estado ou Território ou jornal de grande circulação local, os orçamentos das federações estaduais e sindicatos distritais municipais, intermunicipais e estaduais.</p>
        
        <p>§ 2º. As dotações orçamentárias que se apresentarem insuficientes para o atendimento das despesas, ou não incluídas nos orçamentos correntes, poderão ser ajustadas ao fluxo dos gastos, mediante a abertura de créditos adicionais solicitados pela Diretoria da entidade às respectivas Assembleias Gerais ou Conselhos de Representantes, cujos atos concessórios serão publicados até o último dia do exercício correspondente, obedecida a mesma sistemática prevista no parágrafo anterior .(Redação dada pela Lei nº 6.386, de 9.12.1976)</p>
        
        <p>§ 3º. Os créditos adicionais classificam-se em:</p>
        
        <p class="alinea">a) suplementares, os destinados a reforçar dotações alocadas no orçamento; e</p>
        
        <p class="alinea">b) especiais, os destinados a incluir dotações no orçamento, a fim de fazer face às despesas para as quais não se tenha consignado crédito específico.</p>
        
        <p>§ 4º. A abertura dos créditos adicionais depende da existência de receita para sua compensação, considerando-se, para esse efeito, desde que não comprometidos:</p>
        
        <p class="alinea">a) o superavit financeiro apurado em balanço do exercício anterior;</p>
        
        <p class="alinea">b) o excesso de arrecadação, assim entendido o saldo positivo da diferença entre a renda prevista e a realizada, tendo-se em conta, ainda, a tendência do exercício; e</p>
        
        <p class="alinea">c) a resultante da anulação parcial ou total de dotações alocadas no orçamento ou de créditos adicionais abertos no exercício.</p>
        
        <p>§ 5º. Para efeito orçamentário e contábil sindical, o exercício financeiro coincidirá com o ano civil, a ele pertencendo todas as receitas arrecadadas e as despesas compromissadas.</p>
        
        <p><span class="artigo">Art. 551.</span> Todas as operações de ordem financeira e patrimonial serão evidenciadas pelos registros contábeis das entidades sindicais, executados sob a responsabilidade de contabilista legalmente habilitado, em conformidade com o plano de contas e as instruções baixadas pelo Ministério do Trabalho.</p>
        
        <p>§ 1º. A escrituração contábil a que se refere este artigo será baseada em documentos de receita e despesa, que ficarão arquivados nos serviços de contabilidade, à disposição dos órgãos responsáveis pelo acompanhamento administrativo e da fiscalização financeira da própria entidade, ou do controle que poderá ser exercido pelos órgãos da União, em face da legislação específica.</p>
        
        <p>§ 2º. Os documentos comprobatórios dos atos de receita e despesa, a que se refere o parágrafo anterior, poderão ser incinerados, após decorridos 5 (cinco) anos da data de quitação das contas pelo órgão competente.</p>
        
        <p>§ 3º. É obrigatório o uso do livro Diário, encadernado, como folhas seguida e tipograficamente numeradas, para a escrituração, pelo método das partidas dobradas, diretamente ou por reprodução, dos atos ou operações que modifiquem ou venham a modificar a situação patrimonial da entidade, o qual conterá, respectivamente, na primeira e na última páginas, os termos de abertura e de encerramento.</p>
        
        <p>§ 4º. A entidade sindical que se utilizar de sistema mecânico ou eletrônico para sua escrituração contábil, poderá substituir o Diário e os livros facultativos ou auxiliares por fichas ou formulários contínuos, cujos lançamentos deverão satisfazer a todos os requisitos e normas de escrituração exigidos com relação aos livros mercantis, inclusive no que respeita a termos de abertura e de encerramento e numeração sequencial e tipográfica.</p>
        
        <p>§ 5º. Na escrituração por processos de fichas ou formulários contínuos, a entidade adotará livro próprio para inscrição do balanço patrimonial e da demonstração do resultado do exercício, o qual conterá os mesmos requisitos exigidos para os livros de escrituração.</p>
        
        <p>§ 6º. Os livros e fichas ou formulários contínuos serão obrigatoriamente submetidos a registro e autenticação das Delegacias Regionais do Trabalho localizadas na base territorial da entidade.</p>
        
        <p>§ 7º. As entidades sindicais manterão registro específico dos bens de qualquer natureza, de sua propriedade, em livros ou fichas próprias, que atenderão às mesmas formalidades exigidas para a livro Diário, inclusive no que se refere ao registro e autenticação da Delegacia Regional do Trabalho local.</p>
        
        <p>§ 8º. As contas dos administradores das entidades sindicais serão aprovadas, em escrutínio secreto, pelas respectivas Assembleias Gerais ou Conselhos de Representantes, com prévio parecer do Conselho Fiscal, cabendo ao Ministro do Trabalho estabelecer prazos e procedimentos para a sua elaboração e destinação.</p>
        
        <p><span class="artigo">Art. 552.</span> Os atos que importem em malversação ou dilapidação do patrimônio das associações ou entidades sindicais ficam equiparados ao crime de peculato julgado e punido na conformidade da legislação penal. (Redação dada pelo Decreto-lei nº 925, de 10.10.1969)</p>
        
        <h3 id="titulovcapituloisecaoviii">SEÇÃO VIII<br>
        DAS PENALIDADES</h3>
        
        <p id="art936"><span class="artigo">Art. 553.</span> As infrações ao disposto neste Capítulo serão punidas, segundo o seu caráter e a sua gravidade, com as seguintes penalidades:</p>
        
        <p id="art553a0" class="alinea">a) multa de Cr$ 100 (cem cruzeiros) e 5.000 (cinco mil cruzeiros), dobrada na reincidência;</p>
        
        <p id="art553b" class="alinea">b) suspensão de diretores por prazo não superior a 30 (trinta) dias;</p>
        
        <p id="art553c" class="alinea">c) destituição de diretores ou de membros de conselho;</p>
        
        <p id="art553d" class="alinea">d) fechamento de Sindicato, Federação ou Confederação por prazo nunca superior a 6 (seis) meses;</p>
        
        <p id="art553e.." class="alinea">e) cassação da carta de reconhecimento.</p>
        
        <p id="art553f0" class="alinea">f) multa de 1/30 (um trinta avos) do salário mínimo regional, aplicável ao associado que deixar de cumprir sem causa justificada, o disposto no parágrafo único do artigo 529. (Incluída pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art553§1">§ 1º. A imposição de penalidades aos administradores não exclui a aplicação das que este artigo prevê para a associação. (Parágrafo único renumerado pelo Decreto-lei nº 925, de 10.10.1969)</p>
        
        <p id="art553§2">§ 2º. Poderá o Ministro do Trabalho e Previdência Social determinar o afastamento preventivo de cargo ou representação sindicais de seus exercentes, com fundamento em elementos constantes de denúncia formalizada que constituam indício veemente ou início de prova bastante do fato e da autoria denunciados. (Incluído pelo Decreto-lei nº 925, de 10.10.1969)</p>
        
        <p id="art554.">Art.554. Destituída a administração na hipótese da alínea c do artigo anterior, o ministro do Trabalho, Indústria e Comércio nomeará um delegado para dirigir a associação e proceder, dentro do prazo de 90 dias, em assembleia geral por ele convocada e presidida; à eleição dos novos diretores e membros do Conselho Fiscal.</p>
        
        <p>Art.555. A pena de cassação da carta de reconhecimento será imposta à entidade sindical:</p>
        
        <p class="alinea">a) que deixar de satisfazer as condições de constituição e funcionamento estabelecidas nesta Lei;</p>
        
        <p class="alinea">b) que se recusar ao cumprimento de ato do Presidente da República, no uso da faculdade conferida pelo art. 536; (Vide Decreto nº 229, de 1967)</p>
        
        <p class="alinea">c) que criar obstáculos à execução da política econômica adotada pelo Governo. (Redação dada pelo Decreto-lei nº 8.080, 11.10.1945)</p>
        
        <p><span class="artigo">Art. 556.</span> A cassação da carta de reconhecimento da entidade sindical não importará no cancelamento de seu registo, nem, consequentemente, a sua dissolução, que se processará de acordo com as disposições da lei que regulam a dissolução das associações civis.</p>
        
        <p>Parágrafo único. No caso de dissolução, por se achar a associação incursa nas leis que definem crimes contra a personalidade internacional, a estrutura e a segurança do Estado e a ordem política e social, os seus bens, pagas as dívidas decorrentes das suas responsabilidades, serão incorporados ao patrimônio da União e aplicados em obras de assistência social.</p>
        
        <p><span class="artigo">Art. 557.</span> As penalidades de que trata o art. 553 serão impostas: Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946</p>
        
        <p class="alinea">a) as das alíneas a e b, pelo diretor geral do Departamento Nacional do Trabalho, com recurso para o ministro de Estado; Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946</p>
        
        <p class="alinea">b) as demais, pelo ministro de Estado. Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946</p>
        
        <p>§ 1º. Quando se trata de associações de grau superior, as penalidades serão impostas pelo ministro de Estado, salvo se a pena for da cassação da carta de reconhecimento de confederação, caso em que a pena será imposta pelo Presidente da República. Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946</p>
        
        <p>§ 2º. Nenhuma pena será imposta sem que seja assegurada defesa ao acusado. Redação restabelecida pelo Decreto-lei nº 8.987-A, de 1946</p>
        
        <h3 id="titulovcapituloisecaoix">SEÇÃO IX<br>
        DISPOSIÇÕES GERAIS</h3>
        
        <p><span class="artigo">Art. 558.</span> São obrigadas ao registro todas as associações profissionais constituídas por atividades ou profissões idênticas, similares ou conexas, de acordo com o art. 511 e na conformidade do Quadro de Atividades e Profissões a que alude o Capítulo II deste Título. As associações profissionais registradas nos termos deste artigo poderão representar, perante as autoridades administrativas e judiciárias, os interesses individuais dos associados relativos à sua atividade ou profissão, sendo-lhes também extensivas as prerrogativas contidas na alínea &quot;d&quot; e no parágrafo único do art. 513.</p>
        
        <p id="art558§1.">§ 1º. O registro a que se refere o presente artigo competirá às Delegacias Regionais do Ministério do Trabalho e Previdência Social ou às repartições autorizadas em virtude da lei. (Redação dada pelo Decreto-lei nº 925, de 10.10.1969)</p>
        
        <p id="art558§2">§ 2º. O registro das associações far-se-á mediante requerimento, acompanhado da cópia autêntica dos estatutos e da declaração do número de associados, do patrimônio e dos serviços sociais organizados.</p>
        
        <p id="art558§3">§ 3º. As alterações dos estatutos das associações profissionais não entrarão em vigor sem aprovação da autoridade que houver concedido o respectivo registro.</p>
        
        <p id="art559."><span class="artigo">Art. 559.</span> O Presidente da República, excepcionalmente e mediante proposta do Ministro do Trabalho, fundada em razões de utilidade pública, poderá conceder, por decreto, às associações civis constituídas para a defesa e coordenação de interesses econômicos e profissionais e não obrigadas ao registro previsto no artigo anterior, a prerrogativa da alínea &quot;d&quot; do art. 513 deste Capítulo.</p>
        
        <p id="art560."><span class="artigo">Art. 560.</span> Não se reputará transmissão de bens, para efeitos fiscais, a incorporação do patrimônio de uma associação profissional ao da entidade sindical, ou das entidades aludidas entre si.</p>
        
        <p id="art561"><span class="artigo">Art. 561.</span> A denominação &quot;sindicato&quot; é privativa das associações profissionais de primeiro grau, reconhecidas na forma desta Lei.</p>
        
        <p id="art562"><span class="artigo">Art. 562.</span> As expressões &quot;federação&quot; e &quot;confederação&quot;, seguidas da designação de uma atividade econômica ou profissional, constituem denominações privativas das entidades sindicais de grau superior.</p>
        
        <p id="art563."><span class="artigo">Art. 563.</span> (Revogado pelo Decreto-lei nº 925, de 10.10.1969)</p>
        
        <p id="art564"><span class="artigo">Art. 564.</span> Às entidades sindicais, sendo-lhes peculiar e essencial a atribuição representativa e coordenadora das correspondentes categorias ou profissões, é vedado, direta ou indiretamente, o exercício de atividade econômica.</p>
        
        <p id="art565..."><span class="artigo">Art. 565.</span> As entidades sindicais reconhecidas nos termos desta Lei não poderão filiar-se a organizações internacionais, nem com elas manter relações, sem prévia licença concedida por decreto do Presidente da República.</p>
        
        <p id="art566"><span class="artigo">Art. 566.</span> Não podem sindicalizar-se os servidores do Estado e os das instituições paraestatais. Parágrafo único. Excluem-se da proibição constante deste artigo os empregados das sociedades de economia mista, da Caixa Econômica Federal e das fundações criadas ou mantidas pelo Poder Público da União, dos Estados e Municípios.</p>
        
        <p id="art567."><span class="artigo">Art. 567.</span> (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art568"><span class="artigo">Art. 568.</span> (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <h2 id="titulovcapituloii">CAPÍTULO II<br>
        DO ENQUADRAMENTO SINDICAL</h2>
        
        <p id="art570."><span class="artigo">Art. 570.</span> Os sindicatos constituir-se-ão, normalmente, por categorias econômicas ou profissionais, específicas, na conformidade da discriminação do quadro das atividades e profissões a que se refere o art. 577 ou segundo as subdivisões que, sob proposta da Comissão do Enquadramento Sindical, de que trata o art. 576, forem criadas pelo ministro do Trabalho, Indústria e Comércio.</p>
        
        <p id="art570p">Parágrafo único. Quando os exercentes de quaisquer atividades ou profissões se constituírem, seja pelo número reduzido, seja pela natureza mesma dessas atividades ou profissões, seja pelas afinidades existentes entre elas, em condições tais que não se possam sindicalizar eficientemente pelo critério de especificidade de categoria, é-lhes permitido sindicalizar-se pelo critério de categorias similares ou conexas, entendendo-se como tais as que se acham compreendidas nos limites de cada grupo constante do Quadro de Atividades e Profissões.</p>
        
        <p id="art571.."><span class="artigo">Art. 571.</span> Qualquer das atividades ou profissões concentradas na forma do parágrafo único do artigo anterior poderá dissociar-se do sindicato principal, formando um sindicato específico, desde que o novo sindicato, a juízo da Comissão do Enquadramento Sindical, ofereça possibilidade de vida associativa regular e de ação sindical eficiente.</p>
        
        <p id="art572.."><span class="artigo">Art. 572.</span> Os sindicatos que se constituírem por categorias similares ou conexas, nos termos do parágrafo único do art. 570, adotarão denominação em que fiquem, tanto como possível, explicitamente mencionadas as atividades ou profissões concentradas, de conformidade com o quadro das atividades e profissões, ou se se tratar de subdivisões, de acordo com o que determinar a Comissão do Enquadramento Sindical.</p>
        
        <p id="art572p">Parágrafo único. Ocorrendo a hipótese do artigo anterior, o Sindicato principal terá a denominação alterada, eliminando-se-lhe a designação relativa à atividade ou profissão dissociada.</p>
        
        <p id="art573"><span class="artigo">Art. 573.</span> O agrupamento dos Sindicatos em Federações obedecerá às mesmas regras que as estabelecidas neste Capítulo para o agrupamento das atividades e profissões em Sindicatos.</p>
        
        <p id="art573p">Parágrafo único. As Federações de Sindicatos de profissões liberais poderão ser organizadas independentemente do grupo básico da Confederação, sempre que as respectivas profissões se acharem submetidas, por disposições de lei, a um único regulamento. (Parágrafo 1º. renumerado pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art574"><span class="artigo">Art. 574.</span> Dentro da mesma base territorial, as empresas industriais do tipo artesanal poderão constituir entidades sindicais, de primeiro e segundo graus, distintas das associações sindicais das empresas congêneres, de tipo diferente.</p>
        
        <p id="art574p..">Parágrafo único. Compete à Comissão de Enquadramento Sindical definir, de modo genérico, com a aprovação do ministro do Trabalho, Indústria e Comércio, a dimensão e os demais característicos das empresas industriais de tipo artesanal.</p>
        
        <p id="art575..">Art.575. O quadro de atividades e profissões será revisto de dois em dois anos, por proposta da Comissão do Enquadramento Sindical, para o fim de ajustá-lo às condições da estrutura econômica e profissional do país.</p>
        
        <p id="art575§1.">§ 1º. Antes de proceder à revisão do Quadro, a Comissão deverá solicitar sugestões às entidades sindicais e às associações profissionais.</p>
        
        <p id="art575§2.">§ 2º. A proposta de revisão será submetida à aprovação do Ministro do Trabalho, Industria e Comercio.</p>
        
        <p id="art576"><span class="artigo">Art. 576.</span> A Comissão do Enquadramento Sindical será constituída pelo Diretor-Geral do Departamento Nacional do Trabalho, que a presidirá, e pelos seguintes membros:</p>
        
        <p id="art576i..">I - 2 (dois) representantes do Departamento Nacional do Trabalho;</p>
        
        <p id="art576ii.">II - 1 (um) representante do Departamento Nacional de Mão-de-Obra;</p>
        
        <p id="art576iii.">III - 1 (um) representante do Instituto Nacional de Tecnologia, do Ministério da Indústria e do Comércio;</p>
        
        <p id="art576iv.">IV - 1 (um) representante do Instituto Nacional de Colonização e Reforma Agrária, do Ministério da Agricultura;</p>
        
        <p id="art576v.">V - 1 (um) representante do Ministério dos Transportes;</p>
        
        <p id="art576vi.">VI - 2 (dois) representantes das categorias econômicas; e</p>
        
        <p id="art576vii">VII - 2 (dois) representantes das categorias profissionais.</p>
        
        <p id="art576§1">§ 1º. Os membros da CES serão designados pelo Ministro do Trabalho e Previdência Social, mediante. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art576§1a" class="alinea">a) indicação dos titulares das Pastas, quanto aos representantes dos outros Ministérios; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art576§1b" class="alinea">b) indicação do respectivo Diretor Geral, quanto ao do DNMO; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art576§1c" class="alinea">c) eleição pelas respectivas Confederações, em conjunto, quanto aos representantes das categorias econômicas e profissionais, de acordo com as instruções que forem expedidas pelo Ministro do Trabalho e Previdência Social. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art576§2">§ 2º. Cada Membro terá um suplente designado juntamente com o titular. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art576§3">§ 3º. Será de 3 (três) anos o mandato dos representantes das categorias econômica e profissional. (Redação dada pelo Decreto-lei nº 925, de 10.10.1969)</p>
        
        <p id="art576§4">§ 4º. Os integrantes da Comissão perceberão a gratificação de presença que for estabelecida por decreto executivo. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art576§5">§ 5º. Em suas faltas ou impedimentos o Diretor-Geral do DNT será substituído na presidência pelo Diretor substituto do Departamento ou pelo representante deste na Comissão, nesta ordem. (Redação dada Decreto-lei nº 506, de 18.3.1969)</p>
        
        <p id="art576§6">§ 6º. Além das atribuições fixadas no presente Capítulo e concernentes ao enquadramento sindical, individual ou coletivo, e à classificação das atividades e profissões, competirá também à CES resolver, com recurso para o Ministro do Trabalho e Previdência Social, todas as dúvidas e controvérsias concernentes à organização sindical. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art577"><span class="artigo">Art. 577.</span> O Quadro de Atividades e Profissões em vigor fixará o plano básico do enquadramento sindical.</p>
        
        <h2>SEÇÃO III<br>
        DA CONTRIBUIÇÃO SINDICAL</h2>
        
        <h3 id="titulovcapituloiiisecaoi">SEÇÃO I<br>
        DA FIXAÇÃO E DO RECOLHIMENTO DO IMPOSTO SINDICAL</h3>
        
        <p><span class="artigo">Art. 578.</span> As contribuições devidas aos sindicatos pelos participantes das categorias econômicas ou profissionais ou das profissões liberais representadas pelas referidas entidades serão, sob a denominação de contribuição sindical, pagas, recolhidas e aplicadas na forma estabelecida neste Capítulo, desde que prévia e expressamente autorizadas.</p>
        
        <p><span class="artigo">Art. 579.</span> O desconto da contribuição sindical está condicionado à autorização prévia e expressa dos que participarem de uma determinada categoria econômica ou profissional, ou de uma profissão liberal, em favor do sindicato representativo da mesma categoria ou profissão ou, inexistindo este, na conformidade do disposto no art. 591 desta Consolidação.</p>
        
        <p><span class="artigo">Art. 580.</span> A contribuição sindical será recolhida, de uma só vez, anualmente, e consistirá:</p>
        
        <p>I - Na importância correspondente à remuneração de um dia de trabalho, para os empregados, qualquer que seja a forma da referida remuneração;</p>
        
        <p>Il - para os agentes ou trabalhadores autônomos e para os profissionais liberais, numa importância correspondente a 30% (trinta por cento) do maior valor-de-referência fixado pelo Poder Executivo, vigente à época em que é devida a contribuição sindical, arredondada para Cr$ 1,00 (um cruzeiro) a fração porventura existente;</p>
        
        <p>III - para os empregadores, numa importância proporcional ao capital social da firma ou empresa, registrado nas respectivas Juntas Comerciais ou órgãos equivalentes, mediante a aplicação de alíquotas, conforme a seguinte tabela progressiva:</p>
        
        <table>
            <tr>
                <th></th>
                <th>Classe de Capital</th>
                <th>Alíquota</th>
            </tr>
            <tr>
                <td>1</td>
                <td>até 150 vezes o maior valor-de-referência</td>
                <td>0,8%</td>
            </tr>
            <tr>
                <td>2</td>
                <td>acima de 150 até 1.500 vezes o maior valor-de-referência</td>
                <td>0,2%</td>
            </tr>
            <tr>
                <td>3</td>
                <td>acima de 1.500 até 150.000 vezes o maior valor-de-referência</td>
                <td>0,1%</td>
            </tr>
            <tr>
                <td>4</td>
                <td>acima de 150.000 até 800.000 vezes o maior valor-de-referência</td>
                <td>0,02%</td>
            </tr>
            </table>
        
        <p id="art580§1.">§ 1º. A contribuição sindical prevista na tabela constante do item III deste artigo corresponderá à soma da aplicação das alíquotas sobre a porção do capital distribuído em cada classe, observados os respectivos limites.</p>
        
        <p id="art580§2.">§ 2º. Para efeito do cálculo de que trata a tabela progressiva inserta no item III deste artigo, considerar-se-á o valor de referência fixado pelo Poder Executivo, vigente à data de competência da contribuição, arredondando-se para Cr$1,00 (um cruzeiro) a fração porventura existente.</p>
        
        <p id="art580§3..">§ 3º. É fixada em 60% (sessenta por cento) do maior valor-de-referência, a que alude o parágrafo anterior, a contribuição mínima devida pelos empregadores, independentemente do capital social da firma ou empresa, ficando, do mesmo modo, estabelecido o capital equivalente a 800.000 (oitocentas mil) vezes o maior valor-de-referência, para efeito do cálculo da contribuição máxima, respeitada a Tabela progressiva constante do item III.</p>
        
        <p id="art580§4">§ 4º. Os agentes ou trabalhadores autônomos e os profissionais liberais, organizados em firma ou empresa, com capital social registrado, recolherão a contribuição sindical de acordo com a tabela progressiva a que se refere o item III.</p>
        
        <p id="art580§5">§ 5º. As entidades ou instituições que não estejam obrigadas ao registro de capital social, consideração, como capital, para efeito do cálculo de que trata a tabela progressiva constante do item III deste artigo, o valor resultante da aplicação do percentual de 40% (quarenta por cento) sobre o movimento econômico registrado no exercício imediatamente anterior, do que darão conhecimento à respectiva entidade sindical ou à Delegacia Regional do Trabalho, observados os limites estabelecidos no § 3º. deste artigo.</p>
        
        <p id="art580§6">§ 6º. Excluem-se da regra do § 5º. as entidades ou instituições que comprovarem, através de requerimento dirigido ao Ministério do Trabalho, que não exercem atividade econômica com fins lucrativos.</p>
        
        <p><span class="artigo">Art. 581.</span> Para os fins do item III do artigo anterior, as empresas atribuirão parte do respectivo capital às suas sucursais, filiais ou agências, desde que localizadas fora da base territorial da entidade sindical representativa da atividade econômica do estabelecimento principal, na proporção das correspondentes operações econômicas, fazendo a devida comunicação às Delegacias Regionais do Trabalho, conforme localidade da sede da empresa, sucursais, filiais ou agências.</p>
        
        <p>§ 1º. Quando a empresa realizar diversas atividades econômicas, sem que nenhuma delas seja preponderante, cada uma dessas atividades será incorporada à respectiva categoria econômica, sendo a contribuição sindical devida à entidade sindical representativa da mesma categoria, procedendo-se, em relação às correspondentes sucursais, agências ou filiais, na forma do presente artigo.</p>
        
        <p>§ 2º. Entende-se por atividade preponderante a que caracterizar a unidade de produto, operação ou objetivo final, para cuja obtenção todas as demais atividades convirjam, exclusivamente em regime de conexão funcional.</p>
        
        <p><span class="artigo">Art. 582.</span> Os empregadores são obrigados a descontar da folha de pagamento de seus empregados relativa ao mês de março de cada ano a contribuição sindical dos empregados que autorizaram prévia e expressamente o seu recolhimento aos respectivos sindicatos.</p>
        
        <p>§ 1º. Considera-se um dia de trabalho, para efeito de determinação da importância a que alude o item I do art. 580, o equivalente:</p>
        
        <p class="alinea">a) a uma jornada normal de trabalho, se o pagamento ao empregado for feito por unidade de tempo;</p>
        
        <p class="alinea">b) a 1/30 (um trinta avos) da quantia percebida no mês anterior, se a remuneração for paga por tarefa, empreitada ou comissão.</p>
        
        <p>§ 2º. Quando o salário for pago em utilidades, ou nos casos em que o empregado receba, habitualmente, gorjetas, a contribuição sindical corresponderá a 1/30 (um trinta avos) da importância que tiver servido de base, no mês de janeiro, para a contribuição do empregado à Previdência Social.</p>
        
        <p><span class="artigo">Art. 583.</span> O recolhimento da contribuição sindical referente aos empregados e trabalhadores avulsos será efetuado no mês de abril de cada ano, e o relativo aos agentes ou trabalhadores autônomos e profissionais liberais realizar-se-á no mês de fevereiro, observada a exigência de autorização prévia e expressa prevista no art. 579 desta Consolidação.</p>
        
        <p>§ 1º. O recolhimento obedecerá ao sistema de guias, de acordo com as instruções expedidas pelo Ministro do Trabalho.</p>
        
        <p>§ 2º. O comprovante de depósito da contribuição sindical será remetido ao respectivo Sindicato; na falta deste, à correspondente entidade sindical de grau superior, e, se for o caso, ao Ministério do Trabalho.</p>
        
        <p><span class="artigo">Art. 584.</span> Servirá de base para o pagamento da contribuição sindical, pelos agentes ou trabalhadores autônomos e profissionais liberais, a lista de contribuintes organizada pelos respectivos sindicatos e, na falta destes, pelas federações ou confederações coordenadoras da categoria.</p>
        
        <p><span class="artigo">Art. 585.</span> Os profissionais liberais poderão optar pelo pagamento da contribuição sindical unicamente à entidade sindical representativa da respectiva profissão, desde que a exerça, efetivamente, na firma ou empresa e como tal sejam nelas registrados.</p>
        
        <p>Parágrafo único. Na hipótese referida neste artigo, à vista da manifestação do contribuinte e da exibição da prova de quitação da contribuição, dada por sindicato de profissionais liberais, o empregador deixará de efetuar, no salário do contribuinte, o desconto a que se refere o art. 582.</p>
        
        <p><span class="artigo">Art. 586.</span> A contribuição sindical será recolhida, nos meses fixados no presente Capítulo, à Caixa Econômica Federal ao Banco do Brasil S. A. ou aos estabelecimentos bancários nacionais integrantes do sistema de arrecadação dos tributos federais, os quais, de acordo com instruções expedidas pelo Conselho Monetário Nacional, repassarão à Caixa Econômica Federal as importâncias arrecadadas.</p>
        
        <p>§ 1º. Integrarão a rede arrecadadora as Caixas Econômicas Estaduais, nas localidades onde inexistam os estabelecimentos previstos no caput deste artigo.</p>
        
        <p>§ 2º. Tratando-se de empregador, agentes ou trabalhadores autônomos ou profissionais liberais o recolhimento será efetuado pelos próprios, diretamente ao estabelecimento arrecadador.</p>
        
        <p>§ 3º. A contribuição sindical devida pelos empregados e trabalhadores avulsos será recolhida pelo empregador e pelo sindicato, respectivamente.</p>
        
        <p><span class="artigo">Art. 587.</span> Os empregadores que optarem pelo recolhimento da contribuição sindical deverão fazê-lo no mês de janeiro de cada ano, ou, para os que venham a se estabelecer após o referido mês, na ocasião em que requererem às repartições o registro ou a licença para o exercício da respectiva atividade.</p>
        
        <p id="art588"><span class="artigo">Art. 588.</span> A Caixa Econômica Federal manterá conta corrente intitulada &quot;Depósitos da Arrecadação da Contribuição Sindical&quot;, em nome de cada uma das entidades sindicais beneficiadas, cabendo ao Ministério do Trabalho cientificá-la das ocorrências pertinentes à vida administrativa dessas entidades.</p>
        
        <p id="art588§1.">§ 1º. Os saques na conta corrente referida no caput deste artigo far-se-ão mediante ordem bancária ou cheque com as assinaturas conjuntas do presidente e do tesoureiro da entidade sindical.</p>
        
        <p id="art588§2....">§ 2º. A Caixa Econômica Federal remeterá, mensalmente, a cada entidade sindical, um extrato da respectiva conta corrente, e, quando solicitado, aos órgãos do Ministério do Trabalho.</p>
        
        <p id="art589"><span class="artigo">Art. 589.</span> Da importância da arrecadação da contribuição sindical serão feitos os seguintes créditos pela Caixa Econômica Federal, na forma das instruções que forem expedidas pelo Ministro do Trabalho:</p>
        
        <p id="art589i">I - para os empregadores:</p>
        
        <p id="art589ia" class="alinea">a) 5% (cinco por cento) para a confederação correspondente;</p>
        
        <p id="art589ib" class="alinea">b) 15% (quinze por cento) para a federação;</p>
        
        <p id="art589ic" class="alinea">c) 60% (sessenta por cento) para o sindicato respectivo; e</p>
        
        <p id="art589id" class="alinea">d) 20% (vinte por cento) para a ‘Conta Especial Emprego e Salário’;</p>
        
        <p id="art589ii.">II - para os trabalhadores:</p>
        
        <p id="art589iia" class="alinea">a) 5% (cinco por cento) para a confederação correspondente;</p>
        
        <p id="art589iib" class="alinea">b) 10% (dez por cento) para a central sindical;</p>
        
        <p id="art589iic" class="alinea">c) 15% (quinze por cento) para a federação;</p>
        
        <p id="art589iid" class="alinea">d) 60% (sessenta por cento) para o sindicato respectivo; e</p>
        
        <p id="art589iie" class="alinea">e) 10% (dez por cento) para a ‘Conta Especial Emprego e Salário’;</p>
        
        <p id="art589iii.">III - (revogado);</p>
        
        <p id="art589iv">IV - (revogado).</p>
        
        <p id="art589§1.">§ 1º. O sindicato de trabalhadores indicará ao Ministério do Trabalho e Emprego a central sindical a que estiver filiado como beneficiária da respectiva contribuição sindical, para fins de destinação dos créditos previstos neste artigo.</p>
        
        <p id="art589§2.">§ 2º. A central sindical a que se refere a alínea b do inciso II do caput deste artigo deverá atender aos requisitos de representatividade previstos na legislação específica sobre a matéria.</p>
        
        <p id="art590.."><span class="artigo">Art. 590.</span> Inexistindo confederação, o percentual previsto no art. 589 desta Consolidação caberá à federação representativa do grupo.</p>
        
        <p id="art590§1.">§ 1º (Revogado).</p>
        
        <p id="art590§2.">§ 2º (Revogado).</p>
        
        <p id="art590§3.">§ 3º. Não havendo sindicato, nem entidade sindical de grau superior ou central sindical, a contribuição sindical será creditada, integralmente, à ‘Conta Especial Emprego e Salário’.</p>
        
        <p id="art590§4">§ 4º. Não havendo indicação de central sindical, na forma do § 1º. do art. 589 desta Consolidação, os percentuais que lhe caberiam serão destinados à ‘Conta Especial Emprego e Salário’</p>
        
        <p id="art591.."><span class="artigo">Art. 591.</span> Inexistindo sindicato, os percentuais previstos na alínea c do inciso I e na alínea d do inciso II do caput do art. 589 desta Consolidação serão creditados à federação correspondente à mesma categoria econômica ou profissional.</p>
        
        <p id="art591p.">Parágrafo único. Na hipótese do caput deste artigo, os percentuais previstos nas alíneas a e b do inciso I e nas alíneas a e c do inciso II do caput do art. 589 desta Consolidação caberão à confederação.</p>
        
        <h3 id="titulovcapituloiiisecaoii">SEÇÃO II<br>
        DA APLICAÇÃO DO IMPOSTO SINDICAL</h3>
        
        <p id="art592"><span class="artigo">Art. 592.</span> A contribuição sindical, além das despesas vinculadas à sua arrecadação, recolhimento e controle, será aplicada pelos sindicatos, na conformidade dos respectivos estatutos, usando aos seguintes objetivos:</p>
        
        <p id="art592i..">I - Sindicatos de empregadores e de agentes autônomos:</p>
        
        <p id="art592ia.." class="alinea">a) assistência técnica e jurídica;</p>
        
        <p id="art592ib.." class="alinea">b) assistência médica, dentária, hospitalar e farmacêutica;</p>
        
        <p id="art592ic.." class="alinea">c) realização de estudos econômicos e financeiros;</p>
        
        <p id="art592id.." class="alinea">d) agências de colocação;</p>
        
        <p id="art592ie.." class="alinea">e) cooperativas;</p>
        
        <p id="art592if" class="alinea">f) bibliotecas;</p>
        
        <p id="art592ig" class="alinea">g) creches;</p>
        
        <p id="art592ih" class="alinea">h) congressos e conferências;</p>
        
        <p id="art592i.i" class="alinea">i) medidas de divulgação comercial e industrial no País, e no estrangeiro, bem como em outras tendentes a incentivar e aperfeiçoar a produção nacional.</p>
        
        <p id="art592ij" class="alinea">j) feiras e exposições;</p>
        
        <p id="art592il" class="alinea">l) prevenção de acidentes do trabalho;</p>
        
        <p id="art592im" class="alinea">m) finalidades desportivas.</p>
        
        <p id="art592ii..">II - Sindicatos de empregados:</p>
        
        <p id="art592iia...." class="alinea">a) assistência jurídica;</p>
        
        <p id="art592iib.." class="alinea">b) assistência médica, dentária, hospitalar e farmacêutica;</p>
        
        <p id="art592iic.." class="alinea">c) assistência à maternidade;</p>
        
        <p id="art592iid.." class="alinea">d) agências de colocação;</p>
        
        <p id="art592iie.." class="alinea">e) cooperativas;</p>
        
        <p id="art592iif.." class="alinea">f) bibliotecas;</p>
        
        <p id="art592iig.." class="alinea">g) creches;</p>
        
        <p id="art592iih.." class="alinea">h) congressos e conferências;</p>
        
        <p id="art592ii.i.." class="alinea">i) auxílio-funeral;</p>
        
        <p id="art592iij.." class="alinea">j) colônias de férias e centros de recreação;</p>
        
        <p id="art592iil" class="alinea">l) prevenção de acidentes do trabalho;</p>
        
        <p id="art592iim" class="alinea">m) finalidades desportivas e sociais;</p>
        
        <p id="art592iin" class="alinea">n) educação e formação profissional.</p>
        
        <p id="art592iio" class="alinea">o) bolsas de estudo.</p>
        
        <p id="art592iii..">III - Sindicatos de profissionais liberais:</p>
        
        <p id="art592iiia.." class="alinea">a) assistência jurídica;</p>
        
        <p id="art592iiib.." class="alinea">b) assistência médica, dentária, hospitalar e farmacêutica;</p>
        
        <p id="art592iiic.." class="alinea">c) assistência à maternidade;</p>
        
        <p id="art592iiid.." class="alinea">d) bolsas de estudo;</p>
        
        <p id="art592iiie.." class="alinea">e) cooperativas;</p>
        
        <p id="art592iiif.." class="alinea">f) bibliotecas;</p>
        
        <p id="art592iiig.." class="alinea">g) creches;</p>
        
        <p id="art592iiih.." class="alinea">h) congressos e conferências;</p>
        
        <p id="art592iii.i.." class="alinea">i) auxílio-funeral;</p>
        
        <p id="art592iiij.." class="alinea">j) colônias de férias e centros de recreação;</p>
        
        <p id="art592iiil." class="alinea">l) estudos técnicos e científicos;</p>
        
        <p id="art592iiim." class="alinea">m) finalidades desportivas e sociais;</p>
        
        <p id="art592iiin." class="alinea">n) educação e formação profissional;</p>
        
        <p id="art592iiio" class="alinea">o) prêmios por trabalhos técnicos e científicos.</p>
        
        <p id="art592iv..">IV - Sindicatos de trabalhadores autônomos:</p>
        
        <p id="art592iva.." class="alinea">a) assistência técnica e jurídica;</p>
        
        <p id="art592ivb.." class="alinea">b) assistência médica, dentária, hospitalar e farmacêutica;</p>
        
        <p id="art592ivc.." class="alinea">c) assistência à maternidade;</p>
        
        <p id="art592ivd.." class="alinea">d) bolsas de estudo;</p>
        
        <p id="art592ive.." class="alinea">e) cooperativas;</p>
        
        <p id="art592ivf.." class="alinea">f) bibliotecas;</p>
        
        <p id="art592ivg.." class="alinea">g) creches;</p>
        
        <p id="art592ivh.." class="alinea">h) congressos e conferências;</p>
        
        <p id="art592iv.i.." class="alinea">i) auxílio-funeral;</p>
        
        <p id="art592ivj.." class="alinea">j) colônias de férias e centros de recreação;</p>
        
        <p id="art592ivl" class="alinea">l) educação e formação profissional;</p>
        
        <p id="art592ivm" class="alinea">m) finalidades desportivas e sociais;</p>
        
        <p id="art592§1..">§ 1º. A aplicação prevista neste artigo ficará a critério de cada entidade, que, para tal fim, obedecerá, sempre, às peculiaridades do respectivo grupo ou categoria, facultado ao Ministro do Trabalho permitir a inclusão de novos programas, desde que assegurados os serviços assistenciais fundamentais da entidade.</p>
        
        <p id="art592§2..">§ 2º. Os sindicatos poderão destacar, em seus orçamentos anuais, até 20% (vinco por cento) dos recursos da contribuição sindical para o custeio das suas atividades administrativas, independentemente de autorização ministerial.</p>
        
        <p id="art592§3.">§ 3º. O uso da contribuição sindical prevista no § 2º. não poderá exceder do valor total das mensalidades sociais consignadas nos orçamentos dos sindicatos, salvo autorização expressa do Ministro do Trabalho.</p>
        
        <p id="art593"><span class="artigo">Art. 593.</span> As percentagens atribuídas às entidades sindicais de grau superior e às centrais sindicais serão aplicadas de conformidade com o que dispuserem os respectivos conselhos de representantes ou estatutos.</p>
        
        <p id="art593p">Parágrafo único. Os recursos destinados às centrais sindicais deverão ser utilizados no custeio das atividades de representação geral dos trabalhadores decorrentes de suas atribuições legais.</p>
        
        <p id="art594."><span class="artigo">Art. 594.</span> O &quot;Fundo Social Sindical&quot; será gerido e aplicado pela Comissão do Imposto Sindical em objetivos que atendam aos interesses gerais da organização sindical nacional ou à assistência social aos trabalhadores. (Redação dada pelo Decreto-lei nº 9.615, de 20.8.1946) (Vide Lei nº 4.589, de 1964) (Vide Lei nº 11.648, de 2008)</p>
        
        <h3 id="titulovcapituloiiisecaoiii">SEÇÃO III<br>
        DA COMISSÃO DO IMPOSTO SINDICAL</h3>
        
        <p id="art595"><span class="artigo">Art. 595.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art596."><span class="artigo">Art. 596.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <p id="art597.."><span class="artigo">Art. 597.</span> (Revogado pela Lei nº 4.589, de 11.12.1964)</p>
        
        <h3 id="titulovcapituloiiisecaoiv">SEÇÃO IV<br>
        DAS PENALIDADES</h3>
        
        <p id="art598.1"><span class="artigo">Art. 598.</span> Sem prejuízo da ação criminal e das penalidades previstas no art. 553, serão aplicadas multas de Cr$ 10,00 (dez cruzeiros) a Cr$ 10.000,00 (dez mil cruzeiros) pelas infrações deste Capítulo impostas no Distrito Federal pela autoridade competente de 1ª instância do Departamento Nacional do Trabalho e nos Estados e no Território do Acre pelas autoridades regionais do Ministério do Trabalho, Industria e Comercio. (Vide Decreto-lei nº 8.987-A, de 1946) (Vide Lei nº 6.205, de 1975 e Lei 6.986, de 1982) (Vide Lei nº 11.648, de 2008)</p>
        
        <p id="art598p.0">Parágrafo único. A gradação da multa atenderá à natureza da infração e às condições sociais e econômicas do infrator. (Vide Decreto-lei nº 8.987-A, de 1946)</p>
        
        <p id="art599"><span class="artigo">Art. 599.</span> Para os profissionais liberais, a penalidade consistirá na suspensão do exercício profissional, até a necessária quitação, e será aplicada pelos órgãos públicos ou autárquicos disciplinadores das respectivas profissões mediante comunicação das autoridades fiscalizadoras. (Vide Lei nº 11.648, de 2008)</p>
        
        <p id="art600"><span class="artigo">Art. 600.</span> O recolhimento da contribuição sindical efetuado fora do prazo referido neste Capítulo, quando espontâneo, será acrescido da multa de 10% (dez por cento), nos 30 (trinta) primeiros dias, com o adicional de 2% (dois por cento) por mês subsequente de atraso, além de juros de mora de 1 % (um por cento) ao mês e correção monetária, ficando, nesse caso, o infrator, isento de outra penalidade.</p>
        
        <p id="art600§3">§ 1º. O montante das cominações previstas neste artigo reverterá sucessivamente:</p>
        
        <p id="art600§1a" class="alinea">a) ao Sindicato respectivo;</p>
        
        <p id="art600§1b" class="alinea">b) à Federação respectiva, na ausência de Sindicato;</p>
        
        <p id="art600§1c" class="alinea">c) à Confederação respectiva, inexistindo Federação.</p>
        
        <p id="art600§2.">§ 2º. Na falta de Sindicato ou entidade de grau superior, o montante a que alude o parágrafo precedente reverterá à conta &quot;Emprego e Salário.</p>
        
        <h3 id="titulovcapituloiiisecaov">SEÇÃO V<br>
        DISPOSIÇÕES GERAIS</h3>
        
        <p id="art601"><span class="artigo">Art. 601.</span> (Revogado pela Lei nº 13.467, de 2017)</p>
        
        <p id="art602."><span class="artigo">Art. 602.</span> Os empregados que não estiverem trabalhando no mês destinado ao desconto da contribuição sindical e que venham a autorizar prévia e expressamente o recolhimento serão descontados no primeiro mês subsequente ao do reinício do trabalho.</p>
        
        <p id="art602p">Parágrafo único. De igual forma se procederá com os empregados que forem admitidos depois daquela data e que não tenham trabalhado anteriormente nem apresentado a respectiva quitação.</p>
        
        <p id="art603"><span class="artigo">Art. 603.</span> Os empregadores são obrigados a prestar aos encarregados da fiscalização os esclarecimentos necessários ao desempenho de sua missão e a exibir-lhes, quando exigidos, na parte relativa ao pagamento de empregados, os seus livros, folhas de pagamento e outros documentos comprobatórios desses pagamentos, sob pena da multa cabível. (Vide Lei nº 11.648, de 2008)</p>
        
        <p id="art605"><span class="artigo">Art. 605.</span> As entidades sindicais são obrigadas a promover a publicação de editais concernentes ao recolhimento do imposto sindical, durante 3 (três) dias, nos jornais de maior circulação local e até 10 (dez) dias da data fixada para depósito bancário. (Vide Lei nº 11.648, de 2008) (Vide Lei nº 11.648, de 2008)</p>
        
        <p id="art606"><span class="artigo">Art. 606.</span> Às entidades sindicais cabe, em caso de falta de pagamento da contribuição sindical, promover a respectiva cobrança judicial, mediante ação executiva, valendo como título de dívida a certidão expedida pelas autoridades regionais do Ministério do Trabalho e Previdência Social. (Redação dada pelo Decreto-lei nº 925, de 10.10.1969) (Vide Lei nº 11.648, de 2008)</p>
        
        <p id="art606§1....">§ 1º. O Ministro do Trabalho, Indústria e Comércio baixará as instruções regulando a expedição das certidões a que se refere o presente artigo das quais deverá constar a individualização de contribuinte, a indicação do débito e a designação da entidade a favor da qual será recolhida a importância de imposto, de acordo com o respectivo enquadramento sindical.</p>
        
        <p id="art606§2">§ 2º. Para os fins da cobrança judicial do imposto sindical, são extensivos às entidades sindicais, com exceção do foro especial, os privilégios da Fazenda Pública, para cobrança da dívida ativa.</p>
        
        <p id="art607"><span class="artigo">Art. 607.</span> É considerado como documento essencial ao comparecimento às concorrências públicas ou administrativas e para o fornecimento às repartições paraestatais ou autárquicas a prova da quitação do respectivo imposto sindical e a de recolhimento do imposto sindical, descontado dos respectivos empregados. (Vide Lei nº 11.648, de 2008)</p>
        
        <p id="art608"><span class="artigo">Art. 608.</span> As repartições federais, estaduais ou municipais não concederão registro ou licenças para funcionamento ou renovação de atividades aos estabelecimentos de empregadores e aos escritórios ou congêneres dos agentes ou trabalhadores autônomos e profissionais liberais, nem concederão alvarás de licença ou localização, sem que sejam exibidas as provas de quitação do imposto sindical, na forma do artigo anterior. (Vide Lei nº 11.648, de 2008)</p>
        
        <p id="art608p">Parágrafo único. A não observância do disposto neste artigo acarretará, de pleno direito, a nulidade dos atos nele referidos, bem como dos mencionados no artigo 607. (Parágrafo incluído pela Lei nº 6.386, de 9.12.1976)</p>
        
        <p id="art609"><span class="artigo">Art. 609.</span> O recolhimento da contribuição sindical e todos os lançamentos e movimentos nas contas respectivas são isentos de selos e taxas federais, estaduais ou municipais. (Vide Lei nº 11.648, de 2008)</p>
        
        <p id="art610."><span class="artigo">Art. 610.</span> As dúvidas no cumprimento deste Capítulo serão resolvidas pelo Diretor-Geral do Departamento Nacional do Trabalho, que expedirá as instruções que se tornarem necessárias à sua execução.</p>
        
        <h1 id="titulovi">TÍTULO VI<br>
        CONVENÇÕES COLETIVAS DE TRABALHO</h1>
        
        <p id="art611"><span class="artigo">Art. 611.</span> Convenção Coletiva de Trabalho é o acordo de caráter normativo, pelo qual dois ou mais Sindicatos representativos de categorias econômicas e profissionais estipulam condições de trabalho aplicáveis, no âmbito das respectivas representações, às relações individuais de trabalho. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art611§1.">§ 1º. É facultado aos Sindicatos representativos de categorias profissionais celebrar Acordos Coletivos com uma ou mais empresas da correspondente categoria econômica, que estipulem condições de trabalho, aplicáveis no âmbito da empresa ou das acordantes respectivas relações de trabalho. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art611§2.">§ 2º. As Federações e, na falta desta, as Confederações representativas de categorias econômicas ou profissionais poderão celebrar convenções coletivas de trabalho para reger as relações das categorias a elas vinculadas, inorganizadas em Sindicatos, no âmbito de suas representações. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art611a"><span class="artigo">Art. 611-A.</span> A convenção coletiva e o acordo coletivo de trabalho têm prevalência sobre a lei quando, entre outros, dispuserem sobre:</p>
        
        <p id="art611ai">I - pacto quanto à jornada de trabalho, observados os limites constitucionais;</p>
        
        <p id="art611aii">II - banco de horas anual;</p>
        
        <p id="art611aiii">III - intervalo intrajornada, respeitado o limite mínimo de trinta minutos para jornadas superiores a seis horas;</p>
        
        <p id="art611aiv">IV - adesão ao Programa Seguro-Emprego (PSE), de que trata a Lei no 13.189, de 19 de novembro de 2015;</p>
        
        <p id="art611av">V - plano de cargos, salários e funções compatíveis com a condição pessoal do empregado, bem como identificação dos cargos que se enquadram como funções de confiança;</p>
        
        <p id="art611avi></a>VI - regulamento empresarial;</p>
        
        <p id="art611aviii">VIII - teletrabalho, regime de sobreaviso, e trabalho intermitente;</p>
        
        <p id="art611aix">IX - remuneração por produtividade, incluídas as gorjetas percebidas pelo empregado, e remuneração por desempenho individual;</p>
        
        <p id="art611ax">X - modalidade de registro de jornada de trabalho;</p>
        
        <p id="art611axi">XI - troca do dia de feriado;</p>
        
        <p id="art611axii">XII - enquadramento do grau de insalubridade;</p>
        
        <p id="art611axiii">XIII - prorrogação de jornada em ambientes insalubres, sem licença prévia das autoridades competentes do Ministério do Trabalho;</p>
        
        <p id="art611axiv">XIV - prêmios de incentivo em bens ou serviços, eventualmente concedidos em programas de incentivo;</p>
        
        <p id="art611axv">XV - participação nos lucros ou resultados da empresa.</p>
        
        <p id="art611a§1">§ 1º. No exame da convenção coletiva ou do acordo coletivo de trabalho, a Justiça do Trabalho observará o disposto no § 3º. do art. 8º. desta Consolidação.</p>
        
        <p id="art611a§2">§ 2º. A inexistência de expressa indicação de contrapartidas recíprocas em convenção coletiva ou acordo coletivo de trabalho não ensejará sua nulidade por não caracterizar um vício do negócio jurídico.</p>
        
        <p id="art611a§3">§ 3º. Se for pactuada cláusula que reduza o salário ou a jornada, a convenção coletiva ou o acordo coletivo de trabalho deverão prever a proteção dos empregados contra dispensa imotivada durante o prazo de vigência do instrumento coletivo.</p>
        
        <p id="art611a§4">§ 4º. Na hipótese de procedência de ação anulatória de cláusula de convenção coletiva ou de acordo coletivo de trabalho, quando houver a cláusula compensatória, esta deverá ser igualmente anulada, sem repetição do indébito.</p>
        
        <p id="art611a§5">§ 5º. Os sindicatos subscritores de convenção coletiva ou de acordo coletivo de trabalho deverão participar, como litisconsortes necessários, em ação individual ou coletiva, que tenha como objeto a anulação de cláusulas desses instrumentos.</p>
        
        <p id="art611b"><span class="artigo">Art. 611-B.</span> Constituem objeto ilícito de convenção coletiva ou de acordo coletivo de trabalho, exclusivamente, a supressão ou a redução dos seguintes direitos:</p>
        
        <p id="art611bi">I - normas de identificação profissional, inclusive as anotações na Carteira de Trabalho e Previdência Social;</p>
        
        <p id="art611bii">II - seguro-desemprego, em caso de desemprego involuntário;</p>
        
        <p id="art611biii">III - valor dos depósitos mensais e da indenização rescisória do Fundo de Garantia do Tempo de Serviço (FGTS);</p>
        
        <p id="art611biv">IV - salário mínimo;</p>
        
        <p id="art611bv">V - valor nominal do décimo terceiro salário;</p>
        
        <p id="art611bvi">VI - remuneração do trabalho noturno superior à do diurno;</p>
        
        <p id="art611bvii">VII - proteção do salário na forma da lei, constituindo crime sua retenção dolosa;</p>
        
        <p id="art611bviii">VIII - salário-família;</p>
        
        <p id="art611bix">IX - repouso semanal remunerado;</p>
        
        <p id="art611bx">X - remuneração do serviço extraordinário superior, no mínimo, em 50% (cinquenta por cento) à do normal;</p>
        
        <p id="art611bxi">XI - número de dias de férias devidas ao empregado;</p>
        
        <p id="art611bxii">XII - gozo de férias anuais remuneradas com, pelo menos, um terço a mais do que o salário normal;</p>
        
        <p id="art611bxiii">XIII - licença-maternidade com a duração mínima de cento e vinte dias;</p>
        
        <p id="art611bxiv">XIV - licença-paternidade nos termos fixados em lei;</p>
        
        <p id="art611bxv">XV - proteção do mercado de trabalho da mulher, mediante incentivos específicos, nos termos da lei;</p>
        
        <p id="art611bxvi">XVI - aviso prévio proporcional ao tempo de serviço, sendo no mínimo de trinta dias, nos termos da lei;</p>
        
        <p id="art611bxvii">XVII - normas de saúde, higiene e segurança do trabalho previstas em lei ou em normas regulamentadoras do Ministério do Trabalho;</p>
        
        <p id="art611bxviii">XVIII - adicional de remuneração para as atividades penosas, insalubres ou perigosas;</p>
        
        <p id="art611bxix">XIX - aposentadoria;</p>
        
        <p id="art611bxx">XX - seguro contra acidentes de trabalho, a cargo do empregador;</p>
        
        <p id="art611bxxi">XXI - ação, quanto aos créditos resultantes das relações de trabalho, com prazo prescricional de cinco anos para os trabalhadores urbanos e rurais, até o limite de dois anos após a extinção do contrato de trabalho;</p>
        
        <p id="art611bxxii">XXII - proibição de qualquer discriminação no tocante a salário e critérios de admissão do trabalhador com deficiência;</p>
        
        <p id="art611bxxiii">XXIII - proibição de trabalho noturno, perigoso ou insalubre a menores de dezoito anos e de qualquer trabalho a menores de dezesseis anos, salvo na condição de aprendiz, a partir de quatorze anos;</p>
        
        <p id="art611bxxiv">XXIV - medidas de proteção legal de crianças e adolescentes;</p>
        
        <p id="art611bxxv">XXV - igualdade de direitos entre o trabalhador com vínculo empregatício permanente e o trabalhador avulso;</p>
        
        <p id="art611bxxvi">XXVI - liberdade de associação profissional ou sindical do trabalhador, inclusive o direito de não sofrer, sem sua expressa e prévia anuência, qualquer cobrança ou desconto salarial estabelecidos em convenção coletiva ou acordo coletivo de trabalho;</p>
        
        <p id="art611bxxvii">XXVII - direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender;</p>
        
        <p id="art611bxxviii">XXVIII - definição legal sobre os serviços ou atividades essenciais e disposições legais sobre o atendimento das necessidades inadiáveis da comunidade em caso de greve;</p>
        
        <p id="art611bxxix">XXIX - tributos e outros créditos de terceiros;</p>
        
        <p id="art611bxxx">XXX - as disposições previstas nos arts. 373-A, 390, 392, 392-A, 394, 394-A, 395, 396 e 400 desta Consolidação.</p>
        
        <p id="art611bp">Parágrafo único. Regras sobre duração do trabalho e intervalos não são consideradas como normas de saúde, higiene e segurança do trabalho para os fins do disposto neste artigo.</p>
        
        <p id="art612"><span class="artigo">Art. 612.</span> Os Sindicatos só poderão celebrar Convenções ou Acordos Coletivos de Trabalho, por deliberação de Assembleia Geral especialmente convocada para esse fim, consoante o disposto nos respectivos Estatutos, dependendo a validade da mesma do comparecimento e votação, em primeira convocação, de 2/3 (dois terços) dos associados da entidade, se se tratar de Convenção, e dos interessados, no caso de Acordo, e, em segunda, de 1/3 (um terço) dos mesmos. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art612p">Parágrafo único. O quórum de comparecimento e votação será de 1/8 (um oitavo) dos associados em segunda convocação, nas entidades sindicais que tenham mais de 5.000 (cinco mil) associados. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613"><span class="artigo">Art. 613.</span> As Convenções e os Acordos deverão conter obrigatoriamente: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613i">I - Designação dos Sindicatos convenentes ou dos Sindicatos e empresas acordantes; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613ii">II - Prazo de vigência; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613iii">III - Categorias ou classes de trabalhadores abrangidas pelos respectivos dispositivos; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613iv">IV - Condições ajustadas para reger as relações individuais de trabalho durante sua vigência; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613v">V - Normas para a conciliação das divergências sugeridas entre os convenentes por motivos da aplicação de seus dispositivos; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613vi">VI - Disposições sobre o processo de sua prorrogação e de revisão total ou parcial de seus dispositivos; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613vii">VII - Direitos e deveres dos empregados e empresas; (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613viii">VIII - Penalidades para os Sindicatos convenentes, os empregados e as empresas em caso de violação de seus dispositivos. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art613p">Parágrafo único. As convenções e os Acordos serão celebrados por escrito, sem emendas nem rasuras, em tantas vias quantos forem os Sindicatos convenentes ou as empresas acordantes, além de uma destinada a registro. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art614"><span class="artigo">Art. 614.</span> Os Sindicatos convenentes ou as empresas acordantes promoverão, conjunta ou separadamente, dentro de 8 (oito) dias da assinatura da Convenção ou Acordo, o depósito de uma via do mesmo, para fins de registro e arquivo, no Departamento Nacional do Trabalho, em se tratando de instrumento de caráter nacional ou interestadual, ou nos órgãos regionais do Ministério do Trabalho e Previdência Social, nos demais casos. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art614§1">§ 1º. As Convenções e os Acordos entrarão em vigor 3 (três) dias após a data da entrega dos mesmos no órgão referido neste artigo. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art614§2">§ 2º. Cópias autênticas das Convenções e dos Acordos deverão ser afixados de modo visível, pelos Sindicatos convenentes, nas respectivas sedes e nos estabelecimentos das empresas compreendidas no seu campo de aplicação, dentro de 5 (cinco) dias da data do depósito previsto neste artigo. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art614§3.">§ 3º. Não será permitido estipular duração de convenção coletiva ou acordo coletivo de trabalho superior a dois anos, sendo vedada a ultratividade.</p>
        
        <p id="art615"><span class="artigo">Art. 615.</span> O processo de prorrogação, revisão, denúncia ou revogação total ou parcial de Convenção ou Acordo ficará subordinado, em qualquer caso, à aprovação de Assembleia Geral dos Sindicatos convenentes ou partes acordantes, com observância do disposto no art. 612. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art615§1">§ 1º. O instrumento de prorrogação, revisão, denúncia ou revogação de Convenção ou Acordo será depositado para fins de registro e arquivamento, na repartição em que o mesmo originariamente foi depositado observado o disposto no art. 614. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art615§2">§ 2º. As modificações introduzidas em Convenção ou Acordo, por força de revisão ou de revogação parcial de suas cláusulas passarão a vigorar 3 (três) dias após a realização de depósito previsto no § 1º. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art616"><span class="artigo">Art. 616.</span> Os Sindicatos representativos de categorias econômicas ou profissionais e as empresas, inclusive as que não tenham representação sindical, quando provocados, não podem recusar-se à negociação coletiva. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art616§1">§ 1º. Verificando-se recusa à negociação coletiva, cabe aos Sindicatos ou empresas interessadas dar ciência do fato, conforme o caso, ao Departamento Nacional do Trabalho ou aos órgãos regionais do Ministério do Trabalho e Previdência Social, para convocação compulsória dos Sindicatos ou empresas recalcitrantes. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art616§2">§ 2º. No caso de persistir a recusa à negociação coletiva, pelo desatendimento às convocações feitas pelo Departamento Nacional do Trabalho ou órgãos regionais do Ministério de Trabalho e Previdência Social, ou se malograr a negociação entabulada, é facultada aos Sindicatos ou empresas interessadas a instauração de dissídio coletivo. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art616§3">§ 3º. Havendo convenção, acordo ou sentença normativa em vigor, o dissídio coletivo deverá ser instaurado dentro dos 60 (sessenta) dias anteriores ao respectivo termo final, para que o novo instrumento possa ter vigência no dia imediato a esse termo. (Redação dada pelo Decreto-lei nº 424, de 21.1.1969)</p>
        
        <p id="art616§4">§ 4º. Nenhum processo de dissídio coletivo de natureza econômica será admitido sem antes se esgotarem as medidas relativas à formalização da Convenção ou Acordo correspondente. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art617"><span class="artigo">Art. 617.</span> Os empregados de uma ou mais empresas que decidirem celebrar Acordo Coletivo de Trabalho com as respectivas empresas darão ciência de sua resolução, por escrito, ao Sindicato representativo da categoria profissional, que terá o prazo de 8 (oito) dias para assumir a direção dos entendimentos entre os interessados, devendo igual procedimento ser observado pelas empresas interessadas com relação ao Sindicato da respectiva categoria econômica. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art617§1">§ 1º. Expirado o prazo de 8 (oito) dias sem que o Sindicato tenha se desincumbido do encargo recebido, poderão os interessados dar conhecimento do fato à Federação a que estiver vinculado o Sindicato e, em falta dessa, à correspondente Confederação, para que, no mesmo prazo, assuma a direção dos entendimentos. Esgotado esse prazo, poderão os interessados prosseguir diretamente na negociação coletiva até final. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art617§2">§ 2º. Para o fim de deliberar sobre o Acordo, a entidade sindical convocará assembleia geral dos diretamente interessados, sindicalizados ou não, nos termos do art. 612. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art618"><span class="artigo">Art. 618.</span> As empresas e instituições que não estiverem incluídas no enquadramento sindical a que se refere o art. 577 desta Consolidação poderão celebrar Acordos Coletivos de Trabalho com os Sindicatos representativos dos respectivos empregados, nos termos deste Título. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art619"><span class="artigo">Art. 619.</span> Nenhuma disposição de contrato individual de trabalho que contrarie normas de Convenção ou Acordo Coletivo de Trabalho poderá prevalecer na execução do mesmo, sendo considerada nula de pleno direito. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art620.."><span class="artigo">Art. 620.</span> As condições estabelecidas em acordo coletivo de trabalho sempre prevalecerão sobre as estipuladas em convenção coletiva de trabalho.</p>
        
        <p id="art621"><span class="artigo">Art. 621.</span> As Convenções e os Acordos poderão incluir entre suas cláusulas disposição sobre a constituição e funcionamento de comissões mistas de consulta e colaboração, no plano da empresa e sobre participação, nos lucros. Estas disposições mencionarão a forma de constituição, o modo de funcionamento e as atribuições das comissões, assim como o plano de participação, quando for o caso. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art622"><span class="artigo">Art. 622.</span> Os empregados e as empresas que celebrarem contratos individuais de trabalho, estabelecendo condições contrárias ao que tiver sido ajustado em Convenção ou Acordo que lhes for aplicável, serão passíveis da multa neles fixada. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art622p">Parágrafo único. A multa a ser imposta ao empregado não poderá exceder da metade daquela que, nas mesmas condições seja estipulada para a empresa. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art623"><span class="artigo">Art. 623.</span> Será nula de pleno direito disposição de Convenção ou Acordo que, direta ou indiretamente, contrarie proibição ou norma disciplinadora da política econômico-financeira do Governo ou concernente à política salarial vigente, não produzindo quaisquer efeitos perante autoridades e repartições públicas, inclusive para fins de revisão de preços e tarifas de mercadorias e serviços. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art623p">Parágrafo único. Na hipótese deste artigo, a nulidade será declarada, de ofício ou mediante representação, pelo Ministro do Trabalho e Previdência Social, ou pela Justiça do Trabalho em processo submetido ao seu julgamento. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art624"><span class="artigo">Art. 624.</span> A vigência de cláusula de aumento ou reajuste salarial, que implique elevação de tarifas ou de preços sujeitos à fixação por autoridade pública ou repartição governamental, dependerá de prévia audiência dessa autoridade ou repartição e sua expressa declaração no tocante à possibilidade de elevação da tarifa ou do preço e quanto ao valor dessa elevação. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art625"><span class="artigo">Art. 625.</span> As controvérsias resultantes da aplicação de Convenção ou de Acordo celebrado nos termos deste Título serão dirimidas pela Justiça do Trabalho. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <h1 id="titulovia">TÍTULO VI-A<br>
        DA COMISSÕES DE CONCILIAÇÃO PRÉVIA</h1>
        
        <p id="art625a"><span class="artigo">Art. 625-A.</span> As empresas e os sindicatos podem instituir Comissões de Conciliação Prévia, de composição paritária, com representante dos empregados e dos empregadores, com a atribuição de tentar conciliar os conflitos individuais do trabalho. Parágrafo único. As Comissões referidas no caput deste artigo poderão ser constituídas por grupos de empresas ou ter caráter intersindical.</p>
        
        <p id="art625b"><span class="artigo">Art. 625-B.</span> A Comissão instituída no âmbito da empresa será composta de, no mínimo, dois e, no máximo, dez membros, e observará as seguintes normas:</p>
        
        <p id="art625bi">I - a metade de seus membros será indicada pelo empregador e outra metade eleita pelos empregados, em escrutínio, secreto, fiscalizado pelo sindicato de categoria profissional; (incluído pela Lei nº 9.958, de 12.1.2000)</p>
        
        <p id="art625bii">II - haverá na Comissão tantos suplentes quantos forem os representantes titulares; (incluído pela Lei nº 9.958, de 12.1.2000)</p>
        
        <p id="art625biii">III - o mandato dos seus membros, titulares e suplentes, é de um ano, permitida uma recondução. (incluído pela Lei nº 9.958, de 12.1.2000)</p>
        
        <p id="art625b§1">§ 1º. É vedada a dispensa dos representantes dos empregados membros da Comissão de Conciliação Prévia, titulares e suplentes, até um ano após o final do mandato, salvo se cometerem falta grave, nos termos da lei.</p>
        
        <p id="art625b§2">§ 2º. O representante dos empregados desenvolverá seu trabalho normal na empresa afastando-se de suas atividades apenas quando convocado para atuar como conciliador, sendo computado como tempo de trabalho efetivo o despendido nessa atividade.</p>
        
        <p id="art625c"><span class="artigo">Art. 625-C.</span> A Comissão instituída no âmbito do sindicato terá sua constituição e normas de funcionamento definidas em convenção ou acordo coletivo.</p>
        
        <p id="art625d"><span class="artigo">Art. 625-D.</span> Qualquer demanda de natureza trabalhista será submetida à Comissão de Conciliação Prévia se, na localidade da prestação de serviços, houver sido instituída a Comissão no âmbito da empresa ou do sindicato da categoria.</p>
        
        <p id="art625d§1">§ 1º. A demanda será formulada por escrito ou reduzida a termo por qualquer dos membros da Comissão, sendo entregue cópia datada e assinada pelo membro aos interessados.</p>
        
        <p id="art625d§2">§ 2º. Não prosperando a conciliação, será fornecida ao empregado e ao empregador declaração da tentativa conciliatória frustrada com a descrição de seu objeto, firmada pelos membros da Comissão, que deverá ser juntada à eventual reclamação trabalhista.</p>
        
        <p id="art625d§3">§ 3º. Em caso de motivo relevante que impossibilite a observância do procedimento previsto no caput deste artigo, será a circunstância declarada na petição da ação intentada perante a Justiça do Trabalho.</p>
        
        <p id="art625d§4">§ 4º. Caso exista, na mesma localidade e para a mesma categoria, Comissão de empresa e Comissão sindical, o interessado optará por uma delas submeter a sua demanda, sendo competente aquela que primeiro conhecer do pedido.</p>
        
        <p id="art625e"><span class="artigo">Art. 625-E.</span> Aceita a conciliação, será lavrado termo assinado pelo empregado, pelo empregador ou seu proposto e pelos membros da Comissão, fornecendo-se cópia às partes.</p>
        
        <p id="art625ep">Parágrafo único. O termo de conciliação é título executivo extrajudicial e terá eficácia liberatória geral, exceto quanto às parcelas expressamente ressalvadas.</p>
        
        <p id="art625f"><span class="artigo">Art. 625-F.</span> As Comissões de Conciliação Prévia têm prazo de dez dias para a realização da sessão de tentativa de conciliação a partir da provocação do interessado.</p>
        
        <p id="art625fp">Parágrafo único. Esgotado o prazo sem a realização da sessão, será fornecida, no último dia do prazo, a declaração a que se refere o § 2º. do art. 625-D.</p>
        
        <p id="art625g"><span class="artigo">Art. 625-G.</span> O prazo prescricional será suspenso a partir da provocação da Comissão de Conciliação Prévia, recomeçando a fluir, pelo que lhe resta, a partir da tentativa frustrada de conciliação ou do esgotamento do prazo previsto no art. 625-F.</p>
        
        <p id="art625h"><span class="artigo">Art. 625-H.</span> Aplicam-se aos Núcleos Intersindicais de Conciliação Trabalhista em funcionamento ou que vierem a ser criados, no que couber, as disposições previstas neste Título, desde que observados os princípios da paridade e da negociação coletiva na sua constituição.</p>
        
        <h1>TÍTULO VII<br>
        DO PROCESSO DE MULTAS ADMINISTRATIVAS</h1>
        
        <h2>CAPÍTULO I<br>
        DA FISCALIZAÇÃO, DA AUTUAÇÃO E DA IMPOSIÇÃO DE MULTAS</h2>
        
        <p><span class="artigo">Art. 626.</span> Incumbe às autoridades competentes do Ministério do Trabalho, Industria e Comercio, ou àquelas que exerçam funções delegadas, a fiscalização do fiel cumprimento das normas de proteção ao trabalho.</p>
        
        <p>Parágrafo único. Os fiscais dos Institutos de Seguro Social e das entidades paraestatais em geral dependentes do Ministério do Trabalho, Industria e Comercio serão competentes para a fiscalização a que se refere o presente artigo, na forma das instruções que forem expedidas pelo Ministro do Trabalho, Industria e Comercio.</p>
        
        <p><span class="artigo">Art. 627.</span> A fim de promover a instrução dos responsáveis no cumprimento das leis de proteção do trabalho, a fiscalização deverá observar o critério de dupla visita nos seguintes casos:</p>
        
        <p class="alinea">a) quando ocorrer promulgação ou expedição de novas leis, regulamentos ou instruções ministeriais, sendo que, com relação exclusivamente a esses atos, será feita apenas a instrução dos responsáveis;</p>
        
        <p class="alinea">b) em se realizando a primeira inspeção dos estabelecimentos ou dos locais de trabalho, recentemente inaugurados ou empreendidos.</p>
        
        <p><span class="artigo">Art. 627-A.</span> Poderá ser instaurado procedimento especial para a ação fiscal, objetivando a orientação sobre o cumprimento das leis de proteção ao trabalho, bem como a prevenção e o saneamento de infrações à legislação mediante Termo de Compromisso, na forma a ser disciplinada no Regulamento da Inspeção do Trabalho. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p><span class="artigo">Art. 628.</span> Salvo o disposto nos arts. 627 e 627-A, a toda verificação em que o Auditor-Fiscal do Trabalho concluir pela existência de violação de preceito legal deve corresponder, sob pena de responsabilidade administrativa, a lavratura de auto de infração. (Redação dada pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p>§ 1º. Ficam as empresas obrigadas a possuir o livro intitulado &quot;Inspeção do Trabalho&quot;, cujo modelo será aprovado por portaria Ministerial. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 2º. Nesse livro, registrará o agente da inspeção sua visita ao estabelecimento, declarando a data e a hora do início e término da mesma, bem como o resultado da inspeção, nele consignando, se for o caso, todas as irregularidades verificadas e as exigências feitas, com os respectivos prazos para seu atendimento, e, ainda, de modo legível, os elementos de sua identificação funcional. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 3º. Comprovada má fé do agente da inspeção, quanto à omissão ou lançamento de qualquer elemento no livro, responderá ele por falta grave no cumprimento do dever, ficando passível, desde logo, da pena de suspensão até 30 (trinta) dias, instaurando-se, obrigatoriamente, em caso de reincidência, inquérito administrativo. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 4º. A lavratura de autos contra empresas fictícias e de endereços inexistentes, assim como a apresentação de falsos relatórios, constituem falta grave, punível na forma do § 3º. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p><span class="artigo">Art. 628-A.</span> Fica instituído o Domicílio Eletrônico Trabalhista, regulamentado pelo Ministério do Trabalho e Previdência, destinado a:</p>
        
        <p>I - cientificar o empregador de quaisquer atos administrativos, ações fiscais, intimações e avisos em geral; e</p>
        
        <p>II - receber, por parte do empregador, documentação eletrônica exigida no curso das ações fiscais ou apresentação de defesa e recurso no âmbito de processos administrativos.</p>
        
        <p>§ 1º. As comunicações eletrônicas realizadas pelo Domicílio Eletrônico Trabalhista dispensam a sua publicação no Diário Oficial da União e o envio por via postal e são consideradas pessoais para todos os efeitos legais.</p>
        
        <p>§ 2º. A ciência por meio do sistema de comunicação eletrônica, com utilização de certificação digital ou de código de acesso, possuirá os requisitos de validade.</p>
        
        <p><span class="artigo">Art. 629.</span> O auto de infração será lavrado em duplicata, nos termos dos modelos e instruções expedidos, sendo uma via entregue ao infrator, contra recibo, ou ao mesmo enviada, dentro de 10 (dez) dias da lavratura, sob pena de responsabilidade, em registro postal, com franquia e recibo de volta. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 1º. O auto não terá o seu valor probante condicionado à assinatura do infrator ou de testemunhas, e será lavrado no local da inspeção, salvo havendo motivo justificado que será declarado no próprio auto, quando então deverá ser lavrado no prazo de 24 (vinte e quatro) horas, sob pena de responsabilidade. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 2º. Lavrado o auto de infração, não poderá ele ser inutilizado, nem sustado o curso do respectivo processo, devendo o agente da inspeção apresentá-lo à autoridade competente, mesmo se incidir em erro. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 3º. O infrator terá, para apresentar defesa, o prazo de 10 (dez) dias contados do recebimento do auto. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 4º. O auto de infração será registrado com a indicação sumária de seus elementos característicos, em livro próprio que deverá existir em cada órgão fiscalizador, de modo a assegurar o controle do seu processamento. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p><span class="artigo">Art. 630.</span> Nenhum agente da inspeção poderá exercer as atribuições do seu cargo sem exibir a carteira de identidade fiscal, devidamente autenticada, fornecida pela autoridade competente. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 1º. É proibida a outorga de identidade fiscal a quem não esteja autorizado, em razão do cargo ou função, a exercer ou praticar, no âmbito da legislação trabalhista, atos de fiscalização. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 2º. A credencial a que se refere este artigo deverá ser devolvida para inutilização, sob as penas da lei em casos de provimentos em outro cargo público, exoneração ou demissão bem como nos de licenciamento por prazo superior a 60 (sessenta) dias e de suspensão do exercício do cargo. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 3º. O agente da inspeção terá livre acesso a todas as dependências dos estabelecimentos sujeitos ao regime da legislação, sendo as empresas, por seus dirigentes ou prepostos, obrigados a prestar-lhes os esclarecimentos necessários ao desempenho de suas atribuições legais e a exibir-lhes, quando exigidos, quaisquer documentos que digam respeito ao fiel cumprimento das normas de proteção ao trabalho. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 4º. Os documentos sujeitos à inspeção deverão permanecer, sob as penas da lei nos locais de trabalho, somente se admitindo, por exceção, a critério da autoridade competente, sejam os mesmos apresentados em dia hora previamente fixados pelo agente da inspeção. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 5º. No território do exercício de sua função, o agente da inspeção gozará de passe livre nas empresas de transportes, públicas ou privadas, mediante a apresentação da carteira de identidade fiscal. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 6º. A inobservância do disposto nos §§ 3º, 4º. e 5º. configurará resistência ou embaraço à fiscalização e justificará a lavratura do respectivo auto de infração, cominada a multa de valor igual a meio (1/2) salário mínimo regional até 5 (cinco) vezes esse salário, levando-se em conta, além das circunstâncias atenuantes ou agravantes, a situação econômico-financeira do infrator e os meios a seu alcance para cumprir a lei. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 7º. Para o efeito do disposto no § 5º, a autoridade competente divulgará em janeiro e julho, de cada ano, a relação dos agentes da inspeção titulares da carteira de identidade fiscal. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 8º. As autoridades policiais, quando solicitadas, deverão prestar aos agentes da inspeção a assistência de que necessitarem para o fiel cumprimento de suas atribuições legais. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p><span class="artigo">Art. 631.</span> Qualquer funcionário público federal, estadual ou municipal, ou representante legal de associação sindical, poderá comunicar à autoridade competente do Ministério do Trabalho, Industria e Comercio as infrações que verificar.</p>
        
        <p>Parágrafo único. De posse dessa comunicação, a autoridade competente procederá desde logo às necessárias diligências, lavrando os autos de que haja mister.</p>
        
        <p><span class="artigo">Art. 632.</span> Poderá o autuado requerer a audiência de testemunhas e as diligências que lhe parecerem necessárias à elucidação do processo, cabendo, porém, à autoridade, julgar da necessidade de tais provas.</p>
        
        <p><span class="artigo">Art. 633.</span> (Revogada pela Lei nº 13.874, de 2019)</p>
        
        <p><span class="artigo">Art. 634.</span> Na falta de disposição especial, a imposição das multas incumbe às autoridades regionais competentes em matéria de trabalho, na forma estabelecida por este Título.</p>
        
        <p>Parágrafo único. A aplicação da multa não eximirá o infrator da responsabilidade em que incorrer por infração das leis penais.</p>
        
        <p>§ 1º. A aplicação da multa não eximirá o infrator da responsabilidade em que incorrer por infração das leis penais.</p>
        
        <p>§ 2º. Os valores das multas administrativas expressos em moeda corrente serão reajustados anualmente pela Taxa Referencial (TR), divulgada pelo Banco Central do Brasil, ou pelo índice que vier a substituí-lo.</p>
        
        <h2 id="tituloviicapituloii">CAPÍTULO II<br>
        DOS RECURSOS</h2>
        
        <p id="art944"><span class="artigo">Art. 635.</span> De toda decisão que impuser multa por infração das leis e disposições reguladoras do trabalho, e não havendo forma especial de processo caberá recurso para o Diretor-Geral Departamento ou Serviço do Ministério do Trabalho e Previdência Social, que for competente na matéria. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art635p0">Parágrafo único. As decisões serão sempre fundamentadas. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art945"><span class="artigo">Art. 636.</span> Os recursos devem ser interpostos no prazo de 10 (dez) dias, contados do recebimento da notificação, perante autoridade que houver imposto a multa, a qual, depois de os informar encaminhá-los-á à autoridade de instância superior. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art636§8">§ 1º. O recurso só terá seguimento se o interessado o instruir com a prova do depósito da multa. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art636§9">§ 2º. A notificação somente será realizada por meio de edital, publicada no órgão oficial, quando o infrator estiver em lugar incerto e não sabido. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art636§10">§ 3º. A notificação de que trata este artigo fixará igualmente o prazo de 10 (dez) dias para que o infrator recolha o valor da multa, sob pena de cobrança executiva. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art636§11">§ 4º. As guias de depósito eu recolhimento serão emitidas em 3 (três) vias e o recolhimento da multa deverá preceder-se dentro de 5 (cinco) dias às repartições federais competentes, que escriturarão a receita a crédito do Ministério do Trabalho e Previdência Social. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art636§12">§ 5º. A segunda via da guia do recolhimento será devolvida pelo infrator à repartição que a emitiu, até o sexto dia depois de sua expedição, para a averbação no processo. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art636§13">§ 6º. A multa será reduzida de 50% (cinquenta por cento) se o infrator, renunciando ao recurso a recolher ao Tesouro Nacional dentro do prazo de 10 (dez) dias contados do recebimento da notificação ou da publicação do edital. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art636§7">§ 7º. Para a expedição da guia, no caso do § 6º, deverá o infrator juntar a notificação com a prova da data do seu recebimento, ou a folha do órgão oficial que publicou o edital. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art637"><span class="artigo">Art. 637.</span> De todas as decisões que proferirem em processos de infração das leis de proteção ao trabalho e que impliquem arquivamento destes, observado o disposto no parágrafo único do art. 635, deverão as autoridades prolatoras recorrer de ofício para a autoridade competente de instância superior. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art946"><span class="artigo">Art. 638.</span> Ao Ministro do Trabalho, Industria e Comercio é facultado avocar ao seu exame e decisão, dentro de 90 (noventa) dias do despacho final do assunto, ou no curso do processo, as questões referentes à fiscalização dos preceitos estabelecidos nesta Consolidação.</p>
        
        <h2 id="tituloviicapituloiii">CAPÍTULO III<br>
        DO DEPÓSITO, DA INSCRIÇÃO E DA COBRANÇA</h2>
        
        <p id="art948"><span class="artigo">Art. 639.</span> Não sendo provido o recurso, o depósito se converterá em pagamento.</p>
        
        <p id="art947"><span class="artigo">Art. 640.</span> É facultado às Delegacias Regionais do Trabalho, na conformidade de instruções expedidas pelo Ministro de Estado, promover a cobrança amigável das multas antes encaminhamento dos processos à cobrança executiva. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art949"><span class="artigo">Art. 641.</span> Não comparecendo o infrator, ou não depositando a importância da multa ou penalidade, far-se-á a competente inscrição em livro especial, existente nas repartições das quais se tiver originado a multa ou penalidade, ou de onde tenha provindo a reclamação que a determinou, sendo extraída cópia autêntica dessa inscrição e enviada às autoridades competentes para a respectiva cobrança judicial, valendo tal instrumento como título de dívida líquida e certa.</p>
        
        <p id="art950"><span class="artigo">Art. 642.</span> A cobrança judicial das multas impostas pelas autoridades administrativas do trabalho obedecerá ao disposto na legislação aplicável à cobrança da dívida ativa da União, sendo promovida, no Distrito Federal e nas capitais dos Estados em que funcionarem Tribunais Regionais do Trabalho, pela Procuradoria da Justiça do Trabalho, e nas demais localidades, pelo Ministério Público Estadual e do Território do Acre, nos termos do Decreto-Lei nº 960, de 17 de dezembro de 1938.</p>
        
        <p id="art642p">Parágrafo único. No Estado de São Paulo a cobrança continuará a cargo da Procuradoria do Departamento Estadual do Trabalho, na forma do convênio em vigor.</p>
        
        <h1 id="tituloviia">TÍTULO VII-A<br>
        DA PROVA DE INEXISTÊNCIA DE DÉBITOS TRABALHISTAS</h1>
        
        <p id="art642a"><span class="artigo">Art. 642-A.</span> É instituída a Certidão Negativa de Débitos Trabalhistas (CNDT), expedida gratuita e eletronicamente, para comprovar a inexistência de débitos inadimplidos perante a Justiça do Trabalho.</p>
        
        <p id="art642a§1">§ 1º. O interessado não obterá a certidão quando em seu nome constar:</p>
        
        <p id="art642a§1i">I – o inadimplemento de obrigações estabelecidas em sentença condenatória transitada em julgado proferida pela Justiça do Trabalho ou em acordos judiciais trabalhistas, inclusive no concernente aos recolhimentos previdenciários, a honorários, a custas, a emolumentos ou a recolhimentos determinados em lei; ou</p>
        
        <p id="art642a§1ii">II – o inadimplemento de obrigações decorrentes de execução de acordos firmados perante o Ministério Público do Trabalho ou Comissão de Conciliação Prévia.</p>
        
        <p id="art642a§2">§ 2º. Verificada a existência de débitos garantidos por penhora suficiente ou com exigibilidade suspensa, será expedida Certidão Positiva de Débitos Trabalhistas em nome do interessado com os mesmos efeitos da CNDT.</p>
        
        <p id="art642a§3">§ 3º. A CNDT certificará a empresa em relação a todos os seus estabelecimentos, agências e filiais.</p>
        
        <p id="art642a§4">§ 4º. O prazo de validade da CNDT é de 180 (cento e oitenta) dias, contado da data de sua emissão.</p>
        
        <h1 id="tituloviii">TÍTULO VIII<br>
        DA JUSTIÇA DO TRABALHO</h1>
        
        <h2 id="tituloviiicapituloi">CAPÍTULO I<br>
        INTRODUÇÃO</h2>
        
        <p id="art643"><span class="artigo">Art. 643.</span> Os dissídios, oriundos das relações entre empregados e empregadores bem como de trabalhadores avulsos e seus tomadores de serviços, em atividades reguladas na legislação social, serão dirimidos pela Justiça do Trabalho, de acordo com o presente Título e na forma estabelecida pelo processo judiciário do trabalho.</p>
        
        <p id="art643§1">§ 1º. As questões concernentes à Previdência Social serão decididas pelos órgãos e autoridades previstos no Capítulo V deste Título e na legislação sobre seguro social. (Vide Lei nº 3.807, de 1960)</p>
        
        <p id="art643§2">§ 2º. As questões referentes a acidentes do trabalho continuam sujeitas a justiça ordinária, na forma do Decreto n. 24.637, de 10 de julho de 1934, e legislação subsequente.</p>
        
        <p id="art643§3">§ 3º. A Justiça do Trabalho é competente, ainda, para processar e julgar as ações entre trabalhadores portuários e os operadores portuários ou o Órgão Gestor de Mão-de-Obra - OGMO decorrentes da relação de trabalho. (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art644"><span class="artigo">Art. 644.</span> São órgãos da Justiça do Trabalho: (Redação dada pelo Decreto-lei nº 9.797, de 9.9.1946)</p>
        
        <p id="art644a." class="alinea">a) o Tribunal Superior do Trabalho; (Redação dada pelo Decreto-lei nº 9.797, de 9.9.1946)</p>
        
        <p id="art644b." class="alinea">b) os Tribunais Regionais do Trabalho; (Redação dada pelo Decreto-lei nº 9.797, de 9.9.1946)</p>
        
        <p id="art644c." class="alinea">c) as Juntas de Conciliação e Julgamento ou os Juízos de Direito. (Redação dada pelo Decreto-lei nº 9.797, de 9.9.1946)</p>
        
        <p id="art645"><span class="artigo">Art. 645.</span> O serviço da Justiça do Trabalho é relevante e obrigatório, ninguém dele podendo eximir-se, salvo motivo justificado.</p>
        
        <p id="art646"><span class="artigo">Art. 646.</span> Os órgãos da Justiça do Trabalho funcionarão perfeitamente coordenados, em regime de mútua colaboração, sob a orientação do presidente do Tribunal Superior do Trabalho.</p>
        
        <h2 id="tituloviiicapituloii">CAPÍTULO II<br>
        DAS JUNTAS DE CONCILIAÇÃO E JULGAMENTO</h2>
        
        <h3 id="tituloviiicapituloiisecaoi">SEÇÃO I<br>
        DA COMPOSIÇÃO E FUNCIONAMENTO</h3>
        
        <p id="art647."><span class="artigo">Art. 647.</span> Cada Junta de Conciliação e Julgamento terá a seguinte composição: (Redação dada pelo Decreto-lei nº 9.797, de 9.9.1946) (Vide Constituição Federal de 1988)</p>
        
        <p id="art647a.." class="alinea">a) um juiz do trabalho, que será seu Presidente; (Redação dada pelo Decreto-lei nº 9.797, de 9.9.1946)</p>
        
        <p id="art647b.." class="alinea">b) dois vogais, sendo um representante dos empregadores e outro dos empregados. (Redação dada pelo Decreto-lei nº 9.797, de 9.9.1946)</p>
        
        <p id="art647p..">Parágrafo único. Haverá um suplente para cada vogal. (Redação dada pelo Decreto-lei nº 9.797, de 9.9.1946)</p>
        
        <p id="art648"><span class="artigo">Art. 648.</span> São incompatíveis entre si, para os trabalhos da mesma Junta, os parentes consanguíneos e afins até o terceiro grau civil. (Vide Constituição Federal de 1988)</p>
        
        <p id="art648p">Parágrafo único. A incompatibilidade resolve-se a favor do primeiro vogal designado ou empossado, ou por sorteio, se a designação ou posse for da mesma data.</p>
        
        <p id="art649"><span class="artigo">Art. 649.</span> As Juntas poderão conciliar, instruir ou julgar com qualquer número, sendo, porém, indispensável a presença do Presidente, cujo voto prevalecerá em caso de empate. (Redação dada pelo Decreto-Lei nº 8.737, de 1946) (Vide Constituição Federal de 1988)</p>
        
        <p id="art649§1.">§ 1º. No julgamento de embargos deverão estar presentes todos os membros da Junta. (Redação dada pelo Decreto-Lei nº 8.737, de 1946) (Vide Constituição Federal de 1988)</p>
        
        <p id="art649§2.">§ 2º. Na execução e na liquidação das decisões funciona apenas o Presidente. (Redação dada pelo Decreto-Lei nº 8.737, de 1946)</p>
        
        <h3 id="tituloviiicapituloiisecaoii">SEÇÃO II<br>
        DA JURISDIÇÃO E COMPETÊNCIA DAS JUNTAS</h3>
        
        <p id="art650"><span class="artigo">Art. 650.</span> A jurisdição de cada Junta de Conciliação e Julgamento abrange todo o território da Comarca em que tem sede, só podendo ser estendida ou restringida por lei federal. (Redação dada pela Lei nº 5.442, 24.5.1968) (Vide Constituição Federal de 1988)</p>
        
        <p id="art650p">Parágrafo único. As leis locais de Organização Judiciária não influirão sobre a competência de Juntas de Conciliação e Julgamento já criadas até que lei federal assim determine. (Parágrafo incluído pela Lei nº 5.442, 24.5.1968) (Vide Constituição Federal de 1988)</p>
        
        <p id="art651"><span class="artigo">Art. 651.</span> A competência das Juntas de Conciliação e Julgamento é determinada pela localidade onde o empregado, reclamante ou reclamado, prestar serviços ao empregador, ainda que tenha sido contratado noutro local ou no estrangeiro. (Vide Constituição Federal de 1988)</p>
        
        <p id="art651§1">§ 1º. Quando for parte de dissídio agente ou viajante comercial, a competência será da Junta da localidade em que a empresa tenha agência ou filial e a esta o empregado esteja subordinado e, na falta, será competente a Junta da localização em que o empregado tenha domicílio ou a localidade mais próxima.</p>
        
        <p id="art651§2">§ 2º. A competência das Juntas de Conciliação e Julgamento, estabelecida neste artigo, estende-se aos dissídios ocorridos em agência ou filial no estrangeiro, desde que o empregado seja brasileiro e não haja convenção internacional dispondo em contrário. (Vide Constituição Federal de 1988)</p>
        
        <p id="art651§3">§ 3º. Em se tratando de empregador que promova realização de atividades fora do lugar do contrato de trabalho, é assegurado ao empregado apresentar reclamação no foro da celebração do contrato ou no da prestação dos respectivos serviços.</p>
        
        <p id="art652."><span class="artigo">Art. 652.</span> Compete às Varas do Trabalho:</p>
        
        <p id="art652a" class="alinea">a) conciliar e julgar:</p>
        
        <p id="art652ai">I - os dissídios em que se pretenda o reconhecimento da estabilidade de empregado;</p>
        
        <p id="art652aii">II - os dissídios concernentes a remuneração, férias e indenizações por motivo de rescisão do contrato individual de trabalho;</p>
        
        <p id="art652aiii">III - os dissídios resultantes de contratos de empreitadas em que o empreiteiro seja operário ou artífice;</p>
        
        <p id="art652aiv">IV - os demais dissídios concernentes ao contrato individual de trabalho;</p>
        
        <p id="art652av">V - as ações entre trabalhadores portuários e os operadores portuários ou o Órgão Gestor de Mão-de-Obra - OGMO decorrentes da relação de trabalho; (Incluído pela Medida Provisória nº 2.164-41, de 2001)</p>
        
        <p id="art652b" class="alinea">b) processar e julgar os inquéritos para apuração de falta grave;</p>
        
        <p id="art652c" class="alinea">c) julgar os embargos opostos às suas próprias decisões;</p>
        
        <p id="art652d" class="alinea">d) impor multas e demais penalidades relativas aos atos de sua competência; (Redação dada pelo Decreto-lei nº 6.353, de 20.3.1944)</p>
        
        <p id="art652e" class="alinea">e) (Suprimida pelo Decreto-lei nº 6.353, de 20.3.1944)</p>
        
        <p id="art652ivf" class="alinea">f) decidir quanto à homologação de acordo extrajudicial em matéria de competência da Justiça do Trabalho.</p>
        
        <p id="art652p">Parágrafo único. Terão preferência para julgamento os dissídios sobre pagamento de salário e aqueles que derivarem da falência do empregador, podendo o Presidente da Junta, a pedido do interessado, constituir processo em separado, sempre que a reclamação também versar sobre outros assuntos. (Vide Constituição Federal de 1988)</p>
        
        <p id="art653"><span class="artigo">Art. 653.</span> Compete, ainda, às Juntas de Conciliação e Julgamento: (Vide Constituição Federal de 1988)</p>
        
        <p id="art653a" class="alinea">a) requisitar às autoridades competentes a realização das diligências necessárias ao esclarecimento dos feitos sob sua apreciação, representando contra aquelas que não atenderem a tais requisições;</p>
        
        <p id="art653b" class="alinea">b) realizar as diligências e praticar os atos processuais ordenados pelos Tribunais Regionais do Trabalho ou pelo Tribunal Superior do Trabalho;</p>
        
        <p id="art653c" class="alinea">c) julgar as suspeições arguidas contra os seus membros;</p>
        
        <p id="art653d" class="alinea">d) julgar as exceções de incompetência que lhes forem opostas;</p>
        
        <p id="art653e" class="alinea">e) expedir precatórias e cumprir as que lhes forem deprecadas;</p>
        
        <p id="art653f" class="alinea">f) exercer, em geral, no interesse da Justiça do Trabalho, quaisquer outras atribuições que decorram da sua jurisdição.</p>
        
        <h3 id="tituloviiicapituloiisecaoiii">SEÇÃO III<br>
        DOS PRESIDENTES DAS JUNTAS</h3>
        
        <p id="art654"><span class="artigo">Art. 654.</span> O ingresso na magistratura do trabalho far-se-á para o cargo de juiz do trabalho substituto. As nomeações subsequentes por promoção alternadamente, por antiguidade e merecimento. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art654§1">§ 1º. Nas 7ª e 8ª Regiões da Justiça do Trabalho, nas localidades fora das respectivas sedes, haverá suplentes de juiz do trabalho presidente de Junta, sem direito a acesso nomeados pelo Presidente da República, dentre brasileiros, bacharéis em direito, de reconhecida idoneidade moral, especializados em direito do trabalho, pelo período de 2 (dois) anos, podendo ser reconduzidos. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967) (Vide Constituição Federal de 1988) (Vide Decreto-Lei nº 388, de 1968)</p>
        
        <p id="art654§2...">§ 2º. Os suplentes de juiz do trabalho receberão, quando em exercício, vencimentos iguais aos dos juízes que substituírem. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p>§ 3º. Os juízes substitutos serão nomeados após aprovação em concurso público de provas e títulos realizado perante o Tribunal Regional do Trabalho da Região, válido por 2 (dois) anos e prorrogável, a critério do mesmo órgão, por igual período, uma só vez, e organizado de acordo com as instruções expedidas pelo Tribunal Superior do Trabalho.</p>
        
        <p id="art654§4.">§ 4º. Os candidatos inscritos só serão admitidos ao concurso após apreciação prévia, pelo Tribunal Regional do Trabalho da respectiva Região, dos seguintes requisitos: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art654§4a" class="alinea">a) idade maior de 25 (vinte e cinco) anos e menor de 45 (quarenta e cinco) anos; (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art654§4b" class="alinea">b) idoneidade para o exercício das funções. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art654§5..">§ 5º. O preenchimento dos cargos do presidente de Junta, vagos ou criadas por lei, será feito dentro de cada Região: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967) (Vide Constituição Federal de 1988)</p>
        
        <p id="art654§5a" class="alinea">a) pela remoção de outro presidente, prevalecendo a antiguidade no cargo, caso haja mais de um pedido, desde que a remoção tenha sido requerida, dentro de quinze dias, contados da abertura da vaga, ao Presidente do Tribunal Regional, a quem caberá expedir o respectivo ato.</p>
        
        <p id="art654§5b" class="alinea">b) pela promoção de substituto, cuja aceitação será facultativa, obedecido o critério alternado de antiguidade e merecimento. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art654§6.">§ 6º. Os juízes do trabalho, presidentes de Junta, juízes substitutos e suplentes de juiz tomarão posse perante o presidente do Tribunal da respectiva Região. Nos Estados que, não forem sede de Tribunal Regional do Trabalho, a posse dar-se-á perante o presidente do Tribunal de Justiça, que remeterá o termo ao presidente do Tribunal Regional da jurisdição do empossado. Nos Territórios a posse dar-se-á perante o presidente do Tribunal Regional do Trabalho da respectiva Região. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967) (Vide Constituição Federal de 1988)</p>
        
        <p id="art655"><span class="artigo">Art. 655.</span> Os Presidentes e os Presidentes substitutos tomarão posse do cargo perante o presidente do Tribunal Regional da respectiva jurisdição. (Redação dada pelo Decreto-Lei nº 8.737, de 1946)</p>
        
        <p id="art655§1.">§ 1º. Nos Estados em que não houver sede de Tribunais a posse dar-se-á perante o presidente do Tribunal de Apelação, que remeterá o respectivo termo ao presidente do Tribunal Regional da Jurisdição do empossado. (Redação dada pelo Decreto-Lei nº 8.737, de 1946)</p>
        
        <p id="art655§2.">§ 2º. Nos Territórios a posse dar-se-á perante a Juiz de Direito da capital, que procederá na forma prevista no § 1º. (Redação dada pelo Decreto-Lei nº 8.737, de 1946)</p>
        
        <p id="art656..."><span class="artigo">Art. 656.</span> O Juiz do Trabalho Substituto, sempre que não estiver substituindo o Juiz-Presidente de Junta, poderá ser designado para atuar nas Juntas de Conciliação e Julgamento. (Vide Constituição Federal de 1988)</p>
        
        <p id="art656§1">§ 1º. Para o fim mencionado no caput deste artigo, o território da Região poderá ser dividido em zonas, compreendendo a jurisdição de uma ou mais Juntas, a juízo do Tribunal Regional do Trabalho respectivo. (Incluído pela Lei nº 8.432, 11.6.1992)</p>
        
        <p id="art656§2">§ 2º. A designação referida no caput deste artigo será de atribuição do Juiz-Presidente do Tribunal Regional do Trabalho ou, não havendo disposição regimental específica, de quem este indicar. (Incluído pela Lei nº 8.432, 11.6.1992)</p>
        
        <p id="art656§3">§ 3º. Os Juízes do Trabalho Substitutos, quando designados ou estiverem substituindo os Juízes Presidentes de Juntas, perceberão os vencimentos destes. (Incluído pela Lei nº 8.432, 11.6.1992)</p>
        
        <p id="art656§4">§ 4º. O Juiz-Presidente do Tribunal Regional do Trabalho ou, não havendo disposição regimental específica, que este indicar, fará a lotação e a movimentação dos Juízes Substitutos entre as diferentes zonas da Região na hipótese de terem sido criadas na forma do § 1º. deste artigo. (Incluído pela Lei nº 8.432, 11.6.1992)</p>
        
        <p id="art657"><span class="artigo">Art. 657.</span> Os Presidentes de Junta e os Presidentes Substitutos perceberão os vencimentos fixados em lei. (Redação dada pelo Decreto-Lei nº 8.737, de 1946) (Vide Constituição Federal de 1988)</p>
        
        <p id="art658"><span class="artigo">Art. 658.</span> São deveres precípuos dos Presidentes das Juntas, além dos que decorram do exercício de sua função: (Redação dada pelo Decreto-lei nº 8.737, 19.1.1946) (Vide Constituição Federal de 1988)</p>
        
        <p id="art658a." class="alinea">a) manter perfeita conduta pública e privada; (Redação dada pelo Decreto-lei nº 8.737, 19.1.1946)</p>
        
        <p id="art658b." class="alinea">b) abster-se de atender a solicitações ou recomendações relativamente aos feitos que hajam sido ou tenham de ser submetidos à sua apreciação; (Redação dada pelo Decreto-lei nº 8.737, 19.1.1946)</p>
        
        <p id="art658c." class="alinea">c) residir dentro dos limites de sua jurisdição, não podendo ausentar-se sem licença do Presidente do Tribunal Regional; (Redação dada pelo Decreto-lei nº 8.737, 19.1.1946)</p>
        
        <p id="art658d" class="alinea">d) despachar e praticar todos os atos decorrentes de suas funções, dentro dos prazos estabelecidos, sujeitando-se ao desconto correspondente a 1 (um) dia de vencimento para cada dia de retardamento. (Incluído pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art659"><span class="artigo">Art. 659.</span> Competem privativamente aos Presidentes das Juntas, além das que lhes forem conferidas neste Título e das decorrentes de seu cargo, as seguintes atribuições: (Vide Constituição Federal de 1988)</p>
        
        <p id="art659i">I - presidir às audiências das Juntas; (Vide Constituição Federal de 1988)</p>
        
        <p id="art659ii">II - executar as suas próprias decisões, as proferidas pela Junta e aquelas cuja execução lhes for deprecada; (Vide Constituição Federal de 1988)</p>
        
        <p id="art659iii">III - dar posse aos vogais nomeados para a Junta, ao Secretário e aos demais funcionários da Secretaria; (Vide Constituição Federal de 1988)</p>
        
        <p id="art659iv">IV - convocar os suplentes dos vogais, no impedimento destes;</p>
        
        <p id="art659v">V - representar ao Presidente do Tribunal Regional da respectiva jurisdição, no caso de falta de qualquer vogal a 3 (três) reuniões consecutivas, sem motivo justificado, para os fins do art. 727;</p>
        
        <p id="art659vi">VI - despachar os recursos interpostos pelas partes, fundamentando a decisão recorrida antes da remessa ao Tribunal Regional, ou submetendo-os à decisão da Junta, no caso do art. 894; (Vide Constituição Federal de 1988)</p>
        
        <p id="art659vii">VII - assinar as folhas de pagamento dos membros e funcionários da Junta;</p>
        
        <p id="art659viii">VIII - apresentar ao Presidente do Tribunal Regional, até 15 de fevereiro de cada ano, o relatório dos trabalhos do ano anterior;</p>
        
        <p>IX - conceder medida liminar, até decisão final do processo, em reclamações trabalhistas que visem a tornar sem efeito transferência disciplinada pelos parágrafos do artigo 469 desta Consolidação.</p>
        
        <p>X - conceder medida liminar, até decisão final do processo, em reclamações trabalhistas que visem reintegrar no emprego dirigente sindical afastado, suspenso ou dispensado pelo empregador.</p>
        
        <h3 id="tituloviiicapituloiisecaoiv">SEÇÃO IV<br>
        DOS VOGAIS DAS JUNTAS</h3>
        
        <p id="art660"><span class="artigo">Art. 660.</span> Os vogais das Juntas são designados pelo Presidente do Tribunal Regional da respectiva jurisdição. (Vide Constituição Federal de 1988)</p>
        
        <p id="art661"><span class="artigo">Art. 661.</span> Para o exercício da função de vogal da Junta ou suplente deste são exigidos os seguintes requisitos: (Vide Constituição Federal de 1988)</p>
        
        <p id="art661a" class="alinea">a) ser brasileiro; (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art661b" class="alinea">b) ter reconhecida idoneidade moral;</p>
        
        <p id="art661c." class="alinea">c) ser maior de 25 (vinte e cinco) anos e ter menos de 70 (setenta) anos; (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art661d" class="alinea">d) estar no gozo dos direitos civis e políticos;</p>
        
        <p id="art661e" class="alinea">e) estar quite com o serviço militar;</p>
        
        <p id="art661f" class="alinea">f) contar mais de 2 (dois) anos de efetivo exercício na profissão e ser sindicalizado. Parágrafo único. A prova da qualidade profissional a que se refere a alínea &quot;f&quot; deste artigo é feita mediante declaração do respectivo Sindicato.</p>
        
        <p id="art662"><span class="artigo">Art. 662.</span> A escolha dos vogais das Juntas e seus suplentes far-se-á dentre os nomes constantes das listas que, para esse efeito, forem encaminhadas pelas associações sindicais de primeiro grau ao presidente do Tribunal Regional. (Vide Constituição Federal de 1988)</p>
        
        <p id="art662§1">§ 1º. Para esse fim, cada Sindicato de empregadores e de empregados, com base territorial extensiva à área de jurisdição da Junta, no todo ou em parte, procederá, na ocasião determinada pelo Presidente do Tribunal Regional, à escolha de 3 (três) nomes que comporão a lista, aplicando-se à eleição o disposto no art. 524 e seus §§ 1º a 3º.</p>
        
        <p id="art662§2">§ 2º. Recebidas as listas pelo presidente do Tribunal Regional, designará este, dentro de cinco dias, os nomes dos vogais e dos respectivos suplentes, expedindo para cada um deles um título, mediante a apresentação do qual será empossado.</p>
        
        <p id="art662§3">§ 3º. Dentro de quinze dias, contados da data da posse, pode ser contestada a investidura do vogal ou do suplente, por qualquer interessado, sem efeito suspensivo, por meio de representação escrita, dirigida ao presidente do Tribunal Regional.</p>
        
        <p id="art662§4">§ 4º. Recebida a contestação, o Presidente do Tribunal designará imediatamente relator, o qual, se houver necessidade de ouvir testemunhas ou de proceder a quaisquer diligências, providenciará para que tudo se realize com a maior brevidade, submetendo, por fim, a contestação ao parecer do Tribunal, na primeira sessão.</p>
        
        <p id="art662§5">§ 5º. Se o Tribunal julgar procedente a contestação, o Presidente providenciará a designação de novo vogal ou suplente. (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art662§6">§ 6º. Em falta de indicação pelos Sindicatos, de nomes para representantes das respectivas categorias profissionais e econômicas nas Juntas de Conciliação e Julgamento, ou nas localidades onde não existirem Sindicatos, serão esses representantes livremente designados pelo Presidente do Tribunal Regional do Trabalho, observados os requisitos exigidos para o exercício da função. (Parágrafo incluído pelo Decreto-lei nº 229, de 28.2.1967) (Vide Constituição Federal de 1988)</p>
        
        <p id="art663"><span class="artigo">Art. 663.</span> A investidura dos vogais das Juntas e seus suplentes é de 3 (três) anos, podendo, entretanto, ser dispensado, a pedido, aquele que tiver servido, sem interrupção, durante metade desse período.</p>
        
        <p id="art663§1.">§ 1º. Na hipótese da dispensa do vogal a que alude este artigo, assim como nos casos de impedimento, morte ou renúncia, sua substituição far-se-á pelo suplente, mediante convocação do Presidente da Junta.</p>
        
        <p id="art663§2">§ 2º. Na falta do suplente, por impedimento, morte ou renúncia serão designados novo vogal e o respectivo suplente, dentre os nomes constantes das listas a que se refere o art. 662, servindo os designados até o fim do período.</p>
        
        <p id="art664"><span class="artigo">Art. 664.</span> Os vogais das Juntas e seus suplentes tomam posse perante o Presidente da Junta em que têm de funcionar. (Vide Constituição Federal de 1988)</p>
        
        <p id="art665"><span class="artigo">Art. 665.</span> Enquanto durar sua investidura, gozam os vogais das Juntas e seus suplentes das prerrogativas asseguradas aos jurados.</p>
        
        <p id="art666"><span class="artigo">Art. 666.</span> Por audiência a que comparecerem, até o máximo de 20 (vinte) por mês, os vogais das Juntas e seus suplentes perceberão a gratificação fixada em lei. (Vide Constituição Federal de 1988)</p>
        
        <p id="art667"><span class="artigo">Art. 667.</span> São prerrogativas dos vogais das Juntas, além das referidas no art. 665: (Vide Constituição Federal de 1988)</p>
        
        <p id="art667a" class="alinea">a) tomar parte nas reuniões do Tribunal a que pertençam;</p>
        
        <p id="art667b" class="alinea">b) aconselhar às partes a conciliação;</p>
        
        <p id="art667c" class="alinea">c) votar no julgamento dos feitos e nas matérias de ordem interna do Tribunal, submetidas às suas deliberações;</p>
        
        <p id="art667d" class="alinea">d) pedir vista dos processos pelo prazo de 24 (vinte e quatro) horas;</p>
        
        <p id="art667e" class="alinea">e) formular, por intermédio do Presidente, aos litigantes, testemunhas e peritos, as perguntas que quiserem fazer, para esclarecimento do caso.</p>
        
        <h2 id="tituloviiicapituloiii">CAPÍTULO III<br>
        DOS JUÍZOS DE DIREITO</h2>
        
        <p id="art668"><span class="artigo">Art. 668.</span> Nas localidades não compreendidas na jurisdição das Juntas de Conciliação e Julgamento, os Juízos de Direito são os órgãos de administração da Justiça do Trabalho, com a jurisdição que lhes for determinada pela lei de organização judiciária local. (Vide Constituição Federal de 1988)</p>
        
        <p id="art669"><span class="artigo">Art. 669.</span> A competência dos Juízos de Direito, quando investidos na administração da Justiça do Trabalho, é a mesma das Juntas de Conciliação e Julgamento, na forma da Seção II do Capítulo II.</p>
        
        <p id="art669§1">§ 1º. Nas localidades onde houver mais de um Juízo de Direito a competência é determinada, entre os Juízes do Cível, por distribuição ou pela divisão judiciária local, na conformidade da lei de organização respectiva.</p>
        
        <p id="art669§2">§ 2º. Quando o critério de competência da lei de organização judiciária for diverso do previsto no parágrafo anterior, será competente o Juiz do Cível mais antigo.</p>
        
        <h2 id="tituloviiicapituloiv">CAPÍTULO IV<br>
        DOS TRIBUNAIS REGIONAIS DO TRABALHO</h2>
        
        <h3 id="tituloviiicapituloivsecaoi">SEÇÃO I<br>
        DA COMPOSIÇÃO E DO FUNCIONAMENTO</h3>
        
        <p id="art670"><span class="artigo">Art. 670.</span> Os Tribunais Regionais das 1ª e 2ª Regiões compor-se-ão de onze juízes togados, vitalícios, e de seis juízes classistas, temporários; os da 3ª e 4ª Regiões, de oito juízes togados, vitalícios, e de quatro classistas, temporários; os da 5ª e 6ª Regiões, de sete juízes togados, vitalícios e de dois classistas, temporários; os da 7ª e 8ª Regiões, de seis juízes togados, vitalícios, e de dois classistas, temporários, todos nomeados pelo Presidente da República. (Redação dada pela Lei nº 5.442, 24.5.1968)</p>
        
        <p id="art670§1.">§ 1º. Há um primeiro suplente e um segundo suplente para o presidente e um suplente para cada vogal. (Incluído pelo Decreto-lei nº 9.398, de 21.6.1946) (Vide Decreto-Lei nº 9.519, de 1946)</p>
        
        <p id="art670§2..">§ 2º. Nos Tribunais Regionais constituídos de seis ou mais juízes togados, e menos de onze, um deles será escolhido dentre advogados, um dentre membros do Ministério Público da União junto à Justiça do Trabalho e os demais dentre juízes do Trabalho Presidente de Junta da respectiva Região, na forma prevista no parágrafo anterior.</p>
        
        <p id="art670§3.">§ 3º (VETADO)</p>
        
        <p id="art670§4">§ 4º. Os juízes classistas referidos neste artigo representarão, paritariamente, empregadores e empregados.</p>
        
        <p id="art670§5">§ 5º. Haverá um suplente para cada Juiz classista.</p>
        
        <p id="art670§6">§ 6º. Os Tribunais Regionais, no respectivo regimento interno, disporão sobre a substituição de seus juízes, observados, na convocação de juízes inferiores, os critérios de livre escolha e antiguidade, alternadamente.</p>
        
        <p id="art670§7">§ 7º. Dentre os seus juízes togados, os Tribunais Regionais elegerão os respectivos Presidente e Vice-Presidente, assim como os Presidentes de Turmas, onde as houver.</p>
        
        <p id="art670§8">§ 8º. Os Tribunais Regionais da 1ª e 2ª Regiões dividir-se-ão em Turmas, facultada essa divisão aos constituídos de pelo menos, doze juízes. Cada turma se comporá de três juízes togados e dois classistas, um representante dos empregados e outro dos empregadores.</p>
        
        <p id="art671"><span class="artigo">Art. 671.</span> Para os trabalhos dos Tribunais Regionais existe a mesma incompatibilidade prevista no art. 648, sendo idêntica a forma de sua resolução.</p>
        
        <p id="art672"><span class="artigo">Art. 672.</span> Os Tribunais Regionais, em sua composição plena, deliberarão com a presença, além do Presidente, da metade e mais um, do número de seus juízes, dos quais, no mínimo, um representante dos empregados e outro dos empregadores.</p>
        
        <p id="art672§1.">§ 1º. As Turmas somente poderão deliberar presentes, pelo menos, três dos seus juízes, entre eles os dois classistas. Para a integração desse quórum, poderá o Presidente de uma Turma convocar juízes de outra, da classe a que pertencer o ausente ou impedido.</p>
        
        <p id="art672§2.">§ 2º. Nos Tribunais Regionais, as decisões tomar-se-ão pelo voto da maioria dos juízes presentes, ressalvada, no Tribunal Pleno, a hipótese de declaração de inconstitucionalidade de lei ou ato do poder público (artigo 111 da Constituição).</p>
        
        <p id="art672§3">§ 3º. O Presidente do Tribunal Regional, excetuada a hipótese de declaração de inconstitucionalidade de lei ou ato do poder público, somente terá voto de desempate. Nas sessões administrativas, o Presidente votará como os demais juízes, cabendo-lhe, ainda, o voto de qualidade. (Parágrafo incluído pela Lei nº 5.442, de 24.5.1968)</p>
        
        <p id="art672§4">§ 4º. No julgamento de recursos contra decisão ou despacho do Presidente, do Vice-Presidente ou de Relator, ocorrendo empate, prevalecerá a decisão ou despacho recorrido. (Parágrafo incluído pela Lei nº 5.442, de 24.5.1968)</p>
        
        <p id="art673."><span class="artigo">Art. 673.</span> A ordem das sessões dos Conselhos Regionais será estabelecida no respectivo regimento interno.</p>
        
        <p id="art673"><span class="artigo">Art. 673.</span> A ordem das sessões dos Tribunais Regionais será estabelecida no respectivo Regimento Interno.</p>
        
        <h3 id="tituloviiicapituloivsecaoii">SEÇÃO II<br>
        DA JURISDIÇÃO E COMPETÊNCIA</h3>
        
        <p id="art674"><span class="artigo">Art. 674.</span> Para efeito da jurisdição dos Tribunais Regionais, o território nacional é dividido nas oito regiões seguintes:</p>
        
        <p>1ª Região - Estados da Guanabara, Rio de Janeiro e Espírito Santo;</p>
        
        <p>2ª Região - Estados de São Paulo, Paraná e Mato Grosso;</p>
        
        <p>3ª Região - Estados de Minas Gerais e Goiás e Distrito Federal;</p>
        
        <p>4ª Região - Estados do Rio Grande do Sul e Santa Catarina;</p>
        
        <p>5ª Região - Estados da Bahia e Sergipe;</p>
        
        <p>6ª Região - Estados de Alagoas, Pernambuco, Paraíba e Rio Grande do Norte;</p>
        
        <p>7ª Região - Estados do Ceará, Piauí e Maranhão;</p>
        
        <p>8ª Região - Estados do Amazonas, Pará, Acre e Territórios Federais do Amapá, Rondônia e Roraima.</p>
        
        <p id="art674p.">Parágrafo único. Os tribunais têm sede nas cidades: Rio de Janeiro (1ª Região), São Paulo (2ª Região), Belo Horizonte (3ª Região), Porto Alegre (4ª Região), Salvador (5ª Região), Recife (6ª Região), Fortaleza (7ª Região) e Belém (8ª Região).</p>
        
        <p id="art675"><span class="artigo">Art. 675.</span> (Revogado pela Lei nº 5.442, de 24.5.1968)</p>
        
        <p id="art676"><span class="artigo">Art. 676.</span> O número de regiões, a jurisdição e a categoria dos Tribunais Regionais, estabelecidos nos artigos anteriores, somente podem ser alterados pelo Presidente da República.</p>
        
        <p id="art677"><span class="artigo">Art. 677.</span> A competência dos Tribunais Regionais determina-se pela forma indicada no art. 651 e seus parágrafos e, nos casos de dissídio coletivo, pelo local onde este ocorrer.</p>
        
        <p id="art678"><span class="artigo">Art. 678.</span> Aos Tribunais Regionais, quando divididos em Turmas, compete:</p>
        
        <p id="art678i.">I - ao Tribunal Pleno, especialmente:</p>
        
        <p id="art678ia" class="alinea">a) processar, conciliar e julgar originariamente os dissídios coletivos;</p>
        
        <p id="art678ib" class="alinea">b) processar e julgar originariamente:</p>
        
        <p id="art678ib1">1) as revisões de sentenças normativas;</p>
        
        <p id="art678ib2">2) a extensão das decisões proferidas em dissídios coletivos;</p>
        
        <p id="art678ib3">3) os mandados de segurança;</p>
        
        <p id="art678ib4">4) as impugnações à investidura de vogais e seus suplentes nas Juntas de Conciliação e Julgamento;</p>
        
        <p id="art678ic" class="alinea">c) processar e julgar em última instância:</p>
        
        <p id="art678ic1">1) os recursos das multas impostas pelas Turmas;</p>
        
        <p id="art678ic2">2) as ações rescisórias das decisões das Juntas de Conciliação e Julgamento, dos juízes de direito investidos na jurisdição trabalhista, das Turmas e de seus próprios acórdãos;</p>
        
        <p id="art678ic3">3) os conflitos de jurisdição entre as suas Turmas, os juízes de direito investidos na jurisdição trabalhista, as Juntas de Conciliação e Julgamento, ou entre aqueles e estas;</p>
        
        <p id="art678id" class="alinea">d) julgar em única ou última instâncias:</p>
        
        <p id="art678id1">1) os processos e os recursos de natureza administrativa atinentes aos seus serviços auxiliares e respectivos servidores;</p>
        
        <p id="art678id2">2) as reclamações contra atos administrativos de seu presidente ou de qualquer de seus membros, assim como dos juízes de primeira instância e de seus funcionários.</p>
        
        <p id="art678ii">II - às Turmas:</p>
        
        <p id="art678iia" class="alinea">a) julgar os recursos ordinários previstos no art. 895, alínea “a”;</p>
        
        <p id="art678iib" class="alinea">b) julgar os agravos de petição e de instrumento, estes de decisões denegatórias de recursos de sua alçada;</p>
        
        <p id="art678iic" class="alinea">c) impor multas e demais penalidades relativas e atos de sua competência jurisdicional, e julgar os recursos interpostos das decisões das Juntas dos juízes de direito que as impuserem.</p>
        
        <p id="art678p">Parágrafo único. Das decisões das Turmas não caberá recurso para o Tribunal Pleno, exceto no caso do item I, alínea &quot;c”, inciso 1, deste artigo.</p>
        
        <p id="art679"><span class="artigo">Art. 679.</span> Aos Tribunais Regionais não divididos em Turmas, compete o julgamento das matérias a que se refere o artigo anterior, exceto a de que trata o inciso I da alínea c do Item I, como os conflitos de jurisdição entre Turmas.</p>
        
        <p id="art680"><span class="artigo">Art. 680.</span> Compete, ainda, aos Tribunais Regionais, ou suas Turmas: (Restabelecido com nova redação pela Lei nº 5.442, de 24.5.1968)</p>
        
        <p id="art680a" class="alinea">a) determinar às Juntas e aos juízes de direito a realização dos atos processuais e diligências necessárias ao julgamento dos feitos sob sua apreciação;</p>
        
        <p id="art680b" class="alinea">b) fiscalizar o comprimento de suas próprias decisões;</p>
        
        <p id="art680c" class="alinea">c) declarar a nulidade dos atos praticados com infração de suas decisões;</p>
        
        <p id="art680d" class="alinea">d) julgar as suspeições arguidas contra seus membros;</p>
        
        <p id="art680e" class="alinea">e) julgar as exceções de incompetência que lhes forem opostas;</p>
        
        <p id="art680f" class="alinea">f) requisitar às autoridades competentes as diligências necessárias ao esclarecimento dos feitos sob apreciação, representando contra aquelas que não atenderem a tais requisições;</p>
        
        <p id="art680g" class="alinea">g) exercer, em geral, no interesse da Justiça do Trabalho, as demais atribuições que decorram de sua Jurisdição.</p>
        
        <h3 id="tituloviiicapituloivsecaoiii">SEÇÃO III<br>
        DOS PRESIDENTES DOS TRIBUNAIS REGIONAIS</h3>
        
        <p id="art681"><span class="artigo">Art. 681.</span> Os presidentes e vice-presidentes dos Tribunais Regionais do Trabalho tomarão posse perante os respectivos Tribunais.</p>
        
        <p id="art681p">Parágrafo único. (Revogado pela Lei nº 6.320, de 5.4.1976)</p>
        
        <p id="art682"><span class="artigo">Art. 682.</span> Competem privativamente aos Presidentes dos Tribunais Regionais, além das que forem conferidas neste e no título e das decorrentes do seu cargo, as seguintes atribuições: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682ii">II - designar os vogais das Juntas e seus suplentes; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682iii">III - dar posse aos Presidentes de Juntas e Presidentes Substitutos, aos vogais e suplentes e funcionários do próprio Tribunal e conceder férias e licenças aos mesmos e aos vogais e suplentes das Juntas; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682iv">IV - presidir às sessões do Tribunal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682v">V - presidir às audiências de conciliação nos dissídios coletivos; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682vi">VI - executar suas próprias decisões e as proferidas pelo Tribunal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682vii">VII - convocar suplentes dos vogais do Tribunal, nos impedimentos destes; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682viii">VIII - representar ao Presidente do Tribunal Superior do Trabalho contra os Presidentes e os vogais, nos casos previstos no art. 727 e seu parágrafo único; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682ix">IX - despachar os recursos interpostos pelas partes; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682x">X - requisitar às autoridades competentes, nos casos de dissídio coletivo, a força necessária, sempre que houver ame e perturbação da ordem; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682xi">XI - exercer correição, pelo menos uma vez por ano, sobre as Juntas, ou parcialmente sempre que se fizer necessário, e solicitá-la, quando julgar conveniente, ao Presidente do Tribunal de Apelação relativamente aos Juízes de Direito investidos na administração da Justiça do Trabalho; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682xii">XII - distribuir os feitos, designando os vogais que os devem relatar; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682xiii">XIII - designar, dentre os funcionários do Tribunal e das Juntas existentes em uma mesma localidade, o que deve exercer a função de distribuidor; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682xiv">XIV - assinar as folhas de pagamento dos vogais e servidores do Tribunal. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682§1">§ 1º. Na falta ou impedimento do Presidente da Junta e do substituto da mesma localidade, é facultado ao Presidente do Tribunal Regional designar substituto de outra localidade, observada a ordem de antiguidade entre os substitutos desimpedidos. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682§2">§ 2º. Na falta ou impedimento do Juiz classista da Junta e do respectivo suplente, é facultado ao Presidente do Tribunal Regional designar suplente de outra Junta, respeitada a categoria profissional ou econômica do representante e a ordem de antiguidade dos suplentes desimpedidos. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art682§3">§ 3º. Na falta ou impedimento de qualquer Juiz representante classista e seu respectivo suplente, é facultado ao Presidente do Tribunal Regional designar um dos Juízes classistas de Junta de Conciliação e Julgamento para funcionar nas sessões do Tribunal, respeitada a categoria profissional ou econômica do representante.</p>
        
        <p id="art683"><span class="artigo">Art. 683.</span> Na falta ou impedimento dos Presidentes dos Tribunais Regionais, e como auxiliares destes, sempre que necessário, funcionarão seus substitutos. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art683§1.">§ 1º. Nos casos de férias, por 30 (trinta) dias, licença, morte ou renúncia, a convocação competirá diretamente ao Presidente do Tribunal Superior do Trabalho (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art683§2.">§ 2º. Nos demais casos, mediante convocação do próprio Presidente do Tribunal ou comunicação do secretário deste, o Presidente Substituto assumirá imediatamente o exercício, ciente o Presidente do Tribunal Superior do Trabalho. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloviiicapituloivsecaoiv">SEÇÃO IV<br>
        DOS JUÍZES REPRESENTANTES CLASSISTAS DOS TRIBUNAIS REGIONAIS</h3>
        
        <p id="art684"><span class="artigo">Art. 684.</span> Os Juízes representantes classistas dos Tribunais Regionais são designados pelo Presidente da República.</p>
        
        <p id="art684p">Parágrafo único. Aos Juízes representantes classistas dos empregados e dos empregadores, nos Tribunais Regionais, aplicam-se as disposições do art. 661. (Parágrafo 1º. renumerado para parágrafo único pela Lei nº 5.442, de 24.5.1968)</p>
        
        <p id="art685"><span class="artigo">Art. 685.</span> A escolha dos vogais e suplentes dos Tribunais Regionais, representantes dos empregadores e empregados, é feita dentre os nomes constantes das listas para esse fim encaminhadas ao Presidente do Tribunal Superior do Trabalho pelas associações sindicais de grau superior com sede nas respectivas Regiões.</p>
        
        <p id="art685§1">§ 1º. Para o efeito deste artigo, o Conselho de Representantes de cada associação sindical de grau superior, na ocasião determinada pelo Presidente do Tribunal Superior do Trabalho, organizará, por maioria de votos, uma lista de 3 (três) nomes.</p>
        
        <p id="art685§2">§ 2º. O Presidente do Tribunal Superior do Trabalho submeterá os nomes constantes das listas ao Presidente da República, por intermédio do Ministro da Justiça e Negócios Interiores.</p>
        
        <p id="art686"><span class="artigo">Art. 686.</span> (Suprimido pelo Decreto-Lei nº 9.797, de 9.9.1946)</p>
        
        <p id="art687"><span class="artigo">Art. 687.</span> Os vogais dos Tribunais Regionais tomam posse perante o respectivo Presidente.</p>
        
        <p id="art688"><span class="artigo">Art. 688.</span> Aos juízes representantes classistas dos Tribunais Regionais aplicam-se as disposições do art. 663, sendo a nova escolha feita dentre os nomes constantes das listas a que se refere o art. 685, ou na forma indicada no art. 686 e, bem assim, as dos arts. 665 e 667.</p>
        
        <p id="art689"><span class="artigo">Art. 689.</span> Por sessão a que comparecerem, até o máximo de quinze por mês, perceberão os Juízes representantes classistas e suplentes dos Tribunais Regionais a gratificação fixada em lei. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art689p">Parágrafo único. Os Juízes representantes classistas que retiverem processos além dos prazos estabelecidos no Regimento Interno dos Tribunais Regionais sofrerão automaticamente, na gratificação mensal a que teriam direito, desconto equivalente a 1/30 (um trinta avos) por processo retido. (Incluído pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h2 id="tituloviiicapitulov">CAPÍTULO V<br>
        DO TRIBUNAL SUPERIOR DO TRABALHO</h2>
        
        <h3 id="tituloviiicapitulovsecaoi">SEÇÃO I<br>
        DISPOSIÇÕES PRELIMINARES</h3>
        
        <p id="art690."><span class="artigo">Art. 690.</span> O Tribunal Superior do Trabalho, com sede na Capital da República e jurisdição em todo o território nacional, é a instância suprema da Justiça do Trabalho.</p>
        
        <p id="art690p.">Parágrafo único. O Tribunal funciona na plenitude de sua composição ou dividido em Turmas, com observância da paridade de representação de empregados e empregadores.</p>
        
        <p id="art691"><span class="artigo">Art. 691.</span> (Suprimido pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art692"><span class="artigo">Art. 692.</span> (Suprimido pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloviiicapitulovsecaoii">SEÇÃO II<br>
        DA COMPOSIÇÃO E FUNCIONAMENTO DO TRIBUNAL SUPERIOR DO TRABALHO</h3>
        
        <p id="art693"><span class="artigo">Art. 693.</span> O Tribunal Superior do Trabalho compõe-se de dezessete juízes com a denominação de Ministros, sendo:</p>
        
        <p id="art693a." class="alinea">a) onze togados e vitalícios, nomeados pelo Presidente da República, depois de aprovada a escolha pelo Senado Federal, dentre brasileiros natos, maiores de trinta e cinco anos, de notável saber jurídico e reputação ilibada;</p>
        
        <p id="art693b." class="alinea">b) seis classistas, com mandato de três anos, em representação paritária dos empregadores e dos empregados, nomeados pelo Presidente da República de conformidade com o disposto nos §§ 2º. e 3º. deste artigo.</p>
        
        <p id="art693§1.">§ 1º. Dentre os Juízes Togados do Tribunal Superior do Trabalho, alheios aos interesses profissionais, serão eleitos o Presidente, o Vice-Presidente e o corregedor, além dos presidentes das turmas na forma estabelecida em seu regimento interno.</p>
        
        <p id="art693§2..">§ 2º. Para nomeação trienal dos juízes classistas, o Presidente do Tribunal Superior do Trabalho publicará edital, com antecedência mínima de 15 (quinze) dias, convocando as associações sindicais de grau superior, para que cada uma, mediante maioria de votos do respectivo Conselho de Representantes, organize uma lista de três nomes, que será encaminhada, por intermédio daquele Tribunal, ao Ministro da Justiça e Negócios Interiores dentro do prazo que for fixado no edital.</p>
        
        <p id="art694"><span class="artigo">Art. 694.</span> Os juízes togados escolher-se-ão: sete, dentre magistrados da Justiça do Trabalho, dois, dentre advogados no efetivo exercício da profissão, e dois, dentre membros do Ministério Público da União junto à Justiça do Trabalho. (Restabelecido com nova redação dada pela Lei nº 5.442, de 24.5.1968) (Vide Constituição Federal de 1988)</p>
        
        <p id="art695"><span class="artigo">Art. 695.</span> (Suprimido pelo Decreto-lei nº 9.797, de 9.9.1946)</p>
        
        <p id="art696"><span class="artigo">Art. 696.</span> Importará em renúncia o não comparecimento do membro do Conselho, sem motivo justificado, a mais de três sessões ordinárias consecutivas. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art696§1">§ 1º. Ocorrendo a hipótese prevista neste artigo o Presidente do Tribunal comunicará imediatamente o fato ao Ministro da Justiça e Negócios Interiores, a fim de que seja feita a substituição do juiz renunciante, sem prejuízo das sanções cabíveis.</p>
        
        <p id="art696§2..">§ 2º. Para os efeitos do parágrafo anterior, a designação do substituto será feita dentre os nomes constantes das listas de que trata o 2º. do art. 693.</p>
        
        <p id="art697"><span class="artigo">Art. 697.</span> Em caso de licença, superior a trinta dias, ou de vacância, enquanto não for preenchido o cargo, os Ministros do Tribunal poderão ser substituídos mediante convocação de Juízes, de igual categoria, de qualquer dos Tribunais Regionais do Trabalho, na forma que dispuser o Regimento do Tribunal Superior do Trabalho.</p>
        
        <p id="art698"><span class="artigo">Art. 698.</span> (Suprimido pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art699."><span class="artigo">Art. 699.</span> O Tribunal Superior do Trabalho não poderá deliberar, na plenitude de sua composição senão com a presença de pelo menos nove de seus juízes, além do Presidente.</p>
        
        <p id="art699p.">Parágrafo único. As turmas do Tribunal, compostas de 5 (cinco) juízes, só poderão deliberar com a presença de pelo menos, três de seus membros, além do respectivo presidente, cabendo também a este funcionar como relator ou revisor nos feitos que lhe forem distribuídos conforme estabelecer o regimento interno.</p>
        
        <p id="art700"><span class="artigo">Art. 700.</span> O Tribunal reunir-se-á em dias previamente fixados pelo Presidente, o qual poderá, sempre que for necessário, convocar sessões extraordinárias. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art701"><span class="artigo">Art. 701.</span> As sessões do Tribunal serão públicas e começarão às 14 (quatorze) horas, terminando às 17 (dezessete) horas, mas poderão ser prorrogadas pelo Presidente em caso de manifesta necessidade. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art701§1.">§ 1º. As sessões extraordinárias do Tribunal só se realizarão quando forem comunicadas aos seus membros com 24 (vinte e quatro) horas, no mínimo, de antecedência. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art701§2.">§ 2º. Nas sessões do Tribunal, os debates poderão tornar-se secretos, desde que, por motivo de interesse público, assim resolva a maioria de seus membros. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloviiicapitulovsecaoiii">SEÇÃO III<br>
        DA COMPETÊNCIA DO CONSELHO PLENO</h3>
        
        <p id="art702."><span class="artigo">Art. 702.</span> Ao Tribunal Pleno compete:</p>
        
        <p id="art702i.">I - em única instância:</p>
        
        <p id="art702ia." class="alinea">a) decidir sobre matéria constitucional, quando arguido, para invalidar lei ou ato do poder público;</p>
        
        <p id="art702ib." class="alinea">b) conciliar e julgar os dissídios coletivos que excedam a jurisdição dos Tribunais Regionais do Trabalho, bem como estender ou rever suas próprias decisões normativas, nos casos previstos em lei;</p>
        
        <p id="art702ic." class="alinea">c) homologar os acordos celebrados em dissídios de que trata a alínea anterior;</p>
        
        <p id="art702id." class="alinea">d) julgar os agravos dos despachos do presidente, nos casos previstos em lei;</p>
        
        <p id="art702ie." class="alinea">e) julgar as suspeições arguidas contra o presidente e demais juízes do Tribunal, nos feitos pendentes de sua decisão;</p>
        
        <p id="art702if..." class="alinea">f) estabelecer ou alterar súmulas e outros enunciados de jurisprudência uniforme, pelo voto de pelo menos dois terços de seus membros, caso a mesma matéria já tenha sido decidida de forma idêntica por unanimidade em, no mínimo, dois terços das turmas em pelo menos dez sessões diferentes em cada uma delas, podendo, ainda, por maioria de dois terços de seus membros, restringir os efeitos daquela declaração ou decidir que ela só tenha eficácia a partir de sua publicação no Diário Oficial; (Vide ADI 6188)</p>
        
        <p id="art702ig." class="alinea">g) aprovar tabelas de custas emolumentos, nos termos da lei;</p>
        
        <p id="art702ih." class="alinea">h) elaborar o Regimento Interno do Tribunal e exercer as atribuições administrativas previstas em lei, ou decorrentes da Constituição Federal.</p>
        
        <p id="art702ii.">II - em última instância:</p>
        
        <p id="art702iia." class="alinea">a) julgar os recursos ordinários das decisões proferidas pelos Tribunais Regionais em processos de sua competência originária;</p>
        
        <p id="art702iib." class="alinea">b) julgar os embargos opostos às decisões de que tratam as alíneas &quot;b&quot; e &quot;c&quot; do inciso I deste artigo;</p>
        
        <p id="art702iic" class="alinea">c) julgar embargos das decisões das Turmas, quando estas divirjam entre si ou de decisão proferida pelo próprio Tribunal Pleno, ou que forem contrárias à letra de lei federal; (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art702iid" class="alinea">d) julgar os agravos de despachos denegatórios dos presidentes de turmas, em matéria de embargos na forma estabelecida no regimento interno;</p>
        
        <p id="art702iie" class="alinea">e) julgar os embargos de declaração opostos aos seus acórdãos.</p>
        
        <p id="art702§1">§ 1º. Quando adotada pela maioria de dois terços dos juízes do Tribunal Pleno, a decisão proferida nos embargos de que trata o inciso II, alínea &quot;c&quot;, deste artigo, terá força de prejulgado, nos termos dos §§ 2º. e 3º, do art. 902. (Parágrafo incluído pela Lei nº 2.244, de 23.6.1954)</p>
        
        <p id="art702§2">§ 2º. É da competência de cada uma das turmas do Tribunal: (Parágrafo incluído pela Lei nº 2.244, de 23.6.1954)</p>
        
        <p id="art702§2a" class="alinea">a) julgar, em única instância, os conflitos de jurisdição entre Tribunais Regionais do Trabalho e os que se suscitarem entre juízes de direito ou juntas de conciliação e julgamento de regiões diferentes; (Alínea incluída pela Lei nº 2.244, de 23.6.1954)</p>
        
        <p id="art702§2b" class="alinea">b) julgar, em última instância, os recursos de revista interpostos de decisões dos Tribunais Regionais e das Juntas de Conciliação e julgamento ou juízes de direito, nos casos previstos em lei; (Alínea incluída pela Lei nº 2.244, de 23.6.1954)</p>
        
        <p id="art702§2c" class="alinea">c) julgar os agravos de instrumento dos despachos que denegarem a interposição de recursos ordinários ou de revista; (Alínea incluída pela Lei nº 2.244, de 23.6.1954)</p>
        
        <p id="art702§2d" class="alinea">d) julgar os embargos de declaração opostos aos seus acórdãos; (Alínea incluída pela Lei nº 2.244, de 23.6.1954)</p>
        
        <p id="art702§2e" class="alinea">e) julgar as habilitações incidentes e arguições de falsidade, suspeição e outras nos casos pendentes de sua decisão. (Alínea incluída pela Lei nº 2.244, de 23.6.1954)</p>
        
        <p id="art702§3">§ 3º. As sessões de julgamento sobre estabelecimento ou alteração de súmulas e outros enunciados de jurisprudência deverão ser públicas, divulgadas com, no mínimo, trinta dias de antecedência, e deverão possibilitar a sustentação oral pelo Procurador-Geral do Trabalho, pelo Conselho Federal da Ordem dos Advogados do Brasil, pelo Advogado-Geral da União e por confederações sindicais ou entidades de classe de âmbito nacional. (Incluído dada pela Lei nº 13.467, de 2017) (Vide ADI 6188)</p>
        
        <p id="art702§4">§ 4º. O estabelecimento ou a alteração de súmulas e outros enunciados de jurisprudência pelos Tribunais Regionais do Trabalho deverão observar o disposto na alínea f do inciso I e no § 3º. deste artigo, com rol equivalente de legitimados para sustentação oral, observada a abrangência de sua circunscrição judiciária. (Incluído dada pela Lei nº 13.467, de 2017) (Vide ADI 6188)</p>
        
        <h3 id="tituloviiicapitulovsecaoiv">SEÇÃO IV<br>
        DA COMPETÊNCIA DA CÂMARA DE JUSTIÇA DO TRABALHO</h3>
        
        <p id="art703">Art. 703 (Suprimido pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art704"><span class="artigo">Art. 704.</span> (Suprimido pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art705"><span class="artigo">Art. 705.</span> (Suprimido pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloviiicapitulovsecaov">SEÇÃO V<br>
        DA COMPETÊNCIA DA CÂMARA DE PREVIDÊNCIA SOCIAL</h3>
        
        <p id="art706">Art. 706 (Suprimido pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloviiicapitulovsecaovi">SEÇÃO VI<br>
        DAS ATRIBUIÇÕES DO PRESIDENTE DO TRIBUNAL SUPERIOR DO TRABALHO</h3>
        
        <p id="art707"><span class="artigo">Art. 707.</span> Compete ao Presidente do Tribunal: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707a." class="alinea">a) presidir às sessões do Tribunal, fixando os dias para a realização das sessões ordinárias e convocando as extraordinárias; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707b." class="alinea">b) superintender todos os serviços do Tribunal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707c." class="alinea">c) expedir instruções e adotar as providências necessárias para o bom funcionamento do Tribunal e dos demais órgãos da Justiça do Trabalho; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707d." class="alinea">d) fazer cumprir as decisões originárias do Tribunal, determinando aos Tribunais Regionais e aos demais órgãos da Justiça do Trabalho a realização dos atos processuais e das diligências necessárias; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707e." class="alinea">e) submeter ao Tribunal os processos em que tenha de deliberar e designar, na forma do Regimento Interno, os respectivos relatores; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707f." class="alinea">f) despachar os recursos interpostos pelas partes e os demais papéis em que deva deliberar; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707g." class="alinea">g) determinar as alterações que se fizerem necessárias na lotação do pessoal da Justiça do Trabalho, fazendo remoções ex officio de servidores entre os Tribunais Regionais, Juntas de Conciliação e Julgamento e outros órgãos; bem como conceder as requeridas que julgar convenientes ao serviço, respeitada a lotação de cada órgão; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707h." class="alinea">h) conceder licenças e férias aos servidores do Tribunal, bem como impor-lhes as penas disciplinares que excederem da alçada das demais autoridades; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707i." class="alinea">i) dar posse e conceder licença aos membros do Tribunal, bem como conceder licenças e férias aos Presidentes dos Tribunais Regionais; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707j." class="alinea">j) apresentar ao Ministro do Trabalho, Industria e Comercio, até 31 de março de cada ano, o relatório das atividades do Tribunal e dos demais órgãos da Justiça do Trabalho. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art707p.">Parágrafo único. O Presidente terá 1 (um) secretário por ele designado dentre os funcionários lotados no Tribunal, e será auxiliado por servidores designados nas mesmas condições. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloviiicapitulovsecaovii">SEÇÃO VII<br>
        DAS ATRIBUIÇÕES DO VICE-PRESIDENTE</h3>
        
        <p id="art708."><span class="artigo">Art. 708.</span> Compete ao Vice-Presidente do Tribunal:</p>
        
        <p id="art708a.." class="alinea">a) substituir o Presidente e o Corregedor em suas faltas e impedimentos;</p>
        
        <p id="art708b.." class="alinea">b) (Suprimida pela Lei nº 2.244, de 23.6.1954):</p>
        
        <p id="art708p..">Parágrafo único. Na ausência do Presidente e do Vice-Presidente, será o Tribunal presidido pelo Juiz togado mais antigo, ou pelo mais idoso quando igual a antiguidade.</p>
        
        <h3 id="tituloviiicapitulovsecaoviii">SEÇÃO VIII<br>
        DAS ATRIBUIÇÕES DO CORREGEDOR</h3>
        
        <p id="art709..."><span class="artigo">Art. 709.</span> Compete ao Corregedor, eleito dentre os Ministros togados do Tribunal Superior do Trabalho: (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art709i">I - Exercer funções de inspeção e correição permanente com relação aos Tribunais Regionais e seus presidentes; (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art709ii">II - Decidir reclamações contra os atos atentatórios da boa ordem processual praticados pelos Tribunais Regionais e seus presidentes, quando inexistir recurso específico; (Redação dada pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art709iii">III - (Revogado pela Lei nº 5.442, de 24.5.1968)</p>
        
        <p id="art709§1.">§ 1º. Das decisões proferidas pelo Corregedor, nos casos do artigo, caberá o agravo regimental, para o Tribunal Pleno. (Incluído pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art709§2">§ 2º. O Corregedor não integrará as Turmas do Tribunal, mas participará, com voto, das sessões do Tribunal Pleno, quando não se encontrar em correição ou em férias, embora não relate nem revise processos, cabendo-lhe, outrossim, votar em incidente de inconstitucionalidade, nos processos administrativos e nos feitos em que estiver vinculado por visto anterior à sua posse na Corregedoria.</p>
        
        <h2 id="tituloviiicapitulovi">CAPÍTULO VI<br>
        DOS SERVIÇOS AUXILIARES DA JUSTIÇA DO TRABALHO</h2>
        
        <h3 id="tituloviiicapitulovisecaoi">SEÇÃO I<br>
        DA SECRETARIA DAS JUNTAS DE CONCILIAÇÃO E JULGAMENTO</h3>
        
        <p id="art710"><span class="artigo">Art. 710.</span> Cada Junta terá 1 (uma) secretaria, sob a direção de funcionário que o Presidente designar, para exercer a função de secretário, e que receberá, além dos vencimentos correspondentes ao seu padrão, a gratificação de função fixada em lei. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art711"><span class="artigo">Art. 711.</span> Compete à secretaria das Juntas:</p>
        
        <p id="art711a" class="alinea">a) o recebimento, a autuação, o andamento, a guarda e a conservação dos processos e outros papéis que lhe forem encaminhados;</p>
        
        <p id="art711b" class="alinea">b) a manutenção do protocolo de entrada e saída dos processos e demais papéis;</p>
        
        <p id="art711c" class="alinea">c) o registro das decisões;</p>
        
        <p id="art711d" class="alinea">d) a informação, às partes interessadas e seus procuradores, do andamento dos respectivos processos, cuja consulta lhes facilitará;</p>
        
        <p id="art711e" class="alinea">e) a abertura de vista dos processos às partes, na própria secretaria;</p>
        
        <p id="art711f" class="alinea">f) a contagem das custas devidas pelas partes, nos respectivos processos;</p>
        
        <p id="art711g" class="alinea">g) o fornecimento de certidões sobre o que constar dos livros ou do arquivamento da secretaria;</p>
        
        <p id="art711h" class="alinea">h) a realização das penhoras e demais diligências processuais;</p>
        
        <p id="art711i" class="alinea">i) o desempenho dos demais trabalhos que lhe forem cometidos pelo Presidente da Junta, para melhor execução dos serviços que lhe estão afetos.</p>
        
        <p id="art712"><span class="artigo">Art. 712.</span> Compete especialmente aos secretários das Juntas de Conciliação e Julgamento: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712a." class="alinea">a) superintender os trabalhos da secretaria, velando pela boa ordem do serviço; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712b." class="alinea">b) cumprir e fazer cumprir as ordens emanadas do Presidente e das autoridades superiores; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712c." class="alinea">c) submeter a despacho e assinatura do Presidente o expediente e os papéis que devam ser por ele despachados e assinados; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712d." class="alinea">d) abrir a correspondência oficial dirigida à Junta e ao seu Presidente, a cuja deliberação será submetida; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712e." class="alinea">e) tomar por termo as reclamações verbais nos casos de dissídios individuais; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712f." class="alinea">f) promover o rápido andamento dos processos, especialmente na fase de execução, e a pronta realização dos atos e diligências deprecadas pelas autoridades superiores; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712g." class="alinea">g) secretariar as audiências da Junta, lavrando as respectivas atas; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712h." class="alinea">h) subscrever as certidões e os termos processuais; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712i." class="alinea">i) dar aos litigantes ciência das reclamações e demais atos processuais de que devam ter conhecimento, assinando as respectivas notificações; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712j." class="alinea">j) executar os demais trabalhos que lhe forem atribuídos pelo Presidente da Junta. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art712p">Parágrafo único. Os serventuários que, sem motivo justificado, não realizarem os atos, dentro dos prazos fixados, serão descontados em seus vencimentos, em tantos dias quantos os do excesso. (Parágrafo incluído pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloviiicapitulovisecaoii">SEÇÃO II<br>
        DOS DISTRIBUIDORES</h3>
        
        <p id="art713"><span class="artigo">Art. 713.</span> Nas localidades em que existir mais de uma Junta de Conciliação e Julgamento haverá um distribuidor.</p>
        
        <p id="art714"><span class="artigo">Art. 714.</span> Compete ao distribuidor:</p>
        
        <p id="art714a" class="alinea">a) a distribuição, pela ordem rigorosa de entrada, e sucessivamente a cada Junta, dos feitos que, para esse fim, lhe forem apresentados pelos interessados;</p>
        
        <p id="art714b" class="alinea">b) o fornecimento, aos interessados, do recibo correspondente a cada feito distribuído;</p>
        
        <p id="art714c" class="alinea">c) a manutenção de 2 (dois) fichários dos feitos distribuídos, sendo um organizado pelos nomes dos reclamantes e o outro dos reclamados, ambos por ordem alfabética;</p>
        
        <p id="art714d" class="alinea">d) o fornecimento a qualquer pessoa que o solicite, verbalmente ou por certidão, de informações sobre os feitos distribuídos;</p>
        
        <p id="art714e" class="alinea">e) a baixa na distribuição dos feitos, quando isto lhe for determinado pelos Presidentes das Juntas, formando, com as fichas correspondentes, fichários à parte, cujos dados poderão ser consultados pelos interessados, mas não serão mencionados em certidões.</p>
        
        <p id="art715"><span class="artigo">Art. 715.</span> Os distribuidores são designados pelo Presidente do Tribunal Regional dentre os funcionários das Juntas e do Tribunal Regional, existentes na mesma localidade, e ao mesmo Presidente diretamente subordinados.</p>
        
        <h3 id="tituloviiicapitulovisecaoiii">SEÇÃO III<br>
        DO CARTÓRIO DOS JUÍZOS DE DIREITO</h3>
        
        <p id="art716"><span class="artigo">Art. 716.</span> Os cartórios dos Juízos de Direito, investidos na administração da Justiça do Trabalho, têm, para esse fim, as mesmas atribuições e obrigações conferidas na Seção I às secretarias das Juntas de Conciliação e Julgamento.</p>
        
        <p id="art716p">Parágrafo único. Nos Juízos em que houver mais de um cartório, far-se-á entre eles a distribuição alternada e sucessiva das reclamações.</p>
        
        <p id="art717"><span class="artigo">Art. 717.</span> Aos escrivães dos Juízos de Direito, investidos na administração da Justiça do Trabalho, competem especialmente as atribuições e obrigações dos secretários das Juntas; e aos demais funcionários dos cartórios, as que couberem nas respectivas funções, dentre as que competem às secretarias das Juntas, enumeradas no art. 711.</p>
        
        <h3 id="tituloviiicapitulovisecaoiv">SEÇÃO IV<br>
        DAS SECRETARIAS DOS TRIBUNAIS REGIONAIS</h3>
        
        <p id="art718"><span class="artigo">Art. 718.</span> Cada Tribunal Regional tem 1 (uma) secretaria, sob a direção do funcionário designado para exercer a função de secretário, com a gratificação de função fixada em lei. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art719"><span class="artigo">Art. 719.</span> Competem à Secretaria dos Conselhos, além das atribuições estabelecidas no art. 711, para a secretaria das Juntas, mais as seguintes:</p>
        
        <p id="art719a" class="alinea">a) a conclusão dos processos ao Presidente e sua remessa, depois de despachados, aos respectivos relatores;</p>
        
        <p id="art719b" class="alinea">b) a organização e a manutenção de um fichário de jurisprudência do Conselho, para consulta dos interessados.</p>
        
        <p id="art719p">Parágrafo único. No regimento interno dos Tribunais Regionais serão estabelecidas as demais atribuições, o funcionamento e a ordem dos trabalhos de suas secretarias.</p>
        
        <p id="art720"><span class="artigo">Art. 720.</span> Competem aos secretários dos Tribunais Regionais as mesmas atribuições conferidas no art. 712 aos secretários das Juntas, além das que lhes forem fixadas no regimento interno dos Conselhos.</p>
        
        <h3 id="tituloviiicapitulovisecaov">SEÇÃO V<br>
        DOS OFICIAIS DE DILIGÊNCIA</h3>
        
        <p id="art721"><span class="artigo">Art. 721.</span> Incumbe aos Oficiais de Justiça e Oficiais de Justiça Avaliadores da Justiça do Trabalho a realização dos atos decorrentes da execução dos julgados das Juntas de Conciliação e Julgamento e dos Tribunais Regionais do Trabalho, que lhes forem cometidos pelos respectivos Presidentes.</p>
        
        <p id="art721§1..">§ 1º. Para efeito de distribuição dos referidos atos, cada Oficial de Justiça ou Oficial de Justiça Avaliador funcionará perante uma Junta de Conciliação e Julgamento, salvo quando da existência, nos Tribunais Regionais do Trabalho, de órgão específico, destinado à distribuição de mandados judiciais.</p>
        
        <p id="art721§2..">§ 2º. Nas localidades onde houver mais de uma Junta, respeitado o disposto no parágrafo anterior, a atribuição para o cumprimento do ato deprecado ao Oficial de Justiça ou Oficial de Justiça Avaliador será transferida a outro Oficial, sempre que, após o decurso de 9 (nove) dias, sem razões que o justifiquem, não tiver sido cumprido o ato, sujeitando-se o serventuário às penalidades da lei.</p>
        
        <p id="art721§3..">§ 3º. No caso de avaliação, terá o Oficial de Justiça Avaliador, para cumprimento do ato, o prazo previsto no art. 888.</p>
        
        <p id="art721§4..">§ 4º. É facultado aos Presidentes dos Tribunais Regionais do Trabalho cometer a qualquer Oficial de Justiça ou Oficial de Justiça Avaliador a realização dos atos de execução das decisões desses Tribunais.</p>
        
        <p id="art721§5.">§ 5º. Na falta ou impedimento do Oficial de Justiça ou Oficial de Justiça Avaliador, o Presidente da Junta poderá atribuir a realização do ato a qualquer serventuário.</p>
        
        <h2 id="tituloviiicapitulovii">CAPÍTULO VII<br>
        DAS PENALIDADES</h2>
        
        <h3 id="tituloviiicapituloviisecaoi">SEÇÃO I<br>
        DO &quot;LOCK-OUT&quot; E DA GREVE</h3>
        
        <p id="art722"><span class="artigo">Art. 722.</span> Os empregadores que, individual ou coletivamente, suspenderem os trabalhos dos seus estabelecimentos, sem prévia autorização do Tribunal competente, ou que violarem, ou se recusarem a cumprir decisão proferida em dissídio coletivo, incorrerão nas seguintes penalidades:</p>
        
        <p id="art722.a0" class="alinea">a) multa de cinco mil cruzeiros a cinquenta mil cruzeiros; (Vide Leis nºs 6.986, de 1982 e 6.205, de 1975)</p>
        
        <p id="art722b" class="alinea">b) perda do cargo de representação profissional em cujo desempenho estiverem;</p>
        
        <p id="art722c" class="alinea">c) suspensão, pelo prazo de 2 (dois) a 5 (cinco) anos, do direito de serem eleitos para cargos de representação profissional.</p>
        
        <p id="art722§1">§ 1º. Se o empregador for pessoa jurídica, as penas previstas nas alíneas &quot;b&quot; e &quot;c&quot; incidirão sobre os administradores responsáveis.</p>
        
        <p id="art722§2">§ 2º. Se o empregador for concessionário de serviço público, as penas serão aplicadas em dobro. Nesse caso, se o concessionário for pessoa jurídica o Presidente do Tribunal que houver proferido a decisão poderá, sem prejuízo do cumprimento desta e da aplicação das penalidades cabíveis, ordenar o afastamento dos administradores responsáveis, sob pena de ser cassada a concessão.</p>
        
        <p id="art722§3">§ 3º. Sem prejuízo das sanções cominadas neste artigo, os empregadores ficarão obrigados a pagar os salários devidos aos seus empregados, durante o tempo de suspensão do trabalho.</p>
        
        <p id="art723"><span class="artigo">Art. 723.</span> (Revogado pela Lei nº 9.842, de 7.10.1999)</p>
        
        <p id="art724"><span class="artigo">Art. 724.</span> (Revogado pela Lei nº 9.842, de 7.10.1999)</p>
        
        <p id="art725"><span class="artigo">Art. 725.</span> (Revogado pela Lei nº 9.842, de 7.10.1999)</p>
        
        <h3 id="tituloviiicapituloviisecaoii">SEÇÃO II<br>
        DAS PENALIDADES CONTRA OS MEMBROS DA JUSTIÇA DO TRABALHO</h3>
        
        <p id="art954"><span class="artigo">Art. 726.</span> Aquele que recusar o exercício da função de vogal de Junta de Conciliação e Julgamento ou de Tribunal Regional, sem motivo justificado, incorrerá nas seguintes penas:</p>
        
        <p id="art726a0" class="alinea">a) sendo representante de empregadores, multa de Cr$ 100,00 (cem cruzeiros) a Cr$ 1.000,00 (mil cruzeiros) e suspensão do direito de representação profissional por 2 (dois) a 5 (cinco) anos; (Vide Leis nº 6.986, de 1982 e 6.205, de 1975)</p>
        
        <p id="art726b0" class="alinea">b) sendo representante de empregados, multa de Cr$ 100,00 (cem cruzeiros) e suspensão do direito de representação profissional por 2 (dois) a 5 (cinco) anos. (Vide Leis nº 6.986, de 1982 e 6.205, de 1975)</p>
        
        <p id="art727"><span class="artigo">Art. 727.</span> Os vogais das Juntas de Conciliação e Julgamento, ou dos Tribunais Regionais, que faltarem a 3 (três) reuniões ou sessões consecutivas, sem motivo justificado, perderão o cargo, além de incorrerem nas penas do artigo anterior.</p>
        
        <p id="art727p">Parágrafo único. Se a falta for de presidente, incorrerá ele na pena de perda do cargo, além da perda dos vencimentos correspondentes aos dias em que tiver faltado às audiências ou sessões consecutivas.</p>
        
        <p id="art728"><span class="artigo">Art. 728.</span> Aos presidentes, membros, juízes, vogais, e funcionários auxiliares da Justiça do Trabalho, aplica-se o disposto no Título XI do Código Penal.</p>
        
        <h3 id="tituloviiicapituloviisecaoiii">SEÇÃO III<br>
        DE OUTRAS PENALIDADES</h3>
        
        <p><span class="artigo">Art. 729.</span> O empregador que deixar de cumprir decisão passada em julgado sobre a readmissão ou reintegração de empregado, além do pagamento dos salários deste, incorrerá na multa de Cr$ 10,00 (dez cruzeiros) a Cr$ 50,00 (cinquenta cruzeiros) por dia, até que seja cumprida a decisão. (Vide Leis nº 6.986, de 1982 e 6.205, de 1975)</p>
        
        <p id="art729§3">§ 1º. O empregador que impedir ou tentar impedir que empregado seu sirva como vogal em Tribunal de Trabalho, ou que perante este preste depoimento, incorrerá na multa de Cr$ 500,00 (quinhentos cruzeiros) a Cr$ 5.000,00 (cinco mil cruzeiros) (Vide Leis nº 6.986, de 1982 e 6.205, de 1975)</p>
        
        <p id="art729§4">§ 2º. Na mesma pena do parágrafo anterior incorrerá o empregador que dispensar seu empregado pelo fato de haver servido como vogal ou prestado depoimento como testemunha, sem prejuízo da indenização que a lei estabeleça.</p>
        
        <p id="art952"><span class="artigo">Art. 730.</span> Aqueles que se recusarem a depor como testemunhas, sem motivo justificado, incorrerão na multa de Cr$ 50,00 (cinquenta cruzeiros) a Cr$ 500,00 (quinhentos cruzeiros). (Vide Leis nº 6.986, de 1982 e 6.205, de 1975)</p>
        
        <p id="art731"><span class="artigo">Art. 731.</span> Aquele que, tendo apresentado ao distribuidor reclamação verbal, não se apresentar, no prazo estabelecido no parágrafo único do art. 786, à Junta ou Juízo para fazê-lo tomar por termo, incorrerá na pena de perda, pelo prazo de 6 (seis) meses, do direito de reclamar perante a Justiça do Trabalho.</p>
        
        <p id="art732"><span class="artigo">Art. 732.</span> Na mesma pena do artigo anterior incorrerá o reclamante que, por 2 (duas) vezes seguidas, der causa ao arquivamento de que trata o art. 844.</p>
        
        <p id="art953"><span class="artigo">Art. 733.</span> As infrações de disposições deste Título, para as quais não haja penalidades cominadas, serão punidas com a multa de Cr$ 50,00 (cinquenta cruzeiros) a Cr$ 5.000,00 (cinco mil cruzeiros), elevada ao dobro na reincidência. (Vide Leis nº 6.986, de 1982 e 6.205, de 1975)</p>
        
        <h2 id="tituloviiicapituloviii">CAPÍTULO VIII<br>
        DISPOSIÇÕES GERAIS</h2>
        
        <p id="art734"><span class="artigo">Art. 734.</span> O ministro do Trabalho, Industria e Comercio, poderá rever, ex-officio, dentro do prazo de 30 (trinta) dias, contados de sua publicação no órgão oficial, ou mediante representação apresentada dentro de igual prazo: (Vide Leis nº 3.807, de 1960 e 5.890, de 1973)</p>
        
        <p id="art734a" class="alinea">a) as decisões da Câmara da Previdência Social, quando proferidas pelo voto de desempate, ou que violarem disposições expressas de direito ou modificarem jurisprudência até então observada;</p>
        
        <p id="art734b" class="alinea">b) as decisões do presidente do Tribunal Nacional do Trabalho em matéria de previdência social.</p>
        
        <p id="art734p">Parágrafo único. O ministro do Trabalho, Industria e Comercio, poderá avocar ao seu conhecimento os assuntos de natureza administrativa referentes às instituições de previdência social, sempre que houver interesse público.</p>
        
        <p id="art735"><span class="artigo">Art. 735.</span> As repartições públicas e as associações sindicais são obrigadas a fornecer aos Juízes e Tribunais do Trabalho e à Procuradoria da Justiça do Trabalho as informações e os dados necessários à instrução e ao julgamento dos feitos submetidos à sua apreciação.</p>
        
        <p id="art735p">Parágrafo único. A recusa de informações ou dados a que se refere este artigo, por parte de funcionários públicos, importa na aplicação das penalidades previstas pelo Estatuto dos Funcionários Públicos por desobediência.</p>
        
        <h1 id="tituloix">TÍTULO IX<br>
        DO MINISTÉRIO PÚBLICO DO TRABALHO</h1>
        
        <h2 id="tituloixcapituloi">CAPÍTULO I<br>
        DISPOSIÇÕES GERAIS</h2>
        
        <p id="art736"><span class="artigo">Art. 736.</span> O Ministério Público do Trabalho é constituído por agentes diretos do Poder Executivo, tendo por função zelar pela exata observância da Constituição Federal, das leis e demais atos emanados dos poderes públicos, na esfera de suas atribuições.</p>
        
        <p id="art736p">Parágrafo único. Para o exercício de suas funções, o Ministério Público do Trabalho reger-se-á pelo que estatui esta Consolidação e, na falta de disposição expressa, pelas normas que regem o Ministério Público Federal.</p>
        
        <p id="art737"><span class="artigo">Art. 737.</span> O Ministério Público do Trabalho compõe-se da Procuradoria da Justiça do Trabalho e da Procuradoria da Previdência Social aquela funcionando como órgão de coordenação entre a Justiça do Trabalho e o Ministério do Trabalho, Industria e Comercio, ambas diretamente subordinadas ao Ministro de Estado. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art738"><span class="artigo">Art. 738.</span> Os procuradores, além dos vencimentos fixados na tabela constante do decreto-lei nº 2.874, de 16 de dezembro de 1940, continuarão a perceber a percentagem de 8%, por motivo de cobrança da dívida ativa da União ou de multas impostas pelas autoridades administrativas e judiciárias do trabalho e da previdência social. (Vide Emenda Constitucional nº 1, de 1969)</p>
        
        <p id="art738p.">Parágrafo único. Essa percentagem será calculada sobre as somas efetivamente arrecadadas e rateada de acordo com as instruções expedidas pelos respectivos procuradores gerais.</p>
        
        <p id="art739"><span class="artigo">Art. 739.</span> Não estão sujeitos a ponto os procuradores-gerais e os procuradores.</p>
        
        <h2 id="tituloixcapituloii">CAPÍTULO II<br>
        DA PROCURADORIA DA JUSTIÇA DO TRABALHO</h2>
        
        <h3 id="tituloixcapituloiisecaoi">SEÇÃO I<br>
        DA ORGANIZAÇÃO</h3>
        
        <p id="art740"><span class="artigo">Art. 740.</span> A Procuradoria da Justiça do Trabalho compreende:</p>
        
        <p id="art740a" class="alinea">a) 1 (uma) Procuradoria-Geral, que funcionará junto ao Tribunal Superior do Trabalho;</p>
        
        <p id="art740b" class="alinea">b) 8 (oito) Procuradorias Regionais, que funcionarão junto aos Tribunais Regionais do Trabalho.</p>
        
        <p id="art741"><span class="artigo">Art. 741.</span> As Procuradorias Regionais são subordinadas diretamente ao procurador-geral.</p>
        
        <p><span class="artigo">Art. 742.</span> A Procuradoria-Geral é constituída de 1 (um) procurador-geral e de procuradores.</p>
        
        <p id="art742p">Parágrafo único. As Procuradorias Regionais compõem-se de 1 (um) procurador regional, auxiliado, quando necessário, por procuradores adjuntos.</p>
        
        <p id="art743"><span class="artigo">Art. 743.</span> Haverá, nas Procuradorias Regionais, substitutos de procurador adjunto ou, quando não houver este cargo, de procurador regional, designados previamente por decreto do Presidente da República, sem ônus para os cofres públicos.</p>
        
        <p id="art743§1">§ 1º. O substituto tomará posse perante o respectivo procurador regional, que será a autoridade competente para convocá-lo.</p>
        
        <p id="art743§2">§ 2º. O procurador regional será substituído em suas faltas e impedimentos pelo procurador adjunto, quando houver, e, havendo mais de um, pelo que for por ele designado.</p>
        
        <p id="art743§3">§ 3º. O procurador adjunto será substituído, em suas faltas e impedimentos, pelo respectivo procurador substituto.</p>
        
        <p id="art743§4">§ 4º. Será dispensado, automaticamente, o substituto que não atender à convocação, salvo motivo de doença, devidamente comprovada.</p>
        
        <p id="art743§5">§ 5º. Nenhum direito ou vantagem terá o substituto além do vencimento do cargo do substituído e somente durante o seu impedimento legal.</p>
        
        <p id="art744"><span class="artigo">Art. 744.</span> A nomeação do procurador-geral deverá recair em bacharel em ciências jurídicas e sociais, que tenha exercido, por 5 (cinco) ou mais anos, cargo de magistratura ou de Ministério Público, ou a advocacia.</p>
        
        <p id="art745"><span class="artigo">Art. 745.</span> Para a nomeação dos demais procuradores, atender-se-á aos mesmos requisitos estabelecidos no artigo anterior, reduzido a 2 (dois) anos, no mínimo, o tempo de exercício.</p>
        
        <h3 id="tituloixcapituloiisecaoii">SEÇÃO II<br>
        DA COMPETÊNCIA DA PROCURADORIA-GERAL</h3>
        
        <p><span class="artigo">Art. 746.</span> Compete à Procuradoria-Geral da Justiça do Trabalho: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746a." class="alinea">a) oficiar, por escrito, em todos os processos e questões de trabalho de competência do Tribunal Superior do Trabalho; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746b." class="alinea">b) funcionar nas sessões do mesmo Tribunal, opinando verbalmente sobre a matéria em debate e solicitando as requisições e diligências que julgar convenientes, sendo-lhe assegurado o direito de vista do processo em julgamento sempre que for suscitada questão nova, não examinada no parecer exarado; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746c." class="alinea">c) requerer prorrogação das sessões do Tribunal, quando essa medida for necessária para que se ultime o julgamento; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746d." class="alinea">d) exarar, por intermédio do procurador-geral, o seu &quot;ciente&quot; nos acórdãos do Tribunal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746e." class="alinea">e) proceder às diligências e inquéritos solicitados pelo Tribunal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746f." class="alinea">f) recorrer das decisões do Tribunal, nos casos previstos em lei; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746g." class="alinea">g) promover, perante o Juízo competente, a cobrança executiva das multas impostas pelas autoridades administrativas e judiciárias do trabalho; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746h." class="alinea">h) representar às autoridades competentes contra os que não cumprirem as decisões do Tribunal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746i." class="alinea">i) prestar às autoridades do Ministério do Trabalho, Industria e Comercio as informações que lhe forem solicitadas sobre os dissídios submetidos à apreciação do Tribunal e encaminhar aos órgãos competentes cópia autenticada das decisões que por eles devam ser atendidas ou cumpridas; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746j." class="alinea">j) requisitar, de quaisquer autoridades, inquéritos, exames periciais, diligências, certidões e esclarecimentos que se tornem necessários no desempenho de suas atribuições; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746l" class="alinea">l) defender a jurisdição dos órgãos da Justiça do Trabalho; (Incluído pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art746m" class="alinea">m) suscitar conflitos de jurisdição. (Incluído pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloixcapituloiisecaoiii">SEÇÃO III<br>
        DA COMPETÊNCIA DAS PROCURADORIAS REGIONAIS</h3>
        
        <p id="art747"><span class="artigo">Art. 747.</span> Compete às Procuradorias Regionais exercer, dentro da jurisdição do Tribunal Regional respectivo, as atribuições indicadas na Seção anterior.</p>
        
        <h3 id="tituloixcapituloiisecaoiv">SEÇÃO IV<br>
        DAS ATRIBUIÇÕES DO PROCURADOR-GERAL</h3>
        
        <p id="art748"><span class="artigo">Art. 748.</span> Como chefe da Procuradoria-Geral da Justiça do Trabalho, incumbe ao procurador-geral: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art748a." class="alinea">a) dirigir os serviços da Procuradoria-Geral, orientar e fiscalizar as Procuradorias Regionais, expedindo as necessárias instruções; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art748b." class="alinea">b) funcionar nas sessões do Tribunal Superior do Trabalho, pessoalmente ou por intermédio do procurador que designar; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art748c." class="alinea">c) exarar o seu &quot;ciente&quot; nos acórdãos do Tribunal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art748d." class="alinea">d) designar o procurador que o substitua nas faltas e impedimentos e o chefe da secretaria da Procuradoria; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art748e." class="alinea">e) apresentar, até o dia 31 de março, ao Ministro do Trabalho, Industria e Comercio, relatório dos trabalhos da Procuradoria-Geral no ano anterior, com as observações e sugestões que julgar convenientes; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art748f." class="alinea">f) conceder férias aos procuradores e demais funcionários que sirvam na Procuradoria e impor-lhes penas disciplinares, observada, quanto aos procuradores, a legislação em vigor para o Ministério Público Federal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art748g." class="alinea">g) funcionar em Juízo, em primeira instancia, ou designar os procuradores que o devam fazer; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art748h." class="alinea">h) admitir e dispensar o pessoal extranumerário da secretaria e prorrogar o expediente remunerado dos funcionários e extranumerários. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloixcapituloiisecaov">SEÇÃO V<br>
        DAS ATRIBUIÇÕES DOS PROCURADORES</h3>
        
        <p id="art749"><span class="artigo">Art. 749.</span> Incumbe aos procuradores com exercício na Procuradoria-Geral: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art749a." class="alinea">a) funcionar, por designação do procurador-geral, nas sessões do Tribunal Superior do Trabalho; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art749b." class="alinea">b) desempenhar os demais encargos que lhes forem atribuídos pelo procurador-geral. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art749p.">Parágrafo único. Aos procuradores é facultado, nos processos em que oficiarem, requerer ao procurador-geral as diligências e investigações necessárias. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloixcapituloiisecaovi">SEÇÃO VI<br>
        DAS ATRIBUIÇÕES DOS PROCURADORES REGIONAIS</h3>
        
        <p id="art750"><span class="artigo">Art. 750.</span> Incumbe aos procuradores regionais: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art750a." class="alinea">a) dirigir os serviços da respectiva Procuradoria; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art750b." class="alinea">b) funcionar nas sessões do Tribunal Regional, pessoalmente ou por intermédio do procurador adjunto que designar; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art750c." class="alinea">c) apresentar, semestralmente, ao procurador-geral, um relatório das atividades da respectiva Procuradoria, bem como dados e informações sobre a administração da Justiça do Trabalho na respectiva região; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art750d." class="alinea">d) requerer e acompanhar perante as autoridades administrativas ou judiciárias as diligências necessárias à execução das medidas e providências ordenadas pelo procurador-geral; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art750e." class="alinea">e) prestar ao procurador-geral as informações necessárias sobre os feitos em andamento e consultá-lo nos casos de dúvidas; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art750f." class="alinea">f) funcionar em juízo, na sede do respectivo Tribunal Regional; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art750g." class="alinea">g) exarar o seu &quot;ciente&quot; nos acórdãos do Tribunal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art750h" class="alinea">h) designar o procurador que o substitua nas faltas e impedimentos e o secretário da Procuradoria. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art751"><span class="artigo">Art. 751.</span> Incumbe aos procuradores adjuntos das Procuradorias Regionais: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art751a." class="alinea">a) funcionar por designação do procurador regional, nas sessões do Tribunal Regional; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art751b." class="alinea">b) desempenhar os demais encargos que lhes forem atribuídos pelo procurador regional. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloixcapituloiisecaovii">SEÇÃO VII<br>
        DA SECRETARIA</h3>
        
        <p id="art752"><span class="artigo">Art. 752.</span> A secretaria da Procuradoria-Geral funcionará sob a direção de um chefe designado pelo procurador-geral e terá o pessoal designado pelo Ministro do Trabalho, Industria e Comercio. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art753"><span class="artigo">Art. 753.</span> Compete à secretaria:</p>
        
        <p id="art753a" class="alinea">a) receber, registrar e encaminhar os processos ou papéis entrados;</p>
        
        <p id="art753b" class="alinea">b) classificar e arquivar os pareceres e outros papéis;</p>
        
        <p id="art753c" class="alinea">c) prestar informações sobre os processos ou papéis sujeitos à apreciação da Procuradoria;</p>
        
        <p id="art753d" class="alinea">d) executar o expediente da Procuradoria;</p>
        
        <p id="art753e" class="alinea">e) providenciar sobre o suprimento do material necessário;</p>
        
        <p id="art753f" class="alinea">f) desempenhar os demais trabalhos que lhes forem cometidos pelo procurador-geral, para melhor execução dos serviços a seu cargo.</p>
        
        <p id="art754"><span class="artigo">Art. 754.</span> Nas Procuradorias Regionais, os trabalhos a que se refere o artigo anterior serão executados pelos funcionários para esse fim designados.</p>
        
        <h2 id="tituloixcapituloiii">CAPÍTULO III<br>
        DA PROCURADORIA DE PREVIDÊNCIA SOCIAL</h2>
        
        <h3 id="tituloixcapituloiiisecaoi">SEÇÃO I<br>
        DA ORGANIZAÇÃO</h3>
        
        <p id="art755"><span class="artigo">Art. 755.</span> A Procuradoria de Previdência Social compõe-se de um procurador geral e de procuradores.</p>
        
        <p id="art756"><span class="artigo">Art. 756.</span> Para a nomeação do procurador geral e dos demais procuradores atender-se-á ao disposto nos arts. 744 e 745.</p>
        
        <h3 id="tituloixcapituloiiisecaoii">SEÇÃO II<br>
        DA COMPETÊNCIA DA PROCURADORIA</h3>
        
        <p id="art757"><span class="artigo">Art. 757.</span> Compete à Procuradoria da Previdência Social: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946) (Vide Decreto Lei nº 72, de 1966)</p>
        
        <p id="art757a." class="alinea">a) oficiar, por escrito, nos processos que tenham de ser sujeitos à decisão do Conselho Superior de Previdência Social; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art757b." class="alinea">b) oficiar, por escrito, nos pedidos de revisão das decisões do mesmo Conselho; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art757c." class="alinea">c) funcionar nas sessões do mesmo Conselho, opinando verbalmente sobre a matéria em debate e solicitando as requisições e diligências que julgar convenientes, sendo-lhe assegurado o direito de vista do processo em julgamento, sempre que for suscitada questão nova, não examinada no parecer exarado; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art757d." class="alinea">d) opinar, quando solicitada, nos processos sujeitos à deliberação do Ministro de Estado, do Conselho Técnico do Departamento Nacional de Previdência Social ou do Diretor do mesmo Departamento, em que houver matéria jurídica a examinar; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art757e." class="alinea">e) funcionar, em primeira instância, nas ações propostas contra a União, no Distrito Federal, para anulação de atos e decisões do Conselho Superior de Previdência Social ou do Departamento Nacional de Previdência Social, bem como do Ministro do Trabalho, Industria e Comercio, em matéria de previdência social; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art757f." class="alinea">f) fornecer ao Ministério Público as informações por este solicitadas em virtude de ações propostas nos Estados e Territórios para execução ou anulação de atos e decisões dos órgãos ou da autoridade a que se refere a alínea anterior; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art757g." class="alinea">g) promover em juízo, no Distrito Federal, qualquer procedimento necessário ao cumprimento das decisões do Conselho Superior de Previdência Social e do Departamento Nacional de Previdência Social, bem como do Ministro do Trabalho, Industria e Comercio, em matéria de previdência social; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art757h" class="alinea">h) recorrer das decisões dos órgãos e autoridades competentes em matéria de previdência social e requerer revisão das decisões do Conselho Superior de Previdência Social, que lhe pareçam contrárias à lei. (Incluído pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloixcapituloiiisecaoiii">SEÇÃO III<br>
        DAS ATRIBUIÇÕES DO PROCURADOR-GERAL</h3>
        
        <p id="art758"><span class="artigo">Art. 758.</span> Como chefe da Procuradoria da Previdência Social, incumbe ao Procurador-Geral: (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946) (Vide Decreto Lei nº 72, de 1966)</p>
        
        <p id="art758a." class="alinea">a) dirigir os serviços da Procuradoria, expedindo as necessárias instruções; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art758b." class="alinea">b) funcionar nas sessões do Conselho Superior de Previdência Social, pessoalmente ou por intermédio do procurador que designar; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art758c." class="alinea">c) designar o procurador que o substitua nas faltas e impedimentos e o chefe da Secretaria da Procuradoria; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art758d." class="alinea">d) conceder férias aos procuradores e demais funcionários lotados na Procuradoria e impor-lhes penas disciplinares, observada, quanto aos procuradores, a legislação em vigor para o Ministério Público Federal; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art758e." class="alinea">e) funcionar em juízo, em primeira instância, ou designar os procuradores que devam fazê-lo; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art758f." class="alinea">f) admitir e dispensar o pessoal extranumerário da Secretária e prorrogar o expediente renumerado dos funcionários e extranumerários; (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art758g." class="alinea">g) apresentar, até 31 de março de cada ano, ao Ministro do Trabalho, Industria e Comercio, o relatório dos trabalhos da Procuradoria no ano anterior, com as observações e sugestões que julgar convenientes. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <h3 id="tituloixcapituloiiisecaoiv">SEÇÃO IV<br>
        DAS ATRIBUIÇÕES DOS PROCURADORES</h3>
        
        <p id="art759"><span class="artigo">Art. 759.</span> Aos procuradores e demais funcionários incumbe desempenhar os encargos que lhes forem cometidos pelo procurador geral. (Vide Decreto Lei nº 72, de 1966)</p>
        
        <p id="art759p">Parágrafo único. Aos procuradores é facultado, nos processos em que oficiarem, requerer ao procurador geral as diligências e investigações necessárias.</p>
        
        <h3 id="tituloixcapituloiiisecaov">SEÇÃO V<br>
        DA SECRETARIA</h3>
        
        <p id="art760"><span class="artigo">Art. 760.</span> A Procuradoria da Previdência Social terá uma Secretaria dirigida por um chefe designado pelo Procurador Geral. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946) (Vide Decreto Lei nº 72, de 1966)</p>
        
        <p id="art761"><span class="artigo">Art. 761.</span> A Secretaria terá o pessoal designado pelo Ministro do Trabalho, Industria e Comercio. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946) (Vide Decreto Lei nº 72, de 1966)</p>
        
        <p id="art762"><span class="artigo">Art. 762.</span> À Secretaria da Procuradoria de Previdência Social compete executar serviços idênticos aos referidos no art. 753. (Vide Decreto Lei nº 72, de 1966)</p>
        
        <h1 id="titulox">TÍTULO X<br>
        DO PROCESSO JUDICIÁRIO DO TRABALHO</h1>
        
        <h2 id="tituloxcapituloi">CAPÍTULO I<br>
        DISPOSIÇÕES PRELIMINARES</h2>
        
        <p><span class="artigo">Art. 763.</span> O processo da Justiça do Trabalho, no que concerne aos dissídios individuais e coletivos e à aplicação de penalidades, reger-se-á, em todo o território nacional, pelas normas estabelecidas neste Título.</p>
        
        <p><span class="artigo">Art. 764.</span> Os dissídios individuais ou coletivos submetidos à apreciação da Justiça do Trabalho serão sempre sujeitos à conciliação. <a name="art764§1"></a>§ 1º. Para os efeitos deste artigo, os juízes e Tribunais do Trabalho empregarão sempre os seus bons ofícios e persuasão no sentido de uma solução conciliatória dos conflitos. <a name="art764§2"></a>§ 2º. Não havendo acordo, o juízo conciliatório converter-se-á obrigatoriamente em arbitral, proferindo decisão na forma prescrita neste Título. <a name="art764§3"></a>§ 3º. É lícito às partes celebrar acordo que ponha termo ao processo, ainda mesmo depois de encerrado o juízo conciliatório.</p>
        
        <p><span class="artigo">Art. 765.</span> Os Juízos e Tribunais do Trabalho terão ampla liberdade na direção do processo e velarão pelo andamento rápido das causas, podendo determinar qualquer diligência necessária ao esclarecimento delas.</p>
        
        <p><span class="artigo">Art. 766.</span> Nos dissídios sobre estipulação de salários, serão estabelecidas condições que, assegurando justos salários aos trabalhadores, permitam também justa retribuição às empresas interessadas. <a name=art767></a><span class="artigo">Art. 767.</span> A compensação, ou retenção, só poderá ser arguida como matéria de defesa</p>
        
        <p><span class="artigo">Art. 768.</span> Terá preferência em todas as fases processuais o dissídio cuja decisão tiver de ser executada perante o Juízo da falência.</p>
        
        <p><span class="artigo">Art. 769.</span> Nos casos omissos, o direito processual comum será fonte subsidiária do direito processual do trabalho, exceto naquilo em que for incompatível com as normas deste Título.</p>
        
        <h2 id="tituloxcapituloii">CAPÍTULO II<br>
        DO PROCESSO EM GERAL</h2>
        
        <h3 id="tituloxcapituloiisecaoi">SEÇÃO I<br>
        DOS ATOS, TERMOS E PRAZOS PROCESSUAIS</h3>
        
        <p><span class="artigo">Art. 770.</span> Os atos processuais serão públicos salvo quando o contrário determinar o interesse social, e realizar-se-ão nos dias úteis das 6 (seis) às 20 (vinte) horas. <a name=art770p></a>Parágrafo único. A penhora poderá realizar-se em domingo ou dia feriado, mediante autorização expressa do juiz ou presidente.</p>
        
        <p><span class="artigo">Art. 771.</span> Os atos e termos processuais poderão ser escritos a tinta, datilografados ou a carimbo.</p>
        
        <p><span class="artigo">Art. 772.</span> Os atos e termos processuais, que devam ser assinados pelas partes interessadas, quando estas, por motivo justificado, não possam fazê-lo, serão firmados a rogo, na presença de 2 (duas) testemunhas, sempre que não houver procurador legalmente constituído.</p>
        
        <p><span class="artigo">Art. 773.</span> Os termos relativos ao movimento dos processos constarão de simples notas, datadas e rubricadas pelos secretários ou escrivães. (Vide Leis nº 409, de 1943 e 6.563, de 1978)</p>
        
        <p><span class="artigo">Art. 774.</span> Salvo disposição em contrário, os prazos previstos neste Título contam-se, conforme o caso, a partir da data em que for feita pessoalmente, ou recebida a notificação, daquela em que for publicado o edital no jornal oficial ou no que publicar o expediente da Justiça do Trabalho, ou, ainda, daquela em que for afixado o edital na sede da Junta, Juízo ou Tribunal.</p>
        
        <p id="art775.."><span class="artigo">Art. 775.</span> Os prazos estabelecidos neste Título serão contados em dias úteis, com exclusão do dia do começo e inclusão do dia do vencimento.</p>
        
        <p id="art775§1">§ 1º. Os prazos podem ser prorrogados, pelo tempo estritamente necessário, nas seguintes hipóteses: (Incluído dada pela Lei nº 13.467, de 2017)</p>
        
        <p id="art775§1i">I - quando o juízo entender necessário; (Incluído dada pela Lei nº 13.467, de 2017)</p>
        
        <p id="art775§1ii">II - em virtude de força maior, devidamente comprovada. (Incluído dada pela Lei nº 13.467, de 2017)</p>
        
        <p id="art775§2">§ 2º. Ao juízo incumbe dilatar os prazos processuais e alterar a ordem de produção dos meios de prova, adequando-os às necessidades do conflito de modo a conferir maior efetividade à tutela do direito. (Incluído dada pela Lei nº 13.467, de 2017)</p>
        
        <p id="art775a"><span class="artigo">Art. 775-A.</span> Suspende-se o curso do prazo processual nos dias compreendidos entre 20 de dezembro e 20 de janeiro, inclusive. (Incluído dada pela Lei nº 13.545, de 2017)</p>
        
        <p>§ 1º. Ressalvadas as férias individuais e os feriados instituídos por lei, os juízes, os membros do Ministério Público, da Defensoria Pública e da Advocacia Pública e os auxiliares da Justiça exercerão suas atribuições durante o período previsto no caput deste artigo. (Incluído dada pela Lei nº 13.545, de 2017)</p>
        
        <p>§ 2º. Durante a suspensão do prazo, não se realizarão audiências nem sessões de julgamento. (Incluído dada pela Lei nº 13.545, de 2017)</p>
        
        <p><span class="artigo">Art. 776.</span> O vencimento dos prazos será certificado nos processos pelos escrivães ou secretários. (Vide Leis nº 409, de 1943 e 6.563, de 1978)</p>
        
        <p><span class="artigo">Art. 777.</span> Os requerimentos e documentos apresentados, os atos e termos processuais, as petições ou razões de recursos e quaisquer outros papéis referentes aos feitos formarão os autos dos processos, os quais ficarão sob a responsabilidade dos escrivães ou secretários. (Vide Leis nº 409, de 1943 e 6.563, de 1978)</p>
        
        <p><span class="artigo">Art. 778.</span> Os autos dos processos da Justiça do Trabalho, não poderão sair dos cartórios ou secretarias, salvo se solicitados por advogados regularmente constituído por qualquer das partes, ou quando tiverem de ser remetidos aos órgãos competentes, em caso de recurso ou requisição.</p>
        
        <p><span class="artigo">Art. 779.</span> As partes, ou seus procuradores, poderão consultar, com ampla liberdade, os processos nos cartórios ou secretarias.</p>
        
        <p><span class="artigo">Art. 780.</span> Os documentos juntos aos autos poderão ser desentranhados somente depois de findo o processo, ficando traslado.</p>
        
        <p><span class="artigo">Art. 781.</span> As partes poderão requerer certidões dos processos em curso ou arquivados, as quais serão lavradas pelos escrivães ou secretários. (Vide Leis nº 409, de 1943 e 6.563, de 1978) <a name=art781p></a>Parágrafo único. As certidões dos processos que correrem em segredo de justiça dependerão de despacho do juiz ou presidente.</p>
        
        <p><span class="artigo">Art. 782.</span> São isentos de selo as reclamações, representações, requerimentos. atos e processos relativos à Justiça do Trabalho.</p>
        
        <h3 id="tituloxcapituloiisecaoii">SEÇÃO II<br>
        DA DISTRIBUIÇÃO</h3>
        
        <p><span class="artigo">Art. 783.</span> A distribuição das reclamações será feita entre as Juntas de Conciliação e Julgamento, ou os Juízes de Direito do Cível, nos casos previstos no art. 669, § 1º, pela ordem rigorosa de sua apresentação ao distribuidor, quando o houver. <a name=art784></a><span class="artigo">Art. 784.</span> As reclamações serão registradas em livro próprio, rubricado em todas as folhas pela autoridade a que estiver subordinado o distribuidor.</p>
        
        <p><span class="artigo">Art. 785.</span> O distribuidor fornecerá ao interessado um recibo do qual constarão, essencialmente, o nome do reclamante e do reclamado, a data da distribuição, o objeto da reclamação e a Junta ou o Juízo a que coube a distribuição.</p>
        
        <p><span class="artigo">Art. 786.</span> A reclamação verbal será distribuída antes de sua redução a termo. <a name=art786p></a>Parágrafo único. Distribuída a reclamação verbal, o reclamante deverá, salvo motivo de força maior, apresentar-se no prazo de 5 (cinco) dias, ao cartório ou à secretaria, para reduzi-la a termo, sob a pena estabelecida no art. 731.</p>
        
        <p><span class="artigo">Art. 787.</span> A reclamação escrita deverá ser formulada em 2 (duas) vias e desde logo acompanhada dos documentos em que se fundar.</p>
        
        <p><span class="artigo">Art. 788.</span> Feita a distribuição, a reclamação será remetida pelo distribuidor à Junta ou Juízo competente, acompanhada do bilhete de distribuição.</p>
        
        <h3 id="tituloxcapituloiisecaoiii.">SEÇÃO III<br>
        DAS CUSTAS E EMOLUMENTOS</h3>
        
        <p id="art789...."><span class="artigo">Art. 789.</span> Nos dissídios individuais e nos dissídios coletivos do trabalho, nas ações e procedimentos de competência da Justiça do Trabalho, bem como nas demandas propostas perante a Justiça Estadual, no exercício da jurisdição trabalhista, as custas relativas ao processo de conhecimento incidirão à base de 2% (dois por cento), observado o mínimo de R$ 10,64 (dez reais e sessenta e quatro centavos) e o máximo de quatro vezes o limite máximo dos benefícios do Regime Geral de Previdência Social, e serão calculadas:</p>
        
        <p>I – quando houver acordo ou condenação, sobre o respectivo valor;</p>
        
        <p>II – quando houver extinção do processo, sem julgamento do mérito, ou julgado totalmente improcedente o pedido, sobre o valor da causa;</p>
        
        <p>III – no caso de procedência do pedido formulado em ação declaratória e em ação constitutiva, sobre o valor da causa;</p>
        
        <p>IV – quando o valor for indeterminado, sobre o que o juiz fixar.</p>
        
        <p>§ 1º. As custas serão pagas pelo vencido, após o trânsito em julgado da decisão. No caso de recurso, as custas serão pagas e comprovado o recolhimento dentro do prazo recursal.</p>
        
        <p>§ 2º. Não sendo líquida a condenação, o juízo arbitrar-lhe-á o valor e fixará o montante das custas processuais.</p>
        
        <p>§ 3º. Sempre que houver acordo, se de outra forma não for convencionado, o pagamento das custas caberá em partes iguais aos litigantes.</p>
        
        <p>§ 4º. Nos dissídios coletivos, as partes vencidas responderão solidariamente pelo pagamento das custas, calculadas sobre o valor arbitrado na decisão, ou pelo Presidente do Tribunal.</p>
        
        <p><span class="artigo">Art. 789-A.</span> No processo de execução são devidas custas, sempre de responsabilidade do executado e pagas ao final, de conformidade com a seguinte tabela:</p>
        
        <p>I – autos de arrematação, de adjudicação e de remição: 5% (cinco por cento) sobre o respectivo valor, até o máximo de R$ 1.915,38 (um mil, novecentos e quinze reais e trinta e oito centavos);</p>
        
        <p>II – atos dos oficiais de justiça, por diligência certificada:</p>
        
        <p>III – agravo de instrumento: R$ 44,26 (quarenta e quatro reais e vinte e seis centavos);</p>
        
        <p>IV – agravo de petição: R$ 44,26 (quarenta e quatro reais e vinte e seis centavos);</p>
        
        <p>V – embargos à execução, embargos de terceiro e embargos à arrematação: R$ 44,26 (quarenta e quatro reais e vinte e seis centavos);</p>
        
        <p>VI – recurso de revista: R$ 55,35 (cinquenta e cinco reais e trinta e cinco centavos);</p>
        
        <p>VII – impugnação à sentença de liquidação: R$ 55,35 (cinquenta e cinco reais e trinta e cinco centavos);</p>
        
        <p>VIII – despesa de armazenagem em depósito judicial – por dia: 0,1% (um décimo por cento) do valor da avaliação;</p>
        
        <p>IX – cálculos de liquidação realizados pelo contador do juízo – sobre o valor liquidado: 0,5% (cinco décimos por cento) até o limite de R$ 638,46 (seiscentos e trinta e oito reais e quarenta e seis centavos).</p>
        
        <p><span class="artigo">Art. 789-B.</span> Os emolumentos serão suportados pelo Requerente, nos valores fixados na seguinte tabela:</p>
        
        <p>I – autenticação de traslado de peças mediante cópia reprográfica apresentada pelas partes – por folha: R$ 0,55 (cinquenta e cinco centavos de real);</p>
        
        <p>II – fotocópia de peças – por folha: R$ 0,28 (vinte e oito centavos de real);</p>
        
        <p>III – autenticação de peças – por folha: R$ 0,55 (cinquenta e cinco centavos de real);</p>
        
        <p>IV – cartas de sentença, de adjudicação, de remição e de arrematação – por folha: R$ 0,55 (cinquenta e cinco centavos de real);</p>
        
        <p>V – certidões – por folha: R$ 5,53 (cinco reais e cinquenta e três centavos).</p>
        
        <p><span class="artigo">Art. 790.</span> Nas Varas do Trabalho, nos Juízos de Direito, nos Tribunais e no Tribunal Superior do Trabalho, a forma de pagamento das custas e emolumentos obedecerá às instruções que serão expedidas pelo Tribunal Superior do Trabalho.</p>
        
        <p>§ 1º. Tratando-se de empregado que não tenha obtido o benefício da justiça gratuita, ou isenção de custas, o sindicato que houver intervindo no processo responderá solidariamente pelo pagamento das custas devidas.</p>
        
        <p>§ 2º. No caso de não-pagamento das custas, far-se-á execução da respectiva importância, segundo o procedimento estabelecido no Capítulo V deste Título.</p>
        
        <p id="art790§3.">§ 3º. É facultado aos juízes, órgãos julgadores e presidentes dos tribunais do trabalho de qualquer instância conceder, a requerimento ou de ofício, o benefício da justiça gratuita, inclusive quanto a traslados e instrumentos, àqueles que perceberem salário igual ou inferior a 40% (quarenta por cento) do limite máximo dos benefícios do Regime Geral de Previdência Social.</p>
        
        <p id="art790§4">§ 4º. O benefício da justiça gratuita será concedido à parte que comprovar insuficiência de recursos para o pagamento das custas do processo.</p>
        
        <p><span class="artigo">Art. 790-A.</span> São isentos do pagamento de custas, além dos beneficiários de justiça gratuita:</p>
        
        <p>I – a União, os Estados, o Distrito Federal, os Municípios e respectivas autarquias e fundações públicas federais, estaduais ou municipais que não explorem atividade econômica;</p>
        
        <p>II – o Ministério Público do Trabalho. <a name=art790ap></a>Parágrafo único. A isenção prevista neste artigo não alcança as entidades fiscalizadoras do exercício profissional, nem exime as pessoas jurídicas referidas no inciso</p>
        
        <p>I da obrigação de reembolsar as despesas judiciais realizadas pela parte vencedora.</p>
        
        <p id="art790b."><span class="artigo">Art. 790-B.</span> (Declarado inconstitucional pela ADI 5766)</p>
        
        <p id="art790b§1">§ 1º. Ao fixar o valor dos honorários periciais, o juízo deverá respeitar o limite máximo estabelecido pelo Conselho Superior da Justiça do Trabalho.</p>
        
        <p id="art790b§2">§ 2º. O juízo poderá deferir parcelamento dos honorários periciais.</p>
        
        <p id="art790b§3">§ 3º. O juízo não poderá exigir adiantamento de valores para realização de perícias.</p>
        
        <p id="art790b§4">§ 4º (Declarado inconstitucional pela ADI 5766)</p>
        
        <h3 id="tituloxcapituloiisecaoiv">SEÇÃO IV<br>
        DAS PARTES E DOS PROCURADORES</h3>
        
        <p id="art791"><span class="artigo">Art. 791.</span> Os empregados e os empregadores poderão reclamar pessoalmente perante a Justiça do Trabalho e acompanhar as suas reclamações até o final.</p>
        
        <p id="art791§1">§ 1º. Nos dissídios individuais os empregados e empregadores poderão fazer-se representar por intermédio do sindicato, advogado, solicitador, ou provisionado, inscrito na Ordem dos Advogados do Brasil.</p>
        
        <p id="art791§2">§ 2º. Nos dissídios coletivos é facultada aos interessados a assistência por advogado.</p>
        
        <p id="art791§3">§ 3º. A constituição de procurador com poderes para o foro em geral poderá ser efetivada, mediante simples registro em ata de audiência, a requerimento verbal do advogado interessado, com anuência da parte representada.</p>
        
        <p id="art791a"><span class="artigo">Art. 791-A.</span> Ao advogado, ainda que atue em causa própria, serão devidos honorários de sucumbência, fixados entre o mínimo de 5% (cinco por cento) e o máximo de 15% (quinze por cento) sobre o valor que resultar da liquidação da sentença, do proveito econômico obtido ou, não sendo possível mensurá-lo, sobre o valor atualizado da causa.</p>
        
        <p id="art791a§1">§ 1º. Os honorários são devidos também nas ações contra a Fazenda Pública e nas ações em que a parte estiver assistida ou substituída pelo sindicato de sua categoria.</p>
        
        <p id="art791a§2">§ 2º. Ao fixar os honorários, o juízo observará:</p>
        
        <p id="art791a§2i">I - o grau de zelo do profissional;</p>
        
        <p id="art791a§2ii">II - o lugar de prestação do serviço;</p>
        
        <p id="art791a§2iii">III - a natureza e a importância da causa;</p>
        
        <p id="art791a§2iv">IV - o trabalho realizado pelo advogado e o tempo exigido para o seu serviço.</p>
        
        <p id="art791a§3">§ 3º. Na hipótese de procedência parcial, o juízo arbitrará honorários de sucumbência recíproca, vedada a compensação entre os honorários.</p>
        
        <p id="art791a§4">§ 4º (Declarado inconstitucional pela ADI 5766)</p>
        
        <p id="art791a§5">§ 5º. São devidos honorários de sucumbência na reconvenção.</p>
        
        <p id="art792"><span class="artigo">Art. 792.</span> (Revogado pela Lei nº 13.467, de 2017)</p>
        
        <p id="art793"><span class="artigo">Art. 793.</span> A reclamação trabalhista do menor de 18 anos será feita por seus representantes legais e, na falta destes, pela Procuradoria da Justiça do Trabalho, pelo sindicato, pelo Ministério Público estadual ou curador nomeado em juízo.</p>
        
        <h3 id="tituloxcapituloiisecaoiva">SEÇÃO IV-A<br>
        DA RESPONSABILIDADE POR DANO PROCESSUAL</h3>
        
        <p id="art793a"><span class="artigo">Art. 793-A.</span> Responde por perdas e danos aquele que litigar de má-fé como reclamante, reclamado ou interveniente.</p>
        
        <p id="art793b"><span class="artigo">Art. 793-B.</span> Considera-se litigante de má-fé aquele que:</p>
        
        <p id="art793bi">I - deduzir pretensão ou defesa contra texto expresso de lei ou fato incontroverso;</p>
        
        <p id="art793bii">II - alterar a verdade dos fatos;</p>
        
        <p id="art793biii">III - usar do processo para conseguir objetivo ilegal;</p>
        
        <p id="art793biv">IV - opuser resistência injustificada ao andamento do processo;</p>
        
        <p id="art793bv">V - proceder de modo temerário em qualquer incidente ou ato do processo;</p>
        
        <p id="art793bvi">VI - provocar incidente manifestamente infundado;</p>
        
        <p id="art793bvii">VII - interpuser recurso com intuito manifestamente protelatório.</p>
        
        <p id="art793c"><span class="artigo">Art. 793-C.</span> De ofício ou a requerimento, o juízo condenará o litigante de má-fé a pagar multa, que deverá ser superior a 1% (um por cento) e inferior a 10% (dez por cento) do valor corrigido da causa, a indenizar a parte contrária pelos prejuízos que esta sofreu e a arcar com os honorários advocatícios e com todas as despesas que efetuou.</p>
        
        <p id="art793c§1">§ 1º. Quando forem dois ou mais os litigantes de má-fé, o juízo condenará cada um na proporção de seu respectivo interesse na causa ou solidariamente aqueles que se coligaram para lesar a parte contrária.</p>
        
        <p id="art793c§2">§ 2º. Quando o valor da causa for irrisório ou inestimável, a multa poderá ser fixada em até duas vezes o limite máximo dos benefícios do Regime Geral de Previdência Social.</p>
        
        <p id="art793c§3">§ 3º. O valor da indenização será fixado pelo juízo ou, caso não seja possível mensurá-lo, liquidado por arbitramento ou pelo procedimento comum, nos próprios autos.</p>
        
        <p id="art793d"><span class="artigo">Art. 793-D.</span> Aplica-se a multa prevista no art. 793-C desta Consolidação à testemunha que intencionalmente alterar a verdade dos fatos ou omitir fatos essenciais ao julgamento da causa.</p>
        
        <p id="art793dp">Parágrafo único. A execução da multa prevista neste artigo dar-se-á nos mesmos autos.</p>
        
        <h3 id="tituloxcapituloiisecaov">SEÇÃO V<br>
        DAS NULIDADES</h3>
        
        <p><span class="artigo">Art. 794.</span> Nos processos sujeitos à apreciação da Justiça do Trabalho só haverá nulidade quando resultar dos atos inquinados manifesto prejuízo às partes litigantes.</p>
        
        <p id="art795"><span class="artigo">Art. 795.</span> As nulidades não serão declaradas senão mediante provocação das partes, as quais deverão argui-las à primeira vez em que tiverem de falar em audiência ou nos autos.</p>
        
        <p id="art795§1">§ 1º. Deverá, entretanto, ser declarada ex officio a nulidade fundada em incompetência de foro. Nesse caso, serão considerados nulos os atos decisórios.</p>
        
        <p id="art795§2">§ 2º. O juiz ou Tribunal que se julgar incompetente determinará, na mesma ocasião, que se faça remessa do processo, com urgência, à autoridade competente, fundamentando sua decisão.</p>
        
        <p id="art796"><span class="artigo">Art. 796.</span> A nulidade não será pronunciada:</p>
        
        <p id="art796a" class="alinea">a) quando for possível suprir-se a falta ou repetir-se o ato;</p>
        
        <p id="art796b" class="alinea">b) quando arguida por quem lhe tiver dado causa.</p>
        
        <p id="art797"><span class="artigo">Art. 797.</span> O juiz ou Tribunal que pronunciar a nulidade declarará os atos a que ela se estende.</p>
        
        <p id="art798"><span class="artigo">Art. 798.</span> A nulidade do ato não prejudicará senão os posteriores que dele dependam ou sejam consequência.</p>
        
        <h3 id="tituloxcapituloiisecaovi">SEÇÃO VI<br>
        DAS EXCEÇÕES</h3>
        
        <p id="art799"><span class="artigo">Art. 799.</span> Nas causas da jurisdição da Justiça do Trabalho, somente podem ser opostas, com suspensão do feito, as exceções de suspeição ou incompetência. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art799§1.">§ 1º. As demais exceções serão alegadas como matéria de defesa. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art799§2.">§ 2º. Das decisões sobre exceções de suspeição e incompetência, salvo, quanto a estas, se terminativas do feito, não caberá recurso, podendo, no entanto, as partes alegá-las novamente no recurso que couber da decisão final. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art800."><span class="artigo">Art. 800.</span> Apresentada exceção de incompetência territorial no prazo de cinco dias a contar da notificação, antes da audiência e em peça que sinalize a existência desta exceção, seguir-se-á o procedimento estabelecido neste artigo.</p>
        
        <p id="art800§1">§ 1º. Protocolada a petição, será suspenso o processo e não se realizará a audiência a que se refere o art. 843 desta Consolidação até que se decida a exceção.</p>
        
        <p id="art800§2">§ 2º. Os autos serão imediatamente conclusos ao juiz, que intimará o reclamante e, se existentes, os litisconsortes, para manifestação no prazo comum de cinco dias.</p>
        
        <p id="art800§3">§ 3º. Se entender necessária a produção de prova oral, o juízo designará audiência, garantindo o direito de o excipiente e de suas testemunhas serem ouvidos, por carta precatória, no juízo que este houver indicado como competente.</p>
        
        <p id="art800§4">§ 4º. Decidida a exceção de incompetência territorial, o processo retomará seu curso, com a designação de audiência, a apresentação de defesa e a instrução processual perante o juízo competente.</p>
        
        <p id="art801"><span class="artigo">Art. 801.</span> O juiz, presidente ou vogal, é obrigado a dar-se por suspeito, e pode ser recusado, por algum dos seguintes motivos, em relação à pessoa dos litigantes:</p>
        
        <p id="art801a" class="alinea">a) inimizade pessoal;</p>
        
        <p id="art801b" class="alinea">b) amizade íntima;</p>
        
        <p id="art801c" class="alinea">c) parentesco por consanguinidade ou afinidade até o terceiro grau civil;</p>
        
        <p id="art801d" class="alinea">d) interesse particular na causa.</p>
        
        <p id="art801p">Parágrafo único. Se o recusante houver praticado algum ato pelo qual haja consentido na pessoa do juiz, não mais poderá alegar exceção de suspeição, salvo sobrevindo novo motivo. A suspeição não será também admitida, se do processo constar que o recusante deixou de alegá-la anteriormente, quando já a conhecia, ou que, depois de conhecida, aceitou o juiz recusado ou, finalmente, se procurou de propósito o motivo de que ela se originou.</p>
        
        <p id="art802"><span class="artigo">Art. 802.</span> Apresentada a exceção de suspeição, o juiz ou Tribunal designará audiência dentro de 48 (quarenta e oito) horas, para instrução e julgamento da exceção.</p>
        
        <p id="art802§1">§ 1º. Nas Juntas de Conciliação e Julgamento e nos Tribunais Regionais, julgada procedente a exceção de suspeição, será logo convocado para a mesma audiência ou sessão, ou para a seguinte, o suplente do membro suspeito, o qual continuará a funcionar no feito até decisão final. Proceder-se-á da mesma maneira quando algum dos membros se declarar suspeito.</p>
        
        <h3 id=""art802§2"">§ 2º. Se se tratar de suspeição de Juiz de Direito, será este substituído na forma da organização judiciária local.</h3>
        
        <h3 id="tituloxcapituloiisecaovii">SEÇÃO VII<br>
        DOS CONFLITOS DE JURISDIÇÃO</h3>
        
        <p id="art803"><span class="artigo">Art. 803.</span> Os conflitos de jurisdição podem ocorrer entre:</p>
        
        <p id="art803a" class="alinea">a) Juntas de Conciliação e Julgamento e Juízes de Direito investidos na administração da Justiça do Trabalho;</p>
        
        <p id="art803b" class="alinea">b) Tribunais Regionais do Trabalho;</p>
        
        <p id="art803c" class="alinea">c) Juízos e Tribunais do Trabalho e órgãos da Justiça Ordinária;</p>
        
        <p id="art803d" class="alinea">d) Câmaras do Tribunal Superior do Trabalho. (Vide Decreto Lei 8.737, de 1946)</p>
        
        <p id="art804"><span class="artigo">Art. 804.</span> Dar-se-á conflito de jurisdição:</p>
        
        <p id="art804a" class="alinea">a) quando ambas as autoridades se considerarem competentes;</p>
        
        <p id="art804b" class="alinea">b) quando ambas as autoridades se considerarem incompetentes.</p>
        
        <p id="art805"><span class="artigo">Art. 805.</span> Os conflitos de jurisdição podem ser suscitados:</p>
        
        <p id="art805a" class="alinea">a) pelos Juízes e Tribunais do Trabalho;</p>
        
        <p id="art805b" class="alinea">b) pelo procurador-geral e pelos procuradores regionais da Justiça do Trabalho;</p>
        
        <p id="art805c" class="alinea">c) pela parte interessada, ou o seu representante.</p>
        
        <p id="art806"><span class="artigo">Art. 806.</span> É vedado à parte interessada suscitar conflitos de jurisdição quando já houver oposto na causa exceção de incompetência.</p>
        
        <p id="art807"><span class="artigo">Art. 807.</span> No ato de suscitar o conflito deverá a parte interessada produzir a prova de existência dele.</p>
        
        <p id="art808"><span class="artigo">Art. 808.</span> Os conflitos de jurisdição de que trata o art. 803 serão resolvidos:</p>
        
        <p id="art808a" class="alinea">a) pelos Tribunais Regionais, os suscitados entre Juntas e entre Juízos de Direito, ou entre uma e outras, nas respectivas regiões;</p>
        
        <p id="art808b" class="alinea">b) pela Câmara de Justiça do Trabalho, os suscitados entre Tribunais Regionais, ou entre Juntas e Juízos de Direito sujeitos à jurisdição de Tribunais Regionais diferentes;</p>
        
        <p id="art808c" class="alinea">c) pelo Conselho Pleno, os suscitados entre as Câmaras de Justiça do Trabalho e de Previdência Social; (Vide Decreto Lei 9.797, de 1946)</p>
        
        <p id="art808d" class="alinea">d) pelo Supremo Tribunal Federal, os suscitados entre as autoridades da Justiça do Trabalho e as da Justiça Ordinária.</p>
        
        <p id="art809"><span class="artigo">Art. 809.</span> Nos conflitos de jurisdição entre as Juntas e os Juízos de Direito observar-se-á o seguinte:</p>
        
        <p id="art809i">I - o juiz ou presidente mandará extrair dos autos as provas do conflito e, com a sua informação, remeterá o processo assim formado, no mais breve prazo possível, ao Presidente do Tribunal Regional competente;</p>
        
        <p id="art809ii">II - no Tribunal Regional, logo que der entrada o processo, o presidente determinará a distribuição do feito, podendo o relator ordenar imediatamente às Juntas e aos Juízos, nos casos de conflito positivo, que sobrestejam o andamento dos respectivos processos, e solicitar, ao mesmo tempo, quaisquer informações que julgue convenientes. Seguidamente, será ouvida a Procuradoria, após o que o relator submeterá o feito a julgamento na primeira sessão;</p>
        
        <p id="art809iii">III - proferida a decisão, será a mesma comunicada, imediatamente, às autoridades em conflito, prosseguindo no foro julgado competente.</p>
        
        <p id="art810"><span class="artigo">Art. 810.</span> Aos conflitos de jurisdição entre os Tribunais Regionais aplicar-se-ão as normas estabelecidas no artigo anterior.</p>
        
        <p id="art811"><span class="artigo">Art. 811.</span> Nos conflitos suscitados na Justiça do Trabalho entre as autoridades desta e os órgãos da Justiça Ordinária, o processo do conflito, formado de acordo com o inciso I do art. 809, será remetido diretamente ao presidente do Supremo Tribunal Federal.</p>
        
        <h3 id="art812"><span class="artigo">Art. 812.</span> A ordem processual dos conflitos de jurisdição entre as Câmaras do Tribunal Superior do Trabalho será a estabelecida no seu regimento interno. (Vide Decreto Lei 9.797, de 1946)</h3>
        
        <h3 id="tituloxcapituloiisecaoviii">SEÇÃO VIII<br>
        DAS AUDIÊNCIAS</h3>
        
        <p id="art813"><span class="artigo">Art. 813.</span> As audiências dos órgãos da Justiça do Trabalho serão públicas e realizar-se-ão na sede do Juízo ou Tribunal em dias úteis previamente fixados, entre 8 (oito) e 18 (dezoito) horas, não podendo ultrapassar 5 (cinco) horas seguidas, salvo quando houver matéria urgente.</p>
        
        <p id="art813§1">§ 1º. Em casos especiais, poderá ser designado outro local para a realização das audiências, mediante edital afixado na sede do Juízo ou Tribunal, com a antecedência mínima de 24 (vinte e quatro) horas.</p>
        
        <p id="art813§2">§ 2º. Sempre que for necessário, poderão ser convocadas audiências extraordinárias, observado o prazo do parágrafo anterior.</p>
        
        <p id="art814"><span class="artigo">Art. 814.</span> Às audiências deverão estar presentes, comparecendo com a necessária antecedência. os escrivães ou secretários.(Vide Leis nº 409, de 1943 e 6.563, de 1978)</p>
        
        <p id="art815"><span class="artigo">Art. 815.</span> À hora marcada, o juiz ou presidente declarará aberta a audiência, sendo feita pelo secretário ou escrivão a chamada das partes, testemunhas e demais pessoas que devam comparecer. (Vide Leis nº 409, de 1943 e 6.563, de 1978)</p>
        
        <p id="art815§1">§ 1º. Se, até 15 (quinze) minutos após a hora marcada, o juiz ou presidente não houver comparecido, os presentes poderão retirar-se, devendo o ocorrido constar do livro de registro das audiências.</p>
        
        <p>§ 2º. Se, até 30 (trinta) minutos após a hora marcada, a audiência, injustificadamente, não houver sido iniciada, as partes e os advogados poderão retirar-se, consignando seus nomes, devendo o ocorrido constar do livro de registro das audiências.</p>
        
        <p>§ 3º. Na hipótese do § 2º. deste artigo, a audiência deverá ser remarcada pelo juiz ou presidente para a data mais próxima possível, vedada a aplicação de qualquer penalidade às partes.</p>
        
        <p id="art816"><span class="artigo">Art. 816.</span> O juiz ou presidente manterá a ordem nas audiências, podendo mandar retirar do recinto os assistentes que a perturbarem.</p>
        
        <p id="art817"><span class="artigo">Art. 817.</span> O registro das audiências será feito em livro próprio, constando de cada registro os processos apreciados e a respectiva solução, bem como as ocorrências eventuais.</p>
        
        <h3 id="art817p">Parágrafo único. Do registro das audiências poderão ser fornecidas certidões às pessoas que o requererem.</h3>
        
        <h3 id="tituloxcapituloiisecaoix">SEÇÃO IX<br>
        DAS PROVAS</h3>
        
        <p id="art818."><span class="artigo">Art. 818.</span> O ônus da prova incumbe:</p>
        
        <p id="art818i">I - ao reclamante, quanto ao fato constitutivo de seu direito;</p>
        
        <p id="art818ii">II - ao reclamado, quanto à existência de fato impeditivo, modificativo ou extintivo do direito do reclamante.</p>
        
        <p id="art818§1">§ 1º. Nos casos previstos em lei ou diante de peculiaridades da causa relacionadas à impossibilidade ou à excessiva dificuldade de cumprir o encargo nos termos deste artigo ou à maior facilidade de obtenção da prova do fato contrário, poderá o juízo atribuir o ônus da prova de modo diverso, desde que o faça por decisão fundamentada, caso em que deverá dar à parte a oportunidade de se desincumbir do ônus que lhe foi atribuído.</p>
        
        <p id="art818§2">§ 2º. A decisão referida no § 1º. deste artigo deverá ser proferida antes da abertura da instrução e, a requerimento da parte, implicará o adiamento da audiência e possibilitará provar os fatos por qualquer meio em direito admitido.</p>
        
        <p id="art818§3">§ 3º. A decisão referida no § 1º. deste artigo não pode gerar situação em que a de incumbência do encargo pela parte seja impossível ou excessivamente difícil.</p>
        
        <p id="art819"><span class="artigo">Art. 819.</span> O depoimento das partes e testemunhas que não souberem falar a língua nacional será feito por meio de intérprete nomeado pelo juiz ou presidente.</p>
        
        <p id="art819§1">§ 1º. Proceder-se-á da forma indicada neste artigo, quando se tratar de surdo-mudo, ou de mudo que não saiba escrever.</p>
        
        <p id="art819§2.">§ 2º. As despesas decorrentes do disposto neste artigo correrão por conta da parte sucumbente, salvo se beneficiária de justiça gratuita.</p>
        
        <p id="art820"><span class="artigo">Art. 820.</span> As partes e testemunhas serão inquiridas pelo juiz ou presidente, podendo ser reinquiridas, por seu intermédio, a requerimento dos vogais, das partes, seus representantes ou advogados.</p>
        
        <p id="art821"><span class="artigo">Art. 821.</span> Cada uma das partes não poderá indicar mais de 3 (três) testemunhas, salvo quando se tratar de inquérito, caso em que esse número poderá ser elevado a 6 (seis). (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art822"><span class="artigo">Art. 822.</span> As testemunhas não poderão sofrer qualquer desconto pelas faltas ao serviço, ocasionadas pelo seu comparecimento para depor, quando devidamente arroladas ou convocadas.</p>
        
        <p id="art823"><span class="artigo">Art. 823.</span> Se a testemunha for funcionário civil ou militar, e tiver de depor em hora de serviço, será requisitada ao chefe da repartição para comparecer à audiência marcada.</p>
        
        <p id="art824"><span class="artigo">Art. 824.</span> O juiz ou presidente providenciará para que o depoimento de uma testemunha não seja ouvido pelas demais que tenham de depor no processo.</p>
        
        <p id="art825"><span class="artigo">Art. 825.</span> As testemunhas comparecerão a audiência independentemente de notificação ou intimação.</p>
        
        <p id="art825p">Parágrafo único. As que não comparecerem serão intimadas, ex officio ou a requerimento da parte, ficando sujeitas a condução coercitiva, além das penalidades do art. 730, caso, sem motivo justificado, não atendam à intimação.</p>
        
        <p id="art826"><span class="artigo">Art. 826.</span> É facultado a cada uma das partes apresentar um perito ou técnico. (Vide Lei nº 5.584, de 1970)</p>
        
        <p id="art827"><span class="artigo">Art. 827.</span> O juiz ou presidente poderá arguir os peritos compromissados ou os técnicos, e rubricará, para ser junto ao processo, o laudo que os primeiros tiverem apresentado.</p>
        
        <p id="art828"><span class="artigo">Art. 828.</span> Toda testemunha, antes de prestar o compromisso legal, será qualificada, indicando o nome, nacionalidade, profissão, idade, residência, e, quando empregada, o tempo de serviço prestado ao empregador, ficando sujeita, em caso de falsidade, às leis penais.</p>
        
        <p id="art828p">Parágrafo único. Os depoimentos das testemunhas serão resumidos, por ocasião da audiência, pelo secretário da Junta ou funcionário para esse fim designado, devendo a súmula ser assinada pelo Presidente do Tribunal e pelos depoentes.</p>
        
        <p id="art829"><span class="artigo">Art. 829.</span> A testemunha que for parente até o terceiro grau civil, amigo íntimo ou inimigo de qualquer das partes, não prestará compromisso, e seu depoimento valerá como simples informação.</p>
        
        <p id="art830"><span class="artigo">Art. 830.</span> O documento em cópia oferecido para prova poderá ser declarado autêntico pelo próprio advogado, sob sua responsabilidade pessoal..</p>
        
        <h3 id="art830p">Parágrafo único. Impugnada a autenticidade da cópia, a parte que a produziu será intimada para apresentar cópias devidamente autenticadas ou o original, cabendo ao serventuário competente proceder à conferência e certificar a conformidade entre esses documentos..</h3>
        
        <h3 id="tituloxcapituloiisecaox">SEÇÃO X<br>
        DA DECISÃO E SUA EFICÁCIA</h3>
        
        <p id="art831"><span class="artigo">Art. 831.</span> A decisão será proferida depois de rejeitada pelas partes a proposta de conciliação.</p>
        
        <p id="art831p">Parágrafo único. No caso de conciliação, o termo que for lavrado valerá como decisão irrecorrível, salvo para a Previdência Social quanto às contribuições que lhe forem devidas.</p>
        
        <p id="art832"><span class="artigo">Art. 832.</span> Da decisão deverão constar o nome das partes, o resumo do pedido e da defesa, a apreciação das provas, os fundamentos da decisão e a respectiva conclusão.</p>
        
        <p id="art832§1">§ 1º. Quando a decisão concluir pela procedência do pedido, determinará o prazo e as condições para o seu cumprimento.</p>
        
        <p id="art832§2">§ 2º. A decisão mencionará sempre as custas que devam ser pagas pela parte vencida.</p>
        
        <p id="art832§3">§ 3º. As decisões cognitivas ou homologatórias deverão sempre indicar a natureza jurídica das parcelas constantes da condenação ou do acordo homologado, inclusive o limite de responsabilidade de cada parte pelo recolhimento da contribuição previdenciária, se for o caso.</p>
        
        <p id="art832§3a">§ 3º-A. Para os fins do § 3º. deste artigo, salvo na hipótese de o pedido da ação limitar-se expressamente ao reconhecimento de verbas de natureza exclusivamente indenizatória, a parcela referente às verbas de natureza remuneratória não poderá ter como base de cálculo valor inferior:</p>
        
        <p>I - ao salário-mínimo, para as competências que integram o vínculo empregatício reconhecido na decisão cognitiva ou homologatória; ou</p>
        
        <p>II - à diferença entre a remuneração reconhecida como devida na decisão cognitiva ou homologatória e a efetivamente paga pelo empregador, cujo valor total referente a cada competência não será inferior ao salário-mínimo.</p>
        
        <p>§ 3º-B Caso haja piso salarial da categoria definido por acordo ou convenção coletiva de trabalho, o seu valor deverá ser utilizado como base de cálculo para os fins do § 3º-A deste artigo.</p>
        
        <p id="art832§4">§ 4º. A União será intimada das decisões homologatórias de acordos que contenham parcela indenizatória, na forma do art. 20 da Lei no 11.033, de 21 de dezembro de 2004, facultada a interposição de recurso relativo aos tributos que lhe forem devidos.</p>
        
        <p id="art832§5">§ 5º. Intimada da sentença, a União poderá interpor recurso relativo à discriminação de que trata o § 3º. deste artigo.</p>
        
        <p id="art832§6">§ 6º. O acordo celebrado após o trânsito em julgado da sentença ou após a elaboração dos cálculos de liquidação de sentença não prejudicará os créditos da União.</p>
        
        <p id="art832§7">§ 7º. O Ministro de Estado da Fazenda poderá, mediante ato fundamentado, dispensar a manifestação da União nas decisões homologatórias de acordos em que o montante da parcela indenizatória envolvida ocasionar perda de escala decorrente da atuação do órgão jurídico.</p>
        
        <p id="art833"><span class="artigo">Art. 833.</span> Existindo na decisão evidentes erros ou enganos de escrita, de datilografia ou de cálculo, poderão os mesmos, antes da execução, ser corrigidos, ex officio, ou a requerimento dos interessados ou da Procuradoria da Justiça do Trabalho.</p>
        
        <p id="art834"><span class="artigo">Art. 834.</span> Salvo nos casos previstos nesta Consolidação, a publicação das decisões e sua notificação aos litigantes, ou a seus patronos, consideram-se realizadas nas próprias audiências em que forem as mesmas proferidas.</p>
        
        <p id="art835"><span class="artigo">Art. 835.</span> O cumprimento do acordo ou da decisão far-se-á no prazo e condições estabelecidas.</p>
        
        <p id="art836.."><span class="artigo">Art. 836.</span> É vedado aos órgãos da Justiça do Trabalho conhecer de questões já decididas, excetuados os casos expressamente previstos neste Título e a ação rescisória, que será admitida na forma do disposto no Capítulo IV do Título IX da Lei no 5.869, de 11 de janeiro de 1973 – Código de Processo Civil, sujeita ao depósito prévio de 20% (vinte por cento) do valor da causa, salvo prova de miserabilidade jurídica do autor.</p>
        
        <p id="art836p">Parágrafo único. A execução da decisão proferida em ação rescisória far-se-á nos próprios autos da ação que lhe deu origem, e será instruída com o acórdão da rescisória e a respectiva certidão de trânsito em julgado. (Incluído pela Medida provisória nº 2.180-35, de 2001)</p>
        
        <h2 id="tituloxcapituloiii">CAPÍTULO III<br>
        DOS DISSÍDIOS INDIVIDUAIS</h2>
        
        <h3 id="tituloxcapituloiiisecaoi">SEÇÃO I<br>
        DA FORMA DE RECLAMAÇÃO E DA NOTIFICAÇÃO</h3>
        
        <p id="art837"><span class="artigo">Art. 837.</span> Nas localidades em que houver apenas 1 (uma) Junta de Conciliação e Julgamento, ou 1 (um) escrivão do cível, a reclamação será apresentada diretamente à secretaria da Junta, ou ao cartório do Juízo.</p>
        
        <p id="art838"><span class="artigo">Art. 838.</span> Nas localidades em que houver mais de 1 (uma) Junta ou mais de 1 (um) Juízo, ou escrivão do cível, a reclamação será, preliminarmente, sujeita a distribuição, na forma do disposto no Capítulo II, Seção II, deste Título.</p>
        
        <p id="art839"><span class="artigo">Art. 839.</span> A reclamação poderá ser apresentada:</p>
        
        <p id="art839a" class="alinea">a) pelos empregados e empregadores, pessoalmente, ou por seus representantes, e pelos sindicatos de classe;</p>
        
        <p id="art839b" class="alinea">b) por intermédio das Procuradorias Regionais da Justiça do Trabalho.</p>
        
        <p id="art840"><span class="artigo">Art. 840.</span> A reclamação poderá ser escrita ou verbal.</p>
        
        <p id="art840§1.">§ 1º. Sendo escrita, a reclamação deverá conter a designação do juízo, a qualificação das partes, a breve exposição dos fatos de que resulte o dissídio, o pedido, que deverá ser certo, determinado e com indicação de seu valor, a data e a assinatura do reclamante ou de seu representante.</p>
        
        <p id="art840§2.">§ 2º. Se verbal, a reclamação será reduzida a termo, em duas vias datadas e assinadas pelo escrivão ou secretário, observado, no que couber, o disposto no § 1º. deste artigo.</p>
        
        <p id="art840§3">§ 3º. Os pedidos que não atendam ao disposto no § 1º. deste artigo serão julgados extintos sem resolução do mérito.</p>
        
        <p id="art841"><span class="artigo">Art. 841.</span> Recebida e protocolada a reclamação, o escrivão ou secretário, dentro de 48 (quarenta e oito) horas, remeterá a segunda via da petição, ou do termo, ao reclamado, notificando-o ao mesmo tempo, para comparecer à audiência do julgamento, que será a primeira desimpedida, depois de 5 (cinco) dias.</p>
        
        <p id="art841§1">§ 1º. A notificação será feita em registro postal com franquia. Se o reclamado criar embaraços ao seu recebimento ou não for encontrado, far-se-á a notificação por edital, inserto no jornal oficial ou no que publicar o expediente forense, ou, na falta, afixado na sede da Junta ou Juízo.</p>
        
        <p id="art841§2">§ 2º. O reclamante será notificado no ato da apresentação da reclamação ou na forma do parágrafo anterior.</p>
        
        <p id="art841§3">§ 3º. Oferecida a contestação, ainda que eletronicamente, o reclamante não poderá, sem o consentimento do reclamado, desistir da ação.</p>
        
        <p id="art842"><span class="artigo">Art. 842.</span> Sendo várias as reclamações e havendo identidade de matéria, poderão ser acumuladas num só processo, se se tratar de empregados da mesma empresa ou estabelecimento.</p>
        
        <h3 id="tituloxcapituloiiisecaoii">SEÇÃO II<br>
        DA AUDIÊNCIA DE JULGAMENTO</h3>
        
        <p id="art843"><span class="artigo">Art. 843.</span> Na audiência de julgamento deverão estar presentes o reclamante e o reclamado, independentemente do comparecimento de seus representantes salvo, nos casos de Reclamatórias Plúrimas ou Ações de Cumprimento, quando os empregados poderão fazer-se representar pelo Sindicato de sua categoria.</p>
        
        <p id="art843§1">§ 1º. É facultado ao empregador fazer-se substituir pelo gerente, ou qualquer outro preposto que tenha conhecimento do fato, e cujas declarações obrigarão o proponente.</p>
        
        <p id="art843§2">§ 2º. Se por doença ou qualquer outro motivo poderoso, devidamente comprovado, não for possível ao empregado comparecer pessoalmente, poderá fazer-se representar por outro empregado que pertença à mesma profissão, ou pelo seu sindicato.</p>
        
        <p id="art843§3">§ 3º. O preposto a que se refere o § 1º. deste artigo não precisa ser empregado da parte reclamada.</p>
        
        <p id="art844"><span class="artigo">Art. 844.</span> O não-comparecimento do reclamante à audiência importa o arquivamento da reclamação, e o não-comparecimento do reclamado importa revelia, além de confissão quanto à matéria de fato.</p>
        
        <p id="art844§1">§ 1º. Ocorrendo motivo relevante, poderá o juiz suspender o julgamento, designando nova audiência.</p>
        
        <p id="art844§2">§ 2º. Na hipótese de ausência do reclamante, este será condenado ao pagamento das custas calculadas na forma do art. 789 desta Consolidação, ainda que beneficiário da justiça gratuita, salvo se comprovar, no prazo de quinze dias, que a ausência ocorreu por motivo legalmente justificável. (Vide ADIN 5766)</p>
        
        <p id="art844§3">§ 3º. O pagamento das custas a que se refere o § 2º. é condição para a propositura de nova demanda.</p>
        
        <p id="art844§4">§ 4º. A revelia não produz o efeito mencionado no caput deste artigo se:</p>
        
        <p id="art844§4i">I - havendo pluralidade de reclamados, algum deles contestar a ação;</p>
        
        <p id="art844§4ii">II - o litígio versar sobre direitos indisponíveis;</p>
        
        <p id="art844§4iii">III - a petição inicial não estiver acompanhada de instrumento que a lei considere indispensável à prova do ato;</p>
        
        <p id="art844§4iv">IV - as alegações de fato formuladas pelo reclamante forem inverossímeis ou estiverem em contradição com prova constante dos autos.</p>
        
        <p id="art844§5">§ 5º. Ainda que ausente o reclamado, presente o advogado na audiência, serão aceitos a contestação e os documentos eventualmente apresentados.</p>
        
        <p id="art845"><span class="artigo">Art. 845.</span> O reclamante e o reclamado comparecerão à audiência acompanhados das suas testemunhas, apresentando, nessa ocasião, as demais provas.</p>
        
        <p id="art846"><span class="artigo">Art. 846.</span> Aberta a audiência, o juiz ou presidente proporá a conciliação.</p>
        
        <p id="art846§1">§ 1º. Se houver acordo lavrar-se-á termo, assinado pelo presidente e pelos litigantes, consignando-se o prazo e demais condições para seu cumprimento.</p>
        
        <p id="art846§2">§ 2º. Entre as condições a que se refere o parágrafo anterior, poderá ser estabelecida a de ficar a parte que não cumprir o acordo obrigada a satisfazer integralmente o pedido ou pagar uma indenização convencionada, sem prejuízo do cumprimento do acordo.</p>
        
        <p id="art847"><span class="artigo">Art. 847.</span> Não havendo acordo, o reclamado terá vinte minutos para aduzir sua defesa, após a leitura da reclamação, quando esta não for dispensada por ambas as partes.</p>
        
        <p id="art847p">Parágrafo único. A parte poderá apresentar defesa escrita pelo sistema de processo judicial eletrônico até a audiência.</p>
        
        <p id="art848"><span class="artigo">Art. 848.</span> Terminada a defesa, seguir-se-á a instrução do processo, podendo o presidente, ex officio ou a requerimento de qualquer juiz temporário, interrogar os litigantes.</p>
        
        <p id="art848§1">§ 1º. Findo o interrogatório, poderá qualquer dos litigantes retirar-se, prosseguindo a instrução com o seu representante.</p>
        
        <p id="art848§2">§ 2º. Serão, a seguir, ouvidas as testemunhas, os peritos e os técnicos, se houver.</p>
        
        <p id="art849"><span class="artigo">Art. 849.</span> A audiência de julgamento será contínua; mas, se não for possível, por motivo de força maior, concluí-la no mesmo dia, o juiz ou presidente marcará a sua continuação para a primeira desimpedida, independentemente de nova notificação.</p>
        
        <p id="art850"><span class="artigo">Art. 850.</span> Terminada a instrução, poderão as partes aduzir razões finais, em prazo não excedente de 10 (dez) minutos para cada uma. Em seguida, o juiz ou presidente renovará a proposta de conciliação, e não se realizando esta, será proferida a decisão.</p>
        
        <p id="art850p">Parágrafo único. O Presidente da Junta, após propor a solução do dissídio, tomará os votos dos vogais e, havendo divergência entre estes, poderá desempatar ou proferir decisão que melhor atenda ao cumprimento da lei e ao justo equilíbrio entre os votos divergentes e ao interesse social.</p>
        
        <p id="art851"><span class="artigo">Art. 851.</span> Os tramites de instrução e julgamento da reclamação serão resumidos em ata, de que constará, na íntegra, a decisão. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art851§1">§ 1º. Nos processos de exclusiva alçada das Juntas, será dispensável, a juízo do presidente, o resumo dos depoimentos, devendo constar da ata a conclusão do Tribunal quanto à matéria de fato. (Incluído pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art851§2">§ 2º. A ata será, pelo presidente ou juiz, junta ao processo, devidamente assinada, no prazo improrrogável de 48 (quarenta e oito) horas, contado da audiência de julgamento, e assinada pelos juízes classistas presentes à mesma audiência. (Parágrafo único renumerado e alterado pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art852"><span class="artigo">Art. 852.</span> Da decisão serão os litigantes notificados, pessoalmente, ou por seu representante, na própria audiência. No caso de revelia, a notificação far-se-á pela forma estabelecida no § 1º. do art. 841.</p>
        
        <h3 id="tituloxcapituloiiisecaoiia">SEÇÃO II-A <br>
        DO PROCEDIMENTO SUMARÍSSIMO</h3>
        
        <p id="art852a"><span class="artigo">Art. 852-A.</span> Os dissídios individuais cujo valor não exceda a quarenta vezes o salário mínimo vigente na data do ajuizamento da reclamação ficam submetidos ao procedimento sumaríssimo.</p>
        
        <p id="art852ap">Parágrafo único. Estão excluídas do procedimento sumaríssimo as demandas em que é parte a Administração Pública direta, autárquica e fundacional.</p>
        
        <p id="art852b"><span class="artigo">Art. 852-B.</span> Nas reclamações enquadradas no procedimento sumaríssimo:</p>
        
        <p id="art852bi">I - o pedido deverá ser certo ou determinado e indicará o valor correspondente;</p>
        
        <p id="art852bii">II - não se fará citação por edital, incumbindo ao autor a correta indicação do nome e endereço do reclamado; (Vide ADIN 2139) (Vide ADIN 2160) (Vide ADIN 2237)</p>
        
        <p id="art852biii">III - a apreciação da reclamação deverá ocorrer no prazo máximo de quinze dias do seu ajuizamento, podendo constar de pauta especial, se necessário, de acordo com o movimento judiciário da Junta de Conciliação e Julgamento.</p>
        
        <p id="art852b§1">§ 1º. O não atendimento, pelo reclamante, do disposto nos incisos I e II deste artigo importará no arquivamento da reclamação e condenação ao pagamento de custas sobre o valor da causa.</p>
        
        <p id="art852b§2">§ 2º. As partes e advogados comunicarão ao juízo as mudanças de endereço ocorridas no curso do processo, reputando-se eficazes as intimações enviadas ao local anteriormente indicado, na ausência de comunicação.</p>
        
        <p><span class="artigo">Art. 852-C.</span> As demandas sujeitas a rito sumaríssimo serão instruídas e julgadas em audiência única, sob a direção de juiz presidente ou substituto, que poderá ser convocado para atuar simultaneamente com o titular.</p>
        
        <p id="art852d"><span class="artigo">Art. 852-D.</span> O juiz dirigirá o processo com liberdade para determinar as provas a serem produzidas, considerado o ônus probatório de cada litigante, podendo limitar ou excluir as que considerar excessivas, impertinentes ou protelatórias, bem como para apreciá-las e dar especial valor às regras de experiência comum ou técnica.</p>
        
        <p id="art852e"><span class="artigo">Art. 852-E.</span> Aberta a sessão, o juiz esclarecerá as partes presentes sobre as vantagens da conciliação e usará os meios adequados de persuasão para a solução conciliatória do litígio, em qualquer fase da audiência.</p>
        
        <p id="art852f"><span class="artigo">Art. 852-F.</span> Na ata de audiência serão registrados resumidamente os atos essenciais, as afirmações fundamentais das partes e as informações úteis à solução da causa trazidas pela prova testemunhal.</p>
        
        <p id="art852g"><span class="artigo">Art. 852-G.</span> Serão decididos, de plano, todos os incidentes e exceções que possam interferir no prosseguimento da audiência e do processo. As demais questões serão decididas na sentença.</p>
        
        <p id="art852h"><span class="artigo">Art. 852-H.</span> Todas as provas serão produzidas na audiência de instrução e julgamento, ainda que não requeridas previamente.</p>
        
        <p id="art852h§1">§ 1º. Sobre os documentos apresentados por uma das partes manifestar-se-á imediatamente a parte contrária, sem interrupção da audiência, salvo absoluta impossibilidade, a critério do juiz.</p>
        
        <p id="art852h§2">§ 2º. As testemunhas, até o máximo de duas para cada parte, comparecerão à audiência de instrução e julgamento independentemente de intimação.</p>
        
        <p id="art852h§3">§ 3º. Só será deferida intimação de testemunha que, comprovadamente convidada, deixar de comparecer. Não comparecendo a testemunha intimada, o juiz poderá determinar sua imediata condução coercitiva.</p>
        
        <p id="art852h§4">§ 4º. Somente quando a prova do fato o exigir, ou for legalmente imposta, será deferida prova técnica, incumbindo ao juiz, desde logo, fixar o prazo, o objeto da perícia e nomear perito.</p>
        
        <p id="art852h§5">§ 5º (VETADO)</p>
        
        <p id="art852h§6">§ 6º. As partes serão intimadas a manifestar-se sobre o laudo, no prazo comum de cinco dias.</p>
        
        <p id="art852h§7">§ 7º. Interrompida a audiência, o seu prosseguimento e a solução do processo dar-se-ão no prazo máximo de trinta dias, salvo motivo relevante justificado nos autos pelo juiz da causa.</p>
        
        <p><span class="artigo">Art. 852-I.</span> A sentença mencionará os elementos de convicção do juízo, com resumo dos fatos relevantes ocorridos em audiência, dispensado o relatório.</p>
        
        <p id="art852i§1">§ 1º. O juízo adotará em cada caso a decisão que reputar mais justa e equânime, atendendo aos fins sociais da lei e as exigências do bem comum.</p>
        
        <p id="art852i§2">§ 2º (VETADO)</p>
        
        <h3 id=""art852i§3"">§ 3º. As partes serão intimadas da sentença na própria audiência em que prolatada.</h3>
        
        <h3 id="tituloxcapituloiiisecaoiii">SEÇÃO III<br>
        DO INQUÉRITO PARA APURAÇÃO DE FALTA GRAVE</h3>
        
        <p id="art853"><span class="artigo">Art. 853.</span> Para a instauração do inquérito para apuração de falta grave contra empregado garantido com estabilidade, o empregador apresentará reclamação por escrito à Junta ou Juízo de Direito, dentro de 30 (trinta) dias, contados da data da suspensão do empregado.</p>
        
        <p id="art854"><span class="artigo">Art. 854.</span> O processo do inquérito perante a Junta ou Juízo obedecerá às normas estabelecidas no presente Capítulo, observadas as disposições desta Seção.</p>
        
        <p id="art855"><span class="artigo">Art. 855.</span> Se tiver havido prévio reconhecimento da estabilidade do empregado, o julgamento do inquérito pela Junta ou Juízo não prejudicará a execução para pagamento dos salários devidos ao empregado, até a data da instauração do mesmo inquérito.</p>
        
        <h3 id="tituloxcapituloiiisecaoiv">SEÇÃO IV<br>
        DO INCIDENTE DE DESCONSIDERAÇÃO DA PERSONALIDADE JURÍDICA</h3>
        
        <p id="art855a"><span class="artigo">Art. 855-A.</span> Aplica-se ao processo do trabalho o incidente de desconsideração da personalidade jurídica previsto nos arts. 133 a 137 da Lei no 13.105, de 16 de março de 2015. Código de Processo Civil.</p>
        
        <p id="art855a§1">§ 1º. Da decisão interlocutória que acolher ou rejeitar o incidente:</p>
        
        <p id="art855a§1i">I - na fase de cognição, não cabe recurso de imediato, na forma do § 1º. do art. 893 desta Consolidação;</p>
        
        <p id="art855a§1ii">II - na fase de execução, cabe agravo de petição, independentemente de garantia do juízo;</p>
        
        <p id="art855a§1iii">III - cabe agravo interno se proferida pelo relator em incidente instaurado originariamente no tribunal.</p>
        
        <p id="art855a§2">§ 2º. A instauração do incidente suspenderá o processo, sem prejuízo de concessão da tutela de urgência de natureza cautelar de que trata o art. 301 da Lei no 13.105, de 16 de março de 2015 (Código de Processo Civil)</p>
        
        <h2>CAPÍTULO III-A<br>
        DO PROCESSO DE JURISDIÇÃO VOLUNTÁRIA PARA HOMOLOGAÇÃO DE ACORDO EXTRAJUDICIAL</h2>
        
        <p id="art855b"><span class="artigo">Art. 855-B.</span> O processo de homologação de acordo extrajudicial terá início por petição conjunta, sendo obrigatória a representação das partes por advogado.</p>
        
        <p id="art855b§1">§ 1º. As partes não poderão ser representadas por advogado comum.</p>
        
        <p id="art855b§2">§ 2º. Faculta-se ao trabalhador ser assistido pelo advogado do sindicato de sua categoria.</p>
        
        <p id="art855c"><span class="artigo">Art. 855-C.</span> O disposto neste Capítulo não prejudica o prazo estabelecido no § 6º. do art. 477 desta Consolidação e não afasta a aplicação da multa prevista no § 8º.</p>
        
        <p>Art. 477 desta Consolidação.</p>
        
        <p id="art855d"><span class="artigo">Art. 855-D.</span> No prazo de quinze dias a contar da distribuição da petição, o juiz analisará o acordo, designará audiência se entender necessário e proferirá sentença.</p>
        
        <p id="art855e"><span class="artigo">Art. 855-E.</span> A petição de homologação de acordo extrajudicial suspende o prazo prescricional da ação quanto aos direitos nela especificados.</p>
        
        <p id="art855ep">Parágrafo único. O prazo prescricional voltará a fluir no dia útil seguinte ao do trânsito em julgado da decisão que negar a homologação do acordo.</p>
        
        <h2 id="tituloxcapituloiv">CAPÍTULO IV<br>
        DOS DISSÍDIOS COLETIVOS</h2>
        
        <h3 id="tituloxcapituloivsecaoi">SEÇÃO I<br>
        DA INSTAURAÇÃO DA INSTÂNCIA</h3>
        
        <p id="art856"><span class="artigo">Art. 856.</span> A instância será instaurada mediante representação escrita ao Presidente do Tribunal. Poderá ser também instaurada por iniciativa do presidente, ou, ainda, a requerimento da Procuradoria da Justiça do Trabalho, sempre que ocorrer suspensão do trabalho.</p>
        
        <p><span class="artigo">Art. 857.</span> A representação para instaurar a instância em dissídio coletivo constitui prerrogativa das associações sindicais, excluídas as hipóteses aludidas no art. 856, quando ocorrer suspensão do trabalho. (Redação dada pelo Decreto-lei nº 7.321, de 14.2.1945)</p>
        
        <p id="art857p.">Parágrafo único. Quando não houver sindicato representativo da categoria econômica ou profissional, poderá a representação ser instaurada pelas federações correspondentes e, na falta destas, pelas confederações respectivas, no âmbito de sua representação.</p>
        
        <p id="art858"><span class="artigo">Art. 858.</span> A representação será apresentada em tantas vias quantos forem os reclamados e deverá conter:</p>
        
        <p id="art858a" class="alinea">a) designação e qualificação dos reclamantes e dos reclamados e a natureza do estabelecimento ou do serviço;</p>
        
        <p id="art858b" class="alinea">b) os motivos do dissídio e as bases da conciliação.</p>
        
        <p id="art859"><span class="artigo">Art. 859.</span> A representação dos sindicatos para instauração da instância fica subordinada à aprovação de assembleia, da qual participem os associados interessados na solução do dissídio coletivo, em primeira convocação, por maioria de 2/3 (dois terços) dos mesmos, ou, em segunda convocação, por 2/3 (dois terços) dos presentes. (Redação dada pelo Decreto-lei nº 7.321, de 14.2.1945)</p>
        
        <p id="art859p.">Parágrafo único. Quando verbal, a representação será feita ao presidente do tribunal ou à Procuradoria da Justiça do Trabalho, sendo reduzida a termo pelo funcionário designado para esse fim. (Revogado pelo Decreto-lei nº 7.321, de 14.2.1945)</p>
        
        <h3 id="tituloxcapituloivsecaoii">SEÇÃO II<br>
        DA CONCILIAÇÃO E DO JULGAMENTO</h3>
        
        <p id="art860"><span class="artigo">Art. 860.</span> Recebida e protocolada a representação, e estando na devida forma, o Presidente do Tribunal designará a audiência de conciliação, dentro do prazo de 10 (dez) dias, determinando a notificação dos dissidentes, com observância do disposto no art. 841.</p>
        
        <p id="art860p">Parágrafo único. Quando a instância for instaurada ex officio, a audiência deverá ser realizada dentro do prazo mais breve possível, após o reconhecimento do dissídio.</p>
        
        <p id="art861"><span class="artigo">Art. 861.</span> É facultado ao empregador fazer-se representar na audiência pelo gerente, ou por qualquer outro preposto que tenha conhecimento do dissídio, e por cujas declarações será sempre responsável.</p>
        
        <p id="art862"><span class="artigo">Art. 862.</span> Na audiência designada, comparecendo ambas as partes ou seus representantes, o Presidente do Tribunal as convidará para se pronunciarem sobre as bases da conciliação. Caso não sejam aceitas as bases propostas, o Presidente submeterá aos interessados a solução que lhe pareça capaz de resolver o dissídio.</p>
        
        <p id="art863"><span class="artigo">Art. 863.</span> Havendo acordo, o Presidente o submeterá à homologação do Tribunal na primeira sessão.</p>
        
        <p id="art864"><span class="artigo">Art. 864.</span> Não havendo acordo, ou não comparecendo ambas as partes ou uma delas, o presidente submeterá o processo a julgamento, depois de realizadas as diligências que entender necessárias e ouvida a Procuradoria. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art865"><span class="artigo">Art. 865.</span> Sempre que, no decorrer do dissídio, houver ameaça de perturbação da ordem, o presidente requisitará à autoridade competente as providências que se tornarem necessárias.</p>
        
        <p id="art866"><span class="artigo">Art. 866.</span> Quando o dissídio ocorrer fora da sede do Tribunal, poderá o presidente, se julgar conveniente, delegar à autoridade local as atribuições de que tratam os arts. 860 e 862. Nesse caso, não havendo conciliação, a autoridade delegada encaminhará o processo ao Tribunal, fazendo exposição circunstanciada dos fatos e indicando a solução que lhe parecer conveniente.</p>
        
        <p id="art867"><span class="artigo">Art. 867.</span> Da decisão do Tribunal serão notificadas as partes, ou seus representantes, em registrado postal, com franquia, fazendo-se, outrossim, a sua publicação no jornal oficial, para ciência dos demais interessados.</p>
        
        <p id="art867p">Parágrafo único. A sentença normativa vigorará: (Incluído pelo Decreto-lei nº 424, de 21.1.1969)</p>
        
        <p id="art867pa" class="alinea">a) a partir da data de sua publicação, quando ajuizado o dissídio após o prazo do art. 616, § 3º, ou, quando não existir acordo, convenção ou sentença normativa em vigor, da data do ajuizamento; (Incluída pelo Decreto-lei nº 424, de 21.1.1969)</p>
        
        <p id="art867pb" class="alinea">b) a partir do dia imediato ao termo final de vigência do acordo, convenção ou sentença normativa, quando ajuizado o dissídio no prazo do art. 616, § 3º. (Incluída pelo Decreto-lei nº 424, de 21.1.1969)</p>
        
        <h3 id="tituloxcapituloivsecaoiii">SEÇÃO III<br>
        DA EXTENSÃO DAS DECISÕES</h3>
        
        <p id="art868"><span class="artigo">Art. 868.</span> Em caso de dissídio coletivo que tenha por motivo novas condições de trabalho e no qual figure como parte apenas uma fração de empregados de uma empresa, poderá o Tribunal competente, na própria decisão, estender tais condições de trabalho, se julgar justo e conveniente, aos demais empregados da empresa que forem da mesma profissão dos dissidentes.</p>
        
        <p id="art868p">Parágrafo único. O Tribunal fixará a data em que a decisão deve entrar em execução, bem como o prazo de sua vigência, o qual não poderá ser superior a 4 (quatro) anos.</p>
        
        <p id="art869"><span class="artigo">Art. 869.</span> A decisão sobre novas condições de trabalho poderá também ser estendida a todos os empregados da mesma categoria profissional compreendida na jurisdição do Tribunal:</p>
        
        <p id="art869a" class="alinea">a) por solicitação de 1 (um) ou mais empregadores, ou de qualquer sindicato destes;</p>
        
        <p id="art869b" class="alinea">b) por solicitação de 1 (um) ou mais sindicatos de empregados;</p>
        
        <p id="art869c" class="alinea">c) ex officio, pelo Tribunal que houver proferido a decisão;</p>
        
        <p id="art869d" class="alinea">d) por solicitação da Procuradoria da Justiça do Trabalho.</p>
        
        <p id="art870"><span class="artigo">Art. 870.</span> Para que a decisão possa ser estendida, na forma do artigo anterior, torna-se preciso que 3/4 (três quartos) dos empregadores e 3/4 (três quartos) dos empregados, ou os respectivos sindicatos, concordem com a extensão da decisão.</p>
        
        <p id="art870§1">§ 1º. O Tribunal competente marcará prazo, não inferior a 30 (trinta) nem superior a 60 (sessenta) dias, a fim de que se manifestem os interessados.</p>
        
        <p id="art870§2">§ 2º. Ouvidos os interessados e a Procuradoria da Justiça do Trabalho, será o processo submetido ao julgamento do Tribunal.</p>
        
        <p id="art871"><span class="artigo">Art. 871.</span> Sempre que o Tribunal estender a decisão, marcará a data em que a extensão deva entrar em vigor.</p>
        
        <h3 id="tituloxcapituloivsecaoiv">SEÇÃO IV<br>
        DO CUMPRIMENTO DAS DECISÕES</h3>
        
        <p id="art872"><span class="artigo">Art. 872.</span> Celebrado o acordo, ou transitada em julgado a decisão, seguir-se-á o seu cumprimento, sob as penas estabelecidas neste Título.</p>
        
        <p id="art872p">Parágrafo único. Quando os empregadores deixarem de satisfazer o pagamento de salários, na conformidade da decisão proferida, poderão os empregados ou seus sindicatos, independentes de outorga de poderes de seus associados, juntando certidão de tal decisão, apresentar reclamação à Junta ou Juízo competente, observado o processo previsto no Capítulo II deste Título, sendo vedado, porém, questionar sobre a matéria de fato e de direito já apreciada na decisão.</p>
        
        <h3 id="tituloxcapituloivsecaov">SEÇÃO V<br>
        DA REVISÃO</h3>
        
        <p id="art873"><span class="artigo">Art. 873.</span> Decorrido mais de 1 (um) ano de sua vigência, caberá revisão das decisões que fixarem condições de trabalho, quando se tiverem modificado as circunstâncias que as ditaram, de modo que tais condições se hajam tornado injustas ou inaplicáveis.</p>
        
        <p id="art874"><span class="artigo">Art. 874.</span> A revisão poderá ser promovida por iniciativa do Tribunal prolator, da Procuradoria da Justiça do Trabalho, das associações sindicais ou de empregador ou empregadores interessados no cumprimento da decisão.</p>
        
        <p id="art874p">Parágrafo único. Quando a revisão for promovida por iniciativa do Tribunal prolator ou da Procuradoria, as associações sindicais e o empregador ou empregadores interessados serão ouvidos no prazo de 30 (trinta) dias. Quando promovida por uma das partes interessadas, serão as outras ouvidas também por igual prazo.</p>
        
        <p id="art875"><span class="artigo">Art. 875.</span> A revisão será julgada pelo Tribunal que tiver proferido a decisão, depois de ouvida a Procuradoria da Justiça do Trabalho.</p>
        
        <h2 id="tituloxcapitulov">CAPÍTULO V<br>
        DA EXECUÇÃO</h2>
        
        <h3 id="tituloxcapitulovsecaoi"><span class=Ttulo3Char><span>SEÇÃO</span></span> I<br>
        DAS DISPOSIÇÕES PRELIMINARES</h3>
        
        <p id="art876"><span class="artigo">Art. 876.</span> As decisões passadas em julgado ou das quais não tenha havido recurso com efeito suspensivo; os acordos, quando não cumpridos; os termos de ajuste de conduta firmados perante o Ministério Público do Trabalho e os termos de conciliação firmados perante as Comissões de Conciliação Prévia serão executadas pela forma estabelecida neste Capítulo.</p>
        
        <p id="art876p..">Parágrafo único. A Justiça do Trabalho executará, de ofício, as contribuições sociais previstas na alínea a do inciso I e no inciso II do caput do art. 195 da Constituição Federal, e seus acréscimos legais, relativas ao objeto da condenação constante das sentenças que proferir e dos acordos que homologar.</p>
        
        <p id="art877"><span class="artigo">Art. 877.</span> É competente para a execução das decisões o Juiz ou Presidente do Tribunal que tiver conciliado ou julgado originariamente o dissídio.</p>
        
        <p>Art. 877-A - É competente para a execução de título executivo extrajudicial o juiz que teria competência para o processo de conhecimento relativo à matéria.</p>
        
        <p id="art878."><span class="artigo">Art. 878.</span> A execução será promovida pelas partes, permitida a execução de ofício pelo juiz ou pelo Presidente do Tribunal apenas nos casos em que as partes não estiverem representadas por advogado.</p>
        
        <p id="art878p.">Parágrafo único. (Revogado).</p>
        
        <p><span class="artigo">Art. 878-A.</span> Faculta-se ao devedor o pagamento imediato da parte que entender devida à Previdência Social, sem prejuízo da cobrança de eventuais diferenças encontradas na execução ex officio.</p>
        
        <p id="art879"><span class="artigo">Art. 879.</span> Sendo ilíquida a sentença exequenda, ordenar-se-á, previamente, a sua liquidação, que poderá ser feita por cálculo, por arbitramento ou por artigos.</p>
        
        <p id="art879§1">§ 1º. Na liquidação, não se poderá modificar, ou inovar, a sentença liquidanda nem discutir matéria pertinente à causa principal. (Incluído pela Lei nº 8.432, 11.6.1992)</p>
        
        <p id="art879§1a">§ 1o-A. A liquidação abrangerá, também, o cálculo das contribuições previdenciárias devidas.</p>
        
        <p id="art879§1b">§ 1o-B. As partes deverão ser previamente intimadas para a apresentação do cálculo de liquidação, inclusive da contribuição previdenciária incidente.</p>
        
        <p id="art879§2.">§ 2º. Elaborada a conta e tornada líquida, o juízo deverá abrir às partes prazo comum de oito dias para impugnação fundamentada com a indicação dos itens e valores objeto da discordância, sob pena de preclusão.</p>
        
        <p id="art879§3">§ 3º. Elaborada a conta pela parte ou pelos órgãos auxiliares da Justiça do Trabalho, o juiz procederá à intimação da União para manifestação, no prazo de 10 (dez) dias, sob pena de preclusão.</p>
        
        <p id="art879§4">§ 4º. A atualização do crédito devido à Previdência Social observará os critérios estabelecidos na legislação previdenciária.</p>
        
        <p id="art879§5">§ 5º. O Ministro de Estado da Fazenda poderá, mediante ato fundamentado, dispensar a manifestação da União quando o valor total das verbas que integram o salário-de-contribuição, na forma do art. 28 da Lei no 8.212, de 24 de julho de 1991, ocasionar perda de escala decorrente da atuação do órgão jurídico.</p>
        
        <p id="art879§6">§ 6º. Tratando-se de cálculos de liquidação complexos, o juiz poderá nomear perito para a elaboração e fixará, depois da conclusão do trabalho, o valor dos respectivos honorários com observância, entre outros, dos critérios de razoabilidade e proporcionalidade.</p>
        
        <p id="art879§8">§ 7º. A atualização dos créditos decorrentes de condenação judicial será feita pela Taxa Referencial (TR), divulgada pelo Banco Central do Brasil, conforme a Lei no 8.177, de 1º. de março de 1991. (Vide ADC 58) (Vide ADC 59) (Vide ADI 5867) (Vide ADI 5867) (Vide ADI 6021)</p>
        
        <h3 id="tituloxcapitulovsecaoii">SEÇÃO II<br>
        DO MANDADO E DA PENHORA</h3>
        
        <p id="art880"><span class="artigo">Art. 880.</span> Requerida a execução, o juiz ou presidente do tribunal mandará expedir mandado de citação do executado, a fim de que cumpra a decisão ou o acordo no prazo, pelo modo e sob as cominações estabelecidas ou, quando se tratar de pagamento em dinheiro, inclusive de contribuições sociais devidas à União, para que o faça em 48 (quarenta e oito) horas ou garanta a execução, sob pena de penhora.</p>
        
        <p id="art880§1">§ 1º. O mandado de citação deverá conter a decisão exequenda ou o termo de acordo não cumprido.</p>
        
        <p id="art880§2">§ 2º. A citação será feita pelos oficiais de diligência.</p>
        
        <p id="art880§3">§ 3º. Se o executado, procurado por 2 (duas) vezes no espaço de 48 (quarenta e oito) horas, não for encontrado, far-se-á citação por edital, publicado no jornal oficial ou, na falta deste, afixado na sede da Junta ou Juízo, durante 5 (cinco) dias.</p>
        
        <p id="art881"><span class="artigo">Art. 881.</span> No caso de pagamento da importância reclamada, será este feito perante o escrivão ou secretário, lavrando-se termo de quitação, em 2 (duas) vias, assinadas pelo exequente, pelo executado e pelo mesmo escrivão ou secretário, entregando-se a segunda via ao executado e juntando-se a outra ao processo.</p>
        
        <p id="art881p.">Parágrafo único. Não estando presente o exequente, será depositada a importância, mediante guia, em estabelecimento oficial de crédito ou, em falta deste, em estabelecimento bancário idôneo. (Redação dada pela Lei nº 7.305, 2.4.1985)</p>
        
        <p id="art882.."><span class="artigo">Art. 882.</span> O executado que não pagar a importância reclamada poderá garantir a execução mediante depósito da quantia correspondente, atualizada e acrescida das despesas processuais, apresentação de seguro-garantia judicial ou nomeação de bens à penhora, observada a ordem preferencial estabelecida no art. 835 da Lei no 13.105, de 16 de março de 2015. Código de Processo Civil.</p>
        
        <p id="art883.0"><span class="artigo">Art. 883.</span> Não pagando o executado, nem garantindo a execução, seguir-se-á penhora dos bens, tantos quantos bastem ao pagamento da importância da condenação, acrescida de custas e juros de mora, sendo estes, em qualquer caso, devidos a partir da data em que for ajuizada a reclamação inicial.</p>
        
        <p id="art883a"><span class="artigo">Art. 883-A.</span> A decisão judicial transitada em julgado somente poderá ser levada a protesto, gerar inscrição do nome do executado em órgãos de proteção ao crédito ou no Banco Nacional de Devedores Trabalhistas (BNDT), nos termos da lei, depois de transcorrido o prazo de quarenta e cinco dias a contar da citação do executado, se não houver garantia do juízo.</p>
        
        <h3 id="tituloxcapitulovsecaoiii">SEÇÃO III<br>
        DOS EMBARGOS À EXECUÇÃO E DA SUA IMPUGNAÇÃO</h3>
        
        <p id="art884"><span class="artigo">Art. 884.</span> Garantida a execução ou penhorados os bens, terá o executado 5 (cinco) dias para apresentar embargos, cabendo igual prazo ao exequente para impugnação.</p>
        
        <p id="art884§1">§ 1º. A matéria de defesa será restrita às alegações de cumprimento da decisão ou do acordo, quitação ou prescrição da dívida.</p>
        
        <p id="art884§2">§ 2º. Se na defesa tiverem sido arroladas testemunhas, poderá o Juiz ou o Presidente do Tribunal, caso julgue necessários seus depoimentos, marcar audiência para a produção das provas, a qual deverá realizar-se dentro de 5 (cinco) dias.</p>
        
        <p id="art884§3">§ 3º. Somente nos embargos à penhora poderá o executado impugnar a sentença de liquidação, cabendo ao exequente igual direito e no mesmo prazo.</p>
        
        <p id="art884§4.">§ 4º. Julgar-se-ão na mesma sentença os embargos e as impugnações à liquidação apresentadas pelos credores trabalhista e previdenciário.</p>
        
        <p id="art884§5">§ 5º. Considera-se inexigível o título judicial fundado em lei ou ato normativo declarados inconstitucionais pelo Supremo Tribunal Federal ou em aplicação ou interpretação tidas por incompatíveis com a Constituição Federal. (Incluído pela Medida provisória nº 2.180-35, de 2001)</p>
        
        <p id="art884§6">§ 6º. A exigência da garantia ou penhora não se aplica às entidades filantrópicas e/ou àqueles que compõem ou compuseram a diretoria dessas instituições.</p>
        
        <h3 id="tituloxcapitulovsecaoiv">SEÇÃO IV<br>
        DO JULGAMENTO E DOS TRÂMITES FINAIS DA EXECUÇÃO</h3>
        
        <p id="art885"><span class="artigo">Art. 885.</span> Não tendo sido arroladas testemunhas na defesa, o juiz ou presidente, conclusos os autos, proferirá sua decisão, dentro de 5 (cinco) dias, julgando subsistente ou insubsistente a penhora.</p>
        
        <p id="art886"><span class="artigo">Art. 886.</span> Se tiverem sido arroladas testemunhas, finda a sua inquirição em audiência, o escrivão ou secretário fará, dentro de 48 (quarenta e oito) horas, conclusos os autos ao juiz ou presidente, que proferirá sua decisão, na forma prevista no artigo anterior. (Vide Leis nº 409, de 1943 e 6.563, de 1978)</p>
        
        <p id="art886§1">§ 1º. Proferida a decisão, serão da mesma notificadas as partes interessadas, em registrado postal, com franquia.</p>
        
        <p id="art886§2">§ 2º. Julgada subsistente a penhora, o juiz, ou presidente, mandará proceder logo à avaliação dos bens penhorados.</p>
        
        <p id="art887"><span class="artigo">Art. 887.</span> A avaliação dos bens penhorados em virtude da execução de decisão condenatória, será feita por avaliador escolhido de comum acordo pelas partes, que perceberá as custas arbitradas pelo juiz, ou presidente do tribunal trabalhista, de conformidade com a tabela a ser expedida pelo Tribunal Superior do Trabalho.</p>
        
        <p id="art887§1">§ 1º. Não acordando as partes quanto à designação de avaliador, dentro de cinco dias após o despacho que o determinou a avaliação, será o avaliador designado livremente pelo juiz ou presidente do tribunal.</p>
        
        <p id="art887§2">§ 2º. Os servidores da Justiça do Trabalho não poderão ser escolhidos ou designados para servir de avaliador.</p>
        
        <p id="art888"><span class="artigo">Art. 888.</span> Concluída a avaliação, dentro de dez dias, contados da data da nomeação do avaliador, seguir-se-á a arrematação, que será anunciada por edital afixado na sede do juízo ou tribunal e publicado no jornal local, se houver, com a antecedência de vinte (20) dias.</p>
        
        <p id="art888§1.">§ 1º. A arrematação far-se-á em dia, hora e lugar anunciados e os bens serão vendidos pelo maior lance, tendo o exequente preferência para a adjudicação.</p>
        
        <p id="art888§2.">§ 2º. O arrematante deverá garantir o lance com o sinal correspondente a 20% (vinte por cento) do seu valor.</p>
        
        <p id="art888§3.">§ 3º. Não havendo licitante, e não requerendo o exequente a adjudicação dos bens penhorados, poderão os mesmos ser vendidos por leiloeiro nomeado pelo Juiz ou Presidente.</p>
        
        <p id="art888§4.">§ 4º. Se o arrematante, ou seu fiador, não pagar dentro de 24 (vinte e quatro) horas o preço da arrematação, perderá, em benefício da execução, o sinal de que trata o § 2º. deste artigo, voltando à praça os bens executados.</p>
        
        <p id="art889"><span class="artigo">Art. 889.</span> Aos trâmites e incidentes do processo da execução são aplicáveis, naquilo em que não contravierem ao presente Título, os preceitos que regem o processo dos executivos fiscais para a cobrança judicial da dívida ativa da Fazenda Pública Federal.</p>
        
        <p id="art889a"><span class="artigo">Art. 889-A.</span> Os recolhimentos das importâncias devidas, referentes às contribuições sociais, serão efetuados nas agências locais da Caixa Econômica Federal ou do Banco do Brasil S.A., por intermédio de documento de arrecadação da Previdência Social, dele se fazendo constar o número do processo.</p>
        
        <p id="art889a§1">§ 1º. Concedido parcelamento pela Secretaria da Receita Federal do Brasil, o devedor juntará aos autos a comprovação do ajuste, ficando a execução da contribuição social correspondente suspensa até a quitação de todas as parcelas.</p>
        
        <p id="art889a§2.">§ 2º. As Varas do Trabalho encaminharão mensalmente à Secretaria da Receita Federal do Brasil informações sobre os recolhimentos efetivados nos autos, salvo se outro prazo for estabelecido em regulamento.</p>
        
        <h3 id="tituloxcapitulovsecaov">SEÇÃO V<br>
        DA EXECUÇÃO POR PRESTAÇÕES SUCESSIVAS</h3>
        
        <p id="art890"><span class="artigo">Art. 890.</span> A execução para pagamento de prestações sucessivas far-se-á com observância das normas constantes desta Seção, sem prejuízo das demais estabelecidas neste Capítulo.</p>
        
        <p id="art891"><span class="artigo">Art. 891.</span> Nas prestações sucessivas por tempo determinado, a execução pelo não-pagamento de uma prestação compreenderá as que lhe sucederem.</p>
        
        <p><span class="artigo">Art. 892.</span> Tratando-se de prestações sucessivas por tempo indeterminado, a execução compreenderá inicialmente as prestações devidas até a data do ingresso na execução.</p>
        
        <h2 id="tituloxcapitulovi">CAPÍTULO VI<br>
        DOS RECURSOS</h2>
        
        <p id="art893"><span class="artigo">Art. 893.</span> Das decisões são admissíveis os seguintes recursos:</p>
        
        <p id="art893i..">I - embargos;</p>
        
        <p id="art893ii..">II - recurso ordinário;</p>
        
        <p id="art893iii..">III - recurso de revista;</p>
        
        <p id="art893iv..">IV - agravo.</p>
        
        <p id="art893§1">§ 1º. Os incidentes do processo são resolvidos pelo próprio Juízo ou Tribunal, admitindo-se a apreciação do merecimento das decisões interlocutórias somente em recursos da decisão definitiva. (Parágrafo único renumerado pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art893§2">§ 2º. A interposição de recurso para o Supremo Tribunal Federal não prejudicará a execução do julgado. (Incluído pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art894...."><span class="artigo">Art. 894.</span> No Tribunal Superior do Trabalho cabem embargos, no prazo de 8 (oito) dias:</p>
        
        <p id="art894i">I - de decisão não unânime de julgamento que:</p>
        
        <p id="art894ia" class="alinea">a) conciliar, julgar ou homologar conciliação em dissídios coletivos que excedam a competência territorial dos Tribunais Regionais do Trabalho e estender ou rever as sentenças normativas do Tribunal Superior do Trabalho, nos casos previstos em lei; e</p>
        
        <p id="art894ib" class="alinea">b) (VETADO)</p>
        
        <p id="art894ii.">II - das decisões das Turmas que divergirem entre si ou das decisões proferidas pela Seção de Dissídios Individuais, ou contrárias a súmula ou orientação jurisprudencial do Tribunal Superior do Trabalho ou súmula vinculante do Supremo Tribunal Federal.</p>
        
        <p id="art894p.">Parágrafo único. (Revogado).</p>
        
        <p id="art894§2..">§ 2º. A divergência apta a ensejar os embargos deve ser atual, não se considerando tal a ultrapassada por súmula do Tribunal Superior do Trabalho ou do Supremo Tribunal Federal, ou superada por iterativa e notória jurisprudência do Tribunal Superior do Trabalho.</p>
        
        <p id="art894§3.">§ 3º. O Ministro Relator denegará seguimento aos embargos:</p>
        
        <p id="art894§3i">I - se a decisão recorrida estiver em consonância com súmula da jurisprudência do Tribunal Superior do Trabalho ou do Supremo Tribunal Federal, ou com iterativa, notória e atual jurisprudência do Tribunal Superior do Trabalho, cumprindo-lhe indicá-la;</p>
        
        <p id="art894§3ii">II - nas hipóteses de intempestividade, deserção, irregularidade de representação ou de ausência de qualquer outro pressuposto extrínseco de admissibilidade.</p>
        
        <p id="art894§4">§ 4º. Da decisão denegatória dos embargos caberá agravo, no prazo de 8 (oito) dias.</p>
        
        <p id="art895"><span class="artigo">Art. 895.</span> Cabe recurso ordinário para a instância superior: (Vide Lei 5.584, de 1970)</p>
        
        <p id="art895i">I - das decisões definitivas ou terminativas das Varas e Juízos, no prazo de 8 (oito) dias; e.</p>
        
        <p id="art895ii">II - das decisões definitivas ou terminativas dos Tribunais Regionais, em processos de sua competência originária, no prazo de 8 (oito) dias, quer nos dissídios individuais, quer nos dissídios coletivos..</p>
        
        <p id="art895§1">§ 1º. Nas reclamações sujeitas ao procedimento sumaríssimo, o recurso ordinário:</p>
        
        <p id="art895§1i">I - (VETADO).</p>
        
        <p id="art895§1ii">II - será imediatamente distribuído, uma vez recebido no Tribunal, devendo o relator liberá-lo no prazo máximo de dez dias, e a Secretaria do Tribunal ou Turma colocá-lo imediatamente em pauta para julgamento, sem revisor;</p>
        
        <p id="art895§1iii">III - terá parecer oral do representante do Ministério Público presente à sessão de julgamento, se este entender necessário o parecer, com registro na certidão;</p>
        
        <p id="art895§1iv">IV - terá acórdão consistente unicamente na certidão de julgamento, com a indicação suficiente do processo e parte dispositiva, e das razões de decidir do voto prevalente. Se a sentença for confirmada pelos próprios fundamentos, a certidão de julgamento, registrando tal circunstância, servirá de acórdão.</p>
        
        <p id="art895§2">§ 2º. Os Tribunais Regionais, divididos em Turmas, poderão designar Turma para o julgamento dos recursos ordinários interpostos das sentenças prolatadas nas demandas sujeitas ao procedimento sumaríssimo.</p>
        
        <p><span class="artigo">Art. 896.</span> Cabe Recurso de Revista para Turma do Tribunal Superior do Trabalho das decisões proferidas em grau de recurso ordinário, em dissídio individual, pelos Tribunais Regionais do Trabalho, quando:</p>
        
        <p id="art896a,," class="alinea">a) derem ao mesmo dispositivo de lei federal interpretação diversa da que lhe houver dado outro Tribunal Regional do Trabalho, no seu Pleno ou Turma, ou a Seção de Dissídios Individuais do Tribunal Superior do Trabalho, ou contrariarem súmula de jurisprudência uniforme dessa Corte ou súmula vinculante do Supremo Tribunal Federal;</p>
        
        <p id="art896b," class="alinea">b) derem ao mesmo dispositivo de lei estadual, Convenção Coletiva de Trabalho, Acordo Coletivo, sentença normativa ou regulamento empresarial de observância obrigatória em área territorial que exceda a jurisdição do Tribunal Regional prolator da decisão recorrida, interpretação divergente, na forma da alínea a;</p>
        
        <p id="art896c," class="alinea">c) proferidas com violação literal de disposição de lei federal ou afronta direta e literal à Constituição Federal.</p>
        
        <p id="art896§.....">§ 1º. O recurso de revista, dotado de efeito apenas devolutivo, será interposto perante o Presidente do Tribunal Regional do Trabalho, que, por decisão fundamentada, poderá recebê-lo ou denegá-lo.</p>
        
        <p id="art896§1a">§ 1o-A. Sob pena de não conhecimento, é ônus da parte:</p>
        
        <p id="art896§1ai">I - indicar o trecho da decisão recorrida que consubstancia o prequestionamento da controvérsia objeto do recurso de revista;</p>
        
        <p id="art896§1aii">II - indicar, de forma explícita e fundamentada, contrariedade a dispositivo de lei, súmula ou orientação jurisprudencial do Tribunal Superior do Trabalho que conflite com a decisão regional;</p>
        
        <p id="art896§1aiii">III - expor as razões do pedido de reforma, impugnando todos os fundamentos jurídicos da decisão recorrida, inclusive mediante demonstração analítica de cada dispositivo de lei, da Constituição Federal, de súmula ou orientação jurisprudencial cuja contrariedade aponte.</p>
        
        <p id="art896§1aiv">IV - transcrever na peça recursal, no caso de suscitar preliminar de nulidade de julgado por negativa de prestação jurisdicional, o trecho dos embargos declaratórios em que foi pedido o pronunciamento do tribunal sobre questão veiculada no recurso ordinário e o trecho da decisão regional que rejeitou os embargos quanto ao pedido, para cotejo e verificação, de plano, da ocorrência da omissão.</p>
        
        <p id="art896§2...">§ 2º. Das decisões proferidas pelos Tribunais Regionais do Trabalho ou por suas Turmas, em execução de sentença, inclusive em processo incidente de embargos de terceiro, não caberá Recurso de Revista, salvo na hipótese de ofensa direta e literal de norma da Constituição Federal.</p>
        
        <p id="art896§3.....">§ 3º (Revogado).</p>
        
        <p>§ 4º (Revogado).</p>
        
        <p id="art896§5">§ 5º (Revogado).</p>
        
        <p id="art896§6..">§ 6º (Revogado).</p>
        
        <p id="art896§7">§ 7º. A divergência apta a ensejar o recurso de revista deve ser atual, não se considerando como tal a ultrapassada por súmula do Tribunal Superior do Trabalho ou do Supremo Tribunal Federal, ou superada por iterativa e notória jurisprudência do Tribunal Superior do Trabalho.</p>
        
        <p id="art896§8">§ 8º. Quando o recurso fundar-se em dissenso de julgados, incumbe ao recorrente o ônus de produzir prova da divergência jurisprudencial, mediante certidão, cópia ou citação do repositório de jurisprudência, oficial ou credenciado, inclusive em mídia eletrônica, em que houver sido publicada a decisão divergente, ou ainda pela reprodução de julgado disponível na internet, com indicação da respectiva fonte, mencionando, em qualquer caso, as circunstâncias que identifiquem ou assemelhem os casos confrontados.</p>
        
        <p id="art896§9">§ 9º. Nas causas sujeitas ao procedimento sumaríssimo, somente será admitido recurso de revista por contrariedade a súmula de jurisprudência uniforme do Tribunal Superior do Trabalho ou a súmula vinculante do Supremo Tribunal Federal e por violação direta da Constituição Federal.</p>
        
        <p id="art896§10">§ 10. Cabe recurso de revista por violação a lei federal, por divergência jurisprudencial e por ofensa à Constituição Federal nas execuções fiscais e nas controvérsias da fase de execução que envolvam a Certidão Negativa de Débitos Trabalhistas (CNDT), criada pela Lei no 12.440, de 7 de julho de 2011.</p>
        
        <p id="art896§11">§ 11. Quando o recurso tempestivo contiver defeito formal que não se repute grave, o Tribunal Superior do Trabalho poderá desconsiderar o vício ou mandar saná-lo, julgando o mérito.</p>
        
        <p id="art896§12">§ 12. Da decisão denegatória caberá agravo, no prazo de 8 (oito) dias.</p>
        
        <p id="art896§13">§ 13. Dada a relevância da matéria, por iniciativa de um dos membros da Seção Especializada em Dissídios Individuais do Tribunal Superior do Trabalho, aprovada pela maioria dos integrantes da Seção, o julgamento a que se refere o § 3º. poderá ser afeto ao Tribunal Pleno.</p>
        
        <p id="art896§14">§ 14. O relator do recurso de revista poderá denegar-lhe seguimento, em decisão monocrática, nas hipóteses de intempestividade, deserção, irregularidade de representação ou de ausência de qualquer outro pressuposto extrínseco ou intrínseco de admissibilidade.</p>
        
        <p id="art896a">Art.896-A - O Tribunal Superior do Trabalho, no recurso de revista, examinará previamente se a causa oferece transcendência com relação aos reflexos gerais de natureza econômica, política, social ou jurídica. (Incluído pela Medida Provisória nº 2.226, de 4.9.2001)</p>
        
        <p id="art896a§1">§ 1º. São indicadores de transcendência, entre outros:</p>
        
        <p id="art896a§1i">I - econômica, o elevado valor da causa;</p>
        
        <p id="art896a§1ii">II - política, o desrespeito da instância recorrida à jurisprudência sumulada do Tribunal Superior do Trabalho ou do Supremo Tribunal Federal;</p>
        
        <p id="art896a§1iii">III - social, a postulação, por reclamante-recorrente, de direito social constitucionalmente assegurado;</p>
        
        <p id="art896a§1iv">IV - jurídica, a existência de questão nova em torno da interpretação da legislação trabalhista.</p>
        
        <p id="art896a§2">§ 2º. Poderá o relator, monocraticamente, denegar seguimento ao recurso de revista que não demonstrar transcendência, cabendo agravo desta decisão para o colegiado.</p>
        
        <p id="art896a§3">§ 3º. Em relação ao recurso que o relator considerou não ter transcendência, o recorrente poderá realizar sustentação oral sobre a questão da transcendência, durante cinco minutos em sessão.</p>
        
        <p id="art896a§4">§ 4º. Mantido o voto do relator quanto à não transcendência do recurso, será lavrado acórdão com fundamentação sucinta, que constituirá decisão irrecorrível no âmbito do tribunal.</p>
        
        <p id="art896a§5">§ 5º. É irrecorrível a decisão monocrática do relator que, em agravo de instrumento em recurso de revista, considerar ausente a transcendência da matéria.</p>
        
        <p id="art896a§6">§ 6º. O juízo de admissibilidade do recurso de revista exercido pela Presidência dos Tribunais Regionais do Trabalho limita-se à análise dos pressupostos intrínsecos e extrínsecos do apelo, não abrangendo o critério da transcendência das questões nele veiculadas.</p>
        
        <p id="art896.b"><span class="artigo">Art. 896-B.</span> Aplicam-se ao recurso de revista, no que couber, as normas da Lei no 5.869, de 11 de janeiro de 1973 (Código de Processo Civil), relativas ao julgamento dos recursos extraordinário e especial repetitivos.</p>
        
        <p id="art896.c"><span class="artigo">Art. 896-C.</span> Quando houver multiplicidade de recursos de revista fundados em idêntica questão de direito, a questão poderá ser afetada à Seção Especializada em Dissídios Individuais ou ao Tribunal Pleno, por decisão da maioria simples de seus membros, mediante requerimento de um dos Ministros que compõem a Seção Especializada, considerando a relevância da matéria ou a existência de entendimentos divergentes entre os Ministros dessa Seção ou das Turmas do Tribunal.</p>
        
        <p id="art896c§1">§ 1º. O Presidente da Turma ou da Seção Especializada, por indicação dos relatores, afetará um ou mais recursos representativos da controvérsia para julgamento pela Seção Especializada em Dissídios Individuais ou pelo Tribunal Pleno, sob o rito dos recursos repetitivos.</p>
        
        <p id="art896c§2">§ 2º. O Presidente da Turma ou da Seção Especializada que afetar processo para julgamento sob o rito dos recursos repetitivos deverá expedir comunicação aos demais Presidentes de Turma ou de Seção Especializada, que poderão afetar outros processos sobre a questão para julgamento conjunto, a fim de conferir ao órgão julgador visão global da questão.</p>
        
        <p id="art896c§3">§ 3º. O Presidente do Tribunal Superior do Trabalho oficiará os Presidentes dos Tribunais Regionais do Trabalho para que suspendam os recursos interpostos em casos idênticos aos afetados como recursos repetitivos, até o pronunciamento definitivo do Tribunal Superior do Trabalho.</p>
        
        <p id="art896c§4">§ 4º. Caberá ao Presidente do Tribunal de origem admitir um ou mais recursos representativos da controvérsia, os quais serão encaminhados ao Tribunal Superior do Trabalho, ficando suspensos os demais recursos de revista até o pronunciamento definitivo do Tribunal Superior do Trabalho.</p>
        
        <p id="art896c§5">§ 5º. O relator no Tribunal Superior do Trabalho poderá determinar a suspensão dos recursos de revista ou de embargos que tenham como objeto controvérsia idêntica à do recurso afetado como repetitivo.</p>
        
        <p id="art896c§6">§ 6º. O recurso repetitivo será distribuído a um dos Ministros membros da Seção Especializada ou do Tribunal Pleno e a um Ministro revisor.</p>
        
        <p id="art896c§7">§ 7º. O relator poderá solicitar, aos Tribunais Regionais do Trabalho, informações a respeito da controvérsia, a serem prestadas no prazo de 15 (quinze) dias.</p>
        
        <p id="art896c§8">§ 8º. O relator poderá admitir manifestação de pessoa, órgão ou entidade com interesse na controvérsia, inclusive como assistente simples, na forma da Lei nº 5.869, de 11 de janeiro de 1973 (Código de Processo Civil).</p>
        
        <p id="art896c§9">§ 9º. Recebidas as informações e, se for o caso, após cumprido o disposto no § 7º. deste artigo, terá vista o Ministério Público pelo prazo de 15 (quinze) dias.</p>
        
        <p id="art896c§10">§ 10. Transcorrido o prazo para o Ministério Público e remetida cópia do relatório aos demais Ministros, o processo será incluído em pauta na Seção Especializada ou no Tribunal Pleno, devendo ser julgado com preferência sobre os demais feitos.</p>
        
        <p id="art896c§11">§ 11. Publicado o acórdão do Tribunal Superior do Trabalho, os recursos de revista sobrestados na origem:</p>
        
        <p id="art896c§11i">I - terão seguimento denegado na hipótese de o acórdão recorrido coincidir com a orientação a respeito da matéria no Tribunal Superior do Trabalho; ou</p>
        
        <p id="art896c§11ii">II - serão novamente examinados pelo Tribunal de origem na hipótese de o acórdão recorrido divergir da orientação do Tribunal Superior do Trabalho a respeito da matéria.</p>
        
        <p id="art896c§12">§ 12. Na hipótese prevista no inciso II do § 11 deste artigo, mantida a decisão divergente pelo Tribunal de origem, far-se-á o exame de admissibilidade do recurso de revista.</p>
        
        <p id="art896c§13">§ 13. Caso a questão afetada e julgada sob o rito dos recursos repetitivos também contenha questão constitucional, a decisão proferida pelo Tribunal Pleno não obstará o conhecimento de eventuais recursos extraordinários sobre a questão constitucional.</p>
        
        <p id="art896c§14">§ 14. Aos recursos extraordinários interpostos perante o Tribunal Superior do Trabalho será aplicado o procedimento previsto no art. 543-B da Lei nº 5.869, de 11 de janeiro de 1973 (Código de Processo Civil), cabendo ao Presidente do Tribunal Superior do Trabalho selecionar um ou mais recursos representativos da controvérsia e encaminhá-los ao Supremo Tribunal Federal, sobrestando os demais até o pronunciamento definitivo da Corte, na forma do § 1º. do art. 543-B da Lei no 5.869, de 11 de janeiro de 1973 (Código de Processo Civil).</p>
        
        <p id="art896c§15">§ 15. O Presidente do Tribunal Superior do Trabalho poderá oficiar os Tribunais Regionais do Trabalho e os Presidentes das Turmas e da Seção Especializada do Tribunal para que suspendam os processos idênticos aos selecionados como recursos representativos da controvérsia e encaminhados ao Supremo Tribunal Federal, até o seu pronunciamento definitivo.</p>
        
        <p id="art896c§16">§ 16. A decisão firmada em recurso repetitivo não será aplicada aos casos em que se demonstrar que a situação de fato ou de direito é distinta das presentes no processo julgado sob o rito dos recursos repetitivos.</p>
        
        <p id="art896c§17">§ 17. Caberá revisão da decisão firmada em julgamento de recursos repetitivos quando se alterar a situação econômica, social ou jurídica, caso em que será respeitada a segurança jurídica das relações firmadas sob a égide da decisão anterior, podendo o Tribunal Superior do Trabalho modular os efeitos da decisão que a tenha alterado.</p>
        
        <p id="art897"><span class="artigo">Art. 897.</span> Cabe agravo, no prazo de 8 (oito) dias:</p>
        
        <p id="art897a.." class="alinea">a) de petição, das decisões do Juiz ou Presidente, nas execuções;</p>
        
        <p id="art897b." class="alinea">b) de instrumento, dos despachos que denegarem a interposição de recursos.</p>
        
        <p id="art897§1..">§ 1º. O agravo de petição só será recebido quando o agravante delimitar, justificadamente, as matérias e os valores impugnados, permitida a execução imediata da parte remanescente até o final, nos próprios autos ou por carta de sentença.</p>
        
        <p id="art897§2..">§ 2º. O agravo de instrumento interposto contra o despacho que não receber agravo de petição não suspende a execução da sentença.</p>
        
        <p id="art897§3">§ 3º. Na hipótese da alínea a deste artigo, o agravo será julgado pelo próprio tribunal, presidido pela autoridade recorrida, salvo se se tratar de decisão de Juiz do Trabalho de 1ª Instância ou de Juiz de Direito, quando o julgamento competirá a uma das Turmas do Tribunal Regional a que estiver subordinado o prolator da sentença, observado o disposto no art. 679, a quem este remeterá as peças necessárias para o exame da matéria controvertida, em autos apartados, ou nos próprios autos, se tiver sido determinada a extração de carta de sentença.</p>
        
        <p id="art897§4">§ 4º. Na hipótese da alínea b deste artigo, o agravo será julgado pelo Tribunal que seria competente para conhecer o recurso cuja interposição foi denegada.</p>
        
        <p id="art897§5">§ 5º. Sob pena de não conhecimento, as partes promoverão a formação do instrumento do agravo de modo a possibilitar, caso provido, o imediato julgamento do recurso denegado, instruindo a petição de interposição:</p>
        
        <p id="art897§5i">I - obrigatoriamente, com cópias da decisão agravada, da certidão da respectiva intimação, das procurações outorgadas aos advogados do agravante e do agravado, da petição inicial, da contestação, da decisão originária, do depósito recursal referente ao recurso que se pretende destrancar, da comprovação do recolhimento das custas e do depósito recursal a que se refere o § 7º. do art. 899 desta Consolidação;</p>
        
        <p id="art897§5ii">II - facultativamente, com outras peças que o agravante reputar úteis ao deslinde da matéria de mérito controvertida.(Incluído pela Lei nº 9.756, de 1998)</p>
        
        <p id="art897§6">§ 6º. O agravado será intimado para oferecer resposta ao agravo e ao recurso principal, instruindo-a com as peças que considerar necessárias ao julgamento de ambos os recursos.</p>
        
        <p id="art897§7">§ 7º. Provido o agravo, a Turma deliberará sobre o julgamento do recurso principal, observando-se, se for o caso, daí em diante, o procedimento relativo a esse recurso.</p>
        
        <p>§ 8º. Quando o agravo de petição versar apenas sobre as contribuições sociais, o juiz da execução determinará a extração de cópias das peças necessárias, que serão autuadas em apartado, conforme dispõe o § 3o, parte final, e remetidas à instância superior para apreciação, após contraminuta.</p>
        
        <p>Art. 897-A Caberão embargos de declaração da sentença ou acórdão, no prazo de cinco dias, devendo seu julgamento ocorrer na primeira audiência ou sessão subsequente a sua apresentação, registrado na certidão, admitido efeito modificativo da decisão nos casos de omissão e contradição no julgado e manifesto equívoco no exame dos pressupostos extrínsecos do recurso.</p>
        
        <p id="art897a§1">§ 1º. Os erros materiais poderão ser corrigidos de ofício ou a requerimento de qualquer das partes.</p>
        
        <p id="art897a§2">§ 2º. Eventual efeito modificativo dos embargos de declaração somente poderá ocorrer em virtude da correção de vício na decisão embargada e desde que ouvida a parte contrária, no prazo de 5 (cinco) dias.</p>
        
        <p id="art897a§3">§ 3º. Os embargos de declaração interrompem o prazo para interposição de outros recursos, por qualquer das partes, salvo quando intempestivos, irregular a representação da parte ou ausente a sua assinatura.</p>
        
        <p id="art898"><span class="artigo">Art. 898.</span> Das decisões proferidas em dissídio coletivo que afete empresa de serviço público, ou, em qualquer caso, das proferidas em revisão, poderão recorrer, além dos interessados, o Presidente do Tribunal e a Procuradoria da Justiça do Trabalho.</p>
        
        <p id="art899"><span class="artigo">Art. 899.</span> Os recursos serão interpostos por simples petição e terão efeito meramente devolutivo, salvo as exceções previstas neste Título, permitida a execução provisória até a penhora.</p>
        
        <p id="art899§1.">§ 1º. Sendo a condenação de valor até 10 (dez) vezes o salário-mínimo regional, nos dissídios individuais, só será admitido o recurso inclusive o extraordinário, mediante prévio depósito da respectiva importância. Transitada em julgado a decisão recorrida, ordenar-se-á o levantamento imediato da importância de depósito, em favor da parte vencedora, por simples despacho do juiz. (Redação dada pela Lei nº 5.442, 24.5.1968)</p>
        
        <p id="art899§2.">§ 2º. Tratando-se de condenação de valor indeterminado, o depósito corresponderá ao que for arbitrado, para efeito de custas, pela Junta ou Juízo de Direito, até o limite de 10 (dez) vezes o salário-mínimo da região. (Redação dada pela Lei nº 5.442, 24.5.1968)</p>
        
        <p id="art899§3">§ 3º (Revogado pela Lei nº 7.033, de 5.10.1982)</p>
        
        <p id="art899§4..">§ 4º. O depósito recursal será feito em conta vinculada ao juízo e corrigido com os mesmos índices da poupança. (Vide ADC 58) (Vide ADC 59) (Vide ADI 5867) (Vide ADI 5867) (Vide ADI 6021)</p>
        
        <p id="art899§5..">§ 5º (Revogado).</p>
        
        <p id="art899§6">§ 6º. Quando o valor da condenação, ou o arbitrado para fins de custas, exceder o limite de 10 (dez) vezes o salário-mínimo da região, o depósito para fins de recursos será limitado a este valor. (Incluído pela Lei nº 5.442, 24.5.1968)</p>
        
        <p id="art899§7">§ 7º. No ato de interposição do agravo de instrumento, o depósito recursal corresponderá a 50% (cinquenta por cento) do valor do depósito do recurso ao qual se pretende destrancar.</p>
        
        <p id="art899§8">§ 8º. Quando o agravo de instrumento tem a finalidade de destrancar recurso de revista que se insurge contra decisão que contraria a jurisprudência uniforme do Tribunal Superior do Trabalho, consubstanciada nas suas súmulas ou em orientação jurisprudencial, não haverá obrigatoriedade de se efetuar o depósito referido no § 7º. deste artigo.</p>
        
        <p id="art899§9">§ 9º. O valor do depósito recursal será reduzido pela metade para entidades sem fins lucrativos, empregadores domésticos, microempreendedores individuais, microempresas e empresas de pequeno porte.</p>
        
        <p id="art899§10">§ 10. São isentos do depósito recursal os beneficiários da justiça gratuita, as entidades filantrópicas e as empresas em recuperação judicial.</p>
        
        <p>§ 11. O depósito recursal poderá ser substituído por fiança bancária ou seguro garantia judicial.</p>
        
        <p id="art900"><span class="artigo">Art. 900.</span> Interposto o recurso, será notificado o recorrido para oferecer as suas razões, em prazo igual ao que tiver tido o recorrente.</p>
        
        <p id="art901"><span class="artigo">Art. 901.</span> Sem prejuízo dos prazos previstos neste Capítulo, terão as partes vistas dos autos em cartório ou na secretaria.</p>
        
        <p id="art901p">Parágrafo único. Salvo quando estiver correndo prazo comum, aos procuradores das partes será permitido ter vista dos autos fora do cartório ou secretaria.</p>
        
        <p id="art902"><span class="artigo">Art. 902.</span> (Revogado pela Lei nº 7.033, de 5.10.1982)</p>
        
        <h2 id="tituloxcapitulovii">CAPÍTULO VII<br>
        DA APLICAÇÃO DAS PENALIDADES</h2>
        
        <p id="art903."><span class="artigo">Art. 903.</span> As penalidades estabelecidas no título anterior serão aplicadas pelo juiz, ou tribunal que tiver de conhecer da desobediência, violação recusa, falta, ou coação, ex-offício, ou mediante, representação de qualquer interessado ou da Procuradoria da Justiça do Trabalho. (Redação dada pelo Decreto Lei nº 8.737, de 1946)</p>
        
        <p id="art904."><span class="artigo">Art. 904.</span> As sanções em que incorrerem as autoridades da Justiça do Trabalho serão aplicadas pela autoridade ou Tribunal imediatamente superior, conforme o caso, ex officio, ou mediante representação de qualquer interessado ou da Procuradoria. (Redação dada pelo Decreto-lei nº 8.737, de 19.1.1946)</p>
        
        <p id="art904p">Parágrafo único. Tratando de membro do Tribunal Superior do Trabalho será competente para a imposição de execuções o Conselho Federal. (Parágrafo único renumerado do 1º. pelo Decreto-lei nº 229, de 28.2.1967)</p>
        
        <p id="art904§2">§ 2º (Revogado pelo Decreto-Lei nº 229, de 28.2.1967)</p>
        
        <p id="art905"><span class="artigo">Art. 905.</span> Tomando conhecimento do fato imputado, o Juiz, ou Tribunal competente, mandará notificar o acusado, para apresentar, no prazo de 15 (quinze) dias, defesa por escrito.</p>
        
        <p id="art905§1">§ 1º. É facultado ao acusado, dentro do prazo estabelecido neste artigo, requerer a produção de testemunhas, até ao máximo de 5 (cinco). Nesse caso, será marcada audiência para a inquirição.</p>
        
        <p id="art905§2">§ 2º. Findo o prazo de defesa, o processo será imediatamente concluso para julgamento, que deverá ser proferido no prazo de 10 (dez) dias.</p>
        
        <p id="art906"><span class="artigo">Art. 906.</span> Da imposição das penalidades a que se refere este Capítulo, caberá recurso ordinário para o Tribunal Superior, no prazo de 10 (dez) dias, salvo se a imposição resultar de dissídio coletivo, caso em que o prazo será de 20 (vinte) dias.</p>
        
        <p id="art907"><span class="artigo">Art. 907.</span> Sempre que o infrator incorrer em pena criminal far-se-á remessa das peças necessárias à autoridade competente.</p>
        
        <p id="art908"><span class="artigo">Art. 908.</span> A cobrança das multas estabelecidas neste Título será feita mediante executivo fiscal, perante o Juiz competente para a cobrança de dívida ativa da Fazenda Pública Federal.</p>
        
        <p id="art908p">Parágrafo único. A cobrança das multas será promovida, no Distrito Federal e nos Estados em que funcionarem os Tribunais Regionais pela Procuradoria da Justiça do Trabalho, e, nos demais Estados, de acordo com o disposto no Decreto-Lei nº 960, de 17 de dezembro de 1938.</p>
        
        <h2 id="tituloxcapituloviii">CAPÍTULO VIII<br>
        DISPOSIÇÕES FINAIS</h2>
        
        <p id="art909"><span class="artigo">Art. 909.</span> A ordem dos processos no Tribunal Superior do Trabalho será regulada em seu regimento interno.</p>
        
        <p id="art910"><span class="artigo">Art. 910.</span> Para os efeitos deste Título, equiparam-se aos serviços públicos os de utilidade pública, bem como os que forem prestados em armazéns de gêneros alimentícios, açougues, padarias, leiterias, farmácias, hospitais, minas, empresas de transportes e comunicações, bancos e estabelecimentos que interessem à segurança nacional.</p>
        
        <h1 id="tituloxi">TÍTULO XI<br>
        DISPOSIÇÕES FINAIS E TRANSITÓRIAS</h1>
        
        <p id="art911"><span class="artigo">Art. 911.</span> Esta Consolidação entrará em vigor em 10 de novembro de 1943.</p>
        
        <p id="art912"><span class="artigo">Art. 912.</span> Os dispositivos de caráter imperativo terão aplicação imediata às relações iniciadas, mas não consumadas, antes da vigência desta Consolidação.</p>
        
        <p id="art913"><span class="artigo">Art. 913.</span> O Ministro do Trabalho, Industria e Comercio expedirá instruções, quadros, tabelas e modelos que se tornarem necessários à execução desta Consolidação.</p>
        
        <p id="art913p">Parágrafo único. O Tribunal Superior do Trabalho adaptará o seu regimento interno e o dos Tribunais Regionais do Trabalho às normas contidas nesta Consolidação.</p>
        
        <p id="art914"><span class="artigo">Art. 914.</span> Continuarão em vigor os quadros, tabelas e modelos, aprovados em virtude de dispositivos não alterados pela presente Consolidação.</p>
        
        <p id="art915"><span class="artigo">Art. 915.</span> Não serão prejudicados os recursos interpostos com apoio em dispositivos alterados ou cujo prazo para interposição esteja em curso à data da vigência desta Consolidação.</p>
        
        <p id="art916"><span class="artigo">Art. 916.</span> Os prazos de prescrição fixados pela presente Consolidação começarão a correr da data da vigência desta, quando menores do que os previstos pela legislação anterior.</p>
        
        <p id="art917"><span class="artigo">Art. 917.</span> O Ministro do Trabalho, Indústria e Comércio marcará prazo para adaptação dos atuais estabelecimentos às exigências contidas no capítulo &quot;De Higiene e Segurança do Trabalho&quot;. Compete ainda àquela autoridade fixar os prazos dentro dos quais, em cada Estado, entrará em vigor a obrigatoriedade do uso da Carteira Profissional, para os atuais empregados. (Vide Decreto-Lei nº 229, de 1967)</p>
        
        <p id="art917p">Parágrafo único. O Ministro do Trabalho, Industria e Comercio fixará, para cada Estado e quando julgar conveniente, o início da vigência de parte ou de todos os dispositivos contidos no Capítulo &quot;Da Segurança e da Medicina do Trabalho&quot;.</p>
        
        <p id="art918"><span class="artigo">Art. 918.</span> Enquanto não for expedida a Lei Orgânica da Previdência Social, competirá ao presidente do Tribunal Superior do Trabalho julgar os recursos interpostos com apoio no art. 1º, alínea &quot;c&quot;, do Decreto-lei nº 3.710, de 14 de outubro de 1941, cabendo recurso de suas decisões nos termos do disposto no art. 734, alínea &quot;b&quot;, desta Consolidação. (Vide Lei nº 3.807, de 1960)</p>
        
        <p id="art918p">Parágrafo único. Ao diretor do Departamento de Previdência Social incumbirá presidir as eleições para a constituição dos Conselhos Fiscais dos Institutos e Caixas de Aposentadoria e Pensões e julgar, com recurso para a instância superior, os recursos sobre matéria técnico-administrativa dessas instituições. (Vide Lei nº 3.807, de 1960)</p>
        
        <p id="art919"><span class="artigo">Art. 919.</span> Ao empregado bancário, admitido até a data da vigência da presente Lei, fica assegurado o direito à aquisição da estabilidade nos termos do art. 15 do Decreto nº 24.615, de 9 de julho de 1934.</p>
        
        <p id="art920"><span class="artigo">Art. 920.</span> Enquanto não forem constituídas as confederações, ou, na falta destas, a representação de classes, econômicas ou profissionais, que derivar da indicação desses órgãos ou dos respectivos presidentes, será suprida por equivalente designação ou eleição realizada pelas correspondentes federações.</p>
        
        <p id="art921"><span class="artigo">Art. 921.</span> As empresas que não estiverem incluídas no enquadramento sindical em que trata o art. 577 poderão firmar contratos coletivos de trabalho com os sindicatos representativos da respectiva categoria profissional.</p>
        
        <p id="art922"><span class="artigo">Art. 922.</span> O disposto no art. 301 regerá somente as relações de empregos iniciadas depois da vigência desta Consolidação. (Incluído pelo Decreto-lei nº 6.353, de 20.3.1944)</p>
    `,
}
export default clt
