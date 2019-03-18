<div class="content">
	<div class="container">
		<div class="row service">
			<div class="title title_header">НОВОСТИ</div>
			<div class="main_news">
				<?php foreach ($inf as $inf): ?>
				<div class="box-img" style="background-image: url('<?php echo base_url().$inf['foto'];?>')">
				</div>
				<div class="title">
					<?php
						echo $inf['tema_ru'];
					 ?>
				</div>
				<div class="text">
					<?php echo $inf['page_text_ru']; ?>
				</div>
			<?php endforeach ?>				
			</div>
			<div class="sidebar">
				<ul>
				  <li><a href="#">УЗИ органов брюшной полости</a></li>
				  <li><a href="#">УЗИ плода</a></li>
				  <li><a href="#">Эластография молочной железы</a></li>
				  <li><a href="#">Доплерография</a></li>
				  <li><a href="#">3 и 4 D –УЗИ</a></li>
				  <li><a href="#">Физиотерапия</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>