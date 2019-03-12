<?php 

foreach ($query_category as $item_category) {
	?>
	<li value="<?php echo $item_category['id'];  ?>"><?php echo $item_category['name'].'(';?>
	<span>
		<?php echo $item_category['price'];  ?>
	</span>
	<?php echo ')';?>
	</li>

	
	<?php 
} ?>
<script type="text/javascript">
	list();	
</script>