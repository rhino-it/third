	<div class="container">
		<div class="doctor">
			<?php 
				foreach ($doctor_collective as $d_c) {
			?>
			<div class="left">
				<img src="<?php echo base_url().'index.php/'.$d_c['foto']; ?>" alt="">
				<div class="bor">
					<?php echo $d_c['tema_kg'] ?>
				</div>
			</div>
			<div class="right">
				<?php echo $d_c['page_text_ru'] ?>
			</div>orem.
		<?php } ?>
		</div>		
	</div>