<?php
/**
 * An example view.
 *
 * Layout: layouts/example.php
 *
 * @package AssessmentTool
 */

?>
<div class="assessment_tool__view">
	<?php \AssessmentTool::render( 'partials/example', [ 'message' => __( 'Hello World!', 'assessment_tool' ) ] ); ?>
</div>
