<!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>WizardMachine(Mobile)</title>
		<link rel=stylesheet href=<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css type=text/css>
		<link rel=stylesheet href=<?php echo get_template_directory_uri(); ?>/css/style.css type=text/css>
	</head>
	<body>
		<div class="container-fluid">
			<div class="row justify-content-center">
		    <div class="col wrapper">
		      <div class="header master_header shadow row align-items-center">
		      	<div class="col-3">
		      		<button type="button" class="btn btn-lg btn-link side_menu"><i class="fas fa-bars"></i></button>
		      	</div>
		      	<div class="col-6 header-title">
		      		Выберите режим
		      	</div>
		      	<div class="col-3" style="text-align: right;">
		      		<button type="button" class="btn btn-lg btn-link justify-content-end"><i class="fas fa-user"></i></button>
		      	</div>
		      </div>
		      <div id="content" class="content row">
		      	<div class="col col-md-2 col-lg-3 col-xl-3"></div>
		      	<div class="col col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 protocols">
		      		<div class="row">
		      			<div class="col protocols_info text_center">
		      				<div class="current_protocol_img">
		      					<i class="fas fa-user-md"></i>
		      				</div>
		      				<h3 class="current_protocol_title">Выберите протокол</h3>
		      				<p class="current_protocol_content">Здесь появится его описание</p>
		      				<button class="btn hidden btn-success choice_protocol">Активировать <span class="current_protocol_title_2"></span></button>
		      			</div>
		      		</div>
		      		<div class="row">
	      		    <div class="col protocols_item protocols_item_1 text_center">
	      		      <span class="protocols_item_title">V1</span>
	      		      <div class="protocols_item_img">
	      		      	<i class="fas fa-brain"></i>
	      		      </div>
	      		      <div class="protocols_item_content hidden">«Краниальный протокол» - «используется при актуальности зоны головы, а также для терапевтической дефрагментации ума»</div>
	      		    </div>
	      		    <div class="col protocols_item protocols_item_2 text_center">
	      		      <span class="protocols_item_title">V2—V5</span>
	      		      <div class="protocols_item_img">
	      		      	<i class="fas fa-users"></i>
	      		      </div>
	      		      <div class="protocols_item_content hidden">«Показания для коррекции - застрявшие мысли/дилеммы категорий люди и отношения, а также предметы/вещи/деньги. Рационализации (самообман), неотпущенные переживания обиды и вины, клинические проявления V2 заболеваний.»</div>
	      		    </div>
	      		    <div class="col protocols_item protocols_item_3 text_center">
	      		      <span class="protocols_item_title">V3—V4</span>
	      		      <div class="protocols_item_img">
	      		      	<i class="fas fa-tired"></i>
	      		      </div>
	      		      <div class="protocols_item_content hidden">«Показания к применению - чувство непереносимости ситуации либо отношений, невозможности принять для себя это переживания, раздражение от всех и вся, попытки заставить вас принять чужое мнение, или ваши попытки заставить кого-либо принять вашу точку зрения, клинические проявления V3 заболеваний.»</div>
	      		    </div>
	      		  </div>
		      		<div class="row">
	      		    <div class="col protocols_item protocols_item_4 text_center">
	      		      <span class="protocols_item_title">V4—V3</span>
	      		      <div class="protocols_item_img">
	      		      	<i class="fas fa-theater-masks"></i>
	      		      </div>
	      		      <div class="protocols_item_content hidden">«Показания к применению - переживание беспокойства, тревожности, суеты и торопливости, злости и заниженной самооценки. Клинические проявления V4 заболеваний.»</div>
	      		    </div>
	      		    <div class="col protocols_item protocols_item_5 text_center">
	      		      <span class="protocols_item_title">V5—V2</span>
	      		      <div class="protocols_item_img">
	      		      	<i class="fab fa-medapps"></i>
	      		      </div>
	      		      <div class="protocols_item_content hidden">«Показания к применению - невротические переживания нехватки воздуха, страхов закрытого пространства, высоты. Синдром хронической усталости, последствия физических травм, насилия, утопления, кровопотери, общего наркоза и прочих ситуаций, связанных с угрозой жизни. Клинические проявления V5 заболеваний.»</div>
	      		    </div>
	      		    <div class="col protocols_item protocols_item_6 text_center">
	      		      <span class="protocols_item_title">Дренаж</span>
	      		      <div class="protocols_item_img">
	      		      	<i class="fas fa-recycle"></i>
	      		      </div>
	      		      <div class="protocols_item_content hidden">«Дренажный протокол предназначен для флюидической очистки зон DSV тела ума. Рекомендован при хронических либо кармически отягощенных, а также гипоресурсных состояниях. Можно применять сразу дополнительно после основного протокола (кроме V5) либо самостоятельно»</div>
	      		    </div>
	      		  </div>
  	      		<div class="row">
        		    <div class="col protocols_item protocols_item_7 text_center">
        		      <span class="protocols_item_title">Solis</span>
        		      <div class="protocols_item_img">
        		      	<i class="fas fa-haykal"></i>
        		      </div>
        		      <div class="protocols_item_content hidden">«Протокол "Solis" предназначен для "гиперресурсных" состояний, которые закономерно возникают после удачных проработок клиента на "wizardmachine", терапевтической дефрагментации, а также после проработки кармических и родовых проблем либо после длительной "отжимки" негативного флюида из физического тела. При калибровке ставьте зону v3 на нижнюю границу сердца! Показания к применению - напряжения в теле и поведенческие дисфункции на полнолуние. Нормализация метафункционала вентральной оси. рекомендован ежедневно с 10-го по 15-й дни Луны!</div>
        		    </div>
        		    <div class="col protocols_item protocols_item_8 text_center">
        		      <span class="protocols_item_title">Висцеральный</span>
        		      <div class="protocols_item_img">
        		      	<i class="fas fa-star-of-life"></i>
        		      </div>
        		      <div class="protocols_item_content hidden">«Печеночное продвижение. Для коррекции вегетативно/сосудистых, висцеральных, психосоматических проблем, а также состояний, связанных с нарушением иммунитета и обмена веществ»</div>
        		    </div>
        		  </div>
		      	</div>
		      	<div class="col col-md-2 col-lg-3 col-xl-3"></div>
		      </div>
		      <div id="menu" class="row hidden">
	      		<ul class="main_menu">
	      			<li>
	      				<a href="#" class=" row align-items-center">
	      					<span class="menu_item_img"><i class="fas fa-home"></i></span>Главная
	      				</a>
	      			</li>
	      			<li>
	      				<a href="#" class=" row align-items-center">
	      					<span class="menu_item_img"><i class="far fa-check-square"></i></span>Выбор протокола
	      				</a>
	      			</li>
	      			<li>
	      				<a href="#" class=" row align-items-center">
	      					<span class="menu_item_img"><i class="fas fa-fingerprint"></i></span>Ручная диагностика
	      				</a>
	      			</li>
	      			<li>
	      				<a href="#" class=" row align-items-center">
	      					<span class="menu_item_img"><i class="fas fa-user"></i></span>Личный кабинет
	      				</a>
	      			</li>
	      			<li>
	      				<a href="#" class=" row align-items-center">
	      					<span class="menu_item_img"><i class="fas fa-sign-out-alt"></i></span>Выход
	      				</a>
	      			</li>
	      		</ul>
	      		<div class="credits">
	      			<div class="credits_heading">Юрий Чикуров</div>
	      			<div><a href="https://chikurov.com" target="_blank" class="btn btn-outline-info btn-lg">www.chikurov.com</a></div>
	      			<div>Все права защищены</div>
	      		</div>
		      </div>
		    </div>
		  </div>
		</div>




		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/fonts/js/all.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/js/superslide-std.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
	</body>
</html>
