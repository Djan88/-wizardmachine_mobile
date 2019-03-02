<?php get_header(); ?>
<?php if(is_page(183)) { ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<div class="col col-12 col-sm-12 col-md-10 col-lg-6 col-xl-10 protocols">
		<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">

			<section class="entry-content cf">
				<?php the_content(); ?>
			</section>

		</article>
	</div>

	<?php endwhile; ?>

	<?php else : ?>

			<article id="post-not-found" class="hentry cf">
					<header class="article-header">
						<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
				</header>
					<section class="entry-content">
						<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
				</section>
				<footer class="article-footer">
						<p><?php _e( 'This is the error message in the index.php template.', 'bonestheme' ); ?></p>
				</footer>
			</article>

	<?php endif; ?>
<?php } else { ?>
	<div class="col col-12 col-sm-12 col-md-10 col-lg-6 col-xl-10 protocols">
		<?php if(is_user_logged_in()){ ?>

			<?php
		    if($_POST['mci_magic']){
	        $sImage = uploadImageFile();
	        echo '<img class="cropped_img" src="'.$sImage.'" />';
		    }
			?>
			<?php if(current_user_can('contributor') || current_user_can('administrator')) { ?>
			<!-- load photo -->
			<div class="mobile_screen mobile_screen_load">
				<div class="row">
					<div class="col protocols_info text_center">
						<div class="current_protocol_img">
							<i class="fas fa-user-plus"></i>
						</div>
						<form id="upload_form" action="/wizard/" enctype="multipart/form-data" method="post"><!-- hidden crop params -->
						<input id="x1" name="mci_x1" type="hidden" />
						<input id="y1" name="mci_y1" type="hidden" />
						<input id="x2" name="mci_x2" type="hidden" />
						<input id="y2" name="mci_y2" type="hidden" />
						<!-- <h2>Выберите изображение</h2> -->
						<div>
							<input style="display: none;" id="image_file" class="btn btn-primary" name="mci_image_file" type="file" />
							<label class="btn btn-outline-inverse photo_upload" for="image_file"><i class="fas fa-upload"></i> Выберите файл</label>
						</div>
						<div class="error"></div>
						<div class="step2">
						<h4>Выделите область для обрезки</h4>
						<img id="preview" alt="" />
						<!--<canvas id="preview-canvas" style="border: 3px red solid;/*position: absolute; visibility: hidden; /*left: -20000px*/"></canvas>-->
						<div class="info hidden"><label>Размер файла</label> <input id="filesize" name="mci_filesize" type="text" />
						<label>Тип</label> <input id="filetype" name="mci_filetype" type="text" />
						<label>Разрешение изображения</label> <input id="filedim" name="mci_filedim" type="text" />
						<label>Ширина</label> <input id="w" name="mci_w" type="text" />
						<label>Высота</label> <input id="h" name="mci_h" type="text" /></div>
						<input type="submit" class="crop_photo btn btn-primary" value="Редактировать фото" name="mci_magic" />
						</div>
						</form>
					</div>
				</div>
			</div>
			<!-- what way -->
			<div class="mobile_screen mobile_screen_what_way hidden">
				<div class="row justify-content-center protocols_info">
					<div class="col-8 text_center">
						<div class="row">
							<div class="col-1 col-md-3 col-lg-1 text_center"></div>
							<div class="col-10 col-md-6 col-lg-4 text_center mode-item mode-item_protocol">
								<span class="mode-item_title">Лечебное "Tarot"</span>
								<div class="mode-item_img">
									<i class="far fa-check-square"></i>
								</div>
							</div>
							<div class="col-1 text_center"></div>
							<div class="col-1 col-md-3 col-lg-1 text_center"></div>
							<div class="col-10 col-md-6 col-lg-4 text_center mode-item mode-item_manual">
								<span class="mode-item_title">Альтернативный режим</span>
								<div class="mode-item_img">
									<i class="fas fa-fingerprint"></i>
								</div>
							</div>
							<div class="col-1 text_center"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- protocols -->
			<div class="mobile_screen mobile_screen_protocols hidden">
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
			    <div data-protocol="v1" class="col protocols_item protocols_item_1 text_center">
			      <span class="protocols_item_title">V1</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-brain"></i>
			      </div>
			      <div class="protocols_item_content hidden">«Краниальный протокол» - «используется при актуальности зоны головы, а также для терапевтической дефрагментации ума»</div>
			    </div>
			    <div data-protocol="v2" class="col protocols_item protocols_item_2 text_center">
			      <span class="protocols_item_title">V2—V5</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-users"></i>
			      </div>
			      <div class="protocols_item_content hidden">«Показания для коррекции - застрявшие мысли/дилеммы категорий люди и отношения, а также предметы/вещи/деньги. Рационализации (самообман), неотпущенные переживания обиды и вины, клинические проявления V2 заболеваний.»</div>
			    </div>
			    <div data-protocol="v3" class="col protocols_item protocols_item_3 text_center">
			      <span class="protocols_item_title">V3—V4</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-tired"></i>
			      </div>
			      <div class="protocols_item_content hidden">«Показания к применению - чувство непереносимости ситуации либо отношений, невозможности принять для себя это переживания, раздражение от всех и вся, попытки заставить вас принять чужое мнение, или ваши попытки заставить кого-либо принять вашу точку зрения, клинические проявления V3 заболеваний.»</div>
			    </div>
			  </div>
				<div class="row">
			    <div data-protocol="v4" class="col protocols_item protocols_item_4 text_center">
			      <span class="protocols_item_title">V4—V3</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-theater-masks"></i>
			      </div>
			      <div class="protocols_item_content hidden">«Показания к применению - переживание беспокойства, тревожности, суеты и торопливости, злости и заниженной самооценки. Клинические проявления V4 заболеваний.»</div>
			    </div>
			    <div data-protocol="v5" class="col protocols_item protocols_item_5 text_center">
			      <span class="protocols_item_title">V5—V2</span>
			      <div class="protocols_item_img">
			      	<i class="fab fa-medapps"></i>
			      </div>
			      <div class="protocols_item_content hidden">«Показания к применению - невротические переживания нехватки воздуха, страхов закрытого пространства, высоты. Синдром хронической усталости, последствия физических травм, насилия, утопления, кровопотери, общего наркоза и прочих ситуаций, связанных с угрозой жизни. Клинические проявления V5 заболеваний.»</div>
			    </div>
			    <div data-protocol="drenag" class="col protocols_item protocols_item_6 text_center">
			      <span class="protocols_item_title">Дренаж</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-recycle"></i>
			      </div>
			      <div class="protocols_item_content hidden">«Дренажный протокол предназначен для флюидической очистки зон DSV тела ума. Рекомендован при хронических либо кармически отягощенных, а также гипоресурсных состояниях. Можно применять сразу дополнительно после основного протокола (кроме V5) либо самостоятельно»</div>
			    </div>
			  </div>
				<div class="row">
			    <div data-protocol="solis" class="col protocols_item protocols_item_7 text_center">
			      <span class="protocols_item_title">Solis</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-sun"></i>
			      </div>
			      <div class="protocols_item_content hidden">«Протокол "Solis" предназначен для "гиперресурсных" состояний, которые закономерно возникают после удачных проработок клиента на "wizardmachine", терапевтической дефрагментации, а также после проработки кармических и родовых проблем либо после длительной "отжимки" негативного флюида из физического тела. При калибровке ставьте зону v3 на нижнюю границу сердца! Показания к применению - напряжения в теле и поведенческие дисфункции на полнолуние. Нормализация метафункционала вентральной оси. рекомендован ежедневно с 10-го по 15-й дни Луны!</div>
			    </div>
			    <div data-protocol="universal" class="col protocols_item protocols_item_8 text_center">
			      <span class="protocols_item_title">Универсальный</span>
			      <div class="protocols_item_img">
			      	<i class="fas fa-hands"></i>
			      </div>
			      <div class="protocols_item_content hidden">Универсальный протокол подходит для большинства типичных дисфункций. Если вы затрудняетесь с выбором типа протокола - смело выбирайте универсальный!</div>
			    </div>
			    <div data-protocol="visceral" class="col protocols_item protocols_item_8 text_center">
			      <span class="protocols_item_title">Висцеральный</span>
			      <div class="protocols_item_img">
			      	<i class="fab fa-stumbleupon"></i>
			      </div>
			      <div class="protocols_item_content hidden">«Печеночное продвижение. Для коррекции вегетативно/сосудистых, висцеральных, психосоматических проблем, а также состояний, связанных с нарушением иммунитета и обмена веществ»</div>
			    </div>
			  </div>
			</div>
			<!-- manual diagnostic -->
			<div class="mobile_screen mobile_screen_manual hidden">
				<div class="row protocols_info">
					<div class="col text_center">
						<div class="row">
							<div class="col">
								
							</div>
						</div>
						<div class="row">
							<div class="col-2 text_center diagnostic_container">
								<div class="zone zone_diag draggable_y">
									<i class="fas fa-arrows-alt-v"></i>
								</div>
							</div>
							<div class="col-10 text_center zone_diag diagnostic_rezult">
								<img class="loaded_img" src="" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- final screen -->
			<div class="mobile_screen mobile_screen_final hidden">
				<div class="row protocols_info">
					<div class="col text_center">
						<div class="row justify-content-center">
							<div class="col-12">
								<div class="row justify-content-center">
									<div class="col-6 text_center zones">
										<div class="row">
											<!-- <div class="col zone_holder">
												<div class="status status_percent_wrap hidden">
													Выполнено: <span class="status_percent">0%</span>
												</div>
												<div
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/world.png"
													class="zone zone_movable draggable draggable_d2">XXI</div>
												<div
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/death.png"
													class="zone zone_movable draggable draggable_d2_1">XIII</div>
												<div
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/justice.png"
													class="zone zone_movable draggable draggable_d3">XI</div>
												<div
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/emperor.png"  
													class="zone zone_movable draggable draggable_d4">IV</div>
												<div
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/hanged_man.png"
													class="zone zone_movable draggable draggable_d5">XII</div>
											</div>
											<div class="col zone_holder">
												<div class="status status_title hidden"></div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/star.png"
													class="zone zone_movable draggable draggable_v0">XVII</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/magician.png"
													class="zone zone_movable draggable draggable_v1">I</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/high_priestess.png"
													class="zone zone_movable draggable draggable_v2">II</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/strength.png"
													class="zone zone_movable draggable draggable_v3">VIII</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/hermit.png"
													class="zone zone_movable draggable draggable_v3-4">IX</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/fortune.png"
													class="zone zone_movable draggable draggable_v4">X</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/temperance.png"
													class="zone zone_movable draggable draggable_v4-5">XIV</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/tower.png"
													class="zone zone_movable draggable draggable_v5_1">XVI</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/fool.png"
													class="zone zone_movable draggable draggable_v5">0</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/moon.png"
													class="zone zone_movable draggable draggable_v-">XVIII</div>
											</div>
											<div class="col zone_holder">
												<div class="status status_pahaze hidden">
													Фаза: 
													<span class="status_pahaze_now">0</span>
													<span class="status_pahaze_to"> из </span>
													<span class="status_pahaze_all">0</span>
												</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/chariot.png"
													class="zone zone_movable draggable draggable_s2">VII</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/judgement.png"
													class="zone zone_movable draggable draggable_s2_1">XX</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/empress.png"
													class="zone zone_movable draggable draggable_s3">III</div>
												<div
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/hierophant.png" 
													class="zone zone_movable draggable draggable_s4">V</div>
												<div 
													data-toggle="modal" 
													data-target="#card_modal" 
													data-card="<?php //echo get_template_directory_uri(); ?>/img/cards/lovers.png" 
													class="zone zone_movable draggable draggable_s5">VI</div>
											</div> -->
											<div class="col zone_holder">
												<div class="status status_percent_wrap hidden">
													Выполнено: <span class="status_percent">0%</span>
												</div>
												<!-- <div class="zone zone_movable draggable draggable_lovushka"></div> -->
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/world.png" class="zone zone_movable draggable draggable_d2 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 234.844px; top: 244px;">XXI</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/death.png" class="zone zone_movable draggable draggable_d2_1 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 238.844px; top: 270px;">XIII</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/justice.png" class="zone zone_movable draggable draggable_d3 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 236.844px; top: 338px;">XI</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/emperor.png" class="zone zone_movable draggable draggable_d4 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 234.844px; top: 376px;">IV</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/hanged_man.png" class="zone zone_movable draggable draggable_d5 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 237.844px; top: 500px;">XII</div>
												<!-- <div class="zone zone_movable draggable draggable_d6">D6</div> -->
												<!-- <div class="zone zone_final zone_x hidden"></div> -->
											</div>
											<div class="col zone_holder">
												<div class="status status_title hidden"></div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/star.png" class="zone zone_movable draggable draggable_v0 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 77.8438px; top: 131px;">XVII</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/magician.png" class="zone zone_movable draggable draggable_v1 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 76.8438px; top: 164px;">I</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/high_priestess.png" class="zone zone_movable draggable draggable_v2 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 77.8438px; top: 241px;">II</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/strength.png" class="zone zone_movable draggable draggable_v3 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 77.8438px; top: 283px;">VIII</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/hermit.png" class="zone zone_movable draggable draggable_v3-4 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 76.8438px; top: 328px;">IX</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/fortune.png" class="zone zone_movable draggable draggable_v4 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 76.8438px; top: 354px;">X</div>
												
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/temperance.png" class="zone zone_movable draggable draggable_v4-5 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 77.8438px; top: 381px;">XIV</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/tower.png" class="zone zone_movable draggable draggable_v5_1 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 77.8438px; top: 406px;">XVI</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/fool.png" class="zone zone_movable draggable draggable_v5 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 78.8438px; top: 425px;">0</div><div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/moon.png" class="zone zone_movable draggable draggable_v- ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: 76.8438px; top: 631px;">XVIII</div>
											</div>
											<div class="col zone_holder">
												<div class="status status_pahaze hidden">
													Фаза: 
													<span class="status_pahaze_now">0</span>
													<span class="status_pahaze_to"> из </span>
													<span class="status_pahaze_all">0</span>
												</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/chariot.png" class="zone zone_movable draggable draggable_s2 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: -80.1562px; top: 243px;">VII</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/judgement.png" class="zone zone_movable draggable draggable_s2_1 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: -84.1562px; top: 270px;">XX</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/empress.png" class="zone zone_movable draggable draggable_s3 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: -84.1562px; top: 336px;">III</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/hierophant.png" class="zone zone_movable draggable draggable_s4 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: -82.1562px; top: 373px;">V</div>
												<div data-toggle="modal" data-target="#card_modal" data-card="http://yuchikurov.ru/wp-content/themes/mobile/img/cards/lovers.png" class="zone zone_movable draggable draggable_s5 ui-draggable ui-draggable-handle" style="width: 25px; right: auto; height: 25px; bottom: auto; left: -84.1562px; top: 498px;">VI</div>
												<!-- <div class="zone zone_movable draggable draggable_s6">S6</div> -->
												<!-- <div class="zone zone_movable zone_final zone_l hidden"></div> -->
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12 work-area" style="margin-bottom: 10px;">
								<div class="row justify-content-center" style="position: relative;">
									<div class="col-3 no-padding drag_container">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/solis_alt.png" alt="" class="card card_ghost card_ghost_solis">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/solis_alt.png" alt="" class="card draggable draggable_y card_solis">
									</div>
									<div class="col-6 text_center zone_diag work-area_inner">
										<img class="loaded_img" src="" alt="">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/devil.png" alt="" class="card card_ghost card_ghost_devil_vertical hidden">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/solis.png" alt="" class="card card_ghost card_ghost_solis_vertical hidden">
										<div class="paranja"></div>
									</div>
									<div class="col-3 no-padding drag_container">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/devil_alt.png" alt="" class="card card_ghost card_ghost_devil">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/devil_alt.png" alt="" class="card draggable draggable_y card_devil">
									</div>
									<div class="col-12">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/fool.png" alt="" class="card_protocol hidden" data-number="0">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/magician.png" alt="" class="card_protocol hidden" data-number="1">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/high_priestess.png" alt="" class="card_protocol hidden" data-number="2">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/ring_3.png" alt="" class="card_protocol" data-number="3">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/emperor.png" alt="" class="card_protocol hidden" data-number="4">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hierophant.png" alt="" class="card_protocol hidden" data-number="5">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/lovers.png" alt="" class="card_protocol hidden" data-number="6">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/chariot.png" alt="" class="card_protocol hidden" data-number="7">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/strength.png" alt="" class="card_protocol hidden" data-number="8">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hermit.png" alt="" class="card_protocol hidden" data-number="9">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/ring_10.png" alt="" class="card_protocol" data-number="10">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/ring_11.png" alt="" class="card_protocol" data-number="11">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/ring_12.png" alt="" class="card_protocol" data-number="12">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/devil.png" alt="" class="card_protocol hidden" data-number="13">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/temperance.png" alt="" class="card_protocol hidden" data-number="14">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tower.png" alt="" class="card_protocol hidden" data-number="16">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/star.png" alt="" class="card_protocol hidden" data-number="17">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/moon.png" alt="" class="card_protocol hidden" data-number="18">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/judgement.png" alt="" class="card_protocol hidden" data-number="20">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/world.png" alt="" class="card_protocol hidden" data-number="21">
									</div>
								</div>
								<svg height="1080" width="960" class="line_area">
								  <line class="line" x1="34" y1="56" x2="789" y2="678" style="stroke:rgb(255,0,0);stroke-width:20"></line>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<?php } else { ?>
				<div class="subscriber_info">Вы видите это сообщение, потому, что зарегистрированы в <a href="http://wizardmachine.ru/">"WizardMachine"</a> но на данный момент не имеете действующего доступа к программе.
	        <p>
	          Преобрести доступ к <b>"WizardMachine"</b> вы можете из <a href="/kabinet/">личного кабинета</a> пользователя (вкладка <b>"Все доступы"</b>). Напоминаем что действующие пользователи могут продлить доступ к <b>"WizardMachine"</b> со скидкой <b>30%</b>, для этого перейдите в <a href="/kabinet/">личный кабинет</a> пользователя, во вкладку <b>"Текущий доступ"</b> (доcтупно при наличии действующиего доступа к программе). Если Вы не успели продлить доступ до окончания срока действия лицензии не страшно! Вы все еще можете получить <b>продление со скидкой</b>. Для этого обратитесь в техподдержку — <a href="mailto:info@chikurov.com">info@chikurov.com</a>. Вам оперативно ответят.
	        </p>
	        <p>
	          Если у Вас есть вопросы, их так же можно задать службе технической поддержки пользователей написав на <a href="mailto:info@chikurov.com">info@chikurov.com</a>
	        </p>
	      </div>
			<?php } ?>


		<?php } else { ?>
			<div class="row">
				<div class="col protocols_info text_center form-group form-group_login">
					<div class="current_protocol_img">
						<i class="fas fa-lock"></i>
					</div>
				  <form name="loginform" id="loginform" action="<?php echo esc_url( site_url( 'wp-login.php', 'login_post' ) ); ?>" method="post">
				    <p>
				      <label for="user_login"><?php _e('Username') ?><br />
				      <input type="text" name="log" id="user_login" class="input form-control" value="<?php echo esc_attr($user_login); ?>" size="20" /></label>
				    </p>
				    <p>
				      <label for="user_pass"><?php _e('Password') ?><br />
				      <input type="password" name="pwd" id="user_pass" class="input form-control" value="" size="20" /></label>
				    </p>
				    <?php
				    /**
				     * Fires following the 'Password' field in the login form.
				     *
				     * @since 2.1.0
				     */
				    do_action( 'login_form' );
				    ?>
				    <!-- <p class="note_small">Что бы получить доступ </p> -->
				    <p class="forgetmenot"><label class="form-check-label" for="rememberme"><input class="form-check-input" name="rememberme" type="checkbox" id="rememberme" value="forever" <?php checked( $rememberme ); ?> /> <?php esc_attr_e('Remember Me'); ?></label></p>
				    <p class="submit">
				      <input type="submit" name="wp-submit" id="wp-submit" class="btn btn-primary" value="<?php esc_attr_e('Log In'); ?>" />
				<?php if ( $interim_login ) { ?>
				      <input type="hidden" name="interim-login" value="1" />
				<?php } else { ?>
				      <input type="hidden" name="redirect_to" value="<?php echo esc_attr($redirect_to); ?>" />
				<?php } ?>
				<?php if ( $customize_login ) : ?>
				      <input type="hidden" name="customize-login" value="1" />
				<?php endif; ?>
				      <input type="hidden" name="testcookie" value="1" />
				    </p>
				    <p>
				    	<p class="note_small">У Вас еще нет учетной записи? <span class="toRegistration">Зарегистрируйтесь</span> в "WizardMachine" и узнайте как получить доступ</p>
				    </p>
				  </form>
				</div>
				<div class="col protocols_info text_center form-group form-group_register hidden">
					<div class="current_protocol_img">
						<i class="fas fa-lock"></i>
					</div>
				  <form name="registerform" id="registerform" action="<?php echo site_url('wp-login.php?action=register'); ?>" method="post">
				    <p>
				      <label for="user_login">Придумайте логин<br />
				      <input type="text" name="user_login" id="user_login" class="input form-control" value="" size="20" style=""></label>
				    </p>
				    <p>
				      <label for="user_email">E-mail<br>
				      <input type="email" name="user_email" id="user_email" class="input form-control" value="" size="25">
				      </label>
				    </p>
				    
				    <p id="reg_passmail">Подтверждение регистрации будет отправлено на ваш e-mail.</p>
				    <br class="clear">
				    <input type="hidden" name="redirect_to" value="">
				    <p class="submit"><input type="submit" name="wp-submit" id="wp-submit" class="btn btn-primary" value="Регистрация"></p>
				    <p class="note_small">У Вас уже есть учетная запись? <span class="toLogin">Войдите</span> в "WizardMachine" используя свои логин и пароль</p>
				  </form>
				</div>
			</div>
		<?php } ?>
	</div>
<?php } ?>	

<?php get_footer(); ?>
