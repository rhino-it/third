<?php 

foreach ($query_category as $item_category) {
	?>
	<option value="<?php echo $item_category['id'];  ?>"><?php echo $item_category['name'];  ?></option>
	
	<?php 
} ?>
<script type="text/javascript">
	list();
</script>