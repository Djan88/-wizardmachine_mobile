<?php get_header(); ?>
<div class="col col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 protocols">
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
						<label class="btn btn-success photo_upload" for="image_file"><i class="fas fa-upload"></i> Выберите файл</label>
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
			<div class="row protocols_info">
				<div class="col text_center">
					<div class="row">
						<div class="col-1 col-md-3 col-lg-1 text_center"></div>
						<div class="col-10 col-md-6 col-lg-4 text_center mode-item mode-item_protocol">
							<span class="mode-item_title">Выбор протокола</span>
							<div class="mode-item_img">
								<i class="far fa-check-square"></i>
							</div>
						</div>
						<div class="col-1 text_center"></div>
						<div class="col-1 col-md-3 col-lg-1 text_center"></div>
						<div class="col-10 col-md-6 col-lg-4 text_center mode-item mode-item_manual">
							<span class="mode-item_title">Ручная диагностика</span>
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
						<div class="col-12 text_center zones">
							<!-- <div class="row">
								<div class="col zone_holder">
									<div class="status status_percent_wrap hidden">
										Выполнено: <span class="status_percent">0%</span>
									</div>
									<div class="zone draggable draggable_lovushka"></div>
									<div class="zone draggable draggable_d2">D2</div>
									<div class="zone draggable draggable_d3">D3</div>
									<div class="zone draggable draggable_d4">D4</div>
									<div class="zone draggable draggable_d5">D5</div>
									<div class="zone draggable draggable_d6">D6</div>
									<div class="zone zone_final zone_x hidden"></div>
								</div>
								<div class="col zone_holder">
									<div class="status status_title hidden"></div>
									<div class="zone draggable draggable_v0">V0</div>
									<div class="zone draggable draggable_v1">V1</div>
									<div class="zone draggable draggable_v2">V2</div>
									<div class="zone draggable draggable_v3">V3</div>
									<div class="zone draggable draggable_v4">V4</div>
									<div class="zone draggable draggable_v5">V5</div>
									<div class="zone draggable draggable_v-">V-</div>
								</div>
								<div class="col zone_holder">
									<div class="status status_pahaze hidden">
										Фаза: 
										<span class="status_pahaze_now">0</span>
										<span class="status_pahaze_to"> из </span>
										<span class="status_pahaze_all">0</span>
									</div>
									<div class="zone draggable draggable_s2">S2</div>
									<div class="zone draggable draggable_s3">S3</div>
									<div class="zone draggable draggable_s4">S4</div>
									<div class="zone draggable draggable_s5">S5</div>
									<div class="zone draggable draggable_s6">S6</div>
									<div class="zone zone_final zone_l hidden"></div>
								</div>
							</div> -->
							<div class="row">
								<div class="col zone_holder">
									<div class="status status_percent_wrap hidden">
										Выполнено: <span class="status_percent">0%</span>
									</div>
									<div class="zone draggable draggable_lovushka ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 92.3281px; top: 170px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1;"></div>
									<div class="zone draggable draggable_d2 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 266.328px; top: 150px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1;">D2</div>
									<div class="zone draggable draggable_d3 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 278.328px; top: 230px; background: rgba(83, 35, 69, 0.4); transform: rotate(0deg);">D3</div>
									<div class="zone draggable draggable_d4 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 278.328px; top: 272px; background: rgba(83, 35, 69, 0.4); transform: rotate(0deg);">D4</div>
									<div class="zone draggable draggable_d5 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 279.328px; top: 336px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1;">D5</div>
									<div class="zone draggable draggable_d6 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 289.328px; top: 458px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1;">D6</div>
									<div class="zone zone_final zone_x hidden" style="height: 30px; background: url(&quot;/wp-content/themes/mobile/img/plod.png&quot;) 0px 0px / 100% no-repeat rgb(255, 255, 255); top: 58px;"></div>
								</div>
								<div class="col zone_holder">
									<div class="status status_title hidden"></div>
									<div class="zone draggable draggable_v0 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 93.3281px; top: 58px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); border-color: rgb(255, 240, 199); opacity: 1;">V0</div>
									<div class="zone draggable draggable_v1 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 94.3281px; top: 97px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1; border-color: rgb(255, 240, 199);">V1</div>
									<div class="zone draggable draggable_v2 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 95.3281px; top: 156px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1; border-color: rgb(255, 240, 199);">V2</div>
									<div class="zone draggable draggable_v3 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 94.3281px; top: 206px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); border-color: rgb(255, 240, 199); opacity: 1;">V3</div>
									<div class="zone draggable draggable_v4 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 94.3281px; top: 247px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); border-color: rgb(255, 240, 199); opacity: 1;">V4</div>
									<div class="zone draggable draggable_v5 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 93.3281px; top: 285px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1; border-color: rgb(255, 240, 199);">V5</div>
									<div class="zone draggable draggable_v- ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: 93.3281px; top: 539px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1; border-color: rgb(255, 240, 199);">V-</div>
								</div>
								<div class="col zone_holder">
									<div class="status status_pahaze hidden">
										Фаза: 
										<span class="status_pahaze_now">0</span>
										<span class="status_pahaze_to"> из </span>
										<span class="status_pahaze_all">0</span>
									</div>
									<div class="zone draggable draggable_s2 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: -81.6719px; top: 149px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1;">S2</div>
									<div class="zone draggable draggable_s3 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: -88.6719px; top: 229px; background: rgba(83, 35, 69, 0.4); transform: rotate(0deg);">S3</div>
									<div class="zone draggable draggable_s4 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: -88.6719px; top: 273px; background: rgba(83, 35, 69, 0.4); transform: rotate(0deg);">S4</div>
									<div class="zone draggable draggable_s5 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: -88.6719px; top: 337px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1;">S5</div>
									<div class="zone draggable draggable_s6 ui-draggable ui-draggable-handle" style="width: 30px; right: auto; height: 30px; bottom: auto; left: -96.6719px; top: 459px; background: rgba(83, 35, 69, 0.4); color: rgb(255, 240, 199); transform: rotate(0deg); opacity: 1;">S6</div>
									<div class="zone zone_final zone_l hidden" style="height: 30px; background: url(&quot;/wp-content/themes/mobile/img/x.png&quot;) 0px 0px / 100% no-repeat rgb(255, 255, 255); top: 58px;"></div>
								</div>
							</div>
						</div>
						<div class="col-12 text_center zone_diag">
							<img class="loaded_img" src="" alt="">
							<div class="paranja"></div>
						</div>
						<div class="col-12 text_center">
							<button class="btn btn-primary btn_start"><i class="fab fa-react"></i> Выполнить</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php } ?>


	<?php } else { ?>
		<div class="row">
			<div class="col protocols_info text_center form-group">
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
			  </form>
			</div>
		</div>
	<?php } ?>
</div>
<?php get_footer(); ?>
