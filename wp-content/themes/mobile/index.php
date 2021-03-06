<?php get_header(); ?>
<?php if(is_page(11)||is_page(42)) { ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<div class="col col-12 protocols">
		<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">
			<header class="article-header">
				<h1><?php the_title(); ?></h1>
			</header>
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
	<div class="col col-12 protocols">
		<?php if(is_user_logged_in()){ ?>

			<?php
		    if($_POST['mci_magic']){
	        $sImage = uploadImageFile();
	        echo '<img class="cropped_img" src="'.$sImage.'" />';
		    }
			?>
			<?php if(current_user_can('contributor') || current_user_can('administrator')) { ?>
			<!-- load photo -->
			<div class="mobile_screen mobile_screen_load hidden">
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
				<div class="row hidden"><div class="col-md-12" style="text-align: center; color: #555; font-size: 20px; margin-bottom: 10px;">или перейдите к:</div></div>
				<div class="row hidden"><div class="col-md-12" style="text-align: center"><button class="btn btn-success mode-item_manual">Tarot — Мастер реальности</button></div></div>
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
							<div class="col-10 col-md-6 col-lg-4 text_center mode-item mode-item_manual__">
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
			<div class="mobile_screen mobile_screen_what_way">
				<div class="col-md-6 col-sm-8 offset-md-3 offset-sm-2">
						<div class="row">
							<div class="col protocols_info text_center">
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div id="moon-phase-widget" data-color="white" style="text-align: center;margin-top: 20px;margin-bottom: 20px;color: #000;"></div>
							</div>
						</div>
						<div class="row">
							<div class="col mode-item mode-item_protocol text_center">
					      <span class="protocols_item_title">Лечебное Tarot</span>
					      <div class="protocols_item_img" style="margin-top: 20px;">
					      	<!-- <i class="far fa-moon"></i> -->
					      	<img src="<?php echo get_template_directory_uri(); ?>/img/icon_tarot.png" alt="" class="main_menu_icon">
					      </div>
					    </div>
							<div class="col mode-item mode-item_manual text_center">
					      <span class="protocols_item_title">Tarot—Мастер реальности</span>
					      <div class="protocols_item_img" style="margin-top: 20px;">
					      	<img src="<?php echo get_template_directory_uri(); ?>/img/icon_master_h_alt.png" alt="" class="main_menu_icon">
					      </div>
					    </div>
					  </div>
						<div class="row">
							<div class="col mode-item mode-item_elements text_center">
					      <span class="protocols_item_title">Первоэлементы</span>
					      <div class="protocols_item_img" style="margin-top: 20px;">
					      	<!-- <i class="far fa-moon"></i> -->
					      	<img src="<?php echo get_template_directory_uri(); ?>/img/icon_elems_alt.png" alt="" class="main_menu_icon">
					      </div>
					    </div>
							<div class="col mode-item mode-item_cards text_center"  data-toggle="modal" data-target="#card_docs">
					      <span class="protocols_item_title">Свойства карт</span>
					      <div class="protocols_item_img">
					      	<!-- <i class="fas fa-book-reader"></i> -->
					      	<img src="<?php echo get_template_directory_uri(); ?>/img/icon_params.png" alt="" class="main_menu_icon">
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
							<div class="col history-title">Выберите режим</div>
						</div>
						<div class="row">
							<div class="col">
								<div class="btn-group group_of_types" role="group" aria-label="Basic example">
									<button type="button" data-toggle="modal" data-target="#mode_resurs" data-type="pents" class="btn btn-dark btn_tarot_type">Ресурс</button>
									<button type="button" data-toggle="modal" data-target="#mode_namerenie" data-type="wands" class="btn btn-danger btn_tarot_type" style="margin-left: 5px;">Намерение</button>
								  <button type="button" data-toggle="modal" data-target="#mode_deistvie" data-type="swords" class="btn btn-primary btn_tarot_type" style="margin-left: 5px;">Действие</button>
								  <button type="button" data-toggle="modal" data-target="#mode_zdorovie" data-type="cups" class="btn btn-success btn_tarot_type" style="margin-left: 5px;">Здоровье</button>
								</div>
							</div>
						</div>
						<div class="row master_problem_wrapper shadow hidden">
							<div class="col-8 offset-md-2">
								<div class="problem_wrap">
									<div class="row">
										<div class="col-2 problem_me"><i class="fas fa-male"></i></div>
										<div class="col-8 problem_range">
											<div class="problem_range_card problem_range_card_neutral draggable"></div>
										</div>
										<div class="col-2">
											<div class="problem_finish">?</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row master_cards_wrapper shadow hidden">
							<div class="col marakata_sim-wrap">
								<div class="marakata_sim-inner">
									<div class="marakata_sim marakata_sim_prot marakata_sim_from marakata_sim-1"></div>
								</div>
							</div>
							<div class="col marakata_sim-wrap">
								<div class="marakata_sim-inner">
									<div class="marakata_sim marakata_sim_prot marakata_sim_from marakata_sim-2"></div>
								</div>
							</div>
							<div class="col marakata_sim-wrap">
								<div class="marakata_sim-inner">
									<div class="marakata_sim marakata_sim_prot marakata_sim_from marakata_sim-3"></div>
								</div>
							</div>
							<div class="col marakata_sim-wrap">
								<div class="marakata_sim-inner">
									<div class="marakata_sim marakata_sim_prot marakata_sim_from marakata_sim-4"></div>
								</div>
							</div>
							<div class="col marakata_sim-wrap">
								<div class="marakata_sim-inner">
									<div class="marakata_dot"></div>
								</div>
							</div>
							<div class="col marakata_sim-wrap">
								<div class="marakata_sim-inner">
									<div class="marakata_sim marakata_sim_prot marakata_sim_from  marakata_sim-5"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col"></div>
							<div class="col-8 after_btns">
								<button type="button" class="btn btn-success btn-lg btn_reset btn_reset_prot hidden">Начать с начала</button>
								<button type="button" class="btn btn-warning btn-lg save_history hidden">Сохранить рецепт</button>
							</div>
							<div class="col"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- elements -->
			<div class="mobile_screen mobile_screen_elements hidden">
				<div class="row protocols_info">
					<div class="col text_center">
						<div class="row">
							<div class="col-md-8 offset-md-2 col-xs-12 elems_wrap">
								<div class="row">
									<div class="col elements_item elements_item_1" data-toggle="modal" data-target="#elem_mode" data-elem="air" data-card="wands">
										<img src="<?php echo get_template_directory_uri(); ?>/img/element_1.png" alt="" class="card_img">
									</div>
									<div class="col elements_item elements_item_2" data-toggle="modal" data-target="#elem_mode" data-elem="earth" data-card="swords">
										<img src="<?php echo get_template_directory_uri(); ?>/img/element_2.png" alt="" class="card_img">
									</div>
									<div class="col elements_item elements_item_3" data-toggle="modal" data-target="#elem_mode" data-elem="fire" data-card="pents">
										<img src="<?php echo get_template_directory_uri(); ?>/img/element_3.png" alt="" class="card_img">
									</div>
									<div class="col elements_item elements_item_4" data-toggle="modal" data-target="#elem_mode" data-elem="water" data-card="cups">
										<img src="<?php echo get_template_directory_uri(); ?>/img/element_4.png" alt="" class="card_img">
									</div>
								</div>
							</div>
							<div class="col-md-6 offset-md-3 hand_wrap hidden" style="display: none;">
								<div class="zone_elem draggable"></div>
								<div class="elems_cards">
									<div class="elems_card elems_card_1 hidden">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/knight_wands.jpg" alt="" class="hidden elem_card elem_card_knight elem_card_knight_wands">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/knight_pents.jpg" alt="" class="hidden elem_card elem_card_knight elem_card_knight_pents">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/knight_swords.jpg" alt="" class="hidden elem_card elem_card_knight elem_card_knight_swords">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/knight_cups.jpg" alt="" class="hidden elem_card elem_card_knight elem_card_knight_cups">
									</div>
									<div class="elems_card elems_card_2 hidden">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/page_wands.jpg" alt="" class="hidden elem_card elem_card_page elem_card_page_wands">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/page_pents.jpg" alt="" class="hidden elem_card elem_card_page elem_card_page_pents">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/page_swords.jpg" alt="" class="hidden elem_card elem_card_page elem_card_page_swords">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/page_cups.jpg" alt="" class="hidden elem_card elem_card_page elem_card_page_cups">
									</div>
									<div class="elems_card elems_card_3 hidden">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/king_wands.jpg" alt="" class="hidden elem_card elem_card_king elem_card_king_wands">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/king_pents.jpg" alt="" class="hidden elem_card elem_card_king elem_card_king_pents">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/king_swords.jpg" alt="" class="hidden elem_card elem_card_king elem_card_king_swords">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/king_cups.jpg" alt="" class="hidden elem_card elem_card_king elem_card_king_cups">
									</div>
									<div class="elems_card elems_card_4 hidden">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/queen_wands.jpg" alt="" class="hidden elem_card elem_card_queen elem_card_queen_wands">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/queen_pents.jpg" alt="" class="hidden elem_card elem_card_queen elem_card_queen_pents">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/queen_swords.jpg" alt="" class="hidden elem_card elem_card_queen elem_card_queen_swords">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/queen_cups.jpg" alt="" class="hidden elem_card elem_card_queen elem_card_queen_cups">
									</div>
									<div class="elems_card elems_card_5 hidden">
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/tarot_numbers/sun.jpg" alt="" class="elem_card elem_card_sun">
									</div>
								</div>
								<img src="" alt="hand" class="loaded_img">
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
												<img src="<?php echo get_template_directory_uri(); ?>/img/cards/death.png" alt="" class="card_protocol card_protocol_bottom hidden" data-number="13">
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
														data-tarot="Жезлы" 
														data-elem=" / Воздух" 
														class="zone zone_movable draggable draggable_d2">XXI</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/death.png" 
														data-number="13" 
														data-tarot="Мечи" 
														data-elem=" / Земля" 
														class="zone zone_movable draggable draggable_d2_1">XIII</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/justice.png" 
														data-number="11" 
														data-tarot="Мечи" 
														data-elem=" / Земля" 
														class="zone zone_movable draggable draggable_d3">XI</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/emperor.png" 
														data-number="4" 
														data-tarot="Мечи" 
														data-elem=" / Земля" 
														class="zone zone_movable draggable draggable_d4">IV</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/hanged_man.png" 
														data-number="12" 
														data-tarot="Жезлы" 
														data-elem=" / Воздух" 
														class="zone zone_movable draggable draggable_d5">XII</div>
												</div>
												<div class="col zone_holder zone_holder_2">
													<div class="status status_title hidden"></div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/star.png" 
														data-number="17" 
														data-tarot="" 
														data-elem="" 
														class="zone zone_movable draggable draggable_v0">XVII</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/magician.png" 
														data-number="1" 
														data-tarot="Пентакли" 
														data-elem=" / Огонь" 
														class="zone zone_movable draggable draggable_v1">I</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/high_priestess.png" 
														data-number="2" 
														data-tarot="Мечи" 
														data-elem=" / Земля" 
														class="zone zone_movable draggable draggable_v2">II</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/strength.png" 
														data-number="8" 
														data-tarot="Мечи" 
														data-elem=" / Земля" 
														class="zone zone_movable draggable draggable_v3">VIII</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/hermit.png" 
														data-number="9" 
														data-tarot="Пентакли" 
														data-elem=" / Огонь" 
														class="zone zone_movable draggable draggable_v3-4">IX</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/fortune.png" 
														data-number="10" 
														data-tarot="Кубки" 
														data-elem=" / Вода" 
														class="zone zone_movable draggable draggable_v4">X</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/temperance.png" 
														data-number="14" 
														data-tarot="Кубки" 
														data-elem=" / Вода" 
														class="zone zone_movable draggable draggable_v4-5">XIV</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/tower.png" 
														data-number="16" 
														data-tarot="Пентакли" 
														data-elem=" / Огонь" 
														class="zone zone_movable draggable draggable_v5_1">XVI</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/fool.png" 
														data-number="0" 
														data-tarot="Жезлы" 
														data-elem=" / Воздух" 
														class="zone zone_movable draggable draggable_v5">0</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/moon.png" 
														data-number="18" 
														data-tarot="" 
														data-elem="" 
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
														data-tarot="Пентакли" 
														data-elem=" / Огонь" 
														class="zone zone_movable draggable draggable_s2">VII</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/judgement.png" 
														data-number="20" 
														data-tarot="Жезлы" 
														data-elem=" / Воздух" 
														class="zone zone_movable draggable draggable_s2_1">XX</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/empress.png" 
														data-number="3" 
														data-tarot="Кубки" 
														data-elem=" / Вода" 
														class="zone zone_movable draggable draggable_s3">III</div>
													<div
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/hierophant.png" 
														data-number="5" 
														data-tarot="Пентакли" 
														data-elem=" / Огонь" 
														class="zone zone_movable draggable draggable_s4">V</div>
													<div 
														data-toggle="modal" 
														data-target="#card_modal" 
														data-card="<?php echo get_template_directory_uri(); ?>/img/cards/lovers.png" 
														data-number="6" 
														data-tarot="Пентакли" 
														data-elem=" / Огонь" 
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
										<img src="<?php echo get_template_directory_uri(); ?>/img/cards/death.png" alt="" class="card_in_action hidden" id="draggable_d2_1">
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
								  <line class="line" x1="34" y1="56" x2="789" y2="678"></line>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			<?php } else { ?>
				<div class="subscriber_info">Вы видите это сообщение так как Ваш доступ к проекту <b>"Tarot Machine"</b> истек.
	        <p>
	          Продлить доступ к <b>"Tarot Machine"</b> вы можете из <a href="/kabinet/">личного кабинета</a> пользователя (вкладка <b>"Текущий доступ"</b> (доcтупно при наличии действующиего доступа к программе). Если Вы не успели продлить доступ до окончания срока действия лицензии не страшно! Вы все еще можете получить <b>продление со скидкой</b>. Для этого напишите письмо в техподдержку — <a href="mailto:info@chikurov.com">info@chikurov.com</a>. В теме письма напишите: "Продлить истекший доступ", а так же укажите Ваш логин в программе.
	        </p>
	        <p>
	          Если у Вас есть вопросы, их так же можно задать службе технической поддержки пользователей написав на <a href="mailto:info@chikurov.com">info@chikurov.com</a>
	        </p>
	      </div>
			<?php } ?>


		<?php } else { ?>
			<div class="row">
				<div class="col-md-3 col-xs-12 protocols_info text_center form-group form-group_login">
					<div class="form-group-inner">
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
					    	<p class="note_small hidden">У Вас еще нет учетной записи? <span class="toRegistration">Зарегистрируйтесь</span> в "TarotMachine" и узнайте как получить доступ</p>
					    </p>
					  </form>
					</div>
				</div>
				<div class="col-md-3 col-xs-12 protocols_info text_center form-group form-group_register hidden">
					<div class="form-group-inner">
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
					    <p class="note_small">У Вас уже есть учетная запись? <span class="toLogin">Войдите</span> в "TarotMachine" используя свои логин и пароль</p>
					  </form>
					</div>
				</div>
				<div class="col-md-9 col-xs-12 start_info">
					<h4>Что такое «TarotMachine»?</h4>
					<p><b>«TarotMachine»</b> - это интерактивный вебпроект для диагностики и коррекции индивидуальных личностных и психосоматических проблем.</p>
					<p>Работа осуществляется по цифровой фотографии клиента.<br>Для эффективной работы в проекте <b>TarotMachine</b> оператору необходимо овладеть специальными навыками, изложенными в книге Ю.В. Чикурова <b>«Практическая психосоматика»</b>, а также пройти базовый учебный онлайн-курс <b>«Лечебное Tarot»</b> на <a target="_blank" href="https://school-bc.ru">school-bc.ru</a></p>
					<p>Настоящая программа существует более 5 лет, в начале 2019 года она подверглась существенной переработке и модернизации. Пользователю предлагается 4 основных режима работы: <b>«Классический протокол Tarot»</b>; <b>«Первоэлементы Tarot»</b>, <b>«Мастер реальности Tarot»</b>, а также <b>«Значение карт Tarot»</b>.</p>
					<h4>Как получить доступ и сколько это стоит?</h4>
					<p>Программа <b>«TarotMachine»</b> обладает исчерпывающим функционалом для коррекции индивидуальных личностных и психосоматических проблем из коробки, иначе говоря, весь необходимый для успешной работы функционал Вы найдете в этой программе.<br>Успешное применение данных техник требует от пользоватиля четкого представления о роли системы Таро в схеме мироздания а так же прохождение обучения по правилам пользования программой.</p>
					<p>Доступ могут получить пользователи прошедшие базовый учебный онлайн-курс <b>«Лечебное Tarot»</b> дающий представление о работе с Таро в рамках <b>«Биологического Центрирования»</b>, а так же продвинутый учебный курс <b>«TarotMachine — Мастер Реальности»</b> позволяющий в совершенстве освоить программу <b>«TarotMachine»</b>  и успешно применять ее на практике.</p>
					<p>Стоимость курса <b>«TarotMachine - Мастер Реальности»</b> — <b>35 000 руб.</b><br>В эту стоимость входит месячный обучающий курс по работе с программой <b>«TarotMachine»</b> и годовой доступ к самой программе. В дальнейшем, продление доступа на 2-й год и последующие будет стоить <b>25 000 руб.</b> Оплату можно будет производить из личного кабинета пользователя. Доступно несколько способов оплаты, включая оплату Банковской Картой.</b></p>
					<p>Узнать дату начала ближайшего курса <b>«TarotMachine — Мастер Реальности»</b> Вы можете на <a target="_blank" href="https://school-bc.ru">school-bc.ru</a></p>
					<h4>Юридическая информация</h4>
					<p><a href="mailto:info@chikurov.com">info@chikurov.com</a><br>+7 (495) 135-25-48<br>ОГРНИП: 314910224600336<br>ИНН: 7706092528</p>
					<p class="bc_credits"><a target="_blank" href="https://chikurov.com/">Разработано в <br>«Школе Доктора Чикурова» <img src="<?php echo get_template_directory_uri(); ?>/img/bc.png" alt=""></a></p>
					<p><h5><a target="_blank" href="/oferta/">Оферта</a></h5></p>
				</div>
			</div>
		<?php } ?>
	</div>
<?php } ?>	

<?php get_footer(); ?>
