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
			<div class="mobile_screen mobile_screen_protocols hidden">
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
			<div class="mobile_screen mobile_screen_what_way hidden">
				<div class="col-md-8 offset-md-2">
						<div class="row">
							<div class="col protocols_info text_center">
							</div>
						</div>
						<div class="row">
							<div class="col mode-item mode-item_protocol text_center">
					      <span class="protocols_item_title">Лечебное "Tarot"</span>
					      <div class="protocols_item_img">
					      	<i class="fas fa-moon"></i>
					      </div>
					    </div>
							<div class="col mode-item mode-item_manual text_center">
					      <span class="protocols_item_title">Альтернативный режим</span>
					      <div class="protocols_item_img">
					      	<i class="fas fa-brain"></i>
					      </div>
					    </div>
							<div class="col mode-item mode-item_cards text_center">
					      <span class="protocols_item_title">Описание карт</span>
					      <div class="protocols_item_img">
					      	<i class="fas fa-brain"></i>
					      </div>
					    </div>
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
							<div class="col-12 work-area" style="margin-bottom: 10px;">
								<div class="row justify-content-center" style="position: relative;">
									<div class="col-12 card_codes">
										<div class="row">
											<div class="col-6 card_codes_top hidden">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/fool.png" alt="" class="card_protocol card_protocol_top hidden" data-number="0">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/magician.png" alt="" class="card_protocol card_protocol_top hidden" data-number="1">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/high_priestess.png" alt="" class="card_protocol card_protocol_top hidden" data-number="2">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/empress.png" alt="" class="card_protocol card_protocol_top hidden" data-number="3">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/emperor.png" alt="" class="card_protocol card_protocol_top hidden" data-number="4">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hierophant.png" alt="" class="card_protocol card_protocol_top hidden" data-number="5">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/lovers.png" alt="" class="card_protocol card_protocol_top hidden" data-number="6">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/chariot.png" alt="" class="card_protocol card_protocol_top hidden" data-number="7">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/strength.png" alt="" class="card_protocol card_protocol_top hidden" data-number="8">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hermit.png" alt="" class="card_protocol card_protocol_top hidden" data-number="9">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/fortune.png" alt="" class="card_protocol card_protocol_top hidden" data-number="10">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/justice.png" alt="" class="card_protocol card_protocol_top hidden" data-number="11">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hanged_man.png" alt="" class="card_protocol card_protocol_top hidden" data-number="12">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/death.png" alt="" class="card_protocol card_protocol_top hidden" data-number="13">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/temperance.png" alt="" class="card_protocol card_protocol_top hidden" data-number="14">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tower.png" alt="" class="card_protocol card_protocol_top hidden" data-number="16">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/star.png" alt="" class="card_protocol card_protocol_top hidden" data-number="17">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/moon.png" alt="" class="card_protocol card_protocol_top hidden" data-number="18">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/judgement.png" alt="" class="card_protocol card_protocol_top hidden" data-number="20">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/world.png" alt="" class="card_protocol card_protocol_top hidden" data-number="21">
											</div>
											<div class="col-6 card_codes_bottom hidden">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/fool.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="0">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/magician.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="1">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/high_priestess.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="2">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/empress.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="3">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/emperor.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="4">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hierophant.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="5">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/lovers.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="6">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/chariot.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="7">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/strength.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="8">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hermit.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="9">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/fortune.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="10">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/justice.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="11">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hanged_man.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="12">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/devil.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="13">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/temperance.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="14">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tower.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="16">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/star.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="17">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/moon.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="18">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/judgement.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="20">
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/world.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="21">
											</div>
										</div>
									</div>
									<div class="col-3 no-padding drag_container">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/solis_alt.png" alt="" class="card card_ghost card_ghost_solis">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/solis_alt.png" alt="" class="card draggable draggable_y card_solis">
										<div class="drag_container_solis"></div>
									</div>
									<div class="col-6 text_center zone_diag work-area_inner">
										<div class="col-md-8 offset-md-2 text_center zones">
											<div class="row">
												<div class="col zone_holder zone_holder_1">
													<div class="status status_percent_wrap hidden">
														Выполнено: <span class="status_percent">0%</span>
													</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/world.png" 
														data-number="21" 
														class="zone zone_movable draggable draggable_d2">XXI</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/death.png" 
														data-number="13" 
														class="zone zone_movable draggable draggable_d2_1">XIII</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/justice.png" 
														data-number="11" 
														class="zone zone_movable draggable draggable_d3">XI</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/emperor.png" 
														data-number="4" 
														class="zone zone_movable draggable draggable_d4">IV</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/hanged_man.png" 
														data-number="12" 
														class="zone zone_movable draggable draggable_d5">XII</div>
												</div>
												<div class="col zone_holder zone_holder_2">
													<div class="status status_title hidden"></div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/star.png" 
														data-number="17" 
														class="zone zone_movable draggable draggable_v0">XVII</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/magician.png" 
														data-number="1" 
														class="zone zone_movable draggable draggable_v1">I</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/high_priestess.png" 
														data-number="2" 
														class="zone zone_movable draggable draggable_v2">II</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/strength.png" 
														data-number="8" 
														class="zone zone_movable draggable draggable_v3">VIII</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/hermit.png" 
														data-number="9" 
														class="zone zone_movable draggable draggable_v3-4">IX</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/fortune.png" 
														data-number="10" 
														class="zone zone_movable draggable draggable_v4">X</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/temperance.png" 
														data-number="14" 
														class="zone zone_movable draggable draggable_v4-5">XIV</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/tower.png" 
														data-number="16" 
														class="zone zone_movable draggable draggable_v5_1">XVI</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/fool.png" 
														data-number="0" 
														class="zone zone_movable draggable draggable_v5">0</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/moon.png" 
														data-number="18" 
														class="zone zone_movable draggable draggable_v-">XVIII</div>
												</div>
												<div class="col zone_holder zone_holder_3">
													<div class="status status_pahaze hidden">
														Фаза: 
														<span class="status_pahaze_now">0</span>
														<span class="status_pahaze_to"> из </span>
														<span class="status_pahaze_all">0</span>
													</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/chariot.png" 
														data-number="7" 
														class="zone zone_movable draggable draggable_s2">VII</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/judgement.png" 
														data-number="20" 
														class="zone zone_movable draggable draggable_s2_1">XX</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/empress.png" 
														data-number="3" 
														class="zone zone_movable draggable draggable_s3">III</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/hierophant.png" 
														data-number="5" 
														class="zone zone_movable draggable draggable_s4">V</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/lovers.png" 
														data-number="6" 
														class="zone zone_movable draggable draggable_s5">VI</div>
												</div>
											</div>
										</div>
										<img class="loaded_img" src="" alt="">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/devil.png" alt="" class="card card_ghost card_ghost_devil_vertical hidden">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/solis.png" alt="" class="card card_ghost card_ghost_solis_vertical hidden">
										
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/fool.png" alt="" class="card_in_action hidden" id="draggable_v5">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/magician.png" alt="" class="card_in_action hidden" id="draggable_v1">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/high_priestess.png" alt="" class="card_in_action hidden" id="draggable_v2">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/empress.png" alt="" class="card_in_action hidden" id="draggable_s3">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/emperor.png" alt="" class="card_in_action hidden" id="draggable_d4">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hierophant.png" alt="" class="card_in_action hidden" id="draggable_s4">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/lovers.png" alt="" class="card_in_action hidden" id="draggable_s5">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/chariot.png" alt="" class="card_in_action hidden" id="draggable_s2">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/strength.png" alt="" class="card_in_action hidden" id="draggable_v3">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hermit.png" alt="" class="card_in_action hidden" id="draggable_v3-4">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/fortune.png" alt="" class="card_in_action hidden" id="draggable_v4">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/justice.png" alt="" class="card_in_action hidden" id="draggable_d3">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/hanged_man.png" alt="" class="card_in_action hidden" id="draggable_d5">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/devil.png" alt="" class="card_in_action hidden" id="draggable_d2_1">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/temperance.png" alt="" class="card_in_action hidden" id="draggable_v4-5">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tower.png" alt="" class="card_in_action hidden" id="draggable_v5_1">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/star.png" alt="" class="card_in_action hidden" id="draggable_v0">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/moon.png" alt="" class="card_in_action hidden" id="draggable_v-">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/judgement.png" alt="" class="card_in_action hidden" id="draggable_s2_1">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/world.png" alt="" class="card_in_action hidden" id="draggable_d2">

										<div class="paranja"></div>
									</div>
									<div class="col-3 no-padding drag_container">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/devil_alt.png" alt="" class="card card_ghost card_ghost_devil">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/devil_alt.png" alt="" class="card draggable draggable_y card_devil">
										<div class="drag_container_devil"></div>
									</div>
								</div>
								<svg height="1080" width="960" class="line_area hidden">
								  <line class="line" x1="34" y1="56" x2="789" y2="678" style="stroke:hsl(222, 50%, 96%);stroke-width:20"></line>
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
