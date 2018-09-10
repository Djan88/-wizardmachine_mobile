<?php get_header(); ?>
<div class="col col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 protocols">
	<?php if(is_user_logged_in()){ ?>
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
	<?php } else { ?>
		<div class="row">
			<div class="col protocols_info text_center">
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
			      <input type="password" name="pwd" id="user_pass" class="input" value="" size="20" /></label>
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
			    <p class="forgetmenot"><label for="rememberme"><input name="rememberme" type="checkbox" id="rememberme" value="forever" <?php checked( $rememberme ); ?> /> <?php esc_attr_e('Remember Me'); ?></label></p>
			    <p class="submit">
			      <input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="<?php esc_attr_e('Log In'); ?>" />
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
