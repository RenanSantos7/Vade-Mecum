import { ILei } from "../../types/index.tsx"

const cf:ILei = {
	id: 'cf',
	titulo: 'Constituição da República Federativa do Brasil',
	alias: 'Constituição Federal',
	linksRelacionados: [
		{ id: 'cepi', nome: 'Constituição do Estado do Piauí' },
		{ id: 'cc', nome: 'Código Civil' },
		{ id: 'cdc', nome: 'Cód. Defesa do Consumidor' },
		{ id: 'clt', nome: 'Consolidação das Leis do Trabalho' },
		{ id: 'lms', nome: 'Lei do Mandado de Segurança' },
		{ id: 'minj', nome: 'Lei do Mandado de Injunção' },
		{ id: 'cp', nome: 'Código Penal' },
		{ id: 'ctn', nome: 'Código Tributário Nacional' },
	],
	jurisdicao: 'nacional',
	area: 'constitucional',
	conteudo: `
	<nav class="links">
		<ul>
			<li><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/quadro_emc.htm">Emendas Constitucionais</a></li>
			<li><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/quadro_ecr.htm">Emendas Constitucionais de Revisão</a></li>
			<li><a href="#adct">Ato das Disposições Constitucionais Transitórias</a></li>
			<li><a href="http://www.planalto.gov.br/ccivil_03/constituicao/quadro_DEC.htm">Atos decorrentes do disposto no § 3º do art. 5º.</a></li>
		</ul>
	</nav>

	<h1>PREÂMBULO</h1>

	<p>Nós, representantes do povo brasileiro, reunidos em Assembleia Nacional Constituinte para instituir um Estado Democrático, destinado a assegurar o exercício dos direitos sociais e individuais, a liberdade, a segurança, o bem-estar, o desenvolvimento, a igualdade e a justiça como valores supremos de uma sociedade fraterna, pluralista e sem preconceitos, fundada na harmonia social e comprometida, na ordem interna e internacional, com a solução pacífica das controvérsias, promulgamos, sob a proteção de Deus, a seguinte CONSTITUIÇÃO DA REPÚBLICA FEDERATIVA DO BRASIL.</p>

	<h1>TÍTULO I<br>
	Dos Princípios Fundamentais</h1>

	<p><span class="artigo">Art. 1º.</span> A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito e tem como fundamentos:</p>

	<p>I - a soberania;</p>

	<p>II - a cidadania</p>

	<p>III - a dignidade da pessoa humana;</p>

	<p>IV - os valores sociais do trabalho e da livre iniciativa; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13874.htm#art1">(Vide Lei nº 13.874, de 2019) </a></p>

	<p>V - o pluralismo político.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição.</p>

	<p><span class="artigo">Art. 2º.</span> São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.</p>

	<p><span class="artigo">Art. 3º.</span> Constituem objetivos fundamentais da República Federativa do Brasil:</p>

	<p>I - construir uma sociedade livre, justa e solidária;</p>

	<p>II - garantir o desenvolvimento nacional;</p>

	<p>III - erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;</p>

	<p>IV - promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.</p>

	<p><span class="artigo">Art. 4º.</span> A República Federativa do Brasil rege-se nas suas relações internacionais pelos seguintes princípios:</p>

	<p>I - independência nacional;</p>

	<p>II - prevalência dos direitos humanos;</p>

	<p>III - autodeterminação dos povos;</p>

	<p>IV - não-intervenção;</p>

	<p>V - igualdade entre os Estados;</p>

	<p>VI - defesa da paz;</p>

	<p>VII - solução pacífica dos conflitos;</p>

	<p>VIII - repúdio ao terrorismo e ao racismo;</p>

	<p>IX - cooperação entre os povos para o progresso da humanidade;</p>

	<p>X - concessão de asilo político.</p>

	<p><span class="paragrafo">Parágrafo único.</span> A República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América Latina, visando à formação de uma comunidade latino-americana de nações.</p>

	<h1>TÍTULO II<br>
	Dos Direitos e Garantias Fundamentais</h1>

	<h2 class="sum2">CAPÍTULO I<br>
	Dos Direitos e Deveres Individuais e Coletivos</h2>

	<p><span class="artigo">Art. 5º.</span> Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:</a></p>

	<p>I - homens e mulheres são iguais em direitos e obrigações, nos termos desta Constituição;</p>

	<p>II - ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei;</p>

	<p>III - ninguém será submetido a tortura nem a tratamento desumano ou degradante;</p>

	<p>IV - é livre a manifestação do pensamento, sendo vedado o anonimato;</p>

	<p>V - é assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem;</p>

	<p>VI - é inviolável a liberdade de consciência e de crença, sendo assegurado o livre exercício dos cultos religiosos e garantida, na forma da lei, a proteção aos locais de culto e a suas liturgias;</p>

	<p>VII - é assegurada, nos termos da lei, a prestação de assistência religiosa nas entidades civis e militares de internação coletiva;</p>

	<p>VIII - ninguém será privado de direitos por motivo de crença religiosa ou de convicção filosófica ou política, salvo se as invocar para eximir-se de obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa, fixada em lei;</p>

	<p>IX - é livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença;</p>

	<p>X - são invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito a indenização pelo dano material ou moral decorrente de sua violação;</p>

	<p>XI - a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial; </a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13105.htm#art212%C2%A72">(Vide Lei nº 13.105, de 2015)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13105.htm#art1045">(Vigência)</a></p>

	<p>XII - é inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas, salvo, no último caso, por ordem judicial, nas hipóteses e na forma que a lei estabelecer para fins de investigação criminal ou instrução processual penal; <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9296.htm">(Vide Lei nº 9.296, de 1996)</a></p>

	<p>XIII - é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer;</p>

	<p>XIV - é assegurado a todos o acesso à informação e resguardado o sigilo da fonte, quando necessário ao exercício profissional;</p>

	<p>XV - é livre a locomoção no território nacional em tempo de paz, podendo qualquer pessoa, nos termos da lei, nele entrar, permanecer ou dele sair com seus bens;</p>

	<p>XVI - todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade competente;</p>

	<p>XVII - é plena a liberdade de associação para fins lícitos, vedada a de caráter paramilitar;</p>

	<p>XVIII - a criação de associações e, na forma da lei, a de cooperativas independem de autorização, sendo vedada a interferência estatal em seu funcionamento;</p>

	<p>XIX - as associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no primeiro caso, o trânsito em julgado;</p>

	<p>XX - ninguém poderá ser compelido a associar-se ou a permanecer associado;</p>

	<p>XXI - as entidades associativas, quando expressamente autorizadas, têm legitimidade para representar seus filiados judicial ou extrajudicialmente;</p>

	<p>XXII - é garantido o direito de propriedade;</p>

	<p>XXIII - a propriedade atenderá a sua função social;</p>

	<p>XXIV - a lei estabelecerá o procedimento para desapropriação por necessidade ou utilidade pública, ou por interesse social, mediante justa e prévia indenização em dinheiro, ressalvados os casos previstos nesta Constituição;</p>

	<p>XXV - no caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular, assegurada ao proprietário indenização ulterior, se houver dano;</p>

	<p>XXVI - a pequena propriedade rural, assim definida em lei, desde que trabalhada pela família, não será objeto de penhora para pagamento de débitos decorrentes de sua atividade produtiva, dispondo a lei sobre os meios de financiar o seu desenvolvimento;</p>

	<p>XXVII - aos autores pertence o direito exclusivo de utilização, publicação ou reprodução de suas obras, transmissível aos herdeiros pelo tempo que a lei fixar;</p>

	<p>XXVIII - são assegurados, nos termos da lei:</p>

	<p class="alinea">a) a proteção às participações individuais em obras coletivas e à reprodução da imagem e voz humanas, inclusive nas atividades desportivas;</p>

	<p class="alinea">b) o direito de fiscalização do aproveitamento econômico das obras que criarem ou de que participarem aos criadores, aos intérpretes e às respectivas representações sindicais e associativas;</p>

	<p>XXIX - a lei assegurará aos autores de inventos industriais privilégio temporário para sua utilização, bem como proteção às criações industriais, à propriedade das marcas, aos nomes de empresas e a outros signos distintivos, tendo em vista o interesse social e o desenvolvimento tecnológico e econômico do País;</p>

	<p>XXX - é garantido o direito de herança;</p>

	<p>XXXI - a sucessão de bens de estrangeiros situados no País será regulada pela lei brasileira em benefício do cônjuge ou dos filhos brasileiros, sempre que não lhes seja mais favorável a lei pessoal do "de cujus";</p>

	<p>XXXII - o Estado promoverá, na forma da lei, a defesa do consumidor;</p>

	<p>XXXIII - todos têm direito a receber dos órgãos públicos informações de seu interesse particular, ou de interesse coletivo ou geral, que serão prestadas no prazo da lei, sob pena de responsabilidade, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2005/Lei/L11111.htm">(Regulamento)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2011/Lei/L12527.htm">(Vide Lei nº 12.527, de 2011)</a></p>

	<p>XXXIV - são a todos assegurados, independentemente do pagamento de taxas:</p>

	<p class="alinea">a) o direito de petição aos Poderes Públicos em defesa de direitos ou contra ilegalidade ou abuso de poder;</p>

	<p class="alinea">b) a obtenção de certidões em repartições públicas, para defesa de direitos e esclarecimento de situações de interesse pessoal;</p>

	<p>XXXV - a lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito;</p>

	<p>XXXVI - a lei não prejudicará o direito adquirido, o ato jurídico perfeito e a coisa julgada;</p>

	<p>XXXVII - não haverá juízo ou tribunal de exceção;</p>

	<p>XXXVIII - é reconhecida a instituição do júri, com a organização que lhe der a lei, assegurados:</p>

	<p class="alinea">a) a plenitude de defesa;</p>

	<p class="alinea">b) o sigilo das votações;</p>

	<p class="alinea">c) a soberania dos veredictos;</p>

	<p class="alinea">d) a competência para o julgamento dos crimes dolosos contra a vida;</p>

	<p>XXXIX - não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal;</p>

	<p>XL - a lei penal não retroagirá, salvo para beneficiar o réu;</p>

	<p>XLI - a lei punirá qualquer discriminação atentatória dos direitos e liberdades fundamentais;</p>

	<p>XLII - a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei;</p>

	<p>XLIII - a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2016/Lei/L13260.htm">(Regulamento)</a></p>

	<p>XLIV - constitui crime inafiançável e imprescritível a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático;</p>

	<p>XLV - nenhuma pena passará da pessoa do condenado, podendo a obrigação de reparar o dano e a decretação do perdimento de bens ser, nos termos da lei, estendidas aos sucessores e contra eles executadas, até o limite do valor do patrimônio transferido;</p>

	<p>XLVI - a lei regulará a individualização da pena e adotará, entre outras, as seguintes:</p>

	<p class="alinea">a) privação ou restrição da liberdade;</p>

	<p class="alinea">b) perda de bens;</p>

	<p class="alinea">c) multa;</p>

	<p class="alinea">d) prestação social alternativa;</p>

	<p class="alinea">e) suspensão ou interdição de direitos;</p>

	<p>XLVII - não haverá penas:</p>

	<p class="alinea">a) de morte, salvo em caso de guerra declarada, nos termos do art. 84, XIX;</p>

	<p class="alinea">b) de caráter perpétuo;</p>

	<p class="alinea">c) de trabalhos forçados;</p>

	<p class="alinea">d) de banimento;</p>

	<p class="alinea">e) cruéis;</p>

	<p>XLVIII - a pena será cumprida em estabelecimentos distintos, de acordo com a natureza do delito, a idade e o sexo do apenado;</p>

	<p>XLIX - é assegurado aos presos o respeito à integridade física e moral;</p>

	<p>L - às presidiárias serão asseguradas condições para que possam permanecer com seus filhos durante o período de amamentação;</p>

	<p>LI - nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum, praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei;</p>

	<p>LII - não será concedida extradição de estrangeiro por crime político ou de opinião;</p>

	<p>LIII - ninguém será processado nem sentenciado senão pela autoridade competente;</p>

	<p>LIV - ninguém será privado da liberdade ou de seus bens sem o devido processo legal;</p>

	<p>LV - aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes;</p>

	<p>LVI - são inadmissíveis, no processo, as provas obtidas por meios ilícitos;</p>

	<p>LVII - ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória;</p>

	<p>LVIII - o civilmente identificado não será submetido a identificação criminal, salvo nas hipóteses previstas em lei; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Lei/L12037.htm">(Regulamento)</a></p>

	<p>LIX - será admitida ação privada nos crimes de ação pública, se esta não for intentada no prazo legal;</p>

	<p>LX - a lei só poderá restringir a publicidade dos atos processuais quando a defesa da intimidade ou o interesse social o exigirem;</p>

	<p>LXI - ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar, definidos em lei;</p>

	<p>LXII - a prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada;</p>

	<p>LXIII - o preso será informado de seus direitos, entre os quais o de permanecer calado, sendo-lhe assegurada a assistência da família e de advogado;</p>

	<p>LXIV - o preso tem direito à identificação dos responsáveis por sua prisão ou por seu interrogatório policial;</p>

	<p>LXV - a prisão ilegal será imediatamente relaxada pela autoridade judiciária;</p>

	<p>LXVI - ninguém será levado à prisão ou nela mantido, quando a lei admitir a liberdade provisória, com ou sem fiança;</p>

	<p>LXVII - não haverá prisão civil por dívida, salvo a do responsável pelo inadimplemento voluntário e inescusável de obrigação alimentícia e a do depositário infiel;</p>

	<p>LXVIII - conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder;</p>

	<p>LXIX - conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público;</p>

	<p>LXX - o mandado de segurança coletivo pode ser impetrado por:</p>

	<p class="alinea">a) partido político com representação no Congresso Nacional;</p>

	<p class="alinea">b) organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano, em defesa dos interesses de seus membros ou associados;</p>

	<p>LXXI - conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania;</p>

	<p>LXXII - conceder-se-á habeas data:</p>

	<p class="alinea">a) para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público;</p>

	<p class="alinea">b) para a retificação de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo;</p>

	<p>LXXIII - qualquer cidadão é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando o autor, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência;</p>

	<p>LXXIV - o Estado prestará assistência jurídica integral e gratuita aos que comprovarem insuficiência de recursos;</p>

	<p>LXXV - o Estado indenizará o condenado por erro judiciário, assim como o que ficar preso além do tempo fixado na sentença;</p>

	<p>LXXVI - são gratuitos para os reconhecidamente pobres, na forma da lei: <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L7844.htm">(Vide Lei nº 7.844, de 1989)</a></p>

	<p class="alinea">a) o registro civil de nascimento;</p>

	<p class="alinea">b) a certidão de óbito;</p>

	<p>LXXVII - são gratuitas as ações de habeas corpus e habeas data, e, na forma da lei, os atos necessários ao exercício da cidadania. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9265.htm">(Regulamento)</a></p>

	<p>LXXVIII - a todos, no âmbito judicial e administrativo, são assegurados a razoável duração do processo e os meios que garantam a celeridade de sua tramitação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a><a href="http://portal.stf.jus.br/processos/detalhe.asp?incidente=2267506">(Vide ADIN 3392)</a></p>

	<p>LXXIX - é assegurado, nos termos da lei, o direito à proteção dos dados pessoais, inclusive nos meios digitais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc115.htm#art1">(Incluído pela Emenda Constitucional nº 115, de 2022) </a></p>

	<p><span class="paragrafo">§ 1º.</span> As normas definidoras dos direitos e garantias fundamentais têm aplicação imediata.</p>

	<p><span class="paragrafo">§ 2º.</span> Os direitos e garantias expressos nesta Constituição não excluem outros decorrentes do regime e dos princípios por ela adotados, ou dos tratados internacionais em que a República Federativa do Brasil seja parte.</p>

	<p><span class="paragrafo">§ 3º.</span> Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a> (Atos aprovados na forma deste parágrafo: <a href="http://www.planalto.gov.br/ccivil_03/CONGRESSO/DLG/DLG-186-2008.htm">DLG nº 186, de 2008</a>, <a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Decreto/D6949.htm">DEC 6.949, de 2009</a>, <a href="http://www.planalto.gov.br/ccivil_03/CONGRESSO/DLG/DLG-261-2015.htm">DLG 261, de 2015</a>, <a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2018/Decreto/D9522.htm">DEC 9.522, de 2018</a>) <a href="http://portal.stf.jus.br/processos/detalhe.asp?incidente=2267506">(Vide ADIN 3392)</a></p>

	<p><span class="paragrafo">§ 4º.</span> O Brasil se submete à jurisdição de Tribunal Penal Internacional a cuja criação tenha manifestado adesão. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<h2 class="sum2">CAPÍTULO II<br>
	Dos Direitos Sociais</h2>

	<p><span class="artigo">Art. 6º.</span> São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc90.htm">(Redação dada pela Emenda Constitucional nº 90, de 2015)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar, garantida pelo poder público em programa permanente de transferência de renda, cujas normas e requisitos de acesso serão determinados em lei, observada a legislação fiscal e orçamentária <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art1">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="artigo">Art. 7º.</span> São direitos dos trabalhadores urbanos e rurais, além de outros que visem à melhoria de sua condição social:</p>

	<p>I - relação de emprego protegida contra despedida arbitrária ou sem justa causa, nos termos de lei complementar, que preverá indenização compensatória, dentre outros direitos;</p>

	<p>II - seguro-desemprego, em caso de desemprego involuntário;</p>

	<p>III - fundo de garantia do tempo de serviço;</p>

	<p>IV - salário mínimo, fixado em lei, nacionalmente unificado, capaz de atender a suas necessidades vitais básicas e às de sua família com moradia, alimentação, educação, saúde, lazer, vestuário, higiene, transporte e previdência social, com reajustes periódicos que lhe preservem o poder aquisitivo, sendo vedada sua vinculação para qualquer fim;</p>

	<p>V - piso salarial proporcional à extensão e à complexidade do trabalho;</p>

	<p>VI - irredutibilidade do salário, salvo o disposto em convenção ou acordo coletivo;</p>

	<p>VII - garantia de salário, nunca inferior ao mínimo, para os que percebem remuneração variável;</p>

	<p>VIII - décimo terceiro salário com base na remuneração integral ou no valor da aposentadoria;</p>

	<p>IX – remuneração do trabalho noturno superior à do diurno;</p>

	<p>X - proteção do salário na forma da lei, constituindo crime sua retenção dolosa;</p>

	<p>XI – participação nos lucros, ou resultados, desvinculada da remuneração, e, excepcionalmente, participação na gestão da empresa, conforme definido em lei;</p>

	<p>XII - salário-família pago em razão do dependente do trabalhador de baixa renda nos termos da lei; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art7xii">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>XIII - duração do trabalho normal não superior a oito horas diárias e quarenta e quatro semanais, facultada a compensação de horários e a redução da jornada, mediante acordo ou convenção coletiva de trabalho; <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/Del5452.htm#art478%C2%A72">(Vide Decreto-Lei nº 5.452, de 1943)</a></p>

	<p>XIV - jornada de seis horas para o trabalho realizado em turnos ininterruptos de revezamento, salvo negociação coletiva;</p>

	<p>XV - repouso semanal remunerado, preferencialmente aos domingos;</p>

	<p>XVI - remuneração do serviço extraordinário superior, no mínimo, em cinquenta por cento à do normal; <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/Del5452.htm#art59%C2%A71">(Vide Del 5.452, art. 59 § 1º)</a></p>

	<p>XVII - gozo de férias anuais remuneradas com, pelo menos, um terço a mais do que o salário normal;</p>

	<p>XVIII - licença à gestante, sem prejuízo do emprego e do salário, com a duração de cento e vinte dias;</p>

	<p>XIX - licença-paternidade, nos termos fixados em lei;</p>

	<p>XX - proteção do mercado de trabalho da mulher, mediante incentivos específicos, nos termos da lei;</p>

	<p>XXI - aviso prévio proporcional ao tempo de serviço, sendo no mínimo de trinta dias, nos termos da lei;</p>

	<p>XXII - redução dos riscos inerentes ao trabalho, por meio de normas de saúde, higiene e segurança;</p>

	<p>XXIII - adicional de remuneração para as atividades penosas, insalubres ou perigosas, na forma da lei;</p>

	<p>XXIV - aposentadoria;</p>

	<p>XXV - assistência gratuita aos filhos e dependentes desde o nascimento até 5 (cinco) anos de idade em creches e pré-escolas; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Redação dada pela Emenda Constitucional nº 53, de 2006)</a></p>

	<p>XXVI - reconhecimento das convenções e acordos coletivos de trabalho;</p>

	<p>XXVII - proteção em face da automação, na forma da lei;</p>

	<p>XXVIII - seguro contra acidentes de trabalho, a cargo do empregador, sem excluir a indenização a que este está obrigado, quando incorrer em dolo ou culpa;</p>

	<p>XXIX - ação, quanto aos créditos resultantes das relações de trabalho, com prazo prescricional de cinco anos para os trabalhadores urbanos e rurais, até o limite de dois anos após a extinção do contrato de trabalho; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc28.htm#art1">(Redação dada pela Emenda Constitucional nº 28, de 2000)</a></p>

	<p class="alinea">a) (Revogada). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc28.htm#art1">(Redação dada pela Emenda Constitucional nº 28, de 2000)</a></p>

	<p class="alinea">b) (Revogada). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc28.htm#art1">(Redação dada pela Emenda Constitucional nº 28, de 2000)</a></p>

	<p>XXX - proibição de diferença de salários, de exercício de funções e de critério de admissão por motivo de sexo, idade, cor ou estado civil;</p>

	<p>XXXI - proibição de qualquer discriminação no tocante a salário e critérios de admissão do trabalhador portador de deficiência;</p>

	<p>XXXII - proibição de distinção entre trabalho manual, técnico e intelectual ou entre os profissionais respectivos;</p>

	<p>XXXIII - proibição de trabalho noturno, perigoso ou insalubre a menores de dezoito e de qualquer trabalho a menores de dezesseis anos, salvo na condição de aprendiz, a partir de quatorze anos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art7xxxiii">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>XXXIV - igualdade de direitos entre o trabalhador com vínculo empregatício permanente e o trabalhador avulso.</p>

	<p><span class="paragrafo">Parágrafo único.</span> São assegurados à categoria dos trabalhadores domésticos os direitos previstos nos incisos IV, VI, VII, VIII, X, XIII, XV, XVI, XVII, XVIII, XIX, XXI, XXII, XXIV, XXVI, XXX, XXXI e XXXIII e, atendidas as condições estabelecidas em lei e observada a simplificação do cumprimento das obrigações tributárias, principais e acessórias, decorrentes da relação de trabalho e suas peculiaridades, os previstos nos incisos I, II, III, IX, XII, XXV e XXVIII, bem como a sua integração à previdência social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc72.htm">(Redação dada pela Emenda Constitucional nº 72, de 2013)</a></p>

	<p><span class="artigo">Art. 8º.</span> É livre a associação profissional ou sindical, observado o seguinte:</p>

	<p>I - a lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical;</p>

	<p>II - é vedada a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Município;</p>

	<p>III - ao sindicato cabe a defesa dos direitos e interesses coletivos ou individuais da categoria, inclusive em questões judiciais ou administrativas;</p>

	<p>IV - a assembleia geral fixará a contribuição que, em se tratando de categoria profissional, será descontada em folha, para custeio do sistema confederativo da representação sindical respectiva, independentemente da contribuição prevista em lei;</p>

	<p>V - ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato;</p>

	<p>VI - é obrigatória a participação dos sindicatos nas negociações coletivas de trabalho;</p>

	<p>VII - o aposentado filiado tem direito a votar e ser votado nas organizações sindicais;</p>

	<p>VIII - é vedada a dispensa do empregado sindicalizado a partir do registro da candidatura a cargo de direção ou representação sindical e, se eleito, ainda que suplente, até um ano após o final do mandato, salvo se cometer falta grave nos termos da lei.</p>

	<p><span class="paragrafo">Parágrafo único.</span> As disposições deste artigo aplicam-se à organização de sindicatos rurais e de colônias de pescadores, atendidas as condições que a lei estabelecer.</p>

	<p><span class="artigo">Art. 9º.</span> É assegurado o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender.</p>

	<p><span class="paragrafo">§ 1º.</span> A lei definirá os serviços ou atividades essenciais e disporá sobre o atendimento das necessidades inadiáveis da comunidade.</p>

	<p><span class="paragrafo">§ 2º.</span> Os abusos cometidos sujeitam os responsáveis às penas da lei.</p>

	<p><span class="artigo">Art. 10.</span> É assegurada a participação dos trabalhadores e empregadores nos colegiados dos órgãos públicos em que seus interesses profissionais ou previdenciários sejam objeto de discussão e deliberação.</p>

	<p><span class="artigo">Art. 11.</span> Nas empresas de mais de duzentos empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores.</a></p>

	<h2 class="sum2">CAPÍTULO III<br>
	Da Nacionalidade</h2>

	<p><span class="artigo">Art. 12.</span> São brasileiros:</p>

	<p>I - natos:</p>

	<p class="alinea">a) os nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país;</p>

	<p class="alinea">b) os nascidos no estrangeiro, de pai brasileiro ou mãe brasileira, desde que qualquer deles esteja a serviço da República Federativa do Brasil;</p>

	</a><p class="alinea">c) os nascidos no estrangeiro de pai brasileiro ou de mãe brasileira, desde que sejam registrados em repartição brasileira competente ou venham a residir na República Federativa do Brasil e optem, em qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira; </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc54.htm#art1">(Redação dada pela Emenda Constitucional nº 54, de 2007)</a></p>

	<p>II - naturalizados:</p>

	<p class="alinea">a) os que, na forma da lei, adquiram a nacionalidade brasileira, exigidas aos originários de países de língua portuguesa apenas residência por um ano ininterrupto e idoneidade moral;</p>

	<p class="alinea">b) os estrangeiros de qualquer nacionalidade, residentes na República Federativa do Brasil há mais de quinze anos ininterruptos e sem condenação penal, desde que requeiram a nacionalidade brasileira. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr3.htm#art12iib">(Redação dada pela Emenda Constitucional de Revisão nº 3, de 1994)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Aos portugueses com residência permanente no País, se houver reciprocidade em favor de brasileiros, serão atribuídos os direitos inerentes ao brasileiro, salvo os casos previstos nesta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr3.htm#art12%C2%A71">(Redação dada pela Emenda Constitucional de Revisão nº 3, de 1994)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A lei não poderá estabelecer distinção entre brasileiros natos e naturalizados, salvo nos casos previstos nesta Constituição.</p>

	<p><span class="paragrafo">§ 3º.</span> São privativos de brasileiro nato os cargos:</p>

	<p>I - de Presidente e Vice-Presidente da República;</p>

	<p>II - de Presidente da Câmara dos Deputados;</p>

	<p>III - de Presidente do Senado Federal;</p>

	<p>IV - de Ministro do Supremo Tribunal Federal;</p>

	<p>V - da carreira diplomática;</p>

	<p>VI - de oficial das Forças Armadas.</p>

	<p>VII - de Ministro de Estado da Defesa <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc23.htm#art12%C2%A73vii">(Incluído pela Emenda Constitucional nº 23, de 1999)</a></p>

	<p><span class="paragrafo">§ 4º.</span> - Será declarada a perda da nacionalidade do brasileiro que:</p>

	<p>I - tiver cancelada sua naturalização, por sentença judicial, em virtude de fraude relacionada ao processo de naturalização ou de atentado contra a ordem constitucional e o Estado Democrático;</p>

	<p>II - fizer pedido expresso de perda da nacionalidade brasileira perante autoridade brasileira competente, ressalvadas situações que acarretem apatridia.</p>

	<ul class="dica">
		<li>Incisos I e II acrescidos pela Emenda Constitucional nº 131 de 3 de outubro de 2023.</li>
	</ul>

	<p><span class="paragrafo">§ 5º A.</span> renúncia da nacionalidade, nos termos do inciso II do § 4º deste artigo, não impede o interessado de readquirir sua nacionalidade brasileira originária, nos termos da lei.</p>

	<p class="alinea">a) (Revogado pela Emenda Constitucional nº 131 de 3 de outubro de 2023.)</p>

	<p class="alinea">b) (Revogado pela Emenda Constitucional nº 131 de 3 de outubro de 2023.)</p>

	<p><span class="artigo">Art. 13.</span> A língua portuguesa é o idioma oficial da República Federativa do Brasil.</a></p>

	<p><span class="paragrafo">§ 1º.</span> São símbolos da República Federativa do Brasil a bandeira, o hino, as armas e o selo nacionais.</p>

	<p><span class="paragrafo">§ 2º.</span> Os Estados, o Distrito Federal e os Municípios poderão ter símbolos próprios.</p>

	<h2 class="sum2">CAPÍTULO IV<br>
	Dos Direitos Políticos</h2>

	<p><span class="artigo">Art. 14.</span> A soberania popular será exercida pelo sufrágio universal e pelo voto direto e secreto, com valor igual para todos, e, nos termos da lei, mediante:</p>

	<p>I - plebiscito;</p>

	<p>II - referendo;</p>

	<p>III - iniciativa popular.</p>

	<p><span class="paragrafo">§ 1º.</span> O alistamento eleitoral e o voto são:</p>

	<p>I - obrigatórios para os maiores de dezoito anos;</p>

	<p>II - facultativos para:</p>

	<p class="alinea">a) os analfabetos;</p>

	<p class="alinea">b) os maiores de setenta anos;</p>

	<p class="alinea">c) os maiores de dezesseis e menores de dezoito anos.</p>

	<p><span class="paragrafo">§ 2º.</span> Não podem alistar-se como eleitores os estrangeiros e, durante o período do serviço militar obrigatório, os conscritos.</p>

	<p><span class="paragrafo">§ 3º.</span> São condições de elegibilidade, na forma da lei:</p>

	<p>I - a nacionalidade brasileira;</p>

	<p>II - o pleno exercício dos direitos políticos;</p>

	<p>III - o alistamento eleitoral;</p>

	<p>IV - o domicílio eleitoral na circunscrição;</p>

	</a><p>V - a filiação partidária; </a><a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9096.htm">Regulamento</a></p>

	<p>VI - a idade mínima de:</p>

	<p class="alinea">a) trinta e cinco anos para Presidente e Vice-Presidente da República e Senador;</p>

	<p class="alinea">b) trinta anos para Governador e Vice-Governador de Estado e do Distrito Federal;</p>

	<p class="alinea">c) vinte e um anos para Deputado Federal, Deputado Estadual ou Distrital, Prefeito, Vice-Prefeito e juiz de paz;</p>

	<p class="alinea">d) dezoito anos para Vereador.</p>

	<p><span class="paragrafo">§ 4º.</span> São inelegíveis os inalistáveis e os analfabetos.</p>

	<p><span class="paragrafo">§ 5º.</span> O Presidente da República, os Governadores de Estado e do Distrito Federal, os Prefeitos e quem os houver sucedido, ou substituído no curso dos mandatos poderão ser reeleitos para um único período subsequente. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc16.htm#art1">(Redação dada pela Emenda Constitucional nº 16, de 1997)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Para concorrerem a outros cargos, o Presidente da República, os Governadores de Estado e do Distrito Federal e os Prefeitos devem renunciar aos respectivos mandatos até seis meses antes do pleito.</p>

	<p><span class="paragrafo">§ 7º.</span> São inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins, até o segundo grau ou por adoção, do Presidente da República, de Governador de Estado ou Território, do Distrito Federal, de Prefeito ou de quem os haja substituído dentro dos seis meses anteriores ao pleito, salvo se já titular de mandato eletivo e candidato à reeleição.</p>

	<p><span class="paragrafo">§ 8º.</span> O militar alistável é elegível, atendidas as seguintes condições:</p>

	<p>I - se contar menos de dez anos de serviço, deverá afastar-se da atividade;</p>

	<p>II - se contar mais de dez anos de serviço, será agregado pela autoridade superior e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade.</p>

	<p><span class="paragrafo">§ 9º.</span> Lei complementar estabelecerá outros casos de inelegibilidade e os prazos de sua cessação, a fim de proteger a probidade administrativa, a moralidade para exercício de mandato considerada vida pregressa do candidato, e a normalidade e legitimidade das eleições contra a influência do poder econômico ou o abuso do exercício de função, cargo ou emprego na administração direta ou indireta. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr4.htm#art1">(Redação dada pela Emenda Constitucional de Revisão nº 4, de 1994)</a></p>

	<p>§ 10. O mandato eletivo poderá ser impugnado ante a Justiça Eleitoral no prazo de quinze dias contados da diplomação, instruída a ação com provas de abuso do poder econômico, corrupção ou fraude.</p>

	<p>§ 11. A ação de impugnação de mandato tramitará em segredo de justiça, respondendo o autor, na forma da lei, se temerária ou de manifesta má-fé.</p>

	<p>§ 12. Serão realizadas concomitantemente às eleições municipais as consultas populares sobre questões locais aprovadas pelas Câmaras Municipais e encaminhadas à Justiça Eleitoral até 90 (noventa) dias antes da data das eleições, observados os limites operacionais relativos ao número de quesitos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc111.htm#art1">(Incluído pela Emenda Constitucional nº 111, de 2021) </a></p>

	<p>§ 13. As manifestações favoráveis e contrárias às questões submetidas às consultas populares nos termos do § 12 ocorrerão durante as campanhas eleitorais, sem a utilização de propaganda gratuita no rádio e na televisão. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc111.htm#art1">(Incluído pela Emenda Constitucional nº 111, de 2021) </a></p>

	<p><span class="artigo">Art. 15.</span> É vedada a cassação de direitos políticos, cuja perda ou suspensão só se dará nos casos de:</p>

	<p>I - cancelamento da naturalização por sentença transitada em julgado;</p>

	<p>II - incapacidade civil absoluta;</p>

	<p>III - condenação criminal transitada em julgado, enquanto durarem seus efeitos;</p>

	<p>IV - recusa de cumprir obrigação a todos imposta ou prestação alternativa, nos termos do art. 5º, VIII;</p>

	<p>V - improbidade administrativa, nos termos do art. 37, <span class="paragrafo">§ 4º.</span></p><p></p>

	<p><span class="artigo">Art. 16.</span> A lei que alterar o processo eleitoral entrará em vigor na data de sua publicação, não se aplicando à eleição que ocorra até um ano da data de sua vigência. </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc04.htm">(Redação dada pela Emenda Constitucional nº 4, de 1993)</a></p>

	<h2 class="sum2">CAPÍTULO V<br>
	Dos Partidos Políticos</h2>

	<p><span class="artigo">Art. 17.</span> É livre a criação, fusão, incorporação e extinção de partidos políticos, resguardados a soberania nacional, o regime democrático, o pluripartidarismo, os direitos fundamentais da pessoa humana e observados os seguintes preceitos: <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9096.htm">Regulamento</a></p>

	<p>I - caráter nacional;</p>

	<p>II - proibição de recebimento de recursos financeiros de entidade ou governo estrangeiros ou de subordinação a estes;</p>

	<p>III - prestação de contas à Justiça Eleitoral;</p>

	<p>IV - funcionamento parlamentar de acordo com a lei.</p>

	<p><span class="paragrafo">§ 1º.</span> É assegurada aos partidos políticos autonomia para definir sua estrutura interna e estabelecer regras sobre escolha, formação e duração de seus órgãos permanentes e provisórios e sobre sua organização e funcionamento e para adotar os critérios de escolha e o regime de suas coligações nas eleições majoritárias, vedada a sua celebração nas eleições proporcionais, sem obrigatoriedade de vinculação entre as candidaturas em âmbito nacional, estadual, distrital ou municipal, devendo seus estatutos estabelecer normas de disciplina e fidelidade partidária. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc97.htm#art1">(Redação dada pela Emenda Constitucional nº 97, de 2017)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os partidos políticos, após adquirirem personalidade jurídica, na forma da lei civil, registrarão seus estatutos no Tribunal Superior Eleitoral.</p>

	<p><span class="paragrafo">§ 3º.</span> Somente terão direito a recursos do fundo partidário e acesso gratuito ao rádio e à televisão, na forma da lei, os partidos políticos que alternativamente: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc97.htm#art1">(Redação dada pela Emenda Constitucional nº 97, de 2017)</a></p>

	<p>I - obtiverem, nas eleições para a Câmara dos Deputados, no mínimo, 3% (três por cento) dos votos válidos, distribuídos em pelo menos um terço das unidades da Federação, com um mínimo de 2% (dois por cento) dos votos válidos em cada uma delas; ou <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc97.htm#art1">(Incluído pela Emenda Constitucional nº 97, de 2017)</a></p>

	<p>II - tiverem elegido pelo menos quinze Deputados Federais distribuídos em pelo menos um terço das unidades da Federação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc97.htm#art1">(Incluído pela Emenda Constitucional nº 97, de 2017)</a></p>

	<p><span class="paragrafo">§ 4º.</span> É vedada a utilização pelos partidos políticos de organização paramilitar.</p>

	<p><span class="paragrafo">§ 5º.</span> Ao eleito por partido que não preencher os requisitos previstos no <span class="paragrafo">§ 3º.</span> deste artigo é assegurado o mandato e facultada a filiação, sem perda do mandato, a outro partido que os tenha atingido, não sendo essa filiação considerada para fins de distribuição dos recursos do fundo partidário e de acesso gratuito ao tempo de rádio e de televisão. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc97.htm#art1">(Incluído pela Emenda Constitucional nº 97, de 2017)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Os Deputados Federais, os Deputados Estaduais, os Deputados Distritais e os Vereadores que se desligarem do partido pelo qual tenham sido eleitos perderão o mandato, salvo nos casos de anuência do partido ou de outras hipóteses de justa causa estabelecidas em lei, não computada, em qualquer caso, a migração de partido para fins de distribuição de recursos do fundo partidário ou de outros fundos públicos e de acesso gratuito ao rádio e à televisão. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc111.htm#art1">(Incluído pela Emenda Constitucional nº 111, de 2021) </a></p>

	<p><span class="paragrafo">§ 7º.</span> Os partidos políticos devem aplicar no mínimo 5% (cinco por cento) dos recursos do fundo partidário na criação e na manutenção de programas de promoção e difusão da participação política das mulheres, de acordo com os interesses intrapartidários. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc117.htm">(Incluído pela Emenda Constitucional nº 117)</a></p>

	<p><span class="paragrafo">§ 8º.</span> O montante do Fundo Especial de Financiamento de Campanha e da parcela do fundo partidário destinada a campanhas eleitorais, bem como o tempo de propaganda gratuita no rádio e na televisão a ser distribuído pelos partidos às respectivas candidatas, deverão ser de no mínimo 30% (trinta por cento), proporcional ao número de candidatas, e a distribuição deverá ser realizada conforme critérios definidos pelos respectivos órgãos de direção e pelas normas estatutárias, considerados a autonomia e o interesse partidário. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc117.htm">(Incluído pela Emenda Constitucional nº 117)</a></p>

	<h1>TÍTULO III<br>
	Da Organização do Estado</h1>

	<h2 class="sum2">CAPÍTULO I<br>
	Da Organização Político-Administrativa</h2>

	<p><span class="artigo">Art. 18.</span> A organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos, nos termos desta Constituição.</p>

	<p><span class="paragrafo">§ 1º.</span> Brasília é a Capital Federal.</p>

	<p><span class="paragrafo">§ 2º.</span> Os Territórios Federais integram a União, e sua criação, transformação em Estado ou reintegração ao Estado de origem serão reguladas em lei complementar.</p>

	<p><span class="paragrafo">§ 3º.</span> Os Estados podem incorporar-se entre si, subdividir-se ou desmembrar-se para se anexarem a outros, ou formarem novos Estados ou Territórios Federais, mediante aprovação da população diretamente interessada, através de plebiscito, e do Congresso Nacional, por lei complementar.</p>

	<p><span class="paragrafo">§ 4º.</span> A criação, a incorporação, a fusão e o desmembramento de Municípios, far-se-ão por lei estadual, dentro do período determinado por Lei Complementar Federal, e dependerão de consulta prévia, mediante plebiscito, às populações dos Municípios envolvidos, após divulgação dos Estudos de Viabilidade Municipal, apresentados e publicados na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc15.htm#art1">(Redação dada pela Emenda Constitucional nº 15, de 1996)</a><a href="#art96adct">Vide art. 96 - ADCT </a></p>

	<p><span class="artigo">Art. 19.</span> É vedado à União, aos Estados, ao Distrito Federal e aos Municípios:</a></p>

	<p>I - estabelecer cultos religiosos ou igrejas, subvencioná-los, embaraçar-lhes o funcionamento ou manter com eles ou seus representantes relações de dependência ou aliança, ressalvada, na forma da lei, a colaboração de interesse público;</p>

	<p>II - recusar fé aos documentos públicos;</p>

	<p>III - criar distinções entre brasileiros ou preferências entre si.</p>

	<h2 class="sum2">CAPÍTULO II<br>
	Da União</h2>

	<p><span class="artigo">Art. 20.</span> São bens da União:</p>

	<p>I - os que atualmente lhe pertencem e os que lhe vierem a ser atribuídos;</p>

	<p>II - as terras devolutas indispensáveis à defesa das fronteiras, das fortificações e construções militares, das vias federais de comunicação e à preservação ambiental, definidas em lei;</p>

	<p>III - os lagos, rios e quaisquer correntes de água em terrenos de seu domínio, ou que banhem mais de um Estado, sirvam de limites com outros países, ou se estendam a território estrangeiro ou dele provenham, bem como os terrenos marginais e as praias fluviais;</p>

	</a><p>IV as ilhas fluviais e lacustres nas zonas limítrofes com outros países; as praias marítimas; as ilhas oceânicas e as costeiras, excluídas, destas, as que contenham a sede de Municípios, exceto aquelas áreas afetadas ao serviço público e a unidade ambiental federal, e as referidas no art. 26, II; </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc46.htm#art1">(Redação dada pela Emenda Constitucional nº 46, de 2005)</a></p>

	<p>V - os recursos naturais da plataforma continental e da zona econômica exclusiva;</p>

	<p>VI - o mar territorial;</p>

	<p>VII - os terrenos de marinha e seus acrescidos;</p>

	<p>VIII - os potenciais de energia hidráulica;</p>

	<p>IX - os recursos minerais, inclusive os do subsolo;</p>

	<p>X - as cavidades naturais subterrâneas e os sítios arqueológicos e pré-históricos;</p>

	<p>XI - as terras tradicionalmente ocupadas pelos índios.</p>

	<p id="art20p1"><span class="paragrafo">§ 1º.</span> É assegurada, nos termos da lei, à União, aos Estados, ao Distrito Federal e aos Municípios a participação no resultado da exploração de petróleo ou gás natural, de recursos hídricos para fins de geração de energia elétrica e de outros recursos minerais no respectivo território, plataforma continental, mar territorial ou zona econômica exclusiva, ou compensação financeira por essa exploração. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art1">(Redação dada pela Emenda Constitucional nº 102, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art4">(Produção de efeito)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A faixa de até cento e cinquenta quilômetros de largura, ao longo das fronteiras terrestres, designada como faixa de fronteira, é considerada fundamental para defesa do território nacional, e sua ocupação e utilização serão reguladas em lei.</p>

	<p><span class="artigo">Art. 21.</span> Compete à União:</p>

	<p>I - manter relações com Estados estrangeiros e participar de organizações internacionais;</p>

	<p>II - declarar a guerra e celebrar a paz;</p>

	<p>III - assegurar a defesa nacional;</p>

	<p>IV - permitir, nos casos previstos em lei complementar, que forças estrangeiras transitem pelo território nacional ou nele permaneçam temporariamente;</p>

	<p>V - decretar o estado de sítio, o estado de defesa e a intervenção federal;</p>

	<p>VI - autorizar e fiscalizar a produção e o comércio de material bélico;</p>

	<p>VII - emitir moeda;</p>

	<p>VIII - administrar as reservas cambiais do País e fiscalizar as operações de natureza financeira, especialmente as de crédito, câmbio e capitalização, bem como as de seguros e de previdência privada;</p>

	<p>IX - elaborar e executar planos nacionais e regionais de ordenação do território e de desenvolvimento econômico e social;</p>

	<p>X - manter o serviço postal e o correio aéreo nacional;</p>

	<p>XI - explorar, diretamente ou mediante autorização, concessão ou permissão, os serviços de telecomunicações, nos termos da lei, que disporá sobre a organização dos serviços, a criação de um órgão regulador e outros aspectos institucionais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc08.htm#art1">(Redação dada pela Emenda Constitucional nº 8, de 15/08/95:)</a></p>

	<p>XII - explorar, diretamente ou mediante autorização, concessão ou permissão:</p>

	<p class="alinea">a) os serviços de radiodifusão sonora, e de sons e imagens; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc08.htm#art1">(Redação dada pela Emenda Constitucional nº 8, de 15/08/95:)</a></p>

	<p class="alinea">b) os serviços e instalações de energia elétrica e o aproveitamento energético dos cursos de água, em articulação com os Estados onde se situam os potenciais hidroenergéticos;</p>

	<p class="alinea">c) a navegação aérea, aeroespacial e a infraestrutura aeroportuária;</p>

	<p class="alinea">d) os serviços de transporte ferroviário e aquaviário entre portos brasileiros e fronteiras nacionais, ou que transponham os limites de Estado ou Território;</p>

	<p class="alinea">e) os serviços de transporte rodoviário interestadual e internacional de passageiros;</p>

	<p class="alinea">f) os portos marítimos, fluviais e lacustres;</p>

	<p>XIII - organizar e manter o Poder Judiciário, o Ministério Público do Distrito Federal e dos Territórios e a Defensoria Pública dos Territórios; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc69.htm#art1">(Redação dada pela Emenda Constitucional nº 69, de 2012)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc69.htm#art4">(Produção de efeito)</a></p>

	<p>XIV - organizar e manter a polícia civil, a polícia penal, a polícia militar e o corpo de bombeiros militar do Distrito Federal, bem como prestar assistência financeira ao Distrito Federal para a execução de serviços públicos, por meio de fundo próprio; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc104.htm#art1">(Redação dada pela Emenda Constitucional nº 104, de 2019) </a></p>

	<p>XV - organizar e manter os serviços oficiais de estatística, geografia, geologia e cartografia de âmbito nacional;</p>

	<p>XVI - exercer a classificação, para efeito indicativo, de diversões públicas e de programas de rádio e televisão;</p>

	<p>XVII - conceder anistia;</p>

	<p>XVIII - planejar e promover a defesa permanente contra as calamidades públicas, especialmente as secas e as inundações;</p>

	<p>XIX - instituir sistema nacional de gerenciamento de recursos hídricos e definir critérios de outorga de direitos de seu uso; (<a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9433.htm">Regulamento</a>)</p>

	<p>XX - instituir diretrizes para o desenvolvimento urbano, inclusive habitação, saneamento básico e transportes urbanos;</p>

	<p>XXI - estabelecer princípios e diretrizes para o sistema nacional de viação;</p>

	<p>XXII - executar os serviços de polícia marítima, aeroportuária e de fronteiras; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art1">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>XXIII - explorar os serviços e instalações nucleares de qualquer natureza e exercer monopólio estatal sobre a pesquisa, a lavra, o enriquecimento e reprocessamento, a industrialização e o comércio de minérios nucleares e seus derivados, atendidos os seguintes princípios e condições:</p>

	<p class="alinea">a) toda atividade nuclear em território nacional somente será admitida para fins pacíficos e mediante aprovação do Congresso Nacional;</p>

	<p class="alinea">b) sob regime de permissão, são autorizadas a comercialização e a utilização de radioisótopos para pesquisa e uso agrícolas e industriais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc118.htm">(Redação dada pela Emenda Constitucional nº 118</a></p>

	<p class="alinea">c) sob regime de permissão, são autorizadas a produção, a comercialização e a utilização de radioisótopos para pesquisa e uso médicos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc118.htm">(Redação dada pela Emenda Constitucional nº 118</a></p>

	<p class="alinea">d) a responsabilidade civil por danos nucleares independe da existência de culpa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc49.htm#art1">(Redação dada pela Emenda Constitucional nº 49, de 2006)</a></p>

	<p>XXIV - organizar, manter e executar a inspeção do trabalho;</p>

	<p>XXV - estabelecer as áreas e as condições para o exercício da atividade de garimpagem, em forma associativa.</p>

	<p>XXVI - organizar e fiscalizar a proteção e o tratamento de dados pessoais, nos termos da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc115.htm#art2">(Incluído pela Emenda Constitucional nº 115, de 2022) </a></p>

	<p><span class="artigo">Art. 22.</span> Compete privativamente à União legislar sobre:</p>

	<p>I - direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho;</p>

	<p>II - desapropriação;</p>

	<p>III - requisições civis e militares, em caso de iminente perigo e em tempo de guerra;</p>

	<p>IV - águas, energia, informática, telecomunicações e radiodifusão;</p>

	<p>V - serviço postal;</p>

	<p>VI - sistema monetário e de medidas, títulos e garantias dos metais;</p>

	<p>VII - política de crédito, câmbio, seguros e transferência de valores;</p>

	<p>VIII - comércio exterior e interestadual;</p>

	<p>IX - diretrizes da política nacional de transportes;</p>

	<p>X - regime dos portos, navegação lacustre, fluvial, marítima, aérea e aeroespacial;</p>

	<p>XI - trânsito e transporte;</p>

	<p>XII - jazidas, minas, outros recursos minerais e metalurgia;</p>

	<p>XIII - nacionalidade, cidadania e naturalização;</p>

	<p>XIV - populações indígenas;</p>

	<p>XV - emigração e imigração, entrada, extradição e expulsão de estrangeiros;</p>

	<p>XVI - organização do sistema nacional de emprego e condições para o exercício de profissões;</p>

	<p>XVII - organização judiciária, do Ministério Público do Distrito Federal e dos Territórios e da Defensoria Pública dos Territórios, bem como organização administrativa destes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc69.htm#art1">(Redação dada pela Emenda Constitucional nº 69, de 2012)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc69.htm#art4">(Produção de efeito)</a></p>

	<p>XVIII - sistema estatístico, sistema cartográfico e de geologia nacionais;</p>

	<p>XIX - sistemas de poupança, captação e garantia da poupança popular;</p>

	<p>XX - sistemas de consórcios e sorteios;</p>

	<p>XXI - normas gerais de organização, efetivos, material bélico, garantias, convocação, mobilização, inatividades e pensões das polícias militares e dos corpos de bombeiros militares; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>XXII - competência da polícia federal e das polícias rodoviária e ferroviária federais;</p>

	<p>XXIII - seguridade social;</p>

	<p>XXIV - diretrizes e bases da educação nacional;</p>

	<p>XXV - registros públicos;</p>

	<p>XXVI - atividades nucleares de qualquer natureza;</p>

	<p>XXVII – normas gerais de licitação e contratação, em todas as modalidades, para as administrações públicas diretas, autárquicas e fundacionais da União, Estados, Distrito Federal e Municípios, obedecido o disposto no art. 37, XXI, e para as empresas públicas e sociedades de economia mista, nos termos do art. 173, § 1°, III; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art1">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>XXVIII - defesa territorial, defesa aeroespacial, defesa marítima, defesa civil e mobilização nacional;</p>

	<p>XXIX - propaganda comercial.</p>

	<p>XXX - proteção e tratamento de dados pessoais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc115.htm#art3">(Incluído pela Emenda Constitucional nº 115, de 2022) </a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Lei complementar poderá autorizar os Estados a legislar sobre questões específicas das matérias relacionadas neste artigo.</p>

	<p><span class="artigo">Art. 23.</span> É competência comum da União, dos Estados, do Distrito Federal e dos Municípios:</p>

	<p>I - zelar pela guarda da Constituição, das leis e das instituições democráticas e conservar o patrimônio público;</p>

	<p>II - cuidar da saúde e assistência pública, da proteção e garantia das pessoas portadoras de deficiência; <a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADPF&amp;documento=&amp;s1=672&amp;numProcesso=672">(Vide ADPF 672)</a></p>

	<p>III - proteger os documentos, as obras e outros bens de valor histórico, artístico e cultural, os monumentos, as paisagens naturais notáveis e os sítios arqueológicos;</p>

	<p>IV - impedir a evasão, a destruição e a descaracterização de obras de arte e de outros bens de valor histórico, artístico ou cultural;</p>

	<p>V - proporcionar os meios de acesso à cultura, à educação, à ciência, à tecnologia, à pesquisa e à inovação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Redação dada pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p>VI - proteger o meio ambiente e combater a poluição em qualquer de suas formas;</p>

	<p>VII - preservar as florestas, a fauna e a flora;</p>

	<p>VIII - fomentar a produção agropecuária e organizar o abastecimento alimentar;</p>

	<p>IX - promover programas de construção de moradias e a melhoria das condições habitacionais e de saneamento básico; <a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADPF&amp;documento=&amp;s1=672&amp;numProcesso=672">(Vide ADPF 672)</a></p>

	<p>X - combater as causas da pobreza e os fatores de marginalização, promovendo a integração social dos setores desfavorecidos;</p>

	<p>XI - registrar, acompanhar e fiscalizar as concessões de direitos de pesquisa e exploração de recursos hídricos e minerais em seus territórios;</p>

	<p>XII - estabelecer e implantar política de educação para a segurança do trânsito.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Leis complementares fixarão normas para a cooperação entre a União e os Estados, o Distrito Federal e os Municípios, tendo em vista o equilíbrio do desenvolvimento e do bem-estar em âmbito nacional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Redação dada pela Emenda Constitucional nº 53, de 2006)</a></p>

	<p><span class="artigo">Art. 24.</span> Compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre:</p>

	<p>I - direito tributário, financeiro, penitenciário, econômico e urbanístico; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13874.htm#art1">(Vide Lei nº 13.874, de 2019) </a></p>

	<p>II - orçamento;</p>

	<p>III - juntas comerciais;</p>

	<p>IV - custas dos serviços forenses;</p>

	<p>V - produção e consumo;</p>

	<p>VI - florestas, caça, pesca, fauna, conservação da natureza, defesa do solo e dos recursos naturais, proteção do meio ambiente e controle da poluição;</p>

	<p>VII - proteção ao patrimônio histórico, cultural, artístico, turístico e paisagístico;</p>

	<p>VIII - responsabilidade por dano ao meio ambiente, ao consumidor, a bens e direitos de valor artístico, estético, histórico, turístico e paisagístico;</p>

	<p>IX - educação, cultura, ensino, desporto, ciência, tecnologia, pesquisa, desenvolvimento e inovação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Redação dada pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p>X - criação, funcionamento e processo do juizado de pequenas causas;</p>

	<p>XI - procedimentos em matéria processual;</p>

	<p>XII - previdência social, proteção e defesa da saúde; <a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADPF&amp;documento=&amp;s1=672&amp;numProcesso=672">(Vide ADPF 672)</a></p>

	<p>XIII - assistência jurídica e Defensoria pública;</p>

	<p>XIV - proteção e integração social das pessoas portadoras de deficiência;</p>

	<p>XV - proteção à infância e à juventude;</p>

	<p>XVI - organização, garantias, direitos e deveres das polícias civis.</p>

	<p><span class="paragrafo">§ 1º.</span> No âmbito da legislação concorrente, a competência da União limitar-se-á a estabelecer normas gerais. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13874.htm#art1">(Vide Lei nº 13.874, de 2019) </a></p>

	<p><span class="paragrafo">§ 2º.</span> A competência da União para legislar sobre normas gerais não exclui a competência suplementar dos Estados. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13874.htm#art1">(Vide Lei nº 13.874, de 2019) </a></p>

	<p><span class="paragrafo">§ 3º.</span> Inexistindo lei federal sobre normas gerais, os Estados exercerão a competência legislativa plena, para atender a suas peculiaridades. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13874.htm#art1">(Vide Lei nº 13.874, de 2019) </a></p>

	<p><span class="paragrafo">§ 4º.</span> A superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual, no que lhe for contrário. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13874.htm#art1">(Vide Lei nº 13.874, de 2019) </a></p>

	<h2 class="sum2">CAPÍTULO III<br>
	Dos Estados Federados</h2>

	<p><span class="artigo">Art. 25.</span> Os Estados organizam-se e regem-se pelas Constituições e leis que adotarem, observados os princípios desta Constituição.</p>

	<p><span class="paragrafo">§ 1º.</span> São reservadas aos Estados as competências que não lhes sejam vedadas por esta Constituição.</p>

	<p><span class="paragrafo">§ 2º.</span> Cabe aos Estados explorar diretamente, ou mediante concessão, os serviços locais de gás canalizado, na forma da lei, vedada a edição de medida provisória para a sua regulamentação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc05.htm#art1">(Redação dada pela Emenda Constitucional nº 5, de 1995)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Os Estados poderão, mediante lei complementar, instituir regiões metropolitanas, aglomerações urbanas e microrregiões, constituídas por agrupamentos de municípios limítrofes, para integrar a organização, o planejamento e a execução de funções públicas de interesse comum.</p>

	<p><span class="artigo">Art. 26.</span> Incluem-se entre os bens dos Estados:</p>

	<p>I - as águas superficiais ou subterrâneas, fluentes, emergentes e em depósito, ressalvadas, neste caso, na forma da lei, as decorrentes de obras da União;</p>

	<p>II - as áreas, nas ilhas oceânicas e costeiras, que estiverem no seu domínio, excluídas aquelas sob domínio da União, Municípios ou terceiros;</p>

	<p>III - as ilhas fluviais e lacustres não pertencentes à União;</p>

	<p>IV - as terras devolutas não compreendidas entre as da União.</p>

	<p><span class="artigo">Art. 27.</span> O número de Deputados à Assembleia Legislativa corresponderá ao triplo da representação do Estado na Câmara dos Deputados e, atingido o número de trinta e seis, será acrescido de tantos quantos forem os Deputados Federais acima de doze.</a></p>

	<p><span class="paragrafo">§ 1º.</span> Será de quatro anos o mandato dos Deputados Estaduais, aplicando- sê-lhes as regras desta Constituição sobre sistema eleitoral, inviolabilidade, imunidades, remuneração, perda de mandato, licença, impedimentos e incorporação às Forças Armadas.</p>

	</a><p><span class="paragrafo">§ 2º.</span> O subsídio dos Deputados Estaduais será fixado por lei de iniciativa da Assembleia Legislativa, na razão de, no máximo, setenta e cinco por cento daquele estabelecido, em espécie, para os Deputados Federais, observado o que dispõem os arts. 39, § 4º, 57, § 7º, 150, II, 153, III, e 153, § 2º, I. </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art2">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Compete às Assembleias Legislativas dispor sobre seu regimento interno, polícia e serviços administrativos de sua secretaria, e prover os respectivos cargos.</p>

	<p><span class="paragrafo">§ 4º.</span> A lei disporá sobre a iniciativa popular no processo legislativo estadual.</p>

	<p><span class="artigo">Art. 28.</span> A eleição do Governador e do Vice-Governador de Estado, para mandato de 4 (quatro) anos, realizar-se-á no primeiro domingo de outubro, em primeiro turno, e no último domingo de outubro, em segundo turno, se houver, do ano anterior ao do término do mandato de seus antecessores, e a posse ocorrerá em 6 de janeiro do ano subsequente, observado, quanto ao mais, o disposto no </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art77">art. 77 desta Constituição</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc111.htm#art1">(Redação dada pela Emenda Constitucional nº 111, de 2021) </a></p>

	<p><span class="paragrafo">§ 1º.</span> Perderá o mandato o Governador que assumir outro cargo ou função na administração pública direta ou indireta, ressalvada a posse em virtude de concurso público e observado o disposto no art. 38, I, IV e V. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art2">(Renumerado do parágrafo único, pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os subsídios do Governador, do Vice-Governador e dos Secretários de Estado serão fixados por lei de iniciativa da Assembleia Legislativa, observado o que dispõem os arts. 37, XI, 39, § 4º, 150, II, 153, III, e 153, § 2º, I. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art2">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<h2 class="sum2">CAPÍTULO IV<br>
	Dos Municípios</h2>

	<p><span class="artigo">Art. 29.</span> O Município reger-se-á por lei orgânica, votada em dois turnos, com o interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal, que a promulgará, atendidos os princípios estabelecidos nesta Constituição, na Constituição do respectivo Estado e os seguintes preceitos:</p>

	<p>I - eleição do Prefeito, do Vice-Prefeito e dos Vereadores, para mandato de quatro anos, mediante pleito direto e simultâneo realizado em todo o País;</p>

	<p>II - eleição do Prefeito e do Vice-Prefeito realizada no primeiro domingo de outubro do ano anterior ao término do mandato dos que devam suceder, aplicadas as regras do art. 77, no caso de Municípios com mais de duzentos mil eleitores; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc16.htm#art1">(Redação dada pela Emenda Constitucional nº 16, de1997)</a></p>

	<p>III - posse do Prefeito e do Vice-Prefeito no dia 1º. de janeiro do ano subsequente ao da eleição;</p>

	<p>IV - para a composição das Câmaras Municipais, será observado o limite máximo de: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Redação dada pela Emenda Constitucional nº 58, de 2009)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art3">(Produção de efeito)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADIN&amp;s1=4307&amp;processo=4307">(Vide ADIN 4307)</a></p>

	<p class="alinea">a) 9 (nove) Vereadores, nos Municípios de até 15.000 (quinze mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Redação dada pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">b) 11 (onze) Vereadores, nos Municípios de mais de 15.000 (quinze mil) habitantes e de até 30.000 (trinta mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Redação dada pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">c) 13 (treze) Vereadores, nos Municípios com mais de 30.000 (trinta mil) habitantes e de até 50.000 (cinquenta mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Redação dada pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">d) 15 (quinze) Vereadores, nos Municípios de mais de 50.000 (cinquenta mil) habitantes e de até 80.000 (oitenta mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">e) 17 (dezessete) Vereadores, nos Municípios de mais de 80.000 (oitenta mil) habitantes e de até 120.000 (cento e vinte mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">f) 19 (dezenove) Vereadores, nos Municípios de mais de 120.000 (cento e vinte mil) habitantes e de até 160.000 (cento sessenta mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">g) 21 (vinte e um) Vereadores, nos Municípios de mais de 160.000 (cento e sessenta mil) habitantes e de até 300.000 (trezentos mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">h) 23 (vinte e três) Vereadores, nos Municípios de mais de 300.000 (trezentos mil) habitantes e de até 450.000 (quatrocentos e cinquenta mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">i) 25 (vinte e cinco) Vereadores, nos Municípios de mais de 450.000 (quatrocentos e cinquenta mil) habitantes e de até 600.000 (seiscentos mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">j) 27 (vinte e sete) Vereadores, nos Municípios de mais de 600.000 (seiscentos mil) habitantes e de até 750.000 (setecentos cinquenta mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">k) 29 (vinte e nove) Vereadores, nos Municípios de mais de 750.000 (setecentos e cinquenta mil) habitantes e de até 900.000 (novecentos mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">l) 31 (trinta e um) Vereadores, nos Municípios de mais de 900.000 (novecentos mil) habitantes e de até 1.050.000 (um milhão e cinquenta mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">m) 33 (trinta e três) Vereadores, nos Municípios de mais de 1.050.000 (um milhão e cinquenta mil) habitantes e de até 1.200.000 (um milhão e duzentos mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">n) 35 (trinta e cinco) Vereadores, nos Municípios de mais de 1.200.000 (um milhão e duzentos mil) habitantes e de até 1.350.000 (um milhão e trezentos e cinquenta mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">o) 37 (trinta e sete) Vereadores, nos Municípios de 1.350.000 (um milhão e trezentos e cinquenta mil) habitantes e de até 1.500.000 (um milhão e quinhentos mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">p) 39 (trinta e nove) Vereadores, nos Municípios de mais de 1.500.000 (um milhão e quinhentos mil) habitantes e de até 1.800.000 (um milhão e oitocentos mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">q) 41 (quarenta e um) Vereadores, nos Municípios de mais de 1.800.000 (um milhão e oitocentos mil) habitantes e de até 2.400.000 (dois milhões e quatrocentos mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">r) 43 (quarenta e três) Vereadores, nos Municípios de mais de 2.400.000 (dois milhões e quatrocentos mil) habitantes e de até 3.000.000 (três milhões) de habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">s) 45 (quarenta e cinco) Vereadores, nos Municípios de mais de 3.000.000 (três milhões) de habitantes e de até 4.000.000 (quatro milhões) de habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">t) 47 (quarenta e sete) Vereadores, nos Municípios de mais de 4.000.000 (quatro milhões) de habitantes e de até 5.000.000 (cinco milhões) de habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">u) 49 (quarenta e nove) Vereadores, nos Municípios de mais de 5.000.000 (cinco milhões) de habitantes e de até 6.000.000 (seis milhões) de habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">v) 51 (cinquenta e um) Vereadores, nos Municípios de mais de 6.000.000 (seis milhões) de habitantes e de até 7.000.000 (sete milhões) de habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">w) 53 (cinquenta e três) Vereadores, nos Municípios de mais de 7.000.000 (sete milhões) de habitantes e de até 8.000.000 (oito milhões) de habitantes; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p class="alinea">x) 55 (cinquenta e cinco) Vereadores, nos Municípios de mais de 8.000.000 (oito milhões) de habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art1">(Incluída pela Emenda Constitucional nº 58, de 2009)</a></p>

	<p>V - subsídios do Prefeito, do Vice-Prefeito e dos Secretários Municipais fixados por lei de iniciativa da Câmara Municipal, observado o que dispõem os arts. 37, XI, 39, § 4º, 150, II, 153, III, e 153, § 2º, I; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art29v">(Redação dada pela Emenda constitucional nº 19, de 1998)</a></p>

	<p>VI - o subsídio dos Vereadores será fixado pelas respectivas Câmaras Municipais em cada legislatura para a subsequente, observado o que dispõe esta Constituição, observados os critérios estabelecidos na respectiva Lei Orgânica e os seguintes limites máximos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art1">(Redação dada pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p class="alinea">a) em Municípios de até dez mil habitantes, o subsídio máximo dos Vereadores corresponderá a vinte por cento do subsídio dos Deputados Estaduais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art1">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p class="alinea">b) em Municípios de dez mil e um a cinquenta mil habitantes, o subsídio máximo dos Vereadores corresponderá a trinta por cento do subsídio dos Deputados Estaduais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art1">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p class="alinea">c) em Municípios de cinquenta mil e um a cem mil habitantes, o subsídio máximo dos Vereadores corresponderá a quarenta por cento do subsídio dos Deputados Estaduais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art1">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p class="alinea">d) em Municípios de cem mil e um a trezentos mil habitantes, o subsídio máximo dos Vereadores corresponderá a cinquenta por cento do subsídio dos Deputados Estaduais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art1">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p class="alinea">e) em Municípios de trezentos mil e um a quinhentos mil habitantes, o subsídio máximo dos Vereadores corresponderá a sessenta por cento do subsídio dos Deputados Estaduais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art1">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p class="alinea">f) em Municípios de mais de quinhentos mil habitantes, o subsídio máximo dos Vereadores corresponderá a setenta e cinco por cento do subsídio dos Deputados Estaduais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art1">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p>VII - o total da despesa com a remuneração dos Vereadores não poderá ultrapassar o montante de cinco por cento da receita do Município; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc01.htm#art2">(Incluído pela Emenda Constitucional nº 1, de 1992)</a></p>

	<p>VIII - inviolabilidade dos Vereadores por suas opiniões, palavras e votos no exercício do mandato e na circunscrição do Município; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc01.htm#art2">(Renumerado do inciso VI, pela Emenda Constitucional nº 1, de 1992)</a></p>

	<p>IX - proibições e incompatibilidades, no exercício da vereança, similares, no que couber, ao disposto nesta Constituição para os membros do Congresso Nacional e na Constituição do respectivo Estado para os membros da Assembleia Legislativa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc01.htm#art2">(Renumerado do inciso VII, pela Emenda Constitucional nº 1, de 1992)</a></p>

	<p>X - julgamento do Prefeito perante o Tribunal de Justiça; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc01.htm#art2">(Renumerado do inciso VIII, pela Emenda Constitucional nº 1, de 1992)</a></p>

	<p>XI - organização das funções legislativas e fiscalizadoras da Câmara Municipal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc01.htm#art2">(Renumerado do inciso IX, pela Emenda Constitucional nº 1, de 1992)</a></p>

	<p>XII - cooperação das associações representativas no planejamento municipal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc01.htm#art2">(Renumerado do inciso X, pela Emenda Constitucional nº 1, de 1992)</a></p>

	<p>XIII - iniciativa popular de projetos de lei de interesse específico do Município, da cidade ou de bairros, através de manifestação de, pelo menos, cinco por cento do eleitorado; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc01.htm#art2">(Renumerado do inciso XI, pela Emenda Constitucional nº 1, de 1992)</a></p>

	<p>XIV - perda do mandato do Prefeito, nos termos do <a href="#art28§1">art. 28, parágrafo único</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc01.htm#art2">(Renumerado do inciso XII, pela Emenda Constitucional nº 1, de 1992)</a></p>

	<p><span class="artigo" id="29A">Art. 29-A.</span> O total da despesa do Poder Legislativo Municipal, incluídos os subsídios dos Vereadores e excluídos os gastos com inativos, não poderá ultrapassar os seguintes percentuais, relativos ao somatório da receita tributária e das transferências previstas no § 5o do art. 153 e nos arts. 158 e 159, efetivamente realizado no exercício anterior: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art2">(Incluído pela Emenda Constitucional nº 25, de 2000)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Vide Emenda Constitucional nº 109, de 2021) </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art7">(Vigência)</a></p>

	<p>I - 7% (sete por cento) para Municípios com população de até 100.000 (cem mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art2">(Redação dada pela Emenda Constituição Constitucional nº 58, de 2009)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art3">(Produção de efeito)</a></p>

	<p>II - 6% (seis por cento) para Municípios com população entre 100.000 (cem mil) e 300.000 (trezentos mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art2">(Redação dada pela Emenda Constituição Constitucional nº 58, de 2009)</a></p>

	<p>III - 5% (cinco por cento) para Municípios com população entre 300.001 (trezentos mil e um) e 500.000 (quinhentos mil) habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art2">(Redação dada pela Emenda Constituição Constitucional nº 58, de 2009)</a></p>

	<p>IV - 4,5% (quatro inteiros e cinco décimos por cento) para Municípios com população entre 500.001 (quinhentos mil e um) e 3.000.000 (três milhões) de habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art2">(Redação dada pela Emenda Constituição Constitucional nº 58, de 2009)</a></p>

	<p>V - 4% (quatro por cento) para Municípios com população entre 3.000.001 (três milhões e um) e 8.000.000 (oito milhões) de habitantes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art2">(Incluído pela Emenda Constituição Constitucional nº 58, de 2009)</a></p>

	<p>VI - 3,5% (três inteiros e cinco décimos por cento) para Municípios com população acima de 8.000.001 (oito milhões e um) habitantes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc58.htm#art2">(Incluído pela Emenda Constituição Constitucional nº 58, de 2009)</a></p>

	<p>§ 1o A Câmara Municipal não gastará mais de setenta por cento de sua receita com folha de pagamento, incluído o gasto com o subsídio de seus Vereadores. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art2">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p>§ 2o Constitui crime de responsabilidade do Prefeito Municipal: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art2">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p>I - efetuar repasse que supere os limites definidos neste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art2">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p>II - não enviar o repasse até o dia vinte de cada mês; ou <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art2">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p>III - enviá-lo a menor em relação à proporção fixada na Lei Orçamentária. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art2">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p>§ 3o Constitui crime de responsabilidade do Presidente da Câmara Municipal o desrespeito ao § 1o deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc25.htm#art2">(Incluído pela Emenda Constitucional nº 25, de 2000)</a></p>

	<p><span class="artigo">Art. 30.</span> Compete aos Municípios:</p>

	<p>I - legislar sobre assuntos de interesse local;</p>

	<p>II - suplementar a legislação federal e a estadual no que couber; <a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADPF&amp;documento=&amp;s1=672&amp;numProcesso=672">(Vide ADPF 672)</a></p>

	<p>III - instituir e arrecadar os tributos de sua competência, bem como aplicar suas rendas, sem prejuízo da obrigatoriedade de prestar contas e publicar balancetes nos prazos fixados em lei;</p>

	<p>IV - criar, organizar e suprimir distritos, observada a legislação estadual;</p>

	<p>V - organizar e prestar, diretamente ou sob regime de concessão ou permissão, os serviços públicos de interesse local, incluído o de transporte coletivo, que tem caráter essencial;</p>

	<p>VI - manter, com a cooperação técnica e financeira da União e do Estado, programas de educação infantil e de ensino fundamental; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Redação dada pela Emenda Constitucional nº 53, de 2006)</a></p>

	<p>VII - prestar, com a cooperação técnica e financeira da União e do Estado, serviços de atendimento à saúde da população;</p>

	<p>VIII - promover, no que couber, adequado ordenamento territorial, mediante planejamento e controle do uso, do parcelamento e da ocupação do solo urbano;</p>

	<p>IX - promover a proteção do patrimônio histórico-cultural local, observada a legislação e a ação fiscalizadora federal e estadual.</p>

	<p><span class="artigo">Art. 31.</span> A fiscalização do Município será exercida pelo Poder Legislativo Municipal, mediante controle externo, e pelos sistemas de controle interno do Poder Executivo Municipal, na forma da lei.</a></p>

	<p><span class="paragrafo">§ 1º.</span> O controle externo da Câmara Municipal será exercido com o auxílio dos Tribunais de Contas dos Estados ou do Município ou dos Conselhos ou Tribunais de Contas dos Municípios, onde houver.</p>

	<p><span class="paragrafo">§ 2º.</span> O parecer prévio, emitido pelo órgão competente sobre as contas que o Prefeito deve anualmente prestar, só deixará de prevalecer por decisão de dois terços dos membros da Câmara Municipal.</p>

	<p><span class="paragrafo">§ 3º.</span> As contas dos Municípios ficarão, durante sessenta dias, anualmente, à disposição de qualquer contribuinte, para exame e apreciação, o qual poderá questionar-lhes a legitimidade, nos termos da lei.</p>

	<p><span class="paragrafo">§ 4º.</span> É vedada a criação de Tribunais, Conselhos ou órgãos de Contas Municipais.</p>

	<h2 class="sum2">CAPÍTULO V<br>
	Do Distrito Federal e dos Territórios</h2>

	<h3>Seção I<br>
	Do Distrito Federal</h3>

	<p><span class="artigo">Art. 32.</span> O Distrito Federal, vedada sua divisão em Municípios, reger-se-á por lei orgânica, votada em dois turnos com interstício mínimo de dez dias, e aprovada por dois terços da Câmara Legislativa, que a promulgará, atendidos os princípios estabelecidos nesta Constituição.</p>

	<p><span class="paragrafo">§ 1º.</span> Ao Distrito Federal são atribuídas as competências legislativas reservadas aos Estados e Municípios.</p>

	<p><span class="paragrafo">§ 2º.</span> A eleição do Governador e do Vice-Governador, observadas as regras do art. 77, e dos Deputados Distritais coincidirá com a dos Governadores e Deputados Estaduais, para mandato de igual duração.</p>

	<p><span class="paragrafo">§ 3º.</span> Aos Deputados Distritais e à Câmara Legislativa aplica-se o disposto no art. 27.</p>

	</a><p><span class="paragrafo">§ 4º.</span> Lei federal disporá sobre a utilização, pelo Governo do Distrito Federal, da polícia civil, da polícia penal, da polícia militar e do corpo de bombeiros militar. </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc104.htm#art2">(Redação dada pela Emenda Constitucional nº 104, de 2019) </a></p>

	<h3>Seção II<br>
	Dos Territórios</h3>

	<p><span class="artigo">Art. 33.</span> A lei disporá sobre a organização administrativa e judiciária dos Territórios.</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os Territórios poderão ser divididos em Municípios, aos quais se aplicará, no que couber, o disposto no Capítulo IV deste Título.</p>

	<p><span class="paragrafo">§ 2º.</span> As contas do Governo do Território serão submetidas ao Congresso Nacional, com parecer prévio do Tribunal de Contas da União.</p>

	<p><span class="paragrafo">§ 3º.</span> Nos Territórios Federais com mais de cem mil habitantes, além do Governador nomeado na forma desta Constituição, haverá órgãos judiciários de primeira e segunda instância, membros do Ministério Público e defensores públicos federais; a lei disporá sobre as eleições para a Câmara Territorial e sua competência deliberativa.</p>

	<h2 class="sum2">CAPÍTULO VI<br>
	Da Intervenção</h2>

	<p><span class="artigo">Art. 34.</span> A União não intervirá nos Estados nem no Distrito Federal, exceto para:</p>

	<p>I - manter a integridade nacional;</p>

	<p>II - repelir invasão estrangeira ou de uma unidade da Federação em outra;</p>

	<p>III - pôr termo a grave comprometimento da ordem pública;</p>

	<p>IV - garantir o livre exercício de qualquer dos Poderes nas unidades da Federação;</p>

	<p>V - reorganizar as finanças da unidade da Federação que:</p>

	<p class="alinea">a) suspender o pagamento da dívida fundada por mais de dois anos consecutivos, salvo motivo de força maior;</p>

	<p class="alinea">b) deixar de entregar aos Municípios receitas tributárias fixadas nesta Constituição, dentro dos prazos estabelecidos em lei;</p>

	<p>VI - prover a execução de lei federal, ordem ou decisão judicial;</p>

	<p>VII - assegurar a observância dos seguintes princípios constitucionais:</p>

	<p class="alinea">a) forma republicana, sistema representativo e regime democrático;</p>

	<p class="alinea">b) direitos da pessoa humana;</p>

	<p class="alinea">c) autonomia municipal;</p>

	<p class="alinea">d) prestação de contas da administração pública, direta e indireta.</p>

	</a><p class="alinea">e) aplicação do mínimo exigido da receita resultante de impostos estaduais, compreendida a proveniente de transferências, na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde. </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art1">(Redação dada pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p><span class="artigo">Art. 35.</span> O Estado não intervirá em seus Municípios, nem a União nos Municípios localizados em Território Federal, exceto quando:</p>

	<p>I - deixar de ser paga, sem motivo de força maior, por dois anos consecutivos, a dívida fundada;</p>

	<p>II - não forem prestadas contas devidas, na forma da lei;</p>

	<p>III – não tiver sido aplicado o mínimo exigido da receita municipal na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art2">(Redação dada pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>IV - o Tribunal de Justiça der provimento a representação para assegurar a observância de princípios indicados na Constituição Estadual, ou para prover a execução de lei, de ordem ou de decisão judicial.</p>

	<p><span class="artigo">Art. 36.</span> A decretação da intervenção dependerá:</a></p>

	<p>I - no caso do art. 34, IV, de solicitação do Poder Legislativo ou do Poder Executivo coacto ou impedido, ou de requisição do Supremo Tribunal Federal, se a coação for exercida contra o Poder Judiciário;</p>

	<p>II - no caso de desobediência a ordem ou decisão judiciária, de requisição do Supremo Tribunal Federal, do Superior Tribunal de Justiça ou do Tribunal Superior Eleitoral;</p>

	</a><p>III - de provimento, pelo Supremo Tribunal Federal, de representação do Procurador-Geral da República, na hipótese do art. 34, VII, e no caso de recusa à execução de lei federal. </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>IV - <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art9">(Revogado pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O decreto de intervenção, que especificará a amplitude, o prazo e as condições de execução e que, se couber, nomeará o interventor, será submetido à apreciação do Congresso Nacional ou da Assembleia Legislativa do Estado, no prazo de vinte e quatro horas.</p>

	<p><span class="paragrafo">§ 2º.</span> Se não estiver funcionando o Congresso Nacional ou a Assembleia Legislativa, far-se-á convocação extraordinária, no mesmo prazo de vinte e quatro horas.</p>

	<p><span class="paragrafo">§ 3º.</span> Nos casos do art. 34, VI e VII, ou do art. 35, IV, dispensada a apreciação pelo Congresso Nacional ou pela Assembleia Legislativa, o decreto limitar-se-á a suspender a execução do ato impugnado, se essa medida bastar ao restabelecimento da normalidade.</p>

	<p><span class="paragrafo">§ 4º.</span> Cessados os motivos da intervenção, as autoridades afastadas de seus cargos a estes voltarão, salvo impedimento legal.</p>

	<h2 class="sum2">CAPÍTULO Vii<br>
	Da Administração Pública</h2>

	<h3>Seção I<br>
	Disposições Gerais</h3>

	<p><span class="artigo">Art. 37.</span> A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência e, também, ao seguinte: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>I - os cargos, empregos e funções públicas são acessíveis aos brasileiros que preencham os requisitos estabelecidos em lei, assim como aos estrangeiros, na forma da lei; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>II - a investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos, de acordo com a natureza e a complexidade do cargo ou emprego, na forma prevista em lei, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>III - o prazo de validade do concurso público será de até dois anos, prorrogável uma vez, por igual período;</p>

	<p>IV - durante o prazo improrrogável previsto no edital de convocação, aquele aprovado em concurso público de provas ou de provas e títulos será convocado com prioridade sobre novos concursados para assumir cargo ou emprego, na carreira;</p>

	<p>V - as funções de confiança, exercidas exclusivamente por servidores ocupantes de cargo efetivo, e os cargos em comissão, a serem preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei, destinam-se apenas às atribuições de direção, chefia e assessoramento; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>VI - é garantido ao servidor público civil o direito à livre associação sindical;</p>

	<p>VII - o direito de greve será exercido nos termos e nos limites definidos em lei específica; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>VIII - a lei reservará percentual dos cargos e empregos públicos para as pessoas portadoras de deficiência e definirá os critérios de sua admissão;</p>

	<p>IX - a lei estabelecerá os casos de contratação por tempo determinado para atender a necessidade temporária de excepcional interesse público; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc106.htm">(Vide Emenda constitucional nº 106, de 2020)</a></p>

	<p>X - a remuneração dos servidores públicos e o subsídio de que trata o § 4º do art. 39 somente poderão ser fixados ou alterados por lei específica, observada a iniciativa privativa em cada caso, assegurada revisão geral anual, sempre na mesma data e sem distinção de índices; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a><a href="http://www.planalto.gov.br/ccivil_03/LEIS/LEIS_2001/L10331.htm">(Regulamento)</a></p>

	<p>XI - a remuneração e o subsídio dos ocupantes de cargos, funções e empregos públicos da administração direta, autárquica e fundacional, dos membros de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios, dos detentores de mandato eletivo e dos demais agentes políticos e os proventos, pensões ou outra espécie remuneratória, percebidos cumulativamente ou não, incluídas as vantagens pessoais ou de qualquer outra natureza, não poderão exceder o subsídio mensal, em espécie, dos Ministros do Supremo Tribunal Federal, aplicando-se como limite, nos Municípios, o subsídio do Prefeito, e nos Estados e no Distrito Federal, o subsídio mensal do Governador no âmbito do Poder Executivo, o subsídio dos Deputados Estaduais e Distritais no âmbito do Poder Legislativo e o subsidio dos Desembargadores do Tribunal de Justiça, limitado a noventa inteiros e vinte e cinco centésimos por cento do subsídio mensal, em espécie, dos Ministros do Supremo Tribunal Federal, no âmbito do Poder Judiciário, aplicável este limite aos membros do Ministério Público, aos Procuradores e aos Defensores Públicos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc41.htm#art1">(Redação dada pela Emenda Constitucional nº 41, 19.12.2003)</a></p>

	<p>XII - os vencimentos dos cargos do Poder Legislativo e do Poder Judiciário não poderão ser superiores aos pagos pelo Poder Executivo;</p>

	<p>XIII - é vedada a vinculação ou equiparação de quaisquer espécies remuneratórias para o efeito de remuneração de pessoal do serviço público; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>XIV - os acréscimos pecuniários percebidos por servidor público não serão computados nem acumulados para fins de concessão de acréscimos ulteriores; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>XV - o subsídio e os vencimentos dos ocupantes de cargos e empregos públicos são irredutíveis, ressalvado o disposto nos incisos XI e XIV deste artigo e nos arts. 39, § 4º, 150, II, 153, III, e 153, § 2º, I; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>XVI - é vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários, observado em qualquer caso o disposto no inciso XI: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p class="alinea">a) a de dois cargos de professor; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p class="alinea">b) a de um cargo de professor com outro técnico ou científico; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p class="alinea">c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc34.htm#art1">(Redação dada pela Emenda Constitucional nº 34, de 2001)</a></p>

	<p>XVII - a proibição de acumular estende-se a empregos e funções e abrange autarquias, fundações, empresas públicas, sociedades de economia mista, suas subsidiárias, e sociedades controladas, direta ou indiretamente, pelo poder público; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>XVIII - a administração fazendária e seus servidores fiscais terão, dentro de suas áreas de competência e jurisdição, precedência sobre os demais setores administrativos, na forma da lei;</p>

	<p>XIX – somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação, cabendo à lei complementar, neste último caso, definir as áreas de sua atuação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>XX - depende de autorização legislativa, em cada caso, a criação de subsidiárias das entidades mencionadas no inciso anterior, assim como a participação de qualquer delas em empresa privada;</p>

	<p>XXI - ressalvados os casos especificados na legislação, as obras, serviços, compras e alienações serão contratados mediante processo de licitação pública que assegure igualdade de condições a todos os concorrentes, com cláusulas que estabeleçam obrigações de pagamento, mantidas as condições efetivas da proposta, nos termos da lei, o qual somente permitirá as exigências de qualificação técnica e econômica indispensáveis à garantia do cumprimento das obrigações. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8666cons.htm">(Regulamento)</a></p>

	<p>XXII - as administrações tributárias da União, dos Estados, do Distrito Federal e dos Municípios, atividades essenciais ao funcionamento do Estado, exercidas por servidores de carreiras específicas, terão recursos prioritários para a realização de suas atividades e atuarão de forma integrada, inclusive com o compartilhamento de cadastros e de informações fiscais, na forma da lei ou convênio. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 1º.</span> A publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos deverá ter caráter educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos.</p>

	<p><span class="paragrafo">§ 2º.</span> A não observância do disposto nos incisos II e III implicará a nulidade do ato e a punição da autoridade responsável, nos termos da lei.</p>

	<p><span class="paragrafo">§ 3º.</span> A lei disciplinará as formas de participação do usuário na administração pública direta e indireta, regulando especialmente: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>I - as reclamações relativas à prestação dos serviços públicos em geral, asseguradas a manutenção de serviços de atendimento ao usuário e a avaliação periódica, externa e interna, da qualidade dos serviços; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>II - o acesso dos usuários a registros administrativos e a informações sobre atos de governo, observado o disposto no art. 5º, X e XXXIII; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Incluído pela Emenda Constitucional nº 19, de 1998)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2011/Lei/L12527.htm">(Vide Lei nº 12.527, de 2011) </a></p>

	<p>III - a disciplina da representação contra o exercício negligente ou abusivo de cargo, emprego ou função na administração pública. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 4º.</span> - Os atos de improbidade administrativa importarão a suspensão dos direitos políticos, a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário, na forma e gradação previstas em lei, sem prejuízo da ação penal cabível.</p>

	<p><span class="paragrafo">§ 5º.</span> A lei estabelecerá os prazos de prescrição para ilícitos praticados por qualquer agente, servidor ou não, que causem prejuízos ao erário, ressalvadas as respectivas ações de ressarcimento.</p>

	<p><span class="paragrafo">§ 6º.</span> As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.</p>

	<p><span class="paragrafo">§ 7º.</span> A lei disporá sobre os requisitos e as restrições ao ocupante de cargo ou emprego da administração direta e indireta que possibilite o acesso a informações privilegiadas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 8º.</span> A autonomia gerencial, orçamentária e financeira dos órgãos e entidades da administração direta e indireta poderá ser ampliada mediante contrato, a ser firmado entre seus administradores e o poder público, que tenha por objeto a fixação de metas de desempenho para o órgão ou entidade, cabendo à lei dispor sobre: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Incluído pela Emenda Constitucional nº 19, de 1998)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13934.htm">(Regulamento)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13934.htm#art12">(Vigência)</a></p>

	<p>I - o prazo de duração do contrato; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>II - os controles e critérios de avaliação de desempenho, direitos, obrigações e responsabilidade dos dirigentes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>III - a remuneração do pessoal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 9º.</span> O disposto no inciso XI aplica-se às empresas públicas e às sociedades de economia mista, e suas subsidiárias, que receberem recursos da União, dos Estados, do Distrito Federal ou dos Municípios para pagamento de despesas de pessoal ou de custeio em geral. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art3">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>§ 10. É vedada a percepção simultânea de proventos de aposentadoria decorrentes do art. 40 ou dos arts. 42 e 142 com a remuneração de cargo, emprego ou função pública, ressalvados os cargos acumuláveis na forma desta Constituição, os cargos eletivos e os cargos em comissão declarados em lei de livre nomeação e exoneração. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art37%C2%A710">(Incluído pela Emenda Constitucional nº 20, de 1998)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art11">(Vide Emenda Constitucional nº 20, de 1998) </a></p>

	<p>§ 11. Não serão computadas, para efeito dos limites remuneratórios de que trata o inciso XI do caput deste artigo, as parcelas de caráter indenizatório previstas em lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc47.htm#art1">(Incluído pela Emenda Constitucional nº 47, de 2005)</a></p>

	<p>§ 12. Para os fins do disposto no inciso XI do caput deste artigo, fica facultado aos Estados e ao Distrito Federal fixar, em seu âmbito, mediante emenda às respectivas Constituições e Lei Orgânica, como limite único, o subsídio mensal dos Desembargadores do respectivo Tribunal de Justiça, limitado a noventa inteiros e vinte e cinco centésimos por cento do subsídio mensal dos Ministros do Supremo Tribunal Federal, não se aplicando o disposto neste parágrafo aos subsídios dos Deputados Estaduais e Distritais e dos Vereadores. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc47.htm#art1">(Incluído pela Emenda Constitucional nº 47, de 2005)</a></p>

	<p>§ 13. O servidor público titular de cargo efetivo poderá ser readaptado para exercício de cargo cujas atribuições e responsabilidades sejam compatíveis com a limitação que tenha sofrido em sua capacidade física ou mental, enquanto permanecer nesta condição, desde que possua a habilitação e o nível de escolaridade exigidos para o cargo de destino, mantida a remuneração do cargo de origem. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 14. A aposentadoria concedida com a utilização de tempo de contribuição decorrente de cargo, emprego ou função pública, inclusive do Regime Geral de Previdência Social, acarretará o rompimento do vínculo que gerou o referido tempo de contribuição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 15. É vedada a complementação de aposentadorias de servidores públicos e de pensões por morte a seus dependentes que não seja decorrente do disposto nos §§ 14 a 16 do art. 40 ou que não seja prevista em lei que extinga regime próprio de previdência social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 16. Os órgãos e entidades da administração pública, individual ou conjuntamente, devem realizar avaliação das políticas públicas, inclusive com divulgação do objeto a ser avaliado e dos resultados alcançados, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo">Art. 38.</span> Ao servidor público da administração direta, autárquica e fundacional, no exercício de mandato eletivo, aplicam-se as seguintes disposições: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art4">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>I - tratando-se de mandato eletivo federal, estadual ou distrital, ficará afastado de seu cargo, emprego ou função;</p>

	<p>II - investido no mandato de Prefeito, será afastado do cargo, emprego ou função, sendo-lhe facultado optar pela sua remuneração;</p>

	<p>III - investido no mandato de Vereador, havendo compatibilidade de horários, perceberá as vantagens de seu cargo, emprego ou função, sem prejuízo da remuneração do cargo eletivo, e, não havendo compatibilidade, será aplicada a norma do inciso anterior;</p>

	<p>IV - em qualquer caso que exija o afastamento para o exercício de mandato eletivo, seu tempo de serviço será contado para todos os efeitos legais, exceto para promoção por merecimento;</p>

	<p>V - na hipótese de ser segurado de regime próprio de previdência social, permanecerá filiado a esse regime, no ente federativo de origem. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<h3>Seção II<br>
	Dos Servidores Públicos</h3>

	<p><span class="artigo">Art. 39.</span> A União, os Estados, o Distrito Federal e os Municípios instituirão, no âmbito de sua competência, regime jurídico único e planos de carreira para os servidores da administração pública direta, das autarquias e das fundações públicas. <a href="http://portal.stf.jus.br/processos/detalhe.asp?incidente=11299">(Vide ADI nº 2.135) </a></p>

	<ul class="dica">
		<li>STF, ADIn nº 2.135: "Decisão: O Tribunal, por maioria, vencidos os Senhores Ministros Nelson Jobim, Ricardo Lewandowski e Joaquim Barbosa, deferiu parcialmente a medida cautelar para suspender a eficácia do artigo 39, <i>caput</i>, da Constituição Federal, com a redação da Emenda Constitucional nº 19, de 04 de junho de 1998, tudo nos termos do voto do relator originário, Ministro Néri da Silveira, esclarecido, nesta assentada, que a decisão – como é próprio das medidas cautelares – terá efeitos <i>ex nunc</i>, subsistindo a legislação editada nos termos da emenda declarada suspensa. Votou a Presidente, Ministra Ellen Gracie, que lavrará o acórdão. Não participaram da votação a Senhora Ministra Cármen Lúcia e o Senhor Ministro Gilmar Mendes por sucederem, respectivamente, aos Senhores Ministros Nelson Jobim e Néri da Silveira. Plenário, 02.08.2007."</li>
	</ul>

	<del><p><span class="artigo">Art. 39.</span> A União, os Estados, o Distrito Federal e os Municípios instituirão conselho de política de administração e remuneração de pessoal, integrado por servidores designados pelos respectivos Poderes <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a><a href="http://portal.stf.jus.br/processos/detalhe.asp?incidente=11299"></a></p></del>

	<p><span class="paragrafo">§ 1º.</span> A fixação dos padrões de vencimento e dos demais componentes do sistema remuneratório observará: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>I - a natureza, o grau de responsabilidade e a complexidade dos cargos componentes de cada carreira; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>II - os requisitos para a investidura; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>III - as peculiaridades dos cargos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A União, os Estados e o Distrito Federal manterão escolas de governo para a formação e o aperfeiçoamento dos servidores públicos, constituindo-se a participação nos cursos um dos requisitos para a promoção na carreira, facultada, para isso, a celebração de convênios ou contratos entre os entes federados. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Aplica-se aos servidores ocupantes de cargo público o disposto no art. 7º, IV, VII, VIII, IX, XII, XIII, XV, XVI, XVII, XVIII, XIX, XX, XXII e XXX, podendo a lei estabelecer requisitos diferenciados de admissão quando a natureza do cargo o exigir. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 4º.</span> O membro de Poder, o detentor de mandato eletivo, os Ministros de Estado e os Secretários Estaduais e Municipais serão remunerados exclusivamente por subsídio fixado em parcela única, vedado o acréscimo de qualquer gratificação, adicional, abono, prêmio, verba de representação ou outra espécie remuneratória, obedecido, em qualquer caso, o disposto no art. 37, X e XI. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Lei da União, dos Estados, do Distrito Federal e dos Municípios poderá estabelecer a relação entre a maior e a menor remuneração dos servidores públicos, obedecido, em qualquer caso, o disposto no art. 37, XI. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art4">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Os Poderes Executivo, Legislativo e Judiciário publicarão anualmente os valores do subsídio e da remuneração dos cargos e empregos públicos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 7º.</span> Lei da União, dos Estados, do Distrito Federal e dos Municípios disciplinará a aplicação de recursos orçamentários provenientes da economia com despesas correntes em cada órgão, autarquia e fundação, para aplicação no desenvolvimento de programas de qualidade e produtividade, treinamento e desenvolvimento, modernização, reaparelhamento e racionalização do serviço público, inclusive sob a forma de adicional ou prêmio de produtividade. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 8º.</span> A remuneração dos servidores públicos organizados em carreira poderá ser fixada nos termos do § 4º. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art5">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 9º.</span> É vedada a incorporação de vantagens de caráter temporário ou vinculadas ao exercício de função de confiança ou de cargo em comissão à remuneração do cargo efetivo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="artigo">Art. 40.</span> O regime próprio de previdência social dos servidores titulares de cargos efetivos terá caráter contributivo e solidário, mediante contribuição do respectivo ente federativo, de servidores ativos, de aposentados e de pensionistas, observados critérios que preservem o equilíbrio financeiro e atuarial. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O servidor abrangido por regime próprio de previdência social será aposentado: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>I - por incapacidade permanente para o trabalho, no cargo em que estiver investido, quando insuscetível de readaptação, hipótese em que será obrigatória a realização de avaliações periódicas para verificação da continuidade das condições que ensejaram a concessão da aposentadoria, na forma de lei do respectivo ente federativo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>II - compulsoriamente, com proventos proporcionais ao tempo de contribuição, aos 70 (setenta) anos de idade, ou aos 75 (setenta e cinco) anos de idade, na forma de lei complementar; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc88.htm#art1">(Redação dada pela Emenda Constitucional nº 88, de 2015)</a><a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp152.htm">(Vide Lei Complementar nº 152, de 2015)</a></p>

	<p>III - no âmbito da União, aos 62 (sessenta e dois) anos de idade, se mulher, e aos 65 (sessenta e cinco) anos de idade, se homem, e, no âmbito dos Estados, do Distrito Federal e dos Municípios, na idade mínima estabelecida mediante emenda às respectivas Constituições e Leis Orgânicas, observados o tempo de contribuição e os demais requisitos estabelecidos em lei complementar do respectivo ente federativo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os proventos de aposentadoria não poderão ser inferiores ao valor mínimo a que se refere o <span class="paragrafo">§ 2º.</span> do art. 201 ou superiores ao limite máximo estabelecido para o Regime Geral de Previdência Social, observado o disposto nos §§ 14 a 16. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 3º.</span> As regras para cálculo de proventos de aposentadoria serão disciplinadas em lei do respectivo ente federativo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 4º.</span> É vedada a adoção de requisitos ou critérios diferenciados para concessão de benefícios em regime próprio de previdência social, ressalvado o disposto nos §§ 4º-A, 4º-B, 4º-C e 5º. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 4º-A. Poderão ser estabelecidos por lei complementar do respectivo ente federativo idade e tempo de contribuição diferenciados para aposentadoria de servidores com deficiência, previamente submetidos a avaliação biopsicossocial realizada por equipe multiprofissional e interdisciplinar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 4º-B. Poderão ser estabelecidos por lei complementar do respectivo ente federativo idade e tempo de contribuição diferenciados para aposentadoria de ocupantes do cargo de agente penitenciário, de agente socioeducativo ou de policial dos órgãos de que tratam o inciso IV do caput do art. 51, o inciso XIII do caput do art. 52 e os incisos I a IV do caput do art. 144. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 4º-C. Poderão ser estabelecidos por lei complementar do respectivo ente federativo idade e tempo de contribuição diferenciados para aposentadoria de servidores cujas atividades sejam exercidas com efetiva exposição a agentes químicos, físicos e biológicos prejudiciais à saúde, ou associação desses agentes, vedada a caracterização por categoria profissional ou ocupação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Os ocupantes do cargo de professor terão idade mínima reduzida em 5 (cinco) anos em relação às idades decorrentes da aplicação do disposto no inciso III do § 1º, desde que comprovem tempo de efetivo exercício das funções de magistério na educação infantil e no ensino fundamental e médio fixado em lei complementar do respectivo ente federativo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Ressalvadas as aposentadorias decorrentes dos cargos acumuláveis na forma desta Constituição, é vedada a percepção de mais de uma aposentadoria à conta de regime próprio de previdência social, aplicando-se outras vedações, regras e condições para a acumulação de benefícios previdenciários estabelecidas no Regime Geral de Previdência Social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 7º.</span> Observado o disposto no <span class="paragrafo">§ 2º.</span> do art. 201, quando se tratar da única fonte de renda formal auferida pelo dependente, o benefício de pensão por morte será concedido nos termos de lei do respectivo ente federativo, a qual tratará de forma diferenciada a hipótese de morte dos servidores de que trata o § 4º-B decorrente de agressão sofrida no exercício ou em razão da função. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 8º.</span> É assegurado o reajustamento dos benefícios para preservar-lhes, em caráter permanente, o valor real, conforme critérios estabelecidos em lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc41.htm#art1">(Redação dada pela Emenda Constitucional nº 41, 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 9º.</span> O tempo de contribuição federal, estadual, distrital ou municipal será contado para fins de aposentadoria, observado o disposto nos §<span class="paragrafo">§ 9º.</span> e 9º-A do art. 201, e o tempo de serviço correspondente será contado para fins de disponibilidade. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 10 - A lei não poderá estabelecer qualquer forma de contagem de tempo de contribuição fictício. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art40">(Incluído pela Emenda Constitucional nº 20, de 15/12/98)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art4">(Vide Emenda Constitucional nº 20, de 1998) </a></p>

	<p>§ 11 - Aplica-se o limite fixado no art. 37, XI, à soma total dos proventos de inatividade, inclusive quando decorrentes da acumulação de cargos ou empregos públicos, bem como de outras atividades sujeitas a contribuição para o regime geral de previdência social, e ao montante resultante da adição de proventos de inatividade com remuneração de cargo acumulável na forma desta Constituição, cargo em comissão declarado em lei de livre nomeação e exoneração, e de cargo eletivo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art40">(Incluído pela Emenda Constitucional nº 20, de 15/12/98)</a></p>

	<p>§ 12. Além do disposto neste artigo, serão observados, em regime próprio de previdência social, no que couber, os requisitos e critérios fixados para o Regime Geral de Previdência Social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 13. Aplica-se ao agente público ocupante, exclusivamente, de cargo em comissão declarado em lei de livre nomeação e exoneração, de outro cargo temporário, inclusive mandato eletivo, ou de emprego público, o Regime Geral de Previdência Social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 14. A União, os Estados, o Distrito Federal e os Municípios instituirão, por lei de iniciativa do respectivo Poder Executivo, regime de previdência complementar para servidores públicos ocupantes de cargo efetivo, observado o limite máximo dos benefícios do Regime Geral de Previdência Social para o valor das aposentadorias e das pensões em regime próprio de previdência social, ressalvado o disposto no § 16. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 15. O regime de previdência complementar de que trata o § 14 oferecerá plano de benefícios somente na modalidade contribuição definida, observará o disposto no art. 202 e será efetivado por intermédio de entidade fechada de previdência complementar ou de entidade aberta de previdência complementar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 16 - Somente mediante sua prévia e expressa opção, o disposto nos §§ 14 e 15 poderá ser aplicado ao servidor que tiver ingressado no serviço público até a data da publicação do ato de instituição do correspondente regime de previdência complementar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art40">(Incluído pela Emenda Constitucional nº 20, de 15/12/98)</a></p>

	<p>§ 17. Todos os valores de remuneração considerados para o cálculo do benefício previsto no § 3° serão devidamente atualizados, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc41.htm#art1">(Incluído pela Emenda Constitucional nº 41, 19.12.2003)</a></p>

	<p>§ 18. Incidirá contribuição sobre os proventos de aposentadorias e pensões concedidas pelo regime de que trata este artigo que superem o limite máximo estabelecido para os benefícios do regime geral de previdência social de que trata o art. 201, com percentual igual ao estabelecido para os servidores titulares de cargos efetivos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc41.htm#art1">(Incluído pela Emenda Constitucional nº 41, 19.12.2003)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3133&amp;processo=3133">(Vide ADIN 3133)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3143&amp;processo=3143">(Vide ADIN 3143)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3184&amp;processo=3184">(Vide ADIN 3184)</a></p>

	<p>§ 19. Observados critérios a serem estabelecidos em lei do respectivo ente federativo, o servidor titular de cargo efetivo que tenha completado as exigências para a aposentadoria voluntária e que opte por permanecer em atividade poderá fazer jus a um abono de permanência equivalente, no máximo, ao valor da sua contribuição previdenciária, até completar a idade para aposentadoria compulsória. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 20. É vedada a existência de mais de um regime próprio de previdência social e de mais de um órgão ou entidade gestora desse regime em cada ente federativo, abrangidos todos os poderes, órgãos e entidades autárquicas e fundacionais, que serão responsáveis pelo seu financiamento, observados os critérios, os parâmetros e a natureza jurídica definidos na lei complementar de que trata o § 22. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 21. (Revogado). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 22. Vedada a instituição de novos regimes próprios de previdência social, lei complementar federal estabelecerá, para os que já existam, normas gerais de organização, de funcionamento e de responsabilidade em sua gestão, dispondo, entre outros aspectos, sobre: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>I - requisitos para sua extinção e consequente migração para o Regime Geral de Previdência Social; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>II - modelo de arrecadação, de aplicação e de utilização dos recursos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>III - fiscalização pela União e controle externo e social; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>IV - definição de equilíbrio financeiro e atuarial; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>V - condições para instituição do fundo com finalidade previdenciária de que trata o art. 249 e para vinculação a ele dos recursos provenientes de contribuições e dos bens, direitos e ativos de qualquer natureza; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>VI - mecanismos de equacionamento do deficit atuarial; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>VII - estruturação do órgão ou entidade gestora do regime, observados os princípios relacionados com governança, controle interno e transparência; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>VIII - condições e hipóteses para responsabilização daqueles que desempenhem atribuições relacionadas, direta ou indiretamente, com a gestão do regime; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>IX - condições para adesão a consórcio público; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>X - parâmetros para apuração da base de cálculo e definição de alíquota de contribuições ordinárias e extraordinárias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="artigo">Art. 41.</span> São estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art6">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O servidor público estável só perderá o cargo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art6">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>I - em virtude de sentença judicial transitada em julgado; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art6">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>II - mediante processo administrativo em que lhe seja assegurada ampla defesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art6">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>III - mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar, assegurada ampla defesa. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art6">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Invalidada por sentença judicial a demissão do servidor estável, será ele reintegrado, e o eventual ocupante da vaga, se estável, reconduzido ao cargo de origem, sem direito a indenização, aproveitado em outro cargo ou posto em disponibilidade com remuneração proporcional ao tempo de serviço. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art6">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Extinto o cargo ou declarada a sua desnecessidade, o servidor estável ficará em disponibilidade, com remuneração proporcional ao tempo de serviço, até seu adequado aproveitamento em outro cargo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art6">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Como condição para a aquisição da estabilidade, é obrigatória a avaliação especial de desempenho por comissão instituída para essa finalidade. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art6">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<h3>Seção III<br>
	Dos Militares dos Estados, do Distrito Federal e dos Territórios</h3>

	<p><span class="artigo">Art. 42.</span> Os membros das Polícias Militares e Corpos de Bombeiros Militares, instituições organizadas com base na hierarquia e disciplina, são militares dos Estados, do Distrito Federal e dos Territórios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art2">(Redação dada pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Aplicam-se aos militares dos Estados, do Distrito Federal e dos Territórios, além do que vier a ser fixado em lei, as disposições do art. 14, § 8º; do art. 40, § 9º; e do art. 142, §<span class="paragrafo">§ 2º.</span> e 3º, cabendo a lei estadual específica dispor sobre as matérias do art. 142, § 3º, inciso X, sendo as patentes dos oficiais conferidas pelos respectivos governadores. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art42%C2%A71">(Redação dada pela Emenda Constitucional nº 20, de 15/12/98)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Aos pensionistas dos militares dos Estados, do Distrito Federal e dos Territórios aplica-se o que for fixado em lei específica do respectivo ente estatal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc41.htm#art1">(Redação dada pela Emenda Constitucional nº 41, 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Aplica-se aos militares dos Estados, do Distrito Federal e dos Territórios o disposto no art. 37, inciso XVI, com prevalência da atividade militar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc101.htm#art1">(Incluído pela Emenda Constitucional nº 101, de 2019)</a></p>

	<h3>Seção IV<br>
	Das Regiões</h3>

	<p><span class="artigo">Art. 43.</span> Para efeitos administrativos, a União poderá articular sua ação em um mesmo complexo geoeconômico e social, visando a seu desenvolvimento e à redução das desigualdades regionais.</a></p>

	<p><span class="paragrafo">§ 1º.</span> - Lei complementar disporá sobre:</p>

	<p>I - as condições para integração de regiões em desenvolvimento;</p>

	<p>II - a composição dos organismos regionais que executarão, na forma da lei, os planos regionais, integrantes dos planos nacionais de desenvolvimento econômico e social, aprovados juntamente com estes.</p>

	<p><span class="paragrafo">§ 2º.</span> - Os incentivos regionais compreenderão, além de outros, na forma da lei:</p>

	<p>I - igualdade de tarifas, fretes, seguros e outros itens de custos e preços de responsabilidade do Poder Público;</p>

	<p>II - juros favorecidos para financiamento de atividades prioritárias;</p>

	<p>III - isenções, reduções ou diferimento temporário de tributos federais devidos por pessoas físicas ou jurídicas;</p>

	<p>IV - prioridade para o aproveitamento econômico e social dos rios e das massas de água represadas ou represáveis nas regiões de baixa renda, sujeitas a secas periódicas.</p>

	<p><span class="paragrafo">§ 3º.</span> - Nas áreas a que se refere o § 2º, IV, a União incentivará a recuperação de terras áridas e cooperará com os pequenos e médios proprietários rurais para o estabelecimento, em suas glebas, de fontes de água e de pequena irrigação.</p>

	<h1>TÍTULO IV<br>
	DA ORGANIZAÇÃO DOS PODERES</h1>

	<h2 class="sum2">CAPÍTULO I<br>
	Do Poder Legislativo</h2>

	<h3>Seção I<br>
	Do Congresso Nacional</h3>

	<p><span class="artigo">Art. 44.</span> O Poder Legislativo é exercido pelo Congresso Nacional, que se compõe da Câmara dos Deputados e do Senado Federal.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Cada legislatura terá a duração de quatro anos.</p>

	<p><span class="artigo">Art. 45.</span> A Câmara dos Deputados compõe-se de representantes do povo, eleitos, pelo sistema proporcional, em cada Estado, em cada Território e no Distrito Federal.</p>

	</a><p><span class="paragrafo">§ 1º.</span> O número total de Deputados, bem como a representação por Estado e pelo Distrito Federal, será estabelecido por lei complementar, proporcionalmente à população, procedendo-se aos ajustes necessários, no ano anterior às eleições, para que nenhuma daquelas unidades da Federação tenha menos de oito ou mais de setenta Deputados. </a><a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp78.htm">(Vide Lei Complementar nº 78, de 1993) </a></p>

	<p><span class="paragrafo">§ 2º.</span> Cada Território elegerá quatro Deputados.</p>

	<p><span class="artigo">Art. 46.</span> O Senado Federal compõe-se de representantes dos Estados e do Distrito Federal, eleitos segundo o princípio majoritário.</p>

	<p><span class="paragrafo">§ 1º.</span> Cada Estado e o Distrito Federal elegerão três Senadores, com mandato de oito anos.</p>

	<p><span class="paragrafo">§ 2º.</span> A representação de cada Estado e do Distrito Federal será renovada de quatro em quatro anos, alternadamente, por um e dois terços.</p>

	<p><span class="paragrafo">§ 3º.</span> Cada Senador será eleito com dois suplentes.</p>

	<p><span class="artigo">Art. 47.</span> Salvo disposição constitucional em contrário, as deliberações de cada Casa e de suas Comissões serão tomadas por maioria dos votos, presente a maioria absoluta de seus membros.</p>

	<h3>Seção II<br>
	Das Atribuições do Congresso Nacional</h3>

	<p><span class="artigo">Art. 48.</span> Cabe ao Congresso Nacional, com a sanção do Presidente da República, não exigida esta para o especificado nos arts. 49, 51 e 52, dispor sobre todas as matérias de competência da União, especialmente sobre:</p>

	<p>I - sistema tributário, arrecadação e distribuição de rendas;</p>

	<p>II - plano plurianual, diretrizes orçamentárias, orçamento anual, operações de crédito, dívida pública e emissões de curso forçado;</p>

	<p>III - fixação e modificação do efetivo das Forças Armadas;</p>

	<p>IV - planos e programas nacionais, regionais e setoriais de desenvolvimento;</p>

	<p>V - limites do território nacional, espaço aéreo e marítimo e bens do domínio da União;</p>

	<p>VI - incorporação, subdivisão ou desmembramento de áreas de Territórios ou Estados, ouvidas as respectivas Assembleias Legislativas;</p>

	<p>VII - transferência temporária da sede do Governo Federal;</p>

	<p>VIII - concessão de anistia;</p>

	<p>IX - organização administrativa, judiciária, do Ministério Público e da Defensoria Pública da União e dos Territórios e organização judiciária e do Ministério Público do Distrito Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc69.htm#art1">(Redação dada pela Emenda Constitucional nº 69, de 2012)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc69.htm#art4">(Produção de efeito)</a></p>

	<p>X – criação, transformação e extinção de cargos, empregos e funções públicas, observado o que estabelece o art. 84, VI, b;</p>

	<p>XI – criação e extinção de Ministérios e órgãos da administração pública;</p>

	<p>XII - telecomunicações e radiodifusão;</p>

	<p>XIII - matéria financeira, cambial e monetária, instituições financeiras e suas operações;</p>

	<p>XIV - moeda, seus limites de emissão, e montante da dívida mobiliária federal.</p>

	<p>XV - fixação do subsídio dos Ministros do Supremo Tribunal Federal, observado o que dispõem os arts. 39, § 4º; 150, II; 153, III; e 153, § 2º, I. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc41.htm#art1">(Redação dada pela Emenda Constitucional nº 41, 19.12.2003)</a></p>

	<p><span class="artigo">Art. 49.</span> É da competência exclusiva do Congresso Nacional:</p>

	<p>I - resolver definitivamente sobre tratados, acordos ou atos internacionais que acarretem encargos ou compromissos gravosos ao patrimônio nacional;</p>

	<p>II - autorizar o Presidente da República a declarar guerra, a celebrar a paz, a permitir que forças estrangeiras transitem pelo território nacional ou nele permaneçam temporariamente, ressalvados os casos previstos em lei complementar;</p>

	<p>III - autorizar o Presidente e o Vice-Presidente da República a se ausentarem do País, quando a ausência exceder a quinze dias;</p>

	<p>IV - aprovar o estado de defesa e a intervenção federal, autorizar o estado de sítio, ou suspender qualquer uma dessas medidas;</p>

	<p>V - sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa;</p>

	<p>VI - mudar temporariamente sua sede;</p>

	<p>VII - fixar idêntico subsídio para os Deputados Federais e os Senadores, observado o que dispõem os arts. 37, XI, 39, § 4º, 150, II, 153, III, e 153, § 2º, I; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art8">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>VIII - fixar os subsídios do Presidente e do Vice-Presidente da República e dos Ministros de Estado, observado o que dispõem os arts. 37, XI, 39, § 4º, 150, II, 153, III, e 153, § 2º, I; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art8">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>IX - julgar anualmente as contas prestadas pelo Presidente da República e apreciar os relatórios sobre a execução dos planos de governo;</p>

	<p>X - fiscalizar e controlar, diretamente, ou por qualquer de suas Casas, os atos do Poder Executivo, incluídos os da administração indireta;</p>

	<p>XI - zelar pela preservação de sua competência legislativa em face da atribuição normativa dos outros Poderes;</p>

	<p>XII - apreciar os atos de concessão e renovação de concessão de emissoras de rádio e televisão;</p>

	<p>XIII - escolher dois terços dos membros do Tribunal de Contas da União;</p>

	<p>XIV - aprovar iniciativas do Poder Executivo referentes a atividades nucleares;</p>

	<p>XV - autorizar referendo e convocar plebiscito;</p>

	<p>XVI - autorizar, em terras indígenas, a exploração e o aproveitamento de recursos hídricos e a pesquisa e lavra de riquezas minerais;</p>

	<p>XVII - aprovar, previamente, a alienação ou concessão de terras públicas com área superior a dois mil e quinhentos hectares.</p>

	<p>XVIII - decretar o estado de calamidade pública de âmbito nacional previsto nos arts. 167-B, 167-C, 167-D, 167-e, 167-F e 167-G desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo">Art. 50.</span> A Câmara dos Deputados e o Senado Federal, ou qualquer de suas Comissões, poderão convocar Ministro de Estado ou quaisquer titulares de órgãos diretamente subordinados à Presidência da República para prestarem, pessoalmente, informações sobre assunto previamente determinado, importando crime de responsabilidade a ausência sem justificação adequada. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr2.htm#art50">(Redação dada pela Emenda Constitucional de Revisão nº 2, de 1994)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os Ministros de Estado poderão comparecer ao Senado Federal, à Câmara dos Deputados, ou a qualquer de suas Comissões, por sua iniciativa e mediante entendimentos com a Mesa respectiva, para expor assunto de relevância de seu Ministério.</p>

	<p><span class="paragrafo">§ 2º.</span> As Mesas da Câmara dos Deputados e do Senado Federal poderão encaminhar pedidos escritos de informações a Ministros de Estado ou a qualquer das pessoas referidas no caput deste artigo, importando em crime de responsabilidade a recusa, ou o não - atendimento, no prazo de trinta dias, bem como a prestação de informações falsas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr2.htm#art50%C2%A72">(Redação dada pela Emenda Constitucional de Revisão nº 2, de 1994)</a></p>

	<h3>Seção III<br>
	Da Câmara dos Deputados</h3>

	<p><span class="artigo">Art. 51.</span> Compete privativamente à Câmara dos Deputados:</p>

	<p>I - autorizar, por dois terços de seus membros, a instauração de processo contra o Presidente e o Vice-Presidente da República e os Ministros de Estado;</p>

	<p>II - proceder à tomada de contas do Presidente da República, quando não apresentadas ao Congresso Nacional dentro de sessenta dias após a abertura da sessão legislativa;</p>

	<p>III - elaborar seu regimento interno;</p>

	<p>IV – dispor sobre sua organização, funcionamento, polícia, criação, transformação ou extinção dos cargos, empregos e funções de seus serviços, e a iniciativa de lei para fixação da respectiva remuneração, observados os parâmetros estabelecidos na lei de diretrizes orçamentárias; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art9">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>V - eleger membros do Conselho da República, nos termos do art. 89, VII.</p>

	<h3>Seção IV<br>
	Do Senado Federal</h3>

	<p><span class="artigo">Art. 52.</span> Compete privativamente ao Senado Federal:</p>

	<p>I - processar e julgar o Presidente e o Vice-Presidente da República nos crimes de responsabilidade, bem como os Ministros de Estado e os Comandantes da Marinha, do Exército e da Aeronáutica nos crimes da mesma natureza conexos com aqueles; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc23.htm#art52i">(Redação dada pela Emenda Constitucional nº 23, de 02/09/99)</a></p>

	<p>II processar e julgar os Ministros do Supremo Tribunal Federal, os membros do Conselho Nacional de Justiça e do Conselho Nacional do Ministério Público, o Procurador-Geral da República e o Advogado-Geral da União nos crimes de responsabilidade; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>III - aprovar previamente, por voto secreto, após arguição pública, a escolha de:</p>

	<p class="alinea">a) Magistrados, nos casos estabelecidos nesta Constituição;</p>

	<p class="alinea">b) Ministros do Tribunal de Contas da União indicados pelo Presidente da República;</p>

	<p class="alinea">c) Governador de Território;</p>

	<p class="alinea">d) Presidente e diretores do banco central;</p>

	<p class="alinea">e) Procurador-Geral da República;</p>

	<p class="alinea">f) titulares de outros cargos que a lei determinar;</p>

	<p>IV - aprovar previamente, por voto secreto, após arguição em sessão secreta, a escolha dos chefes de missão diplomática de caráter permanente;</p>

	<p>V - autorizar operações externas de natureza financeira, de interesse da União, dos Estados, do Distrito Federal, dos Territórios e dos Municípios;</p>

	<p>VI - fixar, por proposta do Presidente da República, limites globais para o montante da dívida consolidada da União, dos Estados, do Distrito Federal e dos Municípios;</p>

	<p>VII - dispor sobre limites globais e condições para as operações de crédito externo e interno da União, dos Estados, do Distrito Federal e dos Municípios, de suas autarquias e demais entidades controladas pelo Poder Público federal;</p>

	<p>VIII - dispor sobre limites e condições para a concessão de garantia da União em operações de crédito externo e interno;</p>

	<p>IX - estabelecer limites globais e condições para o montante da dívida mobiliária dos Estados, do Distrito Federal e dos Municípios;</p>

	<p>X - suspender a execução, no todo ou em parte, de lei declarada inconstitucional por decisão definitiva do Supremo Tribunal Federal;</p>

	<p>XI - aprovar, por maioria absoluta e por voto secreto, a exoneração, de ofício, do Procurador-Geral da República antes do término de seu mandato;</p>

	<p>XII - elaborar seu regimento interno;</p>

	<p>XIII - dispor sobre sua organização, funcionamento, polícia, criação, transformação ou extinção dos cargos, empregos e funções de seus serviços, e a iniciativa de lei para fixação da respectiva remuneração, observados os parâmetros estabelecidos na lei de diretrizes orçamentárias; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art10">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>XIV - eleger membros do Conselho da República, nos termos do art. 89, VII.</p>

	<p>XV - avaliar periodicamente a funcionalidade do Sistema Tributário Nacional, em sua estrutura e seus componentes, e o desempenho das administrações tributárias da União, dos Estados e do Distrito Federal e dos Municípios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Nos casos previstos nos incisos I e II, funcionará como Presidente o do Supremo Tribunal Federal, limitando-se a condenação, que somente será proferida por dois terços dos votos do Senado Federal, à perda do cargo, com inabilitação, por oito anos, para o exercício de função pública, sem prejuízo das demais sanções judiciais cabíveis.</p>

	<h3>Seção V<br>
	Dos Deputados e dos Senadores</h3>

	<p><span class="artigo">Art. 53.</span> Os Deputados e Senadores são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc35.htm#art1">(Redação dada pela Emenda Constitucional nº 35, de 2001)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os Deputados e Senadores, desde a expedição do diploma, serão submetidos a julgamento perante o Supremo Tribunal Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc35.htm#art1">(Redação dada pela Emenda Constitucional nº 35, de 2001)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Desde a expedição do diploma, os membros do Congresso Nacional não poderão ser presos, salvo em flagrante de crime inafiançável. Nesse caso, os autos serão remetidos dentro de vinte e quatro horas à Casa respectiva, para que, pelo voto da maioria de seus membros, resolva sobre a prisão. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc35.htm#art1">(Redação dada pela Emenda Constitucional nº 35, de 2001)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Recebida a denúncia contra o Senador ou Deputado, por crime ocorrido após a diplomação, o Supremo Tribunal Federal dará ciência à Casa respectiva, que, por iniciativa de partido político nela representado e pelo voto da maioria de seus membros, poderá, até a decisão final, sustar o andamento da ação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc35.htm#art1">(Redação dada pela Emenda Constitucional nº 35, de 2001)</a></p>

	<p><span class="paragrafo">§ 4º.</span> O pedido de sustação será apreciado pela Casa respectiva no prazo improrrogável de quarenta e cinco dias do seu recebimento pela Mesa Diretora. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc35.htm#art1">(Redação dada pela Emenda Constitucional nº 35, de 2001)</a></p>

	<p><span class="paragrafo">§ 5º.</span> A sustação do processo suspende a prescrição, enquanto durar o mandato. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc35.htm#art1">(Redação dada pela Emenda Constitucional nº 35, de 2001)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Os Deputados e Senadores não serão obrigados a testemunhar sobre informações recebidas ou prestadas em razão do exercício do mandato, nem sobre as pessoas que lhes confiaram ou deles receberam informações. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc35.htm#art1">(Redação dada pela Emenda Constitucional nº 35, de 2001)</a></p>

	<p><span class="paragrafo">§ 7º.</span> A incorporação às Forças Armadas de Deputados e Senadores, embora militares e ainda que em tempo de guerra, dependerá de prévia licença da Casa respectiva. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc35.htm#art1">(Redação dada pela Emenda Constitucional nº 35, de 2001)</a></p>

	<p><span class="paragrafo">§ 8º.</span> As imunidades de Deputados ou Senadores subsistirão durante o estado de sítio, só podendo ser suspensas mediante o voto de dois terços dos membros da Casa respectiva, nos casos de atos praticados fora do recinto do Congresso Nacional, que sejam incompatíveis com a execução da medida. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc35.htm#art1">(Incluído pela Emenda Constitucional nº 35, de 2001)</a></p>

	<p><span class="artigo">Art. 54.</span> Os Deputados e Senadores não poderão:</p>

	<p>I - desde a expedição do diploma:</p>

	<p class="alinea">a) firmar ou manter contrato com pessoa jurídica de direito público, autarquia, empresa pública, sociedade de economia mista ou empresa concessionária de serviço público, salvo quando o contrato obedecer a cláusulas uniformes;</p>

	<p class="alinea">b) aceitar ou exercer cargo, função ou emprego remunerado, inclusive os de que sejam demissíveis "ad nutum", nas entidades constantes da alínea anterior;</p>

	<p>II - desde a posse:</p>

	<p class="alinea">a) ser proprietários, controladores ou diretores de empresa que goze de favor decorrente de contrato com pessoa jurídica de direito público, ou nela exercer função remunerada;</p>

	<p class="alinea">b) ocupar cargo ou função de que sejam demissíveis "ad nutum", nas entidades referidas no inciso I, "a";</p>

	<p class="alinea">c) patrocinar causa em que seja interessada qualquer das entidades a que se refere o inciso I, "a";</p>

	<p class="alinea">d) ser titulares de mais de um cargo ou mandato público eletivo.</p>

	<p><span class="artigo">Art. 55.</span> Perderá o mandato o Deputado ou Senador:</p>

	<p>I - que infringir qualquer das proibições estabelecidas no artigo anterior;</p>

	<p>II - cujo procedimento for declarado incompatível com o decoro parlamentar;</p>

	<p>III - que deixar de comparecer, em cada sessão legislativa, à terça parte das sessões ordinárias da Casa a que pertencer, salvo licença ou missão por esta autorizada;</p>

	<p>IV - que perder ou tiver suspensos os direitos políticos;</p>

	<p>V - quando o decretar a Justiça Eleitoral, nos casos previstos nesta Constituição;</p>

	<p>VI - que sofrer condenação criminal em sentença transitada em julgado.</p>

	<p><span class="paragrafo">§ 1º.</span> - É incompatível com o decoro parlamentar, além dos casos definidos no regimento interno, o abuso das prerrogativas asseguradas a membro do Congresso Nacional ou a percepção de vantagens indevidas.</p>

	<p><span class="paragrafo">§ 2º.</span> Nos casos dos incisos I, II e VI, a perda do mandato será decidida pela Câmara dos Deputados ou pelo Senado Federal, por maioria absoluta, mediante provocação da respectiva Mesa ou de partido político representado no Congresso Nacional, assegurada ampla defesa. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc76.htm#art1">(Redação dada pela Emenda Constitucional nº 76, de 2013)</a></p>

	<p><span class="paragrafo">§ 3º.</span> - Nos casos previstos nos incisos III a V, a perda será declarada pela Mesa da Casa respectiva, de ofício ou mediante provocação de qualquer de seus membros, ou de partido político representado no Congresso Nacional, assegurada ampla defesa.</p>

	<p><span class="paragrafo">§ 4º.</span> A renúncia de parlamentar submetido a processo que vise ou possa levar à perda do mandato, nos termos deste artigo, terá seus efeitos suspensos até as deliberações finais de que tratam os §<span class="paragrafo">§ 2º.</span> e 3º. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr6.htm#art1">(Incluído pela Emenda Constitucional de Revisão nº 6, de 1994)</a></p>

	<p><span class="artigo">Art. 56.</span> Não perderá o mandato o Deputado ou Senador:</p>

	<p>I - investido no cargo de Ministro de Estado, Governador de Território, Secretário de Estado, do Distrito Federal, de Território, de Prefeitura de Capital ou chefe de missão diplomática temporária;</p>

	<p>II - licenciado pela respectiva Casa por motivo de doença, ou para tratar, sem remuneração, de interesse particular, desde que, neste caso, o afastamento não ultrapasse cento e vinte dias por sessão legislativa.</p>

	<p><span class="paragrafo">§ 1º.</span> O suplente será convocado nos casos de vaga, de investidura em funções previstas neste artigo ou de licença superior a cento e vinte dias.</p>

	<p><span class="paragrafo">§ 2º.</span> Ocorrendo vaga e não havendo suplente, far-se-á eleição para preenchê-la se faltarem mais de quinze meses para o término do mandato.</p>

	<p><span class="paragrafo">§ 3º.</span> Na hipótese do inciso I, o Deputado ou Senador poderá optar pela remuneração do mandato.</p>

	<h3>Seção VI<br>
	Das Reuniões</h3>

	<p><span class="artigo">Art. 57.</span> O Congresso Nacional reunir-se-á, anualmente, na Capital Federal, de 2 de fevereiro a 17 de julho e de 1º. de agosto a 22 de dezembro. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc50.htm#art1">(Redação dada pela Emenda Constitucional nº 50, de 2006)</a></p>

	<p><span class="paragrafo">§ 1º.</span> As reuniões marcadas para essas datas serão transferidas para o primeiro dia útil subsequente, quando recaírem em sábados, domingos ou feriados.</p>

	<p><span class="paragrafo">§ 2º.</span> A sessão legislativa não será interrompida sem a aprovação do projeto de lei de diretrizes orçamentárias.</p>

	<p><span class="paragrafo">§ 3º.</span> Além de outros casos previstos nesta Constituição, a Câmara dos Deputados e o Senado Federal reunir-se-ão em sessão conjunta para:</p>

	<p>I - inaugurar a sessão legislativa;</p>

	<p>II - elaborar o regimento comum e regular a criação de serviços comuns às duas Casas;</p>

	<p>III - receber o compromisso do Presidente e do Vice-Presidente da República;</p>

	<p>IV - conhecer do veto e sobre ele deliberar.</p>

	<p><span class="paragrafo">§ 4º.</span> Cada uma das Casas reunir-se-á em sessões preparatórias, a partir de 1º. de fevereiro, no primeiro ano da legislatura, para a posse de seus membros e eleição das respectivas Mesas, para mandato de 2 (dois) anos, vedada a recondução para o mesmo cargo na eleição imediatamente subsequente. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc50.htm#art1">(Redação dada pela Emenda Constitucional nº 50, de 2006)</a></p>

	<p><span class="paragrafo">§ 5º.</span> A Mesa do Congresso Nacional será presidida pelo Presidente do Senado Federal, e os demais cargos serão exercidos, alternadamente, pelos ocupantes de cargos equivalentes na Câmara dos Deputados e no Senado Federal.</p>

	<p><span class="paragrafo">§ 6º.</span> A convocação extraordinária do Congresso Nacional far-se-á: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc50.htm#art1">(Redação dada pela Emenda Constitucional nº 50, de 2006)</a></p>

	<p>I - pelo Presidente do Senado Federal, em caso de decretação de estado de defesa ou de intervenção federal, de pedido de autorização para a decretação de estado de sítio e para o compromisso e a posse do Presidente e do Vice-Presidente da República;</p>

	<p>II - pelo Presidente da República, pelos Presidentes da Câmara dos Deputados e do Senado Federal ou a requerimento da maioria dos membros de ambas as Casas, em caso de urgência ou interesse público relevante, em todas as hipóteses deste inciso com a aprovação da maioria absoluta de cada uma das Casas do Congresso Nacional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc50.htm#art1">(Redação dada pela Emenda Constitucional nº 50, de 2006)</a></p>

	<p><span class="paragrafo">§ 7º.</span> Na sessão legislativa extraordinária, o Congresso Nacional somente deliberará sobre a matéria para a qual foi convocado, ressalvada a hipótese do § 8º deste artigo, vedado o pagamento de parcela indenizatória, em razão da convocação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc50.htm#art1">(Redação dada pela Emenda Constitucional nº 50, de 2006)</a></p>

	<p><span class="paragrafo">§ 8º.</span> Havendo medidas provisórias em vigor na data de convocação extraordinária do Congresso Nacional, serão elas automaticamente incluídas na pauta da convocação.</p>

	<h3>Seção VII<br>
	Das Comissões</h3>

	<p><span class="artigo">Art. 58.</span> O Congresso Nacional e suas Casas terão comissões permanentes e temporárias, constituídas na forma e com as atribuições previstas no respectivo regimento ou no ato de que resultar sua criação.</p>

	<p><span class="paragrafo">§ 1º.</span> Na constituição das Mesas e de cada Comissão, é assegurada, tanto quanto possível, a representação proporcional dos partidos ou dos blocos parlamentares que participam da respectiva Casa.</p>

	<p><span class="paragrafo">§ 2º.</span> Às comissões, em razão da matéria de sua competência, cabe:</p>

	<p>I - discutir e votar projeto de lei que dispensar, na forma do regimento, a competência do Plenário, salvo se houver recurso de um décimo dos membros da Casa;</p>

	<p>II - realizar audiências públicas com entidades da sociedade civil;</p>

	<p>III - convocar Ministros de Estado para prestar informações sobre assuntos inerentes a suas atribuições;</p>

	<p>IV - receber petições, reclamações, representações ou queixas de qualquer pessoa contra atos ou omissões das autoridades ou entidades públicas;</p>

	<p>V - solicitar depoimento de qualquer autoridade ou cidadão;</p>

	<p>VI - apreciar programas de obras, planos nacionais, regionais e setoriais de desenvolvimento e sobre eles emitir parecer.</p>

	<p><span class="paragrafo">§ 3º.</span> As comissões parlamentares de inquérito, que terão poderes de investigação próprios das autoridades judiciais, além de outros previstos nos regimentos das respectivas Casas, serão criadas pela Câmara dos Deputados e pelo Senado Federal, em conjunto ou separadamente, mediante requerimento de um terço de seus membros, para a apuração de fato determinado e por prazo certo, sendo suas conclusões, se for o caso, encaminhadas ao Ministério Público, para que promova a responsabilidade civil ou criminal dos infratores.</p>

	<p><span class="paragrafo">§ 4º.</span> Durante o recesso, haverá uma Comissão representativa do Congresso Nacional, eleita por suas Casas na última sessão ordinária do período legislativo, com atribuições definidas no regimento comum, cuja composição reproduzirá, quanto possível, a proporcionalidade da representação partidária.</p>

	<h3>Seção VIII<br>
	Do Processo Legislativo</h3>

	<h4>Subseção I<br>
	Disposição Geral</h4>

	<p><span class="artigo">Art. 59.</span> O processo legislativo compreende a elaboração de:</p>

	<p>I - emendas à Constituição;</p>

	<p>II - leis complementares;</p>

	<p>III - leis ordinárias;</p>

	<p>IV - leis delegadas;</p>

	<p>V - medidas provisórias;</p>

	<p>VI - decretos legislativos;</p>

	<p>VII - resoluções.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Lei complementar disporá sobre a elaboração, redação, alteração e consolidação das leis.</p>

	<h4>Subseção II<br>
	Da Emenda à Constituição</h4>

	<p><span class="artigo">Art. 60.</span> A Constituição poderá ser emendada mediante proposta:</p>

	<p>I - de um terço, no mínimo, dos membros da Câmara dos Deputados ou do Senado Federal;</p>

	<p>II - do Presidente da República;</p>

	<p>III - de mais da metade das Assembleias Legislativas das unidades da Federação, manifestando-se, cada uma delas, pela maioria relativa de seus membros.</p>

	<p><span class="paragrafo">§ 1º.</span> A Constituição não poderá ser emendada na vigência de intervenção federal, de estado de defesa ou de estado de sítio.</p>

	<p><span class="paragrafo">§ 2º.</span> A proposta será discutida e votada em cada Casa do Congresso Nacional, em dois turnos, considerando-se aprovada se obtiver, em ambos, três quintos dos votos dos respectivos membros.</p>

	<p><span class="paragrafo">§ 3º.</span> A emenda à Constituição será promulgada pelas Mesas da Câmara dos Deputados e do Senado Federal, com o respectivo número de ordem.</p>

	<p><span class="paragrafo">§ 4º.</span> Não será objeto de deliberação a proposta de emenda tendente a abolir:</p>

	<p>I - a forma federativa de Estado;</p>

	<p>II - o voto direto, secreto, universal e periódico;</p>

	<p>III - a separação dos Poderes;</p>

	<p>IV - os direitos e garantias individuais.</p>

	<p><span class="paragrafo">§ 5º.</span> A matéria constante de proposta de emenda rejeitada ou havida por prejudicada não pode ser objeto de nova proposta na mesma sessão legislativa.</p>

	<h4>Subseção III<br>
	Das Leis</h4>

	<p><span class="artigo">Art. 61.</span> A iniciativa das leis complementares e ordinárias cabe a qualquer membro ou Comissão da Câmara dos Deputados, do Senado Federal ou do Congresso Nacional, ao Presidente da República, ao Supremo Tribunal Federal, aos Tribunais Superiores, ao Procurador-Geral da República e aos cidadãos, na forma e nos casos previstos nesta Constituição.</p>

	<p><span class="paragrafo">§ 1º.</span> São de iniciativa privativa do Presidente da República as leis que:</p>

	<p>I - fixem ou modifiquem os efetivos das Forças Armadas;</p>

	<p>II - disponham sobre:</p>

	<p class="alinea">a) criação de cargos, funções ou empregos públicos na administração direta e autárquica ou aumento de sua remuneração;</p>

	<p class="alinea">b) organização administrativa e judiciária, matéria tributária e orçamentária, serviços públicos e pessoal da administração dos Territórios;</p>

	<p class="alinea">c) servidores públicos da União e Territórios, seu regime jurídico, provimento de cargos, estabilidade e aposentadoria; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art3">(Redação dada pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p class="alinea">d) organização do Ministério Público e da Defensoria Pública da União, bem como normas gerais para a organização do Ministério Público e da Defensoria Pública dos Estados, do Distrito Federal e dos Territórios;</p>

	<p class="alinea">e) criação e extinção de Ministérios e órgãos da administração pública, observado o disposto no art. 84, VI;</p>

	<p class="alinea">f) militares das Forças Armadas, seu regime jurídico, provimento de cargos, promoções, estabilidade, remuneração, reforma e transferência para a reserva. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art61%C2%A71iif">(Incluída pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A iniciativa popular pode ser exercida pela apresentação à Câmara dos Deputados de projeto de lei subscrito por, no mínimo, um por cento do eleitorado nacional, distribuído pelo menos por cinco Estados, com não menos de três décimos por cento dos eleitores de cada um deles.</p>

	<p><span class="artigo">Art. 62.</span> Em caso de relevância e urgência, o Presidente da República poderá adotar medidas provisórias, com força de lei, devendo submetê-las de imediato ao Congresso Nacional.</p>

	<p><span class="paragrafo">§ 1º.</span> É vedada a edição de medidas provisórias sobre matéria:</p>

	<p>I – relativa a:</p>

	<p class="alinea">a) nacionalidade, cidadania, direitos políticos, partidos políticos e direito eleitoral;</p>

	<p class="alinea">b) direito penal, processual penal e processual civil;</p>

	<p class="alinea">c) organização do Poder Judiciário e do Ministério Público, a carreira e a garantia de seus membros;</p>

	<p class="alinea">d) planos plurianuais, diretrizes orçamentárias, orçamento e créditos adicionais e suplementares, ressalvado o previsto no art. 167, § 3º;</p>

	<p>II – que vise a detenção ou sequestro de bens, de poupança popular ou qualquer outro ativo financeiro;</p>

	<p>III – reservada a lei complementar;</p>

	<p>IV – já disciplinada em projeto de lei aprovado pelo Congresso Nacional e pendente de sanção ou veto do Presidente da República.</p>

	<p><span class="paragrafo">§ 2º.</span> Medida provisória que implique instituição ou majoração de impostos, exceto os previstos nos arts. 153, I, II, IV, V, e 154, II, só produzirá efeitos no exercício financeiro seguinte se houver sido convertida em lei até o último dia daquele em que foi editada.</p>

	<p><span class="paragrafo">§ 3º.</span> As medidas provisórias, ressalvado o disposto nos §§ 11 e 12 perderão eficácia, desde a edição, se não forem convertidas em lei no prazo de sessenta dias, prorrogável, nos termos do § 7º, uma vez por igual período, devendo o Congresso Nacional disciplinar, por decreto legislativo, as relações jurídicas delas decorrentes.</p>

	<p><span class="paragrafo">§ 4º.</span> O prazo a que se refere o § 3º contar-se-á da publicação da medida provisória, suspendendo-se durante os períodos de recesso do Congresso Nacional.</p>

	<p><span class="paragrafo">§ 5º.</span> A deliberação de cada uma das Casas do Congresso Nacional sobre o mérito das medidas provisórias dependerá de juízo prévio sobre o atendimento de seus pressupostos constitucionais.</p>

	<p><span class="paragrafo">§ 6º.</span> Se a medida provisória não for apreciada em até quarenta e cinco dias contados de sua publicação, entrará em regime de urgência, subsequentemente, em cada uma das Casas do Congresso Nacional, ficando sobrestadas, até que se ultime a votação, todas as demais deliberações legislativas da Casa em que estiver tramitando.</p>

	<p><span class="paragrafo">§ 7º.</span> Prorrogar-se-á uma única vez por igual período a vigência de medida provisória que, no prazo de sessenta dias, contado de sua publicação, não tiver a sua votação encerrada nas duas Casas do Congresso Nacional.</p>

	<p><span class="paragrafo">§ 8º.</span> As medidas provisórias terão sua votação iniciada na Câmara dos Deputados.</p>

	<p><span class="paragrafo">§ 9º.</span> Caberá à comissão mista de Deputados e Senadores examinar as medidas provisórias e sobre elas emitir parecer, antes de serem apreciadas, em sessão separada, pelo plenário de cada uma das Casas do Congresso Nacional.</p>

	<p><span class="paragrafo">§ 10.</span> É vedada a reedição, na mesma sessão legislativa, de medida provisória que tenha sido rejeitada ou que tenha perdido sua eficácia por decurso de prazo.</p>

	<p><span class="paragrafo">§ 11.</span> Não editado o decreto legislativo a que se refere o § 3º até sessenta dias após a rejeição ou perda de eficácia de medida provisória, as relações jurídicas constituídas e decorrentes de atos praticados durante sua vigência conservar-se-ão por ela regidas.</p>

	<p><span class="paragrafo">§ 12.</span> Aprovado projeto de lei de conversão alterando o texto original da medida provisória, esta manter-se-á integralmente em vigor até que seja sancionado ou vetado o projeto.</p>

	<p><span class="artigo">Art. 63.</span> Não será admitido aumento da despesa prevista:</p>

	<p>I - nos projetos de iniciativa exclusiva do Presidente da República, ressalvado o disposto no art. 166, § 3º e § 4º;</p>

	<p>II - nos projetos sobre organização dos serviços administrativos da Câmara dos Deputados, do Senado Federal, dos Tribunais Federais e do Ministério Público.</p>

	<p><span class="artigo">Art. 64.</span> A discussão e votação dos projetos de lei de iniciativa do Presidente da República, do Supremo Tribunal Federal e dos Tribunais Superiores terão início na Câmara dos Deputados.</p>

	<p><span class="paragrafo">§ 1º.</span> O Presidente da República poderá solicitar urgência para apreciação de projetos de sua iniciativa.</p>

	<p><span class="paragrafo">§ 2º.</span> Se, no caso do § 1º, a Câmara dos Deputados e o Senado Federal não se manifestarem sobre a proposição, cada qual sucessivamente, em até quarenta e cinco dias, sobrestar-se-ão todas as demais deliberações legislativas da respectiva Casa, com exceção das que tenham prazo constitucional determinado, até que se ultime a votação.</p>

	<p><span class="paragrafo">§ 3º.</span> A apreciação das emendas do Senado Federal pela Câmara dos Deputados far-se-á no prazo de dez dias, observado quanto ao mais o disposto no parágrafo anterior.</p>

	<p><span class="paragrafo">§ 4º.</span> Os prazos do <span class="paragrafo">§ 2º.</span> não correm nos períodos de recesso do Congresso Nacional, nem se aplicam aos projetos de código.</p>

	<p><span class="artigo">Art. 65.</span> O projeto de lei aprovado por uma Casa será revisto pela outra, em um só turno de discussão e votação, e enviado à sanção ou promulgação, se a Casa revisora o aprovar, ou arquivado, se o rejeitar.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Sendo o projeto emendado, voltará à Casa iniciadora.</p>

	<p><span class="artigo">Art. 66.</span> A Casa na qual tenha sido concluída a votação enviará o projeto de lei ao Presidente da República, que, aquiescendo, o sancionará.</p>

	<p><span class="paragrafo">§ 1º.</span> - Se o Presidente da República considerar o projeto, no todo ou em parte, inconstitucional ou contrário ao interesse público, vetá-lo-á total ou parcialmente, no prazo de quinze dias úteis, contados da data do recebimento, e comunicará, dentro de quarenta e oito horas, ao Presidente do Senado Federal os motivos do veto.</p>

	<p><span class="paragrafo">§ 2º.</span> O veto parcial somente abrangerá texto integral de artigo, de parágrafo, de inciso ou de alínea.</p>

	<p><span class="paragrafo">§ 3º.</span> Decorrido o prazo de quinze dias, o silêncio do Presidente da República importará sanção.</p>

	<p><span class="paragrafo">§ 4º.</span> O veto será apreciado em sessão conjunta, dentro de trinta dias a contar de seu recebimento, só podendo ser rejeitado pelo voto da maioria absoluta dos Deputados e Senadores. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc76.htm#art1">(Redação dada pela Emenda Constitucional nº 76, de 2013)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Se o veto não for mantido, será o projeto enviado, para promulgação, ao Presidente da República.</p>

	<p><span class="paragrafo">§ 6º.</span> Esgotado sem deliberação o prazo estabelecido no § 4º, o veto será colocado na ordem do dia da sessão imediata, sobrestadas as demais proposições, até sua votação final.</p>

	<p><span class="paragrafo">§ 7º.</span> Se a lei não for promulgada dentro de quarenta e oito horas pelo Presidente da República, nos casos dos <span class="paragrafo">§ 3º.</span> e § 5º, o Presidente do Senado a promulgará, e, se este não o fizer em igual prazo, caberá ao Vice-Presidente do Senado fazê-lo.</p>

	<p><span class="artigo">Art. 67.</span> A matéria constante de projeto de lei rejeitado somente poderá constituir objeto de novo projeto, na mesma sessão legislativa, mediante proposta da maioria absoluta dos membros de qualquer das Casas do Congresso Nacional.</p>

	<p><span class="artigo">Art. 68.</span> As leis delegadas serão elaboradas pelo Presidente da República, que deverá solicitar a delegação ao Congresso Nacional.</p>

	<p><span class="paragrafo">§ 1º.</span> Não serão objeto de delegação os atos de competência exclusiva do Congresso Nacional, os de competência privativa da Câmara dos Deputados ou do Senado Federal, a matéria reservada à lei complementar, nem a legislação sobre:</p>

	<p>I - organização do Poder Judiciário e do Ministério Público, a carreira e a garantia de seus membros;</p>

	<p>II - nacionalidade, cidadania, direitos individuais, políticos e eleitorais;</p>

	<p>III - planos plurianuais, diretrizes orçamentárias e orçamentos.</p>

	<p><span class="paragrafo">§ 2º.</span> A delegação ao Presidente da República terá a forma de resolução do Congresso Nacional, que especificará seu conteúdo e os termos de seu exercício.</p>

	<p><span class="paragrafo">§ 3º.</span> Se a resolução determinar a apreciação do projeto pelo Congresso Nacional, este a fará em votação única, vedada qualquer emenda.</p>

	<p><span class="artigo">Art. 69.</span> As leis complementares serão aprovadas por maioria absoluta.</p>

	<h3>Seção IX<br>
	Da Fiscalização Contábil, Financeira e Orçamentária</h3>

	<p><span class="artigo">Art. 70.</span> A fiscalização contábil, financeira, orçamentária, operacional e patrimonial da União e das entidades da administração direta e indireta, quanto à legalidade, legitimidade, economicidade, aplicação das subvenções e renúncia de receitas, será exercida pelo Congresso Nacional, mediante controle externo, e pelo sistema de controle interno de cada Poder.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Prestará contas qualquer pessoa física ou jurídica, pública ou privada, que utilize, arrecade, guarde, gerencie ou administre dinheiros, bens e valores públicos ou pelos quais a União responda, ou que, em nome desta, assuma obrigações de natureza pecuniária. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art12">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="artigo">Art. 71.</span> O controle externo, a cargo do Congresso Nacional, será exercido com o auxílio do Tribunal de Contas da União, ao qual compete:</p>

	<p>I - apreciar as contas prestadas anualmente pelo Presidente da República, mediante parecer prévio que deverá ser elaborado em sessenta dias a contar de seu recebimento;</p>

	<p>II - julgar as contas dos administradores e demais responsáveis por dinheiros, bens e valores públicos da administração direta e indireta, incluídas as fundações e sociedades instituídas e mantidas pelo Poder Público federal, e as contas daqueles que derem causa a perda, extravio ou outra irregularidade de que resulte prejuízo ao erário público;</p>

	<p>III - apreciar, para fins de registro, a legalidade dos atos de admissão de pessoal, a qualquer título, na administração direta e indireta, incluídas as fundações instituídas e mantidas pelo Poder Público, excetuadas as nomeações para cargo de provimento em comissão, bem como a das concessões de aposentadorias, reformas e pensões, ressalvadas as melhorias posteriores que não alterem o fundamento legal do ato concessório;</p>

	<p>IV - realizar, por iniciativa própria, da Câmara dos Deputados, do Senado Federal, de Comissão técnica ou de inquérito, inspeções e auditorias de natureza contábil, financeira, orçamentária, operacional e patrimonial, nas unidades administrativas dos Poderes Legislativo, Executivo e Judiciário, e demais entidades referidas no inciso II;</p>

	<p>V - fiscalizar as contas nacionais das empresas supranacionais de cujo capital social a União participe, de forma direta ou indireta, nos termos do tratado constitutivo;</p>

	<p>VI - fiscalizar a aplicação de quaisquer recursos repassados pela União mediante convênio, acordo, ajuste ou outros instrumentos congêneres, a Estado, ao Distrito Federal ou a Município;</p>

	<p>VII - prestar as informações solicitadas pelo Congresso Nacional, por qualquer de suas Casas, ou por qualquer das respectivas Comissões, sobre a fiscalização contábil, financeira, orçamentária, operacional e patrimonial e sobre resultados de auditorias e inspeções realizadas;</p>

	<p>VIII - aplicar aos responsáveis, em caso de ilegalidade de despesa ou irregularidade de contas, as sanções previstas em lei, que estabelecerá, entre outras cominações, multa proporcional ao dano causado ao erário;</p>

	<p>IX - assinar prazo para que o órgão ou entidade adote as providências necessárias ao exato cumprimento da lei, se verificada ilegalidade;</p>

	<p>X - sustar, se não atendido, a execução do ato impugnado, comunicando a decisão à Câmara dos Deputados e ao Senado Federal;</p>

	<p>XI - representar ao Poder competente sobre irregularidades ou abusos apurados.</p>

	<p><span class="paragrafo">§ 1º.</span> No caso de contrato, o ato de sustação será adotado diretamente pelo Congresso Nacional, que solicitará, de imediato, ao Poder Executivo as medidas cabíveis.</p>

	<p><span class="paragrafo">§ 2º.</span> Se o Congresso Nacional ou o Poder Executivo, no prazo de noventa dias, não efetivar as medidas previstas no parágrafo anterior, o Tribunal decidirá a respeito.</p>

	<p><span class="paragrafo">§ 3º.</span> As decisões do Tribunal de que resulte imputação de débito ou multa terão eficácia de título executivo.</p>

	<p><span class="paragrafo">§ 4º.</span> O Tribunal encaminhará ao Congresso Nacional, trimestral e anualmente, relatório de suas atividades.</p>

	<p><span class="artigo">Art. 72.</span> A Comissão mista permanente a que se refere o art. 166, §1º, diante de indícios de despesas não autorizadas, ainda que sob a forma de investimentos não programados ou de subsídios não aprovados, poderá solicitar à autoridade governamental responsável que, no prazo de cinco dias, preste os esclarecimentos necessários.</p>

	<p><span class="paragrafo">§ 1º.</span> Não prestados os esclarecimentos, ou considerados estes insuficientes, a Comissão solicitará ao Tribunal pronunciamento conclusivo sobre a matéria, no prazo de trinta dias.</p>

	<p><span class="paragrafo">§ 2º.</span> Entendendo o Tribunal irregular a despesa, a Comissão, se julgar que o gasto possa causar dano irreparável ou grave lesão à economia pública, proporá ao Congresso Nacional sua sustação.</p>

	<p><span class="artigo">Art. 73.</span> O Tribunal de Contas da União, integrado por nove Ministros, tem sede no Distrito Federal, quadro próprio de pessoal e jurisdição em todo o território nacional, exercendo, no que couber, as atribuições previstas no art. 96. .</p>

	<p><span class="paragrafo">§ 1º.</span> Os Ministros do Tribunal de Contas da União serão nomeados dentre brasileiros que satisfaçam os seguintes requisitos:</p>

	<p>I - mais de trinta e cinco e menos de setenta anos de idade; (Incluído pela Emenda Constitucional nº 122, de 2022)</p>

	<p>II - idoneidade moral e reputação ilibada;</p>

	<p>III - notórios conhecimentos jurídicos, contábeis, econômicos e financeiros ou de administração pública;</p>

	<p>IV - mais de dez anos de exercício de função ou de efetiva atividade profissional que exija os conhecimentos mencionados no inciso anterior.</p>

	<p><span class="paragrafo">§ 2º.</span> Os Ministros do Tribunal de Contas da União serão escolhidos:</p>

	<p>I - um terço pelo Presidente da República, com aprovação do Senado Federal, sendo dois alternadamente dentre auditores e membros do Ministério Público junto ao Tribunal, indicados em lista tríplice pelo Tribunal, segundo os critérios de antiguidade e merecimento;</p>

	<p>II - dois terços pelo Congresso Nacional.</p>

	<p>§ 3° Os Ministros do Tribunal de Contas da União terão as mesmas garantias, prerrogativas, impedimentos, vencimentos e vantagens dos Ministros do Superior Tribunal de Justiça, aplicando-se-lhes, quanto à aposentadoria e pensão, as normas constantes do art. 40. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art73%C2%A73">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 4º.</span> O auditor, quando em substituição a Ministro, terá as mesmas garantias e impedimentos do titular e, quando no exercício das demais atribuições da judicatura, as de juiz de Tribunal Regional Federal.</p>

	<p><span class="artigo">Art. 74.</span> Os Poderes Legislativo, Executivo e Judiciário manterão, de forma integrada, sistema de controle interno com a finalidade de:</p>

	<p>I - avaliar o cumprimento das metas previstas no plano plurianual, a execução dos programas de governo e dos orçamentos da União;</p>

	<p>II - comprovar a legalidade e avaliar os resultados, quanto à eficácia e eficiência, da gestão orçamentária, financeira e patrimonial nos órgãos e entidades da administração federal, bem como da aplicação de recursos públicos por entidades de direito privado;</p>

	<p>III - exercer o controle das operações de crédito, avais e garantias, bem como dos direitos e haveres da União;</p>

	<p>IV - apoiar o controle externo no exercício de sua missão institucional.</p>

	<p><span class="paragrafo">§ 1º.</span> Os responsáveis pelo controle interno, ao tomarem conhecimento de qualquer irregularidade ou ilegalidade, dela darão ciência ao Tribunal de Contas da União, sob pena de responsabilidade solidária.</p>

	<p><span class="paragrafo">§ 2º.</span> Qualquer cidadão, partido político, associação ou sindicato é parte legítima para, na forma da lei, denunciar irregularidades ou ilegalidades perante o Tribunal de Contas da União.</p>

	<p><span class="artigo">Art. 75.</span> As normas estabelecidas nesta seção aplicam-se, no que couber, à organização, composição e fiscalização dos Tribunais de Contas dos Estados e do Distrito Federal, bem como dos Tribunais e Conselhos de Contas dos Municípios.</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> As Constituições estaduais disporão sobre os Tribunais de Contas respectivos, que serão integrados por sete Conselheiros.</p>

	<h2 class="sum2">CAPÍTULO II<br>
	Do Poder Executivo</h2>

	<h3>Seção I<br>
	Do Presidente e do Vice-Presidente da República</h3>

	<p><span class="artigo">Art. 76.</span> O Poder Executivo é exercido pelo Presidente da República, auxiliado pelos Ministros de Estado.</p>

	</a><p><span class="artigo">Art. 77.</span> A eleição do Presidente e do Vice-Presidente da República realizar-se-á, simultaneamente, no primeiro domingo de outubro, em primeiro turno, e no último domingo de outubro, em segundo turno, se houver, do ano anterior ao do término do mandato presidencial vigente. </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc16.htm#art1">(Redação dada pela Emenda Constitucional nº 16, de 1997)</a></p>

	<p><span class="paragrafo">§ 1º.</span> A eleição do Presidente da República importará a do Vice-Presidente com ele registrado.</p>

	<p><span class="paragrafo">§ 2º.</span> Será considerado eleito Presidente o candidato que, registrado por partido político, obtiver a maioria absoluta de votos, não computados os em branco e os nulos.</p>

	<p><span class="paragrafo">§ 3º.</span> Se nenhum candidato alcançar maioria absoluta na primeira votação, far-se-á nova eleição em até vinte dias após a proclamação do resultado, concorrendo os dois candidatos mais votados e considerando-se eleito aquele que obtiver a maioria dos votos válidos.</p>

	<p><span class="paragrafo">§ 4º.</span> Se, antes de realizado o segundo turno, ocorrer morte, desistência ou impedimento legal de candidato, convocar-se-á, dentre os remanescentes, o de maior votação.</p>

	<p><span class="paragrafo">§ 5º.</span> Se, na hipótese dos parágrafos anteriores, remanescer, em segundo lugar, mais de um candidato com a mesma votação, qualificar-se-á o mais idoso.</p>

	<p><span class="artigo">Art. 78.</span> O Presidente e o Vice-Presidente da República tomarão posse em sessão do Congresso Nacional, prestando o compromisso de manter, defender e cumprir a Constituição, observar as leis, promover o bem geral do povo brasileiro, sustentar a união, a integridade e a independência do Brasil.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Se, decorridos dez dias da data fixada para a posse, o Presidente ou o Vice-Presidente, salvo motivo de força maior, não tiver assumido o cargo, este será declarado vago.</p>

	<p><span class="artigo">Art. 79.</span> Substituirá o Presidente, no caso de impedimento, e suceder-lhe-á, no de vaga, o Vice-Presidente.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O Vice-Presidente da República, além de outras atribuições que lhe forem conferidas por lei complementar, auxiliará o Presidente, sempre que por ele convocado para missões especiais.</p>

	<p><span class="artigo">Art. 80.</span> Em caso de impedimento do Presidente e do Vice-Presidente, ou vacância dos respectivos cargos, serão sucessivamente chamados ao exercício da Presidência o Presidente da Câmara dos Deputados, o do Senado Federal e o do Supremo Tribunal Federal.</p>

	<p><span class="artigo">Art. 81.</span> Vagando os cargos de Presidente e Vice-Presidente da República, far-se-á eleição noventa dias depois de aberta a última vaga.</p>

	<p><span class="paragrafo">§ 1º.</span> - Ocorrendo a vacância nos últimos dois anos do período presidencial, a eleição para ambos os cargos será feita trinta dias depois da última vaga, pelo Congresso Nacional, na forma da lei.</p>

	<p><span class="paragrafo">§ 2º.</span> - Em qualquer dos casos, os eleitos deverão completar o período de seus antecessores.</p>

	<p><span class="artigo">Art. 82.</span> O mandato do Presidente da República é de 4 (quatro) anos e terá início em 5 de janeiro do ano seguinte ao de sua eleição. </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc111.htm#art1">(Redação dada pela Emenda Constitucional nº 111, de 2021) </a></p>

	<p><span class="artigo">Art. 83.</span> O Presidente e o Vice-Presidente da República não poderão, sem licença do Congresso Nacional, ausentar-se do País por período superior a quinze dias, sob pena de perda do cargo.</p>

	<h3>Seção II<br>
	Das Atribuições do Presidente da República</h3>

	<p><span class="artigo">Art. 84.</span> Compete privativamente ao Presidente da República:</p>

	<p>I - nomear e exonerar os Ministros de Estado;</p>

	<p>II - exercer, com o auxílio dos Ministros de Estado, a direção superior da administração federal;</p>

	<p>III - iniciar o processo legislativo, na forma e nos casos previstos nesta Constituição;</p>

	<p>IV - sancionar, promulgar e fazer publicar as leis, bem como expedir decretos e regulamentos para sua fiel execução;</p>

	<p>V - vetar projetos de lei, total ou parcialmente;</p>

	<p>VI – dispor, mediante decreto, sobre:</p>

	<p class="alinea">a) organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc32.htm#art1">(Incluída pela Emenda Constitucional nº 32, de 2001)</a></p>

	<p class="alinea">b) extinção de funções ou cargos públicos, quando vagos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc32.htm#art1">(Incluída pela Emenda Constitucional nº 32, de 2001)</a></p>

	<p>VII - manter relações com Estados estrangeiros e acreditar seus representantes diplomáticos;</p>

	<p>VIII - celebrar tratados, convenções e atos internacionais, sujeitos a referendo do Congresso Nacional;</p>

	<p>IX - decretar o estado de defesa e o estado de sítio;</p>

	<p>X - decretar e executar a intervenção federal;</p>

	<p>XI - remeter mensagem e plano de governo ao Congresso Nacional por ocasião da abertura da sessão legislativa, expondo a situação do País e solicitando as providências que julgar necessárias;</p>

	<p>XII - conceder indulto e comutar penas, com audiência, se necessário, dos órgãos instituídos em lei;</p>

	<p>XIII - exercer o comando supremo das Forças Armadas, nomear os Comandantes da Marinha, do Exército e da Aeronáutica, promover seus oficiais-generais e nomeá-los para os cargos que lhes são privativos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc23.htm#art84xiii">(Redação dada pela Emenda Constitucional nº 23, de 02/09/99)</a></p>

	<p>XIV - nomear, após aprovação pelo Senado Federal, os Ministros do Supremo Tribunal Federal e dos Tribunais Superiores, os Governadores de Territórios, o Procurador-Geral da República, o presidente e os diretores do banco central e outros servidores, quando determinado em lei;</p>

	<p>XV - nomear, observado o disposto no art. 73, os Ministros do Tribunal de Contas da União;</p>

	<p>XVI - nomear os magistrados, nos casos previstos nesta Constituição, e o Advogado-Geral da União;</p>

	<p>XVII - nomear membros do Conselho da República, nos termos do art. 89, VII;</p>

	<p>XVIII - convocar e presidir o Conselho da República e o Conselho de Defesa Nacional;</p>

	<p>XIX - declarar guerra, no caso de agressão estrangeira, autorizado pelo Congresso Nacional ou referendado por ele, quando ocorrida no intervalo das sessões legislativas, e, nas mesmas condições, decretar, total ou parcialmente, a mobilização nacional;</p>

	<p>XX - celebrar a paz, autorizado ou com o referendo do Congresso Nacional;</p>

	<p>XXI - conferir condecorações e distinções honoríficas;</p>

	<p>XXII - permitir, nos casos previstos em lei complementar, que forças estrangeiras transitem pelo território nacional ou nele permaneçam temporariamente;</p>

	<p>XXIII - enviar ao Congresso Nacional o plano plurianual, o projeto de lei de diretrizes orçamentárias e as propostas de orçamento previstos nesta Constituição;</p>

	<p>XXIV - prestar, anualmente, ao Congresso Nacional, dentro de sessenta dias após a abertura da sessão legislativa, as contas referentes ao exercício anterior;</p>

	<p>XXV - prover e extinguir os cargos públicos federais, na forma da lei;</p>

	<p>XXVI - editar medidas provisórias com força de lei, nos termos do art. 62;</p>

	<p>XXVII - exercer outras atribuições previstas nesta Constituição.</p>

	<p>XXVIII - propor ao Congresso Nacional a decretação do estado de calamidade pública de âmbito nacional previsto nos arts. 167-B, 167-C, 167-D, 167-e, 167-F e 167-G desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">Parágrafo único.</span> O Presidente da República poderá delegar as atribuições mencionadas nos incisos VI, XII e XXV, primeira parte, aos Ministros de Estado, ao Procurador-Geral da República ou ao Advogado-Geral da União, que observarão os limites traçados nas respectivas delegações.</p>

	<h3>Seção III<br>
	Da Responsabilidade do Presidente da República</h3>

	<p><span class="artigo">Art. 85.</span> São crimes de responsabilidade os atos do Presidente da República que atentem contra a Constituição Federal e, especialmente, contra:</p>

	<p>I - a existência da União;</p>

	<p>II - o livre exercício do Poder Legislativo, do Poder Judiciário, do Ministério Público e dos Poderes constitucionais das unidades da Federação;</p>

	<p>III - o exercício dos direitos políticos, individuais e sociais;</p>

	<p>IV - a segurança interna do País;</p>

	<p>V - a probidade na administração;</p>

	<p>VI - a lei orçamentária;</p>

	<p>VII - o cumprimento das leis e das decisões judiciais.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Esses crimes serão definidos em lei especial, que estabelecerá as normas de processo e julgamento.</p>

	<p><span class="artigo">Art. 86.</span> Admitida a acusação contra o Presidente da República, por dois terços da Câmara dos Deputados, será ele submetido a julgamento perante o Supremo Tribunal Federal, nas infrações penais comuns, ou perante o Senado Federal, nos crimes de responsabilidade.</p>

	<p><span class="paragrafo">§ 1º.</span> O Presidente ficará suspenso de suas funções:</p>

	<p>I</a> - nas infrações penais comuns, se recebida a denúncia ou queixa-crime pelo Supremo Tribunal Federal;</p>

	<p>II - nos crimes de responsabilidade, após a instauração do processo pelo Senado Federal.</p>

	<p><span class="paragrafo">§ 2º.</span> Se, decorrido o prazo de cento e oitenta dias, o julgamento não estiver concluído, cessará o afastamento do Presidente, sem prejuízo do regular prosseguimento do processo.</p>

	<p><span class="paragrafo">§ 3º.</span> Enquanto não sobrevier sentença condenatória, nas infrações comuns, o Presidente da República não estará sujeito a prisão.</p>

	<p><span class="paragrafo">§ 4º.</span> O Presidente da República, na vigência de seu mandato, não pode ser responsabilizado por atos estranhos ao exercício de suas funções.</p>

	<h3>Seção IV<br>
	Dos Ministros De Estado</h3>

	<p><span class="artigo">Art. 87.</span> Os Ministros de Estado serão escolhidos dentre brasileiros maiores de vinte e um anos e no exercício dos direitos políticos.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Compete ao Ministro de Estado, além de outras atribuições estabelecidas nesta Constituição e na lei:</p>

	<p>I - exercer a orientação, coordenação e supervisão dos órgãos e entidades da administração federal na área de sua competência e referendar os atos e decretos assinados pelo Presidente da República;</p>

	<p>II - expedir instruções para a execução das leis, decretos e regulamentos;</p>

	<p>III - apresentar ao Presidente da República relatório anual de sua gestão no Ministério;</p>

	<p>IV - praticar os atos pertinentes às atribuições que lhe forem outorgadas ou delegadas pelo Presidente da República.</p>

	<p><span class="artigo">Art. 88.</span> A lei disporá sobre a criação e extinção de Ministérios e órgãos da administração pública.</p>

	<h3>Seção V<br>
	Do Conselho da República e do Conselho De Defesa Nacional</h3>

	<h4>Subseção I<br>
	Do Conselho da República</h4>

	<p><span class="artigo">Art. 89.</span> O Conselho da República é órgão superior de consulta do Presidente da República, e dele participam:</p>

	<p>I - o Vice-Presidente da República;</p>

	<p>II - o Presidente da Câmara dos Deputados;</p>

	<p>III - o Presidente do Senado Federal;</p>

	<p>IV - os líderes da maioria e da minoria na Câmara dos Deputados;</p>

	<p>V - os líderes da maioria e da minoria no Senado Federal;</p>

	<p>VI - o Ministro da Justiça;</p>

	<p>VII - seis cidadãos brasileiros natos, com mais de trinta e cinco anos de idade, sendo dois nomeados pelo Presidente da República, dois eleitos pelo Senado Federal e dois eleitos pela Câmara dos Deputados, todos com mandato de três anos, vedada a recondução.</p>

	<p><span class="artigo">Art. 90.</span> Compete ao Conselho da República pronunciar-se sobre:</p>

	<p>I - intervenção federal, estado de defesa e estado de sítio;</p>

	<p>II - as questões relevantes para a estabilidade das instituições democráticas.</p>

	<p><span class="paragrafo">§ 1º.</span> O Presidente da República poderá convocar Ministro de Estado para participar da reunião do Conselho, quando constar da pauta questão relacionada com o respectivo Ministério.</p>

	<p><span class="paragrafo">§ 2º.</span> A lei regulará a organização e o funcionamento do Conselho da República. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8041.htm">(Vide Lei nº 8.041, de 1990)</a></p>

	<h4>Subseção II<br>
	Do Conselho de Defesa Nacional</h4>

	<p><span class="artigo">Art. 91.</span> O Conselho de Defesa Nacional é órgão de consulta do Presidente da República nos assuntos relacionados com a soberania nacional e a defesa do Estado democrático, e dele participam como membros natos:</a></p>

	<p>I - o Vice-Presidente da República;</p>

	<p>II - o Presidente da Câmara dos Deputados;</p>

	<p>III - o Presidente do Senado Federal;</p>

	<p>IV - o Ministro da Justiça;</p>

	</a><p>V - o Ministro de Estado da Defesa; </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc23.htm#art91v">(Redação dada pela Emenda Constitucional nº 23, de 1999)</a></p>

	<p>VI - o Ministro das Relações Exteriores;</p>

	<p>VII - o Ministro do Planejamento.</p>

	<p>VIII - os Comandantes da Marinha, do Exército e da Aeronáutica. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc23.htm#art91viii">(Incluído pela Emenda Constitucional nº 23, de 1999)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Compete ao Conselho de Defesa Nacional:</p>

	<p>I - opinar nas hipóteses de declaração de guerra e de celebração da paz, nos termos desta Constituição;</p>

	<p>II - opinar sobre a decretação do estado de defesa, do estado de sítio e da intervenção federal;</p>

	<p>III - propor os critérios e condições de utilização de áreas indispensáveis à segurança do território nacional e opinar sobre seu efetivo uso, especialmente na faixa de fronteira e nas relacionadas com a preservação e a exploração dos recursos naturais de qualquer tipo;</p>

	<p>IV - estudar, propor e acompanhar o desenvolvimento de iniciativas necessárias a garantir a independência nacional e a defesa do Estado democrático.</p>

	<p><span class="paragrafo">§ 2º.</span> A lei regulará a organização e o funcionamento do Conselho de Defesa Nacional. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8183.htm">(Vide Lei nº 8.183, de 1991)</a></p>

	<h2 class="sum2">CAPÍTULO III<br>
	Do Poder Judiciário</h2>

	<h3>Seção I<br>
	Disposições Gerais</h3>

	<p><span class="artigo">Art. 92.</span> São órgãos do Poder Judiciário:</p>

	<p>I - o Supremo Tribunal Federal;</p>

	<p>I-A o Conselho Nacional de Justiça; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II - o Superior Tribunal de Justiça;</p>

	<p>II-A - o Tribunal Superior do Trabalho; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc92.htm#art1">(Incluído pela Emenda Constitucional nº 92, de 2016)</a></p>

	<p>III - os Tribunais Regionais Federais e Juízes Federais;</p>

	<p>IV - os Tribunais e Juízes do Trabalho;</p>

	<p>V - os Tribunais e Juízes Eleitorais;</p>

	<p>VI - os Tribunais e Juízes Militares;</p>

	<p>VII - os Tribunais e Juízes dos Estados e do Distrito Federal e Territórios.</p>

	<p><span class="paragrafo">§ 1º.</span> O Supremo Tribunal Federal, o Conselho Nacional de Justiça e os Tribunais Superiores têm sede na Capital Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3392&amp;processo=3392">(Vide ADIN 3392)</a></p>

	<p><span class="paragrafo">§ 2º.</span> O Supremo Tribunal Federal e os Tribunais Superiores têm jurisdição em todo o território nacional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 93.</span> Lei complementar, de iniciativa do Supremo Tribunal Federal, disporá sobre o Estatuto da Magistratura, observados os seguintes princípios:</p>

	<p>I - ingresso na carreira, cujo cargo inicial será o de juiz substituto, mediante concurso público de provas e títulos, com a participação da Ordem dos Advogados do Brasil em todas as fases, exigindo-se do bacharel em direito, no mínimo, três anos de atividade jurídica e obedecendo-se, nas nomeações, à ordem de classificação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II - promoção de entrância para entrância, alternadamente, por antiguidade e merecimento, atendidas as seguintes normas:</p>

	<p class="alinea">a) é obrigatória a promoção do juiz que figure por três vezes consecutivas ou cinco alternadas em lista de merecimento;</p>

	<p class="alinea">b) a promoção por merecimento pressupõe dois anos de exercício na respectiva entrância e integrar o juiz a primeira quinta parte da lista de antiguidade desta, salvo se não houver com tais requisitos quem aceite o lugar vago;</p>

	<p class="alinea">c) aferição do merecimento conforme o desempenho e pelos critérios objetivos de produtividade e presteza no exercício da jurisdição e pela frequência e aproveitamento em cursos oficiais ou reconhecidos de aperfeiçoamento; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p class="alinea">d) na apuração de antiguidade, o tribunal somente poderá recusar o juiz mais antigo pelo voto fundamentado de dois terços de seus membros, conforme procedimento próprio, e assegurada ampla defesa, repetindo-se a votação até fixar-se a indicação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p class="alinea">e) não será promovido o juiz que, injustificadamente, retiver autos em seu poder além do prazo legal, não podendo devolvê-los ao cartório sem o devido despacho ou decisão; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluída pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>III o acesso aos tribunais de segundo grau far-se-á por antiguidade e merecimento, alternadamente, apurados na última ou única entrância; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3392&amp;processo=3392">(Vide ADIN 3392)</a></p>

	<p>IV previsão de cursos oficiais de preparação, aperfeiçoamento e promoção de magistrados, constituindo etapa obrigatória do processo de vitaliciamento a participação em curso oficial ou reconhecido por escola nacional de formação e aperfeiçoamento de magistrados; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>V - o subsídio dos Ministros dos Tribunais Superiores corresponderá a noventa e cinco por cento do subsídio mensal fixado para os Ministros do Supremo Tribunal Federal e os subsídios dos demais magistrados serão fixados em lei e escalonados, em nível federal e estadual, conforme as respectivas categorias da estrutura judiciária nacional, não podendo a diferença entre uma e outra ser superior a dez por cento ou inferior a cinco por cento, nem exceder a noventa e cinco por cento do subsídio mensal dos Ministros dos Tribunais Superiores, obedecido, em qualquer caso, o disposto nos arts. 37, XI, e 39, § 4º; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art13">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>VI - a aposentadoria dos magistrados e a pensão de seus dependentes observarão o disposto no art. 40; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art93vi">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>VII o juiz titular residirá na respectiva comarca, salvo autorização do tribunal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>VIII - o ato de remoção ou de disponibilidade do magistrado, por interesse público, fundar-se-á em decisão por voto da maioria absoluta do respectivo tribunal ou do Conselho Nacional de Justiça, assegurada ampla defesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>VIII-A - a remoção a pedido de magistrados de comarca de igual entrância atenderá, no que couber, ao disposto nas alíneas "a", "b", "c" e "e" do inciso II do caput deste artigo e no art. 94 desta Constituição;</p>

	<ul class="dica">
		<li>Redação dada pela Emenda Constitucional nº 130, de 3 de outubro de 2023</li>
	</ul>

	<p>VIII-B - a permuta de magistrados de comarca de igual entrância, quando for o caso, e dentro do mesmo segmento de justiça, inclusive entre os juízes de segundo grau, vinculados a diferentes tribunais, na esfera da justiça estadual, federal ou do trabalho, atenderá, no que couber, ao disposto nas alíneas "a", "b", "c" e "e" do inciso II do caput deste artigo e no art. 94 desta Constituição;</p>

	<ul class="dica">
		<li>Inciso incluído pela Emenda Constitucional nº 130, de 3 de outubro de 2023</li>
	</ul>

	<p>IX todos os julgamentos dos órgãos do Poder Judiciário serão públicos, e fundamentadas todas as decisões, sob pena de nulidade, podendo a lei limitar a presença, em determinados atos, às próprias partes e a seus advogados, ou somente a estes, em casos nos quais a preservação do direito à intimidade do interessado no sigilo não prejudique o interesse público à informação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>X as decisões administrativas dos tribunais serão motivadas e em sessão pública, sendo as disciplinares tomadas pelo voto da maioria absoluta de seus membros; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>XI nos tribunais com número superior a vinte e cinco julgadores, poderá ser constituído órgão especial, com o mínimo de onze e o máximo de vinte e cinco membros, para o exercício das atribuições administrativas e jurisdicionais delegadas da competência do tribunal pleno, provendo-se metade das vagas por antiguidade e a outra metade por eleição pelo tribunal pleno; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>XII a atividade jurisdicional será ininterrupta, sendo vedado férias coletivas nos juízos e tribunais de segundo grau, funcionando, nos dias em que não houver expediente forense normal, juízes em plantão permanente; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>XIII o número de juízes na unidade jurisdicional será proporcional à efetiva demanda judicial e à respectiva população; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>XIV os servidores receberão delegação para a prática de atos de administração e atos de mero expediente sem caráter decisório; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>XV a distribuição de processos será imediata, em todos os graus de jurisdição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 94.</span> Um quinto dos lugares dos Tribunais Regionais Federais, dos Tribunais dos Estados, e do Distrito Federal e Territórios será composto de membros, do Ministério Público, com mais de dez anos de carreira, e de advogados de notório saber jurídico e de reputação ilibada, com mais de dez anos de efetiva atividade profissional, indicados em lista sêxtupla pelos órgãos de representação das respectivas classes.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Recebidas as indicações, o tribunal formará lista tríplice, enviando-a ao Poder Executivo, que, nos vinte dias subsequentes, escolherá um de seus integrantes para nomeação.</p>

	<p><span class="artigo">Art. 95.</span> Os juízes gozam das seguintes garantias:</p>

	<p>I - vitaliciedade, que, no primeiro grau, só será adquirida após dois anos de exercício, dependendo a perda do cargo, nesse período, de deliberação do tribunal a que o juiz estiver vinculado, e, nos demais casos, de sentença judicial transitada em julgado;</p>

	<p>II - inamovibilidade, salvo por motivo de interesse público, na forma do art. 93, VIII;</p>

	<p>III - irredutibilidade de subsídio, ressalvado o disposto nos arts. 37, X e XI, 39, § 4º, 150, II, 153, III, e 153, § 2º, I. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art13">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Aos juízes é vedado:</p>

	<p>I - exercer, ainda que em disponibilidade, outro cargo ou função, salvo uma de magistério;</p>

	<p>II - receber, a qualquer título ou pretexto, custas ou participação em processo;</p>

	<p>III - dedicar-se à atividade político-partidária.</p>

	<p>IV receber, a qualquer título ou pretexto, auxílios ou contribuições de pessoas físicas, entidades públicas ou privadas, ressalvadas as exceções previstas em lei; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>V exercer a advocacia no juízo ou tribunal do qual se afastou, antes de decorridos três anos do afastamento do cargo por aposentadoria ou exoneração. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 96.</span> Compete privativamente:</p>

	<p>I - aos tribunais:</p>

	<p class="alinea">a) eleger seus órgãos diretivos e elaborar seus regimentos internos, com observância das normas de processo e das garantias processuais das partes, dispondo sobre a competência e o funcionamento dos respectivos órgãos jurisdicionais e administrativos;</p>

	<p class="alinea">b) organizar suas secretarias e serviços auxiliares e os dos juízos que lhes forem vinculados, velando pelo exercício da atividade correicional respectiva;</p>

	<p class="alinea">c) prover, na forma prevista nesta Constituição, os cargos de juiz de carreira da respectiva jurisdição;</p>

	<p class="alinea">d) propor a criação de novas varas judiciárias;</p>

	<p class="alinea">e) prover, por concurso público de provas, ou de provas e títulos, obedecido o disposto no art. 169, parágrafo único, os cargos necessários à administração da Justiça, exceto os de confiança assim definidos em lei;</p>

	<p class="alinea">f) conceder licença, férias e outros afastamentos a seus membros e aos juízes e servidores que lhes forem imediatamente vinculados;</p>

	<p>II - ao Supremo Tribunal Federal, aos Tribunais Superiores e aos Tribunais de Justiça propor ao Poder Legislativo respectivo, observado o disposto no art. 169:</p>

	<p class="alinea">a) a alteração do número de membros dos tribunais inferiores;</p>

	<p class="alinea">b) a criação e a extinção de cargos e a remuneração dos seus serviços auxiliares e dos juízos que lhes forem vinculados, bem como a fixação do subsídio de seus membros e dos juízes, inclusive dos tribunais inferiores, onde houver; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc41.htm#art1">(Redação dada pela Emenda Constitucional nº 41, 19.12.2003)</a></p>

	<p class="alinea">c) a criação ou extinção dos tribunais inferiores;</p>

	<p class="alinea">d) a alteração da organização e da divisão judiciárias;</p>

	<p>III - aos Tribunais de Justiça julgar os juízes estaduais e do Distrito Federal e Territórios, bem como os membros do Ministério Público, nos crimes comuns e de responsabilidade, ressalvada a competência da Justiça Eleitoral.</p>

	<p><span class="artigo">Art. 97.</span> Somente pelo voto da maioria absoluta de seus membros ou dos membros do respectivo órgão especial poderão os tribunais declarar a inconstitucionalidade de lei ou ato normativo do Poder Público.</p>

	<p><span class="artigo">Art. 98.</span> A União, no Distrito Federal e nos Territórios, e os Estados criarão:</p>

	<p>I - juizados especiais, providos por juízes togados, ou togados e leigos, competentes para a conciliação, o julgamento e a execução de causas cíveis de menor complexidade e infrações penais de menor potencial ofensivo, mediante os procedimentos oral e sumaríssimo, permitidos, nas hipóteses previstas em lei, a transação e o julgamento de recursos por turmas de juízes de primeiro grau;</p>

	<p>II - justiça de paz, remunerada, composta de cidadãos eleitos pelo voto direto, universal e secreto, com mandato de quatro anos e competência para, na forma da lei, celebrar casamentos, verificar, de ofício ou em face de impugnação apresentada, o processo de habilitação e exercer atribuições conciliatórias, sem caráter jurisdicional, além de outras previstas na legislação.</p>

	<p><span class="paragrafo">§ 1º.</span> Lei federal disporá sobre a criação de juizados especiais no âmbito da Justiça Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Renumerado pela Emenda Constitucional nº 45, de 2004)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3392&amp;processo=3392">(Vide ADIN 3392)</a></p>

	<p><span class="paragrafo">§ 2º.</span> As custas e emolumentos serão destinados exclusivamente ao custeio dos serviços afetos às atividades específicas da Justiça. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 99.</span> Ao Poder Judiciário é assegurada autonomia administrativa e financeira.</p>

	<p><span class="paragrafo">§ 1º.</span> Os tribunais elaborarão suas propostas orçamentárias dentro dos limites estipulados conjuntamente com os demais Poderes na lei de diretrizes orçamentárias.</p>

	<p><span class="paragrafo">§ 2º.</span> O encaminhamento da proposta, ouvidos os outros tribunais interessados, compete:</p>

	<p>I - no âmbito da União, aos Presidentes do Supremo Tribunal Federal e dos Tribunais Superiores, com a aprovação dos respectivos tribunais;</p>

	<p>II - no âmbito dos Estados e no do Distrito Federal e Territórios, aos Presidentes dos Tribunais de Justiça, com a aprovação dos respectivos tribunais.</p>

	<p><span class="paragrafo">§ 3º.</span> Se os órgãos referidos no <span class="paragrafo">§ 2º.</span> não encaminharem as respectivas propostas orçamentárias dentro do prazo estabelecido na lei de diretrizes orçamentárias, o Poder Executivo considerará, para fins de consolidação da proposta orçamentária anual, os valores aprovados na lei orçamentária vigente, ajustados de acordo com os limites estipulados na forma do <span class="paragrafo">§ 1º.</span> deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Se as propostas orçamentárias de que trata este artigo forem encaminhadas em desacordo com os limites estipulados na forma do § 1º, o Poder Executivo procederá aos ajustes necessários para fins de consolidação da proposta orçamentária anual. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Durante a execução orçamentária do exercício, não poderá haver a realização de despesas ou a assunção de obrigações que extrapolem os limites estabelecidos na lei de diretrizes orçamentárias, exceto se previamente autorizadas, mediante a abertura de créditos suplementares ou especiais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 100.</span> Os pagamentos devidos pelas Fazendas Públicas Federal, Estaduais, Distrital e Municipais, em virtude de sentença judiciária, far-se-ão exclusivamente na ordem cronológica de apresentação dos precatórios e à conta dos créditos respectivos, proibida a designação de casos ou de pessoas nas dotações orçamentárias e nos créditos adicionais abertos para este fim. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Redação dada pela Emenda Constitucional nº 62, de 2009).</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art4">(Vide Emenda Constitucional nº 62, de 2009)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADIN&amp;s1=4425&amp;processo=4425">(Vide ADI 4425) </a></p>

	<p><span class="paragrafo">§ 1º.</span> Os débitos de natureza alimentícia compreendem aqueles decorrentes de salários, vencimentos, proventos, pensões e suas complementações, benefícios previdenciários e indenizações por morte ou por invalidez, fundadas em responsabilidade civil, em virtude de sentença judicial transitada em julgado, e serão pagos com preferência sobre todos os demais débitos, exceto sobre aqueles referidos no <span class="paragrafo">§ 2º.</span> deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Redação dada pela Emenda Constitucional nº 62, de 2009).</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os débitos de natureza alimentícia cujos titulares, originários ou por sucessão hereditária, tenham 60 (sessenta) anos de idade, ou sejam portadores de doença grave, ou pessoas com deficiência, assim definidos na forma da lei, serão pagos com preferência sobre todos os demais débitos, até o valor equivalente ao triplo fixado em lei para os fins do disposto no <span class="paragrafo">§ 3º.</span> deste artigo, admitido o fracionamento para essa finalidade, sendo que o restante será pago na ordem cronológica de apresentação do precatório. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Redação dada pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O disposto no caput deste artigo relativamente à expedição de precatórios não se aplica aos pagamentos de obrigações definidas em leis como de pequeno valor que as Fazendas referidas devam fazer em virtude de sentença judicial transitada em julgado. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Redação dada pela Emenda Constitucional nº 62, de 2009).</a></p>

	<p><span class="paragrafo">§ 4º.</span> Para os fins do disposto no § 3º, poderão ser fixados, por leis próprias, valores distintos às entidades de direito público, segundo as diferentes capacidades econômicas, sendo o mínimo igual ao valor do maior benefício do regime geral de previdência social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Redação dada pela Emenda Constitucional nº 62, de 2009).</a></p>

	<p><span class="paragrafo">§ 5º.</span> É obrigatória a inclusão no orçamento das entidades de direito público de verba necessária ao pagamento de seus débitos oriundos de sentenças transitadas em julgado constantes de precatórios judiciários apresentados até 2 de abril, fazendo-se o pagamento até o final do exercício seguinte, quando terão seus valores atualizados monetariamente. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art1">(Redação dada pela Emenda Constitucional nº 114, de 2021)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art8">(Vigência)</a></p>

	<p><span class="paragrafo">§ 6º.</span> As dotações orçamentárias e os créditos abertos serão consignados diretamente ao Poder Judiciário, cabendo ao Presidente do Tribunal que proferir a decisão exequenda determinar o pagamento integral e autorizar, a requerimento do credor e exclusivamente para os casos de preterimento de seu direito de precedência ou de não alocação orçamentária do valor necessário à satisfação do seu débito, o sequestro da quantia respectiva. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Redação dada pela Emenda Constitucional nº 62, de 2009).</a></p>

	<p><span class="paragrafo">§ 7º.</span> O Presidente do Tribunal competente que, por ato comissivo ou omissivo, retardar ou tentar frustrar a liquidação regular de precatórios incorrerá em crime de responsabilidade e responderá, também, perante o Conselho Nacional de Justiça. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Incluído pela Emenda Constitucional nº 62, de 2009).</a></p>

	<p><span class="paragrafo">§ 8º.</span> É vedada a expedição de precatórios complementares ou suplementares de valor pago, bem como o fracionamento, repartição ou quebra do valor da execução para fins de enquadramento de parcela do total ao que dispõe o <span class="paragrafo">§ 3º.</span> deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Incluído pela Emenda Constitucional nº 62, de 2009).</a></p>

	<p><span class="paragrafo">§ 9º.</span> Sem que haja interrupção no pagamento do precatório e mediante comunicação da Fazenda Pública ao Tribunal, o valor correspondente aos eventuais débitos inscritos em dívida ativa contra o credor do requisitório e seus substituídos deverá ser depositado à conta do juízo responsável pela ação de cobrança, que decidirá pelo seu destino definitivo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Redação dada pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>§ 10. Antes da expedição dos precatórios, o Tribunal solicitará à Fazenda Pública devedora, para resposta em até 30 (trinta) dias, sob pena de perda do direito de abatimento, informação sobre os débitos que preencham as condições estabelecidas no § 9º, para os fins nele previstos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Incluído pela Emenda Constitucional nº 62, de 2009).</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADIN&amp;s1=4425&amp;processo=4425">(Vide ADI 4425) </a></p>

	<p>§ 11. É facultada ao credor, conforme estabelecido em lei do ente federativo devedor, com auto aplicabilidade para a União, a oferta de créditos líquidos e certos que originalmente lhe são próprios ou adquiridos de terceiros reconhecidos pelo ente federativo ou por decisão judicial transitada em julgado para: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Redação dada pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>I - quitação de débitos parcelados ou débitos inscritos em dívida ativa do ente federativo devedor, inclusive em transação resolutiva de litígio, e, subsidiariamente, débitos com a administração autárquica e fundacional do mesmo ente; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>II - compra de imóveis públicos de propriedade do mesmo ente disponibilizados para venda; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>III - pagamento de outorga de delegações de serviços públicos e demais espécies de concessão negocial promovidas pelo mesmo ente; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>IV - aquisição, inclusive minoritária, de participação societária, disponibilizada para venda, do respectivo ente federativo; ou <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>V - compra de direitos, disponibilizados para cessão, do respectivo ente federativo, inclusive, no caso da União, da antecipação de valores a serem recebidos a título do excedente em óleo em contratos de partilha de petróleo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>§ 12. A partir da promulgação desta Emenda Constitucional, a atualização de valores de requisitórios, após sua expedição, até o efetivo pagamento, independentemente de sua natureza, será feita pelo índice oficial de remuneração básica da caderneta de poupança, e, para fins de compensação da mora, incidirão juros simples no mesmo percentual de juros incidentes sobre a caderneta de poupança, ficando excluída a incidência de juros compensatórios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Incluído pela Emenda Constitucional nº 62, de 2009).</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADIN&amp;s1=4425&amp;processo=4425">(Vide ADI 4425) </a></p>

	<p>§ 13. O credor poderá ceder, total ou parcialmente, seus créditos em precatórios a terceiros, independentemente da concordância do devedor, não se aplicando ao cessionário o disposto nos §<span class="paragrafo">§ 2º.</span> e 3º. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Incluído pela Emenda Constitucional nº 62, de 2009).</a></p>

	<p>§ 14. A cessão de precatórios, observado o disposto no <span class="paragrafo">§ 9º.</span> deste artigo, somente produzirá efeitos após comunicação, por meio de petição protocolizada, ao Tribunal de origem e ao ente federativo devedor. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Redação dada pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>§ 15. Sem prejuízo do disposto neste artigo, lei complementar a esta Constituição Federal poderá estabelecer regime especial para pagamento de crédito de precatórios de Estados, Distrito Federal e Municípios, dispondo sobre vinculações à receita corrente líquida e forma e prazo de liquidação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Incluído pela Emenda Constitucional nº 62, de 2009).</a></p>

	<p>§ 16. A seu critério exclusivo e na forma de lei, a União poderá assumir débitos, oriundos de precatórios, de Estados, Distrito Federal e Municípios, refinanciando-os diretamente. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art1">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 17. A União, os Estados, o Distrito Federal e os Municípios aferirão mensalmente, em base anual, o comprometimento de suas respectivas receitas correntes líquidas com o pagamento de precatórios e obrigações de pequeno valor. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>§ 18. Entende-se como receita corrente líquida, para os fins de que trata o § 17, o somatório das receitas tributárias, patrimoniais, industriais, agropecuárias, de contribuições e de serviços, de transferências correntes e outras receitas correntes, incluindo as oriundas do <span class="paragrafo">§ 1º.</span> do art. 20 da Constituição Federal, verificado no período compreendido pelo segundo mês imediatamente anterior ao de referência e os 11 (onze) meses precedentes, excluídas as duplicidades, e deduzidas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>I - na União, as parcelas entregues aos Estados, ao Distrito Federal e aos Municípios por determinação constitucional; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>II - nos Estados, as parcelas entregues aos Municípios por determinação constitucional; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>III - na União, nos Estados, no Distrito Federal e nos Municípios, a contribuição dos servidores para custeio de seu sistema de previdência e assistência social e as receitas provenientes da compensação financeira referida no <span class="paragrafo">§ 9º.</span> do art. 201 da Constituição Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>§ 19. Caso o montante total de débitos decorrentes de condenações judiciais em precatórios e obrigações de pequeno valor, em período de 12 (doze) meses, ultrapasse a média do comprometimento percentual da receita corrente líquida nos 5 (cinco) anos imediatamente anteriores, a parcela que exceder esse percentual poderá ser financiada, excetuada dos limites de endividamento de que tratam os incisos VI e VII do art. 52 da Constituição Federal e de quaisquer outros limites de endividamento previstos, não se aplicando a esse financiamento a vedação de vinculação de receita prevista no inciso IV do art. 167 da Constituição Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>§ 20. Caso haja precatório com valor superior a 15% (quinze por cento) do montante dos precatórios apresentados nos termos do <span class="paragrafo">§ 5º.</span> deste artigo, 15% (quinze por cento) do valor deste precatório serão pagos até o final do exercício seguinte e o restante em parcelas iguais nos cinco exercícios subsequentes, acrescidas de juros de mora e correção monetária, ou mediante acordos diretos, perante Juízos Auxiliares de Conciliação de Precatórios, com redução máxima de 40% (quarenta por cento) do valor do crédito atualizado, desde que em relação ao crédito não penda recurso ou defesa judicial e que sejam observados os requisitos definidos na regulamentação editada pelo ente federado. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>§ 21. Ficam a União e os demais entes federativos, nos montantes que lhes são próprios, desde que aceito por ambas as partes, autorizados a utilizar valores objeto de sentenças transitadas em julgado devidos a pessoa jurídica de direito público para amortizar dívidas, vencidas ou vincendas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>I - nos contratos de refinanciamento cujos créditos sejam detidos pelo ente federativo que figure como devedor na sentença de que trata o caput deste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>II - nos contratos em que houve prestação de garantia a outro ente federativo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>III - nos parcelamentos de tributos ou de contribuições sociais; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>IV - nas obrigações decorrentes do descumprimento de prestação de contas ou de desvio de recursos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>§ 22. A amortização de que trata o § 21 deste artigo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>I - nas obrigações vencidas, será imputada primeiramente às parcelas mais antigas; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>II - nas obrigações vincendas, reduzirá uniformemente o valor de cada parcela devida, mantida a duração original do respectivo contrato ou parcelamento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<h3>Seção II<br>
	Do Supremo Tribunal Federal</h3>

	<p><span class="artigo">Art. 101.</span> O Supremo Tribunal Federal compõe-se de onze Ministros, escolhidos dentre cidadãos com mais de trinta e cinco e menos de sessenta e cinco anos de idade, de notável saber jurídico e reputação ilibada.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Os Ministros do Supremo Tribunal Federal serão nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal.</p>

	<p><span class="artigo">Art. 102.</span> Compete ao Supremo Tribunal Federal, precipuamente, a guarda da Constituição, cabendo-lhe:</p>

	<p>I - processar e julgar, originariamente:</p>

	<p class="alinea">a) a ação direta de inconstitucionalidade de lei ou ato normativo federal ou estadual e a ação declaratória de constitucionalidade de lei ou ato normativo federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Redação dada pela Emenda Constitucional nº 3, de 19</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">93)</a></p>

	<p class="alinea">b) nas infrações penais comuns, o Presidente da República, o Vice-Presidente, os membros do Congresso Nacional, seus próprios Ministros e o Procurador-Geral da República;</p>

	<p class="alinea">c) nas infrações penais comuns e nos crimes de responsabilidade, os Ministros de Estado e os Comandantes da Marinha, do Exército e da Aeronáutica, ressalvado o disposto no art. 52, I, os membros dos Tribunais Superiores, os do Tribunal de Contas da União e os chefes de missão diplomática de caráter permanente; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc23.htm#art102ic">(Redação dada pela Emenda Constitucional nº 23, de 1999)</a></p>

	<p class="alinea">d) o habeas corpus, sendo paciente qualquer das pessoas referidas nas alíneas anteriores; o mandado de segurança e o habeas data contra atos do Presidente da República, das Mesas da Câmara dos Deputados e do Senado Federal, do Tribunal de Contas da União, do Procurador-Geral da República e do próprio Supremo Tribunal Federal;</p>

	<p class="alinea">e) o litígio entre Estado estrangeiro ou organismo internacional e a União, o Estado, o Distrito Federal ou o Território;</p>

	<p class="alinea">f) as causas e os conflitos entre a União e os Estados, a União e o Distrito Federal, ou entre uns e outros, inclusive as respectivas entidades da administração indireta;</p>

	<p class="alinea">g) a extradição solicitada por Estado estrangeiro;</p>

	<p class="alinea">h) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art9">(Revogado pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p class="alinea">i) o habeas corpus, quando o coator for Tribunal Superior ou quando o coator ou o paciente for autoridade ou funcionário cujos atos estejam sujeitos diretamente à jurisdição do Supremo Tribunal Federal, ou se trate de crime sujeito à mesma jurisdição em uma única instância; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc22.htm#art102ii">(Redação dada pela Emenda Constitucional nº 22, de 1999)</a></p>

	<p class="alinea">j) a revisão criminal e a ação rescisória de seus julgados;</p>

	<p class="alinea">l) a reclamação para a preservação de sua competência e garantia da autoridade de suas decisões;</p>

	<p class="alinea">m) a execução de sentença nas causas de sua competência originária, facultada a delegação de atribuições para a prática de atos processuais;</p>

	<p class="alinea">n) a ação em que todos os membros da magistratura sejam direta ou indiretamente interessados, e aquela em que mais da metade dos membros do tribunal de origem estejam impedidos ou sejam direta ou indiretamente interessados;</p>

	<p class="alinea" id="10i-o">o) os conflitos de competência entre o Superior Tribunal de Justiça e quaisquer tribunais, entre Tribunais Superiores, ou entre estes e qualquer outro tribunal;</p>

	<p class="alinea">p) o pedido de medida cautelar das ações diretas de inconstitucionalidade;</p>

	<p class="alinea">q) o mandado de injunção, quando a elaboração da norma regulamentadora for atribuição do Presidente da República, do Congresso Nacional, da Câmara dos Deputados, do Senado Federal, das Mesas de uma dessas Casas Legislativas, do Tribunal de Contas da União, de um dos Tribunais Superiores, ou do próprio Supremo Tribunal Federal;</p>

	<p class="alinea">r) as ações contra o Conselho Nacional de Justiça e contra o Conselho Nacional do Ministério Público; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluída pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II - julgar, em recurso ordinário:</p>

	<p class="alinea">a) o habeas corpus, o mandado de segurança, o habeas data e o mandado de injunção decididos em única instância pelos Tribunais Superiores, se denegatória a decisão;</p>

	<p class="alinea">b) o crime político;</p>

	<p>III - julgar, mediante recurso extraordinário, as causas decididas em única ou última instância, quando a decisão recorrida:</p>

	<p class="alinea">a) contrariar dispositivo desta Constituição;</p>

	<p class="alinea">b) declarar a inconstitucionalidade de tratado ou lei federal;</p>

	<p class="alinea">c) julgar válida lei ou ato de governo local contestado em face desta Constituição.</p>

	<p class="alinea">d) julgar válida lei local contestada em face de lei federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluída pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>§ 1.º. A arguição de descumprimento de preceito fundamental, decorrente desta Constituição, será apreciada pelo Supremo Tribunal Federal, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Transformado do parágrafo único em <span class="paragrafo">§ 1º.</span> pela Emenda Constitucional nº 3, de 17/03/93)</a></p>

	<p><span class="paragrafo">§ 2º.</span> As decisões definitivas de mérito, proferidas pelo Supremo Tribunal Federal, nas ações diretas de inconstitucionalidade e nas ações declaratórias de constitucionalidade produzirão eficácia contra todos e efeito vinculante, relativamente aos demais órgãos do Poder Judiciário e à administração pública direta e indireta, nas esferas federal, estadual e municipal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3392&amp;processo=3392">(Vide ADIN 3392)</a></p>

	<p><span class="paragrafo">§ 3º.</span> No recurso extraordinário o recorrente deverá demonstrar a repercussão geral das questões constitucionais discutidas no caso, nos termos da lei, a fim de que o Tribunal examine a admissão do recurso, somente podendo recusá-lo pela manifestação de dois terços de seus membros. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluída pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 103.</span> Podem propor a ação direta de inconstitucionalidade e a ação declaratória de constitucionalidade: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13105.htm#art950%C2%A72">(Vide Lei nº 13.105, de 2015) </a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13105.htm#art1045">(Vigência) </a></p>

	<p>I - o Presidente da República;</p>

	<p>II - a Mesa do Senado Federal;</p>

	<p>III - a Mesa da Câmara dos Deputados;</p>

	<p>IV a Mesa de Assembleia Legislativa ou da Câmara Legislativa do Distrito Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>V o Governador de Estado ou do Distrito Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>VI - o Procurador-Geral da República;</p>

	<p>VII - o Conselho Federal da Ordem dos Advogados do Brasil;</p>

	<p>VIII - partido político com representação no Congresso Nacional;</p>

	<p>IX - confederação sindical ou entidade de classe de âmbito nacional.</p>

	<p><span class="paragrafo">§ 1º.</span> O Procurador-Geral da República deverá ser previamente ouvido nas ações de inconstitucionalidade e em todos os processos de competência do Supremo Tribunal Federal.</p>

	<p><span class="paragrafo">§ 2º.</span> Declarada a inconstitucionalidade por omissão de medida para tornar efetiva norma constitucional, será dada ciência ao Poder competente para a adoção das providências necessárias e, em se tratando de órgão administrativo, para fazê-lo em trinta dias.</p>

	<p><span class="paragrafo">§ 3º.</span> Quando o Supremo Tribunal Federal apreciar a inconstitucionalidade, em tese, de norma legal ou ato normativo, citará, previamente, o Advogado-Geral da União, que defenderá o ato ou texto impugnado.</p>

	<p>§ 4.º. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art9">(Revogado pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo" id="103A">Art. 103-A.</span> O Supremo Tribunal Federal poderá, de ofício ou por provocação, mediante decisão de dois terços dos seus membros, após reiteradas decisões sobre matéria constitucional, aprovar súmula que, a partir de sua publicação na imprensa oficial, terá efeito vinculante em relação aos demais órgãos do Poder Judiciário e à administração pública direta e indireta, nas esferas federal, estadual e municipal, bem como proceder à sua revisão ou cancelamento, na forma estabelecida em lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2006/Lei/L11417.htm">(Vide Lei nº 11.417, de 2006). </a></p>

	<p><span class="paragrafo">§ 1º.</span> A súmula terá por objetivo a validade, a interpretação e a eficácia de normas determinadas, acerca das quais haja controvérsia atual entre órgãos judiciários ou entre esses e a administração pública que acarrete grave insegurança jurídica e relevante multiplicação de processos sobre questão idêntica. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Sem prejuízo do que vier a ser estabelecido em lei, a aprovação, revisão ou cancelamento de súmula poderá ser provocada por aqueles que podem propor a ação direta de inconstitucionalidade. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 3º.</span> do ato administrativo ou decisão judicial que contrariar a súmula aplicável ou que indevidamente a aplicar, caberá reclamação ao Supremo Tribunal Federal que, julgando-a procedente, anulará o ato administrativo ou cassará a decisão judicial reclamada, e determinará que outra seja proferida com ou sem a aplicação da súmula, conforme o caso. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo" id="103B">Art. 103-B.</span> O Conselho Nacional de Justiça compõe-se de 15 (quinze) membros com mandato de 2 (dois) anos, admitida 1 (uma) recondução, sendo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc61.htm#art1">(Redação dada pela Emenda Constitucional nº 61, de 2009)</a></p>

	<p>I - o Presidente do Supremo Tribunal Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc61.htm#art1">(Redação dada pela Emenda Constitucional nº 61, de 2009)</a></p>

	<p>II um Ministro do Superior Tribunal de Justiça, indicado pelo respectivo tribunal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>III um Ministro do Tribunal Superior do Trabalho, indicado pelo respectivo tribunal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>IV um desembargador de Tribunal de Justiça, indicado pelo Supremo Tribunal Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>V um juiz estadual, indicado pelo Supremo Tribunal Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>VI um juiz de Tribunal Regional Federal, indicado pelo Superior Tribunal de Justiça; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>VII um juiz federal, indicado pelo Superior Tribunal de Justiça; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>VIII um juiz de Tribunal Regional do Trabalho, indicado pelo Tribunal Superior do Trabalho; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>IX um juiz do trabalho, indicado pelo Tribunal Superior do Trabalho; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>X um membro do Ministério Público da União, indicado pelo Procurador-Geral da República; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>XI um membro do Ministério Público estadual, escolhido pelo Procurador-Geral da República dentre os nomes indicados pelo órgão competente de cada instituição estadual; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>XII dois advogados, indicados pelo Conselho Federal da Ordem dos Advogados do Brasil; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>XIII dois cidadãos, de notável saber jurídico e reputação ilibada, indicados um pela Câmara dos Deputados e outro pelo Senado Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O Conselho será presidido pelo Presidente do Supremo Tribunal Federal e, nas suas ausências e impedimentos, pelo Vice-Presidente do Supremo Tribunal Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc61.htm#art1">(Redação dada pela Emenda Constitucional nº 61, de 2009)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os demais membros do Conselho serão nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc61.htm#art1">(Redação dada pela Emenda Constitucional nº 61, de 2009)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Não efetuadas, no prazo legal, as indicações previstas neste artigo, caberá a escolha ao Supremo Tribunal Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Compete ao Conselho o controle da atuação administrativa e financeira do Poder Judiciário e do cumprimento dos deveres funcionais dos juízes, cabendo-lhe, além de outras atribuições que lhe forem conferidas pelo Estatuto da Magistratura: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>I - zelar pela autonomia do Poder Judiciário e pelo cumprimento do Estatuto da Magistratura, podendo expedir atos regulamentares, no âmbito de sua competência, ou recomendar providências; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II - zelar pela observância do art. 37 e apreciar, de ofício ou mediante provocação, a legalidade dos atos administrativos praticados por membros ou órgãos do Poder Judiciário, podendo desconstituí-los, revê-los ou fixar prazo para que se adotem as providências necessárias ao exato cumprimento da lei, sem prejuízo da competência do Tribunal de Contas da União; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>III - receber e conhecer das reclamações contra membros ou órgãos do Poder Judiciário, inclusive contra seus serviços auxiliares, serventias e órgãos prestadores de serviços notariais e de registro que atuem por delegação do poder público ou oficializados, sem prejuízo da competência disciplinar e correicional dos tribunais, podendo avocar processos disciplinares em curso, determinar a remoção ou a disponibilidade e aplicar outras sanções administrativas, assegurada ampla defesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>IV representar ao Ministério Público, no caso de crime contra a administração pública ou de abuso de autoridade; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>V rever, de ofício ou mediante provocação, os processos disciplinares de juízes e membros de tribunais julgados há menos de um ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>VI elaborar semestralmente relatório estatístico sobre processos e sentenças prolatadas, por unidade da Federação, nos diferentes órgãos do Poder Judiciário; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>VII elaborar relatório anual, propondo as providências que julgar necessárias, sobre a situação do Poder Judiciário no País e as atividades do Conselho, o qual deve integrar mensagem do Presidente do Supremo Tribunal Federal a ser remetida ao Congresso Nacional, por ocasião da abertura da sessão legislativa. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 5º.</span> O Ministro do Superior Tribunal de Justiça exercerá a função de Ministro-Corregedor e ficará excluído da distribuição de processos no Tribunal, competindo-lhe, além das atribuições que lhe forem conferidas pelo Estatuto da Magistratura, as seguintes: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>I receber as reclamações e denúncias, de qualquer interessado, relativas aos magistrados e aos serviços judiciários; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II exercer funções executivas do Conselho, de inspeção e de correição geral; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>III requisitar e designar magistrados, delegando-lhes atribuições, e requisitar servidores de juízos ou tribunais, inclusive nos Estados, Distrito Federal e Territórios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Junto ao Conselho oficiarão o Procurador-Geral da República e o Presidente do Conselho Federal da Ordem dos Advogados do Brasil. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 7º.</span> A União, inclusive no Distrito Federal e nos Territórios, criará ouvidorias de justiça, competentes para receber reclamações e denúncias de qualquer interessado contra membros ou órgãos do Poder Judiciário, ou contra seus serviços auxiliares, representando diretamente ao Conselho Nacional de Justiça. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<h3>Seção III<br>
	Do Superior Tribunal De Justiça</h3>

	<p><span class="artigo">Art. 104.</span> O Superior Tribunal de Justiça compõe-se de, no mínimo, trinta e três Ministros.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Os Ministros do Superior Tribunal de Justiça serão nomeados pelo Presidente da República, dentre brasileiros com mais de trinta e cinco e menos de setenta anos de idade, de notável saber jurídico e reputação ilibada, depois de aprovada a escolha pela maioria absoluta do Senado Federal, sendo:	(Redação dada pela Emenda Constitucional nº 122, de 2022)</p>

	<p>I - um terço dentre juízes dos Tribunais Regionais Federais e um terço dentre desembargadores dos Tribunais de Justiça, indicados em lista tríplice elaborada pelo próprio Tribunal;</p>

	<p>II - um terço, em partes iguais, dentre advogados e membros do Ministério Público Federal, Estadual, do Distrito Federal e Territórios, alternadamente, indicados na forma do art. 94.</p>

	<p><span class="artigo">Art. 105.</span> Compete ao Superior Tribunal de Justiça:</p>

	<p>I - processar e julgar, originariamente:</p>

	<p class="alinea">a) nos crimes comuns, os Governadores dos Estados e do Distrito Federal, e, nestes e nos de responsabilidade, os desembargadores dos Tribunais de Justiça dos Estados e do Distrito Federal, os membros dos Tribunais de Contas dos Estados e do Distrito Federal, os dos Tribunais Regionais Federais, dos Tribunais Regionais Eleitorais e do Trabalho, os membros dos Conselhos ou Tribunais de Contas dos Municípios e os do Ministério Público da União que oficiem perante tribunais;</p>

	<p class="alinea">b) os mandados de segurança e os habeas data contra ato de Ministro de Estado, dos Comandantes da Marinha, do Exército e da Aeronáutica ou do próprio Tribunal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc23.htm#art105ib">(Redação dada pela Emenda Constitucional nº 23, de 1999)</a></p>

	<p class="alinea">c) os habeas corpus, quando o coator ou paciente for qualquer das pessoas mencionadas na alínea "a", ou quando o coator for tribunal sujeito à sua jurisdição, Ministro de Estado ou Comandante da Marinha, do Exército ou da Aeronáutica, ressalvada a competência da Justiça Eleitoral; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc23.htm#art105ib">(Redação dada pela Emenda Constitucional nº 23, de 1999)</a></p>

	<p class="alinea">d) os conflitos de competência entre quaisquer tribunais, ressalvado o disposto no art. 102, I, "o", bem como entre tribunal e juízes a ele não vinculados e entre juízes vinculados a tribunais diversos;</p>

	<p class="alinea">e) as revisões criminais e as ações rescisórias de seus julgados;</p>

	<p class="alinea">f) a reclamação para a preservação de sua competência e garantia da autoridade de suas decisões;</p>

	<p class="alinea">g) os conflitos de atribuições entre autoridades administrativas e judiciárias da União, ou entre autoridades judiciárias de um Estado e administrativas de outro ou do Distrito Federal, ou entre as deste e da União;</p>

	<p class="alinea">h) o mandado de injunção, quando a elaboração da norma regulamentadora for atribuição de órgão, entidade ou autoridade federal, da administração direta ou indireta, excetuados os casos de competência do Supremo Tribunal Federal e dos órgãos da Justiça Militar, da Justiça Eleitoral, da Justiça do Trabalho e da Justiça Federal;</p>

	<p class="alinea">i) a homologação de sentenças estrangeiras e a concessão de exequatur às cartas rogatórias; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluída pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II - julgar, em recurso ordinário:</p>

	<p class="alinea">a) os habeas corpus decididos em única ou última instância pelos Tribunais Regionais Federais ou pelos tribunais dos Estados, do Distrito Federal e Territórios, quando a decisão for denegatória;</p>

	<p class="alinea">b) os mandados de segurança decididos em única instância pelos Tribunais Regionais Federais ou pelos tribunais dos Estados, do Distrito Federal e Territórios, quando denegatória a decisão;</p>

	<p class="alinea">c) as causas em que forem partes Estado estrangeiro ou organismo internacional, de um lado, e, do outro, Município ou pessoa residente ou domiciliada no País;</p>

	<p>III - julgar, em recurso especial, as causas decididas, em única ou última instância, pelos Tribunais Regionais Federais ou pelos tribunais dos Estados, do Distrito Federal e Territórios, quando a decisão recorrida:</p>

	<p class="alinea">a) contrariar tratado ou lei federal, ou negar-lhes vigência;</p>

	<p class="alinea">b) julgar válido ato de governo local contestado em face de lei federal;</p>

	<p class="alinea">c) der a lei federal interpretação divergente da que lhe haja atribuído outro tribunal.</p>

	<ul class="dica">
		<li>STJ, Súmula 7: <em>A pretensão de simples reexame de prova não enseja Recurso Especial.</em></li>
		<li>STJ, Súmula 203: <em>Não cabe recurso especial contra decisão proferida por órgão de segundo grau dos Juizados Especiais.</em></li>
		<li>STJ, Súmula 518: <em>Para fins do art. 105, III, a, da Constituição Federal, não é cabível recurso especial fundado em alegada violação de enunciado de súmula.</em></li>
	</ul>

	<p><span class="paragrafo">§1º.</span> Funcionarão junto ao Superior Tribunal de Justiça:  (Parágrafo renumerado pela Emenda Constitucional nº 125, de 2022)</p>

	<p>I - a Escola Nacional de Formação e Aperfeiçoamento de Magistrados, cabendo-lhe, dentre outras funções, regulamentar os cursos oficiais para o ingresso e promoção na carreira;</p>

	<p>II - o Conselho da Justiça Federal, cabendo-lhe exercer, na forma da lei, a supervisão administrativa e orçamentária da Justiça Federal de primeiro e segundo graus, como órgão central do sistema e com poderes correicionais, cujas decisões terão caráter vinculante.</p>

	<p><span class="paragrafo">§ 2º.</span> No recurso especial, o recorrente deve demonstrar a relevância das questões de direito federal infraconstitucional discutidas no caso, nos termos da lei, a fim de que a admissão do recurso seja examinada pelo Tribunal, o qual somente pode dele não conhecer com base nesse motivo pela manifestação de 2/3 (dois terços) dos membros do órgão competente para o julgamento. (Incluído pela Emenda Constitucional nº 125, de 2022)</p>

	<p><span class="paragrafo">§ 3º.</span> Haverá a relevância de que trata o § 2º deste artigo nos seguintes casos: (Incluído pela Emenda Constitucional nº 125, de 2022)</p>

	<p>I - ações penais;</p>

	<p>II - ações de improbidade administrativa;</p>

	<p>III - ações cujo valor da causa ultrapasse 500 (quinhentos) salários mínimos;</p>

	<p>IV - ações que possam gerar inelegibilidade;

	</p><p>V - hipóteses em que o acórdão recorrido contrariar jurisprudência dominante o Superior Tribunal de Justiça;</p>

	<p>VI - outras hipóteses previstas em lei.

	</p><h3>Seção IV<br>
	Dos Tribunais Regionais Federais e dos Juízes Federais</h3>

	<p><span class="artigo">Art. 106.</span> São órgãos da Justiça Federal:</p>

	<p>I - os Tribunais Regionais Federais;</p>

	<p>II - os Juízes Federais.</p>

	<p><span class="artigo">Art. 107.</span> Os Tribunais Regionais Federais compõem-se de, no mínimo, sete juízes, recrutados, quando possível, na respectiva região e nomeados pelo Presidente da República dentre brasileiros com mais de trinta e menos de setenta anos de idade, sendo: (Redação dada pela Emenda Constitucional nº 122, de 2022)</p>

	<p>I - um quinto dentre advogados com mais de dez anos de efetiva atividade profissional e membros do Ministério Público Federal com mais de dez anos de carreira;</p>

	<p>II - os demais, mediante promoção de juízes federais com mais de cinco anos de exercício, por antiguidade e merecimento, alternadamente.</p>

	<p><span class="paragrafo">§ 1º.</span> A lei disciplinará a remoção ou a permuta de juízes dos Tribunais Regionais Federais e determinará sua jurisdição e sede. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Renumerado do parágrafo único, pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os Tribunais Regionais Federais instalarão a justiça itinerante, com a realização de audiências e demais funções da atividade jurisdicional, nos limites territoriais da respectiva jurisdição, servindo-se de equipamentos públicos e comunitários. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Os Tribunais Regionais Federais poderão funcionar descentralizadamente, constituindo Câmaras regionais, a fim de assegurar o pleno acesso do jurisdicionado à justiça em todas as fases do processo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3392&amp;processo=3392">)</a></p>

	<p><span class="artigo">Art. 108.</span> Compete aos Tribunais Regionais Federais:</p>

	<p>I - processar e julgar, originariamente:</p>

	<p class="alinea">a) os juízes federais da área de sua jurisdição, incluídos os da Justiça Militar e da Justiça do Trabalho, nos crimes comuns e de responsabilidade, e os membros do Ministério Público da União, ressalvada a competência da Justiça Eleitoral;</p>

	<p class="alinea">b) as revisões criminais e as ações rescisórias de julgados seus ou dos juízes federais da região;</p>

	<p class="alinea">c) os mandados de segurança e os habeas data contra ato do próprio Tribunal ou de juiz federal;</p>

	<p class="alinea">d) os habeas corpus, quando a autoridade coatora for juiz federal;</p>

	<p class="alinea">e) os conflitos de competência entre juízes federais vinculados ao Tribunal;</p>

	<p>II - julgar, em grau de recurso, as causas decididas pelos juízes federais e pelos juízes estaduais no exercício da competência federal da área de sua jurisdição.</p>

	<p><span class="artigo">Art. 109.</span> Aos juízes federais compete processar e julgar:</p>

	<p>I - as causas em que a União, entidade autárquica ou empresa pública federal forem interessadas na condição de autoras, rés, assistentes ou oponentes, exceto as de falência, as de acidentes de trabalho e as sujeitas à Justiça Eleitoral e à Justiça do Trabalho;</p>

	<p>II - as causas entre Estado estrangeiro ou organismo internacional e Município ou pessoa domiciliada ou residente no País;</p>

	<p>III - as causas fundadas em tratado ou contrato da União com Estado estrangeiro ou organismo internacional;</p>

	<p>IV - os crimes políticos e as infrações penais praticadas em detrimento de bens, serviços ou interesse da União ou de suas entidades autárquicas ou empresas públicas, excluídas as contravenções e ressalvada a competência da Justiça Militar e da Justiça Eleitoral;</p>

	<p>V - os crimes previstos em tratado ou convenção internacional, quando, iniciada a execução no País, o resultado tenha ou devesse ter ocorrido no estrangeiro, ou reciprocamente;</p>

	<p>V-A as causas relativas a direitos humanos a que se refere o <span class="paragrafo">§ 5º.</span> deste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>VI - os crimes contra a organização do trabalho e, nos casos determinados por lei, contra o sistema financeiro e a ordem econômico-financeira;</p>

	<p>VII - os habeas corpus, em matéria criminal de sua competência ou quando o constrangimento provier de autoridade cujos atos não estejam diretamente sujeitos a outra jurisdição;</p>

	<p>VIII - os mandados de segurança e os habeas data contra ato de autoridade federal, excetuados os casos de competência dos tribunais federais;</p>

	<p>IX - os crimes cometidos a bordo de navios ou aeronaves, ressalvada a competência da Justiça Militar;</p>

	<p>X - os crimes de ingresso ou permanência irregular de estrangeiro, a execução de carta rogatória, após o "exequatur", e de sentença estrangeira, após a homologação, as causas referentes à nacionalidade, inclusive a respectiva opção, e à naturalização;</p>

	<p>XI - a disputa sobre direitos indígenas.</p>

	<p><span class="paragrafo">§ 1º.</span> As causas em que a União for autora serão aforadas na seção judiciária onde tiver domicílio a outra parte.</p>

	<p><span class="paragrafo">§ 2º.</span> As causas intentadas contra a União poderão ser aforadas na seção judiciária em que for domiciliado o autor, naquela onde houver ocorrido o ato ou fato que deu origem à demanda ou onde esteja situada a coisa, ou, ainda, no Distrito Federal.</p>

	<p><span class="paragrafo">§ 3º.</span> Lei poderá autorizar que as causas de competência da Justiça Federal em que forem parte instituição de previdência social e segurado possam ser processadas e julgadas na justiça estadual quando a comarca do domicílio do segurado não for sede de vara federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Na hipótese do parágrafo anterior, o recurso cabível será sempre para o Tribunal Regional Federal na área de jurisdição do juiz de primeiro grau.</p>

	<p><span class="paragrafo">§ 5º.</span> Nas hipóteses de grave violação de direitos humanos, o Procurador-Geral da República, com a finalidade de assegurar o cumprimento de obrigações decorrentes de tratados internacionais de direitos humanos dos quais o Brasil seja parte, poderá suscitar, perante o Superior Tribunal de Justiça, em qualquer fase do inquérito ou processo, incidente de deslocamento de competência para a Justiça Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art109">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 110.</span> Cada Estado, bem como o Distrito Federal, constituirá uma seção judiciária que terá por sede a respectiva Capital, e varas localizadas segundo o estabelecido em lei.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Nos Territórios Federais, a jurisdição e as atribuições cometidas aos juízes federais caberão aos juízes da justiça local, na forma da lei.</p>

	<h3>Seção V<br>
	Do Tribunal Superior do Trabalho, dos Tribunais Regionais do Trabalho e dos Juízes do Trabalho</h3>

	<p><span class="artigo">Art. 111.</span> São órgãos da Justiça do Trabalho:</p>

	<p>I - o Tribunal Superior do Trabalho;</p>

	<p>II - os Tribunais Regionais do Trabalho;</p>

	<p>III - Juízes do Trabalho. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc24.htm#art1">(Redação dada pela Emenda Constitucional nº 24, de 1999)</a></p>

	<p>§§ 1º a 3º <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art9">Revogados pela Emenda Constitucional nº 45, de 2004</a></p>

	<p><span class="artigo" id="111A">Art. 111-A.</span> O Tribunal Superior do Trabalho compõe-se de vinte e sete Ministros, escolhidos dentre brasileiros com mais de trinta e cinco e menos de setenta anos de idade, de notável saber jurídico e reputação ilibada, nomeados pelo Presidente da República após aprovação pela maioria absoluta do Senado Federal, sendo: (Redação dada pela Emenda Constitucional nº 122, de 2022)</p>

	<p>I um quinto dentre advogados com mais de dez anos de efetiva atividade profissional e membros do Ministério Público do Trabalho com mais de dez anos de efetivo exercício, observado o disposto no art. 94; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II os demais dentre juízes dos Tribunais Regionais do Trabalho, oriundos da magistratura da carreira, indicados pelo próprio Tribunal Superior. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 1º.</span> A lei disporá sobre a competência do Tribunal Superior do Trabalho. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Funcionarão junto ao Tribunal Superior do Trabalho: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>I a Escola Nacional de Formação e Aperfeiçoamento de Magistrados do Trabalho, cabendo-lhe, dentre outras funções, regulamentar os cursos oficiais para o ingresso e promoção na carreira; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II o Conselho Superior da Justiça do Trabalho, cabendo-lhe exercer, na forma da lei, a supervisão administrativa, orçamentária, financeira e patrimonial da Justiça do Trabalho de primeiro e segundo graus, como órgão central do sistema, cujas decisões terão efeito vinculante. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Compete ao Tribunal Superior do Trabalho processar e julgar, originariamente, a reclamação para a preservação de sua competência e garantia da autoridade de suas decisões. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc92.htm#art1">(Incluído pela Emenda Constitucional nº 92, de 2016)</a></p>

	<p><span class="artigo">Art. 112.</span> A lei criará varas da Justiça do Trabalho, podendo, nas comarcas não abrangidas por sua jurisdição, atribuí-la aos juízes de direito, com recurso para o respectivo Tribunal Regional do T Trabalho. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 113.</span> A lei disporá sobre a constituição, investidura, jurisdição, competência, garantias e condições de exercício dos órgãos da Justiça do Trabalho. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc24.htm#art1">(Redação dada pela Emenda Constitucional nº 24, de 1999)</a></p>

	<p><span class="artigo">Art. 114.</span> Compete à Justiça do Trabalho processar e julgar:</p>

	<ul class="dica">
		<li><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">Redação dada pela Emenda Constitucional nº 45, de 2004</a></li>
		<li><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3392&amp;processo=3392">Vide ADIN nº 3392</a></li>
		<li><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3432&amp;processo=3432">Vide ADIN nº 3432
	</a></li></ul><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3432&amp;processo=3432">

	<p>I - as ações oriundas da relação de trabalho, abrangidos os entes de direito público externo e da administração pública direta e indireta da União, dos Estados, do Distrito Federal e dos Municípios;</p>

	<p>II - as ações que envolvam exercício do direito de greve;</p>

	<p>III - as ações sobre representação sindical, entre sindicatos, entre sindicatos e trabalhadores, e entre sindicatos e empregadores;</p>

	<p>IV - os mandados de segurança, habeas corpus e habeas data, quando o ato questionado envolver matéria sujeita à sua jurisdição;</p>

	</a><p><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADI&amp;documento=&amp;s1=3432&amp;processo=3432">V - os conflitos de competência entre órgãos com jurisdição trabalhista, ressalvado o disposto no </a><a href="#10i-o">art. 102, I, o</a>;</p>

	<p>VI - as ações de indenização por dano moral ou patrimonial, decorrentes da relação de trabalho;</p>

	<p>VII - as ações relativas às penalidades administrativas impostas aos empregadores pelos órgãos de fiscalização das relações de trabalho;</p>

	<p>VIII - a execução, de ofício, das contribuições sociais previstas no <a href="#195">art. 195, I, a, e II</a>, e seus acréscimos legais, decorrentes das sentenças que proferir;</p>

	<p>IX - outras controvérsias decorrentes da relação de trabalho, na forma da lei.</p>

	<p><span class="paragrafo">§ 1º.</span> Frustrada a negociação coletiva, as partes poderão eleger árbitros.</p>

	<p><span class="paragrafo">§ 2º.</span> Recusando-se qualquer das partes à negociação coletiva ou à arbitragem, é facultado às mesmas, de comum acordo, ajuizar dissídio coletivo de natureza econômica, podendo a Justiça do Trabalho decidir o conflito, respeitadas as disposições mínimas legais de proteção ao trabalho, bem como as convencionadas anteriormente.</p>

	<p><span class="paragrafo">§ 3º.</span> Em caso de greve em atividade essencial, com possibilidade de lesão do interesse público, o Ministério Público do Trabalho poderá ajuizar dissídio coletivo, competindo à Justiça do Trabalho decidir o conflito.</p>

	<p><span class="artigo">Art. 115.</span> Os Tribunais Regionais do Trabalho compõem-se de, no mínimo, sete juízes, recrutados, quando possível, na respectiva região e nomeados pelo Presidente da República dentre brasileiros com mais de trinta e menos de setenta anos de idade, sendo: (Redação dada pela Emenda Constitucional nº 122, de 2022)</p>

	<p>I um quinto dentre advogados com mais de dez anos de efetiva atividade profissional e membros do Ministério Público do Trabalho com mais de dez anos de efetivo exercício, observado o disposto no art. 94; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II os demais, mediante promoção de juízes do trabalho por antiguidade e merecimento, alternadamente. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os Tribunais Regionais do Trabalho instalarão a justiça itinerante, com a realização de audiências e demais funções de atividade jurisdicional, nos limites territoriais da respectiva jurisdição, servindo-se de equipamentos públicos e comunitários. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os Tribunais Regionais do Trabalho poderão funcionar descentralizadamente, constituindo Câmaras regionais, a fim de assegurar o pleno acesso do jurisdicionado à justiça em todas as fases do processo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 116.</span> Nas Varas do Trabalho, a jurisdição será exercida por um juiz singular. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc24.htm#art116">(Redação dada pela Emenda Constitucional nº 24, de 1999)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc24.htm#art1">(Revogado pela Emenda Constitucional nº 24, de 1999)</a></p>

	<p><span class="artigo">Art. 117.</span> e <span class="paragrafo">Parágrafo único.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc24.htm#art4">(Revogados pela Emenda Constitucional nº 24, de 1999)</a></p>

	<h3>Seção VI<br>
	Dos Tribunais e Juízes Eleitorais</h3>

	<p><span class="artigo">Art. 118.</span> São órgãos da Justiça Eleitoral:</p>

	<p>I - o Tribunal Superior Eleitoral;</p>

	<p>II - os Tribunais Regionais Eleitorais;</p>

	<p>III - os Juízes Eleitorais;</p>

	<p>IV - as Juntas Eleitorais.</p>

	<p><span class="artigo">Art. 119.</span> O Tribunal Superior Eleitoral compor-se-á, no mínimo, de sete membros, escolhidos:</p>

	<p>I - mediante eleição, pelo voto secreto:</p>

	<p class="alinea">a) três juízes dentre os Ministros do Supremo Tribunal Federal;</p>

	<p class="alinea">b) dois juízes dentre os Ministros do Superior Tribunal de Justiça;</p>

	<p>II - por nomeação do Presidente da República, dois juízes dentre seis advogados de notável saber jurídico e idoneidade moral, indicados pelo Supremo Tribunal Federal.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O Tribunal Superior Eleitoral elegerá seu Presidente e o Vice-Presidente dentre os Ministros do Supremo Tribunal Federal, e o Corregedor Eleitoral dentre os Ministros do Superior Tribunal de Justiça.</p>

	<p><span class="artigo">Art. 120.</span> Haverá um Tribunal Regional Eleitoral na Capital de cada Estado e no Distrito Federal.</p>

	<p><span class="paragrafo">§ 1º.</span> - Os Tribunais Regionais Eleitorais compor-se-ão:</p>

	<p>I - mediante eleição, pelo voto secreto:</p>

	<p class="alinea">a) de dois juízes dentre os desembargadores do Tribunal de Justiça;</p>

	<p class="alinea">b) de dois juízes, dentre juízes de direito, escolhidos pelo Tribunal de Justiça;</p>

	<p>II - de um juiz do Tribunal Regional Federal com sede na Capital do Estado ou no Distrito Federal, ou, não havendo, de juiz federal, escolhido, em qualquer caso, pelo Tribunal Regional Federal respectivo;</p>

	<p>III - por nomeação, pelo Presidente da República, de dois juízes dentre seis advogados de notável saber jurídico e idoneidade moral, indicados pelo Tribunal de Justiça.</p>

	<p><span class="paragrafo">§ 2º.</span> - O Tribunal Regional Eleitoral elegerá seu Presidente e o Vice-Presidente- dentre os desembargadores.</p>

	<p><span class="artigo">Art. 121.</span> Lei complementar disporá sobre a organização e competência dos tribunais, dos juízes de direito e das juntas eleitorais.</p>

	<p><span class="paragrafo">§ 1º.</span> Os membros dos tribunais, os juízes de direito e os integrantes das juntas eleitorais, no exercício de suas funções, e no que lhes for aplicável, gozarão de plenas garantias e serão inamovíveis.</p>

	<p><span class="paragrafo">§ 2º.</span> Os juízes dos tribunais eleitorais, salvo motivo justificado, servirão por dois anos, no mínimo, e nunca por mais de dois biênios consecutivos, sendo os substitutos escolhidos na mesma ocasião e pelo mesmo processo, em número igual para cada categoria.</p>

	<p><span class="paragrafo">§ 3º.</span> São irrecorríveis as decisões do Tribunal Superior Eleitoral, salvo as que contrariarem esta Constituição e as denegatórias de habeas corpus ou mandado de segurança.</p>

	<p><span class="paragrafo">§ 4º.</span> das decisões dos Tribunais Regionais Eleitorais somente caberá recurso quando:</p>

	<p>I - forem proferidas contra disposição expressa desta Constituição ou de lei;</p>

	<p>II - ocorrer divergência na interpretação de lei entre dois ou mais tribunais eleitorais;</p>

	<p>III - versarem sobre inelegibilidade ou expedição de diplomas nas eleições federais ou estaduais;</p>

	<p>IV - anularem diplomas ou decretarem a perda de mandatos eletivos federais ou estaduais;</p>

	<p>V - denegarem habeas corpus, mandado de segurança, habeas data ou mandado de injunção.</p>

	<h3>Seção VII<br>
	Dos Tribunais e Juízes Militares</h3>

	<p><span class="artigo">Art. 122.</span> São órgãos da Justiça Militar:</p>

	<p>I - o Superior Tribunal Militar;</p>

	<p>II - os Tribunais e Juízes Militares instituídos por lei.</p>

	<p><span class="artigo">Art. 123.</span> O Superior Tribunal Militar compor-se-á de quinze Ministros vitalícios, nomeados pelo Presidente da República, depois de aprovada a indicação pelo Senado Federal, sendo três dentre oficiais-generais da Marinha, quatro dentre oficiais-generais do Exército, três dentre oficiais-generais da Aeronáutica, todos da ativa e do posto mais elevado da carreira, e cinco dentre civis.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Os Ministros civis serão escolhidos pelo Presidente da República dentre brasileiros com mais de trinta e cinco e menos de setenta anos de idade, sendo: (Redação dada pela Emenda Constitucional nº 122, de 2022)</p>

	<p>I - três dentre advogados de notório saber jurídico e conduta ilibada, com mais de dez anos de efetiva atividade profissional;</p>

	<p>II - dois, por escolha paritária, dentre juízes auditores e membros do Ministério Público da Justiça Militar.</p>

	<p><span class="artigo">Art. 124.</span> à Justiça Militar compete processar e julgar os crimes militares definidos em lei.</p>

	<p><span class="paragrafo">Parágrafo único.</span> A lei disporá sobre a organização, o funcionamento e a competência da Justiça Militar.</p>

	<h3>Seção VIII<br>
	Dos Tribunais e Juízes dos Estados</h3>

	<p><span class="artigo">Art. 125.</span> Os Estados organizarão sua Justiça, observados os princípios estabelecidos nesta Constituição.</p>

	<p><span class="paragrafo">§ 1º.</span> A competência dos tribunais será definida na Constituição do Estado, sendo a lei de organização judiciária de iniciativa do Tribunal de Justiça.</p>

	<p><span class="paragrafo">§ 2º.</span> Cabe aos Estados a instituição de representação de inconstitucionalidade de leis ou atos normativos estaduais ou municipais em face da Constituição Estadual, vedada a atribuição da legitimação para agir a um único órgão.</p>

	<p><span class="paragrafo">§ 3º.</span> A lei estadual poderá criar, mediante proposta do Tribunal de Justiça, a Justiça Militar estadual, constituída, em primeiro grau, pelos juízes de direito e pelos Conselhos de Justiça e, em segundo grau, pelo próprio Tribunal de Justiça, ou por Tribunal de Justiça Militar nos Estados em que o efetivo militar seja superior a vinte mil integrantes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Compete à Justiça Militar estadual processar e julgar os militares dos Estados, nos crimes militares definidos em lei e as ações judiciais contra atos disciplinares militares, ressalvada a competência do júri quando a vítima for civil, cabendo ao tribunal competente decidir sobre a perda do posto e da patente dos oficiais e da graduação das praças. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Compete aos juízes de direito do juízo militar processar e julgar, singularmente, os crimes militares cometidos contra civis e as ações judiciais contra atos disciplinares militares, cabendo ao Conselho de Justiça, sob a presidência de juiz de direito, processar e julgar os demais crimes militares. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 6º.</span> O Tribunal de Justiça poderá funcionar descentralizadamente, constituindo Câmaras regionais, a fim de assegurar o pleno acesso do jurisdicionado à justiça em todas as fases do processo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 7º.</span> O Tribunal de Justiça instalará a justiça itinerante, com a realização de audiências e demais funções da atividade jurisdicional, nos limites territoriais da respectiva jurisdição, servindo-se de equipamentos públicos e comunitários. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 126.</span> Para dirimir conflitos fundiários, o Tribunal de Justiça proporá a criação de varas especializadas, com competência exclusiva para questões agrárias. </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Sempre que necessário à eficiente prestação jurisdicional, o juiz far-se-á presente no local do litígio.</p>

	<h2 class="sum2">CAPÍTULO IV<br>
	Das Funções Essenciais À Justiça</h2>

	<p><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc80.htm#art1">(Redação dada pela Emenda Constitucional nº 80, de 2014)</a></p>

	<h3>Seção I<br>
	Do Ministério Público</h3>

	<p><span class="artigo">Art. 127.</span> O Ministério Público é instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe a defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis.</p>

	<p><span class="paragrafo">§ 1º.</span> São princípios institucionais do Ministério Público a unidade, a indivisibilidade e a independência funcional.</p>

	<p><span class="paragrafo">§ 2º.</span> Ao Ministério Público é assegurada autonomia funcional e administrativa, podendo, observado o disposto no art. 169, propor ao Poder Legislativo a criação e extinção de seus cargos e serviços auxiliares, provendo-os por concurso público de provas ou de provas e títulos, a política remuneratória e os planos de carreira; a lei disporá sobre sua organização e funcionamento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art14">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O Ministério Público elaborará sua proposta orçamentária dentro dos limites estabelecidos na lei de diretrizes orçamentárias.</p>

	<p><span class="paragrafo">§ 4º.</span> Se o Ministério Público não encaminhar a respectiva proposta orçamentária dentro do prazo estabelecido na lei de diretrizes orçamentárias, o Poder Executivo considerará, para fins de consolidação da proposta orçamentária anual, os valores aprovados na lei orçamentária vigente, ajustados de acordo com os limites estipulados na forma do <span class="paragrafo">§ 3º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Se a proposta orçamentária de que trata este artigo for encaminhada em desacordo com os limites estipulados na forma do § 3º, o Poder Executivo procederá aos ajustes necessários para fins de consolidação da proposta orçamentária anual. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Durante a execução orçamentária do exercício, não poderá haver a realização de despesas ou a assunção de obrigações que extrapolem os limites estabelecidos na lei de diretrizes orçamentárias, exceto se previamente autorizadas, mediante a abertura de créditos suplementares ou especiais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 128.</span> O Ministério Público abrange:</p>

	<p>I - o Ministério Público da União, que compreende:</p>

	<p class="alinea">a) o Ministério Público Federal;</p>

	<p class="alinea">b) o Ministério Público do Trabalho;</p>

	<p class="alinea">c) o Ministério Público Militar;</p>

	<p class="alinea">d) o Ministério Público do Distrito Federal e Territórios;</p>

	<p>II - os Ministérios Públicos dos Estados.</p>

	<p><span class="paragrafo">§ 1º.</span> O Ministério Público da União tem por chefe o Procurador-Geral da República, nomeado pelo Presidente da República dentre integrantes da carreira, maiores de trinta e cinco anos, após a aprovação de seu nome pela maioria absoluta dos membros do Senado Federal, para mandato de dois anos, permitida a recondução.</p>

	<p><span class="paragrafo">§ 2º.</span> A destituição do Procurador-Geral da República, por iniciativa do Presidente da República, deverá ser precedida de autorização da maioria absoluta do Senado Federal.</p>

	<p><span class="paragrafo">§ 3º.</span> Os Ministérios Públicos dos Estados e o do Distrito Federal e Territórios formarão lista tríplice dentre integrantes da carreira, na forma da lei respectiva, para escolha de seu Procurador-Geral, que será nomeado pelo Chefe do Poder Executivo, para mandato de dois anos, permitida uma recondução.</p>

	<p><span class="paragrafo">§ 4º.</span> Os Procuradores-Gerais nos Estados e no Distrito Federal e Territórios poderão ser destituídos por deliberação da maioria absoluta do Poder Legislativo, na forma da lei complementar respectiva.</p>

	<p><span class="paragrafo">§ 5º.</span> Leis complementares da União e dos Estados, cuja iniciativa é facultada aos respectivos Procuradores-Gerais, estabelecerão a organização, as atribuições e o estatuto de cada Ministério Público, observadas, relativamente a seus membros:</p>

	<p>I - as seguintes garantias:</p>

	<p class="alinea">a) vitaliciedade, após dois anos de exercício, não podendo perder o cargo senão por sentença judicial transitada em julgado;</p>

	<p class="alinea">b) inamovibilidade, salvo por motivo de interesse público, mediante decisão do órgão colegiado competente do Ministério Público, pelo voto da maioria absoluta de seus membros, assegurada ampla defesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p class="alinea">c) irredutibilidade de subsídio, fixado na forma do art. 39, § 4º, e ressalvado o disposto nos arts. 37, X e XI, 150, II, 153, III, 153, § 2º, I; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art15">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>II - as seguintes vedações:</p>

	<p class="alinea">a) receber, a qualquer título e sob qualquer pretexto, honorários, percentagens ou custas processuais;</p>

	<p class="alinea">b) exercer a advocacia;</p>

	<p class="alinea">c) participar de sociedade comercial, na forma da lei;</p>

	<p class="alinea">d) exercer, ainda que em disponibilidade, qualquer outra função pública, salvo uma de magistério;</p>

	<p class="alinea">e) exercer atividade político-partidária; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p class="alinea">f) receber, a qualquer título ou pretexto, auxílios ou contribuições de pessoas físicas, entidades públicas ou privadas, ressalvadas as exceções previstas em lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluída pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Aplica-se aos membros do Ministério Público o disposto no art. 95, parágrafo único, V. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 129.</span> São funções institucionais do Ministério Público:</p>

	<p>I - promover, privativamente, a ação penal pública, na forma da lei;</p>

	<p>II - zelar pelo efetivo respeito dos Poderes Públicos e dos serviços de relevância pública aos direitos assegurados nesta Constituição, promovendo as medidas necessárias a sua garantia;</p>

	<p>III - promover o inquérito civil e a ação civil pública, para a proteção do patrimônio público e social, do meio ambiente e de outros interesses difusos e coletivos;</p>

	<p>IV - promover a ação de inconstitucionalidade ou representação para fins de intervenção da União e dos Estados, nos casos previstos nesta Constituição;</p>

	<p>V - defender judicialmente os direitos e interesses das populações indígenas;</p>

	<p>VI - expedir notificações nos procedimentos administrativos de sua competência, requisitando informações e documentos para instruí-los, na forma da lei complementar respectiva;</p>

	<p>VII - exercer o controle externo da atividade policial, na forma da lei complementar mencionada no artigo anterior;</p>

	<p>VIII - requisitar diligências investigatórias e a instauração de inquérito policial, indicados os fundamentos jurídicos de suas manifestações processuais;</p>

	<p>IX - exercer outras funções que lhe forem conferidas, desde que compatíveis com sua finalidade, sendo-lhe vedada a representação judicial e a consultoria jurídica de entidades públicas.</p>

	<p><span class="paragrafo">§ 1º.</span> A legitimação do Ministério Público para as ações civis previstas neste artigo não impede a de terceiros, nas mesmas hipóteses, segundo o disposto nesta Constituição e na lei.</p>

	<p><span class="paragrafo">§ 2º.</span> As funções do Ministério Público só podem ser exercidas por integrantes da carreira, que deverão residir na comarca da respectiva lotação, salvo autorização do chefe da instituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O ingresso na carreira do Ministério Público far-se-á mediante concurso público de provas e títulos, assegurada a participação da Ordem dos Advogados do Brasil em sua realização, exigindo-se do bacharel em direito, no mínimo, três anos de atividade jurídica e observando-se, nas nomeações, a ordem de classificação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Aplica-se ao Ministério Público, no que couber, o disposto no art. 93. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 5º.</span> A distribuição de processos no Ministério Público será imediata. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art1">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="artigo">Art. 130.</span> Aos membros do Ministério Público junto aos Tribunais de Contas aplicam-se as disposições desta seção pertinentes a direitos, vedações e forma de investidura.</p>

	<p><span class="artigo" id="130A">Art. 130-A.</span> O Conselho Nacional do Ministério Público compõe-se de quatorze membros nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal, para um mandato de dois anos, admitida uma recondução, sendo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>I o Procurador-Geral da República, que o preside; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II quatro membros do Ministério Público da União, assegurada a representação de cada uma de suas carreiras; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>III três membros do Ministério Público dos Estados; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>IV dois juízes, indicados um pelo Supremo Tribunal Federal e outro pelo Superior Tribunal de Justiça; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>V dois advogados, indicados pelo Conselho Federal da Ordem dos Advogados do Brasil; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>VI dois cidadãos de notável saber jurídico e reputação ilibada, indicados um pela Câmara dos Deputados e outro pelo Senado Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os membros do Conselho oriundos do Ministério Público serão indicados pelos respectivos Ministérios Públicos, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Compete ao Conselho Nacional do Ministério Público o controle da atuação administrativa e financeira do Ministério Público e do cumprimento dos deveres funcionais de seus membros, cabendo lhe: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>I zelar pela autonomia funcional e administrativa do Ministério Público, podendo expedir atos regulamentares, no âmbito de sua competência, ou recomendar providências; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II zelar pela observância do art. 37 e apreciar, de ofício ou mediante provocação, a legalidade dos atos administrativos praticados por membros ou órgãos do Ministério Público da União e dos Estados, podendo desconstituí-los, revê-los ou fixar prazo para que se adotem as providências necessárias ao exato cumprimento da lei, sem prejuízo da competência dos Tribunais de Contas; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>III - receber e conhecer das reclamações contra membros ou órgãos do Ministério Público da União ou dos Estados, inclusive contra seus serviços auxiliares, sem prejuízo da competência disciplinar e correicional da instituição, podendo avocar processos disciplinares em curso, determinar a remoção ou a disponibilidade e aplicar outras sanções administrativas, assegurada ampla defesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>IV rever, de ofício ou mediante provocação, os processos disciplinares de membros do Ministério Público da União ou dos Estados julgados há menos de um ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>V elaborar relatório anual, propondo as providências que julgar necessárias sobre a situação do Ministério Público no País e as atividades do Conselho, o qual deve integrar a mensagem prevista no art. 84, XI. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O Conselho escolherá, em votação secreta, um Corregedor nacional, dentre os membros do Ministério Público que o integram, vedada a recondução, competindo-lhe, além das atribuições que lhe forem conferidas pela lei, as seguintes: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>I receber reclamações e denúncias, de qualquer interessado, relativas aos membros do Ministério Público e dos seus serviços auxiliares; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>II exercer funções executivas do Conselho, de inspeção e correição geral; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p>III requisitar e designar membros do Ministério Público, delegando-lhes atribuições, e requisitar servidores de órgãos do Ministério Público. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 4º.</span> O Presidente do Conselho Federal da Ordem dos Advogados do Brasil oficiará junto ao Conselho. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Leis da União e dos Estados criarão ouvidorias do Ministério Público, competentes para receber reclamações e denúncias de qualquer interessado contra membros ou órgãos do Ministério Público, inclusive contra seus serviços auxiliares, representando diretamente ao Conselho Nacional do Ministério Público. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art2">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<h3>Seção II<br>
	Da Advocacia Pública</h3>

	<p><span class="artigo">Art. 131.</span> A Advocacia-Geral da União é a instituição que, diretamente ou através de órgão vinculado, representa a União, judicial e extrajudicialmente, cabendo-lhe, nos termos da lei complementar que dispuser sobre sua organização e funcionamento, as atividades de consultoria e assessoramento jurídico do Poder Executivo.</p>

	<p><span class="paragrafo">§ 1º.</span> A Advocacia-Geral da União tem por chefe o Advogado-Geral da União, de livre nomeação pelo Presidente da República dentre cidadãos maiores de trinta e cinco anos, de notável saber jurídico e reputação ilibada.</p>

	<p><span class="paragrafo">§ 2º.</span> O ingresso nas classes iniciais das carreiras da instituição de que trata este artigo far-se-á mediante concurso público de provas e títulos.</p>

	<p><span class="paragrafo">§ 3º.</span> Na execução da dívida ativa de natureza tributária, a representação da União cabe à Procuradoria-Geral da Fazenda Nacional, observado o disposto em lei.</p>

	<p><span class="artigo">Art. 132.</span> Os Procuradores dos Estados e do Distrito Federal, organizados em carreira, na qual o ingresso dependerá de concurso público de provas e títulos, com a participação da Ordem dos Advogados do Brasil em todas as suas fases, exercerão a representação judicial e a consultoria jurídica das respectivas unidades federadas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art17">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Aos procuradores referidos neste artigo é assegurada estabilidade após três anos de efetivo exercício, mediante avaliação de desempenho perante os órgãos próprios, após relatório circunstanciado das corregedorias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art17">(Incluído pela Emenda Constitucional nº 19, de 1998) </a></p>

	<h3>Seção III<br>
	Da Advocacia</h3>

	<p><span class="artigo">Art. 133.</span> O advogado é indispensável à administração da justiça, sendo inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei.</p>

	<h3>Seção IV<br>
	Da Defensoria Pública</h3>

	<p><span class="artigo">Art. 134.</span> A Defensoria Pública é instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe, como expressão e instrumento do regime democrático, fundamentalmente, a orientação jurídica, a promoção dos direitos humanos e a defesa, em todos os graus, judicial e extrajudicial, dos direitos individuais e coletivos, de forma integral e gratuita, aos necessitados, na forma do <a href="#art5lxxiv">inciso LXXIV do art. 5º. desta Constituição Federal</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc80.htm#art1">(Redação dada pela Emenda Constitucional nº 80, de 2014)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Lei complementar organizará a Defensoria Pública da União e do Distrito Federal e dos Territórios e prescreverá normas gerais para sua organização nos Estados, em cargos de carreira, providos, na classe inicial, mediante concurso público de provas e títulos, assegurada a seus integrantes a garantia da inamovibilidade e vedado o exercício da advocacia fora das atribuições institucionais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art134">(Renumerado do parágrafo único pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Às Defensorias Públicas Estaduais são asseguradas autonomia funcional e administrativa e a iniciativa de sua proposta orçamentária dentro dos limites estabelecidos na lei de diretrizes orçamentárias e subordinação ao disposto no art. 99, <span class="paragrafo">§ 2º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art134">(Incluído pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Aplica-se o disposto no <span class="paragrafo">§ 2º.</span> às Defensorias Públicas da União e do Distrito Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc74.htm">(Incluído pela Emenda Constitucional nº 74, de 2013)</a></p>

	<p><span class="paragrafo">§ 4º.</span> São princípios institucionais da Defensoria Pública a unidade, a indivisibilidade e a independência funcional, aplicando-se também, no que couber, o disposto no art. 93 e no inciso II do art. 96 desta Constituição Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc80.htm#art1">(Incluído pela Emenda Constitucional nº 80, de 2014)</a></p>

	<p><span class="artigo">Art. 135.</span> Os servidores integrantes das carreiras disciplinadas nas Seções II e III deste Capítulo serão remunerados na forma do art. 39, <span class="paragrafo">§ 4º.</span> </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art18">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<h1>TÍTULO V<br>
	Da Defesa do Estado e das Instituições Democráticas</h1>

	<h2 class="sum2">CAPÍTULO I<br>
	Do Estado De Defesa e do Estado De Sítio</h2>

	<h3>Seção I<br>
	Do Estado De Defesa</h3>

	<p><span class="artigo">Art. 136.</span> O Presidente da República pode, ouvidos o Conselho da República e o Conselho de Defesa Nacional, decretar estado de defesa para preservar ou prontamente restabelecer, em locais restritos e determinados, a ordem pública ou a paz social ameaçadas por grave e iminente instabilidade institucional ou atingidas por calamidades de grandes proporções na natureza.</p>

	<p><span class="paragrafo">§ 1º.</span> O decreto que instituir o estado de defesa determinará o tempo de sua duração, especificará as áreas a serem abrangidas e indicará, nos termos e limites da lei, as medidas coercitivas a vigorarem, dentre as seguintes:</p>

	<p>I - restrições aos direitos de:</p>

	<p class="alinea">a) reunião, ainda que exercida no seio das associações;</p>

	<p class="alinea">b) sigilo de correspondência;</p>

	<p class="alinea">c) sigilo de comunicação telegráfica e telefônica;</p>

	<p>II - ocupação e uso temporário de bens e serviços públicos, na hipótese de calamidade pública, respondendo a União pelos danos e custos decorrentes.</p>

	<p><span class="paragrafo">§ 2º.</span> O tempo de duração do estado de defesa não será superior a trinta dias, podendo ser prorrogado uma vez, por igual período, se persistirem as razões que justificaram a sua decretação.</p>

	<p><span class="paragrafo">§ 3º.</span> Na vigência do estado de defesa:</p>

	<p>I - a prisão por crime contra o Estado, determinada pelo executor da medida, será por este comunicada imediatamente ao juiz competente, que a relaxará, se não for legal, facultado ao preso requerer exame de corpo de delito à autoridade policial;</p>

	<p>II - a comunicação será acompanhada de declaração, pela autoridade, do estado físico e mental do detido no momento de sua autuação;</p>

	<p>III - a prisão ou detenção de qualquer pessoa não poderá ser superior a dez dias, salvo quando autorizada pelo Poder Judiciário;</p>

	<p>IV - é vedada a incomunicabilidade do preso.</p>

	<p><span class="paragrafo">§ 4º.</span> Decretado o estado de defesa ou sua prorrogação, o Presidente da República, dentro de vinte e quatro horas, submeterá o ato com a respectiva justificação ao Congresso Nacional, que decidirá por maioria absoluta.</p>

	<p><span class="paragrafo">§ 5º.</span> Se o Congresso Nacional estiver em recesso, será convocado, extraordinariamente, no prazo de cinco dias.</p>

	<p><span class="paragrafo">§ 6º.</span> O Congresso Nacional apreciará o decreto dentro de dez dias contados de seu recebimento, devendo continuar funcionando enquanto vigorar o estado de defesa.</p>

	<p><span class="paragrafo">§ 7º.</span> Rejeitado o decreto, cessa imediatamente o estado de defesa.</p>

	<h3>Seção II<br>
	Do Estado De Sítio</h3>

	<p><span class="artigo">Art. 137.</span> O Presidente da República pode, ouvidos o Conselho da República e o Conselho de Defesa Nacional, solicitar ao Congresso Nacional autorização para decretar o estado de sítio nos casos de:</p>

	<p>I - comoção grave de repercussão nacional ou ocorrência de fatos que comprovem a ineficácia de medida tomada durante o estado de defesa;</p>

	<p>II - declaração de estado de guerra ou resposta a agressão armada estrangeira.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O Presidente da República, ao solicitar autorização para decretar o estado de sítio ou sua prorrogação, relatará os motivos determinantes do pedido, devendo o Congresso Nacional decidir por maioria absoluta.</p>

	<p><span class="artigo">Art. 138.</span> O decreto do estado de sítio indicará sua duração, as normas necessárias a sua execução e as garantias constitucionais que ficarão suspensas, e, depois de publicado, o Presidente da República designará o executor das medidas específicas e as áreas abrangidas.</p>

	<p><span class="paragrafo">§ 1º.</span> - O estado de sítio, no caso do art. 137, I, não poderá ser decretado por mais de trinta dias, nem prorrogado, de cada vez, por prazo superior; no do inciso II, poderá ser decretado por todo o tempo que perdurar a guerra ou a agressão armada estrangeira.</p>

	<p><span class="paragrafo">§ 2º.</span> - Solicitada autorização para decretar o estado de sítio durante o recesso parlamentar, o Presidente do Senado Federal, de imediato, convocará extraordinariamente o Congresso Nacional para se reunir dentro de cinco dias, a fim de apreciar o ato.</p>

	<p><span class="paragrafo">§ 3º.</span> - O Congresso Nacional permanecerá em funcionamento até o término das medidas coercitivas.</p>

	<p><span class="artigo">Art. 139.</span> Na vigência do estado de sítio decretado com fundamento no art. 137, I, só poderão ser tomadas contra as pessoas as seguintes medidas:</p>

	<p>I - obrigação de permanência em localidade determinada;</p>

	<p>II - detenção em edifício não destinado a acusados ou condenados por crimes comuns;</p>

	<p>III - restrições relativas à inviolabilidade da correspondência, ao sigilo das comunicações, à prestação de informações e à liberdade de imprensa, radiodifusão e televisão, na forma da lei;</p>

	<p>IV - suspensão da liberdade de reunião;</p>

	<p>V - busca e apreensão em domicílio;</p>

	<p>VI - intervenção nas empresas de serviços públicos;</p>

	<p>VII - requisição de bens.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Não se inclui nas restrições do inciso III a difusão de pronunciamentos de parlamentares efetuados em suas Casas Legislativas, desde que liberada pela respectiva Mesa.</p>

	<h3>Seção III<br>
	Disposições Gerais</h3>

	<p><span class="artigo">Art. 140.</span> A Mesa do Congresso Nacional, ouvidos os líderes partidários, designará Comissão composta de cinco de seus membros para acompanhar e fiscalizar a execução das medidas referentes ao estado de defesa e ao estado de sítio.</p>

	<p><span class="artigo">Art. 141.</span> Cessado o estado de defesa ou o estado de sítio, cessarão também seus efeitos, sem prejuízo da responsabilidade pelos ilícitos cometidos por seus executores ou agentes.</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Logo que cesse o estado de defesa ou o estado de sítio, as medidas aplicadas em sua vigência serão relatadas pelo Presidente da República, em mensagem ao Congresso Nacional, com especificação e justificação das providências adotadas, com relação nominal dos atingidos e indicação das restrições aplicadas.</p>

	<h2 class="sum2">CAPÍTULO II<br>
	Das Forças Armadas</h2>

	<p><span class="artigo">Art. 142.</span> As Forças Armadas, constituídas pela Marinha, pelo Exército e pela Aeronáutica, são instituições nacionais permanentes e regulares, organizadas com base na hierarquia e na disciplina, sob a autoridade suprema do Presidente da República, e destinam-se à defesa da Pátria, à garantia dos poderes constitucionais e, por iniciativa de qualquer destes, da lei e da ordem.</p>

	<p><span class="paragrafo">§ 1º.</span> Lei complementar estabelecerá as normas gerais a serem adotadas na organização, no preparo e no emprego das Forças Armadas.</p>

	<p><span class="paragrafo">§ 2º.</span> Não caberá habeas corpus em relação a punições disciplinares militares.</p>

	</a><p><span class="paragrafo">§ 3º.</span> Os membros das Forças Armadas são denominados militares, aplicando-se-lhes, além das que vierem a ser fixadas em lei, as seguintes disposições: </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art4">(Incluído pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p>I - as patentes, com prerrogativas, direitos e deveres a elas inerentes, são conferidas pelo Presidente da República e asseguradas em plenitude aos oficiais da ativa, da reserva ou reformados, sendo-lhes privativos os títulos e postos militares e, juntamente com os demais membros, o uso dos uniformes das Forças Armadas; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art4">(Incluído pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p>II - o militar em atividade que tomar posse em cargo ou emprego público civil permanente, ressalvada a hipótese prevista no art. 37, inciso XVI, alínea "c", será transferido para a reserva, nos termos da lei; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc77.htm">(Redação dada pela Emenda Constitucional nº 77, de 2014)</a></p>

	<p>III - o militar da ativa que, de acordo com a lei, tomar posse em cargo, emprego ou função pública civil temporária, não eletiva, ainda que da administração indireta, ressalvada a hipótese prevista no art. 37, inciso XVI, alínea "c", ficará agregado ao respectivo quadro e somente poderá, enquanto permanecer nessa situação, ser promovido por antiguidade, contando-se-lhe o tempo de serviço apenas para aquela promoção e transferência para a reserva, sendo depois de dois anos de afastamento, contínuos ou não, transferido para a reserva, nos termos da lei; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc77.htm">(Redação dada pela Emenda Constitucional nº 77, de 2014)</a></p>

	<p>IV - ao militar são proibidas a sindicalização e a greve; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art4">(Incluído pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p>V - o militar, enquanto em serviço ativo, não pode estar filiado a partidos políticos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art4">(Incluído pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p>VI - o oficial só perderá o posto e a patente se for julgado indigno do oficialato ou com ele incompatível, por decisão de tribunal militar de caráter permanente, em tempo de paz, ou de tribunal especial, em tempo de guerra; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art4">(Incluído pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p>VII - o oficial condenado na justiça comum ou militar a pena privativa de liberdade superior a dois anos, por sentença transitada em julgado, será submetido ao julgamento previsto no inciso anterior; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art4">(Incluído pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p>VIII - aplica-se aos militares o disposto no art. 7º, incisos VIII, XII, XVII, XVIII, XIX e XXV, e no art. 37, incisos XI, XIII, XIV e XV, bem como, na forma da lei e com prevalência da atividade militar, no art. 37, inciso XVI, alínea "c"; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc77.htm">(Redação dada pela Emenda Constitucional nº 77, de 2014)</a></p>

	<p>IX - <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc41.htm#art10">(Revogado pela Emenda Constitucional nº 41, de 19.12.2003)</a></p>

	<p>X - a lei disporá sobre o ingresso nas Forças Armadas, os limites de idade, a estabilidade e outras condições de transferência do militar para a inatividade, os direitos, os deveres, a remuneração, as prerrogativas e outras situações especiais dos militares, consideradas as peculiaridades de suas atividades, inclusive aquelas cumpridas por força de compromissos internacionais e de guerra. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc18.htm#art4">(Incluído pela Emenda Constitucional nº 18, de 1998)</a></p>

	<p><span class="artigo">Art. 143.</span> O serviço militar é obrigatório nos termos da lei.</a></p>

	</a><p><span class="paragrafo">§ 1º.</span> Às Forças Armadas compete, na forma da lei, atribuir serviço alternativo aos que, em tempo de paz, após alistados, alegarem imperativo de consciência, entendendo-se como tal o decorrente de crença religiosa e de convicção filosófica ou política, para se eximirem de atividades de caráter essencialmente militar. </a><a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8239.htm">(Regulamento)</a></p>

	<p><span class="paragrafo">§ 2º.</span> As mulheres e os eclesiásticos ficam isentos do serviço militar obrigatório em tempo de paz, sujeitos, porém, a outros encargos que a lei lhes atribuir. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8239.htm">(Regulamento)</a></p>

	<h2 class="sum2">CAPÍTULO III<br>
	Da Segurança Pública</h2>

	<p><span class="artigo">Art. 144.</span> A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, através dos seguintes órgãos:</a></p>

	<p>I - polícia federal;</p>

	<p>II - polícia rodoviária federal;</p>

	<p>III - polícia ferroviária federal;</p>

	<p>IV - polícias civis;</p>

	<p>V - polícias militares e corpos de bombeiros militares.</p>

	</a><p>VI - polícias penais federal, estaduais e distrital. </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc104.htm#art3">(Redação dada pela Emenda Constitucional nº 104, de 2019) </a></p>

	<p><span class="paragrafo">§ 1º.</span> A polícia federal, instituída por lei como órgão permanente, organizado e mantido pela União e estruturado em carreira, destina-se a:" <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art19">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>I - apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União ou de suas entidades autárquicas e empresas públicas, assim como outras infrações cuja prática tenha repercussão interestadual ou internacional e exija repressão uniforme, segundo se dispuser em lei;</p>

	<p>II - prevenir e reprimir o tráfico ilícito de entorpecentes e drogas afins, o contrabando e o descaminho, sem prejuízo da ação fazendária e de outros órgãos públicos nas respectivas áreas de competência;</p>

	<p>III - exercer as funções de polícia marítima, aeroportuária e de fronteiras; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art144%C2%A71iii">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>IV - exercer, com exclusividade, as funções de polícia judiciária da União.</p>

	<p><span class="paragrafo">§ 2º.</span> A polícia rodoviária federal, órgão permanente, organizado e mantido pela União e estruturado em carreira, destina-se, na forma da lei, ao patrulhamento ostensivo das rodovias federais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art144%C2%A72">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 3º.</span> A polícia ferroviária federal, órgão permanente, organizado e mantido pela União e estruturado em carreira, destina-se, na forma da lei, ao patrulhamento ostensivo das ferrovias federais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art144%C2%A73">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.</p>

	<p><span class="paragrafo">§ 5º.</span> Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil.</p>

	<p>§ 5º-A. Às polícias penais, vinculadas ao órgão administrador do sistema penal da unidade federativa a que pertencem, cabe a segurança dos estabelecimentos penais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc104.htm#art3">(Redação dada pela Emenda Constitucional nº 104, de 2019) </a></p>

	<p><span class="paragrafo">§ 6º.</span> As polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército subordinam-se, juntamente com as polícias civis e as polícias penais estaduais e distrital, aos Governadores dos Estados, do Distrito Federal e dos Territórios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc104.htm#art3">(Redação dada pela Emenda Constitucional nº 104, de 2019) </a></p>

	<p><span class="paragrafo">§ 7º.</span> A lei disciplinará a organização e o funcionamento dos órgãos responsáveis pela segurança pública, de maneira a garantir a eficiência de suas atividades.</p>

	<p><span class="paragrafo">§ 8º.</span> Os Municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei.</p>

	<p><span class="paragrafo">§ 9º.</span> A remuneração dos servidores policiais integrantes dos órgãos relacionados neste artigo será fixada na forma do <span class="paragrafo">§ 4º.</span> do art. 39. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art144%C2%A79">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>§ 10. A segurança viária, exercida para a preservação da ordem pública e da incolumidade das pessoas e do seu patrimônio nas vias públicas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc82.htm">(Incluído pela Emenda Constitucional nº 82, de 2014)</a></p>

	<p>I - compreende a educação, engenharia e fiscalização de trânsito, além de outras atividades previstas em lei, que assegurem ao cidadão o direito à mobilidade urbana eficiente; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc82.htm">(Incluído pela Emenda Constitucional nº 82, de 2014)</a></p>

	<p>II - compete, no âmbito dos Estados, do Distrito Federal e dos Municípios, aos respectivos órgãos ou entidades executivos e seus agentes de trânsito, estruturados em Carreira, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc82.htm">(Incluído pela Emenda Constitucional nº 82, de 2014)</a></p>

	<h1>TÍTULO VI<br>
	Da Tributação e do Orçamento</h1>

	<h2 class="sum2">CAPÍTULO I<br>
	Do Sistema Tributário Nacional</h2>

	<h3>Seção I<br>
	Dos Princípios Gerais</h3>

	<p><span class="artigo">Art. 145.</span> A União, os Estados, o Distrito Federal e os Municípios poderão instituir os seguintes tributos:</p>

	<p>I - impostos;</p>

	<p>II - taxas, em razão do exercício do poder de polícia ou pela utilização, efetiva ou potencial, de serviços públicos específicos e divisíveis, prestados ao contribuinte ou postos a sua disposição;</p>

	<p>III - contribuição de melhoria, decorrente de obras públicas.</p>

	<p><span class="paragrafo">§ 1º.</span> Sempre que possível, os impostos terão caráter pessoal e serão graduados segundo a capacidade econômica do contribuinte, facultado à administração tributária, especialmente para conferir efetividade a esses objetivos, identificar, respeitados os direitos individuais e nos termos da lei, o patrimônio, os rendimentos e as atividades econômicas do contribuinte.</p>

	<p><span class="paragrafo">§ 2º.</span> As taxas não poderão ter base de cálculo própria de impostos.</p>

	<p><span class="artigo">Art. 146.</span> Cabe à lei complementar:</p>

	<p>I - dispor sobre conflitos de competência, em matéria tributária, entre a União, os Estados, o Distrito Federal e os Municípios;</p>

	<p>II - regular as limitações constitucionais ao poder de tributar;</p>

	<p id="art146i3">III - estabelecer normas gerais em matéria de legislação tributária, especialmente sobre:</p>

	<p class="alinea">a) definição de tributos e de suas espécies, bem como, em relação aos impostos discriminados nesta Constituição, a dos respectivos fatos geradores, bases de cálculo e contribuintes;</p>

	<p class="alinea">b) obrigação, lançamento, crédito, prescrição e decadência tributários;</p>

	<p class="alinea">c) adequado tratamento tributário ao ato cooperativo praticado pelas sociedades cooperativas.</p>

	<p class="alinea">d) definição de tratamento diferenciado e favorecido para as microempresas e para as empresas de pequeno porte, inclusive regimes especiais ou simplificados no caso do imposto previsto no art. 155, II, das contribuições previstas no art. 195, I e §§ 12 e 13, e da contribuição a que se refere o art. 239. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> A lei complementar de que trata o inciso III, d, também poderá instituir um regime único de arrecadação dos impostos e contribuições da União, dos Estados, do Distrito Federal e dos Municípios, observado que: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>I - será opcional para o contribuinte; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>II - poderão ser estabelecidas condições de enquadramento diferenciadas por Estado; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>III - o recolhimento será unificado e centralizado e a distribuição da parcela de recursos pertencentes aos respectivos entes federados será imediata, vedada qualquer retenção ou condicionamento; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>IV - a arrecadação, a fiscalização e a cobrança poderão ser compartilhadas pelos entes federados, adotado cadastro nacional único de contribuintes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="artigo" id="146A">Art. 146-A.</span> Lei complementar poderá estabelecer critérios especiais de tributação, com o objetivo de prevenir desequilíbrios da concorrência, sem prejuízo da competência de a União, por lei, estabelecer normas de igual objetivo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="artigo">Art. 147.</span> Competem à União, em Território Federal, os impostos estaduais e, se o Território não for dividido em Municípios, cumulativamente, os impostos municipais; ao Distrito Federal cabem os impostos municipais.</p>

	<p><span class="artigo">Art. 148.</span> A União, mediante lei complementar, poderá instituir empréstimos compulsórios:</p>

	<p>I - para atender a despesas extraordinárias, decorrentes de calamidade pública, de guerra externa ou sua iminência;</p>

	<p>II - no caso de investimento público de caráter urgente e de relevante interesse nacional, observado o disposto no art. 150, III, "b".</p>

	<p><span class="paragrafo">Parágrafo único.</span> A aplicação dos recursos provenientes de empréstimo compulsório será vinculada à despesa que fundamentou sua instituição.</p>

	<p><span class="artigo">Art. 149.</span> Compete exclusivamente à União instituir contribuições sociais, de intervenção no domínio econômico e de interesse das categorias profissionais ou econômicas, como instrumento de sua atuação nas respectivas áreas, observado o disposto nos arts. 146, III, e 150, I e III, e sem prejuízo do previsto no art. 195, § 6º, relativamente às contribuições a que alude o dispositivo.</p>

	<p><span class="paragrafo">§ 1º.</span> A União, os Estados, o Distrito Federal e os Municípios instituirão, por meio de lei, contribuições para custeio de regime próprio de previdência social, cobradas dos servidores ativos, dos aposentados e dos pensionistas, que poderão ter alíquotas progressivas de acordo com o valor da base de contribuição ou dos proventos de aposentadoria e de pensões. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art36ii">(Vigência</a></p>

	<p>§ 1º-A. Quando houver deficit atuarial, a contribuição ordinária dos aposentados e pensionistas poderá incidir sobre o valor dos proventos de aposentadoria e de pensões que supere o salário-mínimo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art36ii">(Vigência)</a></p>

	<p>§ 1º-B. Demonstrada a insuficiência da medida prevista no § 1º-A para equacionar o deficit atuarial, é facultada a instituição de contribuição extraordinária, no âmbito da União, dos servidores públicos ativos, dos aposentados e dos pensionistas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art36ii">(Vigência)</a></p>

	<p>§ 1º-C. A contribuição extraordinária de que trata o § 1º-B deverá ser instituída simultaneamente com outras medidas para equacionamento do deficit e vigorará por período determinado, contado da data de sua instituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art36ii">(Vigência)</a></p>

	<p><span class="paragrafo">§ 2º.</span> As contribuições sociais e de intervenção no domínio econômico de que trata o caput deste artigo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art1">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p>I - não incidirão sobre as receitas decorrentes de exportação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art1">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p>II - incidirão também sobre a importação de produtos estrangeiros ou serviços; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Redação dada pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>III - poderão ter alíquotas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art1">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">a) ad valorem, tendo por base o faturamento, a receita bruta ou o valor da operação e, no caso de importação, o valor aduaneiro; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art1">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">b) específica, tendo por base a unidade de medida adotada. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art1">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p><span class="paragrafo">§ 3º.</span> A pessoa natural destinatária das operações de importação poderá ser equiparada a pessoa jurídica, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art1">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p><span class="paragrafo">§ 4º.</span> A lei definirá as hipóteses em que as contribuições incidirão uma única vez. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art1">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p>Art. 149-A Os Municípios e o Distrito Federal poderão instituir contribuição, na forma das respectivas leis, para o custeio do serviço de iluminação pública, observado o disposto no art. 150, I e III. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc39.htm#art1">(Incluído pela Emenda Constitucional nº 39, de 2002)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> É facultada a cobrança da contribuição a que se refere o caput, na fatura de consumo de energia elétrica. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc39.htm#art1">(Incluído pela Emenda Constitucional nº 39, de 2002)</a></p>

	<h3>Seção II<br>
	Das Limitações do Poder De Tributar</h3>

	<p><span class="artigo">Art. 150.</span> Sem prejuízo de outras garantias asseguradas ao contribuinte, é vedado à União, aos Estados, ao Distrito Federal e aos Municípios:</p>

	<p>I - exigir ou aumentar tributo sem lei que o estabeleça;</p>

	<p>II - instituir tratamento desigual entre contribuintes que se encontrem em situação equivalente, proibida qualquer distinção em razão de ocupação profissional ou função por eles exercida, independentemente da denominação jurídica dos rendimentos, títulos ou direitos;</p>

	<p>III - cobrar tributos:</p>

	<p class="alinea">a) em relação a fatos geradores ocorridos antes do início da vigência da lei que os houver instituído ou aumentado;</p>

	<p class="alinea">b) no mesmo exercício financeiro em que haja sido publicada a lei que os instituiu ou aumentou; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art2%C2%A72">(Vide Emenda Constitucional nº 3, de 1993) </a></p>

	<p class="alinea">c) antes de decorridos noventa dias da data em que haja sido publicada a lei que os instituiu ou aumentou, observado o disposto na alínea b; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>IV - utilizar tributo com efeito de confisco;</p>

	<p>V - estabelecer limitações ao tráfego de pessoas ou bens, por meio de tributos interestaduais ou intermunicipais, ressalvada a cobrança de pedágio pela utilização de vias conservadas pelo Poder Público;</p>

	<p>VI - instituir impostos sobre: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art2%C2%A72">(Vide Emenda Constitucional nº 3, de 1993) </a></p>

	<p class="alinea">a) patrimônio, renda ou serviços, uns dos outros;</p>

	<p class="alinea">b) templos de qualquer culto;</p>

	<p class="alinea">c) patrimônio, renda ou serviços dos partidos políticos, inclusive suas fundações, das entidades sindicais dos trabalhadores, das instituições de educação e de assistência social, sem fins lucrativos, atendidos os requisitos da lei;</p>

	<p class="alinea">d) livros, jornais, periódicos e o papel destinado a sua impressão.</p>

	<p class="alinea">e) fonogramas e videofonogramas musicais produzidos no Brasil contendo obras musicais ou literomusicais de autores brasileiros e/ou obras em geral interpretadas por artistas brasileiros bem como os suportes materiais ou arquivos digitais que os contenham, salvo na etapa de replicação industrial de mídias ópticas de leitura a laser. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc75.htm#art1">(Incluída pela Emenda Constitucional nº 75, de 15.10.2013)</a></p>

	<p><span class="paragrafo">§ 1º.</span> A vedação do inciso III, b, não se aplica aos tributos previstos nos arts. 148, I, 153, I, II, IV e V; e 154, II; e a vedação do inciso III, c, não se aplica aos tributos previstos nos arts. 148, I, 153, I, II, III e V; e 154, II, nem à fixação da base de cálculo dos impostos previstos nos arts. 155, III, e 156, I. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Redação dada pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A vedação do inciso VI, "a", é extensiva às autarquias e às fundações instituídas e mantidas pelo Poder Público, no que se refere ao patrimônio, à renda e aos serviços, vinculados a suas finalidades essenciais ou às delas decorrentes.</p>

	<p><span class="paragrafo">§ 3º.</span> As vedações do inciso VI, "a", e do parágrafo anterior não se aplicam ao patrimônio, à renda e aos serviços, relacionados com exploração de atividades econômicas regidas pelas normas aplicáveis a empreendimentos privados, ou em que haja contraprestação ou pagamento de preços ou tarifas pelo usuário, nem exonera o promitente comprador da obrigação de pagar imposto relativamente ao bem imóvel.</p>

	<p><span class="paragrafo">§ 4º.</span> As vedações expressas no inciso VI, alíneas "b" e "c", compreendem somente o patrimônio, a renda e os serviços, relacionados com as finalidades essenciais das entidades nelas mencionadas.</p>

	<p><span class="paragrafo">§ 5º.</span> A lei determinará medidas para que os consumidores sejam esclarecidos acerca dos impostos que incidam sobre mercadorias e serviços.</p>

	<p><span class="paragrafo">§ 6º.</span> Qualquer subsídio ou isenção, redução de base de cálculo, concessão de crédito presumido, anistia ou remissão, relativos a impostos, taxas ou contribuições, só poderá ser concedido mediante lei específica, federal, estadual ou municipal, que regule exclusivamente as matérias acima enumeradas ou o correspondente tributo ou contribuição, sem prejuízo do disposto no art. 155, § 2.º, XII, g. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Redação dada pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p><span class="paragrafo">§ 7º.</span> A lei poderá atribuir a sujeito passivo de obrigação tributária a condição de responsável pelo pagamento de imposto ou contribuição, cujo fato gerador deva ocorrer posteriormente, assegurada a imediata e preferencial restituição da quantia paga, caso não se realize o fato gerador presumido. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Incluído pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p><span class="artigo">Art. 151.</span> É vedado à União:</p>

	<p>I - instituir tributo que não seja uniforme em todo o território nacional ou que implique distinção ou preferência em relação a Estado, ao Distrito Federal ou a Município, em detrimento de outro, admitida a concessão de incentivos fiscais destinados a promover o equilíbrio do desenvolvimento socioeconômico entre as diferentes regiões do País;</p>

	<p>II - tributar a renda das obrigações da dívida pública dos Estados, do Distrito Federal e dos Municípios, bem como a remuneração e os proventos dos respectivos agentes públicos, em níveis superiores aos que fixar para suas obrigações e para seus agentes;</p>

	<p>III - instituir isenções de tributos da competência dos Estados, do Distrito Federal ou dos Municípios.</p>

	<p><span class="artigo">Art. 152.</span> É vedado aos Estados, ao Distrito Federal e aos Municípios estabelecer diferença tributária entre bens e serviços, de qualquer natureza, em razão de sua procedência ou destino.</p>

	<h3>Seção III<br>
	Dos Impostos da União</h3>

	<p><span class="artigo">Art. 153.</span> Compete à União instituir impostos sobre:</p>

	<p>I - importação de produtos estrangeiros;</p>

	<p>II - exportação, para o exterior, de produtos nacionais ou nacionalizados;</p>

	<p>III - renda e proventos de qualquer natureza;</p>

	<p>IV - produtos industrializados;</p>

	<p>V - operações de crédito, câmbio e seguro, ou relativas a títulos ou valores mobiliários;</p>

	<p>VI - propriedade territorial rural;</p>

	<p>VII - grandes fortunas, nos termos de lei complementar.</p>

	<p><span class="paragrafo">§ 1º.</span> É facultado ao Poder Executivo, atendidas as condições e os limites estabelecidos em lei, alterar as alíquotas dos impostos enumerados nos incisos I, II, IV e V.</p>

	<p><span class="paragrafo">§ 2º.</span> O imposto previsto no inciso III:</p>

	<p>I - será informado pelos critérios da generalidade, da universalidade e da progressividade, na forma da lei;</p>

	<p>II - <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art17">(Revogado pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O imposto previsto no inciso IV:</p>

	<p>I - será seletivo, em função da essencialidade do produto;</p>

	<p>II - será não-cumulativo, compensando-se o que for devido em cada operação com o montante cobrado nas anteriores;</p>

	<p>III - não incidirá sobre produtos industrializados destinados ao exterior.</p>

	<p>IV - terá reduzido seu impacto sobre a aquisição de bens de capital pelo contribuinte do imposto, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 4º.</span> O imposto previsto no inciso VI do caput: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Redação dada pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>I - será progressivo e terá suas alíquotas fixadas de forma a desestimular a manutenção de propriedades improdutivas; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>II - não incidirá sobre pequenas glebas rurais, definidas em lei, quando as explore o proprietário que não possua outro imóvel; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>III - será fiscalizado e cobrado pelos Municípios que assim optarem, na forma da lei, desde que não implique redução do imposto ou qualquer outra forma de renúncia fiscal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2005/Lei/L11250.htm">(Regulamento)</a></p>

	<p><span class="paragrafo">§ 5º.</span> O ouro, quando definido em lei como ativo financeiro ou instrumento cambial, sujeita-se exclusivamente à incidência do imposto de que trata o inciso V do "caput" deste artigo, devido na operação de origem; a alíquota mínima será de um por cento, assegurada a transferência do montante da arrecadação nos seguintes termos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art2%C2%A72">(Vide Emenda Constitucional nº 3, de 1993)</a></p>

	<p>I - trinta por cento para o Estado, o Distrito Federal ou o Território, conforme a origem;</p>

	<p>II - setenta por cento para o Município de origem.</p>

	<p><span class="artigo">Art. 154.</span> A União poderá instituir:</p>

	<p>I - mediante lei complementar, impostos não previstos no artigo anterior, desde que sejam não-cumulativos e não tenham fato gerador ou base de cálculo próprios dos discriminados nesta Constituição;</p>

	<p>II - na iminência ou no caso de guerra externa, impostos extraordinários, compreendidos ou não em sua competência tributária, os quais serão suprimidos, gradativamente, cessadas as causas de sua criação.</p>

	<h3>Seção IV<br>
	Dos Impostos dos Estados e do Distrito Federal</h3>

	<p><span class="artigo">Art. 155.</span> Compete aos Estados e ao Distrito Federal instituir impostos sobre: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">Redação dada pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p>I - transmissão causa mortis e doação, de quaisquer bens ou direitos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Redação dada pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p>II - operações relativas à circulação de mercadorias e sobre prestações de serviços de transporte interestadual e intermunicipal e de comunicação, ainda que as operações e as prestações se iniciem no exterior; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Redação dada pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p>III - propriedade de veículos automotores. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Redação dada pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O imposto previsto no inciso I: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Redação dada pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p>I - relativamente a bens imóveis e respectivos direitos, compete ao Estado da situação do bem, ou ao Distrito Federal</p>

	<p>II - relativamente a bens móveis, títulos e créditos, compete ao Estado onde se processar o inventário ou arrolamento, ou tiver domicílio o doador, ou ao Distrito Federal;</p>

	<p>III - terá competência para sua instituição regulada por lei complementar:</p>

	<p class="alinea">a) se o doador tiver domicilio ou residência no exterior;</p>

	<p class="alinea">b) se o de cujus possuía bens, era residente ou domiciliado ou teve o seu inventário processado no exterior;</p>

	<p>IV - terá suas alíquotas máximas fixadas pelo Senado Federal;</p>

	<p>V - não incidirá sobre as doações destinadas, no âmbito do Poder Executivo da União, a projetos socioambientais ou destinados a mitigar os efeitos das mudanças climáticas e às instituições federais de ensino.</p>

	<ul class="dica">
		<li>Inciso V acrescido pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="paragrafo">§ 2º.</span> O imposto previsto no inciso II atenderá ao seguinte: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Redação dada pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p>I - será não-cumulativo, compensando-se o que for devido em cada operação relativa à circulação de mercadorias ou prestação de serviços com o montante cobrado nas anteriores pelo mesmo ou outro Estado ou pelo Distrito Federal;</p>

	<p>II - a isenção ou não-incidência, salvo determinação em contrário da legislação:</p>

	<p class="alinea">a) não implicará crédito para compensação com o montante devido nas operações ou prestações seguintes;</p>

	<p class="alinea">b) acarretará a anulação do crédito relativo às operações anteriores;</p>

	<p>III - poderá ser seletivo, em função da essencialidade das mercadorias e dos serviços;</p>

	<p>IV - resolução do Senado Federal, de iniciativa do Presidente da República ou de um terço dos Senadores, aprovada pela maioria absoluta de seus membros, estabelecerá as alíquotas aplicáveis às operações e prestações, interestaduais e de exportação;</p>

	<p>V - é facultado ao Senado Federal:</p>

	<p class="alinea">a) estabelecer alíquotas mínimas nas operações internas, mediante resolução de iniciativa de um terço e aprovada pela maioria absoluta de seus membros;</p>

	<p class="alinea">b) fixar alíquotas máximas nas mesmas operações para resolver conflito específico que envolva interesse de Estados, mediante resolução de iniciativa da maioria absoluta e aprovada por dois terços de seus membros;</p>

	<p>VI - salvo deliberação em contrário dos Estados e do Distrito Federal, nos termos do disposto no inciso XII, "g", as alíquotas internas, nas operações relativas à circulação de mercadorias e nas prestações de serviços, não poderão ser inferiores às previstas para as operações interestaduais;</p>

	<p>VII - nas operações e prestações que destinem bens e serviços a consumidor final, contribuinte ou não do imposto, localizado em outro Estado, adotar-se-á a alíquota interestadual e caberá ao Estado de localização do destinatário o imposto correspondente à diferença entre a alíquota interna do Estado destinatário e a alíquota interestadual; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art1">(Redação dada pela Emenda Constitucional nº 87, de 2015)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art3">(Produção de efeito)</a></p>

	<p class="alinea">a) (revogada); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art1">(Redação dada pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p class="alinea">b) (revogada); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art1">(Redação dada pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p>VIII - a responsabilidade pelo recolhimento do imposto correspondente à diferença entre a alíquota interna e a interestadual de que trata o inciso VII será atribuída: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art1">(Redação dada pela Emenda Constitucional nº 87, de 2015)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art3">(Produção de efeito)</a></p>

	<p class="alinea">a) ao destinatário, quando este for contribuinte do imposto; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art1">(Incluído pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p class="alinea">b) ao remetente, quando o destinatário não for contribuinte do imposto; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art1">(Incluído pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p>IX - incidirá também:</p>

	<p class="alinea">a)sobre a entrada de bem ou mercadoria importados do exterior por pessoa física ou jurídica, ainda que não seja contribuinte habitual do imposto, qualquer que seja a sua finalidade, assim como sobre o serviço prestado no exterior, cabendo o imposto ao Estado onde estiver situado o domicílio ou o estabelecimento do destinatário da mercadoria, bem ou serviço; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Redação dada pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">b) sobre o valor total da operação, quando mercadorias forem fornecidas com serviços não compreendidos na competência tributária dos Municípios;</p>

	<p>X - não incidirá:</p>

	<p class="alinea">a) sobre operações que destinem mercadorias para o exterior, nem sobre serviços prestados a destinatários no exterior, assegurada a manutenção e o aproveitamento do montante do imposto cobrado nas operações e prestações anteriores; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Redação dada pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p class="alinea">b) sobre operações que destinem a outros Estados petróleo, inclusive lubrificantes, combustíveis líquidos e gasosos dele derivados, e energia elétrica;</p>

	<p class="alinea">c) sobre o ouro, nas hipóteses definidas no art. 153, § 5º;</p>

	<p class="alinea">d) nas prestações de serviço de comunicação nas modalidades de radiodifusão sonora e de sons e imagens de recepção livre e gratuita; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>XI - não compreenderá, em sua base de cálculo, o montante do imposto sobre produtos industrializados, quando a operação, realizada entre contribuintes e relativa a produto destinado à industrialização ou à comercialização, configure fato gerador dos dois impostos;</p>

	<p>XII - cabe à lei complementar:</p>

	<p class="alinea">a) definir seus contribuintes;</p>

	<p class="alinea">b) dispor sobre substituição tributária;</p>

	<p class="alinea">c) disciplinar o regime de compensação do imposto;</p>

	<p class="alinea">d) fixar, para efeito de sua cobrança e definição do estabelecimento responsável, o local das operações relativas à circulação de mercadorias e das prestações de serviços;</p>

	<p class="alinea">e) excluir da incidência do imposto, nas exportações para o exterior, serviços e outros produtos além dos mencionados no inciso X, "a";</p>

	<p class="alinea">f) prever casos de manutenção de crédito, relativamente à remessa para outro Estado e exportação para o exterior, de serviços e de mercadorias;</p>

	<p class="alinea">g) regular a forma como, mediante deliberação dos Estados e do Distrito Federal, isenções, incentivos e benefícios fiscais serão concedidos e revogados.</p>

	<p class="alinea">h) definir os combustíveis e lubrificantes sobre os quais o imposto incidirá uma única vez, qualquer que seja a sua finalidade, hipótese em que não se aplicará o disposto no inciso X, b; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluída pela Emenda Constitucional nº 33, de 2001)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art4">(Vide Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">i) fixar a base de cálculo, de modo que o montante do imposto a integre, também na importação do exterior de bem, mercadoria ou serviço. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluída pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p><span class="paragrafo">§ 3º.</span> À exceção dos impostos de que tratam o inciso II do caput deste artigo e o art. 153, I e II, nenhum outro imposto poderá incidir sobre operações relativas a energia elétrica, serviços de telecomunicações, derivados de petróleo, combustíveis e minerais do País. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Redação dada pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Na hipótese do inciso XII, h, observar-se-á o seguinte: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p>I - nas operações com os lubrificantes e combustíveis derivados de petróleo, o imposto caberá ao Estado onde ocorrer o consumo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p>II - nas operações interestaduais, entre contribuintes, com gás natural e seus derivados, e lubrificantes e combustíveis não incluídos no inciso I deste parágrafo, o imposto será repartido entre os Estados de origem e de destino, mantendo-se a mesma proporcionalidade que ocorre nas operações com as demais mercadorias; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p>III - nas operações interestaduais com gás natural e seus derivados, e lubrificantes e combustíveis não incluídos no inciso I deste parágrafo, destinadas a não contribuinte, o imposto caberá ao Estado de origem; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p>IV - as alíquotas do imposto serão definidas mediante deliberação dos Estados e Distrito Federal, nos termos do § 2º, XII, g, observando-se o seguinte: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">a) serão uniformes em todo o território nacional, podendo ser diferenciadas por produto; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">b) poderão ser específicas, por unidade de medida adotada, ou ad valorem, incidindo sobre o valor da operação ou sobre o preço que o produto ou seu similar alcançaria em uma venda em condições de livre concorrência; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">c) poderão ser reduzidas e restabelecidas, não se lhes aplicando o disposto no art. 150, III, b. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p><span class="paragrafo">§ 5º.</span> As regras necessárias à aplicação do disposto no § 4º, inclusive as relativas à apuração e à destinação do imposto, serão estabelecidas mediante deliberação dos Estados e do Distrito Federal, nos termos do § 2º, XII, g. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art2">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p><span class="paragrafo">§ 6º.</span> O imposto previsto no inciso III: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>I - terá alíquotas mínimas fixadas pelo Senado Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>II - poderá ter alíquotas diferenciadas em função do tipo e utilização. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<h3>Seção V<br>
	Dos Impostos dos Municípios</h3>

	<p><span class="artigo">Art. 156.</span> Compete aos Municípios instituir impostos sobre:</p>

	<p>I - propriedade predial e territorial urbana;</p>

	<p>II - transmissão "inter vivos", a qualquer título, por ato oneroso, de bens imóveis, por natureza ou acessão física, e de direitos reais sobre imóveis, exceto os de garantia, bem como cessão de direitos a sua aquisição;</p>

	<p>III - serviços de qualquer natureza, não compreendidos no art. 155, II, definidos em lei complementar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art1">(Redação dada pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p>IV - <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art6">(Revogado pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Sem prejuízo da progressividade no tempo a que se refere o art. 182, § 4º, inciso II, o imposto previsto no inciso I poderá: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art3">(Redação dada pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>I – ser progressivo em razão do valor do imóvel; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art3">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>II – ter alíquotas diferentes de acordo com a localização e o uso do imóvel. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art3">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>§ 1º-A O imposto previsto no inciso I do caput deste artigo não incide sobre templos de qualquer culto, ainda que as entidades abrangidas pela imunidade de que trata a alínea "b" do inciso VI do caput do art. 150 desta Constituição sejam apenas locatárias do bem imóvel. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc116.htm#art1">(Incluído pela Emenda Constitucional nº 116, de 2022) </a></p>

	<p><span class="paragrafo">§ 2º.</span> O imposto previsto no inciso II:</p>

	<p>I - não incide sobre a transmissão de bens ou direitos incorporados ao patrimônio de pessoa jurídica em realização de capital, nem sobre a transmissão de bens ou direitos decorrente de fusão, incorporação, cisão ou extinção de pessoa jurídica, salvo se, nesses casos, a atividade preponderante do adquirente for a compra e venda desses bens ou direitos, locação de bens imóveis ou arrendamento mercantil;</p>

	<p>II - compete ao Município da situação do bem.</p>

	<p><span class="paragrafo">§ 3º.</span> Em relação ao imposto previsto no inciso III do caput deste artigo, cabe à lei complementar: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art2">(Redação dada pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>I - fixar as suas alíquotas máximas e mínimas; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art2">(Redação dada pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>II - excluir da sua incidência exportações de serviços para o exterior. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art2">(Incluído pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p>III – regular a forma e as condições como isenções, incentivos e benefícios fiscais serão concedidos e revogados. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art2">(Incluído pela Emenda Constitucional nº 3, de 1993)</a></p>

	<p><span class="paragrafo">§ 4º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art6">(Revogado pela Emenda Constitucional nº 3, de 1993)</a></p>

	<h3>Seção VI<br>
	Da Repartição das Receitas Tributárias</h3>

	<p><span class="artigo">Art. 157.</span> Pertencem aos Estados e ao Distrito Federal:</p>

	<p>I - o produto da arrecadação do imposto da União sobre renda e proventos de qualquer natureza, incidente na fonte, sobre rendimentos pagos, a qualquer título, por eles, suas autarquias e pelas fundações que instituírem e mantiverem;</p>

	<p>II - vinte por cento do produto da arrecadação do imposto que a União instituir no exercício da competência que lhe é atribuída pelo art. 154, I.</p>

	<p><span class="artigo">Art. 158.</span> Pertencem aos Municípios:</p>

	<p>I - o produto da arrecadação do imposto da União sobre renda e proventos de qualquer natureza, incidente na fonte, sobre rendimentos pagos, a qualquer título, por eles, suas autarquias e pelas fundações que instituírem e mantiverem;</p>

	<p>II - cinquenta por cento do produto da arrecadação do imposto da União sobre a propriedade territorial rural, relativamente aos imóveis neles situados, cabendo a totalidade na hipótese da opção a que se refere o art. 153, § 4º, III; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Redação dada pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>III - cinquenta por cento do produto da arrecadação do imposto do Estado sobre a propriedade de veículos automotores licenciados em seus territórios;</p>

	<p>IV - vinte e cinco por cento do produto da arrecadação do imposto do Estado sobre operações relativas à circulação de mercadorias e sobre prestações de serviços de transporte interestadual e intermunicipal e de comunicação.</p>

	<p><span class="paragrafo">Parágrafo único.</span> As parcelas de receita pertencentes aos Municípios, mencionadas no inciso IV, serão creditadas conforme os seguintes critérios:</p>

	<p>I - 65% (sessenta e cinco por cento), no mínimo, na proporção do valor adicionado nas operações relativas à circulação de mercadorias e nas prestações de serviços, realizadas em seus territórios; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Redação dada pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>II - até 35% (trinta e cinco por cento), de acordo com o que dispuser lei estadual, observada, obrigatoriamente, a distribuição de, no mínimo, 10 (dez) pontos percentuais com base em indicadores de melhoria nos resultados de aprendizagem e de aumento da equidade, considerado o nível socioeconômico dos educandos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Redação dada pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="artigo">Art. 159.</span> A União entregará: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc55.htm#art2">(Vide Emenda Constitucional nº 55, de 2007)</a></p>

	<p>I - do produto da arrecadação dos impostos sobre renda e proventos de qualquer natureza e sobre produtos industrializados, 50% (cinquenta por cento), da seguinte forma: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc112.htm#art1">(Redação dada pela Emenda Constitucional nº 112, de 2021)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc112.htm#art3">Produção de efeitos</a></p>

	<p class="alinea">a) vinte e um inteiros e cinco décimos por cento ao Fundo de Participação dos Estados e do Distrito Federal; <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp62.htm">(Vide Lei Complementar nº 62, de 1989) </a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2012/Decreto/D7827.htm">(Regulamento) </a></p>

	<p class="alinea">b) vinte e dois inteiros e cinco décimos por cento ao Fundo de Participação dos Municípios; <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp62.htm">(Vide Lei Complementar nº 62, de 1989) </a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2012/Decreto/D7827.htm">(Regulamento) </a></p>

	<p class="alinea">c) três por cento, para aplicação em programas de financiamento ao setor produtivo das Regiões Norte, Nordeste e Centro-Oeste, através de suas instituições financeiras de caráter regional, de acordo com os planos regionais de desenvolvimento, ficando assegurada ao semiárido do Nordeste a metade dos recursos destinados à Região, na forma que a lei estabelecer; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2012/Decreto/D7827.htm">(Regulamento) </a></p>

	<p class="alinea">d) um por cento ao Fundo de Participação dos Municípios, que será entregue no primeiro decêndio do mês de dezembro de cada ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc55.htm#art1">(Incluído pela Emenda Constitucional nº 55, de 2007)</a></p>

	<p class="alinea">e) 1% (um por cento) ao Fundo de Participação dos Municípios, que será entregue no primeiro decêndio do mês de julho de cada ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc84.htm#art1">(Incluída pela Emenda Constitucional nº 84, de 2014)</a></p>

	<p class="alinea">f) 1% (um por cento) ao Fundo de Participação dos Municípios, que será entregue no primeiro decêndio do mês de setembro de cada ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc112.htm#art1">(Incluído pela Emenda Constitucional nº 112, de 2021)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc112.htm#art3">Produção de efeitos</a></p>

	<p>II - do produto da arrecadação do imposto sobre produtos industrializados, dez por cento aos Estados e ao Distrito Federal, proporcionalmente ao valor das respectivas exportações de produtos industrializados. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2012/Decreto/D7827.htm">(Regulamento) </a></p>

	<p>III - do produto da arrecadação da contribuição de intervenção no domínio econômico prevista no art. 177, § 4º, 29% (vinte e nove por cento) para os Estados e o Distrito Federal, distribuídos na forma da lei, observada a destinação a que se refere o inciso II, c, do referido parágrafo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc44.htm#art1">(Redação dada pela Emenda Constitucional nº 44, de 2004)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Para efeito de cálculo da entrega a ser efetuada de acordo com o previsto no inciso I, excluir-se-á a parcela da arrecadação do imposto de renda e proventos de qualquer natureza pertencente aos Estados, ao Distrito Federal e aos Municípios, nos termos do disposto nos arts. 157, I, e 158, I.</p>

	<p><span class="paragrafo">§ 2º.</span> A nenhuma unidade federada poderá ser destinada parcela superior a vinte por cento do montante a que se refere o inciso II, devendo o eventual excedente ser distribuído entre os demais participantes, mantido, em relação a esses, o critério de partilha nele estabelecido.</p>

	<p><span class="paragrafo">§ 3º.</span> Os Estados entregarão aos respectivos Municípios vinte e cinco por cento dos recursos que receberem nos termos do inciso II, observados os critérios estabelecidos no art. 158, parágrafo único, I e II.</p>

	<p><span class="paragrafo">§ 4º.</span> do montante de recursos de que trata o inciso III que cabe a cada Estado, vinte e cinco por cento serão destinados aos seus Municípios, na forma da lei a que se refere o mencionado inciso. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="artigo">Art. 160.</span> É vedada a retenção ou qualquer restrição à entrega e ao emprego dos recursos atribuídos, nesta seção, aos Estados, ao Distrito Federal e aos Municípios, neles compreendidos adicionais e acréscimos relativos a impostos.</p>

	<p><span class="paragrafo">§ 1º.</span> A vedação prevista neste artigo não impede a União e os Estados de condicionarem a entrega de recursos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Renumerado do Parágrafo único pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>I – ao pagamento de seus créditos, inclusive de suas autarquias; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art4">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>II – ao cumprimento do disposto no art. 198, § 2º, incisos II e III. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art4">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os contratos, os acordos, os ajustes, os convênios, os parcelamentos ou as renegociações de débitos de qualquer espécie, inclusive tributários, firmados pela União com os entes federativos conterão cláusulas para autorizar a dedução dos valores devidos dos montantes a serem repassados relacionados às respectivas cotas nos Fundos de Participação ou aos precatórios federais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art1">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="artigo">Art. 161.</span> Cabe à lei complementar:</p>

	<p>I - definir valor adicionado para fins do disposto no art. 158, parágrafo único, I;</p>

	<p>II - estabelecer normas sobre a entrega dos recursos de que trata o art. 159, especialmente sobre os critérios de rateio dos fundos previstos em seu inciso I, objetivando promover o equilíbrio socioeconômico entre Estados e entre Municípios;</p>

	<p>III - dispor sobre o acompanhamento, pelos beneficiários, do cálculo das quotas e da liberação das participações previstas nos arts. 157, 158 e 159.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O Tribunal de Contas da União efetuará o cálculo das quotas referentes aos fundos de participação a que alude o inciso II.</p>

	<p><span class="artigo">Art. 162.</span> A União, os Estados, o Distrito Federal e os Municípios divulgarão, até o último dia do mês subsequente ao da arrecadação, os montantes de cada um dos tributos arrecadados, os recursos recebidos, os valores de origem tributária entregues e a entregar e a expressão numérica dos critérios de rateio.</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Os dados divulgados pela União serão discriminados por Estado e por Município; os dos Estados, por Município.</p>

	<h2 class="sum2">CAPÍTULO II<br>
	Das Finanças Públicas</h2>

	<h3>Seção I<br>
	Normas Gerais</h3>

	<p><span class="artigo">Art. 163.</span> Lei complementar disporá sobre:</p>

	<p>I - finanças públicas;</p>

	<p>II - dívida pública externa e interna, incluída a das autarquias, fundações e demais entidades controladas pelo Poder Público;</p>

	<p>III - concessão de garantias pelas entidades públicas;</p>

	<p>IV - emissão e resgate de títulos da dívida pública;</p>

	</a><p>V - fiscalização financeira da administração pública direta e indireta; </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art1">(Redação dada pela Emenda Constitucional nº 40, de 2</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art1">003)</a></p>

	<p>VI - operações de câmbio realizadas por órgãos e entidades da União, dos Estados, do Distrito Federal e dos Municípios;</p>

	<p>VII - compatibilização das funções das instituições oficiais de crédito da União, resguardadas as características e condições operacionais plenas das voltadas ao desenvolvimento regional.</p>

	<p>VIII - sustentabilidade da dívida, especificando: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">a) indicadores de sua apuração; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">b) níveis de compatibilidade dos resultados fiscais com a trajetória da dívida; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">c) trajetória de convergência do montante da dívida com os limites definidos em legislação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">d) medidas de ajuste, suspensões e vedações; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">e) planejamento de alienação de ativos com vistas à redução do montante da dívida. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">Parágrafo único.</span> A lei complementar de que trata o inciso VIII do caput deste artigo pode autorizar a aplicação das vedações previstas no art. 167-A desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo" id="163A">Art. 163-A.</span> A União, os Estados, o Distrito Federal e os Municípios disponibilizarão suas informações e dados contábeis, orçamentários e fiscais, conforme periodicidade, formato e sistema estabelecidos pelo órgão central de contabilidade da União, de forma a garantir a rastreabilidade, a comparabilidade e a publicidade dos dados coletados, os quais deverão ser divulgados em meio eletrônico de amplo acesso público. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="artigo">Art. 164.</span> A competência da União para emitir moeda será exercida exclusivamente pelo banco central.</p>

	<p><span class="paragrafo">§ 1º.</span> É vedado ao banco central conceder, direta ou indiretamente, empréstimos ao Tesouro Nacional e a qualquer órgão ou entidade que não seja instituição financeira.</p>

	<p><span class="paragrafo">§ 2º.</span> O banco central poderá comprar e vender títulos de emissão do Tesouro Nacional, com o objetivo de regular a oferta de moeda ou a taxa de juros.</p>

	<p><span class="paragrafo">§ 3º.</span> As disponibilidades de caixa da União serão depositadas no banco central; as dos Estados, do Distrito Federal, dos Municípios e dos órgãos ou entidades do Poder Público e das empresas por ele controladas, em instituições financeiras oficiais, ressalvados os casos previstos em lei.</p>

	<p><span class="artigo" id="164A">Art. 164-A.</span> A União, os Estados, o Distrito Federal e os Municípios devem conduzir suas políticas fiscais de forma a manter a dívida pública em níveis sustentáveis, na forma da lei complementar referida no inciso VIII do caput do art. 163 desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">Parágrafo único.</span> A elaboração e a execução de planos e orçamentos devem refletir a compatibilidade dos indicadores fiscais com a sustentabilidade da dívida. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<h3>Seção II<br>
	Dos Orçamentos</h3>

	<p><span class="artigo">Art. 165.</span> Leis de iniciativa do Poder Executivo estabelecerão:</p>

	<p>I - o plano plurianual;</p>

	<p>II - as diretrizes orçamentárias;</p>

	<p>III - os orçamentos anuais.</p>

	<p><span class="paragrafo">§ 1º.</span> A lei que instituir o plano plurianual estabelecerá, de forma regionalizada, as diretrizes, objetivos e metas da administração pública federal para as despesas de capital e outras delas decorrentes e para as relativas aos programas de duração continuada.</p>

	<p><span class="paragrafo">§ 2º.</span> A lei de diretrizes orçamentárias compreenderá as metas e prioridades da administração pública federal, estabelecerá as diretrizes de política fiscal e respectivas metas, em consonância com trajetória sustentável da dívida pública, orientará a elaboração da lei orçamentária anual, disporá sobre as alterações na legislação tributária e estabelecerá a política de aplicação das agências financeiras oficiais de fomento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 3º.</span> O Poder Executivo publicará, até trinta dias após o encerramento de cada bimestre, relatório resumido da execução orçamentária. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc106.htm">(Vide Emenda constitucional nº 106, de 2020)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Os planos e programas nacionais, regionais e setoriais previstos nesta Constituição serão elaborados em consonância com o plano plurianual e apreciados pelo Congresso Nacional.</p>

	<p><span class="paragrafo">§ 5º.</span> A lei orçamentária anual compreenderá:</p>

	<p>I - o orçamento fiscal referente aos Poderes da União, seus fundos, órgãos e entidades da administração direta e indireta, inclusive fundações instituídas e mantidas pelo Poder Público;</p>

	<p>II - o orçamento de investimento das empresas em que a União, direta ou indiretamente, detenha a maioria do capital social com direito a voto;</p>

	<p>III - o orçamento da seguridade social, abrangendo todas as entidades e órgãos a ela vinculados, da administração direta ou indireta, bem como os fundos e fundações instituídos e mantidos pelo Poder Público.</p>

	<p><span class="paragrafo">§ 6º.</span> O projeto de lei orçamentária será acompanhado de demonstrativo regionalizado do efeito, sobre as receitas e despesas, decorrente de isenções, anistias, remissões, subsídios e benefícios de natureza financeira, tributária e creditícia.</p>

	<p><span class="paragrafo">§ 7º.</span> Os orçamentos previstos no § 5º, I e II, deste artigo, compatibilizados com o plano plurianual, terão entre suas funções a de reduzir desigualdades inter-regionais, segundo critério populacional.</p>

	<p><span class="paragrafo">§ 8º.</span> A lei orçamentária anual não conterá dispositivo estranho à previsão da receita e à fixação da despesa, não se incluindo na proibição a autorização para abertura de créditos suplementares e contratação de operações de crédito, ainda que por antecipação de receita, nos termos da lei.</p>

	<p><span class="paragrafo">§ 9º.</span> Cabe à lei complementar:</p>

	<p>I - dispor sobre o exercício financeiro, a vigência, os prazos, a elaboração e a organização do plano plurianual, da lei de diretrizes orçamentárias e da lei orçamentária anual;</p>

	<p>II - estabelecer normas de gestão financeira e patrimonial da administração direta e indireta bem como condições para a instituição e funcionamento de fundos.</p>

	<p>III - dispor sobre critérios para a execução equitativa, além de procedimentos que serão adotados quando houver impedimentos legais e técnicos, cumprimento de restos a pagar e limitação das programações de caráter obrigatório, para a realização do disposto nos §§ 11 e 12 do art. 166. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p>§ 10. A administração tem o dever de executar as programações orçamentárias, adotando os meios e as medidas necessários, com o propósito de garantir a efetiva entrega de bens e serviços à sociedade. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Incluído pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p>§ 11. O disposto no § 10 deste artigo, nos termos da lei de diretrizes orçamentárias: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art1">(Incluído pela Emenda Constitucional nº 102, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art4">(Produção de efeito)</a></p>

	<p>I - subordina-se ao cumprimento de dispositivos constitucionais e legais que estabeleçam metas fiscais ou limites de despesas e não impede o cancelamento necessário à abertura de créditos adicionais;</p>

	<p>II - não se aplica nos casos de impedimentos de ordem técnica devidamente justificados;</p>

	<p>III - aplica-se exclusivamente às despesas primárias discricionárias.</p>

	<p>§ 12. Integrará a lei de diretrizes orçamentárias, para o exercício a que se refere e, pelo menos, para os 2 (dois) exercícios subsequentes, anexo com previsão de agregados fiscais e a proporção dos recursos para investimentos que serão alocados na lei orçamentária anual para a continuidade daqueles em andamento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art1">(Incluído pela Emenda Constitucional nº 102, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art4">(Produção de efeito)</a></p>

	<p>§ 13. O disposto no inciso III do <span class="paragrafo">§ 9º.</span> e nos §§ 10, 11 e 12 deste artigo aplica-se exclusivamente aos orçamentos fiscal e da seguridade social da União. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art1">(Incluído pela Emenda Constitucional nº 102, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art4">(Produção de efeito)</a></p>

	<p>§ 14. A lei orçamentária anual poderá conter previsões de despesas para exercícios seguintes, com a especificação dos investimentos plurianuais e daqueles em andamento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art1">(Incluído pela Emenda Constitucional nº 102, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art4">(Produção de efeito)</a></p>

	<p>§ 15. A União organizará e manterá registro centralizado de projetos de investimento contendo, por Estado ou Distrito Federal, pelo menos, análises de viabilidade, estimativas de custos e informações sobre a execução física e financeira. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art1">(Incluído pela Emenda Constitucional nº 102, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art4">(Produção de efeito)</a></p>

	<p>§ 16. As leis de que trata este artigo devem observar, no que couber, os resultados do monitoramento e da avaliação das políticas públicas previstos no § 16 do art. 37 desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo">Art. 166.</span> Os projetos de lei relativos ao plano plurianual, às diretrizes orçamentárias, ao orçamento anual e aos créditos adicionais serão apreciados pelas duas Casas do Congresso Nacional, na forma do regimento comum.</p>

	<p><span class="paragrafo">§ 1º.</span> Caberá a uma Comissão mista permanente de Senadores e Deputados:</p>

	<p>I - examinar e emitir parecer sobre os projetos referidos neste artigo e sobre as contas apresentadas anualmente pelo Presidente da República;</p>

	<p>II - examinar e emitir parecer sobre os planos e programas nacionais, regionais e setoriais previstos nesta Constituição e exercer o acompanhamento e a fiscalização orçamentária, sem prejuízo da atuação das demais comissões do Congresso Nacional e de suas Casas, criadas de acordo com o art. 58.</p>

	<p><span class="paragrafo">§ 2º.</span> As emendas serão apresentadas na Comissão mista, que sobre elas emitirá parecer, e apreciadas, na forma regimental, pelo Plenário das duas Casas do Congresso Nacional.</p>

	<p><span class="paragrafo">§ 3º.</span> As emendas ao projeto de lei do orçamento anual ou aos projetos que o modifiquem somente podem ser aprovadas caso:</p>

	<p>I - sejam compatíveis com o plano plurianual e com a lei de diretrizes orçamentárias;</p>

	<p>II - indiquem os recursos necessários, admitidos apenas os provenientes de anulação de despesa, excluídas as que incidam sobre:</p>

	<p class="alinea">a) dotações para pessoal e seus encargos;</p>

	<p class="alinea">b) serviço da dívida;</p>

	<p class="alinea">c) transferências tributárias constitucionais para Estados, Municípios e Distrito Federal; ou</p>

	<p>III - sejam relacionadas:</p>

	<p class="alinea">a) com a correção de erros ou omissões; ou</p>

	<p class="alinea">b) com os dispositivos do texto do projeto de lei.</p>

	<p><span class="paragrafo">§ 4º.</span> As emendas ao projeto de lei de diretrizes orçamentárias não poderão ser aprovadas quando incompatíveis com o plano plurianual.</p>

	<p><span class="paragrafo">§ 5º.</span> O Presidente da República poderá enviar mensagem ao Congresso Nacional para propor modificação nos projetos a que se refere este artigo enquanto não iniciada a votação, na Comissão mista, da parte cuja alteração é proposta.</p>

	<p><span class="paragrafo">§ 6º.</span> Os projetos de lei do plano plurianual, das diretrizes orçamentárias e do orçamento anual serão enviados pelo Presidente da República ao Congresso Nacional, nos termos da lei complementar a que se refere o art. 165, <span class="paragrafo">§ 9º.</span></p><p></p>

	<p><span class="paragrafo">§ 7º.</span> Aplicam-se aos projetos mencionados neste artigo, no que não contrariar o disposto nesta seção, as demais normas relativas ao processo legislativo.</p>

	<p><span class="paragrafo">§ 8º.</span> Os recursos que, em decorrência de veto, emenda ou rejeição do projeto de lei orçamentária anual, ficarem sem despesas correspondentes poderão ser utilizados, conforme o caso, mediante créditos especiais ou suplementares, com prévia e específica autorização legislativa.</p>

	<p><span class="paragrafo">§ 9º.</span> As emendas individuais ao projeto de lei orçamentária serão aprovadas no limite de 2% (dois por cento) da receita corrente líquida do exercício anterior ao do encaminhamento do projeto, observado que a metade desse percentual será destinada a ações e serviços públicos de saúde.</p>

	<ul class="dica">
		<li>Parágrafo com redação dada pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="paragrafo">§ 9º-A</span> Do limite a que se refere o § 9º deste artigo, 1,55% (um inteiro e cinquenta e cinco centésimos por cento) caberá às emendas de Deputados e 0,45% (quarenta e cinco centésimos por cento) às de Senadores.</p>

	<ul class="dica">
		<li>Parágrafo acrescido pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="paragrafo">§ 10.</span> A execução do montante destinado a ações e serviços públicos de saúde previsto no § 9º, inclusive custeio, será computada para fins do cumprimento do inciso I do <span class="paragrafo">§ 2º.</span> do art. 198, vedada a destinação para pagamento de pessoal ou encargos sociais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc86.htm#art1">(Incluído pela Emenda Constitucional nº 86, de 2015)</a></p>

	<p><span class="paragrafo">§ 11.</span> É obrigatória a execução orçamentária e financeira das programações oriundas de emendas individuais, em montante correspondente ao limite a que se refere o § 9º deste artigo, conforme os critérios para a execução equitativa da programação definidos na lei complementar prevista no § 9º do art. 165 desta Constituição, observado o disposto no § 9º-A deste artigo.</p>

	<ul class="dica">
		<li>Parágrafo com redação dada pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="paragrafo">§ 12.</span> A garantia de execução de que trata o § 11 deste artigo aplica-se também às programações incluídas por todas as emendas de iniciativa de bancada de parlamentares de Estado ou do Distrito Federal, no montante de até 1% (um por cento) da receita corrente líquida realizada no exercício anterior. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art2">(Vide)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art3">(Vide)</a></p>

	<p><span class="paragrafo">§ 13.</span> As programações orçamentárias previstas nos §§ 11 e 12 deste artigo não serão de execução obrigatória nos casos dos impedimentos de ordem técnica. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p><span class="paragrafo">§ 14.</span> Para fins de cumprimento do disposto nos §§ 11 e 12 deste artigo, os órgãos de execução deverão observar, nos termos da lei de diretrizes orçamentárias, cronograma para análise e verificação de eventuais impedimentos das programações e demais procedimentos necessários à viabilização da execução dos respectivos montantes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p>I - (revogado); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p>II - (revogado); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p>III - (revogado); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p>IV - (revogado). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p><span class="paragrafo">§ 15.</span> (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p><span class="paragrafo">§ 16.</span> Quando a transferência obrigatória da União para a execução da programação prevista nos §§ 11 e 12 deste artigo for destinada a Estados, ao Distrito Federal e a Municípios, independerá da adimplência do ente federativo destinatário e não integrará a base de cálculo da receita corrente líquida para fins de aplicação dos limites de despesa de pessoal de que trata o caput do art. 169. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p><span class="paragrafo">§ 17.</span> Os restos a pagar provenientes das programações orçamentárias previstas nos §§ 11 e 12 deste artigo poderão ser considerados para fins de cumprimento da execução financeira até o limite de 1% (um por cento) da receita corrente líquida do exercício anterior ao do encaminhamento do projeto de lei orçamentária, para as programações das emendas individuais, e até o limite de 0,5% (cinco décimos por cento), para as programações das emendas de iniciativa de bancada de parlamentares de Estado ou do Distrito Federal.</p>

	<ul class="dica">
		<li>Parágrafo com redação dada pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p>§ 18. Se for verificado que a reestimativa da receita e da despesa poderá resultar no não cumprimento da meta de resultado fiscal estabelecida na lei de diretrizes orçamentárias, os montantes previstos nos §§ 11 e 12 deste artigo poderão ser reduzidos em até a mesma proporção da limitação incidente sobre o conjunto das demais despesas discricionárias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Redação dada pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p>§ 19. Considera-se equitativa a execução das programações de caráter obrigatório que observe critérios objetivos e imparciais e que atenda de forma igualitária e impessoal às emendas apresentadas, independentemente da autoria, observado o disposto no § 9º-A deste artigo.</p>

	<ul class="dica">
		<li>Parágrafo com redação dada pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p>§ 20. As programações de que trata o § 12 deste artigo, quando versarem sobre o início de investimentos com duração de mais de 1 (um) exercício financeiro ou cuja execução já tenha sido iniciada, deverão ser objeto de emenda pela mesma bancada estadual, a cada exercício, até a conclusão da obra ou do empreendimento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc100.htm#art1">(Incluído pela Emenda Constitucional nº 100, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art4">(Produção de efeito)</a></p>

	<p id="166a"><span class="artigo" id="166A">Art. 166-A.</span> As emendas individuais impositivas apresentadas ao projeto de lei orçamentária anual poderão alocar recursos a Estados, ao Distrito Federal e a Municípios por meio de: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p>I - transferência especial; ou <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p>II - transferência com finalidade definida. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os recursos transferidos na forma do caput deste artigo não integrarão a receita do Estado, do Distrito Federal e dos Municípios para fins de repartição e para o cálculo dos limites da despesa com pessoal ativo e inativo, nos termos do § 16 do art. 166, e de endividamento do ente federado, vedada, em qualquer caso, a aplicação dos recursos a que se refere o caput deste artigo no pagamento de: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p>I - despesas com pessoal e encargos sociais relativas a ativos e inativos, e com pensionistas; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p>II - encargos referentes ao serviço da dívida. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Na transferência especial a que se refere o inciso I do caput deste artigo, os recursos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p>I - serão repassados diretamente ao ente federado beneficiado, independentemente de celebração de convênio ou de instrumento congênere; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p>II - pertencerão ao ente federado no ato da efetiva transferência financeira; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p>III - serão aplicadas em programações finalísticas das áreas de competência do Poder Executivo do ente federado beneficiado, observado o disposto no <span class="paragrafo">§ 5º.</span> deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O ente federado beneficiado da transferência especial a que se refere o inciso I do caput deste artigo poderá firmar contratos de cooperação técnica para fins de subsidiar o acompanhamento da execução orçamentária na aplicação dos recursos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Na transferência com finalidade definida a que se refere o inciso II do caput deste artigo, os recursos serão: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p>I - vinculados à programação estabelecida na emenda parlamentar; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p>II - aplicados nas áreas de competência constitucional da União. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Pelo menos 70% (setenta por cento) das transferências especiais de que trata o inciso I do caput deste artigo deverão ser aplicadas em despesas de capital, observada a restrição a que se refere o inciso II do § 1º deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc105.htm#art1">(Incluído pela Emenda Constitucional nº 105, de 2019)</a></p>

	<p><span class="artigo">Art. 167.</span> São vedados:</p>

	<p>I - o início de programas ou projetos não incluídos na lei orçamentária anual;</p>

	<p>II - a realização de despesas ou a assunção de obrigações diretas que excedam os créditos orçamentários ou adicionais;</p>

	<p>III - a realização de operações de créditos que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante créditos suplementares ou especiais com finalidade precisa, aprovados pelo Poder Legislativo por maioria absoluta; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc106.htm">(Vide Emenda constitucional nº 106, de 2020)</a></p>

	<p>IV - a vinculação de receita de impostos a órgão, fundo ou despesa, ressalvadas a repartição do produto da arrecadação dos impostos a que se referem os arts. 158 e 159, a destinação de recursos para as ações e serviços públicos de saúde, para manutenção e desenvolvimento do ensino e para realização de atividades da administração tributária, como determinado, respectivamente, pelos arts. 198, § 2º, 212 e 37, XXII, e a prestação de garantias às operações de crédito por antecipação de receita, previstas no art. 165, § 8º, bem como o disposto no § 4º deste artigo; </p>

	<ul class="dica">
		<li><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">Redação dada pela Emenda Constitucional nº 42, de 19.12.2003</a></li>
	</ul>

	<p>V - a abertura de crédito suplementar ou especial sem prévia autorização legislativa e sem indicação dos recursos correspondentes;</p>

	<p>VI - a transposição, o remanejamento ou a transferência de recursos de uma categoria de programação para outra ou de um órgão para outro, sem prévia autorização legislativa;</p>

	<p>VII - a concessão ou utilização de créditos ilimitados;</p>

	<p>VIII - a utilização, sem autorização legislativa específica, de recursos dos orçamentos fiscal e da seguridade social para suprir necessidade ou cobrir déficit de empresas, fundações e fundos, inclusive dos mencionados no art. 165, § 5º;</p>

	<p>IX - a instituição de fundos de qualquer natureza, sem prévia autorização legislativa.</p>

	<p>X - a transferência voluntária de recursos e a concessão de empréstimos, inclusive por antecipação de receita, pelos Governos Federal e Estaduais e suas instituições financeiras, para pagamento de despesas com pessoal ativo, inativo e pensionista, dos Estados, do Distrito Federal e dos Municípios.</p>

	<ul class="dica">
		<li><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art20">Incluído pela Emenda Constitucional nº 19, de 1998</a></li>
	</ul>

	<p>XI - a utilização dos recursos provenientes das contribuições sociais de que trata o art. 195, I, a, e II, para a realização de despesas distintas do pagamento de benefícios do regime geral de previdência social de que trata o art. 201. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art167xi">(Incluído pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>XII - na forma estabelecida na lei complementar de que trata o § 22 do art. 40, a utilização de recursos de regime próprio de previdência social, incluídos os valores integrantes dos fundos previstos no art. 249, para a realização de despesas distintas do pagamento dos benefícios previdenciários do respectivo fundo vinculado àquele regime e das despesas necessárias à sua organização e ao seu funcionamento; </p>

	<ul class="dica">
		<li><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">Incisos XII e XIII incluídos pela Emenda Constitucional nº 103, de 2019)</a></li>
	</ul>

	<p>XIII - a transferência voluntária de recursos, a concessão de avais, as garantias e as subvenções pela União e a concessão de empréstimos e de financiamentos por instituições financeiras federais aos Estados, ao Distrito Federal e aos Municípios na hipótese de descumprimento das regras gerais de organização e de funcionamento de regime próprio de previdência social.</p>

	<p>XIV - a criação de fundo público, quando seus objetivos puderem ser alcançados mediante a vinculação de receitas orçamentárias específicas ou mediante a execução direta por programação orçamentária e financeira de órgão ou entidade da administração pública.</p>

	<ul class="dica">
		<li><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">Inciso incluído pela Emenda Constitucional nº 109, de 2021.</a></li>
	</ul>

	<p><span class="paragrafo">§ 1º.</span> Nenhum investimento cuja execução ultrapasse um exercício financeiro poderá ser iniciado sem prévia inclusão no plano plurianual, ou sem lei que autorize a inclusão, sob pena de crime de responsabilidade.</p>

	<p><span class="paragrafo">§ 2º.</span> Os créditos especiais e extraordinários terão vigência no exercício financeiro em que forem autorizados, salvo se o ato de autorização for promulgado nos últimos quatro meses daquele exercício, caso em que, reabertos nos limites de seus saldos, serão incorporados ao orçamento do exercício financeiro subsequente.</p>

	<p id="art167p3"><span class="paragrafo">§ 3º.</span> A abertura de crédito extraordinário somente será admitida para atender a despesas imprevisíveis e urgentes, como as decorrentes de guerra, comoção interna ou calamidade pública, observado o disposto no art. 62.</p>

	<p><span class="paragrafo">§ 4º.</span> É permitida a vinculação das receitas a que se referem os arts. 155, 156, 157, 158 e as alíneas "a", "b", "d" e "e" do inciso I e o inciso II do caput do art. 159 desta Constituição para pagamento de débitos com a União e para prestar-lhe garantia ou contragarantia.</p>

	<ul class="dica">
		<li><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">Redação dada pela Emenda Constitucional nº 109, de 2021</a></li>
	</ul>

	<p><span class="paragrafo">§ 5º.</span> A transposição, o remanejamento ou a transferência de recursos de uma categoria de programação para outra poderão ser admitidos, no âmbito das atividades de ciência, tecnologia e inovação, com o objetivo de viabilizar os resultados de projetos restritos a essas funções, mediante ato do Poder Executivo, sem necessidade da prévia autorização legislativa prevista no inciso VI deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Incluído pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Para fins da apuração ao término do exercício financeiro do cumprimento do limite de que trata o inciso III do caput deste artigo, as receitas das operações de crédito efetuadas no contexto da gestão da dívida pública mobiliária federal somente serão consideradas no exercício financeiro em que for realizada a respectiva despesa. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 7º.</span> A lei não imporá nem transferirá qualquer encargo financeiro decorrente da prestação de serviço público, inclusive despesas de pessoal e seus encargos, para a União, os Estados, o Distrito Federal ou os Municípios, sem a previsão de fonte orçamentária e financeira necessária à realização da despesa ou sem a previsão da correspondente transferência de recursos financeiros necessários ao seu custeio, ressalvadas as obrigações assumidas espontaneamente pelos entes federados e aquelas decorrentes da fixação do salário mínimo, na forma do inciso IV do caput do art. 7º desta Constituição.</p>

	<ul class="dica">
		<li>Parágrafo acrescido pela Emenda Constitucional nº 128, de 22 de dezembro de 2022.</li>
	</ul>

	<p><span class="artigo" id="167A">Art. 167-A.</span> Apurado que, no período de 12 (doze) meses, a relação entre despesas correntes e receitas correntes supera 95% (noventa e cinco por cento), no âmbito dos Estados, do Distrito Federal e dos Municípios, é facultado aos Poderes Executivo, Legislativo e Judiciário, ao Ministério Público, ao Tribunal de Contas e à Defensoria Pública do ente, enquanto permanecer a situação, aplicar o mecanismo de ajuste fiscal de vedação da: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - concessão, a qualquer título, de vantagem, aumento, reajuste ou adequação de remuneração de membros de Poder ou de órgão, de servidores e empregados públicos e de militares, exceto dos derivados de sentença judicial transitada em julgado ou de determinação legal anterior ao início da aplicação das medidas de que trata este artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>II - criação de cargo, emprego ou função que implique aumento de despesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>III - alteração de estrutura de carreira que implique aumento de despesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>IV - admissão ou contratação de pessoal, a qualquer título, ressalvadas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">a) as reposições de cargos de chefia e de direção que não acarretem aumento de despesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">b) as reposições decorrentes de vacâncias de cargos efetivos ou vitalícios; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">c) as contratações temporárias de que trata o inciso IX do caput do art. 37 desta Constituição; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">d) as reposições de temporários para prestação de serviço militar e de alunos de órgãos de formação de militares; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>V - realização de concurso público, exceto para as reposições de vacâncias previstas no inciso IV deste caput; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>VI - criação ou majoração de auxílios, vantagens, bônus, abonos, verbas de representação ou benefícios de qualquer natureza, inclusive os de cunho indenizatório, em favor de membros de Poder, do Ministério Público ou da Defensoria Pública e de servidores e empregados públicos e de militares, ou ainda de seus dependentes, exceto quando derivados de sentença judicial transitada em julgado ou de determinação legal anterior ao início da aplicação das medidas de que trata este artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>VII - criação de despesa obrigatória; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>VIII - adoção de medida que implique reajuste de despesa obrigatória acima da variação da inflação, observada a preservação do poder aquisitivo referida no inciso IV do caput do art. 7º. desta Constituição; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>IX - criação ou expansão de programas e linhas de financiamento, bem como remissão, renegociação ou refinanciamento de dívidas que impliquem ampliação das despesas com subsídios e subvenções; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>X - concessão ou ampliação de incentivo ou benefício de natureza tributária. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 1º.</span> Apurado que a despesa corrente supera 85% (oitenta e cinco por cento) da receita corrente, sem exceder o percentual mencionado no caput deste artigo, as medidas nele indicadas podem ser, no todo ou em parte, implementadas por atos do Chefe do Poder Executivo com vigência imediata, facultado aos demais Poderes e órgãos autônomos implementá-las em seus respectivos âmbitos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 2º.</span> O ato de que trata o <span class="paragrafo">§ 1º.</span> deste artigo deve ser submetido, em regime de urgência, à apreciação do Poder Legislativo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 3º.</span> O ato perde a eficácia, reconhecida a validade dos atos praticados na sua vigência, quando: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - rejeitado pelo Poder Legislativo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>II - transcorrido o prazo de 180 (cento e oitenta) dias sem que se ultime a sua apreciação; ou <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>III - apurado que não mais se verifica a hipótese prevista no <span class="paragrafo">§ 1º.</span> deste artigo, mesmo após a sua aprovação pelo Poder Legislativo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 4º.</span> A apuração referida neste artigo deve ser realizada bimestralmente. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 5º.</span> As disposições de que trata este artigo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - não constituem obrigação de pagamento futuro pelo ente da Federação ou direitos de outrem sobre o erário; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>II - não revogam, dispensam ou suspendem o cumprimento de dispositivos constitucionais e legais que disponham sobre metas fiscais ou limites máximos de despesas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 6º.</span> Ocorrendo a hipótese de que trata o caput deste artigo, até que todas as medidas nele previstas tenham sido adotadas por todos os Poderes e órgãos nele mencionados, de acordo com declaração do respectivo Tribunal de Contas, é vedada: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - a concessão, por qualquer outro ente da Federação, de garantias ao ente envolvido; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>II - a tomada de operação de crédito por parte do ente envolvido com outro ente da Federação, diretamente ou por intermédio de seus fundos, autarquias, fundações ou empresas estatais dependentes, ainda que sob a forma de novação, refinanciamento ou postergação de dívida contraída anteriormente, ressalvados os financiamentos destinados a projetos específicos celebrados na forma de operações típicas das agências financeiras oficiais de fomento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo" id="167B">Art. 167-B.</span> Durante a vigência de estado de calamidade pública de âmbito nacional, decretado pelo Congresso Nacional por iniciativa privativa do Presidente da República, a União deve adotar regime extraordinário fiscal, financeiro e de contratações para atender às necessidades dele decorrentes, somente naquilo em que a urgência for incompatível com o regime regular, nos termos definidos nos arts. 167-C, 167-D, 167-e, 167-F e 167-G desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo" id="167C">Art. 167-C.</span> Com o propósito exclusivo de enfrentamento da calamidade pública e de seus efeitos sociais e econômicos, no seu período de duração, o Poder Executivo federal pode adotar processos simplificados de contratação de pessoal, em caráter temporário e emergencial, e de obras, serviços e compras que assegurem, quando possível, competição e igualdade de condições a todos os concorrentes, dispensada a observância do <span class="paragrafo">§ 1º.</span> do art. 169 na contratação de que trata o inciso IX do caput do art. 37 desta Constituição, limitada a dispensa às situações de que trata o referido inciso, sem prejuízo do controle dos órgãos competentes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo" id="167D">Art. 167-D.</span> As proposições legislativas e os atos do Poder Executivo com propósito exclusivo de enfrentar a calamidade e suas consequências sociais e econômicas, com vigência e efeitos restritos à sua duração, desde que não impliquem despesa obrigatória de caráter continuado, ficam dispensados da observância das limitações legais quanto à criação, à expansão ou ao aperfeiçoamento de ação governamental que acarrete aumento de despesa e à concessão ou à ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Durante a vigência da calamidade pública de âmbito nacional de que trata o art. 167-B, não se aplica o disposto no <span class="paragrafo">§ 3º.</span> do art. 195 desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo" id="167e">Art. 167-e.</span> Fica dispensada, durante a integralidade do exercício financeiro em que vigore a calamidade pública de âmbito nacional, a observância do inciso III do caput do art. 167 desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo" id="167F">Art. 167-F.</span> Durante a vigência da calamidade pública de âmbito nacional de que trata o art. 167-B desta Constituição: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - são dispensados, durante a integralidade do exercício financeiro em que vigore a calamidade pública, os limites, as condições e demais restrições aplicáveis à União para a contratação de operações de crédito, bem como sua verificação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>II - o superávit financeiro apurado em 31 de dezembro do ano imediatamente anterior ao reconhecimento pode ser destinado à cobertura de despesas oriundas das medidas de combate à calamidade pública de âmbito nacional e ao pagamento da dívida pública. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 1º.</span> Lei complementar pode definir outras suspensões, dispensas e afastamentos aplicáveis durante a vigência do estado de calamidade pública de âmbito nacional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 2º.</span> O disposto no inciso II do caput deste artigo não se aplica às fontes de recursos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - decorrentes de repartição de receitas a Estados, ao Distrito Federal e a Municípios; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>II - decorrentes das vinculações estabelecidas pelos arts. 195, 198, 201, 212, 212-A e 239 desta Constituição; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>III - destinadas ao registro de receitas oriundas da arrecadação de doações ou de empréstimos compulsórios, de transferências recebidas para o atendimento de finalidades determinadas ou das receitas de capital produto de operações de financiamento celebradas com finalidades contratualmente determinadas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo" id="167G">Art. 167-G.</span> Na hipótese de que trata o art. 167-B, aplicam-se à União, até o término da calamidade pública, as vedações previstas no art. 167-A desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 1º.</span> Na hipótese de medidas de combate à calamidade pública cuja vigência e efeitos não ultrapassem a sua duração, não se aplicam as vedações referidas nos incisos II, IV, VII, IX e X do caput do art. 167-A desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 2º.</span> Na hipótese de que trata o art. 167-B, não se aplica a alínea "c" do inciso I do caput do art. 159 desta Constituição, devendo a transferência a que se refere aquele dispositivo ser efetuada nos mesmos montantes transferidos no exercício anterior à decretação da calamidade. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 3º.</span> É facultada aos Estados, ao Distrito Federal e aos Municípios a aplicação das vedações referidas no caput, nos termos deste artigo, e, até que as tenham adotado na integralidade, estarão submetidos às restrições do <span class="paragrafo">§ 6º.</span> do art. 167-A desta Constituição, enquanto perdurarem seus efeitos para a União. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo">Art. 168.</span> Os recursos correspondentes às dotações orçamentárias, compreendidos os créditos suplementares e especiais, destinados aos órgãos dos Poderes Legislativo e Judiciário, do Ministério Público e da Defensoria Pública, ser-lhes-ão entregues até o dia 20 de cada mês, em duodécimos, na forma da lei complementar a que se refere o art. 165, <span class="paragrafo">§ 9º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc45.htm#art134">(Redação dada pela Emenda Constitucional nº 45, de 2004)</a></p>

	<p><span class="paragrafo">§ 1º.</span> É vedada a transferência a fundos de recursos financeiros oriundos de repasses duodecimais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 2º.</span> O saldo financeiro decorrente dos recursos entregues na forma do caput deste artigo deve ser restituído ao caixa único do Tesouro do ente federativo, ou terá seu valor deduzido das primeiras parcelas duodecimais do exercício seguinte. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="artigo">Art. 169.</span> A despesa com pessoal ativo e inativo e pensionistas da União, dos Estados, do Distrito Federal e dos Municípios não pode exceder os limites estabelecidos em lei complementar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art1">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 1º.</span> A concessão de qualquer vantagem ou aumento de remuneração, a criação de cargos, empregos e funções ou alteração de estrutura de carreiras, bem como a admissão ou contratação de pessoal, a qualquer título, pelos órgãos e entidades da administração direta ou indireta, inclusive fundações instituídas e mantidas pelo poder público, só poderão ser feitas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Renumerado do parágrafo único, pela Emenda Constitucional nº 19, de 1998)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc106.htm">(Vide Emenda constitucional nº 106, de 2020)</a></p>

	<p>I - se houver prévia dotação orçamentária suficiente para atender às projeções de despesa de pessoal e aos acréscimos dela decorrentes; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>II - se houver autorização específica na lei de diretrizes orçamentárias, ressalvadas as empresas públicas e as sociedades de economia mista. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Decorrido o prazo estabelecido na lei complementar referida neste artigo para a adaptação aos parâmetros ali previstos, serão imediatamente suspensos todos os repasses de verbas federais ou estaduais aos Estados, ao Distrito Federal e aos Municípios que não observarem os referidos limites. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Para o cumprimento dos limites estabelecidos com base neste artigo, durante o prazo fixado na lei complementar referida no caput, a União, os Estados, o Distrito Federal e os Municípios adotarão as seguintes providências: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>I - redução em pelo menos vinte por cento das despesas com cargos em comissão e funções de confiança; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>II - exoneração dos servidores não estáveis. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art33">(Vide Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Se as medidas adotadas com base no parágrafo anterior não forem suficientes para assegurar o cumprimento da determinação da lei complementar referida neste artigo, o servidor estável poderá perder o cargo, desde que ato normativo motivado de cada um dos Poderes especifique a atividade funcional, o órgão ou unidade administrativa objeto da redução de pessoal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 5º.</span> O servidor que perder o cargo na forma do parágrafo anterior fará jus a indenização correspondente a um mês de remuneração por ano de serviço. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 6º.</span> O cargo objeto da redução prevista nos parágrafos anteriores será considerado extinto, vedada a criação de cargo, emprego ou função com atribuições iguais ou assemelhadas pelo prazo de quatro anos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 7º.</span> Lei federal disporá sobre as normas gerais a serem obedecidas na efetivação do disposto no <span class="paragrafo">§ 4º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art21">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<h1>TÍTULO VII<br>
	Da Ordem Econômica e Financeira</h1>

	<h2 class="sum2">CAPÍTULO I<br>
	Dos Princípios Gerais da Atividade Econômica</h2>

	<p><span class="artigo">Art. 170.</span> A ordem econômica, fundada na valorização do trabalho humano e na livre iniciativa, tem por fim assegurar a todos existência digna, conforme os ditames da justiça social, observados os seguintes princípios:</p>

	<p>I - soberania nacional;</p>

	<p>II - propriedade privada;</p>

	<p>III - função social da propriedade;</p>

	<p>IV - livre concorrência;</p>

	<p>V - defesa do consumidor;</p>

	<p>VI - defesa do meio ambiente, inclusive mediante tratamento diferenciado conforme o impacto ambiental dos produtos e serviços e de seus processos de elaboração e prestação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Redação dada pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>VII - redução das desigualdades regionais e sociais;</p>

	<p>VIII - busca do pleno emprego;</p>

	<p>IX - tratamento favorecido para as empresas de pequeno porte constituídas sob as leis brasileiras e que tenham sua sede e administração no País. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc06.htm#art1">(Redação dada pela Emenda Constitucional nº 6, de 1995)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> É assegurado a todos o livre exercício de qualquer atividade econômica, independentemente de autorização de órgãos públicos, salvo nos casos previstos em lei. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13874.htm#art1">(Vide Lei nº 13.874, de 2019) </a></p>

	<p><span class="artigo">Art. 171.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc06.htm#art3">(Revogado pela Emenda Constitucional nº 6, de 1995)</a></p>

	<p><span class="artigo">Art. 172.</span> A lei disciplinará, com base no interesse nacional, os investimentos de capital estrangeiro, incentivará os reinvestimentos e regulará a remessa de lucros.</p>

	<p><span class="artigo">Art. 173.</span> Ressalvados os casos previstos nesta Constituição, a exploração direta de atividade econômica pelo Estado só será permitida quando necessária aos imperativos da segurança nacional ou a relevante interesse coletivo, conforme definidos em lei.</p>

	<p><span class="paragrafo">§ 1º.</span> A lei estabelecerá o estatuto jurídico da empresa pública, da sociedade de economia mista e de suas subsidiárias que explorem atividade econômica de produção ou comercialização de bens ou de prestação de serviços, dispondo sobre: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art22">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>I - sua função social e formas de fiscalização pelo Estado e pela sociedade; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art22">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>II - a sujeição ao regime jurídico próprio das empresas privadas, inclusive quanto aos direitos e obrigações civis, comerciais, trabalhistas e tributários; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art22">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>III - licitação e contratação de obras, serviços, compras e alienações, observados os princípios da administração pública; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art22">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>IV - a constituição e o funcionamento dos conselhos de administração e fiscal, com a participação de acionistas minoritários; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art22">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p>V - os mandatos, a avaliação de desempenho e a responsabilidade dos administradores. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art22">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">§ 2º.</span> As empresas públicas e as sociedades de economia mista não poderão gozar de privilégios fiscais não extensivos às do setor privado.</p>

	<p><span class="paragrafo">§ 3º.</span> A lei regulamentará as relações da empresa pública com o Estado e a sociedade.</p>

	<p><span class="paragrafo">§ 4º.</span> - lei reprimirá o abuso do poder econômico que vise à dominação dos mercados, à eliminação da concorrência e ao aumento arbitrário dos lucros.</p>

	<p><span class="paragrafo">§ 5º.</span> A lei, sem prejuízo da responsabilidade individual dos dirigentes da pessoa jurídica, estabelecerá a responsabilidade desta, sujeitando-a às punições compatíveis com sua natureza, nos atos praticados contra a ordem econômica e financeira e contra a economia popular.</p>

	<p><span class="artigo">Art. 174.</span> Como agente normativo e regulador da atividade econômica, o Estado exercerá, na forma da lei, as funções de fiscalização, incentivo e planejamento, sendo este determinante para o setor público e indicativo para o setor privado. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2019/Lei/L13874.htm#art1">(Vide Lei nº 13.874, de 2019) </a></p>

	<p><span class="paragrafo">§ 1º.</span> A lei estabelecerá as diretrizes e bases do planejamento do desenvolvimento nacional equilibrado, o qual incorporará e compatibilizará os planos nacionais e regionais de desenvolvimento.</p>

	<p><span class="paragrafo">§ 2º.</span> A lei apoiará e estimulará o cooperativismo e outras formas de associativismo.</p>

	<p><span class="paragrafo">§ 3º.</span> O Estado favorecerá a organização da atividade garimpeira em cooperativas, levando em conta a proteção do meio ambiente e a promoção econômico-social dos garimpeiros.</p>

	<p><span class="paragrafo">§ 4º.</span> As cooperativas a que se refere o parágrafo anterior terão prioridade na autorização ou concessão para pesquisa e lavra dos recursos e jazidas de minerais garimpáveis, nas áreas onde estejam atuando, e naquelas fixadas de acordo com o art. 21, XXV, na forma da lei.</p>

	<p><span class="artigo">Art. 175.</span> Incumbe ao Poder Público, na forma da lei, diretamente ou sob regime de concessão ou permissão, sempre através de licitação, a prestação de serviços públicos.</p>

	<p><span class="paragrafo">Parágrafo único.</span> A lei disporá sobre:</p>

	<p>I - o regime das empresas concessionárias e permissionárias de serviços públicos, o caráter especial de seu contrato e de sua prorrogação, bem como as condições de caducidade, fiscalização e rescisão da concessão ou permissão;</p>

	<p>II - os direitos dos usuários;</p>

	<p>III - política tarifária;</p>

	<p>IV - a obrigação de manter serviço adequado.</p>

	<p><span class="artigo">Art. 176.</span> As jazidas, em lavra ou não, e demais recursos minerais e os potenciais de energia hidráulica constituem propriedade distinta da do solo, para efeito de exploração ou aproveitamento, e pertencem à União, garantida ao concessionário a propriedade do produto da lavra.</p>

	<p><span class="paragrafo">§ 1º.</span> A pesquisa e a lavra de recursos minerais e o aproveitamento dos potenciais a que se refere o "caput" deste artigo somente poderão ser efetuados mediante autorização ou concessão da União, no interesse nacional, por brasileiros ou empresa constituída sob as leis brasileiras e que tenha sua sede e administração no País, na forma da lei, que estabelecerá as condições específicas quando essas atividades se desenvolverem em faixa de fronteira ou terras indígenas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc06.htm#art1">(Redação dada pela Emenda Constitucional nº 6, de 1995)</a></p>

	<p><span class="paragrafo">§ 2º.</span> - É assegurada participação ao proprietário do solo nos resultados da lavra, na forma e no valor que dispuser a lei.</p>

	<p><span class="paragrafo">§ 3º.</span> A autorização de pesquisa será sempre por prazo determinado, e as autorizações e concessões previstas neste artigo não poderão ser cedidas ou transferidas, total ou parcialmente, sem prévia anuência do poder concedente.</p>

	<p><span class="paragrafo">§ 4º.</span> Não dependerá de autorização ou concessão o aproveitamento do potencial de energia renovável de capacidade reduzida.</p>

	<p><span class="artigo">Art. 177.</span> Constituem monopólio da União:</p>

	<p>I - a pesquisa e a lavra das jazidas de petróleo e gás natural e outros hidrocarbonetos fluidos; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc09.htm#art3">(Vide Emenda Constitucional nº 9, de 1995) </a></p>

	<p>II - a refinação do petróleo nacional ou estrangeiro;</p>

	<p>III - a importação e exportação dos produtos e derivados básicos resultantes das atividades previstas nos incisos anteriores;</p>

	<p>IV - o transporte marítimo do petróleo bruto de origem nacional ou de derivados básicos de petróleo produzidos no País, bem assim o transporte, por meio de conduto, de petróleo bruto, seus derivados e gás natural de qualquer origem;</p>

	<p>V - a pesquisa, a lavra, o enriquecimento, o reprocessamento, a industrialização e o comércio de minérios e minerais nucleares e seus derivados, com exceção dos radioisótopos cuja produção, comercialização e utilização poderão ser autorizadas sob regime de permissão, conforme as alíneas b e c do inciso XXIII do caput do art. 21 desta Constituição Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc49.htm#art2">(Redação dada pela Emenda Constitucional nº 49, de 2006)</a></p>

	<p><span class="paragrafo">§ 1º.</span> A União poderá contratar com empresas estatais ou privadas a realização das atividades previstas nos incisos I a IV deste artigo observadas as condições estabelecidas em lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc09.htm#art1">(Redação dada pela Emenda Constitucional nº 9, de 1995)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc09.htm#art3">(Vide Emenda Constitucional nº 9, de 1995) </a></p>

	<p><span class="paragrafo">§ 2º.</span> A lei a que se refere o <span class="paragrafo">§ 1º.</span> disporá sobre: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc09.htm#art2">(Incluído pela Emenda Constitucional nº 9, de 1995)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc09.htm#art3">(Vide Emenda Constitucional nº 9, de 1995) </a></p>

	<p>I - a garantia do fornecimento dos derivados de petróleo em todo o território nacional; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc09.htm#art2">(Incluído pela Emenda Constitucional nº 9, de 1995)</a></p>

	<p>II - as condições de contratação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc09.htm#art2">(Incluído pela Emenda Constitucional nº 9, de 1995)</a></p>

	<p>III - a estrutura e atribuições do órgão regulador do monopólio da União; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc09.htm#art2">(Incluído pela Emenda Constitucional nº 9, de 1995)</a></p>

	<p><span class="paragrafo">§ 3º.</span> A lei disporá sobre o transporte e a utilização de materiais radioativos no território nacional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc09.htm#art2">(Renumerado de <span class="paragrafo">§ 2º.</span> para 3º. pela Emenda Constitucional nº 9, de 1995)</a></p>

	<p><span class="paragrafo">§ 4º.</span> A lei que instituir contribuição de intervenção no domínio econômico relativa às atividades de importação ou comercialização de petróleo e seus derivados, gás natural e seus derivados e álcool combustível deverá atender aos seguintes requisitos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art3">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p>I - a alíquota da contribuição poderá ser: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art3">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">a) diferenciada por produto ou uso; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art3">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">b)reduzida e restabelecida por ato do Poder Executivo, não se lhe aplicando o disposto no art. 150,III, b; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art3">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p>II - os recursos arrecadados serão destinados: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art3">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">a) ao pagamento de subsídios a preços ou transporte de álcool combustível, gás natural e seus derivados e derivados de petróleo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art3">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">b) ao financiamento de projetos ambientais relacionados com a indústria do petróleo e do gás; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art3">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p class="alinea">c) ao financiamento de programas de infraestrutura de transportes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc33.htm#art3">(Incluído pela Emenda Constitucional nº 33, de 2001)</a></p>

	<p><span class="artigo">Art. 178.</span> A lei disporá sobre a ordenação dos transportes aéreo, aquático e terrestre, devendo, quanto à ordenação do transporte internacional, observar os acordos firmados pela União, atendido o princípio da reciprocidade. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc07.htm#art1">(Redação dada pela Emenda Constitucional nº 7, de 1995)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Na ordenação do transporte aquático, a lei estabelecerá as condições em que o transporte de mercadorias na cabotagem e a navegação interior poderão ser feitos por embarcações estrangeiras. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc07.htm#art1">(Incluído pela Emenda Constitucional nº 7, de 1995)</a></p>

	<p><span class="artigo">Art. 179.</span> A União, os Estados, o Distrito Federal e os Municípios dispensarão às microempresas e às empresas de pequeno porte, assim definidas em lei, tratamento jurídico diferenciado, visando a incentivá-las pela simplificação de suas obrigações administrativas, tributárias, previdenciárias e creditícias, ou pela eliminação ou redução destas por meio de lei.</p>

	<p><span class="artigo">Art. 180.</span> A União, os Estados, o Distrito Federal e os Municípios promoverão e incentivarão o turismo como fator de desenvolvimento social e econômico.</p>

	<p><span class="artigo">Art. 181.</span> O atendimento de requisição de documento ou informação de natureza comercial, feita por autoridade administrativa ou judiciária estrangeira, a pessoa física ou jurídica residente ou domiciliada no País dependerá de autorização do Poder competente.</p>

	<h2 class="sum2">CAPÍTULO II<br>
	Da Política Urbana</h2>

	<p><span class="artigo">Art. 182.</span> A política de desenvolvimento urbano, executada pelo Poder Público municipal, conforme diretrizes gerais fixadas em lei, tem por objetivo ordenar o pleno desenvolvimento das funções sociais da cidade e garantir o bem- estar de seus habitantes. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LEIS_2001/L10257.htm">(Regulamento) </a>(<a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2016/Lei/L13311.htm">Vide Lei nº 13.311, de 11 de julho de 2016</a>)</p>

	<p><span class="paragrafo">§ 1º.</span> O plano diretor, aprovado pela Câmara Municipal, obrigatório para cidades com mais de vinte mil habitantes, é o instrumento básico da política de desenvolvimento e de expansão urbana.</p>

	<p><span class="paragrafo">§ 2º.</span> A propriedade urbana cumpre sua função social quando atende às exigências fundamentais de ordenação da cidade expressas no plano diretor.</p>

	<p><span class="paragrafo">§ 3º.</span> As desapropriações de imóveis urbanos serão feitas com prévia e justa indenização em dinheiro.</p>

	<p><span class="paragrafo">§ 4º.</span> É facultado ao Poder Público municipal, mediante lei específica para área incluída no plano diretor, exigir, nos termos da lei federal, do proprietário do solo urbano não edificado, subutilizado ou não utilizado, que promova seu adequado aproveitamento, sob pena, sucessivamente, de:</p>

	<p>I - parcelamento ou edificação compulsórios;</p>

	<p>II - imposto sobre a propriedade predial e territorial urbana progressivo no tempo;</p>

	<p>III - desapropriação com pagamento mediante títulos da dívida pública de emissão previamente aprovada pelo Senado Federal, com prazo de resgate de até dez anos, em parcelas anuais, iguais e sucessivas, assegurados o valor real da indenização e os juros legais.</p>

	<p><span class="artigo">Art. 183.</span> Aquele que possuir como sua área urbana de até duzentos e cinquenta metros quadrados, por cinco anos, ininterruptamente e sem oposição, utilizando-a para sua moradia ou de sua família, adquirir-lhe-á o domínio, desde que não seja proprietário de outro imóvel urbano ou rural. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LEIS_2001/L10257.htm">(Regulamento) </a></p>

	<p><span class="paragrafo">§ 1º.</span> O título de domínio e a concessão de uso serão conferidos ao homem ou à mulher, ou a ambos, independentemente do estado civil.</p>

	<p><span class="paragrafo">§ 2º.</span> Esse direito não será reconhecido ao mesmo possuidor mais de uma vez.</p>

	<p><span class="paragrafo">§ 3º.</span> Os imóveis públicos não serão adquiridos por usucapião.</p>

	<h2 class="sum2">CAPÍTULO III<br>
	Da Política Agrícola e Fundiária e da Reforma Agrária</h2>

	<p><a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8629.htm">Regulamento </a></p>

	<p><span class="artigo">Art. 184.</span> Compete à União desapropriar por interesse social, para fins de reforma agrária, o imóvel rural que não esteja cumprindo sua função social, mediante prévia e justa indenização em títulos da dívida agrária, com cláusula de preservação do valor real, resgatáveis no prazo de até vinte anos, a partir do segundo ano de sua emissão, e cuja utilização será definida em lei.</p>

	<p><span class="paragrafo">§ 1º.</span> As benfeitorias úteis e necessárias serão indenizadas em dinheiro.</p>

	<p><span class="paragrafo">§ 2º.</span> O decreto que declarar o imóvel como de interesse social, para fins de reforma agrária, autoriza a União a propor a ação de desapropriação.</p>

	<p><span class="paragrafo">§ 3º.</span> Cabe à lei complementar estabelecer procedimento contraditório especial, de rito sumário, para o processo judicial de desapropriação.</p>

	<p><span class="paragrafo">§ 4º.</span> O orçamento fixará anualmente o volume total de títulos da dívida agrária, assim como o montante de recursos para atender ao programa de reforma agrária no exercício.</p>

	<p><span class="paragrafo">§ 5º.</span> São isentas de impostos federais, estaduais e municipais as operações de transferência de imóveis desapropriados para fins de reforma agrária.</p>

	<p><span class="artigo">Art. 185.</span> São insuscetíveis de desapropriação para fins de reforma agrária:</p>

	<p>I - a pequena e média propriedade rural, assim definida em lei, desde que seu proprietário não possua outra;</p>

	<p>II - a propriedade produtiva.</p>

	<p><span class="paragrafo">Parágrafo único.</span> A lei garantirá tratamento especial à propriedade produtiva e fixará normas para o cumprimento dos requisitos relativos a sua função social.</p>

	<p><span class="artigo">Art. 186.</span> A função social é cumprida quando a propriedade rural atende, simultaneamente, segundo critérios e graus de exigência estabelecidos em lei, aos seguintes requisitos:</p>

	<p>I - aproveitamento racional e adequado;</p>

	<p>II - utilização adequada dos recursos naturais disponíveis e preservação do meio ambiente;</p>

	<p>III - observância das disposições que regulam as relações de trabalho;</p>

	<p>IV - exploração que favoreça o bem-estar dos proprietários e dos trabalhadores.</p>

	<p><span class="artigo">Art. 187.</span> A política agrícola será planejada e executada na forma da lei, com a participação efetiva do setor de produção, envolvendo produtores e trabalhadores rurais, bem como dos setores de comercialização, de armazenamento e de transportes, levando em conta, especialmente:</p>

	<p>I - os instrumentos creditícios e fiscais;</p>

	<p>II - os preços compatíveis com os custos de produção e a garantia de comercialização;</p>

	<p>III - o incentivo à pesquisa e à tecnologia;</p>

	<p>IV - a assistência técnica e extensão rural;</p>

	<p>V - o seguro agrícola;</p>

	<p>VI - o cooperativismo;</p>

	<p>VII - a eletrificação rural e irrigação;</p>

	<p>VIII - a habitação para o trabalhador rural.</p>

	<p><span class="paragrafo">§ 1º.</span> Incluem-se no planejamento agrícola as atividades agroindustriais, agropecuárias, pesqueiras e florestais.</p>

	<p><span class="paragrafo">§ 2º.</span> Serão compatibilizadas as ações de política agrícola e de reforma agrária.</p>

	<p><span class="artigo">Art. 188.</span> A destinação de terras públicas e devolutas será compatibilizada com a política agrícola e com o plano nacional de reforma agrária.</p>

	<p><span class="paragrafo">§ 1º.</span> A alienação ou a concessão, a qualquer título, de terras públicas com área superior a dois mil e quinhentos hectares a pessoa física ou jurídica, ainda que por interposta pessoa, dependerá de prévia aprovação do Congresso Nacional.</p>

	<p><span class="paragrafo">§ 2º.</span> Excetuam-se do disposto no parágrafo anterior as alienações ou as concessões de terras públicas para fins de reforma agrária.</p>

	<p><span class="artigo">Art. 189.</span> Os beneficiários da distribuição de imóveis rurais pela reforma agrária receberão títulos de domínio ou de concessão de uso, inegociáveis pelo prazo de dez anos.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O título de domínio e a concessão de uso serão conferidos ao homem ou à mulher, ou a ambos, independentemente do estado civil, nos termos e condições previstos em lei.</p>

	<p><span class="artigo">Art. 190.</span> A lei regulará e limitará a aquisição ou o arrendamento de propriedade rural por pessoa física ou jurídica estrangeira e estabelecerá os casos que dependerão de autorização do Congresso Nacional.</p>

	<p><span class="artigo">Art. 191.</span> Aquele que, não sendo proprietário de imóvel rural ou urbano, possua como seu, por cinco anos ininterruptos, sem oposição, área de terra, em zona rural, não superior a cinquenta hectares, tornando-a produtiva por seu trabalho ou de sua família, tendo nela sua moradia, adquirir-lhe-á a propriedade.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Os imóveis públicos não serão adquiridos por usucapião.</p>

	<h2 class="sum2">CAPÍTULO IV<br>
	Do Sistema Financeiro Nacional</h2>

	<p><span class="artigo">Art. 192.</span> O sistema financeiro nacional, estruturado de forma a promover o desenvolvimento equilibrado do País e a servir aos interesses da coletividade, em todas as partes que o compõem, abrangendo as cooperativas de crédito, será regulado por leis complementares que disporão, inclusive, sobre a participação do capital estrangeiro nas instituições que o integram. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a><a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8392.htm#art1">(Vide Lei nº 8.392, de 1991) </a></p>

	<p>I - (Revogado). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>II - (Revogado). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>III - (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p class="alinea">a) (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p class="alinea">b) (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>IV - (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>V -(Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>VI - (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>VII - (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>VIII - (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>§ 1°- (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>§ 2°- (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>§ 3°- (Revogado) <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art2">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<h1>TÍTULO VIII<br>
	Da Ordem Social</h1>

	<h2 class="sum2">CAPÍTULO I<br>
	Disposição Geral</h2>

	<p><span class="artigo">Art. 193.</span> A ordem social tem como base o primado do trabalho, e como objetivo o bem-estar e a justiça sociais.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O Estado exercerá a função de planejamento das políticas sociais, assegurada, na forma da lei, a participação da sociedade nos processos de formulação, de monitoramento, de controle e de avaliação dessas políticas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<h2 class="sum2">CAPÍTULO II<br>
	Da Seguridade Social</h2>

	<h3>Seção I<br>
	Disposições Gerais</h3>

	<p><span class="artigo">Art. 194.</span> A seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Compete ao Poder Público, nos termos da lei, organizar a seguridade social, com base nos seguintes objetivos:</p>

	<p>I - universalidade da cobertura e do atendimento;</p>

	<p>II - uniformidade e equivalência dos benefícios e serviços às populações urbanas e rurais;</p>

	<p>III - seletividade e distributividade na prestação dos benefícios e serviços;</p>

	<p>IV - irredutibilidade do valor dos benefícios;</p>

	<p>V - equidade na forma de participação no custeio;</p>

	<p>VI - diversidade da base de financiamento, identificando-se, em rubricas contábeis específicas para cada área, as receitas e as despesas vinculadas a ações de saúde, previdência e assistência social, preservado o caráter contributivo da previdência social; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>VII - caráter democrático e descentralizado da administração, mediante gestão quadripartite, com participação dos trabalhadores, dos empregadores, dos aposentados e do Governo nos órgãos colegiados. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art194pvii">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="artigo">Art. 195.</span> A seguridade social será financiada por toda a sociedade, de forma direta e indireta, nos termos da lei, mediante recursos provenientes dos orçamentos da União, dos Estados, do Distrito Federal e dos Municípios, e das seguintes contribuições sociais: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art12">(Vide Emenda Constitucional nº 20, de 1998) </a></p>

	<p>I - do empregador, da empresa e da entidade a ela equiparada na forma da lei, incidentes sobre: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art195i">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p class="alinea">a) a folha de salários e demais rendimentos do trabalho pagos ou creditados, a qualquer título, à pessoa física que lhe preste serviço, mesmo sem vínculo empregatício; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art195i">(Incluído pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p class="alinea">b) a receita ou o faturamento; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art195i">(Incluído pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p class="alinea">c) o lucro; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art195i">(Incluído pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>II - do trabalhador e dos demais segurados da previdência social, podendo ser adotadas alíquotas progressivas de acordo com o valor do salário de contribuição, não incidindo contribuição sobre aposentadoria e pensão concedidas pelo Regime Geral de Previdência Social; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>III - sobre a receita de concursos de prognósticos.</p>

	<p>IV - do importador de bens ou serviços do exterior, ou de quem a lei a ele equiparar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 1º.</span> - As receitas dos Estados, do Distrito Federal e dos Municípios destinadas à seguridade social constarão dos respectivos orçamentos, não integrando o orçamento da União.</p>

	<p><span class="paragrafo">§ 2º.</span> A proposta de orçamento da seguridade social será elaborada de forma integrada pelos órgãos responsáveis pela saúde, previdência social e assistência social, tendo em vista as metas e prioridades estabelecidas na lei de diretrizes orçamentárias, assegurada a cada área a gestão de seus recursos.</p>

	<p><span class="paragrafo">§ 3º.</span> A pessoa jurídica em débito com o sistema da seguridade social, como estabelecido em lei, não poderá contratar com o Poder Público nem dele receber benefícios ou incentivos fiscais ou creditícios. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2011/Mpv/526.htm#art5">(Vide Medida Provisória nº 526, de 2011) </a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2011/Lei/L12453.htm#art5">(Vide Lei nº 12.453, de 2011) </a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc106.htm">(Vide Emenda constitucional nº 106, de 2020)</a></p>

	<p><span class="paragrafo">§ 4º.</span> A lei poderá instituir outras fontes destinadas a garantir a manutenção ou expansão da seguridade social, obedecido o disposto no art. 154, I.</p>

	<p><span class="paragrafo">§ 5º.</span> Nenhum benefício ou serviço da seguridade social poderá ser criado, majorado ou estendido sem a correspondente fonte de custeio total.</p>

	<p><span class="paragrafo">§ 6º.</span> As contribuições sociais de que trata este artigo só poderão ser exigidas após decorridos noventa dias da data da publicação da lei que as houver instituído ou modificado, não se lhes aplicando o disposto no art. 150, III, "b".</p>

	<p><span class="paragrafo">§ 7º.</span> São isentas de contribuição para a seguridade social as entidades beneficentes de assistência social que atendam às exigências estabelecidas em lei.</p>

	<p><span class="paragrafo">§ 8º.</span> O produtor, o parceiro, o meeiro e o arrendatário rurais e o pescador artesanal, bem como os respectivos cônjuges, que exerçam suas atividades em regime de economia familiar, sem empregados permanentes, contribuirão para a seguridade social mediante a aplicação de uma alíquota sobre o resultado da comercialização da produção e farão jus aos benefícios nos termos da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art195%C2%A78">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 9º.</span> As contribuições sociais previstas no inciso I do caput deste artigo poderão ter alíquotas diferenciadas em razão da atividade econômica, da utilização intensiva de mão de obra, do porte da empresa ou da condição estrutural do mercado de trabalho, sendo também autorizada a adoção de bases de cálculo diferenciadas apenas no caso das alíneas "b" e "c" do inciso I do caput. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 10. A lei definirá os critérios de transferência de recursos para o sistema único de saúde e ações de assistência social da União para os Estados, o Distrito Federal e os Municípios, e dos Estados para os Municípios, observada a respectiva contrapartida de recursos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art195%C2%A78">(Incluído pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>§ 11. São vedados a moratória e o parcelamento em prazo superior a 60 (sessenta) meses e, na forma de lei complementar, a remissão e a anistia das contribuições sociais de que tratam a alínea "a" do inciso I e o inciso II do caput. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 12. A lei definirá os setores de atividade econômica para os quais as contribuições incidentes na forma dos incisos I, b; e IV do caput, serão não-cumulativas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>§ 13. (Revogado). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 14. O segurado somente terá reconhecida como tempo de contribuição ao Regime Geral de Previdência Social a competência cuja contribuição seja igual ou superior à contribuição mínima mensal exigida para sua categoria, assegurado o agrupamento de contribuições. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<h3>Seção II<br>
	Da Saúde</h3>

	<p><span class="artigo">Art. 196.</span> A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.</p>

	<p><span class="artigo">Art. 197.</span> São de relevância pública as ações e serviços de saúde, cabendo ao Poder Público dispor, nos termos da lei, sobre sua regulamentação, fiscalização e controle, devendo sua execução ser feita diretamente ou através de terceiros e, também, por pessoa física ou jurídica de direito privado.</p>

	<p><span class="artigo">Art. 198.</span> As ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado de acordo com as seguintes diretrizes: <a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADPF&amp;documento=&amp;s1=672&amp;numProcesso=672">(Vide ADPF 672)</a></p>

	<p>I - descentralização, com direção única em cada esfera de governo;</p>

	<p>II - atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais;</p>

	<p>III - participação da comunidade.</p>

	<p><span class="paragrafo">§ 1º.</span> O sistema único de saúde será financiado, nos termos do art. 195, com recursos do orçamento da seguridade social, da União, dos Estados, do Distrito Federal e dos Municípios, além de outras fontes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art6">(Parágrafo único renumerado para <span class="paragrafo">§ 1º.</span> pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A União, os Estados, o Distrito Federal e os Municípios aplicarão, anualmente, em ações e serviços públicos de saúde recursos mínimos derivados da aplicação de percentuais calculados sobre: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art6">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>I - no caso da União, a receita corrente líquida do respectivo exercício financeiro, não podendo ser inferior a 15% (quinze por cento); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc86.htm#art1">(Redação dada pela Emenda Constitucional nº 86, de 2015)</a></p>

	<p>II – no caso dos Estados e do Distrito Federal, o produto da arrecadação dos impostos a que se refere o art. 155 e dos recursos de que tratam os arts. 157 e 159, inciso I, alínea a, e inciso II, deduzidas as parcelas que forem transferidas aos respectivos Municípios; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art6">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>III – no caso dos Municípios e do Distrito Federal, o produto da arrecadação dos impostos a que se refere o art. 156 e dos recursos de que tratam os arts. 158 e 159, inciso I, alínea b e <span class="paragrafo">§ 3º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art6">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Lei complementar, que será reavaliada pelo menos a cada cinco anos, estabelecerá: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art6">(Incluído pela Emenda Constitucional nº 29, de 2000)</a><a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp141.htm">Regulamento </a></p>

	<p>I - os percentuais de que tratam os incisos II e III do § 2º; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc86.htm#art1">(Redação dada pela Emenda Constitucional nº 86, de 2015)</a></p>

	<p>II – os critérios de rateio dos recursos da União vinculados à saúde destinados aos Estados, ao Distrito Federal e aos Municípios, e dos Estados destinados a seus respectivos Municípios, objetivando a progressiva redução das disparidades regionais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art6">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>III – as normas de fiscalização, avaliação e controle das despesas com saúde nas esferas federal, estadual, distrital e municipal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art6">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>IV - <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc86.htm#art5">(revogado)</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc86.htm#art1">(Redação dada pela Emenda Constitucional nº 86, de 2015)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Os gestores locais do sistema único de saúde poderão admitir agentes comunitários de saúde e agentes de combate às endemias por meio de processo seletivo público, de acordo com a natureza e complexidade de suas atribuições e requisitos específicos para sua atuação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc51.htm#art1">(Incluído pela Emenda Constitucional nº 51, de 2006)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Lei federal disporá sobre o regime jurídico, o piso salarial profissional nacional, as diretrizes para os Planos de Carreira e a regulamentação das atividades de agente comunitário de saúde e agente de combate às endemias, competindo à União, nos termos da lei, prestar assistência financeira complementar aos Estados, ao Distrito Federal e aos Municípios, para o cumprimento do referido piso salarial. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc63.htm#art1">(Redação dada pela Emenda Constitucional nº 63, de 2010)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2006/Lei/L11350.htm">Regulamento</a></p>

	<p><span class="paragrafo">§ 6º.</span> Além das hipóteses previstas no <span class="paragrafo">§ 1º.</span> do art. 41 e no <span class="paragrafo">§ 4º.</span> do art. 169 da Constituição Federal, o servidor que exerça funções equivalentes às de agente comunitário de saúde ou de agente de combate às endemias poderá perder o cargo em caso de descumprimento dos requisitos específicos, fixados em lei, para o seu exercício. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc51.htm#art1">(Incluído pela Emenda Constitucional nº 51, de 2006)</a></p>

	<p><span class="paragrafo">§ 7º.</span> O vencimento dos agentes comunitários de saúde e dos agentes de combate às endemias fica sob responsabilidade da União, e cabe aos Estados, ao Distrito Federal e aos Municípios estabelecer, além de outros consectários e vantagens, incentivos, auxílios, gratificações e indenizações, a fim de valorizar o trabalho desses profissionais. (Incluído pela Emenda Constitucional nº 120, de 2022)</p>

	<p><span class="paragrafo">§ 8º.</span> Os recursos destinados ao pagamento do vencimento dos agentes comunitários de saúde e dos agentes de combate às endemias serão consignados no orçamento geral da União com dotação própria e exclusiva. (Incluído pela Emenda Constitucional nº 120, de 2022)</p>

	<p><span class="paragrafo" a="">§ 9º.</span> O vencimento dos agentes comunitários de saúde e dos agentes de combate às endemias não será inferior a 2 (dois) salários mínimos, repassados pela União aos Municípios, aos Estados e ao Distrito Federal. (Incluído pela Emenda Constitucional nº 120, de 2022)</p>

	<p><span class="paragrafo">§ 10.</span> Os agentes comunitários de saúde e os agentes de combate às endemias terão também, em razão dos riscos inerentes às funções desempenhadas, aposentadoria especial e, somado aos seus vencimentos, adicional de insalubridade. (Incluído pela Emenda Constitucional nº 120, de 2022)</p>

	<p><span class="paragrafo">§ 11.</span> Os recursos financeiros repassados pela União aos Estados, ao Distrito Federal e aos Municípios para pagamento do vencimento ou de qualquer outra vantagem dos agentes comunitários de saúde e dos agentes de combate às endemias não serão objeto de inclusão no cálculo para fins do limite de despesa com pessoal. (Incluído pela Emenda Constitucional nº 120, de 2022)</p>

	<p id="art198p12"><span class="paragrafo">§ 12.</span> Lei federal instituirá pisos salariais profissionais nacionais para o enfermeiro, o técnico de enfermagem, o auxiliar de enfermagem e a parteira, a serem observados por pessoas jurídicas de direito público e de direito privado.</p>

	<p><span class="paragrafo">§ 13.</span> A União, os Estados, o Distrito Federal e os Municípios, até o final do exercício financeiro em que for publicada a lei de que trata o <a href="#art198p12">§ 12 deste artigo</a>, adequarão a remuneração dos cargos ou dos respectivos planos de carreiras, quando houver, de modo a atender aos pisos estabelecidos para cada categoria profissional. (Incluído pela Emenda Constitucional nº 124, de 2022)</p>

	<p><span class="paragrafo">§ 14.</span> Compete à União, nos termos da lei, prestar assistência financeira complementar aos Estados, ao Distrito Federal e aos Municípios e às entidades filantrópicas, bem como aos prestadores de serviços contratualizados que atendam, no mínimo, 60% (sessenta por cento) de seus pacientes pelo sistema único de saúde, para o cumprimento dos pisos salariais de que trata o <a href="#art198p12">§ 12 deste artigo</a>.</p>

	<p><span class="paragrafo">§ 15.</span> Os recursos federais destinados aos pagamentos da assistência financeira complementar aos Estados, ao Distrito Federal e aos Municípios e às entidades filantrópicas, bem como aos prestadores de serviços contratualizados que atendam, no mínimo, 60% (sessenta por cento) de seus pacientes pelo sistema único de saúde, para o cumprimento dos pisos salariais de que trata o <a href="#art198p12">§ 12 deste artigo</a> serão consignados no orçamento geral da União com dotação própria e exclusiva</p>

	<ul class="dica">
		<li>Parágrafos 14 e 15 acrescidos pela Emenda Constitucional nº 127, de 22 de dezembro de 2022.</li>
	</ul>

	<p><span class="artigo">Art. 199.</span> A assistência à saúde é livre à iniciativa privada. (Incluído pela Emenda Constitucional nº 124, de 2022)</p>

	<p><span class="paragrafo">§ 1º.</span> As instituições privadas poderão participar de forma complementar do sistema único de saúde, segundo diretrizes deste, mediante contrato de direito público ou convênio, tendo preferência as entidades filantrópicas e as sem fins lucrativos.</p>

	<p><span class="paragrafo">§ 2º.</span> É vedada a destinação de recursos públicos para auxílios ou subvenções às instituições privadas com fins lucrativos.</p>

	<p><span class="paragrafo">§ 3º.</span> - É vedada a participação direta ou indireta de empresas ou capitais estrangeiros na assistência à saúde no País, salvo nos casos previstos em lei.</p>

	<p><span class="paragrafo">§ 4º.</span> A lei disporá sobre as condições e os requisitos que facilitem a remoção de órgãos, tecidos e substâncias humanas para fins de transplante, pesquisa e tratamento, bem como a coleta, processamento e transfusão de sangue e seus derivados, sendo vedado todo tipo de comercialização.</p>

	<p><span class="artigo">Art. 200.</span> Ao sistema único de saúde compete, além de outras atribuições, nos termos da lei:</p>

	<p>I - controlar e fiscalizar procedimentos, produtos e substâncias de interesse para a saúde e participar da produção de medicamentos, equipamentos, imunobiológicos, hemoderivados e outros insumos;</p>

	<p>II - executar as ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador;</p>

	<p>III - ordenar a formação de recursos humanos na área de saúde;</p>

	<p>IV - participar da formulação da política e da execução das ações de saneamento básico;</p>

	<p>V - incrementar, em sua área de atuação, o desenvolvimento científico e tecnológico e a inovação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Redação dada pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p>VI - fiscalizar e inspecionar alimentos, compreendido o controle de seu teor nutricional, bem como bebidas e águas para consumo humano;</p>

	<p>VII - participar do controle e fiscalização da produção, transporte, guarda e utilização de substâncias e produtos psicoativos, tóxicos e radioativos;</p>

	<p>VIII - colaborar na proteção do meio ambiente, nele compreendido o do trabalho.</p>

	<h3>Seção III<br>
	Da Previdência Social</h3>

	<p><span class="artigo">Art. 201.</span> A previdência social será organizada sob a forma do Regime Geral de Previdência Social, de caráter contributivo e de filiação obrigatória, observados critérios que preservem o equilíbrio financeiro e atuarial, e atenderá, na forma da lei, a: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>I - cobertura dos eventos de incapacidade temporária ou permanente para o trabalho e idade avançada; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>II - proteção à maternidade, especialmente à gestante; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>III - proteção ao trabalhador em situação de desemprego involuntário; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>IV - salário-família e auxílio-reclusão para os dependentes dos segurados de baixa renda; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>V - pensão por morte do segurado, homem ou mulher, ao cônjuge ou companheiro e dependentes, observado o disposto no <span class="paragrafo">§ 2º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 1º.</span> É vedada a adoção de requisitos ou critérios diferenciados para concessão de benefícios, ressalvada, nos termos de lei complementar, a possibilidade de previsão de idade e tempo de contribuição distintos da regra geral para concessão de aposentadoria exclusivamente em favor dos segurados: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>I - com deficiência, previamente submetidos a avaliação biopsicossocial realizada por equipe multiprofissional e interdisciplinar; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>II - cujas atividades sejam exercidas com efetiva exposição a agentes químicos, físicos e biológicos prejudiciais à saúde, ou associação desses agentes, vedada a caracterização por categoria profissional ou ocupação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Nenhum benefício que substitua o salário de contribuição ou o rendimento do trabalho do segurado terá valor mensal inferior ao salário mínimo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Todos os salários de contribuição considerados para o cálculo de benefício serão devidamente atualizados, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 4º.</span> É assegurado o reajustamento dos benefícios para preservar-lhes, em caráter permanente, o valor real, conforme critérios definidos em lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 5º.</span> É vedada a filiação ao regime geral de previdência social, na qualidade de segurado facultativo, de pessoa participante de regime próprio de previdência. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 6º.</span> A gratificação natalina dos aposentados e pensionistas terá por base o valor dos proventos do mês de dezembro de cada ano. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 7º.</span> É assegurada aposentadoria no regime geral de previdência social, nos termos da lei, obedecidas as seguintes condições: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>I - 65 (sessenta e cinco) anos de idade, se homem, e 62 (sessenta e dois) anos de idade, se mulher, observado tempo mínimo de contribuição; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>II - 60 (sessenta) anos de idade, se homem, e 55 (cinquenta e cinco) anos de idade, se mulher, para os trabalhadores rurais e para os que exerçam suas atividades em regime de economia familiar, nestes incluídos o produtor rural, o garimpeiro e o pescador artesanal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 8º.</span> O requisito de idade a que se refere o inciso I do <span class="paragrafo">§ 7º.</span> será reduzido em 5 (cinco) anos, para o professor que comprove tempo de efetivo exercício das funções de magistério na educação infantil e no ensino fundamental e médio fixado em lei complementar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 9º.</span> Para fins de aposentadoria, será assegurada a contagem recíproca do tempo de contribuição entre o Regime Geral de Previdência Social e os regimes próprios de previdência social, e destes entre si, observada a compensação financeira, de acordo com os critérios estabelecidos em lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 9º-A. O tempo de serviço militar exercido nas atividades de que tratam os arts. 42, 142 e 143 e o tempo de contribuição ao Regime Geral de Previdência Social ou a regime próprio de previdência social terão contagem recíproca para fins de inativação militar ou aposentadoria, e a compensação financeira será devida entre as receitas de contribuição referentes aos militares e as receitas de contribuição aos demais regimes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 10. Lei complementar poderá disciplinar a cobertura de benefícios não programados, inclusive os decorrentes de acidente do trabalho, a ser atendida concorrentemente pelo Regime Geral de Previdência Social e pelo setor privado. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 11. Os ganhos habituais do empregado, a qualquer título, serão incorporados ao salário para efeito de contribuição previdenciária e consequente repercussão em benefícios, nos casos e na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art201">(Incluído dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>§ 12. Lei instituirá sistema especial de inclusão previdenciária, com alíquotas diferenciadas, para atender aos trabalhadores de baixa renda, inclusive os que se encontram em situação de informalidade, e àqueles sem renda própria que se dediquem exclusivamente ao trabalho doméstico no âmbito de sua residência, desde que pertencentes a famílias de baixa renda. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 13. A aposentadoria concedida ao segurado de que trata o § 12 terá valor de 1 (um) salário-mínimo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 14. É vedada a contagem de tempo de contribuição fictício para efeito de concessão dos benefícios previdenciários e de contagem recíproca. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 15. Lei complementar estabelecerá vedações, regras e condições para a acumulação de benefícios previdenciários. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p>§ 16. Os empregados dos consórcios públicos, das empresas públicas, das sociedades de economia mista e das suas subsidiárias serão aposentados compulsoriamente, observado o cumprimento do tempo mínimo de contribuição, ao atingir a idade máxima de que trata o inciso II do <span class="paragrafo">§ 1º.</span> do art. 40, na forma estabelecida em lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="artigo">Art. 202.</span> O regime de previdência privada, de caráter complementar e organizado de forma autônoma em relação ao regime geral de previdência social, será facultativo, baseado na constituição de reservas que garantam o benefício contratado, e regulado por lei complementar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art202">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>§ 1° A lei complementar de que trata este artigo assegurará ao participante de planos de benefícios de entidades de previdência privada o pleno acesso às informações relativas à gestão de seus respectivos planos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art202">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>§ 2° As contribuições do empregador, os benefícios e as condições contratuais previstas nos estatutos, regulamentos e planos de benefícios das entidades de previdência privada não integram o contrato de trabalho dos participantes, assim como, à exceção dos benefícios concedidos, não integram a remuneração dos participantes, nos termos da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art202">(Redação dada pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 3º.</span> É vedado o aporte de recursos a entidade de previdência privada pela União, Estados, Distrito Federal e Municípios, suas autarquias, fundações, empresas públicas, sociedades de economia mista e outras entidades públicas, salvo na qualidade de patrocinador, situação na qual, em hipótese alguma, sua contribuição normal poderá exceder a do segurado. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art202">(Incluído pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Lei complementar disciplinará a relação entre a União, Estados, Distrito Federal ou Municípios, inclusive suas autarquias, fundações, sociedades de economia mista e empresas controladas direta ou indiretamente, enquanto patrocinadores de planos de benefícios previdenciários, e as entidades de previdência complementar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 5º.</span> A lei complementar de que trata o <span class="paragrafo">§ 4º.</span> aplicar-se-á, no que couber, às empresas privadas permissionárias ou concessionárias de prestação de serviços públicos, quando patrocinadoras de planos de benefícios em entidades de previdência complementar. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Lei complementar estabelecerá os requisitos para a designação dos membros das diretorias das entidades fechadas de previdência complementar instituídas pelos patrocinadores de que trata o <span class="paragrafo">§ 4º.</span> e disciplinará a inserção dos participantes nos colegiados e instâncias de decisão em que seus interesses sejam objeto de discussão e deliberação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<h3>Seção IV<br>
	Da Assistência Social</h3>

	<p><span class="artigo">Art. 203.</span> A assistência social será prestada a quem dela necessitar, independentemente de contribuição à seguridade social, e tem por objetivos:</p>

	<p>I - a proteção à família, à maternidade, à infância, à adolescência e à velhice;</p>

	<p>II - o amparo às crianças e adolescentes carentes;</p>

	<p>III - a promoção da integração ao mercado de trabalho;</p>

	<p>IV - a habilitação e reabilitação das pessoas portadoras de deficiência e a promoção de sua integração à vida comunitária;</p>

	<p>V - a garantia de um salário mínimo de benefício mensal à pessoa portadora de deficiência e ao idoso que comprovem não possuir meios de prover à própria manutenção ou de tê-la provida por sua família, conforme dispuser a lei.</p>

	<p>VI - a redução da vulnerabilidade socioeconômica de famílias em situação de pobreza ou de extrema pobreza. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art1">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="artigo">Art. 204.</span> As ações governamentais na área da assistência social serão realizadas com recursos do orçamento da seguridade social, previstos no art. 195, além de outras fontes, e organizadas com base nas seguintes diretrizes:</p>

	<p>I - descentralização político-administrativa, cabendo a coordenação e as normas gerais à esfera federal e a coordenação e a execução dos respectivos programas às esferas estadual e municipal, bem como a entidades beneficentes e de assistência social;</p>

	<p>II - participação da população, por meio de organizações representativas, na formulação das políticas e no controle das ações em todos os níveis.</p>

	<p><span class="paragrafo">Parágrafo único.</span> É facultado aos Estados e ao Distrito Federal vincular a programa de apoio à inclusão e promoção social até cinco décimos por cento de sua receita tributária líquida, vedada a aplicação desses recursos no pagamento de: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>I - despesas com pessoal e encargos sociais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>II - serviço da dívida; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>III - qualquer outra despesa corrente não vinculada diretamente aos investimentos ou ações apoiados. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<h2 class="sum2">CAPÍTULO III<br>
	Da Educação, da Cultura e do Desporto</h2>

	<h3>Seção I<br>
	Da Educação</h3>

	<p><span class="artigo">Art. 205.</span> A educação, direito de todos e dever do Estado e da família, será promovida e incentivada com a colaboração da sociedade, visando ao pleno desenvolvimento da pessoa, seu preparo para o exercício da cidadania e sua qualificação para o trabalho.</p>

	<p><span class="artigo">Art. 206.</span> O ensino será ministrado com base nos seguintes princípios:</p>

	<p>I - igualdade de condições para o acesso e permanência na escola;</p>

	<p>II - liberdade de aprender, ensinar, pesquisar e divulgar o pensamento, a arte e o saber;</p>

	<p>III - pluralismo de ideias e de concepções pedagógicas, e coexistência de instituições públicas e privadas de ensino;</p>

	<p>IV - gratuidade do ensino público em estabelecimentos oficiais;</p>

	<p>V - valorização dos profissionais da educação escolar, garantidos, na forma da lei, planos de carreira, com ingresso exclusivamente por concurso público de provas e títulos, aos das redes públicas; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Redação dada pela Emenda Constitucional nº 53, de 2006)</a></p>

	<p>VI - gestão democrática do ensino público, na forma da lei;</p>

	<p>VII - garantia de padrão de qualidade.</p>

	<p>VIII - piso salarial profissional nacional para os profissionais da educação escolar pública, nos termos de lei federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Incluído pela Emenda Constitucional nº 53, de 2006)</a></p>

	<p>IX - garantia do direito à educação e à aprendizagem ao longo da vida. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="paragrafo">Parágrafo único.</span> A lei disporá sobre as categorias de trabalhadores considerados profissionais da educação básica e sobre a fixação de prazo para a elaboração ou adequação de seus planos de carreira, no âmbito da União, dos Estados, do Distrito Federal e dos Municípios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Incluído pela Emenda Constitucional nº 53, de 2006)</a></p>

	<p><span class="artigo">Art. 207.</span> As universidades gozam de autonomia didático-científica, administrativa e de gestão financeira e patrimonial, e obedecerão ao princípio de indissociabilidade entre ensino, pesquisa e extensão.</p>

	<p><span class="paragrafo">§ 1º.</span> É facultado às universidades admitir professores, técnicos e cientistas estrangeiros, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc11.htm#art1">(Incluído pela Emenda Constitucional nº 11, de 1996)</a></p>

	<p><span class="paragrafo">§ 2º.</span> O disposto neste artigo aplica-se às instituições de pesquisa científica e tecnológica. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc11.htm#art1">(Incluído pela Emenda Constitucional nº 11, de 1996)</a></p>

	<p><span class="artigo">Art. 208.</span> O dever do Estado com a educação será efetivado mediante a garantia de:</p>

	<p>I - educação básica obrigatória e gratuita dos 4 (quatro) aos 17 (dezessete) anos de idade, assegurada inclusive sua oferta gratuita para todos os que a ela não tiveram acesso na idade própria; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc59.htm#art1">(Redação dada pela Emenda Constitucional nº 59, de 2009)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc59.htm#art6">(Vide Emenda Constitucional nº 59, de 2009)</a></p>

	<p>II - progressiva universalização do ensino médio gratuito; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc14.htm#art2">(Redação dada pela Emenda Constitucional nº 14, de 1996)</a></p>

	<p>III - atendimento educacional especializado aos portadores de deficiência, preferencialmente na rede regular de ensino;</p>

	<p>IV - educação infantil, em creche e pré-escola, às crianças até 5 (cinco) anos de idade; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Redação dada pela Emenda Constitucional nº 53, de 2006)</a></p>

	<p>V - acesso aos níveis mais elevados do ensino, da pesquisa e da criação artística, segundo a capacidade de cada um;</p>

	<p>VI - oferta de ensino noturno regular, adequado às condições do educando;</p>

	<p>VII - atendimento ao educando, em todas as etapas da educação básica, por meio de programas suplementares de material didático-escolar, transporte, alimentação e assistência à saúde. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc59.htm#art1">(Redação dada pela Emenda Constitucional nº 59, de 2009)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O acesso ao ensino obrigatório e gratuito é direito público subjetivo.</p>

	<p><span class="paragrafo">§ 2º.</span> O não-oferecimento do ensino obrigatório pelo Poder Público, ou sua oferta irregular, importa responsabilidade da autoridade competente.</p>

	<p><span class="paragrafo">§ 3º.</span> Compete ao Poder Público recensear os educandos no ensino fundamental, fazer-lhes a chamada e zelar, junto aos pais ou responsáveis, pela frequência à escola.</p>

	<p><span class="artigo">Art. 209.</span> O ensino é livre à iniciativa privada, atendidas as seguintes condições:</p>

	<p>I - cumprimento das normas gerais da educação nacional;</p>

	<p>II - autorização e avaliação de qualidade pelo Poder Público.</p>

	<p><span class="artigo">Art. 210.</span> Serão fixados conteúdos mínimos para o ensino fundamental, de maneira a assegurar formação básica comum e respeito aos valores culturais e artísticos, nacionais e regionais.</p>

	<p><span class="paragrafo">§ 1º.</span> O ensino religioso, de matrícula facultativa, constituirá disciplina dos horários normais das escolas públicas de ensino fundamental.</p>

	<p><span class="paragrafo">§ 2º.</span> O ensino fundamental regular será ministrado em língua portuguesa, assegurada às comunidades indígenas também a utilização de suas línguas maternas e processos próprios de aprendizagem.</p>

	<p><span class="artigo">Art. 211.</span> A União, os Estados, o Distrito Federal e os Municípios organizarão em regime de colaboração seus sistemas de ensino.</p>

	<p><span class="paragrafo">§ 1º.</span> A União organizará o sistema federal de ensino e o dos Territórios, financiará as instituições de ensino públicas federais e exercerá, em matéria educacional, função redistributiva e supletiva, de forma a garantir equalização de oportunidades educacionais e padrão mínimo de qualidade do ensino mediante assistência técnica e financeira aos Estados, ao Distrito Federal e aos Municípios; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc14.htm#art3">(Redação dada pela Emenda Constitucional nº 14, de 1996)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os Municípios atuarão prioritariamente no ensino fundamental e na educação infantil. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc14.htm#art3">(Redação dada pela Emenda Constitucional nº 14, de 1996)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Os Estados e o Distrito Federal atuarão prioritariamente no ensino fundamental e médio. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc14.htm#art3">(Incluído pela Emenda Constitucional nº 14, de 1996)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Na organização de seus sistemas de ensino, a União, os Estados, o Distrito Federal e os Municípios definirão formas de colaboração, de forma a assegurar a universalização, a qualidade e a equidade do ensino obrigatório. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Redação dada pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="paragrafo">§ 5º.</span> A educação básica pública atenderá prioritariamente ao ensino regular. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Incluído pela Emenda Constitucional nº 53, de 2006)</a></p>

	<p><span class="paragrafo">§ 6º.</span> A União, os Estados, o Distrito Federal e os Municípios exercerão ação redistributiva em relação a suas escolas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="paragrafo">§ 7º.</span> O padrão mínimo de qualidade de que trata o <span class="paragrafo">§ 1º.</span> deste artigo considerará as condições adequadas de oferta e terá como referência o Custo Aluno Qualidade (CAQ), pactuados em regime de colaboração na forma disposta em lei complementar, conforme o parágrafo único do art. 23 desta Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="artigo">Art. 212.</span> A União aplicará, anualmente, nunca menos de dezoito, e os Estados, o Distrito Federal e os Municípios vinte e cinco por cento, no mínimo, da receita resultante de impostos, compreendida a proveniente de transferências, na manutenção e desenvolvimento do ensino.</p>

	<p><span class="paragrafo">§ 1º.</span> A parcela da arrecadação de impostos transferida pela União aos Estados, ao Distrito Federal e aos Municípios, ou pelos Estados aos respectivos Municípios, não é considerada, para efeito do cálculo previsto neste artigo, receita do governo que a transferir.</p>

	<p><span class="paragrafo">§ 2º.</span> Para efeito do cumprimento do disposto no "caput" deste artigo, serão considerados os sistemas de ensino federal, estadual e municipal e os recursos aplicados na forma do art. 213.</p>

	<p><span class="paragrafo">§ 3º.</span> A distribuição dos recursos públicos assegurará prioridade ao atendimento das necessidades do ensino obrigatório, no que se refere a universalização, garantia de padrão de qualidade e equidade, nos termos do plano nacional de educação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc59.htm#art3">(Redação dada pela Emenda Constitucional nº 59, de 2009)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Os programas suplementares de alimentação e assistência à saúde previstos no art. 208, VII, serão financiados com recursos provenientes de contribuições sociais e outros recursos orçamentários.</p>

	<p><span class="paragrafo">§ 5º.</span> A educação básica pública terá como fonte adicional de financiamento a contribuição social do salário-educação, recolhida pelas empresas na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Redação dada pela Emenda Constitucional nº 53, de 2006)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2006/Decreto/D6003.htm">(Vide Decreto nº 6.003, de 2006) </a></p>

	<p><span class="paragrafo">§ 6º.</span> As cotas estaduais e municipais da arrecadação da contribuição social do salário-educação serão distribuídas proporcionalmente ao número de alunos matriculados na educação básica nas respectivas redes públicas de ensino. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc53.htm#art1">(Incluído pela Emenda Constitucional nº 53, de 2006)</a></p>

	<p><span class="paragrafo">§ 7º.</span> É vedado o uso dos recursos referidos no caput e nos §<span class="paragrafo">§ 5º.</span> e 6º. deste artigo para pagamento de aposentadorias e de pensões. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="paragrafo">§ 8º.</span> Na hipótese de extinção ou de substituição de impostos, serão redefinidos os percentuais referidos no caput deste artigo e no inciso II do caput do art. 212-A, de modo que resultem recursos vinculados à manutenção e ao desenvolvimento do ensino, bem como os recursos subvinculados aos fundos de que trata o art. 212-A desta Constituição, em aplicações equivalentes às anteriormente praticadas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="paragrafo">§ 9º.</span> A lei disporá sobre normas de fiscalização, de avaliação e de controle das despesas com educação nas esferas estadual, distrital e municipal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="artigo" id="212A">Art. 212-A.</span> Os Estados, o Distrito Federal e os Municípios destinarão parte dos recursos a que se refere o caput do art. 212 desta Constituição à manutenção e ao desenvolvimento do ensino na educação básica e à remuneração condigna de seus profissionais, respeitadas as seguintes disposições: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2019-2022/2020/Lei/L14113.htm">Regulamento</a></p>

	<p>I - a distribuição dos recursos e de responsabilidades entre o Distrito Federal, os Estados e seus Municípios é assegurada mediante a instituição, no âmbito de cada Estado e do Distrito Federal, de um Fundo de Manutenção e Desenvolvimento da Educação Básica e de Valorização dos Profissionais da Educação (Fundeb), de natureza contábil; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>II - os fundos referidos no inciso I do caput deste artigo serão constituídos por 20% (vinte por cento) dos recursos a que se referem os incisos I, II e III do caput do art. 155, o inciso II do caput do art. 157, os incisos II, III e IV do caput do art. 158 e as alíneas "a" e "b" do inciso I e o inciso II do caput do art. 159 desta Constituição; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>III - os recursos referidos no inciso II do caput deste artigo serão distribuídos entre cada Estado e seus Municípios, proporcionalmente ao número de alunos das diversas etapas e modalidades da educação básica presencial matriculados nas respectivas redes, nos âmbitos de atuação prioritária, conforme estabelecido nos §<span class="paragrafo">§ 2º.</span> e 3º. do art. 211 desta Constituição, observadas as ponderações referidas na alínea "a" do inciso X do caput e no <span class="paragrafo">§ 2º.</span> deste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>IV - a União complementará os recursos dos fundos a que se refere o inciso II do caput deste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>V - a complementação da União será equivalente a, no mínimo, 23% (vinte e três por cento) do total de recursos a que se refere o inciso II do caput deste artigo, distribuída da seguinte forma: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p class="alinea">a) 10 (dez) pontos percentuais no âmbito de cada Estado e do Distrito Federal, sempre que o valor anual por aluno (VAAF), nos termos do inciso III do caput deste artigo, não alcançar o mínimo definido nacionalmente; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p class="alinea">b) no mínimo, 10,5 (dez inteiros e cinco décimos) pontos percentuais em cada rede pública de ensino municipal, estadual ou distrital, sempre que o valor anual total por aluno (VAAT), referido no inciso VI do caput deste artigo, não alcançar o mínimo definido nacionalmente; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p class="alinea">c) 2,5 (dois inteiros e cinco décimos) pontos percentuais nas redes públicas que, cumpridas condicionalidades de melhoria de gestão previstas em lei, alcançarem evolução de indicadores a serem definidos, de atendimento e melhoria da aprendizagem com redução das desigualdades, nos termos do sistema nacional de avaliação da educação básica; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>VI - o VAAT será calculado, na forma da lei de que trata o inciso X do caput deste artigo, com base nos recursos a que se refere o inciso II do caput deste artigo, acrescidos de outras receitas e de transferências vinculadas à educação, observado o disposto no <span class="paragrafo">§ 1º.</span> e consideradas as matrículas nos termos do inciso III do caput deste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>VII - os recursos de que tratam os incisos II e IV do caput deste artigo serão aplicados pelos Estados e pelos Municípios exclusivamente nos respectivos âmbitos de atuação prioritária, conforme estabelecido nos §<span class="paragrafo">§ 2º.</span> e 3º. do art. 211 desta Constituição; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>VIII - a vinculação de recursos à manutenção e ao desenvolvimento do ensino estabelecida no art. 212 desta Constituição suportará, no máximo, 30% (trinta por cento) da complementação da União, considerados para os fins deste inciso os valores previstos no inciso V do caput deste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>IX - o disposto no caput do art. 160 desta Constituição aplica-se aos recursos referidos nos incisos II e IV do caput deste artigo, e seu descumprimento pela autoridade competente importará em crime de responsabilidade; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>X - a lei disporá, observadas as garantias estabelecidas nos incisos I, II, III e IV do caput e no <span class="paragrafo">§ 1º.</span> do art. 208 e as metas pertinentes do plano nacional de educação, nos termos previstos no art. 214 desta Constituição, sobre: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p class="alinea">a) a organização dos fundos referidos no inciso I do caput deste artigo e a distribuição proporcional de seus recursos, as diferenças e as ponderações quanto ao valor anual por aluno entre etapas, modalidades, duração da jornada e tipos de estabelecimento de ensino, observados as respectivas especificidades e os insumos necessários para a garantia de sua qualidade; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p class="alinea">b) a forma de cálculo do VAAF decorrente do inciso III do caput deste artigo e do VAAT referido no inciso VI do caput deste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p class="alinea">c) a forma de cálculo para distribuição prevista na alínea "c" do inciso V do caput deste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p class="alinea">d) a transparência, o monitoramento, a fiscalização e o controle interno, externo e social dos fundos referidos no inciso I do caput deste artigo, assegurada a criação, a autonomia, a manutenção e a consolidação de conselhos de acompanhamento e controle social, admitida sua integração aos conselhos de educação; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p class="alinea">e) o conteúdo e a periodicidade da avaliação, por parte do órgão responsável, dos efeitos redistributivos, da melhoria dos indicadores educacionais e da ampliação do atendimento; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>XI - proporção não inferior a 70% (setenta por cento) de cada fundo referido no inciso I do caput deste artigo, excluídos os recursos de que trata a alínea "c" do inciso V do caput deste artigo, será destinada ao pagamento dos profissionais da educação básica em efetivo exercício, observado, em relação aos recursos previstos na alínea "b" do inciso V do caput deste artigo, o percentual mínimo de 15% (quinze por cento) para despesas de capital; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>XII - lei específica disporá sobre o piso salarial profissional nacional para os profissionais do magistério da educação básica pública; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>XIII - a utilização dos recursos a que se refere o <span class="paragrafo">§ 5º.</span> do art. 212 desta Constituição para a complementação da União ao Fundeb, referida no inciso V do caput deste artigo, é vedada. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="paragrafo">§ 1º.</span> O cálculo do VAAT, referido no inciso VI do caput deste artigo, deverá considerar, além dos recursos previstos no inciso II do caput deste artigo, pelo menos, as seguintes disponibilidades: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>I - receitas de Estados, do Distrito Federal e de Municípios vinculadas à manutenção e ao desenvolvimento do ensino não integrantes dos fundos referidos no inciso I do caput deste artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>II - cotas estaduais e municipais da arrecadação do salário-educação de que trata o <span class="paragrafo">§ 6º.</span> do art. 212 desta Constituição; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p>III - complementação da União transferida a Estados, ao Distrito Federal e a Municípios nos termos da alínea "a" do inciso V do caput deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="paragrafo">§ 2º.</span> Além das ponderações previstas na alínea "a" do inciso X do caput deste artigo, a lei definirá outras relativas ao nível socioeconômico dos educandos e aos indicadores de disponibilidade de recursos vinculados à educação e de potencial de arrecadação tributária de cada ente federado, bem como seus prazos de implementação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p><span class="paragrafo">§ 3º.</span> Será destinada à educação infantil a proporção de 50% (cinquenta por cento) dos recursos globais a que se refere a alínea "b" do inciso V do caput deste artigo, nos termos da lei." <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art1">(Incluído pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p><span class="artigo">Art. 213.</span> Os recursos públicos serão destinados às escolas públicas, podendo ser dirigidos a escolas comunitárias, confessionais ou filantrópicas, definidas em lei, que:</p>

	<p>I - comprovem finalidade não-lucrativa e apliquem seus excedentes financeiros em educação;</p>

	<p>II - assegurem a destinação de seu patrimônio a outra escola comunitária, filantrópica ou confessional, ou ao Poder Público, no caso de encerramento de suas atividades.</p>

	<p><span class="paragrafo">§ 1º.</span> - Os recursos de que trata este artigo poderão ser destinados a bolsas de estudo para o ensino fundamental e médio, na forma da lei, para os que demonstrarem insuficiência de recursos, quando houver falta de vagas e cursos regulares da rede pública na localidade da residência do educando, ficando o Poder Público obrigado a investir prioritariamente na expansão de sua rede na localidade.</p>

	<p><span class="paragrafo">§ 2º.</span> As atividades de pesquisa, de extensão e de estímulo e fomento à inovação realizadas por universidades e/ou por instituições de educação profissional e tecnológica poderão receber apoio financeiro do Poder Público. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Redação dada pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="artigo">Art. 214.</span> A lei estabelecerá o plano nacional de educação, de duração decenal, com o objetivo de articular o sistema nacional de educação em regime de colaboração e definir diretrizes, objetivos, metas e estratégias de implementação para assegurar a manutenção e desenvolvimento do ensino em seus diversos níveis, etapas e modalidades por meio de ações integradas dos poderes públicos das diferentes esferas federativas que conduzam a: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc59.htm#art4">(Redação dada pela Emenda Constitucional nº 59, de 2009)</a></p>

	<p>I - erradicação do analfabetismo;</p>

	<p>II - universalização do atendimento escolar;</p>

	<p>III - melhoria da qualidade do ensino;</p>

	<p>IV - formação para o trabalho;</p>

	<p>V - promoção humanística, científica e tecnológica do País.</p>

	<p>VI - estabelecimento de meta de aplicação de recursos públicos em educação como proporção do produto interno bruto. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc59.htm#art4">(Incluído pela Emenda Constitucional nº 59, de 2009)</a></p>

	<h3>Seção II<br>
	Da Cultura</h3>

	<p><span class="artigo">Art. 215.</span> O Estado garantirá a todos o pleno exercício dos direitos culturais e acesso às fontes da cultura nacional, e apoiará e incentivará a valorização e a difusão das manifestações culturais.</p>

	<p><span class="paragrafo">§ 1º.</span> O Estado protegerá as manifestações das culturas populares, indígenas e afro-brasileiras, e das de outros grupos participantes do processo civilizatório nacional.</p>

	<p>2º. A lei disporá sobre a fixação de datas comemorativas de alta significação para os diferentes segmentos étnicos nacionais.</p>

	<p>3º. A lei estabelecerá o Plano Nacional de Cultura, de duração plurianual, visando ao desenvolvimento cultural do País e à integração das ações do poder público que conduzem à: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc48.htm#art1">(Incluído pela Emenda Constitucional nº 48, de 2005)</a></p>

	<p>I defesa e valorização do patrimônio cultural brasileiro; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc48.htm#art1">(Incluído pela Emenda Constitucional nº 48, de 2005)</a></p>

	<p>II produção, promoção e difusão de bens culturais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc48.htm#art1">(Incluído pela Emenda Constitucional nº 48, de 2005)</a></p>

	<p>III formação de pessoal qualificado para a gestão da cultura em suas múltiplas dimensões; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc48.htm#art1">(Incluído pela Emenda Constitucional nº 48, de 2005)</a></p>

	<p>IV democratização do acesso aos bens de cultura; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc48.htm#art1">(Incluído pela Emenda Constitucional nº 48, de 2005)</a></p>

	<p>V valorização da diversidade étnica e regional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc48.htm#art1">(Incluído pela Emenda Constitucional nº 48, de 2005)</a></p>

	<p><span class="artigo">Art. 216.</span> Constituem patrimônio cultural brasileiro os bens de natureza material e imaterial, tomados individualmente ou em conjunto, portadores de referência à identidade, à ação, à memória dos diferentes grupos formadores da sociedade brasileira, nos quais se incluem:</p>

	<p>I - as formas de expressão;</p>

	<p>II - os modos de criar, fazer e viver;</p>

	<p>III - as criações científicas, artísticas e tecnológicas;</p>

	<p>IV - as obras, objetos, documentos, edificações e demais espaços destinados às manifestações artístico-culturais;</p>

	<p>V - os conjuntos urbanos e sítios de valor histórico, paisagístico, artístico, arqueológico, paleontológico, ecológico e científico.</p>

	<p><span class="paragrafo">§ 1º.</span> O Poder Público, com a colaboração da comunidade, promoverá e protegerá o patrimônio cultural brasileiro, por meio de inventários, registros, vigilância, tombamento e desapropriação, e de outras formas de acautelamento e preservação.</p>

	<p><span class="paragrafo">§ 2º.</span> Cabem à administração pública, na forma da lei, a gestão da documentação governamental e as providências para franquear sua consulta a quantos dela necessitem. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2011/Lei/L12527.htm">(Vide Lei nº 12.527, de 2011) </a></p>

	<p><span class="paragrafo">§ 3º.</span> A lei estabelecerá incentivos para a produção e o conhecimento de bens e valores culturais.</p>

	<p><span class="paragrafo">§ 4º.</span> Os danos e ameaças ao patrimônio cultural serão punidos, na forma da lei.</p>

	<p><span class="paragrafo">§ 5º.</span> Ficam tombados todos os documentos e os sítios detentores de reminiscências históricas dos antigos quilombos.</p>

	<p><span class="paragrafo">§ 6º.</span> É facultado aos Estados e ao Distrito Federal vincular a fundo estadual de fomento à cultura até cinco décimos por cento de sua receita tributária líquida, para o financiamento de programas e projetos culturais, vedada a aplicação desses recursos no pagamento de: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>I - despesas com pessoal e encargos sociais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>II - serviço da dívida; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p>III - qualquer outra despesa corrente não vinculada diretamente aos investimentos ou ações apoiados. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art1">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="artigo" id="216A">Art. 216-A.</span> O Sistema Nacional de Cultura, organizado em regime de colaboração, de forma descentralizada e participativa, institui um processo de gestão e promoção conjunta de políticas públicas de cultura, democráticas e permanentes, pactuadas entre os entes da Federação e a sociedade, tendo por objetivo promover o desenvolvimento humano, social e econômico com pleno exercício dos direitos culturais. (<a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a>)</p>

	<p><span class="paragrafo">§ 1º.</span> O Sistema Nacional de Cultura fundamenta-se na política nacional de cultura e nas suas diretrizes, estabelecidas no Plano Nacional de Cultura, e rege-se pelos seguintes princípios: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>I - diversidade das expressões culturais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>II - universalização do acesso aos bens e serviços culturais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>III - fomento à produção, difusão e circulação de conhecimento e bens culturais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>IV - cooperação entre os entes federados, os agentes públicos e privados atuantes na área cultural; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>V - integração e interação na execução das políticas, programas, projetos e ações desenvolvidas; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>VI - complementaridade nos papéis dos agentes culturais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>VII - transversalidade das políticas culturais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>VIII - autonomia dos entes federados e das instituições da sociedade civil; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>IX - transparência e compartilhamento das informações; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>X - democratização dos processos decisórios com participação e controle social; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>XI - descentralização articulada e pactuada da gestão, dos recursos e das ações; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>XII - ampliação progressiva dos recursos contidos nos orçamentos públicos para a cultura. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p><span class="paragrafo">§ 2º.</span> Constitui a estrutura do Sistema Nacional de Cultura, nas respectivas esferas da Federação: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>I - órgãos gestores da cultura; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>II - conselhos de política cultural; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>III - conferências de cultura; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>IV - comissões intergestores; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>V - planos de cultura; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>VI - sistemas de financiamento à cultura; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>VII - sistemas de informações e indicadores culturais; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>VIII - programas de formação na área da cultura; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p>IX - sistemas setoriais de cultura. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p><span class="paragrafo">§ 3º.</span> Lei federal disporá sobre a regulamentação do Sistema Nacional de Cultura, bem como de sua articulação com os demais sistemas nacionais ou políticas setoriais de governo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<p><span class="paragrafo">§ 4º.</span> Os Estados, o Distrito Federal e os Municípios organizarão seus respectivos sistemas de cultura em leis próprias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc71.htm">Incluído pela Emenda Constitucional nº 71, de 2012</a></p>

	<h3>Seção III<br>
	Do Desporto</h3>

	<p><span class="artigo">Art. 217.</span> É dever do Estado fomentar práticas desportivas formais e não-formais, como direito de cada um, observados:</p>

	<p>I - a autonomia das entidades desportivas dirigentes e associações, quanto a sua organização e funcionamento;</p>

	<p>II - a destinação de recursos públicos para a promoção prioritária do desporto educacional e, em casos específicos, para a do desporto de alto rendimento;</p>

	<p>III - o tratamento diferenciado para o desporto profissional e o não- profissional;</p>

	<p>IV - a proteção e o incentivo às manifestações desportivas de criação nacional.</p>

	<p><span class="paragrafo">§ 1º.</span> O Poder Judiciário só admitirá ações relativas à disciplina e às competições desportivas após esgotarem-se as instâncias da justiça desportiva, regulada em lei.</p>

	<p><span class="paragrafo">§ 2º.</span> A justiça desportiva terá o prazo máximo de sessenta dias, contados da instauração do processo, para proferir decisão final.</p>

	<p><span class="paragrafo">§ 3º.</span> O Poder Público incentivará o lazer, como forma de promoção social.</p>

	<h2 class="sum2">CAPÍTULO IV<br>
	Da Ciência, Tecnologia e Inovação</h2>

	<p><span class="artigo">Art. 218.</span> O Estado promoverá e incentivará o desenvolvimento científico, a pesquisa, a capacitação científica e tecnológica e a inovação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Redação dada pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="paragrafo">§ 1º.</span> A pesquisa científica básica e tecnológica receberá tratamento prioritário do Estado, tendo em vista o bem público e o progresso da ciência, tecnologia e inovação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Redação dada pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A pesquisa tecnológica voltar-se-á preponderantemente para a solução dos problemas brasileiros e para o desenvolvimento do sistema produtivo nacional e regional.</p>

	<p><span class="paragrafo">§ 3º.</span> O Estado apoiará a formação de recursos humanos nas áreas de ciência, pesquisa, tecnologia e inovação, inclusive por meio do apoio às atividades de extensão tecnológica, e concederá aos que delas se ocupem meios e condições especiais de trabalho. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Redação dada pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="paragrafo">§ 4º.</span> A lei apoiará e estimulará as empresas que invistam em pesquisa, criação de tecnologia adequada ao País, formação e aperfeiçoamento de seus recursos humanos e que pratiquem sistemas de remuneração que assegurem ao empregado, desvinculada do salário, participação nos ganhos econômicos resultantes da produtividade de seu trabalho.</p>

	<p><span class="paragrafo">§ 5º.</span> É facultado aos Estados e ao Distrito Federal vincular parcela de sua receita orçamentária a entidades públicas de fomento ao ensino e à pesquisa científica e tecnológica.</p>

	<p><span class="paragrafo">§ 6º.</span> O Estado, na execução das atividades previstas no caput, estimulará a articulação entre entes, tanto públicos quanto privados, nas diversas esferas de governo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Incluído pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="paragrafo">§ 7º.</span> O Estado promoverá e incentivará a atuação no exterior das instituições públicas de ciência, tecnologia e inovação, com vistas à execução das atividades previstas no caput. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Incluído pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="artigo">Art. 219.</span> O mercado interno integra o patrimônio nacional e será incentivado de modo a viabilizar o desenvolvimento cultural e socioeconômico, o bem-estar da população e a autonomia tecnológica do País, nos termos de lei federal.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O Estado estimulará a formação e o fortalecimento da inovação nas empresas, bem como nos demais entes, públicos ou privados, a constituição e a manutenção de parques e polos tecnológicos e de demais ambientes promotores da inovação, a atuação dos inventores independentes e a criação, absorção, difusão e transferência de tecnologia. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Incluído pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="artigo" id="219A">Art. 219-A.</span> A União, os Estados, o Distrito Federal e os Municípios poderão firmar instrumentos de cooperação com órgãos e entidades públicos e com entidades privadas, inclusive para o compartilhamento de recursos humanos especializados e capacidade instalada, para a execução de projetos de pesquisa, de desenvolvimento científico e tecnológico e de inovação, mediante contrapartida financeira ou não financeira assumida pelo ente beneficiário, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Incluído pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="artigo" id="219B">Art. 219-B.</span> O Sistema Nacional de Ciência, Tecnologia e Inovação (SNCTI) será organizado em regime de colaboração entre entes, tanto públicos quanto privados, com vistas a promover o desenvolvimento científico e tecnológico e a inovação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Incluído pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Lei federal disporá sobre as normas gerais do SNCTI. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Incluído pela Emenda Constitucional nº 85, de 2015)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os Estados, o Distrito Federal e os Municípios legislarão concorrentemente sobre suas peculiaridades. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc85.htm#art1">(Incluído pela Emenda Constitucional nº 85, de 2015)</a></p>

	<h2 class="sum2">CAPÍTULO V<br>
	Da Comunicação Social</h2>

	<p><span class="artigo">Art. 220.</span> A manifestação do pensamento, a criação, a expressão e a informação, sob qualquer forma, processo ou veículo não sofrerão qualquer restrição, observado o disposto nesta Constituição.</p>

	<p><span class="paragrafo">§ 1º.</span> Nenhuma lei conterá dispositivo que possa constituir embaraço à plena liberdade de informação jornalística em qualquer veículo de comunicação social, observado o disposto no art. 5º, IV, V, X, XIII e XIV.</p>

	<p><span class="paragrafo">§ 2º.</span> É vedada toda e qualquer censura de natureza política, ideológica e artística.</p>

	<p><span class="paragrafo">§ 3º.</span> Compete à lei federal:</p>

	<p>I - regular as diversões e espetáculos públicos, cabendo ao Poder Público informar sobre a natureza deles, as faixas etárias a que não se recomendem, locais e horários em que sua apresentação se mostre inadequada;</p>

	<p>II - estabelecer os meios legais que garantam à pessoa e à família a possibilidade de se defenderem de programas ou programações de rádio e televisão que contrariem o disposto no art. 221, bem como da propaganda de produtos, práticas e serviços que possam ser nocivos à saúde e ao meio ambiente.</p>

	<p><span class="paragrafo">§ 4º.</span> A propaganda comercial de tabaco, bebidas alcoólicas, agrotóxicos, medicamentos e terapias estará sujeita a restrições legais, nos termos do inciso II do parágrafo anterior, e conterá, sempre que necessário, advertência sobre os malefícios decorrentes de seu uso.</p>

	<p><span class="paragrafo">§ 5º.</span> Os meios de comunicação social não podem, direta ou indiretamente, ser objeto de monopólio ou oligopólio.</p>

	<p><span class="paragrafo">§ 6º.</span> A publicação de veículo impresso de comunicação independe de licença de autoridade.</p>

	<p><span class="artigo">Art. 221.</span> A produção e a programação das emissoras de rádio e televisão atenderão aos seguintes princípios:</p>

	<p>I - preferência a finalidades educativas, artísticas, culturais e informativas;</p>

	<p>II - promoção da cultura nacional e regional e estímulo à produção independente que objetive sua divulgação;</p>

	<p>III - regionalização da produção cultural, artística e jornalística, conforme percentuais estabelecidos em lei;</p>

	<p>IV - respeito aos valores éticos e sociais da pessoa e da família.</p>

	<p><span class="artigo">Art. 222.</span> A propriedade de empresa jornalística e de radiodifusão sonora e de sons e imagens é privativa de brasileiros natos ou naturalizados há mais de dez anos, ou de pessoas jurídicas constituídas sob as leis brasileiras e que tenham sede no País. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc36.htm#art1">(Redação dada pela Emenda Constitucional nº 36, de 2002)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Em qualquer caso, pelo menos setenta por cento do capital total e do capital votante das empresas jornalísticas e de radiodifusão sonora e de sons e imagens deverá pertencer, direta ou indiretamente, a brasileiros natos ou naturalizados há mais de dez anos, que exercerão obrigatoriamente a gestão das atividades e estabelecerão o conteúdo da programação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc36.htm#art1">(Redação dada pela Emenda Constitucional nº 36, de 2002)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A responsabilidade editorial e as atividades de seleção e direção da programação veiculada são privativas de brasileiros natos ou naturalizados há mais de dez anos, em qualquer meio de comunicação social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc36.htm#art1">(Redação dada pela Emenda Constitucional nº 36, de 2002)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Os meios de comunicação social eletrônica, independentemente da tecnologia utilizada para a prestação do serviço, deverão observar os princípios enunciados no art. 221, na forma de lei específica, que também garantirá a prioridade de profissionais brasileiros na execução de produções nacionais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc36.htm#art1">(Incluído pela Emenda Constitucional nº 36, de 2002)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Lei disciplinará a participação de capital estrangeiro nas empresas de que trata o <span class="paragrafo">§ 1º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc36.htm#art1">(Incluído pela Emenda Constitucional nº 36, de 2002)</a></p>

	<p><span class="paragrafo">§ 5º.</span> As alterações de controle societário das empresas de que trata o <span class="paragrafo">§ 1º.</span> serão comunicadas ao Congresso Nacional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc36.htm#art1">(Incluído pela Emenda Constitucional nº 36, de 2002)</a></p>

	<p><span class="artigo">Art. 223.</span> Compete ao Poder Executivo outorgar e renovar concessão, permissão e autorização para o serviço de radiodifusão sonora e de sons e imagens, observado o princípio da complementaridade dos sistemas privado, público e estatal.</p>

	<p><span class="paragrafo">§ 1º.</span> O Congresso Nacional apreciará o ato no prazo do art. 64, <span class="paragrafo">§ 2º.</span> e § 4º, a contar do recebimento da mensagem.</p>

	<p><span class="paragrafo">§ 2º.</span> A não renovação da concessão ou permissão dependerá de aprovação de, no mínimo, dois quintos do Congresso Nacional, em votação nominal.</p>

	<p><span class="paragrafo">§ 3º.</span> O ato de outorga ou renovação somente produzirá efeitos legais após deliberação do Congresso Nacional, na forma dos parágrafos anteriores.</p>

	<p><span class="paragrafo">§ 4º.</span> O cancelamento da concessão ou permissão, antes de vencido o prazo, depende de decisão judicial.</p>

	<p><span class="paragrafo">§ 5º.</span> O prazo da concessão ou permissão será de dez anos para as emissoras de rádio e de quinze para as de televisão.</p>

	<p><span class="artigo">Art. 224.</span> Para os efeitos do disposto neste capítulo, o Congresso Nacional instituirá, como seu órgão auxiliar, o Conselho de Comunicação Social, na forma da lei.</p>

	<h2 class="sum2">CAPÍTULO VI<br>
	Do Meio Ambiente</h2>

	<p><span class="artigo">Art. 225.</span> Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.</p>

	<p><span class="paragrafo">§ 1º.</span> Para assegurar a efetividade desse direito, incumbe ao Poder Público:</p>

	<p>I - preservar e restaurar os processos ecológicos essenciais e prover o manejo ecológico das espécies e ecossistemas; <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9985.htm">(Regulamento)</a></p>

	<p>II - preservar a diversidade e a integridade do patrimônio genético do País e fiscalizar as entidades dedicadas à pesquisa e manipulação de material genético; <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9985.htm">(Regulamento)</a><a href="http://www.planalto.gov.br/ccivil_03/MPV/2186-16.htm">(Regulamento) </a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2005/Lei/L11105.htm">(Regulamento)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13123.htm">(Regulamento) </a></p>

	<p>III - definir, em todas as unidades da Federação, espaços territoriais e seus componentes a serem especialmente protegidos, sendo a alteração e a supressão permitidas somente através de lei, vedada qualquer utilização que comprometa a integridade dos atributos que justifiquem sua proteção; <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9985.htm">(Regulamento)</a></p>

	<p>IV - exigir, na forma da lei, para instalação de obra ou atividade potencialmente causadora de significativa degradação do meio ambiente, estudo prévio de impacto ambiental, a que se dará publicidade; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2005/Lei/L11105.htm">(Regulamento)</a></p>

	<p>V - controlar a produção, a comercialização e o emprego de técnicas, métodos e substâncias que comportem risco para a vida, a qualidade de vida e o meio ambiente; <a href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2005/Lei/L11105.htm">(Regulamento)</a></p>

	<p>VI - promover a educação ambiental em todos os níveis de ensino e a conscientização pública para a preservação do meio ambiente;</p>

	<p>VII - proteger a fauna e a flora, vedadas, na forma da lei, as práticas que coloquem em risco sua função ecológica, provoquem a extinção de espécies ou submetam os animais a crueldade. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9985.htm">(Regulamento)</a></p>

	VIII - manter regime fiscal favorecido para os biocombustíveis destinados ao consumo final, na forma de lei complementar, a fim de assegurar-lhes tributação inferior à incidente sobre os combustíveis fósseis, capaz de garantir diferencial competitivo em relação a estes, especialmente em relação às contribuições de que tratam a alínea "b" do inciso I e o inciso IV do caput do art. 195 e o art. 239 e ao imposto a que se refere o inciso II do caput do art. 155 desta Constituição. (Incluído pela Emenda Constitucional nº 123, de 2022)

	<p><span class="paragrafo">§ 2º.</span> Aquele que explorar recursos minerais fica obrigado a recuperar o meio ambiente degradado, de acordo com solução técnica exigida pelo órgão público competente, na forma da lei.</p>

	<p><span class="paragrafo">§ 3º.</span> As condutas e atividades consideradas lesivas ao meio ambiente sujeitarão os infratores, pessoas físicas ou jurídicas, a sanções penais e administrativas, independentemente da obrigação de reparar os danos causados.</p>

	<p><span class="paragrafo">§ 4º.</span> A Floresta Amazônica brasileira, a Mata Atlântica, a Serra do Mar, o Pantanal Mato-Grossense e a Zona Costeira são patrimônio nacional, e sua utilização far-se-á, na forma da lei, dentro de condições que assegurem a preservação do meio ambiente, inclusive quanto ao uso dos recursos naturais. <a href="http://www.planalto.gov.br/ccivil_03/MPV/2186-16.htm">(Regulamento) </a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13123.htm">(Regulamento) </a></p>

	<p><span class="paragrafo">§ 5º.</span> São indisponíveis as terras devolutas ou arrecadadas pelos Estados, por ações discriminatórias, necessárias à proteção dos ecossistemas naturais.</p>

	<p><span class="paragrafo">§ 6º.</span> As usinas que operem com reator nuclear deverão ter sua localização definida em lei federal, sem o que não poderão ser instaladas.</p>

	<p><span class="paragrafo">§ 7º.</span> Para fins do disposto na parte final do inciso VII do <span class="paragrafo">§ 1º.</span> deste artigo, não se consideram cruéis as práticas desportivas que utilizem animais, desde que sejam manifestações culturais, conforme o <span class="paragrafo">§ 1º.</span> do art. 215 desta Constituição Federal, registradas como bem de natureza imaterial integrante do patrimônio cultural brasileiro, devendo ser regulamentadas por lei específica que assegure o bem-estar dos animais envolvidos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc96.htm">(Incluído pela Emenda Constitucional nº 96, de 2017)</a></p>

	<h2 class="sum2">CAPÍTULO VII<br>
	Da Família, da Criança, do Adolescente, do Jovem e do Idoso</h2>

	<p><span class="artigo">Art. 226.</span> A família, base da sociedade, tem especial proteção do Estado.</p>

	<p><span class="paragrafo">§ 1º.</span> O casamento é civil e gratuita a celebração.</p>

	<p><span class="paragrafo">§ 2º.</span> O casamento religioso tem efeito civil, nos termos da lei.</p>

	<p><span class="paragrafo">§ 3º.</span> Para efeito da proteção do Estado, é reconhecida a união estável entre o homem e a mulher como entidade familiar, devendo a lei facilitar sua conversão em casamento. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9278.htm">(Regulamento) </a></p>

	<p><span class="paragrafo">§ 4º.</span> Entende-se, também, como entidade familiar a comunidade formada por qualquer dos pais e seus descendentes.</p>

	<p><span class="paragrafo">§ 5º.</span> Os direitos e deveres referentes à sociedade conjugal são exercidos igualmente pelo homem e pela mulher.</p>

	<p><span class="paragrafo">§ 6º.</span> O casamento civil pode ser dissolvido pelo divórcio. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc66.htm#art1">(Redação dada Pela Emenda Constitucional nº 66, de 2010)</a></p>

	<p><span class="paragrafo">§ 7º.</span> Fundado nos princípios da dignidade da pessoa humana e da paternidade responsável, o planejamento familiar é livre decisão do casal, competindo ao Estado propiciar recursos educacionais e científicos para o exercício desse direito, vedada qualquer forma coercitiva por parte de instituições oficiais ou privadas. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9263.htm">Regulamento </a></p>

	<p><span class="paragrafo">§ 8º.</span> O Estado assegurará a assistência à família na pessoa de cada um dos que a integram, criando mecanismos para coibir a violência no âmbito de suas relações.</p>

	<p><span class="artigo">Art. 227.</span> É dever da família, da sociedade e do Estado assegurar à criança, ao adolescente e ao jovem, com absoluta prioridade, o direito à vida, à saúde, à alimentação, à educação, ao lazer, à profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência familiar e comunitária, além de colocá-los a salvo de toda forma de negligência, discriminação, exploração, violência, crueldade e opressão. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc65.htm#art2">(Redação dada Pela Emenda Constitucional nº 65, de 2010)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O Estado promoverá programas de assistência integral à saúde da criança, do adolescente e do jovem, admitida a participação de entidades não governamentais, mediante políticas específicas e obedecendo aos seguintes preceitos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc65.htm#art2">(Redação dada Pela Emenda Constitucional nº 65, de 2010)</a></p>

	<p>I - aplicação de percentual dos recursos públicos destinados à saúde na assistência materno-infantil;</p>

	<p>II - criação de programas de prevenção e atendimento especializado para as pessoas portadoras de deficiência física, sensorial ou mental, bem como de integração social do adolescente e do jovem portador de deficiência, mediante o treinamento para o trabalho e a convivência, e a facilitação do acesso aos bens e serviços coletivos, com a eliminação de obstáculos arquitetônicos e de todas as formas de discriminação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc65.htm#art2">(Redação dada Pela Emenda Constitucional nº 65, de 2010)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A lei disporá sobre normas de construção dos logradouros e dos edifícios de uso público e de fabricação de veículos de transporte coletivo, a fim de garantir acesso adequado às pessoas portadoras de deficiência.</p>

	<p><span class="paragrafo">§ 3º.</span> O direito a proteção especial abrangerá os seguintes aspectos:</p>

	<p>I - idade mínima de quatorze anos para admissão ao trabalho, observado o disposto no art. 7º, XXXIII;</p>

	<p>II - garantia de direitos previdenciários e trabalhistas;</p>

	<p>III - garantia de acesso do trabalhador adolescente e jovem à escola; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc65.htm#art2">(Redação dada Pela Emenda Constitucional nº 65, de 2010)</a></p>

	<p>IV - garantia de pleno e formal conhecimento da atribuição de ato infracional, igualdade na relação processual e defesa técnica por profissional habilitado, segundo dispuser a legislação tutelar específica;</p>

	<p>V - obediência aos princípios de brevidade, excepcionalidade e respeito à condição peculiar de pessoa em desenvolvimento, quando da aplicação de qualquer medida privativa da liberdade;</p>

	<p>VI - estímulo do Poder Público, através de assistência jurídica, incentivos fiscais e subsídios, nos termos da lei, ao acolhimento, sob a forma de guarda, de criança ou adolescente órfão ou abandonado;</p>

	<p>VII - programas de prevenção e atendimento especializado à criança, ao adolescente e ao jovem dependente de entorpecentes e drogas afins. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc65.htm#art2">(Redação dada Pela Emenda Constitucional nº 65, de 2010)</a></p>

	<p><span class="paragrafo">§ 4º.</span> A lei punirá severamente o abuso, a violência e a exploração sexual da criança e do adolescente.</p>

	<p><span class="paragrafo">§ 5º.</span> A adoção será assistida pelo Poder Público, na forma da lei, que estabelecerá casos e condições de sua efetivação por parte de estrangeiros.</p>

	<p><span class="paragrafo">§ 6º.</span> Os filhos, havidos ou não da relação do casamento, ou por adoção, terão os mesmos direitos e qualificações, proibidas quaisquer designações discriminatórias relativas à filiação.</p>

	<p><span class="paragrafo">§ 7º.</span> No atendimento dos direitos da criança e do adolescente levar-se- á em consideração o disposto no art. 204.</p>

	<p><span class="paragrafo">§ 8º.</span> A lei estabelecerá: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc65.htm#art2">(Incluído Pela Emenda Constitucional nº 65, de 2010)</a></p>

	<p>I - o estatuto da juventude, destinado a regular os direitos dos jovens; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc65.htm#art2">(Incluído Pela Emenda Constitucional nº 65, de 2010)</a></p>

	<p>II - o plano nacional de juventude, de duração decenal, visando à articulação das várias esferas do poder público para a execução de políticas públicas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc65.htm#art2">(Incluído Pela Emenda Constitucional nº 65, de 2010)</a></p>

	<p><span class="artigo">Art. 228.</span> São penalmente inimputáveis os menores de dezoito anos, sujeitos às normas da legislação especial.</p>

	<p><span class="artigo">Art. 229.</span> Os pais têm o dever de assistir, criar e educar os filhos menores, e os filhos maiores têm o dever de ajudar e amparar os pais na velhice, carência ou enfermidade.</p>

	<p><span class="artigo">Art. 230.</span> A família, a sociedade e o Estado têm o dever de amparar as pessoas idosas, assegurando sua participação na comunidade, defendendo sua dignidade e bem-estar e garantindo-lhes o direito à vida.</p>

	<p><span class="paragrafo">§ 1º.</span> Os programas de amparo aos idosos serão executados preferencialmente em seus lares.</p>

	<p><span class="paragrafo">§ 2º.</span> Aos maiores de sessenta e cinco anos é garantida a gratuidade dos transportes coletivos urbanos.</p>

	<h2 class="sum2">CAPÍTULO VIII<br>
	Dos Índios</h2>

	<p><span class="artigo">Art. 231.</span> São reconhecidos aos índios sua organização social, costumes, línguas, crenças e tradições, e os direitos originários sobre as terras que tradicionalmente ocupam, competindo à União demarcá-las, proteger e fazer respeitar todos os seus bens.</p>

	<p><span class="paragrafo">§ 1º.</span> São terras tradicionalmente ocupadas pelos índios as por eles habitadas em caráter permanente, as utilizadas para suas atividades produtivas, as imprescindíveis à preservação dos recursos ambientais necessários a seu bem-estar e as necessárias a sua reprodução física e cultural, segundo seus usos, costumes e tradições.</p>

	<p><span class="paragrafo">§ 2º.</span> As terras tradicionalmente ocupadas pelos índios destinam-se a sua posse permanente, cabendo-lhes o usufruto exclusivo das riquezas do solo, dos rios e dos lagos nelas existentes.</p>

	<p><span class="paragrafo">§ 3º.</span> O aproveitamento dos recursos hídricos, incluídos os potenciais energéticos, a pesquisa e a lavra das riquezas minerais em terras indígenas só podem ser efetivados com autorização do Congresso Nacional, ouvidas as comunidades afetadas, ficando-lhes assegurada participação nos resultados da lavra, na forma da lei.</p>

	<p><span class="paragrafo">§ 4º.</span> As terras de que trata este artigo são inalienáveis e indisponíveis, e os direitos sobre elas, imprescritíveis.</p>

	<p><span class="paragrafo">§ 5º.</span> É vedada a remoção dos grupos indígenas de suas terras, salvo, "ad referendum" do Congresso Nacional, em caso de catástrofe ou epidemia que ponha em risco sua população, ou no interesse da soberania do País, após deliberação do Congresso Nacional, garantido, em qualquer hipótese, o retorno imediato logo que cesse o risco.</p>

	<p><span class="paragrafo">§ 6º.</span> São nulos e extintos, não produzindo efeitos jurídicos, os atos que tenham por objeto a ocupação, o domínio e a posse das terras a que se refere este artigo, ou a exploração das riquezas naturais do solo, dos rios e dos lagos nelas existentes, ressalvado relevante interesse público da União, segundo o que dispuser lei complementar, não gerando a nulidade e a extinção direito a indenização ou a ações contra a União, salvo, na forma da lei, quanto às benfeitorias derivadas da ocupação de boa fé.</p>

	<p><span class="paragrafo">§ 7º.</span> Não se aplica às terras indígenas o disposto no art. 174, <span class="paragrafo">§ 3º.</span> e <span class="paragrafo">§ 4º.</span></p><p></p>

	<p><span class="artigo">Art. 232.</span> Os índios, suas comunidades e organizações são partes legítimas para ingressar em juízo em defesa de seus direitos e interesses, intervindo o Ministério Público em todos os atos do processo.</p>

	<h1>TÍTULO IX<br>
	Das Disposições Constitucionais Gerais</h1>

	<p><span class="artigo">Art. 233.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc28.htm#art2">(Revogado pela Emenda Constitucional nº 28, de 25/05/2000)</a></p>

	<p><span class="artigo">Art. 234.</span> É vedado à União, direta ou indiretamente, assumir, em decorrência da criação de Estado, encargos referentes a despesas com pessoal inativo e com encargos e amortizações da dívida interna ou externa da administração pública, inclusive da indireta.</p>

	<p><span class="artigo">Art. 235.</span> Nos dez primeiros anos da criação de Estado, serão observadas as seguintes normas básicas:</p>

	<p>I - a Assembleia Legislativa será composta de dezessete Deputados se a população do Estado for inferior a seiscentos mil habitantes, e de vinte e quatro, se igual ou superior a esse número, até um milhão e quinhentos mil;</p>

	<p>II - o Governo terá no máximo dez Secretarias;</p>

	<p>III - o Tribunal de Contas terá três membros, nomeados, pelo Governador eleito, dentre brasileiros de comprovada idoneidade e notório saber;</p>

	<p>IV - o Tribunal de Justiça terá sete Desembargadores;</p>

	<p>V - os primeiros Desembargadores serão nomeados pelo Governador eleito, escolhidos da seguinte forma:</p>

	<p class="alinea">a) cinco dentre os magistrados com mais de trinta e cinco anos de idade, em exercício na área do novo Estado ou do Estado originário;</p>

	<p class="alinea">b) dois dentre promotores, nas mesmas condições, e advogados de comprovada idoneidade e saber jurídico, com dez anos, no mínimo, de exercício profissional, obedecido o procedimento fixado na Constituição;</p>

	<p>VI - no caso de Estado proveniente de Território Federal, os cinco primeiros Desembargadores poderão ser escolhidos dentre juízes de direito de qualquer parte do País;</p>

	<p>VII - em cada Comarca, o primeiro Juiz de Direito, o primeiro Promotor de Justiça e o primeiro Defensor Público serão nomeados pelo Governador eleito após concurso público de provas e títulos;</p>

	<p>VIII - até a promulgação da Constituição Estadual, responderão pela Procuradoria-Geral, pela Advocacia-Geral e pela Defensoria-Geral do Estado advogados de notório saber, com trinta e cinco anos de idade, no mínimo, nomeados pelo Governador eleito e demissíveis "ad nutum";</p>

	<p>IX - se o novo Estado for resultado de transformação de Território Federal, a transferência de encargos financeiros da União para pagamento dos servidores optantes que pertenciam à Administração Federal ocorrerá da seguinte forma:</p>

	<p class="alinea">a) no sexto ano de instalação, o Estado assumirá vinte por cento dos encargos financeiros para fazer face ao pagamento dos servidores públicos, ficando ainda o restante sob a responsabilidade da União;</p>

	<p class="alinea">b) no sétimo ano, os encargos do Estado serão acrescidos de trinta por cento e, no oitavo, dos restantes cinquenta por cento;</p>

	<p>X - as nomeações que se seguirem às primeiras, para os cargos mencionados neste artigo, serão disciplinadas na Constituição Estadual;</p>

	<p>XI - as despesas orçamentárias com pessoal não poderão ultrapassar cinquenta por cento da receita do Estado.</p>

	<p><span class="artigo">Art. 236.</span> Os serviços notariais e de registro são exercidos em caráter privado, por delegação do Poder Público. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8935.htm">(Regulamento)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Lei regulará as atividades, disciplinará a responsabilidade civil e criminal dos notários, dos oficiais de registro e de seus prepostos, e definirá a fiscalização de seus atos pelo Poder Judiciário.</p>

	<p><span class="paragrafo">§ 2º.</span> Lei federal estabelecerá normas gerais para fixação de emolumentos relativos aos atos praticados pelos serviços notariais e de registro. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L10169.htm">(Regulamento)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O ingresso na atividade notarial e de registro depende de concurso público de provas e títulos, não se permitindo que qualquer serventia fique vaga, sem abertura de concurso de provimento ou de remoção, por mais de seis meses.</p>

	<p><span class="artigo">Art. 237.</span> A fiscalização e o controle sobre o comércio exterior, essenciais à defesa dos interesses fazendários nacionais, serão exercidos pelo Ministério da Fazenda.</p>

	<p><span class="artigo">Art. 238.</span> A lei ordenará a venda e revenda de combustíveis de petróleo, álcool carburante e outros combustíveis derivados de matérias-primas renováveis, respeitados os princípios desta Constituição.</p>

	<p><span class="artigo">Art. 239.</span> A arrecadação decorrente das contribuições para o Programa de Integração Social, criado pela <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp07.htm">Lei Complementar nº 7, de 7 de setembro de 1970</a>, e para o Programa de Formação do Patrimônio do Servidor Público, criado pela <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp08.htm">Lei Complementar nº 8, de 3 de dezembro de 1970</a>, passa, a partir da promulgação desta Constituição, a financiar, nos termos que a lei dispuser, o programa do seguro-desemprego, outras ações da previdência social e o abono de que trata o <span class="paragrafo">§ 3º.</span> deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 1º.</span> dos recursos mencionados no caput, no mínimo 28% (vinte e oito por cento) serão destinados para o financiamento de programas de desenvolvimento econômico, por meio do Banco Nacional de Desenvolvimento Econômico e Social, com critérios de remuneração que preservem o seu valor. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Redação dada pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os patrimônios acumulados do Programa de Integração Social e do Programa de Formação do Patrimônio do Servidor Público são preservados, mantendo-se os critérios de saque nas situações previstas nas leis específicas, com exceção da retirada por motivo de casamento, ficando vedada a distribuição da arrecadação de que trata o "caput" deste artigo, para depósito nas contas individuais dos participantes.</p>

	<p><span class="paragrafo">§ 3º.</span> Aos empregados que percebam de empregadores que contribuem para o Programa de Integração Social ou para o Programa de Formação do Patrimônio do Servidor Público, até dois salários mínimos de remuneração mensal, é assegurado o pagamento de um salário mínimo anual, computado neste valor o rendimento das contas individuais, no caso daqueles que já participavam dos referidos programas, até a data da promulgação desta Constituição.</p>

	<p><span class="paragrafo">§ 4º.</span> O financiamento do seguro-desemprego receberá uma contribuição adicional da empresa cujo índice de rotatividade da força de trabalho superar o índice médio da rotatividade do setor, na forma estabelecida por lei.</p>

	<p><span class="paragrafo">§ 5º.</span> Os programas de desenvolvimento econômico financiados na forma do <span class="paragrafo">§ 1º.</span> e seus resultados serão anualmente avaliados e divulgados em meio de comunicação social eletrônico e apresentados em reunião da comissão mista permanente de que trata o <span class="paragrafo">§ 1º.</span> do art. 166. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art1">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p><span class="artigo">Art. 240.</span> Ficam ressalvadas do disposto no art. 195 as atuais contribuições compulsórias dos empregadores sobre a folha de salários, destinadas às entidades privadas de serviço social e de formação profissional vinculadas ao sistema sindical.</p>

	<p><span class="artigo">Art. 241.</span> A União, os Estados, o Distrito Federal e os Municípios disciplinarão por meio de lei os consórcios públicos e os convênios de cooperação entre os entes federados, autorizando a gestão associada de serviços públicos, bem como a transferência total ou parcial de encargos, serviços, pessoal e bens essenciais à continuidade dos serviços transferidos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art24">(Redação dada pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="artigo">Art. 242.</span> O princípio do art. 206, IV, não se aplica às instituições educacionais oficiais criadas por lei estadual ou municipal e existentes na data da promulgação desta Constituição, que não sejam total ou preponderantemente mantidas com recursos públicos.</p>

	<p><span class="paragrafo">§ 1º.</span> O ensino da História do Brasil levará em conta as contribuições das diferentes culturas e etnias para a formação do povo brasileiro.</p>

	<p><span class="paragrafo">§ 2º.</span> O Colégio Pedro II, localizado na cidade do Rio de Janeiro, será mantido na órbita federal.</p>

	<p><span class="artigo">Art. 243.</span> As propriedades rurais e urbanas de qualquer região do País onde forem localizadas culturas ilegais de plantas psicotrópicas ou a exploração de trabalho escravo na forma da lei serão expropriadas e destinadas à reforma agrária e a programas de habitação popular, sem qualquer indenização ao proprietário e sem prejuízo de outras sanções previstas em lei, observado, no que couber, o disposto no art. 5º. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc81.htm#art1">(Redação dada pela Emenda Constitucional nº 81, de 2014)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Todo e qualquer bem de valor econômico apreendido em decorrência do tráfico ilícito de entorpecentes e drogas afins e da exploração de trabalho escravo será confiscado e reverterá a fundo especial com destinação específica, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc81.htm#art1">(Redação dada pela Emenda Constitucional nº 81, de 2014)</a></p>

	<p><span class="artigo">Art. 244.</span> A lei disporá sobre a adaptação dos logradouros, dos edifícios de uso público e dos veículos de transporte coletivo atualmente existentes a fim de garantir acesso adequado às pessoas portadoras de deficiência, conforme o disposto no art. 227, <span class="paragrafo">§ 2º.</span></p><p></p>

	<p><span class="artigo">Art. 245.</span> A lei disporá sobre as hipóteses e condições em que o Poder Público dará assistência aos herdeiros e dependentes carentes de pessoas vitimadas por crime doloso, sem prejuízo da responsabilidade civil do autor do ilícito.</p>

	<p><span class="artigo">Art. 246.</span> É vedada a adoção de medida provisória na regulamentação de artigo da Constituição cuja redação tenha sido alterada por meio de emenda promulgada entre 1º. de janeiro de 1995 até a promulgação desta emenda, inclusive.</p>

	<p><span class="artigo">Art. 247.</span> As leis previstas no inciso III do <span class="paragrafo">§ 1º.</span> do art. 41 e no <span class="paragrafo">§ 7º.</span> do art. 169 estabelecerão critérios e garantias especiais para a perda do cargo pelo servidor público estável que, em decorrência das atribuições de seu cargo efetivo, desenvolva atividades exclusivas de Estado. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art32">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Na hipótese de insuficiência de desempenho, a perda do cargo somente ocorrerá mediante processo administrativo em que lhe sejam assegurados o contraditório e a ampla defesa. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc19.htm#art247">(Incluído pela Emenda Constitucional nº 19, de 1998)</a></p>

	<p><span class="artigo">Art. 248.</span> Os benefícios pagos, a qualquer título, pelo órgão responsável pelo regime geral de previdência social, ainda que à conta do Tesouro Nacional, e os não sujeitos ao limite máximo de valor fixado para os benefícios concedidos por esse regime observarão os limites fixados no art. 37, XI. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art248">(Incluído pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="artigo">Art. 249.</span> Com o objetivo de assegurar recursos para o pagamento de proventos de aposentadoria e pensões concedidas aos respectivos servidores e seus dependentes, em adição aos recursos dos respectivos tesouros, a União, os Estados, o Distrito Federal e os Municípios poderão constituir fundos integrados pelos recursos provenientes de contribuições e por bens, direitos e ativos de qualquer natureza, mediante lei que disporá sobre a natureza e administração desses fundos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art249">(Incluído pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p><span class="artigo">Art. 250.</span> Com o objetivo de assegurar recursos para o pagamento dos benefícios concedidos pelo regime geral de previdência social, em adição aos recursos de sua arrecadação, a União poderá constituir fundo integrado por bens, direitos e ativos de qualquer natureza, mediante lei que disporá sobre a natureza e administração desse fundo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc20.htm#art250">(Incluído pela Emenda Constitucional nº 20, de 1998)</a></p>

	<p>Brasília, 5 de outubro de 1988.</p>

	<p>Ulysses Guimarães, Presidente - Mauro Benevides, 1.º. Vice-Presidente - Jorge Arbage, 2.º. Vice-Presidente - Marcelo Cordeiro, 1.º. Secretário - Mário Maia, 2.º. Secretário - Arnaldo Faria de Sá, 3.º. Secretário - Benedita da Silva, 1.º. Suplente de Secretário - Luiz Soyer, 2.º. Suplente de Secretário - Sotero Cunha, 3.º. Suplente de Secretário - Bernardo Cabral, Relator Geral - Adolfo Oliveira, Relator Adjunto - Antônio Carlos Konder Reis, Relator Adjunto - José Fogaça, Relator Adjunto - Abigail Feitosa - Acival Gomes - Adauto Pereira - Ademir Andrade - Adhemar de Barros Filho - Adroaldo Streck - Adylson Motta - Aécio de Borba - Aécio Neves - Affonso Camargo - Afif Domingos - Afonso Arinos - Afonso Sancho - Agassiz Almeida - Agripino de Oliveira Lima - Airton Cordeiro - Airton Sandoval - Alarico Abib - Albano Franco - Albérico Cordeiro - Albérico Filho - Alceni Guerra - Alcides Saldanha - Aldo Arantes - Alércio Dias - Alexandre Costa - Alexandre Puzyna - Alfredo Campos - Almir Gabriel - Aloisio Vasconcelos - Aloysio Chaves - Aloysio Teixeira - Aluizio Bezerra - Aluízio Campos - Álvaro Antônio - Álvaro Pacheco - Álvaro Valle - Alysson Paulinelli - Amaral Netto - Amaury Muller - Amilcar Moreira - Ângelo Magalhães - Anna Maria Rattes - Annibal Barcellos - Antero de Barros - Antônio Câmara - Antônio Carlos Franco - Antonio Carlos Mendes Thame - Antônio de Jesus - Antonio Ferreira - Antonio Gaspar - Antonio Mariz - Antonio Perosa - Antônio Salim Curiati - Antonio Ueno - Arnaldo Martins - Arnaldo Moraes - Arnaldo Prieto - Arnold Fioravante - Arolde de Oliveira - Artenir Werner - Artur da Távola - Asdrubal Bentes - Assis Canuto - Átila Lira - Augusto Carvalho - Áureo Mello - Basílio Villani - Benedicto Monteiro - Benito Gama - Beth Azize - Bezerra de Melo - Bocayuva Cunha - Bonifácio de Andrada - Bosco França - Brandão Monteiro - Caio Pompeu - Carlos Alberto - Carlos Alberto Caó - Carlos Benevides - Carlos Cardinal - Carlos Chiarelli - Carlos Cotta - Carlos De’Carli - Carlos Mosconi - Carlos Sant’Anna - Carlos Vinagre - Carlos Virgílio - Carrel Benevides - Cássio Cunha Lima - Célio de Castro - Celso Dourado - César Cals Neto - César Maia - Chagas Duarte - Chagas Neto - Chagas Rodrigues - Chico Humberto - Christóvam Chiaradia - Cid Carvalho - Cid Sabóia de Carvalho - Cláudio Ávila - Cleonâncio Fonseca - Costa Ferreira - Cristina Tavares - Cunha Bueno - Dálton Canabrava - Darcy Deitos - Darcy Pozza - Daso Coimbra - Davi Alves Silva - Del Bosco Amaral - Delfim Netto - Délio Braz - Denisar Arneiro - Dionisio Dal Prá - Dionísio Hage - Dirce Tutu Quadros - Dirceu Carneiro - Divaldo Suruagy - Djenal Gonçalves - Domingos Juvenil - Domingos Leonelli - Doreto Campanari - Edésio Frias - Edison Lobão - Edivaldo Motta - Edme Tavares - Edmilson Valentim - Eduardo Bonfim - Eduardo Jorge - Eduardo Moreira - Egídio Ferreira Lima - Elias Murad - Eliel Rodrigues - Eliézer Moreira - Enoc Vieira - Eraldo Tinoco - Eraldo Trindade - Erico Pegoraro - Ervin Bonkoski - Etevaldo Nogueira - Euclides Scalco - Eunice Michiles - Evaldo Gonçalves - Expedito Machado - Ézio Ferreira - Fábio Feldmann - Fábio Raunheitti - Farabulini Júnior - Fausto Fernandes - Fausto Rocha - Felipe Mendes - Feres Nader - Fernando Bezerra Coelho - Fernando Cunha - Fernando Gasparian - Fernando Gomes - Fernando Henrique Cardoso - Fernando Lyra - Fernando Santana - Fernando Velasco - Firmo de Castro - Flavio Palmier da Veiga - Flávio Rocha - Florestan Fernandes - Floriceno Paixão - França Teixeira - Francisco Amaral - Francisco Benjamim - Francisco Carneiro - Francisco Coelho - Francisco Diógenes - Francisco Dornelles - Francisco Kuster - Francisco Pinto - Francisco Rollemberg - Francisco Rossi - Francisco Sales - Furtado Leite - Gabriel Guerreiro - Gandi Jamil - Gastone Righi - Genebaldo Correia - Genésio Bernardino - Geovani Borges - Geraldo Alckmin Filho - Geraldo Bulhões - Geraldo Campos - Geraldo Fleming - Geraldo Melo - Gerson Camata - Gerson Marcondes - Gerson Peres - Gidel Dantas - Gil César - Gilson Machado - Gonzaga Patriota - Guilherme Palmeira - Gumercindo Milhomem - Gustavo de Faria - Harlan Gadelha - Haroldo Lima - Haroldo Sabóia - Hélio Costa - Hélio Duque - Hélio Manhães - Hélio Rosas - Henrique Córdova - Henrique Eduardo Alves - Heráclito Fortes - Hermes Zaneti - Hilário Braun - Homero Santos - Humberto Lucena - Humberto Souto - Iberê Ferreira - Ibsen Pinheiro - Inocêncio Oliveira - Irajá Rodrigues - Iram Saraiva - Irapuan Costa Júnior - Irma Passoni - Ismael Wanderley - Israel Pinheiro - Itamar Franco - Ivo Cersósimo - Ivo Lech - Ivo Mainardi - Ivo Vanderlinde - Jacy Scanagatta - Jairo Azi - Jairo Carneiro - Jalles Fontoura - Jamil Haddad - Jarbas Passarinho - Jayme Paliarin - Jayme Santana - Jesualdo Cavalcanti - Jesus Tajra - Joaci Góes - João Agripino - João Alves - João Calmon - João Carlos Bacelar - João Castelo - João Cunha - João da Mata - João de Deus Antunes - João Herrmann Neto - João Lobo - João Machado Rollemberg - João Menezes - João Natal - João Paulo - João Rezek - Joaquim Bevilácqua - Joaquim Francisco - Joaquim Hayckel - Joaquim Sucena - Jofran Frejat - Jonas Pinheiro - Jonival Lucas - Jorge Bornhausen - Jorge Hage - Jorge Leite - Jorge Uequed - Jorge Vianna - José Agripino - José Camargo - José Carlos Coutinho - José Carlos Grecco - José Carlos Martinez - José Carlos Sabóia - José Carlos Vasconcelos - José Costa - José da Conceição - José Dutra - José Egreja - José Elias - José Fernandes - José Freire - José Genoíno - José Geraldo - José Guedes - José Ignácio Ferreira - José Jorge - José Lins - José Lourenço - José Luiz de Sá - José Luiz Maia - José Maranhão - José Maria Eymael - José Maurício - José Melo - José Mendonça Bezerra - José Moura - José Paulo Bisol - José Queiroz - José Richa - José Santana de Vasconcellos - José Serra - José Tavares - José Teixeira - José Thomaz Nonô - José Tinoco - José Ulísses de Oliveira - José Viana - José Yunes - Jovanni Masini - Juarez Antunes - Júlio Campos - Júlio Costamilan - Jutahy Júnior - Jutahy Magalhães - Koyu Iha - Lael Varella - Lavoisier Maia - Leite Chaves - Lélio Souza - Leopoldo Peres - Leur Lomanto - Levy Dias - Lézio Sathler - Lídice da Mata - Louremberg Nunes Rocha - Lourival Baptista - Lúcia Braga - Lúcia Vânia - Lúcio Alcântara - Luís Eduardo - Luís Roberto Ponte - Luiz Alberto Rodrigues - Luiz Freire - Luiz Gushiken - Luiz Henrique - Luiz Inácio Lula da Silva - Luiz Leal - Luiz Marques - Luiz Salomão - Luiz Viana - Luiz Viana Neto - Lysâneas Maciel - Maguito Vilela - Maluly Neto - Manoel Castro - Manoel Moreira - Manoel Ribeiro - Mansueto de Lavor - Manuel Viana - Márcia Kubitschek - Márcio Braga - Márcio Lacerda - Marco Maciel - Marcondes Gadelha - Marcos Lima - Marcos Queiroz - Maria de Lourdes Abadia - Maria Lúcia - Mário Assad - Mário Covas - Mário de Oliveira - Mário Lima - Marluce Pinto - Matheus Iensen - Mattos Leão - Maurício Campos - Maurício Correa - Maurício Fruet - Maurício Nasser - Maurício Pádua - Maurílio Ferreira Lima - Mauro Borges - Mauro Campos - Mauro Miranda - Mauro Sampaio - Max Rosenmann - Meira Filho - Melo Freire - Mello Reis - Mendes Botelho - Mendes Canale - Mendes Ribeiro - Messias Góis - Messias Soares - Michel Temer - Milton Barbosa - Milton Lima - Milton Reis - Miraldo Gomes - Miro Teixeira - Moema São Thiago - Moysés Pimentel - Mozarildo Cavalcanti - Mussa Demes - Myrian Portella - Nabor Júnior - Naphtali Alves de Souza - Narciso Mendes - Nelson Aguiar - Nelson Carneiro - Nelson Jobim - Nelson Sabrá - Nelson Seixas - Nelson Wedekin - Nelton Friedrich - Nestor Duarte - Ney Maranhão - Nilso Sguarezi - Nilson Gibson - Nion Albernaz - Noel de Carvalho - Nyder Barbosa - Octávio Elísio - Odacir Soares - Olavo Pires - Olívio Dutra - Onofre Corrêa - Orlando Bezerra - Orlando Pacheco - Oscar Corrêa - Osmar Leitão - Osmir Lima - Osmundo Rebouças - Osvaldo Bender - Osvaldo Coelho - Osvaldo Macedo - Osvaldo Sobrinho - Oswaldo Almeida - Oswaldo Trevisan - Ottomar Pinto - Paes de Andrade - Paes Landim - Paulo Delgado - Paulo Macarini - Paulo Marques - Paulo Mincarone - Paulo Paim - Paulo Pimentel - Paulo Ramos - Paulo Roberto - Paulo Roberto Cunha - Paulo Silva - Paulo Zarzur - Pedro Canedo - Pedro Ceolin - Percival Muniz - Pimenta da Veiga - Plínio Arruda Sampaio - Plínio Martins - Pompeu de Sousa - Rachid Saldanha Derzi - Raimundo Bezerra - Raimundo Lira - Raimundo Rezende - Raquel Cândido - Raquel Capiberibe - Raul Belém - Raul Ferraz - Renan Calheiros - Renato Bernardi - Renato Johnsson - Renato Vianna - Ricardo Fiuza - Ricardo Izar - Rita Camata - Rita Furtado - Roberto Augusto - Roberto Balestra - Roberto Brant - Roberto Campos - Roberto D’Ávila - Roberto Freire - Roberto Jefferson - Roberto Rollemberg - Roberto Torres - Roberto Vital - Robson Marinho - Rodrigues Palma - Ronaldo Aragão - Ronaldo Carvalho - Ronaldo Cezar Coelho - Ronan Tito - Ronaro Corrêa - Rosa Prata - Rose de Freitas - Rospide Netto - Rubem Branquinho - Rubem Medina - Ruben Figueiró - Ruberval Pilotto - Ruy Bacelar - Ruy Nedel - Sadie Hauache - Salatiel Carvalho - Samir Achôa - Sandra Cavalcanti - Santinho Furtado - Sarney Filho - Saulo Queiroz - Sérgio Brito - Sérgio Spada - Sérgio Werneck - Severo Gomes - Sigmaringa Seixas - Sílvio Abreu - Simão Sessim - Siqueira Campos - Sólon Borges dos Reis - Stélio Dias - Tadeu França - Telmo Kirst - Teotonio Vilela Filho - Theodoro Mendes - Tito Costa - Ubiratan Aguiar - Ubiratan Spinelli - Uldurico Pinto - Valmir Campelo - Valter Pereira - Vasco Alves - Vicente Bogo - Victor Faccioni - Victor Fontana - Victor Trovão - Vieira da Silva - Vilson Souza - Vingt Rosado - Vinicius Cansanção - Virgildásio de Senna - Virgílio Galassi - Virgílio Guimarães - Vitor Buaiz - Vivaldo Barbosa - Vladimir Palmeira - Wagner Lago - Waldec Ornélas - Waldyr Pugliesi - Walmor de Luca - Wilma Maia - Wilson Campos - Wilson Martins - Ziza Valadares.</p>

	<p>Participantes: Álvaro Dias - Antônio Britto - Bete Mendes - Borges da Silveira - Cardoso Alves - Edivaldo Holanda - Expedito Júnior - Fadah Gattass - Francisco Dias - Geovah Amarante - Hélio Gueiros - Horácio Ferraz - Hugo Napoleão - Iturival Nascimento - Ivan Bonato - Jorge Medauar - José Mendonça de Morais - Leopoldo Bessone - Marcelo Miranda - Mauro Fecury - Neuto de Conto - Nivaldo Machado - Oswaldo Lima Filho - Paulo Almada - Prisco Viana - Ralph Biasi - Rosário Congro Neto - Sérgio Naya - Tidei de Lima.</p>

	<p>In Memoriam: Alair Ferreira - Antônio Farias - Fábio Lucena - Norberto Schwantes - Virgílio Távora.</p>

	<p><a href="http://www.planalto.gov.br/ccivil_03/constituicao/DOUconstituicao88.pdf">Este texto não substitui o publicado no DOU de 5.10.1988</a></p>

	<h1 id="adct">ATO DAS DISPOSIÇÕES CONSTITUCIONAIS TRANSITÓRIAS</h1>

	<p id="adct1"><span class="artigo">Art. 1º.</span> O Presidente da República, o Presidente do Supremo Tribunal Federal e os membros do Congresso Nacional prestarão o compromisso de manter, defender e cumprir a Constituição, no ato e na data de sua promulgação.</p>

	<p id="adct2"><span class="artigo">Art. 2º.</span> No dia 7 de setembro de 1993 o eleitorado definirá, através de plebiscito, a forma (república ou monarquia constitucional) e o sistema de governo (parlamentarismo ou presidencialismo) que devem vigorar no País. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc02.htm">(Vide emenda Constitucional nº 2, de 1992)</a></p>

	<p><span class="paragrafo">§ 1º.</span> - Será assegurada gratuidade na livre divulgação dessas formas e sistemas, através dos meios de comunicação de massa cessionários de serviço público.</p>

	<p><span class="paragrafo">§ 2º.</span> - O Tribunal Superior Eleitoral, promulgada a Constituição, expedirá as normas regulamentadoras deste artigo.</p>

	<p id="adct3"><span class="artigo">Art. 3º.</span> A revisão constitucional será realizada após cinco anos, contados da promulgação da Constituição, pelo voto da maioria absoluta dos membros do Congresso Nacional, em sessão unicameral.</p>

	<p id="adct4"><span class="artigo">Art. 4º.</span> O mandato do atual Presidente da República terminará em 15 de março de 1990.</p>

	<p><span class="paragrafo">§ 1º.</span> A primeira eleição para Presidente da República após a promulgação da Constituição será realizada no dia 15 de novembro de 1989, não se lhe aplicando o disposto no art. 16 da Constituição.</p>

	<p><span class="paragrafo">§ 2º.</span> É assegurada a irredutibilidade da atual representação dos Estados e do Distrito Federal na Câmara dos Deputados.</p>

	<p><span class="paragrafo">§ 3º.</span> - Os mandatos dos Governadores e dos Vice-Governadores eleitos em 15 de novembro de 1986 terminarão em 15 de março de 1991.</p>

	<p><span class="paragrafo">§ 4º.</span> - Os mandatos dos atuais Prefeitos, Vice-Prefeitos e Vereadores terminarão no dia 1º. de janeiro de 1989, com a posse dos eleitos.</p>

	<p id="adct5"><span class="artigo">Art. 5º.</span> Não se aplicam às eleições previstas para 15 de novembro de 1988 o disposto no art. 16 e as regras do art. 77 da Constituição.</p>

	<p><span class="paragrafo">§ 1º.</span> Para as eleições de 15 de novembro de 1988 será exigido domicílio eleitoral na circunscrição pelo menos durante os quatro meses anteriores ao pleito, podendo os candidatos que preencham este requisito, atendidas as demais exigências da lei, ter seu registro efetivado pela Justiça Eleitoral após a promulgação da Constituição.</p>

	<p><span class="paragrafo">§ 2º.</span> Na ausência de norma legal específica, caberá ao Tribunal Superior Eleitoral editar as normas necessárias à realização das eleições de 1988, respeitada a legislação vigente.</p>

	<p><span class="paragrafo">§ 3º.</span> Os atuais parlamentares federais e estaduais eleitos Vice-Prefeitos, se convocados a exercer a função de Prefeito, não perderão o mandato parlamentar.</p>

	<p><span class="paragrafo">§ 4º.</span> O número de vereadores por município será fixado, para a representação a ser eleita em 1988, pelo respectivo Tribunal Regional Eleitoral, respeitados os limites estipulados no art. 29, IV, da Constituição.</p>

	<p><span class="paragrafo">§ 5º.</span> Para as eleições de 15 de novembro de 1988, ressalvados os que já exercem mandato eletivo, são inelegíveis para qualquer cargo, no território de jurisdição do titular, o cônjuge e os parentes por consanguinidade ou afinidade, até o segundo grau, ou por adoção, do Presidente da República, do Governador de Estado, do Governador do Distrito Federal e do Prefeito que tenham exercido mais da metade do mandato.</p>

	<p id="adct6"><span class="artigo">Art. 6º.</span> Nos seis meses posteriores à promulgação da Constituição, parlamentares federais, reunidos em número não inferior a trinta, poderão requerer ao Tribunal Superior Eleitoral o registro de novo partido político, juntando ao requerimento o manifesto, o estatuto e o programa devidamente assinados pelos requerentes.</p>

	<p><span class="paragrafo">§ 1º.</span> O registro provisório, que será concedido de plano pelo Tribunal Superior Eleitoral, nos termos deste artigo, defere ao novo partido todos os direitos, deveres e prerrogativas dos atuais, entre eles o de participar, sob legenda própria, das eleições que vierem a ser realizadas nos doze meses seguintes a sua formação.</p>

	<p><span class="paragrafo">§ 2º.</span> O novo partido perderá automaticamente seu registro provisório se, no prazo de vinte e quatro meses, contados de sua formação, não obtiver registro definitivo no Tribunal Superior Eleitoral, na forma que a lei dispuser.</p>

	<p id="adct7"><span class="artigo">Art. 7º.</span> O Brasil propugnará pela formação de um tribunal internacional dos direitos humanos.</p>

	<p id="adct8"><span class="artigo">Art. 8º.</span> É concedida anistia aos que, no período de 18 de setembro de 1946 até a data da promulgação da Constituição, foram atingidos, em decorrência de motivação exclusivamente política, por atos de exceção, institucionais ou complementares, aos que foram abrangidos pelo <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/DLG/dlg18-61.htm">Decreto Legislativo nº 18, de 15 de dezembro de 1961,</a> e aos atingidos pelo <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/Del0864.htm">Decreto-Lei nº 864, de 12 de setembro de 1969</a>, asseguradas as promoções, na inatividade, ao cargo, emprego, posto ou graduação a que teriam direito se estivessem em serviço ativo, obedecidos os prazos de permanência em atividade previstos nas leis e regulamentos vigentes, respeitadas as características e peculiaridades das carreiras dos servidores públicos civis e militares e observados os respectivos regimes jurídicos. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/2002/L10559.htm">(Regulamento)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O disposto neste artigo somente gerará efeitos financeiros a partir da promulgação da Constituição, vedada a remuneração de qualquer espécie em caráter retroativo.</p>

	<p><span class="paragrafo">§ 2º.</span> Ficam assegurados os benefícios estabelecidos neste artigo aos trabalhadores do setor privado, dirigentes e representantes sindicais que, por motivos exclusivamente políticos, tenham sido punidos, demitidos ou compelidos ao afastamento das atividades remuneradas que exerciam, bem como aos que foram impedidos de exercer atividades profissionais em virtude de pressões ostensivas ou expedientes oficiais sigilosos.</p>

	<p><span class="paragrafo">§ 3º.</span> Aos cidadãos que foram impedidos de exercer, na vida civil, atividade profissional específica, em decorrência das Portarias Reservadas do Ministério da Aeronáutica nº S-50-GM5, de 19 de junho de 1964, e nº S-285-GM5 será concedida reparação de natureza econômica, na forma que dispuser lei de iniciativa do Congresso Nacional e a entrar em vigor no prazo de doze meses a contar da promulgação da Constituição.</p>

	<p><span class="paragrafo">§ 4º.</span> Aos que, por força de atos institucionais, tenham exercido gratuitamente mandato eletivo de vereador serão computados, para efeito de aposentadoria no serviço público e previdência social, os respectivos períodos.</p>

	<p><span class="paragrafo">§ 5º.</span> A anistia concedida nos termos deste artigo aplica-se aos servidores públicos civis e aos empregados em todos os níveis de governo ou em suas fundações, empresas públicas ou empresas mistas sob controle estatal, exceto nos Ministérios militares, que tenham sido punidos ou demitidos por atividades profissionais interrompidas em virtude de decisão de seus trabalhadores, bem como em decorrência do <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/Del1632.htm">Decreto-Lei nº 1.632, de 4 de agosto de 1978</a>, ou por motivos exclusivamente políticos, assegurada a readmissão dos que foram atingidos a partir de 1979, observado o disposto no <span class="paragrafo">§ 1º.</span></p><p></p>

	<p id="adct9"><span class="artigo">Art. 9º.</span> Os que, por motivos exclusivamente políticos, foram cassados ou tiveram seus direitos políticos suspensos no período de 15 de julho a 31 de dezembro de 1969, por ato do então Presidente da República, poderão requerer ao Supremo Tribunal Federal o reconhecimento dos direitos e vantagens interrompidos pelos atos punitivos, desde que comprovem terem sido estes eivados de vício grave.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O Supremo Tribunal Federal proferirá a decisão no prazo de cento e vinte dias, a contar do pedido do interessado.</p>

	<p id="adct10"><span class="artigo">Art. 10.</span> Até que seja promulgada a lei complementar a que se refere o art. 7º, I, da Constituição:</p>

	<p>I - fica limitada a proteção nele referida ao aumento, para quatro vezes, da porcentagem prevista no art. 6º, "caput" e § 1º, da <a href="http://legislacao.planalto.gov.br/legisla/legislacao.nsf/Viw_Identificacao/lei%205.107-1966?OpenDocument">Lei nº 5.107, de 13 de setembro de 1966</a>;</p>

	<p>II - fica vedada a dispensa arbitrária ou sem justa causa:</p>

	<p class="alinea">a) do empregado eleito para cargo de direção de comissões internas de prevenção de acidentes, desde o registro de sua candidatura até um ano após o final de seu mandato;</p>

	<p class="alinea">b) da empregada gestante, desde a confirmação da gravidez até cinco meses após o parto. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp146.htm">(Vide Lei Complementar nº 146, de 2014)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Até que a lei venha a disciplinar o disposto no art. 7º, XIX, da Constituição, o prazo da licença-paternidade a que se refere o inciso é de cinco dias.</p>

	<p><span class="paragrafo">§ 2º.</span> Até ulterior disposição legal, a cobrança das contribuições para o custeio das atividades dos sindicatos rurais será feita juntamente com a do imposto territorial rural, pelo mesmo órgão arrecadador.</p>

	<p><span class="paragrafo">§ 3º.</span> Na primeira comprovação do cumprimento das obrigações trabalhistas pelo empregador rural, na forma do art. 233, após a promulgação da Constituição, será certificada perante a Justiça do Trabalho a regularidade do contrato e das atualizações das obrigações trabalhistas de todo o período.</p>

	<p id="adct11"><span class="artigo">Art. 11.</span> Cada Assembleia Legislativa, com poderes constituintes, elaborará a Constituição do Estado, no prazo de um ano, contado da promulgação da Constituição Federal, obedecidos os princípios desta.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Promulgada a Constituição do Estado, caberá à Câmara Municipal, no prazo de seis meses, votar a Lei Orgânica respectiva, em dois turnos de discussão e votação, respeitado o disposto na Constituição Federal e na Constituição Estadual.</p>

	<p id="adct12"><span class="artigo">Art. 12.</span> Será criada, dentro de noventa dias da promulgação da Constituição, Comissão de Estudos Territoriais, com dez membros indicados pelo Congresso Nacional e cinco pelo Poder Executivo, com a finalidade de apresentar estudos sobre o território nacional e anteprojetos relativos a novas unidades territoriais, notadamente na Amazônia Legal e em áreas pendentes de solução.</p>

	<p><span class="paragrafo">§ 1º.</span> No prazo de um ano, a Comissão submeterá ao Congresso Nacional os resultados de seus estudos para, nos termos da Constituição, serem apreciados nos doze meses subsequentes, extinguindo-se logo após.</p>

	<p><span class="paragrafo">§ 2º.</span> Os Estados e os Municípios deverão, no prazo de três anos, a contar da promulgação da Constituição, promover, mediante acordo ou arbitramento, a demarcação de suas linhas divisórias atualmente litigiosas, podendo para isso fazer alterações e compensações de área que atendam aos acidentes naturais, critérios históricos, conveniências administrativas e comodidade das populações limítrofes.</p>

	<p><span class="paragrafo">§ 3º.</span> Havendo solicitação dos Estados e Municípios interessados, a União poderá encarregar-se dos trabalhos demarcatórios.</p>

	<p><span class="paragrafo">§ 4º.</span> Se, decorrido o prazo de três anos, a contar da promulgação da Constituição, os trabalhos demarcatórios não tiverem sido concluídos, caberá à União determinar os limites das áreas litigiosas.</p>

	<p><span class="paragrafo">§ 5º.</span> Ficam reconhecidos e homologados os atuais limites do Estado do Acre com os Estados do Amazonas e de Rondônia, conforme levantamentos cartográficos e geodésicos realizados pela Comissão Tripartite integrada por representantes dos Estados e dos serviços técnico-especializados do Instituto Brasileiro de Geografia e Estatística.</p>

	<p id="adct13"><span class="artigo">Art. 13.</span> É criado o Estado do Tocantins, pelo desmembramento da área descrita neste artigo, dando-se sua instalação no quadragésimo sexto dia após a eleição prevista no § 3º, mas não antes de 1º. de janeiro de 1989.</p>

	<p><span class="paragrafo">§ 1º.</span> - O Estado do Tocantins integra a Região Norte e limita-se com o Estado de Goiás pelas divisas norte dos Municípios de São Miguel do Araguaia, Porangatu, Formoso, Minaçu, Cavalcante, Monte Alegre de Goiás e Campos Belos, conservando a leste, norte e oeste as divisas atuais de Goiás com os Estados da Bahia, Piauí, Maranhão, Pará e Mato Grosso.</p>

	<p><span class="paragrafo">§ 2º.</span> O Poder Executivo designará uma das cidades do Estado para sua Capital provisória até a aprovação da sede definitiva do governo pela Assembleia Constituinte.</p>

	<p><span class="paragrafo">§ 3º.</span> O Governador, o Vice-Governador, os Senadores, os Deputados Federais e os Deputados Estaduais serão eleitos, em um único turno, até setenta e cinco dias após a promulgação da Constituição, mas não antes de 15 de novembro de 1988, a critério do Tribunal Superior Eleitoral, obedecidas, entre outras, as seguintes normas:</p>

	<p>I - o prazo de filiação partidária dos candidatos será encerrado setenta e cinco dias antes da data das eleições;</p>

	<p>II - as datas das convenções regionais partidárias destinadas a deliberar sobre coligações e escolha de candidatos, de apresentação de requerimento de registro dos candidatos escolhidos e dos demais procedimentos legais serão fixadas, em calendário especial, pela Justiça Eleitoral;</p>

	<p>III - são inelegíveis os ocupantes de cargos estaduais ou municipais que não se tenham deles afastado, em caráter definitivo, setenta e cinco dias antes da data das eleições previstas neste parágrafo;</p>

	<p>IV - ficam mantidos os atuais diretórios regionais dos partidos políticos do Estado de Goiás, cabendo às comissões executivas nacionais designar comissões provisórias no Estado do Tocantins, nos termos e para os fins previstos na lei.</p>

	<p><span class="paragrafo">§ 4º.</span> Os mandatos do Governador, do Vice-Governador, dos Deputados Federais e Estaduais eleitos na forma do parágrafo anterior extinguir-se-ão concomitantemente aos das demais unidades da Federação; o mandato do Senador eleito menos votado extinguir-se-á nessa mesma oportunidade, e os dos outros dois, juntamente com os dos Senadores eleitos em 1986 nos demais Estados.</p>

	<p><span class="paragrafo">§ 5º.</span> A Assembleia Estadual Constituinte será instalada no quadragésimo sexto dia da eleição de seus integrantes, mas não antes de 1º. de janeiro de 1989, sob a presidência do Presidente do Tribunal Regional Eleitoral do Estado de Goiás, e dará posse, na mesma data, ao Governador e ao Vice-Governador eleitos.</p>

	<p><span class="paragrafo">§ 6º.</span> Aplicam-se à criação e instalação do Estado do Tocantins, no que couber, as normas legais disciplinadoras da divisão do Estado de Mato Grosso, observado o disposto no art. 234 da Constituição.</p>

	<p><span class="paragrafo">§ 7º.</span> Fica o Estado de Goiás liberado dos débitos e encargos decorrentes de empreendimentos no território do novo Estado, e autorizada a União, a seu critério, a assumir os referidos débitos.</p>

	<p id="adct14"><span class="artigo">Art. 14.</span> Os Territórios Federais de Roraima e do Amapá são transformados em Estados Federados, mantidos seus atuais limites geográficos.</p>

	<p><span class="paragrafo">§ 1º.</span> A instalação dos Estados dar-se-á com a posse dos governadores eleitos em 1990.</p>

	<p><span class="paragrafo">§ 2º.</span> Aplicam-se à transformação e instalação dos Estados de Roraima e Amapá as normas e critérios seguidos na criação do Estado de Rondônia, respeitado o disposto na Constituição e neste Ato.</p>

	<p><span class="paragrafo">§ 3º.</span> O Presidente da República, até quarenta e cinco dias após a promulgação da Constituição, encaminhará à apreciação do Senado Federal os nomes dos governadores dos Estados de Roraima e do Amapá que exercerão o Poder Executivo até a instalação dos novos Estados com a posse dos governadores eleitos.</p>

	<p><span class="paragrafo">§ 4º.</span> Enquanto não concretizada a transformação em Estados, nos termos deste artigo, os Territórios Federais de Roraima e do Amapá serão beneficiados pela transferência de recursos prevista nos arts. 159, I, "a", da Constituição, e 34, § 2º, II, deste Ato.</p>

	<p id="adct15"><span class="artigo">Art. 15.</span> Fica extinto o Território Federal de Fernando de Noronha, sendo sua área reincorporada ao Estado de Pernambuco.</p>

	<p id="adct16"><span class="artigo">Art. 16.</span> Até que se efetive o disposto no art. 32, § 2º, da Constituição, caberá ao Presidente da República, com a aprovação do Senado Federal, indicar o Governador e o Vice-Governador do Distrito Federal.</p>

	<p><span class="paragrafo">§ 1º.</span> A competência da Câmara Legislativa do Distrito Federal, até que se instale, será exercida pelo Senado Federal.</p>

	<p><span class="paragrafo">§ 2º.</span> A fiscalização contábil, financeira, orçamentária, operacional e patrimonial do Distrito Federal, enquanto não for instalada a Câmara Legislativa, será exercida pelo Senado Federal, mediante controle externo, com o auxílio do Tribunal de Contas do Distrito Federal, observado o disposto no art. 72 da Constituição.</p>

	<p><span class="paragrafo">§ 3º.</span> Incluem-se entre os bens do Distrito Federal aqueles que lhe vierem a ser atribuídos pela União na forma da lei.</p>

	<p id="adct17"><span class="artigo">Art. 17.</span> Os vencimentos, a remuneração, as vantagens e os adicionais, bem como os proventos de aposentadoria que estejam sendo percebidos em desacordo com a Constituição serão imediatamente reduzidos aos limites dela decorrentes, não se admitindo, neste caso, invocação de direito adquirido ou percepção de excesso a qualquer título. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc41.htm#art9">(Vide Emenda Constitucional nº 41, 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 1º.</span> É assegurado o exercício cumulativo de dois cargos ou empregos privativos de médico que estejam sendo exercidos por médico militar na administração pública direta ou indireta.</p>

	<p><span class="paragrafo">§ 2º.</span> É assegurado o exercício cumulativo de dois cargos ou empregos privativos de profissionais de saúde que estejam sendo exercidos na administração pública direta ou indireta.</p>

	<p id="adct18"><span class="artigo">Art. 18.</span> Ficam extintos os efeitos jurídicos de qualquer ato legislativo ou administrativo, lavrado a partir da instalação da Assembleia Nacional Constituinte, que tenha por objeto a concessão de estabilidade a servidor admitido sem concurso público, da administração direta ou indireta, inclusive das fundações instituídas e mantidas pelo Poder Público.</p>

	<p id="adctart18a"><span class="artigo" id="18A">Art. 18-A.</span> Os atos administrativos praticados no Estado do Tocantins, decorrentes de sua instalação, entre 1º. de janeiro de 1989 e 31 de dezembro de 1994, eivados de qualquer vício jurídico e dos quais decorram efeitos favoráveis para os destinatários ficam convalidados após 5 (cinco) anos, contados da data em que foram praticados, salvo comprovada má-fé. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc110.htm#art1">(Redação dada pela Emenda constitucional nº 110, de 2021)</a></p>

	<p id="adct19"><span class="artigo">Art. 19.</span> Os servidores públicos civis da União, dos Estados, do Distrito Federal e dos Municípios, da administração direta, autárquica e das fundações públicas, em exercício na data da promulgação da Constituição, há pelo menos cinco anos continuados, e que não tenham sido admitidos na forma regulada no art. 37, da Constituição, são considerados estáveis no serviço público.</p>

	<p><span class="paragrafo">§ 1º.</span> O tempo de serviço dos servidores referidos neste artigo será contado como título quando se submeterem a concurso para fins de efetivação, na forma da lei.</p>

	<p><span class="paragrafo">§ 2º.</span> O disposto neste artigo não se aplica aos ocupantes de cargos, funções e empregos de confiança ou em comissão, nem aos que a lei declare de livre exoneração, cujo tempo de serviço não será computado para os fins do "caput" deste artigo, exceto se se tratar de servidor.</p>

	<p><span class="paragrafo">§ 3º.</span> O disposto neste artigo não se aplica aos professores de nível superior, nos termos da lei.</p>

	<p id="adct20"><span class="artigo">Art. 20.</span> Dentro de cento e oitenta dias, proceder-se-á à revisão dos direitos dos servidores públicos inativos e pensionistas e à atualização dos proventos e pensões a eles devidos, a fim de ajustá-los ao disposto na Constituição.</p>

	<p id="adct21"><span class="artigo">Art. 21.</span> Os juízes togados de investidura limitada no tempo, admitidos mediante concurso público de provas e títulos e que estejam em exercício na data da promulgação da Constituição, adquirem estabilidade, observado o estágio probatório, e passam a compor quadro em extinção, mantidas as competências, prerrogativas e restrições da legislação a que se achavam submetidos, salvo as inerentes à transitoriedade da investidura.</p>

	<p><span class="paragrafo">Parágrafo único.</span> A aposentadoria dos juízes de que trata este artigo regular-se-á pelas normas fixadas para os demais juízes estaduais.</p>

	<p id="adct22"><span class="artigo">Art. 22.</span> É assegurado aos defensores públicos investidos na função até a data de instalação da Assembleia Nacional Constituinte o direito de opção pela carreira, com a observância das garantias e vedações previstas no art. 134, parágrafo único, da Constituição.</p>

	<p id="adct23"><span class="artigo">Art. 23.</span> Até que se edite a regulamentação do art. 21, XVI, da Constituição, os atuais ocupantes do cargo de censor federal continuarão exercendo funções com este compatíveis, no Departamento de Polícia Federal, observadas as disposições constitucionais.</p>

	<p><span class="paragrafo">Parágrafo único.</span> A lei referida disporá sobre o aproveitamento dos Censores Federais, nos termos deste artigo.</p>

	<p id="adct24"><span class="artigo">Art. 24.</span> A União, os Estados, o Distrito Federal e os Municípios editarão leis que estabeleçam critérios para a compatibilização de seus quadros de pessoal ao disposto no art. 39 da Constituição e à reforma administrativa dela decorrente, no prazo de dezoito meses, contados da sua promulgação.</p>

	<p id="adct25"><span class="artigo">Art. 25.</span> Ficam revogados, a partir de cento e oitenta dias da promulgação da Constituição, sujeito este prazo a prorrogação por lei, todos os dispositivos legais que atribuam ou deleguem a órgão do Poder Executivo competência assinalada pela Constituição ao Congresso Nacional, especialmente no que tange a:</p>

	<p>I - ação normativa;</p>

	<p>II - alocação ou transferência de recursos de qualquer espécie.</p>

	<p><span class="paragrafo">§ 1º.</span> Os decretos-lei em tramitação no Congresso Nacional e por este não apreciados até a promulgação da Constituição terão seus efeitos regulados da seguinte forma:</p>

	<p>I - se editados até 2 de setembro de 1988, serão apreciados pelo Congresso Nacional no prazo de até cento e oitenta dias a contar da promulgação da Constituição, não computado o recesso parlamentar;</p>

	<p>II - decorrido o prazo definido no inciso anterior, e não havendo apreciação, os decretos-lei alí mencionados serão considerados rejeitados;</p>

	<p>III - nas hipóteses definidas nos incisos I e II, terão plena validade os atos praticados na vigência dos respectivos decretos-lei, podendo o Congresso Nacional, se necessário, legislar sobre os efeitos deles remanescentes.</p>

	<p><span class="paragrafo">§ 2º.</span> Os decretos-lei editados entre 3 de setembro de 1988 e a promulgação da Constituição serão convertidos, nesta data, em medidas provisórias, aplicando-se-lhes as regras estabelecidas no art. 62, <span class="paragrafo">Parágrafo único.</span></p>

	<p id="adct26"><span class="artigo">Art. 26.</span> No prazo de um ano a contar da promulgação da Constituição, o Congresso Nacional promoverá, através de Comissão mista, exame analítico e pericial dos atos e fatos geradores do endividamento externo brasileiro.</p>

	<p><span class="paragrafo">§ 1º.</span> A Comissão terá a força legal de Comissão parlamentar de inquérito para os fins de requisição e convocação, e atuará com o auxílio do Tribunal de Contas da União.</p>

	<p><span class="paragrafo">§ 2º.</span> Apurada irregularidade, o Congresso Nacional proporá ao Poder Executivo a declaração de nulidade do ato e encaminhará o processo ao Ministério Público Federal, que formalizará, no prazo de sessenta dias, a ação cabível.</p>

	<p id="adct27"><span class="artigo">Art. 27.</span> O Superior Tribunal de Justiça será instalado sob a Presidência do Supremo Tribunal Federal.</p>

	<p><span class="paragrafo">§ 1º.</span> Até que se instale o Superior Tribunal de Justiça, o Supremo Tribunal Federal exercerá as atribuições e competências definidas na ordem constitucional precedente.</p>

	<p><span class="paragrafo">§ 2º.</span> A composição inicial do Superior Tribunal de Justiça far-se-á:</p>

	<p>I - pelo aproveitamento dos Ministros do Tribunal Federal de Recursos;</p>

	<p>II - pela nomeação dos Ministros que sejam necessários para completar o número estabelecido na Constituição.</p>

	<p><span class="paragrafo">§ 3º.</span> Para os efeitos do disposto na Constituição, os atuais Ministros do Tribunal Federal de Recursos serão considerados pertencentes à classe de que provieram, quando de sua nomeação.</p>

	<p><span class="paragrafo">§ 4º.</span> Instalado o Tribunal, os Ministros aposentados do Tribunal Federal de Recursos tornar-se-ão, automaticamente, Ministros aposentados do Superior Tribunal de Justiça.</p>

	<p><span class="paragrafo">§ 5º.</span> Os Ministros a que se refere o § 2º, II, serão indicados em lista tríplice pelo Tribunal Federal de Recursos, observado o disposto no art. 104, parágrafo único, da Constituição.</p>

	<p><span class="paragrafo">§ 6º.</span> Ficam criados cinco Tribunais Regionais Federais, a serem instalados no prazo de seis meses a contar da promulgação da Constituição, com a jurisdição e sede que lhes fixar o Tribunal Federal de Recursos, tendo em conta o número de processos e sua localização geográfica.</p>

	<p><span class="paragrafo">§ 7º.</span> Até que se instalem os Tribunais Regionais Federais, o Tribunal Federal de Recursos exercerá a competência a eles atribuída em todo o território nacional, cabendo-lhe promover sua instalação e indicar os candidatos a todos os cargos da composição inicial, mediante lista tríplice, podendo desta constar juízes federais de qualquer região, observado o disposto no <span class="paragrafo">§ 9º.</span></p><p></p>

	<p><span class="paragrafo">§ 8º.</span> É vedado, a partir da promulgação da Constituição, o provimento de vagas de Ministros do Tribunal Federal de Recursos.</p>

	<p><span class="paragrafo">§ 9º.</span> Quando não houver juiz federal que conte o tempo mínimo previsto no art. 107, II, da Constituição, a promoção poderá contemplar juiz com menos de cinco anos no exercício do cargo.</p>

	<p>§ 10. Compete à Justiça Federal julgar as ações nela propostas até a data da promulgação da Constituição, e aos Tribunais Regionais Federais bem como ao Superior Tribunal de Justiça julgar as ações rescisórias das decisões até então proferidas pela Justiça Federal, inclusive daquelas cuja matéria tenha passado à competência de outro ramo do Judiciário.</p>

	<p>§ 11. São criados, ainda, os seguintes Tribunais Regionais Federais: o da 6ª Região, com sede em Curitiba, Estado do Paraná, e jurisdição nos Estados do Paraná, Santa Catarina e Mato Grosso do Sul; o da 7ª Região, com sede em Belo Horizonte, Estado de Minas Gerais, e jurisdição no Estado de Minas Gerais; o da 8ª Região, com sede em Salvador, Estado da Bahia, e jurisdição nos Estados da Bahia e Sergipe; e o da 9ª Região, com sede em Manaus, Estado do Amazonas, e jurisdição nos Estados do Amazonas, Acre, Rondônia e Roraima. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc73.htm">(Incluído pela Emenda Constitucional nº 73, de 2013)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADIN&amp;s1=5017&amp;processo=5017">(Vide ADIN nº 5017, de 2013)</a></p>

	<p id="adct28"><span class="artigo">Art. 28.</span> Os juízes federais de que trata o <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constitui%C3%A7ao67.htm#art123">art. 123, § 2º, da Constituição de 1967,</a> com a redação dada pela <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc_anterior1988/emc07-77.htm">Emenda Constitucional nº 7, de 1977</a>, ficam investidos na titularidade de varas na Seção Judiciária para a qual tenham sido nomeados ou designados; na inexistência de vagas, proceder-se-á ao desdobramento das varas existentes.<br>
	<span class="paragrafo">Parágrafo único.</span> Para efeito de promoção por antiguidade, o tempo de serviço desses juízes será computado a partir do dia de sua posse.</p>

	<p id="adct29"><span class="artigo">Art. 29.</span> Enquanto não aprovadas as leis complementares relativas ao Ministério Público e à Advocacia-Geral da União, o Ministério Público Federal, a Procuradoria-Geral da Fazenda Nacional, as Consultorias Jurídicas dos Ministérios, as Procuradorias e Departamentos Jurídicos de autarquias federais com representação própria e os membros das Procuradorias das Universidades fundacionais públicas continuarão a exercer suas atividades na área das respectivas atribuições.</p>

	<p><span class="paragrafo">§ 1º.</span> O Presidente da República, no prazo de cento e vinte dias, encaminhará ao Congresso Nacional projeto de lei complementar dispondo sobre a organização e o funcionamento da Advocacia-Geral da União.</p>

	<p><span class="paragrafo">§ 2º.</span> Aos atuais Procuradores da República, nos termos da lei complementar, será facultada a opção, de forma irretratável, entre as carreiras do Ministério Público Federal e da Advocacia-Geral da União.</p>

	<p><span class="paragrafo">§ 3º.</span> Poderá optar pelo regime anterior, no que respeita às garantias e vantagens, o membro do Ministério Público admitido antes da promulgação da Constituição, observando-se, quanto às vedações, a situação jurídica na data desta.</p>

	<p><span class="paragrafo">§ 4º.</span> Os atuais integrantes do quadro suplementar dos Ministérios Públicos do Trabalho e Militar que tenham adquirido estabilidade nessas funções passam a integrar o quadro da respectiva carreira.</p>

	<p><span class="paragrafo">§ 5º.</span> Cabe à atual Procuradoria-Geral da Fazenda Nacional, diretamente ou por delegação, que pode ser ao Ministério Público Estadual, representar judicialmente a União nas causas de natureza fiscal, na área da respectiva competência, até a promulgação das leis complementares previstas neste artigo.</p>

	<p id="adct30"><span class="artigo">Art. 30.</span> A legislação que criar a justiça de paz manterá os atuais juízes de paz até a posse dos novos titulares, assegurando-lhes os direitos e atribuições conferidos a estes, e designará o dia para a eleição prevista no art. 98, II, da Constituição.</p>

	<p id="adct31"><span class="artigo">Art. 31.</span> Serão estatizadas as serventias do foro judicial, assim definidas em lei, respeitados os direitos dos atuais titulares.</p>

	<p id="adct32"><span class="artigo">Art. 32.</span> O disposto no art. 236 não se aplica aos serviços notariais e de registro que já tenham sido oficializados pelo Poder Público, respeitando-se o direito de seus servidores.</p>

	<p id="adct33"><span class="artigo">Art. 33.</span> Ressalvados os créditos de natureza alimentar, o valor dos precatórios judiciais pendentes de pagamento na data da promulgação da Constituição, incluído o remanescente de juros e correção monetária, poderá ser pago em moeda corrente, com atualização, em prestações anuais, iguais e sucessivas, no prazo máximo de oito anos, a partir de 1º. de julho de 1989, por decisão editada pelo Poder Executivo até cento e oitenta dias da promulgação da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc03.htm#art5">(Vide Emenda Constitucional nº 3, de 1993) </a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Poderão as entidades devedoras, para o cumprimento do disposto neste artigo, emitir, em cada ano, no exato montante do dispêndio, títulos de dívida pública não computáveis para efeito do limite global de endividamento.</p>

	<p id="adct34"><span class="artigo">Art. 34.</span> O sistema tributário nacional entrará em vigor a partir do primeiro dia do quinto mês seguinte ao da promulgação da Constituição, mantido, até então, o da Constituição de 1967, com a redação dada pela Emenda nº 1, de 1969, e pelas posteriores.</p>

	<p><span class="paragrafo">§ 1º.</span> Entrarão em vigor com a promulgação da Constituição os arts. 148, 149, 150, 154, I, 156, III, e 159, I, "c", revogadas as disposições em contrário da Constituição de 1967 e das Emendas que a modificaram, especialmente de seu art. 25, III.</p>

	<p><span class="paragrafo">§ 2º.</span> O Fundo de Participação dos Estados e do Distrito Federal e o Fundo de Participação dos Municípios obedecerão às seguintes determinações:</p>

	<p>I - a partir da promulgação da Constituição, os percentuais serão, respectivamente, de dezoito por cento e de vinte por cento, calculados sobre o produto da arrecadação dos impostos referidos no art. 153, III e IV, mantidos os atuais critérios de rateio até a entrada em vigor da lei complementar a que se refere o art. 161, II;</p>

	<p>II - o percentual relativo ao Fundo de Participação dos Estados e do Distrito Federal será acrescido de um ponto percentual no exercício financeiro de 1989 e, a partir de 1990, inclusive, à razão de meio ponto por exercício, até 1992, inclusive, atingindo em 1993 o percentual estabelecido no art. 159, I, "a";</p>

	<p>III - o percentual relativo ao Fundo de Participação dos Municípios, a partir de 1989, inclusive, será elevado à razão de meio ponto percentual por exercício financeiro, até atingir o estabelecido no art. 159, I, "b".</p>

	<p><span class="paragrafo">§ 3º.</span> Promulgada a Constituição, a União, os Estados, o Distrito Federal e os Municípios poderão editar as leis necessárias à aplicação do sistema tributário nacional nela previsto.</p>

	<p><span class="paragrafo">§ 4º.</span> As leis editadas nos termos do parágrafo anterior produzirão efeitos a partir da entrada em vigor do sistema tributário nacional previsto na Constituição.</p>

	<p><span class="paragrafo">§ 5º.</span> Vigente o novo sistema tributário nacional, fica assegurada a aplicação da legislação anterior, no que não seja incompatível com ele e com a legislação referida nos §3º e § 4º.</p>

	<p><span class="paragrafo">§ 6º.</span> Até 31 de dezembro de 1989, o disposto no art. 150, III, "b", não se aplica aos impostos de que tratam os arts. 155, I, "a" e "b", e 156, II e III, que podem ser cobrados trinta dias após a publicação da lei que os tenha instituído ou aumentado.</p>

	<p><span class="paragrafo">§ 7º.</span> Até que sejam fixadas em lei complementar, as alíquotas máximas do imposto municipal sobre vendas a varejo de combustíveis líquidos e gasosos não excederão a três por cento.</p>

	<p><span class="paragrafo">§ 8º.</span> Se, no prazo de sessenta dias contados da promulgação da Constituição, não for editada a lei complementar necessária à instituição do imposto de que trata o art. 155, I, "b", os Estados e o Distrito Federal, mediante convênio celebrado nos termos da <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp24.htm">Lei Complementar nº 24, de 7 de janeiro de 1975</a>, fixarão normas para regular provisoriamente a matéria.</p>

	<p><span class="paragrafo">§ 9º.</span> Até que lei complementar disponha sobre a matéria, as empresas distribuidoras de energia elétrica, na condição de contribuintes ou de substitutos tributários, serão as responsáveis, por ocasião da saída do produto de seus estabelecimentos, ainda que destinado a outra unidade da Federação, pelo pagamento do imposto sobre operações relativas à circulação de mercadorias incidente sobre energia elétrica, desde a produção ou importação até a última operação, calculado o imposto sobre o preço então praticado na operação final e assegurado seu recolhimento ao Estado ou ao Distrito Federal, conforme o local onde deva ocorrer essa operação.</p>

	<p>§ 10. Enquanto não entrar em vigor a lei prevista no art. 159, I, "c", cuja promulgação se fará até 31 de dezembro de 1989, é assegurada a aplicação dos recursos previstos naquele dispositivo da seguinte maneira:</p>

	<p>I - seis décimos por cento na Região Norte, através do Banco da Amazônia S.A.;</p>

	<p>II - um inteiro e oito décimos por cento na Região Nordeste, através do Banco do Nordeste do Brasil S.A.;</p>

	<p>III - seis décimos por cento na Região Centro-Oeste, através do Banco do Brasil S.A.</p>

	<p>§ 11. Fica criado, nos termos da lei, o Banco de Desenvolvimento do Centro-Oeste, para dar cumprimento, na referida região, ao que determinam os arts. 159, I, "c", e 192, § 2º, da Constituição.</p>

	<p>§ 12. A urgência prevista no art. 148, II, não prejudica a cobrança do empréstimo compulsório instituído, em benefício das Centrais Elétricas Brasileiras S.A. (Eletrobrás), pela <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L4156.htm">Lei nº 4.156, de 28 de novembro de 1962, </a>com as alterações posteriores.</p>

	<p id="adct35"><span class="artigo">Art. 35.</span> O disposto no art. 165, § 7º, será cumprido de forma progressiva, no prazo de até dez anos, distribuindo-se os recursos entre as regiões macroeconômicas em razão proporcional à população, a partir da situação verificada no biênio 1986-87.</p>

	<p><span class="paragrafo">§ 1º.</span> Para aplicação dos critérios de que trata este artigo, excluem-se das despesas totais as relativas:</p>

	<p>I - aos projetos considerados prioritários no plano plurianual;</p>

	<p>II - à segurança e defesa nacional;</p>

	<p>III - à manutenção dos órgãos federais no Distrito Federal;</p>

	<p>IV - ao Congresso Nacional, ao Tribunal de Contas da União e ao Poder Judiciário;</p>

	<p>V - ao serviço da dívida da administração direta e indireta da União, inclusive fundações instituídas e mantidas pelo Poder Público federal.</p>

	<p><span class="paragrafo">§ 2º.</span> Até a entrada em vigor da lei complementar a que se refere o art. 165, § 9º, I e II, serão obedecidas as seguintes normas:</p>

	<p>I - o projeto do plano plurianual, para vigência até o final do primeiro exercício financeiro do mandato presidencial subsequente, será encaminhado até quatro meses antes do encerramento do primeiro exercício financeiro e devolvido para sanção até o encerramento da sessão legislativa;</p>

	<p>II - o projeto de lei de diretrizes orçamentárias será encaminhado até oito meses e meio antes do encerramento do exercício financeiro e devolvido para sanção até o encerramento do primeiro período da sessão legislativa;</p>

	<p>III - o projeto de lei orçamentária da União será encaminhado até quatro meses antes do encerramento do exercício financeiro e devolvido para sanção até o encerramento da sessão legislativa.</p>

	<p id="adct36"><span class="artigo">Art. 36.</span> Os fundos existentes na data da promulgação da Constituição, excetuados os resultantes de isenções fiscais que passem a integrar patrimônio privado e os que interessem à defesa nacional, extinguir-se-ão, se não forem ratificados pelo Congresso Nacional no prazo de dois anos. <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/DLG/DLG66-90.htm">(Vide Decreto Legislativo nº 66, de 1990) </a></p>

	<p id="adct37"><span class="artigo">Art. 37.</span> A adaptação ao que estabelece o art. 167, III, deverá processar-se no prazo de cinco anos, reduzindo-se o excesso à base de, pelo menos, um quinto por ano.</p>

	<p id="adct38"><span class="artigo">Art. 38.</span> Até a promulgação da lei complementar referida no art. 169, a União, os Estados, o Distrito Federal e os Municípios não poderão despender com pessoal mais do que sessenta e cinco por cento do valor das respectivas receitas correntes.</p>

	<p><span class="paragrafo">§ 1º.</span> A União, os Estados, o Distrito Federal e os Municípios, quando a respectiva despesa de pessoal exceder o limite previsto neste artigo, deverão retornar àquele limite, reduzindo o percentual excedente à razão de um quinto por ano.</p>

	<ul class="dica">
		<li>Parágrafo único renumerado para 1º pela Emenda Constitucional nº 127, de 22 de dezembro de 2022.</li>
	</ul>

	<p><span class="paragrafo">§ 2º.</span> As despesas com pessoal resultantes do cumprimento do disposto nos §§ 12, 13, 14 e 15 do art. 198 da Constituição Federal serão contabilizadas, para fins dos limites de que trata o art. 169 da Constituição Federal, da seguinte forma:</p>

	<ul class="dica">
		<li>Parágrafo acrescido pela Emenda Constitucional nº 127, de 22 de dezembro de 2022.</li>
	</ul>

	<p>I - até o fim do exercício financeiro subsequente ao da publicação deste dispositivo, não serão contabilizadas para esses limites;</p>

	<p>II - no segundo exercício financeiro subsequente ao da publicação deste dispositivo, serão deduzidas em 90% (noventa por cento) do seu valor;</p>

	<p>III - entre o terceiro e o décimo segundo exercício financeiro subsequente ao da publicação deste dispositivo, a dedução de que trata o inciso II deste parágrafo será reduzida anualmente na proporção de 10% (dez por cento) de seu valor.</p>

	<p id="adct39"><span class="artigo">Art. 39.</span> Para efeito do cumprimento das disposições constitucionais que impliquem variações de despesas e receitas da União, após a promulgação da Constituição, o Poder Executivo deverá elaborar e o Poder Legislativo apreciar projeto de revisão da lei orçamentária referente ao exercício financeiro de 1989.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O Congresso Nacional deverá votar no prazo de doze meses a lei complementar prevista no art. 161, II.</p>

	<p id="adct40"><span class="artigo">Art. 40.</span> É mantida a Zona Franca de Manaus, com suas características de área livre de comércio, de exportação e importação, e de incentivos fiscais, pelo prazo de vinte e cinco anos, a partir da promulgação da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2010/Decreto/D7212.htm#art94">(Vide Decreto nº 7.212, de 2010) </a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Somente por lei federal podem ser modificados os critérios que disciplinaram ou venham a disciplinar a aprovação dos projetos na Zona Franca de Manaus.</p>

	<p id="adct41"><span class="artigo">Art. 41.</span> Os Poderes Executivos da União, dos Estados, do Distrito Federal e dos Municípios reavaliarão todos os incentivos fiscais de natureza setorial ora em vigor, propondo aos Poderes Legislativos respectivos as medidas cabíveis.</p>

	<p><span class="paragrafo">§ 1º.</span> Considerar-se-ão revogados após dois anos, a partir da data da promulgação da Constituição, os incentivos que não forem confirmados por lei.</p>

	<p><span class="paragrafo">§ 2º.</span> A revogação não prejudicará os direitos que já tiverem sido adquiridos, àquela data, em relação a incentivos concedidos sob condição e com prazo certo.</p>

	<p><span class="paragrafo">§ 3º.</span> Os incentivos concedidos por convênio entre Estados, celebrados nos termos do <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao67.htm#art23%C2%A76">art. 23, § 6º, da Constituição de 1967</a>, com a redação da Emenda Constitucional nº 1, de 17 de outubro de 1969, também deverão ser reavaliados e reconfirmados nos prazos deste artigo.</p>

	<p id="adct42"><span class="artigo">Art. 42.</span> Durante 40 (quarenta) anos, a União aplicará dos recursos destinados à irrigação: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc89.htm">(Redação dada pela Emenda Constitucional nº 89, de 2015)</a></p>

	<p>I - 20% (vinte por cento) na Região Centro-Oeste; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc89.htm">(Redação dada pela Emenda Constitucional nº 89, de 2015)</a></p>

	<p>II - 50% (cinquenta por cento) na Região Nordeste, preferencialmente no Semiárido. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc89.htm">(Redação dada pela Emenda Constitucional nº 89, de 2015)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> dos percentuais previstos nos incisos I e II do caput, no mínimo 50% (cinquenta por cento) serão destinados a projetos de irrigação que beneficiem agricultores familiares que atendam aos requisitos previstos em legislação específica. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc89.htm">(Incluído pela Emenda Constitucional nº 89, de 2015)</a></p>

	<p id="adct43"><span class="artigo">Art. 43.</span> Na data da promulgação da lei que disciplinar a pesquisa e a lavra de recursos e jazidas minerais, ou no prazo de um ano, a contar da promulgação da Constituição, tornar-se-ão sem efeito as autorizações, concessões e demais títulos atributivos de direitos minerários, caso os trabalhos de pesquisa ou de lavra não hajam sido comprovadamente iniciados nos prazos legais ou estejam inativos. <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L7886.htm">(Regulamento)</a></p>

	<p id="adct44"><span class="artigo">Art. 44.</span> As atuais empresas brasileiras titulares de autorização de pesquisa, concessão de lavra de recursos minerais e de aproveitamento dos potenciais de energia hidráulica em vigor terão quatro anos, a partir da promulgação da Constituição, para cumprir os requisitos do art. 176, <span class="paragrafo">§ 1º.</span></p><p></p>

	<p><span class="paragrafo">§ 1º.</span> Ressalvadas as disposições de interesse nacional previstas no texto constitucional, as empresas brasileiras ficarão dispensadas do cumprimento do disposto no art. 176, § 1º, desde que, no prazo de até quatro anos da data da promulgação da Constituição, tenham o produto de sua lavra e beneficiamento destinado a industrialização no território nacional, em seus próprios estabelecimentos ou em empresa industrial controladora ou controlada.</p>

	<p><span class="paragrafo">§ 2º.</span> Ficarão também dispensadas do cumprimento do disposto no art. 176, § 1º, as empresas brasileiras titulares de concessão de energia hidráulica para uso em seu processo de industrialização.</p>

	<p><span class="paragrafo">§ 3º.</span> As empresas brasileiras referidas no <span class="paragrafo">§ 1º.</span> somente poderão ter autorizações de pesquisa e concessões de lavra ou potenciais de energia hidráulica, desde que a energia e o produto da lavra sejam utilizados nos respectivos processos industriais.</p>

	<p id="adct45"><span class="artigo">Art. 45.</span> Ficam excluídas do monopólio estabelecido pelo art. 177, II, da Constituição as refinarias em funcionamento no País amparadas pelo art. 43 e nas condições do <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L2004.htm">art. 45 da Lei nº 2.004, de 3 de outubro de 1953</a>.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Ficam ressalvados da vedação do art. 177, § 1º, os contratos de risco feitos com a Petróleo Brasileiro S.A. (Petrobrás), para pesquisa de petróleo, que estejam em vigor na data da promulgação da Constituição.</p>

	<p id="adct46"><span class="artigo">Art. 46.</span> São sujeitos à correção monetária desde o vencimento, até seu efetivo pagamento, sem interrupção ou suspensão, os créditos junto a entidades submetidas aos regimes de intervenção ou liquidação extrajudicial, mesmo quando esses regimes sejam convertidos em falência.</p>

	<p><span class="paragrafo">Parágrafo único.</span> O disposto neste artigo aplica-se também:</p>

	<p>I - às operações realizadas posteriormente à decretação dos regimes referidos no "caput" deste artigo;</p>

	<p>II - às operações de empréstimo, financiamento, refinanciamento, assistência financeira de liquidez, cessão ou sub-rogação de créditos ou cédulas hipotecárias, efetivação de garantia de depósitos do público ou de compra de obrigações passivas, inclusive as realizadas com recursos de fundos que tenham essas destinações;</p>

	<p>III - aos créditos anteriores à promulgação da Constituição;</p>

	<p>IV - aos créditos das entidades da administração pública anteriores à promulgação da Constituição, não liquidados até 1 de janeiro de 1988.</p>

	<p id="adct47"><span class="artigo">Art. 47.</span> Na liquidação dos débitos, inclusive suas renegociações e composições posteriores, ainda que ajuizados, decorrentes de quaisquer empréstimos concedidos por bancos e por instituições financeiras, não existirá correção monetária desde que o empréstimo tenha sido concedido:</p>

	<p>I - aos micro e pequenos empresários ou seus estabelecimentos no período de 28 de fevereiro de 1986 a 28 de fevereiro de 1987;</p>

	<p>II - ao mini, pequenos e médios produtores rurais no período de 28 de fevereiro de 1986 a 31 de dezembro de 1987, desde que relativos a crédito rural.</p>

	<p><span class="paragrafo">§ 1º.</span> Consideram-se, para efeito deste artigo, microempresas as pessoas jurídicas e as firmas individuais com receitas anuais de até dez mil Obrigações do Tesouro Nacional, e pequenas empresas as pessoas jurídicas e as firmas individuais com receita anual de até vinte e cinco mil Obrigações do Tesouro Nacional.</p>

	<p><span class="paragrafo">§ 2º.</span> A classificação de mini, pequeno e médio produtor rural será feita obedecendo-se às normas de crédito rural vigentes à época do contrato.</p>

	<p><span class="paragrafo">§ 3º.</span> A isenção da correção monetária a que se refere este artigo só será concedida nos seguintes casos:</p>

	<p>I - se a liquidação do débito inicial, acrescido de juros legais e taxas judiciais, vier a ser efetivada no prazo de noventa dias, a contar da data da promulgação da Constituição;</p>

	<p>II - se a aplicação dos recursos não contrariar a finalidade do financiamento, cabendo o ônus da prova à instituição credora;</p>

	<p>III - se não for demonstrado pela instituição credora que o mutuário dispõe de meios para o pagamento de seu débito, excluído desta demonstração seu estabelecimento, a casa de moradia e os instrumentos de trabalho e produção;</p>

	<p>IV - se o financiamento inicial não ultrapassar o limite de cinco mil Obrigações do Tesouro Nacional;</p>

	<p>V - se o beneficiário não for proprietário de mais de cinco módulos rurais.</p>

	<p><span class="paragrafo">§ 4º.</span> Os benefícios de que trata este artigo não se estendem aos débitos já quitados e aos devedores que sejam constituintes.</p>

	<p><span class="paragrafo">§ 5º.</span> No caso de operações com prazos de vencimento posteriores à data- limite de liquidação da dívida, havendo interesse do mutuário, os bancos e as instituições financeiras promoverão, por instrumento próprio, alteração nas condições contratuais originais de forma a ajustá-las ao presente benefício.</p>

	<p><span class="paragrafo">§ 6º.</span> A concessão do presente benefício por bancos comerciais privados em nenhuma hipótese acarretará ônus para o Poder Público, ainda que através de refinanciamento e repasse de recursos pelo banco central.</p>

	<p><span class="paragrafo">§ 7º.</span> No caso de repasse a agentes financeiros oficiais ou cooperativas de crédito, o ônus recairá sobre a fonte de recursos originária.</p>

	<p id="adct48"><span class="artigo">Art. 48.</span> O Congresso Nacional, dentro de cento e vinte dias da promulgação da Constituição, elaborará código de defesa do consumidor.</p>

	<p id="adct49"><span class="artigo">Art. 49.</span> A lei disporá sobre o instituto da enfiteuse em imóveis urbanos, sendo facultada aos foreiros, no caso de sua extinção, a remição dos aforamentos mediante aquisição do domínio direto, na conformidade do que dispuserem os respectivos contratos.</p>

	<p><span class="paragrafo">§ 1º.</span> Quando não existir cláusula contratual, serão adotados os critérios e bases hoje vigentes na legislação especial dos imóveis da União.</p>

	<p><span class="paragrafo">§ 2º.</span> Os direitos dos atuais ocupantes inscritos ficam assegurados pela aplicação de outra modalidade de contrato.</p>

	<p><span class="paragrafo">§ 3º.</span> A enfiteuse continuará sendo aplicada aos terrenos de marinha e seus acrescidos, situados na faixa de segurança, a partir da orla marítima.</p>

	<p><span class="paragrafo">§ 4º.</span> Remido o foro, o antigo titular do domínio direto deverá, no prazo de noventa dias, sob pena de responsabilidade, confiar à guarda do registro de imóveis competente toda a documentação a ele relativa.</p>

	<p id="adct50"><span class="artigo">Art. 50.</span> Lei agrícola a ser promulgada no prazo de um ano disporá, nos termos da Constituição, sobre os objetivos e instrumentos de política agrícola, prioridades, planejamento de safras, comercialização, abastecimento interno, mercado externo e instituição de crédito fundiário.</p>

	<p id="adct51"><span class="artigo">Art. 51.</span> Serão revistos pelo Congresso Nacional, através de Comissão mista, nos três anos a contar da data da promulgação da Constituição, todas as doações, vendas e concessões de terras públicas com área superior a três mil hectares, realizadas no período de 1º. de janeiro de 1962 a 31 de dezembro de 1987.</p>

	<p><span class="paragrafo">§ 1º.</span> No tocante às vendas, a revisão será feita com base exclusivamente no critério de legalidade da operação.</p>

	<p><span class="paragrafo">§ 2º.</span> No caso de concessões e doações, a revisão obedecerá aos critérios de legalidade e de conveniência do interesse público.</p>

	<p><span class="paragrafo">§ 3º.</span> Nas hipóteses previstas nos parágrafos anteriores, comprovada a ilegalidade, ou havendo interesse público, as terras reverterão ao patrimônio da União, dos Estados, do Distrito Federal ou dos Municípios.</p>

	<p id="adct52"><span class="artigo">Art. 52.</span> Até que sejam fixadas as condições do art. 192, são vedados: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc40.htm#art3">(Redação dada pela Emenda Constitucional nº 40, de 2003)</a></p>

	<p>I - a instalação, no País, de novas agências de instituições financeiras domiciliadas no exterior;</p>

	<p>II - o aumento do percentual de participação, no capital de instituições financeiras com sede no País, de pessoas físicas ou jurídicas residentes ou domiciliadas no exterior.</p>

	<p><span class="paragrafo">Parágrafo único.</span> A vedação a que se refere este artigo não se aplica às autorizações resultantes de acordos internacionais, de reciprocidade, ou de interesse do Governo brasileiro.</p>

	<p id="adct53"><span class="artigo">Art. 53.</span> Ao ex-combatente que tenha efetivamente participado de operações bélicas durante a Segunda Guerra Mundial, nos termos da <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L5315.htm">Lei nº 5.315, de 12 de setembro de 1967</a>, serão assegurados os seguintes direitos:</p>

	<p>I - aproveitamento no serviço público, sem a exigência de concurso, com estabilidade;</p>

	<p>II - pensão especial correspondente à deixada por segundo-tenente das Forças Armadas, que poderá ser requerida a qualquer tempo, sendo inacumulável com quaisquer rendimentos recebidos dos cofres públicos, exceto os benefícios previdenciários, ressalvado o direito de opção;</p>

	<p>III - em caso de morte, pensão à viúva ou companheira ou dependente, de forma proporcional, de valor igual à do inciso anterior;</p>

	<p>IV - assistência médica, hospitalar e educacional gratuita, extensiva aos dependentes;</p>

	<p>V - aposentadoria com proventos integrais aos vinte e cinco anos de serviço efetivo, em qualquer regime jurídico;</p>

	<p>VI - prioridade na aquisição da casa própria, para os que não a possuam ou para suas viúvas ou companheiras.</p>

	<p><span class="paragrafo">Parágrafo único.</span> A concessão da pensão especial do inciso II substitui, para todos os efeitos legais, qualquer outra pensão já concedida ao ex-combatente.</p>

	<p id="adct54"><span class="artigo">Art. 54.</span> Os seringueiros recrutados nos termos do <a href="https://legislacao.planalto.gov.br/LEGISLA/Legislacao.nsf/viwTodos/DB71ED2127E5626C032569FA0063C20B?OpenDocument&amp;HIGHLIGHT=1,">Decreto-Lei nº 5.813, de 14 de setembro de 1943</a>, e amparados pelo <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/1937-1946/Del9882.htm">Decreto-Lei nº 9.882, de 16 de setembro de 1946</a>, receberão, quando carentes, pensão mensal vitalícia no valor de dois salários mínimos.</p>

	<p><span class="paragrafo">§ 1º.</span> - O benefício é estendido aos seringueiros que, atendendo a apelo do Governo brasileiro, contribuíram para o esforço de guerra, trabalhando na produção de borracha, na Região Amazônica, durante a Segunda Guerra Mundial.</p>

	<p><span class="paragrafo">§ 2º.</span> Os benefícios estabelecidos neste artigo são transferíveis aos dependentes reconhecidamente carentes.</p>

	<p><span class="paragrafo">§ 3º.</span> A concessão do benefício far-se-á conforme lei a ser proposta pelo Poder Executivo dentro de cento e cinquenta dias da promulgação da Constituição.</p>

	<p id="adct54a"><span class="artigo" id="54A">Art. 54-A.</span> Os seringueiros de que trata o art. 54 deste Ato das Disposições Constitucionais Transitórias receberão indenização, em parcela única, no valor de R$ 25.000,00 (vinte e cinco mil reais). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc78.htm#art1">(Incluído pela Emenda Constitucional nº 78, de 2014)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc78.htm#art2">(Vide Emenda Constitucional nº 78, de 2014)</a></p>

	<p id="adct55"><span class="artigo">Art. 55.</span> Até que seja aprovada a lei de diretrizes orçamentárias, trinta por cento, no mínimo, do orçamento da seguridade social, excluído o seguro-desemprego, serão destinados ao setor de saúde.</p>

	<p id="adct56"><span class="artigo">Art. 56.</span> Até que a lei disponha sobre o art. 195, I, a arrecadação decorrente de, no mínimo, cinco dos seis décimos percentuais correspondentes à alíquota da contribuição de que trata o <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/Del1940.htm">Decreto-Lei nº 1.940, de 25 de maio de 1982 </a>, alterada pelo <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/Del2049.htm">Decreto-Lei nº 2.049, de 1º. de agosto de 1983 </a>, pelo <a href="http://www.planalto.gov.br/ccivil_03/decreto/1980-1989/1985-1987/D91236.htm">Decreto nº 91.236, de 8 de maio de 1985 </a>, e pela <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L7611.htm">Lei nº 7.611, de 8 de julho de 1987 </a>, passa a integrar a receita da seguridade social, ressalvados, exclusivamente no exercício de 1988, os compromissos assumidos com programas e projetos em andamento. .</p>

	<p id="adct57"><span class="artigo">Art. 57.</span> Os débitos dos Estados e dos Municípios relativos às contribuições previdenciárias até 30 de junho de 1988 serão liquidados, com correção monetária, em cento e vinte parcelas mensais, dispensados os juros e multas sobre eles incidentes, desde que os devedores requeiram o parcelamento e iniciem seu pagamento no prazo de cento e oitenta dias a contar da promulgação da Constituição.</p>

	<p><span class="paragrafo">§ 1º.</span> O montante a ser pago em cada um dos dois primeiros anos não será inferior a cinco por cento do total do débito consolidado e atualizado, sendo o restante dividido em parcelas mensais de igual valor.</p>

	<p><span class="paragrafo">§ 2º.</span> A liquidação poderá incluir pagamentos na forma de cessão de bens e prestação de serviços, nos termos da <a href="http://www.planalto.gov.br/ccivil_03/LEIS/1980-1988/L7578.htm">Lei nº 7.578, de 23 de dezembro de 1986.</a></p>

	<p><span class="paragrafo">§ 3º.</span> Em garantia do cumprimento do parcelamento, os Estados e os Municípios consignarão, anualmente, nos respectivos orçamentos as dotações necessárias ao pagamento de seus débitos.</p>

	<p><span class="paragrafo">§ 4º.</span> Descumprida qualquer das condições estabelecidas para concessão do parcelamento, o débito será considerado vencido em sua totalidade, sobre ele incidindo juros de mora; nesta hipótese, parcela dos recursos correspondentes aos Fundos de Participação, destinada aos Estados e Municípios devedores, será bloqueada e repassada à previdência social para pagamento de seus débitos.</p>

	<p id="adct58"><span class="artigo">Art. 58.</span> Os benefícios de prestação continuada, mantidos pela previdência social na data da promulgação da Constituição, terão seus valores revistos, a fim de que seja restabelecido o poder aquisitivo, expresso em número de salários mínimos, que tinham na data de sua concessão, obedecendo-se a esse critério de atualização até a implantação do plano de custeio e benefícios referidos no artigo seguinte.</p>

	<p><span class="paragrafo">Parágrafo único.</span> As prestações mensais dos benefícios atualizadas de acordo com este artigo serão devidas e pagas a partir do sétimo mês a contar da promulgação da Constituição.</p>

	<p id="adct59"><span class="artigo">Art. 59.</span> Os projetos de lei relativos à organização da seguridade social e aos planos de custeio e de benefício serão apresentados no prazo máximo de seis meses da promulgação da Constituição ao Congresso Nacional, que terá seis meses para apreciá-los.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Aprovados pelo Congresso Nacional, os planos serão implantados progressivamente nos dezoito meses seguintes.</p>

	<p><span class="artigo">Art. 60.</span> A complementação da União referida no inciso IV do caput do art. 212-A da Constituição Federal será implementada progressivamente até alcançar a proporção estabelecida no inciso V do caput do mesmo artigo, a partir de 1º. de janeiro de 2021, nos seguintes valores mínimos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>I - 12% (doze por cento), no primeiro ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>II - 15% (quinze por cento), no segundo ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>III - 17% (dezessete por cento), no terceiro ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>IV - 19% (dezenove por cento), no quarto ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>V - 21% (vinte e um por cento), no quinto ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>VI - 23% (vinte e três por cento), no sexto ano. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p><span class="paragrafo">§ 1º.</span> A parcela da complementação de que trata a alínea "b" do inciso V do caput do art. 212-A da Constituição Federal observará, no mínimo, os seguintes valores: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>I - 2 (dois) pontos percentuais, no primeiro ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>II - 5 (cinco) pontos percentuais, no segundo ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>III - 6,25 (seis inteiros e vinte e cinco centésimos) pontos percentuais, no terceiro ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>IV - 7,5 (sete inteiros e cinco décimos) pontos percentuais, no quarto ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>V - 9 (nove) pontos percentuais, no quinto ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>VI - 10,5 (dez inteiros e cinco décimos) pontos percentuais, no sexto ano. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A parcela da complementação de que trata a alínea "c" do inciso V do caput do art. 212-A da Constituição Federal observará os seguintes valores: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>I - 0,75 (setenta e cinco centésimos) ponto percentual, no terceiro ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>II - 1,5 (um inteiro e cinco décimos) ponto percentual, no quarto ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>III - 2 (dois) pontos percentuais, no quinto ano; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p>IV - 2,5 (dois inteiros e cinco décimos) pontos percentuais, no sexto ano. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda Constitucional nº 108, de 2020)</a></p>

	<p><span class="artigo" id="60A">Art. 60-A.</span> Os critérios de distribuição da complementação da União e dos fundos a que se refere o inciso I do caput do art. 212-A da Constituição Federal serão revistos em seu sexto ano de vigência e, a partir dessa primeira revisão, periodicamente, a cada 10 (dez) anos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Incluído pela Emenda Constitucional nº 108, de 2020) </a></p>

	<p id="adct61"><span class="artigo">Art. 61.</span> As entidades educacionais a que se refere o art. 213, bem como as fundações de ensino e pesquisa cuja criação tenha sido autorizada por lei, que preencham os requisitos dos incisos I e II do referido artigo e que, nos últimos três anos, tenham recebido recursos públicos, poderão continuar a recebê-los, salvo disposição legal em contrário.</p>

	<p id="adct62"><span class="artigo">Art. 62.</span> A lei criará o Serviço Nacional de Aprendizagem Rural (SENAR) nos moldes da legislação relativa ao Serviço Nacional de Aprendizagem Industrial (SENAI) e ao Serviço Nacional de Aprendizagem do Comércio (SENAC), sem prejuízo das atribuições dos órgãos públicos que atuam na área.</p>

	<p id="adct63"><span class="artigo">Art. 63.</span> É criada uma Comissão composta de nove membros, sendo três do Poder Legislativo, três do Poder Judiciário e três do Poder Executivo, para promover as comemorações do centenário da proclamação da República e da promulgação da primeira Constituição republicana do País, podendo, a seu critério, desdobrar-se em tantas subcomissões quantas forem necessárias.</p>

	<p><span class="paragrafo">Parágrafo único.</span> No desenvolvimento de suas atribuições, a Comissão promoverá estudos, debates e avaliações sobre a evolução política, social, econômica e cultural do País, podendo articular-se com os governos estaduais e municipais e com instituições públicas e privadas que desejem participar dos eventos.</p>

	<p id="adct64"><span class="artigo">Art. 64.</span> A Imprensa Nacional e demais gráficas da União, dos Estados, do Distrito Federal e dos Municípios, da administração direta ou indireta, inclusive fundações instituídas e mantidas pelo Poder Público, promoverão edição popular do texto integral da Constituição, que será posta à disposição das escolas e dos cartórios, dos sindicatos, dos quartéis, das igrejas e de outras instituições representativas da comunidade, gratuitamente, de modo que cada cidadão brasileiro possa receber do Estado um exemplar da Constituição do Brasil.</p>

	<p id="adct65"><span class="artigo">Art. 65.</span> O Poder Legislativo regulamentará, no prazo de doze meses, o art. 220, <span class="paragrafo">§ 4º.</span></p><p></p>

	<p id="adct66"><span class="artigo">Art. 66.</span> São mantidas as concessões de serviços públicos de telecomunicações atualmente em vigor, nos termos da lei.</p>

	<p id="adct67"><span class="artigo">Art. 67.</span> A União concluirá a demarcação das terras indígenas no prazo de cinco anos a partir da promulgação da Constituição.</p>

	<p id="adct68"><span class="artigo">Art. 68.</span> Aos remanescentes das comunidades dos quilombos que estejam ocupando suas terras é reconhecida a propriedade definitiva, devendo o Estado emitir-lhes os títulos respectivos.</p>

	<p id="adct69"><span class="artigo">Art. 69.</span> Será permitido aos Estados manter consultorias jurídicas separadas de suas Procuradorias-Gerais ou Advocacias-Gerais, desde que, na data da promulgação da Constituição, tenham órgãos distintos para as respectivas funções.</p>

	<p id="adct70"><span class="artigo">Art. 70.</span> Fica mantida atual competência dos tribunais estaduais até a mesma seja definida na Constituição do Estado, nos termos do art. 125, § 1º, da Constituição.</p>

	<p id="adct71"><span class="artigo">Art. 71.</span> É instituído, nos exercícios financeiros de 1994 e 1995, bem assim nos períodos de 01/01/1996 a 30/06/97 e 01/07/97 a 31/12/1999, o Fundo Social de Emergência, com o objetivo de saneamento financeiro da Fazenda Pública Federal e de estabilização econômica, cujos recursos serão aplicados prioritariamente no custeio das ações dos sistemas de saúde e educação, incluindo a complementação de recursos de que trata o <span class="paragrafo">§ 3º.</span> do art. 60 do Ato das Disposições Constitucionais Transitórias, benefícios previdenciários e auxílios assistenciais de prestação continuada, inclusive liquidação de passivo previdenciário, e despesas orçamentárias associadas a programas de relevante interesse econômico e social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc17.htm#art1">(Redação dada pela Emenda Constitucional nº 17, de 1997)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc17.htm#art4">(Vide Emenda Constitucional nº 17, de 1997)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Ao Fundo criado por este artigo não se aplica o disposto na parte final do inciso II do <span class="paragrafo">§ 9º.</span> do art. 165 da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art1">(Renumerado do parágrafo único, pela Emenda Constitucional nº 10, de 1996)</a></p>

	<p><span class="paragrafo">§ 2º.</span> O Fundo criado por este artigo passa a ser denominado Fundo de Estabilização Fiscal a partir do início do exercício financeiro de 1996. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art1">(Incluído pela Emenda Constitucional nº 10, de 1996)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O Poder Executivo publicará demonstrativo da execução orçamentária, de periodicidade bimestral, no qual se discriminarão as fontes e usos do Fundo criado por este artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art1">(Incluído pela Emenda Constitucional nº 10, de 1996)</a></p>

	<p id="adct72"><span class="artigo">Art. 72.</span> Integram o Fundo Social de Emergência: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr1.htm#art1">(Incluído pela Emenda Constitucional de Revisão nº 1, de 1994)</a></p>

	<p>I - o produto da arrecadação do imposto sobre renda e proventos de qualquer natureza incidente na fonte sobre pagamentos efetuados, a qualquer título, pela União, inclusive suas autarquias e fundações; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr1.htm#art1">(Incluído pela Emenda Constitucional de Revisão nº 1, de 1994)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc17.htm#art3">(Vide Emenda Constitucional nº 17, de 1997)</a></p>

	<p>II - a parcela do produto da arrecadação do imposto sobre renda e proventos de qualquer natureza e do imposto sobre operações de crédito, câmbio e seguro, ou relativas a títulos e valores mobiliários, decorrente das alterações produzidas pela <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8894.htm">Lei nº 8.894, de 21 de junho de 1994 </a>, e pelas <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8849.htm">Leis nºs 8.849 </a>e <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8848.htm">8.848, ambas de 28 de janeiro de 1994 </a>, e modificações posteriores; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art2">(Redação dada pela Emenda Constitucional nº 10, de 1996) </a></p>

	<p>III - a parcela do produto da arrecadação resultante da elevação da alíquota da contribuição social sobre o lucro dos contribuintes a que se refere o <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L8212cons.htm#art22%C2%A71"><span class="paragrafo">§ 1º.</span> do Art. 22 da Lei nº 8.212, de 24 de julho de 1991 </a>, a qual, nos exercícios financeiros de 1994 e 1995, bem assim no período de 1º. de janeiro de 1996 a 30 de junho de 1997, passa a ser de trinta por cento, sujeita a alteração por lei ordinária, mantidas as demais normas da <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L7689.htm">Lei nº 7.689, de 15 de dezembro de 1988 </a>; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art2">(Redação dada pela Emenda Constitucional nº 10, de 1996) </a></p>

	<p>IV - vinte por cento do produto da arrecadação de todos os impostos e contribuições da União, já instituídos ou a serem criados, excetuado o previsto nos incisos I, II e III, observado o disposto nos §<span class="paragrafo">§ 3º.</span> e 4º; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art2">(Redação dada pela Emenda Constitucional nº 10, de 1996)</a></p>

	<p>V - a parcela do produto da arrecadação da contribuição de que trata a Lei Complementar nº 7, de 7 de setembro de 1970, devida pelas pessoas jurídicas a que se refere o inciso III deste artigo, a qual será calculada, nos exercícios financeiros de 1994 a 1995, bem assim nos períodos de 1º. de janeiro de 1996 a 30 de junho de 1997 e de 1º. de julho de 1997 a 31 de dezembro de 1999, mediante a aplicação da alíquota de setenta e cinco centésimos por cento, sujeita a alteração por lei ordinária posterior, sobre a receita bruta operacional, como definida na legislação do imposto sobre renda e proventos de qualquer natureza. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc17.htm#art2">(Redação dada pela Emenda Constitucional nº 17, de 1997)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc17.htm#art4">(Vide Emenda Constitucional nº 17, de 1997)</a></p>

	<p>VI - outras receitas previstas em lei específica. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr1.htm#art1">(Incluído pela Emenda Constitucional de Revisão nº 1, de 1994)</a></p>

	<p><span class="paragrafo">§ 1º.</span> As alíquotas e a base de cálculo previstas nos incisos III e V aplicar-se-ão a partir do primeiro dia do mês seguinte aos noventa dias posteriores à promulgação desta Emenda. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr1.htm#art1">(Incluído pela Emenda Constitucional de Revisão nº 1, de 1994)</a></p>

	<p><span class="paragrafo">§ 2º.</span> As parcelas de que tratam os incisos I, II, III e V serão previamente deduzidas da base de cálculo de qualquer vinculação ou participação constitucional ou legal, não se lhes aplicando o disposto nos artigos, 159, 212 e 239 da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art2">(Redação dada pela Emenda Constitucional nº 10, de 1996)</a></p>

	<p><span class="paragrafo">§ 3º.</span> A parcela de que trata o inciso IV será previamente deduzida da base de cálculo das vinculações ou participações constitucionais previstas nos artigos 153, § 5º, 157, II, 212 e 239 da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art2">(Redação dada pela Emenda Constitucional nº 10, de 1996)</a></p>

	<p><span class="paragrafo">§ 4º.</span> O disposto no parágrafo anterior não se aplica aos recursos previstos nos Artigos 158, II e 159 da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art2">(Redação dada pela Emenda Constitucional nº 10, de 1996)</a></p>

	<p><span class="paragrafo">§ 5º.</span> A parcela dos recursos provenientes do imposto sobre renda e proventos de qualquer natureza, destinada ao Fundo Social de Emergência, nos termos do inciso II deste artigo, não poderá exceder a cinco inteiros e seis décimos por cento do total do produto da sua arrecadação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc10.htm#art2">(Redação dada pela Emenda Constitucional nº 10, de 1996)</a></p>

	<p id="adct73"><span class="artigo">Art. 73.</span> Na regulação do Fundo Social de Emergência não poderá ser utilizado o instrumento previsto no inciso V do art. 59 da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/ECR/ecr1.htm#art1">(Incluído pela Emenda Constitucional de Revisão nº 1, de 1994)</a></p>

	<p id="adct74"><span class="artigo">Art. 74.</span> A União poderá instituir contribuição provisória sobre movimentação ou transmissão de valores e de créditos e direitos de natureza financeira. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc12.htm#art1">(Incluído pela Emenda Constitucional nº 12, de 1996)</a></p>

	<p><span class="paragrafo">§ 1º.</span> A alíquota da contribuição de que trata este artigo não excederá a vinte e cinco centésimos por cento, facultado ao Poder Executivo reduzi-la ou restabelecê-la, total ou parcialmente, nas condições e limites fixados em lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc12.htm#art1">(Incluído pela Emenda Constitucional nº 12, de 1996)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A contribuição de que trata este artigo não se aplica o disposto nos arts. 153, § 5º, e 154, I, da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc12.htm#art1">(Incluído pela Emenda Constitucional nº 12, de 1996)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O produto da arrecadação da contribuição de que trata este artigo será destinado integralmente ao Fundo Nacional de Saúde, para financiamento das ações e serviços de saúde. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc12.htm#art1">(Incluído pela Emenda Constitucional nº 12, de 1996)</a></p>

	<p><span class="paragrafo">§ 4º.</span> A contribuição de que trata este artigo terá sua exigibilidade subordinada ao disposto no art. 195, § 6º, da Constituição, e não poderá ser cobrada por prazo superior a dois anos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc12.htm#art1">(Incluído pela Emenda Constitucional nº 12, de 1996)</a></p>

	<p id="adct75"><span class="artigo">Art. 75.</span> É prorrogada, por trinta e seis meses, a cobrança da contribuição provisória sobre movimentação ou transmissão de valores e de créditos e direitos de natureza financeira de que trata o art. 74, instituída pela <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9311.htm">Lei nº 9.311, de 24 de outubro de 1996</a>, modificada pela <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9539.htm">Lei nº 9.539, de 12 de dezembro de 1997</a>, cuja vigência é também prorrogada por idêntico prazo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc21.htm#art75">(Incluído pela Emenda Constitucional nº 21, de 1999)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Observado o disposto no <span class="paragrafo">§ 6º.</span> do art. 195 da Constituição Federal, a alíquota da contribuição será de trinta e oito centésimos por cento, nos primeiros doze meses, e de trinta centésimos, nos meses subsequentes, facultado ao Poder Executivo reduzi-la total ou parcialmente, nos limites aqui definidos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc21.htm#art75">(Incluído pela Emenda Constitucional nº 21, de 1999)</a></p>

	<p><span class="paragrafo">§ 2º.</span> O resultado do aumento da arrecadação, decorrente da alteração da alíquota, nos exercícios financeiros de 1999, 2000 e 2001, será destinado ao custeio da previdência social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc21.htm#art75">(Incluído pela Emenda Constitucional nº 21, de 1999)</a></p>

	<p><span class="paragrafo">§ 3º.</span> É a União autorizada a emitir títulos da dívida pública interna, cujos recursos serão destinados ao custeio da saúde e da previdência social, em montante equivalente ao produto da arrecadação da contribuição, prevista e não realizada em 1999. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc21.htm#art75">(Incluído pela Emenda Constitucional nº 21, de 1999)</a><a href="http://www.stf.jus.br/portal/peticaoInicial/verPeticaoInicial.asp?base=ADIN&amp;s1=2031&amp;processo=2031">(Vide ADIN nº 2.031-5)</a></p>

	<p id="adct76"><span class="artigo">Art. 76.</span> São desvinculados de órgão, fundo ou despesa, até 31 de dezembro de 2024, 30% (trinta por cento) da arrecadação da União relativa às contribuições sociais, sem prejuízo do pagamento das despesas do Regime Geral de Previdência Social, às contribuições de intervenção no domínio econômico e às taxas, já instituídas ou que vierem a ser criadas até a referida data.</p>

	<ul class="dica">
		<li>Artigo com redação dada pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="paragrafo">§ 1º.</span> (Revogado). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art1">(Redação dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>§ 2° Excetua-se da desvinculação de que trata o caput a arrecadação da contribuição social do salário-educação a que se refere o <a href="#art212§5."><span class="paragrafo">§ 5º.</span> do art. 212 da Constituição Federal</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc68.htm#art1">(Redação dada pela Emenda Constitucional nº 68, de 2011).</a></p>

	<p><span class="paragrafo">§ 3º.</span> (Revogado). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art1">(Redação dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p><span class="paragrafo">§ 4º.</span> A desvinculação de que trata o caput não se aplica às receitas das contribuições sociais destinadas ao custeio da seguridade social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art2">(Incluído pela Emenda Constitucional nº 103, de 2019)</a></p>

	<p id="adct76a"><span class="artigo" id="76A">Art. 76-A.</span> São desvinculados de órgão, fundo ou despesa, até 31 de dezembro de 2023, 30% (trinta por cento) das receitas dos Estados e do Distrito Federal relativas a impostos, taxas e multas, já instituídos ou que vierem a ser criados até a referida data, seus adicionais e respectivos acréscimos legais, e outras receitas correntes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Excetuam-se da desvinculação de que trata o caput: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>I - recursos destinados ao financiamento das ações e serviços públicos de saúde e à manutenção e desenvolvimento do ensino de que tratam, respectivamente, os incisos II e III do <span class="paragrafo">§ 2º.</span> do art. 198 e o art. 212 da Constituição Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>II - receitas que pertencem aos Municípios decorrentes de transferências previstas na Constituição Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>III - receitas de contribuições previdenciárias e de assistência à saúde dos servidores; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>IV - demais transferências obrigatórias e voluntárias entre entes da Federação com destinação especificada em lei; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>V - fundos instituídos pelo Poder Judiciário, pelos Tribunais de Contas, pelo Ministério Público, pelas Defensorias Públicas e pelas Procuradorias-Gerais dos Estados e do Distrito Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p id="adct76b"><span class="artigo" id="76B">Art. 76-B.</span> São desvinculados de órgão, fundo ou despesa, até 31 de dezembro de 2023, 30% (trinta por cento) das receitas dos Municípios relativas a impostos, taxas e multas, já instituídos ou que vierem a ser criados até a referida data, seus adicionais e respectivos acréscimos legais, e outras receitas correntes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Excetuam-se da desvinculação de que trata o caput: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>I - recursos destinados ao financiamento das ações e serviços públicos de saúde e à manutenção e desenvolvimento do ensino de que tratam, respectivamente, os incisos II e III do <span class="paragrafo">§ 2º.</span> do art. 198 e o art. 212 da Constituição Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>II - receitas de contribuições previdenciárias e de assistência à saúde dos servidores; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>III - transferências obrigatórias e voluntárias entre entes da Federação com destinação especificada em lei; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p>IV - fundos instituídos pelo Tribunal de Contas do Município. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art2">(Incluído dada pela Emenda constitucional nº 93, de 2016)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc93.htm#art3">Produção de efeitos</a></p>

	<p id="adct77"><span class="artigo">Art. 77.</span> Até o exercício financeiro de 2004, os recursos mínimos aplicados nas ações e serviços públicos de saúde serão equivalentes: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>I – no caso da União: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p class="alinea">a) no ano 2000, o montante empenhado em ações e serviços públicos de saúde no exercício financeiro de 1999 acrescido de, no mínimo, cinco por cento; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p class="alinea">b) do ano 2001 ao ano 2004, o valor apurado no ano anterior, corrigido pela variação nominal do Produto Interno Bruto – PIB; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>II – no caso dos Estados e do Distrito Federal, doze por cento do produto da arrecadação dos impostos a que se refere o art. 155 e dos recursos de que tratam os arts. 157 e 159, inciso I, alínea a, e inciso II, deduzidas as parcelas que forem transferidas aos respectivos Municípios; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p>III – no caso dos Municípios e do Distrito Federal, quinze por cento do produto da arrecadação dos impostos a que se refere o art. 156 e dos recursos de que tratam os arts. 158 e 159, inciso I, alínea b e <span class="paragrafo">§ 3º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os Estados, o Distrito Federal e os Municípios que apliquem percentuais inferiores aos fixados nos incisos II e III deverão elevá-los gradualmente, até o exercício financeiro de 2004, reduzida a diferença à razão de, pelo menos, um quinto por ano, sendo que, a partir de 2000, a aplicação será de pelo menos sete por cento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p><span class="paragrafo">§ 2º.</span> dos recursos da União apurados nos termos deste artigo, quinze por cento, no mínimo, serão aplicados nos Municípios, segundo o critério populacional, em ações e serviços básicos de saúde, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Os recursos dos Estados, do Distrito Federal e dos Municípios destinados às ações e serviços públicos de saúde e os transferidos pela União para a mesma finalidade serão aplicados por meio de Fundo de Saúde que será acompanhado e fiscalizado por Conselho de Saúde, sem prejuízo do disposto no art. 74 da Constituição Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Na ausência da lei complementar a que se refere o art. 198, § 3º, a partir do exercício financeiro de 2005, aplicar-se-á à União, aos Estados, ao Distrito Federal e aos Municípios o disposto neste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc29.htm#art7">(Incluído pela Emenda Constitucional nº 29, de 2000)</a></p>

	<p id="adct78"><span class="artigo">Art. 78.</span> Ressalvados os créditos definidos em lei como de pequeno valor, os de natureza alimentícia, os de que trata o art. 33 deste Ato das Disposições Constitucionais Transitórias e suas complementações e os que já tiverem os seus respectivos recursos liberados ou depositados em juízo, os precatórios pendentes na data de promulgação desta Emenda e os que decorram de ações iniciais ajuizadas até 31 de dezembro de 1999 serão liquidados pelo seu valor real, em moeda corrente, acrescido de juros legais, em prestações anuais, iguais e sucessivas, no prazo máximo de dez anos, permitida a cessão dos créditos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc30.htm#art2">(Incluído pela Emenda Constitucional nº 30, de 2000)</a></p>

	<p><span class="paragrafo">§ 1º.</span> É permitida a decomposição de parcelas, a critério do credor. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc30.htm#art2">(Incluído pela Emenda Constitucional nº 30, de 2000)</a></p>

	<p><span class="paragrafo">§ 2º.</span> As prestações anuais a que se refere o caput deste artigo terão, se não liquidadas até o final do exercício a que se referem, poder liberatório do pagamento de tributos da entidade devedora. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc30.htm#art2">(Incluído pela Emenda Constitucional nº 30, de 2000)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art6">(Vide Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O prazo referido no caput deste artigo fica reduzido para dois anos, nos casos de precatórios judiciais originários de desapropriação de imóvel residencial do credor, desde que comprovadamente único à época da imissão na posse. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc30.htm#art2">(Incluído pela Emenda Constitucional nº 30, de 2000)</a></p>

	<p><span class="paragrafo">§ 4º.</span> O Presidente do Tribunal competente deverá, vencido o prazo ou em caso de omissão no orçamento, ou preterição ao direito de precedência, a requerimento do credor, requisitar ou determinar o sequestro de recursos financeiros da entidade executada, suficientes à satisfação da prestação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc30.htm#art2">(Incluído pela Emenda Constitucional nº 30, de 2000)</a></p>

	<p id="adct79"><span class="artigo">Art. 79.</span> É instituído, para vigorar até o ano de 2010, no âmbito do Poder Executivo Federal, o Fundo de Combate e Erradicação da Pobreza, a ser regulado por lei complementar com o objetivo de viabilizar a todos os brasileiros acesso a níveis dignos de subsistência, cujos recursos serão aplicados em ações suplementares de nutrição, habitação, educação, saúde, reforço de renda familiar e outros programas de relevante interesse social voltados para melhoria da qualidade de vida. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art4">(Vide Emenda Constitucional nº 42, de 19.12.2003)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc67.htm">(Vide Emenda Constitucional nº 67, de 2010)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> O Fundo previsto neste artigo terá Conselho Consultivo e de Acompanhamento que conte com a participação de representantes da sociedade civil, nos termos da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p id="adct80"><span class="artigo">Art. 80.</span> Compõem o Fundo de Combate e Erradicação da Pobreza: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc67.htm">(Vide Emenda Constitucional nº 67, de 2010)</a></p>

	<p>I – a parcela do produto da arrecadação correspondente a um adicional de oito centésimos por cento, aplicável de 18 de junho de 2000 a 17 de junho de 2002, na alíquota da contribuição social de que trata o art. 75 do Ato das Disposições Constitucionais Transitórias; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p>II – a parcela do produto da arrecadação correspondente a um adicional de cinco pontos percentuais na alíquota do Imposto sobre Produtos Industrializados – IPI, ou do imposto que vier a substituí-lo, incidente sobre produtos supérfluos e aplicável até a extinção do Fundo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p>III – o produto da arrecadação do imposto de que trata o art. 153, inciso VII, da Constituição; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p>IV – dotações orçamentárias; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p>V– doações, de qualquer natureza, de pessoas físicas ou jurídicas do País ou do exterior; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p>VI – outras receitas, a serem definidas na regulamentação do referido Fundo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Aos recursos integrantes do Fundo de que trata este artigo não se aplica o disposto nos arts. 159 e 167, inciso IV, da Constituição, assim como qualquer desvinculação de recursos orçamentários. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p><span class="paragrafo">§ 2º.</span> A arrecadação decorrente do disposto no inciso I deste artigo, no período compreendido entre 18 de junho de 2000 e o início da vigência da lei complementar a que se refere a art. 79, será integralmente repassada ao Fundo, preservado o seu valor real, em títulos públicos federais, progressivamente resgatáveis após 18 de junho de 2002, na forma da lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p id="adct81"><span class="artigo">Art. 81.</span> É instituído Fundo constituído pelos recursos recebidos pela União em decorrência da desestatização de sociedades de economia mista ou empresas públicas por ela controladas, direta ou indiretamente, quando a operação envolver a alienação do respectivo controle acionário a pessoa ou entidade não integrante da Administração Pública, ou de participação societária remanescente após a alienação, cujos rendimentos, gerados a partir de 18 de junho de 2002, reverterão ao Fundo de Combate e Erradicação de Pobreza. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc67.htm">(Vide Emenda Constitucional nº 67, de 2010)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Caso o montante anual previsto nos rendimentos transferidos ao Fundo de Combate e Erradicação da Pobreza, na forma deste artigo, não alcance o valor de quatro bilhões de reais. far-se-à complementação na forma do art. 80, inciso IV, do Ato das disposições Constitucionais Transitórias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Sem prejuízo do disposto no § 1º, o Poder Executivo poderá destinar ao Fundo a que se refere este artigo outras receitas decorrentes da alienação de bens da União. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p><span class="paragrafo">§ 3º.</span> A constituição do Fundo a que se refere o caput, a transferência de recursos ao Fundo de Combate e Erradicação da Pobreza e as demais disposições referentes ao <span class="paragrafo">§ 1º.</span> deste artigo serão disciplinadas em lei, não se aplicando o disposto no art. 165, § 9º, inciso II, da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p id="adct82"><span class="artigo">Art. 82.</span> Os Estados, o Distrito Federal e os Municípios devem instituir Fundos de Combate á Pobreza, com os recursos de que trata este artigo e outros que vierem a destinar, devendo os referidos Fundos ser geridos por entidades que contem com a participação da sociedade civil. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Para o financiamento dos Fundos Estaduais e Distrital, poderá ser criado adicional de até dois pontos percentuais na alíquota do Imposto sobre Circulação de Mercadorias e Serviços - ICMS, sobre os produtos e serviços supérfluos e nas condições definidas na lei complementar de que trata o art. 155, § 2º, XII, da Constituição, não se aplicando, sobre este percentual, o disposto no art. 158, IV, da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art2">(Redação dada pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Para o financiamento dos Fundos Municipais, poderá ser criado adicional de até meio ponto percentual na alíquota do Imposto sobre serviços ou do imposto que vier a substituí-lo, sobre serviços supérfluos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc31.htm#art1">(Incluído pela Emenda Constitucional nº 31, de 2000)</a></p>

	<p id="adct83"><span class="artigo">Art. 83.</span> Lei federal definirá os produtos e serviços supérfluos a que se referem os arts. 80, II, e 82, <span class="paragrafo">§ 2º.</span> . <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art2">(Redação dada pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p id="adct84"><span class="artigo">Art. 84.</span> A contribuição provisória sobre movimentação ou transmissão de valores e de créditos e direitos de natureza financeira, prevista nos arts. 74, 75 e 80, I, deste Ato das Disposições Constitucionais Transitórias, será cobrada até 31 de dezembro de 2004. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Fica prorrogada, até a data referida no caput deste artigo, a vigência da <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9311.htm">Lei nº 9.311, de 24 de outubro de 1996</a>, e suas alterações. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">§ 2º.</span> do produto da arrecadação da contribuição social de que trata este artigo será destinada a parcela correspondente à alíquota de: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>I - vinte centésimos por cento ao Fundo Nacional de Saúde, para financiamento das ações e serviços de saúde; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>II - dez centésimos por cento ao custeio da previdência social; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>III - oito centésimos por cento ao Fundo de Combate e Erradicação da Pobreza, de que tratam os arts. 80 e 81 deste Ato das Disposições Constitucionais Transitórias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">§ 3º.</span> A alíquota da contribuição de que trata este artigo será de: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>I - trinta e oito centésimos por cento, nos exercícios financeiros de 2002 e 2003; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>II - <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art6">(Revogado pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p id="adct85"><span class="artigo">Art. 85.</span> A contribuição a que se refere o art. 84 deste Ato das Disposições Constitucionais Transitórias não incidirá, a partir do trigésimo dia da data de publicação desta Emenda Constitucional, nos lançamentos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>I - em contas correntes de depósito especialmente abertas e exclusivamente utilizadas para operações de: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2004-2006/2004/Lei/L10.892.htm#art2%C2%A73">(Vide Lei nº 10.982, de 2004)</a></p>

	<p class="alinea">a) câmaras e prestadoras de serviços de compensação e de liquidação de que trata o parágrafo único do <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LEIS_2001/L10214.htm#art2">art. 2º. da Lei nº 10.214, de 27 de março de 2001</a>; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p class="alinea">b) companhias securitizadoras de que trata a <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9514.htm">Lei nº 9.514, de 20 de novembro de 1997</a>; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p class="alinea">c) sociedades anônimas que tenham por objeto exclusivo a aquisição de créditos oriundos de operações praticadas no mercado financeiro; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>II - em contas correntes de depósito, relativos a: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p class="alinea">a) operações de compra e venda de ações, realizadas em recintos ou sistemas de negociação de bolsas de valores e no mercado de balcão organizado; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p class="alinea">b) contratos referenciados em ações ou índices de ações, em suas diversas modalidades, negociados em bolsas de valores, de mercadorias e de futuros; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>III - em contas de investidores estrangeiros, relativos a entradas no País e a remessas para o exterior de recursos financeiros empregados, exclusivamente, em operações e contratos referidos no inciso II deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O Poder Executivo disciplinará o disposto neste artigo no prazo de trinta dias da data de publicação desta Emenda Constitucional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">§ 2º.</span> O disposto no inciso I deste artigo aplica-se somente às operações relacionadas em ato do Poder Executivo, dentre aquelas que constituam o objeto social das referidas entidades. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O disposto no inciso II deste artigo aplica-se somente a operações e contratos efetuados por intermédio de instituições financeiras, sociedades corretoras de títulos e valores mobiliários, sociedades distribuidoras de títulos e valores mobiliários e sociedades corretoras de mercadorias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p id="adct86"><span class="artigo">Art. 86.</span> Serão pagos conforme disposto no art. 100 da Constituição Federal, não se lhes aplicando a regra de parcelamento estabelecida no caput do art. 78 deste Ato das Disposições Constitucionais Transitórias, os débitos da Fazenda Federal, Estadual, Distrital ou Municipal oriundos de sentenças transitadas em julgado, que preencham, cumulativamente, as seguintes condições: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>I - ter sido objeto de emissão de precatórios judiciários; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>II - ter sido definidos como de pequeno valor pela lei de que trata o <span class="paragrafo">§ 3º.</span> do art. 100 da Constituição Federal ou pelo art. 87 deste Ato das Disposições Constitucionais Transitórias; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>III - estar, total ou parcialmente, pendentes de pagamento na data da publicação desta Emenda Constitucional . <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os débitos a que se refere o caput deste artigo, ou os respectivos saldos, serão pagos na ordem cronológica de apresentação dos respectivos precatórios, com precedência sobre os de maior valor. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os débitos a que se refere o caput deste artigo, se ainda não tiverem sido objeto de pagamento parcial, nos termos do art. 78 deste Ato das Disposições Constitucionais Transitórias, poderão ser pagos em duas parcelas anuais, se assim dispuser a lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Observada a ordem cronológica de sua apresentação, os débitos de natureza alimentícia previstos neste artigo terão precedência para pagamento sobre todos os demais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p id="adct87"><span class="artigo">Art. 87.</span> Para efeito do que dispõem o <span class="paragrafo">§ 3º.</span> do art. 100 da Constituição Federal e o art. 78 deste Ato das Disposições Constitucionais Transitórias serão considerados de pequeno valor, até que se dê a publicação oficial das respectivas leis definidoras pelos entes da Federação, observado o disposto no <span class="paragrafo">§ 4º.</span> do art. 100 da Constituição Federal, os débitos ou obrigações consignados em precatório judiciário, que tenham valor igual ou inferior a: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>I - quarenta salários-mínimos, perante a Fazenda dos Estados e do Distrito Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>II - trinta salários-mínimos, perante a Fazenda dos Municípios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Se o valor da execução ultrapassar o estabelecido neste artigo, o pagamento far-se-á, sempre, por meio de precatório, sendo facultada à parte exequente a renúncia ao crédito do valor excedente, para que possa optar pelo pagamento do saldo sem o precatório, da forma prevista no <span class="paragrafo">§ 3º.</span> do art. 100. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p id="adct88"><span class="artigo">Art. 88.</span> Enquanto lei complementar não disciplinar o disposto nos incisos I e III do <span class="paragrafo">§ 3º.</span> do art. 156 da Constituição Federal, o imposto a que se refere o inciso III do caput do mesmo artigo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>I – terá alíquota mínima de dois por cento, exceto para os serviços a que se referem os <a href="http://www.planalto.gov.br/ccivil_03/Decreto-Lei/Del0406.htm#anexoitem32">itens 32, 33 e 34 da Lista de Serviços anexa ao Decreto-Lei nº 406, de 31 de dezembro de 1968</a>; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p>II – não será objeto de concessão de isenções, incentivos e benefícios fiscais, que resulte, direta ou indiretamente, na redução da alíquota mínima estabelecida no inciso I. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc37.htm#art3">(Incluído pela Emenda Constitucional nº 37, de 2002)</a></p>

	<p id="adct89"><span class="artigo">Art. 89.</span> Os integrantes da carreira policial militar e os servidores municipais do ex-Território Federal de Rondônia que, comprovadamente, se encontravam no exercício regular de suas funções prestando serviço àquele ex-Território na data em que foi transformado em Estado, bem como os servidores e os policiais militares alcançados pelo disposto no <a href="http://www.planalto.gov.br/ccivil_03/LEIS/LCP/Lcp41.htm#art36">art. 36 da Lei Complementar nº 41, de 22 de dezembro de 1981</a>, e aqueles admitidos regularmente nos quadros do Estado de Rondônia até a data de posse do primeiro Governador eleito, em 15 de março de 1987, constituirão, mediante opção, quadro em extinção da administração federal, assegurados os direitos e as vantagens a eles inerentes, vedado o pagamento, a qualquer título, de diferenças remuneratórias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc60.htm#art1">(Redação dada pela Emenda Constitucional nº 60, de 2009)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2018/Lei/L13681.htm">(Vide Lei nº 13.681, de 2018)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os membros da Polícia Militar continuarão prestando serviços ao Estado de Rondônia, na condição de cedidos, submetidos às corporações da Polícia Militar, observadas as atribuições de função compatíveis com o grau hierárquico. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc60.htm#art1">(Incluído pela Emenda Constitucional nº 60, de 2009)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os servidores a que se refere o caput continuarão prestando serviços ao Estado de Rondônia na condição de cedidos, até seu aproveitamento em órgão ou entidade da administração federal direta, autárquica ou fundacional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc60.htm#art1">(Incluído pela Emenda Constitucional nº 60, de 2009)</a></p>

	<p id="adct90"><span class="artigo">Art. 90.</span> O prazo previsto no caput do art. 84 deste Ato das Disposições Constitucionais Transitórias fica prorrogado até 31 de dezembro de 2007. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art3">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Fica prorrogada, até a data referida no caput deste artigo, a vigência da <a href="http://www.planalto.gov.br/ccivil_03/LEIS/L9311.htm">Lei nº 9.311, de 24 de outubro de 1996</a>, e suas alterações. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art3">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Até a data referida no caput deste artigo, a alíquota da contribuição de que trata o art. 84 deste Ato das Disposições Constitucionais Transitórias será de trinta e oito centésimos por cento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art3">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p id="adct91"><span class="artigo">Art. 91.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art6">(Revogado pela Emenda Constitucional nº 109, de 2021)</a></p>

	<p id="adct92"><span class="artigo">Art. 92.</span> São acrescidos dez anos ao prazo fixado no art. 40 deste Ato das Disposições Constitucionais Transitórias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art3">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a><a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2010/Decreto/D7212.htm#art94">(Vide Decreto nº 7.212, de 2010) </a></p>

	<p id="adct92a"><span class="artigo" id="92A">Art. 92-A.</span> São acrescidos 50 (cinquenta) anos ao prazo fixado pelo art. 92 deste Ato das Disposições Constitucionais Transitórias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc83.htm">(Incluído pela Emenda Constitucional nº 83, de 2014)</a></p>

	<p id="adct93"><span class="artigo">Art. 93.</span> A vigência do disposto no art. 159, III, e § 4º, iniciará somente após a edição da lei de que trata o referido inciso III. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art3">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p id="adct94"><span class="artigo">Art. 94.</span> Os regimes especiais de tributação para microempresas e empresas de pequeno porte próprios da União, dos Estados, do Distrito Federal e dos Municípios cessarão a partir da entrada em vigor do regime previsto no art. 146, III, d, da Constituição. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc42.htm#art3">(Incluído pela Emenda Constitucional nº 42, de 19.12.2003)</a></p>

	<p id="adct95"><span class="artigo">Art. 95.</span> Os nascidos no estrangeiro entre 7 de junho de 1994 e a data da promulgação desta Emenda Constitucional, filhos de pai brasileiro ou mãe brasileira, poderão ser registrados em repartição diplomática ou consular brasileira competente ou em ofício de registro, se vierem a residir na República Federativa do Brasil. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc54.htm#art2">(Incluído pela Emenda Constitucional nº 54, de 2007)</a></p>

	<p id="adct96"><span class="artigo">Art. 96.</span> Ficam convalidados os atos de criação, fusão, incorporação e desmembramento de Municípios, cuja lei tenha sido publicada até 31 de dezembro de 2006, atendidos os requisitos estabelecidos na legislação do respectivo Estado à época de sua criação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc57.htm#art1">(Incluído pela Emenda Constitucional nº 57, de 2008).</a></p>

	<p id="adct97"><span class="artigo">Art. 97.</span> Até que seja editada a lei complementar de que trata o § 15 do art. 100 da Constituição Federal, os Estados, o Distrito Federal e os Municípios que, na data de publicação desta Emenda Constitucional, estejam em mora na quitação de precatórios vencidos, relativos às suas administrações direta e indireta, inclusive os emitidos durante o período de vigência do regime especial instituído por este artigo, farão esses pagamentos de acordo com as normas a seguir estabelecidas, sendo inaplicável o disposto no art. 100 desta Constituição Federal, exceto em seus §§ 2º, 3º, 9º, 10, 11, 12, 13 e 14, e sem prejuízo dos acordos de juízos conciliatórios já formalizados na data de promulgação desta Emenda Constitucional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art3">(Vide Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os Estados, o Distrito Federal e os Municípios sujeitos ao regime especial de que trata este artigo optarão, por meio de ato do Poder Executivo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>I - pelo depósito em conta especial do valor referido pelo <span class="paragrafo">§ 2º.</span> deste artigo; ou <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>II - pela adoção do regime especial pelo prazo de até 15 (quinze) anos, caso em que o percentual a ser depositado na conta especial a que se refere o <span class="paragrafo">§ 2º.</span> deste artigo corresponderá, anualmente, ao saldo total dos precatórios devidos, acrescido do índice oficial de remuneração básica da caderneta de poupança e de juros simples no mesmo percentual de juros incidentes sobre a caderneta de poupança para fins de compensação da mora, excluída a incidência de juros compensatórios, diminuído das amortizações e dividido pelo número de anos restantes no regime especial de pagamento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Para saldar os precatórios, vencidos e a vencer, pelo regime especial, os Estados, o Distrito Federal e os Municípios devedores depositarão mensalmente, em conta especial criada para tal fim, 1/12 (um doze avos) do valor calculado percentualmente sobre as respectivas receitas correntes líquidas, apuradas no segundo mês anterior ao mês de pagamento, sendo que esse percentual, calculado no momento de opção pelo regime e mantido fixo até o final do prazo a que se refere o § 14 deste artigo, será: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>I - para os Estados e para o Distrito Federal: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p class="alinea">a) de, no mínimo, 1,5% (um inteiro e cinco décimos por cento), para os Estados das regiões Norte, Nordeste e Centro-Oeste, além do Distrito Federal, ou cujo estoque de precatórios pendentes das suas administrações direta e indireta corresponder a até 35% (trinta e cinco por cento) do total da receita corrente líquida; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p class="alinea">b) de, no mínimo, 2% (dois por cento), para os Estados das regiões Sul e Sudeste, cujo estoque de precatórios pendentes das suas administrações direta e indireta corresponder a mais de 35% (trinta e cinco por cento) da receita corrente líquida; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>II - para Municípios: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p class="alinea">a) de, no mínimo, 1% (um por cento), para Municípios das regiões Norte, Nordeste e Centro-Oeste, ou cujo estoque de precatórios pendentes das suas administrações direta e indireta corresponder a até 35% (trinta e cinco por cento) da receita corrente líquida; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p class="alinea">b) de, no mínimo, 1,5% (um inteiro e cinco décimos por cento), para Municípios das regiões Sul e Sudeste, cujo estoque de precatórios pendentes das suas administrações direta e indireta corresponder a mais de 35 % (trinta e cinco por cento) da receita corrente líquida. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Entende-se como receita corrente líquida, para os fins de que trata este artigo, o somatório das receitas tributárias, patrimoniais, industriais, agropecuárias, de contribuições e de serviços, transferências correntes e outras receitas correntes, incluindo as oriundas do <span class="paragrafo">§ 1º.</span> do art. 20 da Constituição Federal, verificado no período compreendido pelo mês de referência e os 11 (onze) meses anteriores, excluídas as duplicidades, e deduzidas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>I - nos Estados, as parcelas entregues aos Municípios por determinação constitucional; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>II - nos Estados, no Distrito Federal e nos Municípios, a contribuição dos servidores para custeio do seu sistema de previdência e assistência social e as receitas provenientes da compensação financeira referida no <span class="paragrafo">§ 9º.</span> do art. 201 da Constituição Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 4º.</span> As contas especiais de que tratam os §<span class="paragrafo">§ 1º.</span> e 2º. serão administradas pelo Tribunal de Justiça local, para pagamento de precatórios expedidos pelos tribunais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Os recursos depositados nas contas especiais de que tratam os §<span class="paragrafo">§ 1º.</span> e 2º. deste artigo não poderão retornar para Estados, Distrito Federal e Municípios devedores. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Pelo menos 50% (cinquenta por cento) dos recursos de que tratam os §<span class="paragrafo">§ 1º.</span> e 2º. deste artigo serão utilizados para pagamento de precatórios em ordem cronológica de apresentação, respeitadas as preferências definidas no § 1º, para os requisitórios do mesmo ano e no <span class="paragrafo">§ 2º.</span> do art. 100, para requisitórios de todos os anos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 7º.</span> Nos casos em que não se possa estabelecer a precedência cronológica entre 2 (dois) precatórios, pagar-se-á primeiramente o precatório de menor valor. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 8º.</span> A aplicação dos recursos restantes dependerá de opção a ser exercida por Estados, Distrito Federal e Municípios devedores, por ato do Poder Executivo, obedecendo à seguinte forma, que poderá ser aplicada isoladamente ou simultaneamente: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>I - destinados ao pagamento dos precatórios por meio do leilão; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>II - destinados a pagamento a vista de precatórios não quitados na forma do § 6° e do inciso I, em ordem única e crescente de valor por precatório; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>III - destinados a pagamento por acordo direto com os credores, na forma estabelecida por lei própria da entidade devedora, que poderá prever criação e forma de funcionamento de câmara de conciliação. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p><span class="paragrafo">§ 9º.</span> Os leilões de que trata o inciso I do <span class="paragrafo">§ 8º.</span> deste artigo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>I - serão realizados por meio de sistema eletrônico administrado por entidade autorizada pela Comissão de Valores Mobiliários ou pelo Banco Central do Brasil; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>II - admitirão a habilitação de precatórios, ou parcela de cada precatório indicada pelo seu detentor, em relação aos quais não esteja pendente, no âmbito do Poder Judiciário, recurso ou impugnação de qualquer natureza, permitida por iniciativa do Poder Executivo a compensação com débitos líquidos e certos, inscritos ou não em dívida ativa e constituídos contra devedor originário pela Fazenda Pública devedora até a data da expedição do precatório, ressalvados aqueles cuja exigibilidade esteja suspensa nos termos da legislação, ou que já tenham sido objeto de abatimento nos termos do <span class="paragrafo">§ 9º.</span> do art. 100 da Constituição Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>III - ocorrerão por meio de oferta pública a todos os credores habilitados pelo respectivo ente federativo devedor; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>IV - considerarão automaticamente habilitado o credor que satisfaça o que consta no inciso II; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>V - serão realizados tantas vezes quanto necessário em função do valor disponível; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>VI - a competição por parcela do valor total ocorrerá a critério do credor, com deságio sobre o valor desta; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>VII - ocorrerão na modalidade deságio, associado ao maior volume ofertado cumulado ou não com o maior percentual de deságio, pelo maior percentual de deságio, podendo ser fixado valor máximo por credor, ou por outro critério a ser definido em edital; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>VIII - o mecanismo de formação de preço constará nos editais publicados para cada leilão; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>IX - a quitação parcial dos precatórios será homologada pelo respectivo Tribunal que o expediu. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 10. No caso de não liberação tempestiva dos recursos de que tratam o inciso II do <span class="paragrafo">§ 1º.</span> e os §<span class="paragrafo">§ 2º.</span> e 6º. deste artigo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>I - haverá o sequestro de quantia nas contas de Estados, Distrito Federal e Municípios devedores, por ordem do Presidente do Tribunal referido no § 4º, até o limite do valor não liberado; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>II - constituir-se-á, alternativamente, por ordem do Presidente do Tribunal requerido, em favor dos credores de precatórios, contra Estados, Distrito Federal e Municípios devedores, direito líquido e certo, autoaplicável e independentemente de regulamentação, à compensação automática com débitos líquidos lançados por esta contra aqueles, e, havendo saldo em favor do credor, o valor terá automaticamente poder liberatório do pagamento de tributos de Estados, Distrito Federal e Municípios devedores, até onde se compensarem; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>III - o chefe do Poder Executivo responderá na forma da legislação de responsabilidade fiscal e de improbidade administrativa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>IV - enquanto perdurar a omissão, a entidade devedora: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p class="alinea">a) não poderá contrair empréstimo externo ou interno; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p class="alinea">b) ficará impedida de receber transferências voluntárias; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>V - a União reterá os repasses relativos ao Fundo de Participação dos Estados e do Distrito Federal e ao Fundo de Participação dos Municípios, e os depositará nas contas especiais referidas no § 1º, devendo sua utilização obedecer ao que prescreve o § 5º, ambos deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 11. No caso de precatórios relativos a diversos credores, em litisconsórcio, admite-se o desmembramento do valor, realizado pelo Tribunal de origem do precatório, por credor, e, por este, a habilitação do valor total a que tem direito, não se aplicando, neste caso, a regra do <span class="paragrafo">§ 3º.</span> do art. 100 da Constituição Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 12. Se a lei a que se refere o <span class="paragrafo">§ 4º.</span> do art. 100 não estiver publicada em até 180 (cento e oitenta) dias, contados da data de publicação desta Emenda Constitucional, será considerado, para os fins referidos, em relação a Estados, Distrito Federal e Municípios devedores, omissos na regulamentação, o valor de: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>I - 40 (quarenta) salários mínimos para Estados e para o Distrito Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>II - 30 (trinta) salários mínimos para Municípios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 13. Enquanto Estados, Distrito Federal e Municípios devedores estiverem realizando pagamentos de precatórios pelo regime especial, não poderão sofrer sequestro de valores, exceto no caso de não liberação tempestiva dos recursos de que tratam o inciso II do <span class="paragrafo">§ 1º.</span> e o <span class="paragrafo">§ 2º.</span> deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 14. O regime especial de pagamento de precatório previsto no inciso I do <span class="paragrafo">§ 1º.</span> vigorará enquanto o valor dos precatórios devidos for superior ao valor dos recursos vinculados, nos termos do § 2º, ambos deste artigo, ou pelo prazo fixo de até 15 (quinze) anos, no caso da opção prevista no inciso II do <span class="paragrafo">§ 1º.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 15. Os precatórios parcelados na forma do art. 33 ou do art. 78 deste Ato das Disposições Constitucionais Transitórias e ainda pendentes de pagamento ingressarão no regime especial com o valor atualizado das parcelas não pagas relativas a cada precatório, bem como o saldo dos acordos judiciais e extrajudiciais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 16. A partir da promulgação desta Emenda Constitucional, a atualização de valores de requisitórios, até o efetivo pagamento, independentemente de sua natureza, será feita pelo índice oficial de remuneração básica da caderneta de poupança, e, para fins de compensação da mora, incidirão juros simples no mesmo percentual de juros incidentes sobre a caderneta de poupança, ficando excluída a incidência de juros compensatórios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 17. O valor que exceder o limite previsto no <span class="paragrafo">§ 2º.</span> do art. 100 da Constituição Federal será pago, durante a vigência do regime especial, na forma prevista nos §<span class="paragrafo">§ 6º.</span> e 7º. ou nos incisos I, II e III do § 8° deste artigo, devendo os valores dispendidos para o atendimento do disposto no <span class="paragrafo">§ 2º.</span> do art. 100 da Constituição Federal serem computados para efeito do <span class="paragrafo">§ 6º.</span> deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p>§ 18. Durante a vigência do regime especial a que se refere este artigo, gozarão também da preferência a que se refere o <span class="paragrafo">§ 6º.</span> os titulares originais de precatórios que tenham completado 60 (sessenta) anos de idade até a data da promulgação desta Emenda Constitucional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc62.htm#art2">(Incluído pela Emenda Constitucional nº 62, de 2009)</a></p>

	<p id="adct98"><span class="artigo">Art. 98.</span> O número de defensores públicos na unidade jurisdicional será proporcional à efetiva demanda pelo serviço da Defensoria Pública e à respectiva população. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc80.htm#art2">(Incluído pela Emenda Constitucional nº 80, de 2014)</a></p>

	<p><span class="paragrafo">§ 1º.</span> No prazo de 8 (oito) anos, a União, os Estados e o Distrito Federal deverão contar com defensores públicos em todas as unidades jurisdicionais, observado o disposto no caput deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc80.htm#art2">(Incluído pela Emenda Constitucional nº 80, de 2014)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Durante o decurso do prazo previsto no <span class="paragrafo">§ 1º.</span> deste artigo, a lotação dos defensores públicos ocorrerá, prioritariamente, atendendo as regiões com maiores índices de exclusão social e adensamento populacional. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc80.htm#art2">(Incluído pela Emenda Constitucional nº 80, de 2014)</a></p>

	<p id="adct99"><span class="artigo">Art. 99.</span> Para efeito do disposto no inciso VII do <span class="paragrafo">§ 2º.</span> do art. 155, no caso de operações e prestações que destinem bens e serviços a consumidor final não contribuinte localizado em outro Estado, o imposto correspondente à diferença entre a alíquota interna e a interestadual será partilhado entre os Estados de origem e de destino, na seguinte proporção: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art2">(Incluído pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p>I - para o ano de 2015: 20% (vinte por cento) para o Estado de destino e 80% (oitenta por cento) para o Estado de origem; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art2">(Incluído pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p>II - para o ano de 2016: 40% (quarenta por cento) para o Estado de destino e 60% (sessenta por cento) para o Estado de origem; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art2">(Incluído pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p>III - para o ano de 2017: 60% (sessenta por cento) para o Estado de destino e 40% (quarenta por cento) para o Estado de origem; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art2">(Incluído pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p>IV - para o ano de 2018: 80% (oitenta por cento) para o Estado de destino e 20% (vinte por cento) para o Estado de origem; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art2">(Incluído pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p>V - a partir do ano de 2019: 100% (cem por cento) para o Estado de destino. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc87.htm#art2">(Incluído pela Emenda Constitucional nº 87, de 2015)</a></p>

	<p><span class="artigo">Art. 100.</span> Até que entre em vigor a lei complementar de que trata o <a href="#art40§1ii.">inciso II do <span class="paragrafo">§ 1º.</span> do art. 40 da Constituição Federal</a>, os Ministros do Supremo Tribunal Federal, dos Tribunais Superiores e do Tribunal de Contas da União aposentar-se-ão, compulsoriamente, aos 75 (setenta e cinco) anos de idade, nas condições <a href="#art52">do art. 52 da Constituição Federal</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc88.htm#art1">(Incluído pela Emenda Constitucional nº 88, de 2015)</a></p>

	<p><span class="artigo">Art. 101.</span> Os Estados, o Distrito Federal e os Municípios que, em 25 de março de 2015, se encontravam em mora no pagamento de seus precatórios quitarão, até 31 de dezembro de 2029, seus débitos vencidos e os que vencerão dentro desse período, atualizados pelo Índice Nacional de Preços ao Consumidor Amplo Especial (IPCA-e), ou por outro índice que venha a substituí-lo, depositando mensalmente em conta especial do Tribunal de Justiça local, sob única e exclusiva administração deste, 1/12 (um doze avos) do valor calculado percentualmente sobre suas receitas correntes líquidas apuradas no segundo mês anterior ao mês de pagamento, em percentual suficiente para a quitação de seus débitos e, ainda que variável, nunca inferior, em cada exercício, ao percentual praticado na data da entrada em vigor do regime especial a que se refere este artigo, em conformidade com plano de pagamento a ser anualmente apresentado ao Tribunal de Justiça local. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 1º.</span> Entende-se como receita corrente líquida, para os fins de que trata este artigo, o somatório das receitas tributárias, patrimoniais, industriais, agropecuárias, de contribuições e de serviços, de transferências correntes e outras receitas correntes, incluindo as oriundas do <span class="paragrafo">§ 1º.</span> do art. 20 da Constituição Federal, verificado no período compreendido pelo segundo mês imediatamente anterior ao de referência e os 11 (onze) meses precedentes, excluídas as duplicidades, e deduzidas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>I - nos Estados, as parcelas entregues aos Municípios por determinação constitucional; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>II - nos Estados, no Distrito Federal e nos Municípios, a contribuição dos servidores para custeio de seu sistema de previdência e assistência social e as receitas provenientes da compensação financeira referida no <span class="paragrafo">§ 9º.</span> do art. 201 da Constituição Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p><span class="paragrafo">§ 2º.</span> O débito de precatórios será pago com recursos orçamentários próprios provenientes das fontes de receita corrente líquida referidas no <span class="paragrafo">§ 1º.</span> deste artigo e, adicionalmente, poderão ser utilizados recursos dos seguintes instrumentos: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Redação dada pela Emenda constitucional nº 99, de 2017)</a></p>

	<p>I - até 75% (setenta e cinco por cento) dos depósitos judiciais e dos depósitos administrativos em dinheiro referentes a processos judiciais ou administrativos, tributários ou não tributários, nos quais sejam parte os Estados, o Distrito Federal ou os Municípios, e as respectivas autarquias, fundações e empresas estatais dependentes, mediante a instituição de fundo garantidor em montante equivalente a 1/3 (um terço) dos recursos levantados, constituído pela parcela restante dos depósitos judiciais e remunerado pela taxa referencial do Sistema Especial de Liquidação e de Custódia (Selic) para títulos federais, nunca inferior aos índices e critérios aplicados aos depósitos levantados; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Redação dada pela Emenda constitucional nº 99, de 2017)</a></p>

	<p>II - até 30% (trinta por cento) dos demais depósitos judiciais da localidade sob jurisdição do respectivo Tribunal de Justiça, mediante a instituição de fundo garantidor em montante equivalente aos recursos levantados, constituído pela parcela restante dos depósitos judiciais e remunerado pela taxa referencial do Sistema Especial de Liquidação e de Custódia (Selic) para títulos federais, nunca inferior aos índices e critérios aplicados aos depósitos levantados, destinando-se: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Redação dada pela Emenda constitucional nº 99, de 2017)</a></p>

	<p class="alinea">a) no caso do Distrito Federal, 100% (cem por cento) desses recursos ao próprio Distrito Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p class="alinea">b) no caso dos Estados, 50% (cinquenta por cento) desses recursos ao próprio Estado e 50% (cinquenta por cento) aos respectivos Municípios, conforme a circunscrição judiciária onde estão depositados os recursos, e, se houver mais de um Município na mesma circunscrição judiciária, os recursos serão rateados entre os Municípios concorrentes, proporcionalmente às respectivas populações, utilizado como referência o último levantamento censitário ou a mais recente estimativa populacional da Fundação Instituto Brasileiro de Geografia e Estatística (IBGE); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Redação dada pela Emenda constitucional nº 99, de 2017)</a></p>

	<p>III - empréstimos, excetuados para esse fim os limites de endividamento de que tratam os incisos VI e VII do caput do art. 52 da Constituição Federal e quaisquer outros limites de endividamento previstos em lei, não se aplicando a esses empréstimos a vedação de vinculação de receita prevista no inciso IV do caput do art. 167 da Constituição Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Redação dada pela Emenda constitucional nº 99, de 2017)</a></p>

	<p>IV - a totalidade dos depósitos em precatórios e requisições diretas de pagamento de obrigações de pequeno valor efetuados até 31 de dezembro de 2009 e ainda não levantados, com o cancelamento dos respectivos requisitórios e a baixa das obrigações, assegurada a revalidação dos requisitórios pelos juízos dos processos perante os Tribunais, a requerimento dos credores e após a oitiva da entidade devedora, mantidas a posição de ordem cronológica original e a remuneração de todo o período. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Incluído pela Emenda constitucional nº 99, de 2017)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Os recursos adicionais previstos nos incisos I, II e IV do <span class="paragrafo">§ 2º.</span> deste artigo serão transferidos diretamente pela instituição financeira depositária para a conta especial referida no caput deste artigo, sob única e exclusiva administração do Tribunal de Justiça local, e essa transferência deverá ser realizada em até sessenta dias contados a partir da entrada em vigor deste parágrafo, sob pena de responsabilização pessoal do dirigente da instituição financeira por improbidade. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Incluído pela Emenda constitucional nº 99, de 2017)</a></p>

	<p><span class="paragrafo">§ 4º.</span> (Revogado). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - (revogado); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>II - (revogado); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>III - (revogado); <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>IV - (revogado). <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 5º.</span> Os empréstimos de que trata o inciso III do <span class="paragrafo">§ 2º.</span> deste artigo poderão ser destinados, por meio de ato do Poder Executivo, exclusivamente ao pagamento de precatórios por acordo direto com os credores, na forma do disposto no <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#adctart97%C2%A76iii">inciso III do <span class="paragrafo">§ 8º.</span> do art. 97 deste Ato das Disposições Constitucionais Transitórias</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="artigo">Art. 102.</span> Enquanto viger o regime especial previsto nesta Emenda Constitucional, pelo menos 50% (cinquenta por cento) dos recursos que, nos termos do art. 101 deste Ato das Disposições Constitucionais Transitórias, forem destinados ao pagamento dos precatórios em mora serão utilizados no pagamento segundo a ordem cronológica de apresentação, respeitadas as preferências dos créditos alimentares, e, nessas, as relativas à idade, ao estado de saúde e à deficiência, nos termos do <span class="paragrafo">§ 2º.</span> do art. 100 da Constituição Federal, sobre todos os demais créditos de todos os anos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p><span class="paragrafo">§ 1º.</span> A aplicação dos recursos remanescentes, por opção a ser exercida por Estados, Distrito Federal e Municípios, por ato do respectivo Poder Executivo, observada a ordem de preferência dos credores, poderá ser destinada ao pagamento mediante acordos diretos, perante Juízos Auxiliares de Conciliação de Precatórios, com redução máxima de 40% (quarenta por cento) do valor do crédito atualizado, desde que em relação ao crédito não penda recurso ou defesa judicial e que sejam observados os requisitos definidos na regulamentação editada pelo ente federado. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art2">(Numerado do parágrafo único pela Emenda constitucional nº 99, de 2017)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Na vigência do regime especial previsto no art. 101 deste Ato das Disposições Constitucionais Transitórias, as preferências relativas à idade, ao estado de saúde e à deficiência serão atendidas até o valor equivalente ao quíntuplo fixado em lei para os fins do disposto no <span class="paragrafo">§ 3º.</span> do art. 100 da Constituição Federal, admitido o fracionamento para essa finalidade, e o restante será pago em ordem cronológica de apresentação do precatório. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art2">(Incluído pela Emenda constitucional nº 99, de 2017)</a></p>

	<p id="adct103"><span class="artigo">Art. 103.</span> Enquanto os Estados, o Distrito Federal e os Municípios estiverem efetuando o pagamento da parcela mensal devida como previsto no caput do art. 101 deste Ato das Disposições Constitucionais Transitórias, nem eles, nem as respectivas autarquias, fundações e empresas estatais dependentes poderão sofrer sequestro de valores, exceto no caso de não liberação tempestiva dos recursos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Na vigência do regime especial previsto no art. 101 deste Ato das Disposições Constitucionais Transitórias, ficam vedadas desapropriações pelos Estados, pelo Distrito Federal e pelos Municípios, cujos estoques de precatórios ainda pendentes de pagamento, incluídos os precatórios a pagar de suas entidades da administração indireta, sejam superiores a 70% (setenta por cento) das respectivas receitas correntes líquidas, excetuadas as desapropriações para fins de necessidade pública nas áreas de saúde, educação, segurança pública, transporte público, saneamento básico e habitação de interesse social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art3">(Incluído pela Emenda constitucional nº 99, de 2017)</a></p>

	<p id="adct104"><span class="artigo">Art. 104.</span> Se os recursos referidos no art. 101 deste Ato das Disposições Constitucionais Transitórias para o pagamento de precatórios não forem tempestivamente liberados, no todo ou em parte: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>I - o Presidente do Tribunal de Justiça local determinará o sequestro, até o limite do valor não liberado, das contas do ente federado inadimplente; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>II - o chefe do Poder Executivo do ente federado inadimplente responderá, na forma da legislação de responsabilidade fiscal e de improbidade administrativa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>III - a União reterá os recursos referentes aos repasses ao Fundo de Participação dos Estados e do Distrito Federal e ao Fundo de Participação dos Municípios e os depositará na conta especial referida no art. 101 deste Ato das Disposições Constitucionais Transitórias, para utilização como nele previsto; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p>IV - os Estados reterão os repasses previstos no parágrafo único do art. 158 da Constituição Federal e os depositarão na conta especial referida no art. 101 deste Ato das Disposições Constitucionais Transitórias, para utilização como nele previsto. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Enquanto perdurar a omissão, o ente federado não poderá contrair empréstimo externo ou interno, exceto para os fins previstos no <span class="paragrafo">§ 2º.</span> do art. 101 deste Ato das Disposições Constitucionais Transitórias, e ficará impedido de receber transferências voluntárias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p id="adct105"><span class="artigo">Art. 105.</span> Enquanto viger o regime de pagamento de precatórios previsto no art. 101 deste Ato das Disposições Constitucionais Transitórias, é facultada aos credores de precatórios, próprios ou de terceiros, a compensação com débitos de natureza tributária ou de outra natureza que até 25 de março de 2015 tenham sido inscritos na dívida ativa dos Estados, do Distrito Federal ou dos Municípios, observados os requisitos definidos em lei própria do ente federado. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc94.htm#art1">(Incluído pela Emenda Constitucional nº 94, de 2016)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Não se aplica às compensações referidas no caput deste artigo qualquer tipo de vinculação, como as transferências a outros entes e as destinadas à educação, à saúde e a outras finalidades. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Numerado do parágrafo único pela Emenda constitucional nº 99, de 2017)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os Estados, o Distrito Federal e os Municípios regulamentarão nas respectivas leis o disposto no caput deste artigo em até cento e vinte dias a partir de 1º. de janeiro de 2018. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Incluído pela Emenda constitucional nº 99, de 2017)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Decorrido o prazo estabelecido no <span class="paragrafo">§ 2º.</span> deste artigo sem a regulamentação nele prevista, ficam os credores de precatórios autorizados a exercer a faculdade a que se refere o caput deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc99.htm#art1">(Incluído pela Emenda constitucional nº 99, de 2017)</a></p>

	<p id="adct106"><span class="artigo">Art. 106.</span> Fica instituído o Novo Regime Fiscal no âmbito dos Orçamentos Fiscal e da Seguridade Social da União, que vigorará por vinte exercícios financeiros, nos termos dos <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#adctart107">arts. 107 a 114 deste Ato das Disposições Constitucionais Transitórias</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p id="adct107"><span class="artigo">Art. 107.</span> Ficam estabelecidos, para cada exercício, limites individualizados para as despesas primárias: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>I - do Poder Executivo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>II - do Supremo Tribunal Federal, do Superior Tribunal de Justiça, do Conselho Nacional de Justiça, da Justiça do Trabalho, da Justiça Federal, da Justiça Militar da União, da Justiça Eleitoral e da Justiça do Distrito Federal e Territórios, no âmbito do Poder Judiciário; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>III - do Senado Federal, da Câmara dos Deputados e do Tribunal de Contas da União, no âmbito do Poder Legislativo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>IV - do Ministério Público da União e do Conselho Nacional do Ministério Público; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>V - da Defensoria Pública da União. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>VI - despesas correntes ou transferências aos fundos de saúde dos Estados, do Distrito Federal e dos Municípios, destinadas ao pagamento de despesas com pessoal para cumprimento dos pisos nacionais salariais para o enfermeiro, o técnico de enfermagem, o auxiliar de enfermagem e a parteira, de acordo com os §§ 12, 13, 14 e 15 do art. 198 da Constituição Federal.</p>

	<ul class="dica">
		<li>Inciso acrescido pela Emenda Constitucional nº 127, de 22 de dezembro de 2022.</li>
	</ul>

	<p><span class="paragrafo">§ 1º.</span> Cada um dos limites a que se refere o caput deste artigo equivalerá: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>I - para o exercício de 2017, à despesa primária paga no exercício de 2016, incluídos os restos a pagar pagos e demais operações que afetam o resultado primário, corrigida em 7,2% (sete inteiros e dois décimos por cento); e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p id="adct107p1i2">II - para os exercícios posteriores, ao valor do limite referente ao exercício imediatamente anterior, corrigido pela variação do Índice Nacional de Preços ao Consumidor Amplo (IPCA), publicado pela Fundação Instituto Brasileiro de Geografia e Estatística, ou de outro índice que vier a substituí-lo, apurado no exercício anterior a que se refere a lei orçamentária. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Redação dada pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os limites estabelecidos na forma do <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art51iv">inciso IV do caput do art. 51</a>, do <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art52xiii">inciso XIII do caput do art. 52</a>, do <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art99%C2%A71">§ 1º do art. 99</a>, do <a href="">§ 3º do art. 127</a> e do<a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art134%C2%A73"> <span class="paragrafo">§ 3º.</span> do art. 134 da Constituição Federal </a>não poderão ser superiores aos estabelecidos nos termos deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="paragrafo">§ 3º.</span> A mensagem que encaminhar o projeto de lei orçamentária demonstrará os valores máximos de programação compatíveis com os limites individualizados calculados na forma do <span class="paragrafo">§ 1º.</span> deste artigo, observados os §§ 7º a 9º. deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="paragrafo">§ 4º.</span> As despesas primárias autorizadas na lei orçamentária anual sujeitas aos limites de que trata este artigo não poderão exceder os valores máximos demonstrados nos termos do <span class="paragrafo">§ 3º.</span> deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="paragrafo">§ 5º.</span> É vedada a abertura de crédito suplementar ou especial que amplie o montante total autorizado de despesa primária sujeita aos limites de que trata este artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Não se incluem na base de cálculo e nos limites estabelecidos neste artigo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>I - transferências constitucionais estabelecidas no <a href="#art20p1">§ 1º do art. 20</a>, no <a href="#art146i3">inciso III do parágrafo único do art. 146,</a> no <a href="#art153§5">§ 5º do art. 153,</a> no <a href="#art157">art. 157,</a> nos<a href="#art158i"> incisos I </a>e <a href="#art158ii">II do caput do art. 158,</a> no <a href="#art159">art. 159</a> e no<a href="#art212§6"> § 6º do art. 212,</a> as despesas referentes ao <a href="#21XIV">inciso XIV do caput do art. 21</a> e as complementações de que tratam os <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art212aiv">incisos IV e V do caput do art. 212-A</a>, todos da Constituição Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc108.htm#art2">(Redação dada pela Emenda constitucional nº 108, de 2020)</a></p>

	<p>II - créditos extraordinários a que se refere o <a href="#art167p3">§ 3º do art. 167 da Constituição Federal</a>; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>III - despesas não recorrentes da Justiça Eleitoral com a realização de eleições; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>IV - despesas com aumento de capital de empresas estatais não dependentes. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>V - transferências a Estados, Distrito Federal e Municípios de parte dos valores arrecadados com os leilões dos volumes excedentes ao limite a que se refere o § 2º do art. 1º da Lei nº 12.276, de 30 de junho de 2010, e a despesa decorrente da revisão do contrato de cessão onerosa de que trata a mesma Lei. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art1">(Incluído pela Emenda Constitucional nº 102, de 2019)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc102.htm#art4">(Produção de efeito)</a></p>

	<p><span class="paragrafo">§ 6º-A.</span> Não se incluem no limite estabelecido no inciso I do caput deste artigo, a partir do exercício financeiro de 2023:</p>

	<p>I - despesas com projetos socioambientais ou relativos às mudanças climáticas custeadas com recursos de doações, bem como despesas com projetos custeados com recursos decorrentes de acordos judiciais ou extrajudiciais firmados em função de desastres ambientais;</p>

	<p>II - despesas das instituições federais de ensino e das Instituições Científicas, Tecnológicas e de Inovação (ICTs) custeadas com receitas próprias, de doações ou de convênios, contratos ou outras fontes, celebrados com os demais entes da Federação ou entidades privadas;</p>

	<p>III - despesas custeadas com recursos oriundos de transferências dos demais entes da Federação para a União destinados à execução direta de obras e serviços de engenharia.</p>

	<p><span class="paragrafo">§ 6º-B.</span> Não se incluem no limite estabelecido no inciso I do caput deste artigo as despesas com investimentos em montante que corresponda ao excesso de arrecadação de receitas correntes do exercício anterior ao que se refere a lei orçamentária, limitadas a 6,5% (seis inteiros e cinco décimos por cento) do excesso de arrecadação de receitas correntes do exercício de 2021.</p>

	<p><span class="paragrafo">§ 6º-C.</span> As despesas previstas no § 6º-B deste artigo não serão consideradas para fins de verificação do cumprimento da meta de resultado primário estabelecida no caput do art. 2º da Lei nº 14.436, de 9 de agosto de 2022.</p>

	<ul class="dica">
		<li>Parágrafos 6º-A a 6º-C acrescidos pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="paragrafo">§ 7º.</span> Nos três primeiros exercícios financeiros da vigência do Novo Regime Fiscal, o Poder Executivo poderá compensar com redução equivalente na sua despesa primária, consoante os valores estabelecidos no projeto de lei orçamentária encaminhado pelo Poder Executivo no respectivo exercício, o excesso de despesas primárias em relação aos limites de que tratam os incisos II a V do caput deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="paragrafo">§ 8º.</span> A compensação de que trata o <span class="paragrafo">§ 7º.</span> deste artigo não excederá a 0,25% (vinte e cinco centésimos por cento) do limite do Poder Executivo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="paragrafo">§ 9º.</span> Respeitado o somatório em cada um dos incisos de II a IV do caput deste artigo, a lei de diretrizes orçamentárias poderá dispor sobre a compensação entre os limites individualizados dos órgãos elencados em cada inciso. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>§ 10. Para fins de verificação do cumprimento dos limites de que trata este artigo, serão consideradas as despesas primárias pagas, incluídos os restos a pagar pagos e demais operações que afetam o resultado primário no exercício. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>§ 11. O pagamento de restos a pagar inscritos até 31 de dezembro de 2015 poderá ser excluído da verificação do cumprimento dos limites de que trata este artigo, até o excesso de resultado primário dos Orçamentos Fiscal e da Seguridade Social do exercício em relação à meta fixada na lei de diretrizes orçamentárias. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>§ 12. Para fins da elaboração do projeto de lei orçamentária anual, o Poder Executivo considerará o valor realizado até junho do índice previsto no inciso II do <span class="paragrafo">§ 1º.</span> deste artigo, relativo ao ano de encaminhamento do projeto, e o valor estimado até dezembro desse mesmo ano. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>§ 13. A estimativa do índice a que se refere o § 12 deste artigo, juntamente com os demais parâmetros macroeconômicos, serão elaborados mensalmente pelo Poder Executivo e enviados à comissão mista de que trata o<a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art166%C2%A71"> <span class="paragrafo">§ 1º.</span> do art. 166 da Constituição Federal</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>§ 14. O resultado da diferença aferida entre as projeções referidas nos §§ 12 e 13 deste artigo e a efetiva apuração do índice previsto no inciso II do <span class="paragrafo">§ 1º.</span> deste artigo será calculado pelo Poder Executivo, para fins de definição da base de cálculo dos respectivos limites do exercício seguinte, a qual será comunicada aos demais Poderes por ocasião da elaboração do projeto de lei orçamentária. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="artigo" id="107A">Art. 107-A.</span> Até o fim de 2026, fica estabelecido, para cada exercício financeiro, limite para alocação na proposta orçamentária das despesas com pagamentos em virtude de sentença judiciária de que trata o art. 100 da Constituição Federal, equivalente ao valor da despesa paga no exercício de 2016, incluídos os restos a pagar pagos, corrigido, para o exercício de 2017, em 7,2% (sete inteiros e dois décimos por cento) e, para os exercícios posteriores, pela variação do Índice Nacional de Preços ao Consumidor Amplo (IPCA), publicado pela Fundação Instituto Brasileiro de Geografia e Estatística, ou de outro índice que vier a substituí-lo, apurado no exercício anterior a que se refere a lei orçamentária, devendo o espaço fiscal decorrente da diferença entre o valor dos precatórios expedidos e o respectivo limite ser destinado ao programa previsto no parágrafo único do art. 6º e à seguridade social, nos termos do art. 194, ambos da Constituição Federal, a ser calculado da seguinte forma:</p>

	<ul class="dica">
		<li>Redação dada pela Emenda Constitucional nº 126, de 21 de dezembro de 2026.</li>
	</ul>

	<p>I - no exercício de 2022, o espaço fiscal decorrente da diferença entre o valor dos precatórios expedidos e o limite estabelecido no caput deste artigo deverá ser destinado ao programa previsto no parágrafo único do art. 6º. e à seguridade social, nos termos do art. 194, ambos da Constituição Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p>II - no exercício de 2023, pela diferença entre o total de precatórios expedidos entre 2 de julho de 2021 e 2 de abril de 2022 e o limite de que trata o caput deste artigo válido para o exercício de 2023; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p>III - nos exercícios de 2024 a 2026, pela diferença entre o total de precatórios expedidos entre 3 de abril de dois anos anteriores e 2 de abril do ano anterior ao exercício e o limite de que trata o caput deste artigo válido para o mesmo exercício. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="paragrafo">§ 1º.</span> O limite para o pagamento de precatórios corresponderá, em cada exercício, ao limite previsto no caput deste artigo, reduzido da projeção para a despesa com o pagamento de requisições de pequeno valor para o mesmo exercício, que terão prioridade no pagamento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os precatórios que não forem pagos em razão do previsto neste artigo terão prioridade para pagamento em exercícios seguintes, observada a ordem cronológica e o disposto no § 8º deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="paragrafo">§ 3º.</span> É facultado ao credor de precatório que não tenha sido pago em razão do disposto neste artigo, além das hipóteses previstas no § 11 do art. 100 da Constituição Federal e sem prejuízo dos procedimentos previstos nos §<span class="paragrafo">§ 9º.</span> e 21 do referido artigo, optar pelo recebimento, mediante acordos diretos perante Juízos Auxiliares de Conciliação de Pagamento de Condenações Judiciais contra a Fazenda Pública Federal, em parcela única, até o final do exercício seguinte, com renúncia de 40% (quarenta por cento) do valor desse crédito. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="paragrafo">§ 4º.</span> O Conselho Nacional de Justiça regulamentará a atuação dos Presidentes dos Tribunais competentes para o cumprimento deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="paragrafo">§ 5º.</span> Não se incluem no limite estabelecido neste artigo as despesas para fins de cumprimento do disposto nos §§ 11, 20 e 21 do art. 100 da Constituição Federal e no <span class="paragrafo">§ 3º.</span> deste artigo, bem como a atualização monetária dos precatórios inscritos no exercício. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="paragrafo">§ 6º.</span> Não se incluem nos limites estabelecidos no art. 107 deste Ato das Disposições Constitucionais Transitórias o previsto nos §§ 11, 20 e 21 do art. 100 da Constituição Federal e no <span class="paragrafo">§ 3º.</span> deste artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="paragrafo">§ 7º.</span> Na situação prevista no <span class="paragrafo">§ 3º.</span> deste artigo, para os precatórios não incluídos na proposta orçamentária de 2022, os valores necessários à sua quitação serão providenciados pela abertura de créditos adicionais durante o exercício de 2022. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="paragrafo">§ 8º.</span> Os pagamentos em virtude de sentença judiciária de que trata o art. 100 da Constituição Federal serão realizados na seguinte ordem: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p>I - obrigações definidas em lei como de pequeno valor, previstas no <span class="paragrafo">§ 3º.</span> do art. 100 da Constituição Federal; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p>II - precatórios de natureza alimentícia cujos titulares, originários ou por sucessão hereditária, tenham no mínimo 60 (sessenta) anos de idade, ou sejam portadores de doença grave ou pessoas com deficiência, assim definidos na forma da lei, até o valor equivalente ao triplo do montante fixado em lei como obrigação de pequeno valor; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p>III - demais precatórios de natureza alimentícia até o valor equivalente ao triplo do montante fixado em lei como obrigação de pequeno valor; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p>IV - demais precatórios de natureza alimentícia além do valor previsto no inciso III deste parágrafo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p>V - demais precatórios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p id="adct108"><span class="artigo">Art. 108.</span> <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art6">(Revogado pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="artigo">Art. 109.</span> Se verificado, na aprovação da lei orçamentária, que, no âmbito das despesas sujeitas aos limites do art. 107 deste Ato das Disposições Constitucionais Transitórias, a proporção da despesa obrigatória primária em relação à despesa primária total foi superior a 95% (noventa e cinco por cento), aplicam-se ao respectivo Poder ou órgão, até o final do exercício a que se refere a lei orçamentária, sem prejuízo de outras medidas, as seguintes vedações: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - concessão, a qualquer título, de vantagem, aumento, reajuste ou adequação de remuneração de membros de Poder ou de órgão, de servidores e empregados públicos e de militares, exceto dos derivados de sentença judicial transitada em julgado ou de determinação legal anterior ao início da aplicação das medidas de que trata este artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>II - criação de cargo, emprego ou função que implique aumento de despesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>III - alteração de estrutura de carreira que implique aumento de despesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>IV - admissão ou contratação de pessoal, a qualquer título, ressalvadas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">a) as reposições de cargos de chefia e de direção que não acarretem aumento de despesa; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">b) as reposições decorrentes de vacâncias de cargos efetivos ou vitalícios; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">c) as contratações temporárias de que trata o inciso IX do caput do art. 37 da Constituição Federal; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p class="alinea">d) as reposições de temporários para prestação de serviço militar e de alunos de órgãos de formação de militares; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>V - realização de concurso público, exceto para as reposições de vacâncias previstas no inciso IV; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>VI - criação ou majoração de auxílios, vantagens, bônus, abonos, verbas de representação ou benefícios de qualquer natureza, inclusive os de cunho indenizatório, em favor de membros de Poder, do Ministério Público ou da Defensoria Pública, de servidores e empregados públicos e de militares, ou ainda de seus dependentes, exceto quando derivados de sentença judicial transitada em julgado ou de determinação legal anterior ao início da aplicação das medidas de que trata este artigo; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>VII - criação de despesa obrigatória; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>VIII - adoção de medida que implique reajuste de despesa obrigatória acima da variação da inflação, observada a preservação do poder aquisitivo referida no <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art7iv">inciso IV do caput do art. 7º. da Constituição Federal</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>IX - aumento do valor de benefícios de cunho indenizatório destinados a qualquer membro de Poder, servidor ou empregado da administração pública e a seus dependentes, exceto quando derivado de sentença judicial transitada em julgado ou de determinação legal anterior ao início da aplicação das medidas de que trata este artigo. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 1º.</span> As vedações previstas nos incisos I, III e VI do caput deste artigo, quando acionadas as vedações para qualquer dos órgãos elencados nos incisos II, III e IV do caput do art. 107 deste Ato das Disposições Constitucionais Transitórias, aplicam-se ao conjunto dos órgãos referidos em cada inciso. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 2º.</span> Caso as vedações de que trata o caput deste artigo sejam acionadas para o Poder Executivo, ficam vedadas: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - a criação ou expansão de programas e linhas de financiamento, bem como a remissão, renegociação ou refinanciamento de dívidas que impliquem ampliação das despesas com subsídios e subvenções; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>II - a concessão ou a ampliação de incentivo ou benefício de natureza tributária. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="paragrafo">§ 3º.</span> Caso as vedações de que trata o caput deste artigo sejam acionadas, fica vedada a concessão da revisão geral prevista no inciso X do caput do art. 37 da Constituição Federal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 4º.</span> As disposições deste artigo: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Redação dada pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>I - não constituem obrigação de pagamento futuro pela União ou direitos de outrem sobre o erário; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>II - não revogam, dispensam ou suspendem o cumprimento de dispositivos constitucionais e legais que disponham sobre metas fiscais ou limites máximos de despesas; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p>III - aplicam-se também a proposições legislativas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p><span class="paragrafo">§ 5º.</span> O disposto nos incisos II, IV, VII e VIII do caput e no <span class="paragrafo">§ 2º.</span> deste artigo não se aplica a medidas de combate a calamidade pública nacional cuja vigência e efeitos não ultrapassem a sua duração. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc109.htm#art2">(Incluído pela Emenda Constitucional nº 109, de 2021) </a></p>

	<p id="adct110"><span class="artigo">Art. 110.</span> Na vigência do Novo Regime Fiscal, as aplicações mínimas em ações e serviços públicos de saúde e em manutenção e desenvolvimento do ensino equivalerão: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>I - no exercício de 2017, às aplicações mínimas calculadas nos termos do <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art198%C2%A72i.">inciso I do <span class="paragrafo">§ 2º.</span> do art. 198</a> e do <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art212">caput do art. 212, da Constituição Federal</a>; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>II - nos exercícios posteriores, aos valores calculados para as aplicações mínimas do exercício imediatamente anterior, corrigidos na forma estabelecida pelo <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#adctart107%C2%A71ii">inciso II do <span class="paragrafo">§ 1º.</span> do art. 107 deste Ato das Disposições Constitucionais Transitórias.</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p id="adct111"><span class="artigo">Art. 111.</span>A partir do exercício financeiro de 2018, até o exercício financeiro de 2022, a aprovação e a execução previstas nos §§ 9º e 11 do art. 166 da Constituição Federal corresponderão ao montante de execução obrigatória para o exercício de 2017, corrigido na forma estabelecida no <a href="#adct107p1i2">inciso II do § 1º do art. 107</a> deste Ato das Disposições Constitucionais Transitórias.</p>

	<ul class="dica">
		<li>Artigo com redação dada pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="artigo" id="111A">Art. 111-A.</span> A partir do exercício financeiro de 2024, até o último exercício de vigência do Novo Regime Fiscal, a aprovação e a execução previstas nos §§ 9º e 11 do art. 166 da Constituição Federal corresponderão ao montante de execução obrigatória para o exercício de 2023, corrigido na forma estabelecida <a href="#adct107p1i2">no inciso II do § 1º do art. 107</a> deste Ato das Disposições Constitucionais Transitórias.</p>

	<ul class="dica">
		<li>Artigo acrescido pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="artigo">Art. 112.</span> As disposições introduzidas pelo Novo Regime Fiscal: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>I - não constituirão obrigação de pagamento futuro pela União ou direitos de outrem sobre o erário; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p>II - não revogam, dispensam ou suspendem o cumprimento de dispositivos constitucionais e legais que disponham sobre metas fiscais ou limites máximos de despesas. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="artigo">Art. 113.</span> A proposição legislativa que crie ou altere despesa obrigatória ou renúncia de receita deverá ser acompanhada da estimativa do seu impacto orçamentário e financeiro. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="artigo">Art. 114.</span> A tramitação de proposição elencada no <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art59">caput do art. 59 da Constituição Federal,</a> ressalvada a referida no seu inciso V, quando acarretar aumento de despesa ou renúncia de receita, será suspensa por até vinte dias, a requerimento de um quinto dos membros da Casa, nos termos regimentais, para análise de sua compatibilidade com o Novo Regime Fiscal. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc95.htm#art1">(Incluído pela Emenda Constitucional nº 95, de 2016)</a></p>

	<p><span class="artigo">Art. 115.</span> Fica excepcionalmente autorizado o parcelamento das contribuições previdenciárias e dos demais débitos dos Municípios, incluídas suas autarquias e fundações, com os respectivos regimes próprios de previdência social, com vencimento até 31 de outubro de 2021, inclusive os parcelados anteriormente, no prazo máximo de 240 (duzentos e quarenta) prestações mensais, mediante autorização em lei municipal específica, desde que comprovem ter alterado a legislação do regime próprio de previdência social para atendimento das seguintes condições, cumulativamente: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>I - adoção de regras de elegibilidade, de cálculo e de reajustamento dos benefícios que contemplem, nos termos previstos nos <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art40%C2%A71i">incisos I </a>e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art40%C2%A71iii">III do § 1º</a> e nos <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art40%C2%A73">§§ 3º</a> a <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art40%C2%A75">5º</a>, <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art40%C2%A77">7º</a> e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art40%C2%A78">8º. do art. 40 da Constituição Federal</a>, regras assemelhadas às aplicáveis aos servidores públicos do regime próprio de previdência social da União e que contribuam efetivamente para o atingimento e a manutenção do equilíbrio financeiro e atuarial; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>II - adequação do rol de benefícios ao disposto nos <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art9%C2%A72">§§ 2º</a> e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art9%C2%A73">3º. do art. 9º. da Emenda Constitucional nº 103, de 12 de novembro de 2019;</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>III - adequação da alíquota de contribuição devida pelos servidores, nos termos do <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art9%C2%A74"><span class="paragrafo">§ 4º.</span> do art. 9º. da Emenda Constitucional nº 103, de 12 de novembro de 2019</a>; e <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>IV - instituição do regime de previdência complementar e adequação do órgão ou entidade gestora do regime próprio de previdência social, nos termos do <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc103.htm#art9%C2%A76"><span class="paragrafo">§ 6º.</span> do art. 9º. da Emenda Constitucional nº 103, de 12 de novembro de 2019.</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Ato do Ministério do Trabalho e Previdência, no âmbito de suas competências, definirá os critérios para o parcelamento previsto neste artigo, inclusive quanto ao cumprimento do disposto nos incisos I, II, III e IV do caput deste artigo, bem como disponibilizará as informações aos Municípios sobre o montante das dívidas, as formas de parcelamento, os juros e os encargos incidentes, de modo a possibilitar o acompanhamento da evolução desses débitos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="artigo">Art. 116.</span> Fica excepcionalmente autorizado o parcelamento dos débitos decorrentes de contribuições previdenciárias dos Municípios, incluídas suas autarquias e fundações, com o Regime Geral de Previdência Social, com vencimento até 31 de outubro de 2021, ainda que em fase de execução fiscal ajuizada, inclusive os decorrentes do descumprimento de obrigações acessórias e os parcelados anteriormente, no prazo máximo de 240 (duzentos e quarenta) prestações mensais. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="paragrafo">§ 1º.</span> Os Municípios que possuam regime próprio de previdência social deverão comprovar, para fins de formalização do parcelamento com o Regime Geral de Previdência Social, de que trata este artigo, terem atendido as condições estabelecidas nos <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#adctart115i">incisos I, II, III e IV docaputdo art. 115 deste Ato das Disposições Constitucionais Transitórias</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="paragrafo">§ 2º.</span> Os débitos parcelados terão redução de 40% (quarenta por cento) das multas de mora, de ofício e isoladas, de 80% (oitenta por cento) dos juros de mora, de 40% (quarenta por cento) dos encargos legais e de 25% (vinte e cinco por cento) dos honorários advocatícios. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="paragrafo">§ 3º.</span> O valor de cada parcela será acrescido de juros equivalentes à taxa referencial do Sistema Especial de Liquidação e de Custódia (Selic), acumulada mensalmente, calculados a partir do mês subsequente ao da consolidação até o mês anterior ao do pagamento. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="paragrafo">§ 4º.</span> Não constituem débitos dos Municípios aqueles considerados prescritos ou atingidos pela decadência. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="paragrafo">§ 5º.</span> A Secretaria Especial da Receita Federal do Brasil e a Procuradoria-Geral da Fazenda Nacional, no âmbito de suas competências, deverão fixar os critérios para o parcelamento previsto neste artigo, bem como disponibilizar as informações aos Municípios sobre o montante das dívidas, as formas de parcelamento, os juros e os encargos incidentes, de modo a possibilitar o acompanhamento da evolução desses débitos. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="artigo">Art. 117.</span> A formalização dos parcelamentos de que tratam os <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#adctart115">arts. 115 e 116 deste Ato das Disposições Constitucionais Transitórias</a> deverá ocorrer até 30 de junho de 2022 e ficará condicionada à autorização de vinculação do Fundo de Participação dos Municípios para fins de pagamento das prestações acordadas nos termos de parcelamento, observada a seguinte ordem de preferência: <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>I - a prestação de garantia ou de contra garantia à União ou os pagamentos de débitos em favor da União, na forma do <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Constituicao.htm#art167%C2%A74">§ 4º do art. 167 da Constituição Federal;</a><a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>II - as contribuições parceladas devidas ao Regime Geral de Previdência Social; <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p>III - as contribuições parceladas devidas ao respectivo regime próprio de previdência social. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc113.htm#art2">(Incluído pela Emenda Constitucional nº 113, de 2021)</a></p>

	<p><span class="artigo">Art. 118.</span> Os limites, as condições, as normas de acesso e os demais requisitos para o atendimento do disposto no parágrafo único do art. 6º. e no inciso VI do caput do art. 203 da Constituição Federal serão determinados, na forma da lei e respectivo regulamento, até 31 de dezembro de 2022, dispensada, exclusivamente no exercício de 2022, a observância das limitações legais quanto à criação, à expansão ou ao aperfeiçoamento de ação governamental que acarrete aumento de despesa no referido exercício. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc114.htm#art2">(Incluído pela Emenda Constitucional nº 114, de 2021)</a></p>

	<p><span class="artigo">Art. 119.</span> Em decorrência do estado de calamidade pública provocado pela pandemia da Covid-19, os Estados, o Distrito Federal, os Municípios e os agentes públicos desses entes federados não poderão ser responsabilizados administrativa, civil ou criminalmente pelo descumprimento, exclusivamente nos exercícios financeiros de 2020 e 2021, do disposto no caput do <a href="#212">art. 212 da Constituição Federal</a>. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc119.htm">(Acrescentado pela Emenda Constitucional nº 119)</a></p>

	<p><span class="paragrafo">Parágrafo único.</span> Para efeitos do disposto no <i>caput</i> deste artigo, o ente deverá complementar na aplicação da manutenção e desenvolvimento do ensino, até o exercício financeiro de 2023, a diferença a menor entre o valor aplicado, conforme informação registrada no sistema integrado de planejamento e orçamento, e o valor mínimo exigível constitucionalmente para os exercícios de 2020 e 2021. <a href="http://www.planalto.gov.br/ccivil_03/constituicao/Emendas/Emc/emc119.htm">(Acrescentado pela Emenda Constitucional nº 119)</a></p>

	<p><span class="artigo">Art. 120.</span> Fica reconhecido, no ano de 2022, o estado de emergência decorrente da elevação extraordinária e imprevisível dos preços do petróleo, combustíveis e seus derivados e dos impactos sociais dela decorrentes.</p>

	<p><span class="paragrafo">Parágrafo único.</span> Para enfretamento ou mitigação dos impactos decorrentes do estado de emergência reconhecido, as medidas implementadas, até os limites de despesas previstos em uma única e exclusiva norma constitucional observarão o seguinte:</p>

	<p>I - quanto às despesas:</p>

	<p class="alinea">a) serão atendidas por meio de crédito extraordinário;</p>

	<p class="alinea">b) não serão consideradas para fins de apuração da meta de resultado primário estabelecida no caput do art. 2º da Lei nº 14.194, de 20 de agosto de 2021, e do limite estabelecido para as despesas primárias, conforme disposto no inciso I do caput do art. 107 do Ato das Disposições Constitucionais Transitórias; e</p>

	<p class="alinea">c) ficarão ressalvadas do disposto no inciso III do caput do art. 167 da Constituição Federal;</p>

	<p>II - a abertura do crédito extraordinário para seu atendimento dar-se-á independentemente da observância dos requisitos exigidos no § 3º do art. 167 da Constituição Federal; e</p>

	<p>III - a dispensa das limitações legais, inclusive quanto à necessidade de compensação:</p>

	<p class="alinea">a) à criação, à expansão ou ao aperfeiçoamento de ação governamental que acarrete aumento de despesa; e</p>

	<p class="alinea">b) à renúncia de receita que possa ocorrer.</p>

	<p><span class="artigo">Art. 121.</span> As contas referentes aos patrimônios acumulados de que trata o § 2º do art. 239 da Constituição Federal cujos recursos não tenham sido reclamados por prazo superior a 20 (vinte) anos serão encerradas após o prazo de 60 (sessenta) dias da publicação de aviso no Diário Oficial da União, ressalvada reivindicação por eventual interessado legítimo dentro do referido prazo.</p>

	<ul class="dica">
		<li>Artigo acrescido pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="paragrafo">Parágrafo único.</span> Os valores referidos no caput deste artigo serão tidos por abandonados, nos termos do inciso III do caput do art. 1.275 da Lei nº 10.406, de 10 de janeiro de 2002 (Código Civil), e serão apropriados pelo Tesouro Nacional como receita primária para realização de despesas de investimento de que trata o § 6º-B do art. 107, que não serão computadas nos limites previstos no art. 107, ambos deste Ato das Disposições Constitucionais Transitórias, podendo o interessado reclamar ressarcimento à União no prazo de até 5 (cinco) anos do encerramento das contas.</p>

	<p><span class="artigo">Art. 122.</span> As transferências financeiras realizadas pelo Fundo Nacional de Saúde e pelo Fundo Nacional de Assistência Social diretamente aos fundos de saúde e assistência social estaduais, municipais e distritais, para enfrentamento da pandemia da Covid-19, poderão ser executadas pelos entes federativos até 31 de dezembro de 2023.</p>

	<ul class="dica">
		<li>Artigo acrescido pela Emenda Constitucional nº 126, de 21 de dezembro de 2022.</li>
	</ul>

	<p><span class="artigo">Art. 123.</span> Todos os termos de credenciamentos, contratos, aditivos e outras formas de ajuste de permissão lotérica, em vigor, indistintamente, na data de publicação deste dispositivo, destinados a viabilizar a venda de serviços lotéricos, disciplinados em lei ou em outros instrumentos de alcance específico, terão assegurado prazo de vigência adicional, contado do término do prazo do instrumento vigente, independentemente da data de seu termo inicial.</p>

	<ul class="dica">
		<li>Artigo acrescido pela Emenda Constitucional nº 129, de 06 de julho de 2023.</li>
	</ul>

	<p>Brasília, 5 de outubro de 1988.</p>

	<p>Ulysses Guimarães, Presidente - Mauro Benevides, 1.º. Vice-Presidente - Jorge Arbage, 2.º. Vice-Presidente - Marcelo Cordeiro, 1.º. Secretário - Mário Maia, 2.º. Secretário - Arnaldo Faria de Sá, 3.º. Secretário - Benedita da Silva, 1.º. Suplente de Secretário - Luiz Soyer, 2.º. Suplente de Secretário - Sotero Cunha, 3.º. Suplente de Secretário - Bernardo Cabral, Relator Geral - Adolfo Oliveira, Relator Adjunto - Antônio Carlos Konder Reis, Relator Adjunto - José Fogaça, Relator Adjunto - Abigail Feitosa - Acival Gomes - Adauto Pereira - Ademir Andrade - Adhemar de Barros Filho - Adroaldo Streck - Adylson Motta - Aécio de Borba - Aécio Neves - Affonso Camargo - Afif Domingos - Afonso Arinos - Afonso Sancho - Agassiz Almeida - Agripino de Oliveira Lima - Airton Cordeiro - Airton Sandoval - Alarico Abib - Albano Franco - Albérico Cordeiro - Albérico Filho - Alceni Guerra - Alcides Saldanha - Aldo Arantes - Alércio Dias - Alexandre Costa - Alexandre Puzyna - Alfredo Campos - Almir Gabriel - Aloisio Vasconcelos - Aloysio Chaves - Aloysio Teixeira - Aluizio Bezerra - Aluízio Campos - Álvaro Antônio - Álvaro Pacheco - Álvaro Valle - Alysson Paulinelli - Amaral Netto - Amaury Muller - Amilcar Moreira - Ângelo Magalhães - Anna Maria Rattes - Annibal Barcellos - Antero de Barros - Antônio Câmara - Antônio Carlos Franco - Antonio Carlos Mendes Thame - Antônio de Jesus - Antonio Ferreira - Antonio Gaspar - Antonio Mariz - Antonio Perosa - Antônio Salim Curiati - Antonio Ueno - Arnaldo Martins - Arnaldo Moraes - Arnaldo Prieto - Arnold Fioravante - Arolde de Oliveira - Artenir Werner - Artur da Távola - Asdrubal Bentes - Assis Canuto - Átila Lira - Augusto Carvalho - Áureo Mello - Basílio Villani - Benedicto Monteiro - Benito Gama - Beth Azize - Bezerra de Melo - Bocayuva Cunha - Bonifácio de Andrada - Bosco França - Brandão Monteiro - Caio Pompeu - Carlos Alberto - Carlos Alberto Caó - Carlos Benevides - Carlos Cardinal - Carlos Chiarelli - Carlos Cotta - Carlos De’Carli - Carlos Mosconi - Carlos Sant’Anna - Carlos Vinagre - Carlos Virgílio - Carrel Benevides - Cássio Cunha Lima - Célio de Castro - Celso Dourado - César Cals Neto - César Maia - Chagas Duarte - Chagas Neto - Chagas Rodrigues - Chico Humberto - Christóvam Chiaradia - Cid Carvalho - Cid Sabóia de Carvalho - Cláudio Ávila - Cleonâncio Fonseca - Costa Ferreira - Cristina Tavares - Cunha Bueno - Dálton Canabrava - Darcy Deitos - Darcy Pozza - Daso Coimbra - Davi Alves Silva - Del Bosco Amaral - Delfim Netto - Délio Braz - Denisar Arneiro - Dionisio Dal Prá - Dionísio Hage - Dirce Tutu Quadros - Dirceu Carneiro - Divaldo Suruagy - Djenal Gonçalves - Domingos Juvenil - Domingos Leonelli - Doreto Campanari - Edésio Frias - Edison Lobão - Edivaldo Motta - Edme Tavares - Edmilson Valentim - Eduardo Bonfim - Eduardo Jorge - Eduardo Moreira - Egídio Ferreira Lima - Elias Murad - Eliel Rodrigues - Eliézer Moreira - Enoc Vieira - Eraldo Tinoco - Eraldo Trindade - Erico Pegoraro - Ervin Bonkoski - Etevaldo Nogueira - Euclides Scalco - Eunice Michiles - Evaldo Gonçalves - Expedito Machado - Ézio Ferreira - Fábio Feldmann - Fábio Raunheitti - Farabulini Júnior - Fausto Fernandes - Fausto Rocha - Felipe Mendes - Feres Nader - Fernando Bezerra Coelho - Fernando Cunha - Fernando Gasparian - Fernando Gomes - Fernando Henrique Cardoso - Fernando Lyra - Fernando Santana - Fernando Velasco - Firmo de Castro - Flavio Palmier da Veiga - Flávio Rocha - Florestan Fernandes - Floriceno Paixão - França Teixeira - Francisco Amaral - Francisco Benjamim - Francisco Carneiro - Francisco Coelho - Francisco Diógenes - Francisco Dornelles - Francisco Kuster - Francisco Pinto - Francisco Rollemberg - Francisco Rossi - Francisco Sales - Furtado Leite - Gabriel Guerreiro - Gandi Jamil - Gastone Righi - Genebaldo Correia - Genésio Bernardino - Geovani Borges - Geraldo Alckmin Filho - Geraldo Bulhões - Geraldo Campos - Geraldo Fleming - Geraldo Melo - Gerson Camata - Gerson Marcondes - Gerson Peres - Gidel Dantas - Gil César - Gilson Machado - Gonzaga Patriota - Guilherme Palmeira - Gumercindo Milhomem - Gustavo de Faria - Harlan Gadelha - Haroldo Lima - Haroldo Sabóia - Hélio Costa - Hélio Duque - Hélio Manhães - Hélio Rosas - Henrique Córdova - Henrique Eduardo Alves - Heráclito Fortes - Hermes Zaneti - Hilário Braun - Homero Santos - Humberto Lucena - Humberto Souto - Iberê Ferreira - Ibsen Pinheiro - Inocêncio Oliveira - Irajá Rodrigues - Iram Saraiva - Irapuan Costa Júnior - Irma Passoni - Ismael Wanderley - Israel Pinheiro - Itamar Franco - Ivo Cersósimo - Ivo Lech - Ivo Mainardi - Ivo Vanderlinde - Jacy Scanagatta - Jairo Azi - Jairo Carneiro - Jalles Fontoura - Jamil Haddad - Jarbas Passarinho - Jayme Paliarin - Jayme Santana - Jesualdo Cavalcanti - Jesus Tajra - Joaci Góes - João Agripino - João Alves - João Calmon - João Carlos Bacelar - João Castelo - João Cunha - João da Mata - João de Deus Antunes - João Herrmann Neto - João Lobo - João Machado Rollemberg - João Menezes - João Natal - João Paulo - João Rezek - Joaquim Bevilácqua - Joaquim Francisco - Joaquim Hayckel - Joaquim Sucena - Jofran Frejat - Jonas Pinheiro - Jonival Lucas - Jorge Bornhausen - Jorge Hage - Jorge Leite - Jorge Uequed - Jorge Vianna - José Agripino - José Camargo - José Carlos Coutinho - José Carlos Grecco - José Carlos Martinez - José Carlos Sabóia - José Carlos Vasconcelos - José Costa - José da Conceição - José Dutra - José Egreja - José Elias - José Fernandes - José Freire - José Genoíno - José Geraldo - José Guedes - José Ignácio Ferreira - José Jorge - José Lins - José Lourenço - José Luiz de Sá - José Luiz Maia - José Maranhão - José Maria Eymael - José Maurício - José Melo - José Mendonça Bezerra - José Moura - José Paulo Bisol - José Queiroz - José Richa - José Santana de Vasconcellos - José Serra - José Tavares - José Teixeira - José Thomaz Nonô - José Tinoco - José Ulísses de Oliveira - José Viana - José Yunes - Jovanni Masini - Juarez Antunes - Júlio Campos - Júlio Costamilan - Jutahy Júnior - Jutahy Magalhães - Koyu Iha - Lael Varella - Lavoisier Maia - Leite Chaves - Lélio Souza - Leopoldo Peres - Leur Lomanto - Levy Dias - Lézio Sathler - Lídice da Mata - Louremberg Nunes Rocha - Lourival Baptista - Lúcia Braga - Lúcia Vânia - Lúcio Alcântara - Luís Eduardo - Luís Roberto Ponte - Luiz Alberto Rodrigues - Luiz Freire - Luiz Gushiken - Luiz Henrique - Luiz Inácio Lula da Silva - Luiz Leal - Luiz Marques - Luiz Salomão - Luiz Viana - Luiz Viana Neto - Lysâneas Maciel - Maguito Vilela - Maluly Neto - Manoel Castro - Manoel Moreira - Manoel Ribeiro - Mansueto de Lavor - Manuel Viana - Márcia Kubitschek - Márcio Braga - Márcio Lacerda - Marco Maciel - Marcondes Gadelha - Marcos Lima - Marcos Queiroz - Maria de Lourdes Abadia - Maria Lúcia - Mário Assad - Mário Covas - Mário de Oliveira - Mário Lima - Marluce Pinto - Matheus Iensen - Mattos Leão - Maurício Campos - Maurício Correa - Maurício Fruet - Maurício Nasser - Maurício Pádua - Maurílio Ferreira Lima - Mauro Borges - Mauro Campos - Mauro Miranda - Mauro Sampaio - Max Rosenmann - Meira Filho - Melo Freire - Mello Reis - Mendes Botelho - Mendes Canale - Mendes Ribeiro - Messias Góis - Messias Soares - Michel Temer - Milton Barbosa - Milton Lima - Milton Reis - Miraldo Gomes - Miro Teixeira - Moema São Thiago - Moysés Pimentel - Mozarildo Cavalcanti - Mussa Demes - Myrian Portella - Nabor Júnior - Naphtali Alves de Souza - Narciso Mendes - Nelson Aguiar - Nelson Carneiro - Nelson Jobim - Nelson Sabrá - Nelson Seixas - Nelson Wedekin - Nelton Friedrich - Nestor Duarte - Ney Maranhão - Nilso Sguarezi - Nilson Gibson - Nion Albernaz - Noel de Carvalho - Nyder Barbosa - Octávio Elísio - Odacir Soares - Olavo Pires - Olívio Dutra - Onofre Corrêa - Orlando Bezerra - Orlando Pacheco - Oscar Corrêa - Osmar Leitão - Osmir Lima - Osmundo Rebouças - Osvaldo Bender - Osvaldo Coelho - Osvaldo Macedo - Osvaldo Sobrinho - Oswaldo Almeida - Oswaldo Trevisan - Ottomar Pinto - Paes de Andrade - Paes Landim - Paulo Delgado - Paulo Macarini - Paulo Marques - Paulo Mincarone - Paulo Paim - Paulo Pimentel - Paulo Ramos - Paulo Roberto - Paulo Roberto Cunha - Paulo Silva - Paulo Zarzur - Pedro Canedo - Pedro Ceolin - Percival Muniz - Pimenta da Veiga - Plínio Arruda Sampaio - Plínio Martins - Pompeu de Sousa - Rachid Saldanha Derzi - Raimundo Bezerra - Raimundo Lira - Raimundo Rezende - Raquel Cândido - Raquel Capiberibe - Raul Belém - Raul Ferraz - Renan Calheiros - Renato Bernardi - Renato Johnsson - Renato Vianna - Ricardo Fiuza - Ricardo Izar - Rita Camata - Rita Furtado - Roberto Augusto - Roberto Balestra - Roberto Brant - Roberto Campos - Roberto D’Ávila - Roberto Freire - Roberto Jefferson - Roberto Rollemberg - Roberto Torres - Roberto Vital - Robson Marinho - Rodrigues Palma - Ronaldo Aragão - Ronaldo Carvalho - Ronaldo Cezar Coelho - Ronan Tito - Ronaro Corrêa - Rosa Prata - Rose de Freitas - Rospide Netto - Rubem Branquinho - Rubem Medina - Ruben Figueiró - Ruberval Pilotto - Ruy Bacelar - Ruy Nedel - Sadie Hauache - Salatiel Carvalho - Samir Achôa - Sandra Cavalcanti - Santinho Furtado - Sarney Filho - Saulo Queiroz - Sérgio Brito - Sérgio Spada - Sérgio Werneck - Severo Gomes - Sigmaringa Seixas - Sílvio Abreu - Simão Sessim - Siqueira Campos - Sólon Borges dos Reis - Stélio Dias - Tadeu França - Telmo Kirst - Teotonio Vilela Filho - Theodoro Mendes - Tito Costa - Ubiratan Aguiar - Ubiratan Spinelli - Uldurico Pinto - Valmir Campelo - Valter Pereira - Vasco Alves - Vicente Bogo - Victor Faccioni - Victor Fontana - Victor Trovão - Vieira da Silva - Vilson Souza - Vingt Rosado - Vinicius Cansanção - Virgildásio de Senna - Virgílio Galassi - Virgílio Guimarães - Vitor Buaiz - Vivaldo Barbosa - Vladimir Palmeira - Wagner Lago - Waldec Ornélas - Waldyr Pugliesi - Walmor de Luca - Wilma Maia - Wilson Campos - Wilson Martins - Ziza Valadares.</p>

	<p>Participantes: Álvaro Dias - Antônio Britto - Bete Mendes - Borges da Silveira - Cardoso Alves - Edivaldo Holanda - Expedito Júnior - Fadah Gattass - Francisco Dias - Geovah Amarante - Hélio Gueiros - Horácio Ferraz - Hugo Napoleão - Iturival Nascimento - Ivan Bonato - Jorge Medauar - José Mendonça de Morais - Leopoldo Bessone - Marcelo Miranda - Mauro Fecury - Neuto de Conto - Nivaldo Machado - Oswaldo Lima Filho - Paulo Almada - Prisco Viana - Ralph Biasi - Rosário Congro Neto - Sérgio Naya - Tidei de Lima.</p>

	<p>In Memoriam: Alair Ferreira - Antônio Farias - Fábio Lucena - Norberto Schwantes - Virgílio Távora.</p>

	`,
}

export default cf
