<?php

namespace AssessmentTool\WordPress;

use WPEmerge\ServiceProviders\ServiceProviderInterface;

/**
 * Register widgets and sidebars.
 */
class ContentTypesServiceProvider implements ServiceProviderInterface {
	/**
	 * {@inheritDoc}
	 */
	public function register( $container ) {
		// Nothing to register.
	}

	/**
	 * {@inheritDoc}
	 */
	public function bootstrap( $container ) {
		add_action( 'init', [$this, 'registerPostTypes'] );
		add_action( 'init', [$this, 'registerTaxonomies'] );
	}

	/**
	 * Register post types.
	 *
	 * @return void
	 */
	public function registerPostTypes() {
		// phpcs:disable
		/*
		register_post_type(
			'assessment_tool_custom_post_type',
			array(
				'labels'              => array(
					'name'               => __( 'Custom Types', 'assessment_tool' ),
					'singular_name'      => __( 'Custom Type', 'assessment_tool' ),
					'add_new'            => __( 'Add New', 'assessment_tool' ),
					'add_new_item'       => __( 'Add new Custom Type', 'assessment_tool' ),
					'view_item'          => __( 'View Custom Type', 'assessment_tool' ),
					'edit_item'          => __( 'Edit Custom Type', 'assessment_tool' ),
					'new_item'           => __( 'New Custom Type', 'assessment_tool' ),
					'search_items'       => __( 'Search Custom Types', 'assessment_tool' ),
					'not_found'          => __( 'No custom types found', 'assessment_tool' ),
					'not_found_in_trash' => __( 'No custom types found in trash', 'assessment_tool' ),
				),
				'public'              => true,
				'exclude_from_search' => false,
				'show_ui'             => true,
				'capability_type'     => 'post',
				'hierarchical'        => false,
				'query_var'           => true,
				'menu_icon'           => 'dashicons-admin-post',
				'supports'            => array( 'title', 'editor', 'page-attributes' ),
				'rewrite'             => array(
					'slug'       => 'custom-post-type',
					'with_front' => false,
				),
			)
		);
		*/
		// phpcs:enable
	}

	/**
	 * Register taxonomies.
	 *
	 * @return void
	 */
	public function registerTaxonomies() {
		// phpcs:disable
		/*
		register_taxonomy(
			'assessment_tool_custom_taxonomy',
			array( 'post_type' ),
			array(
				'labels'            => array(
					'name'              => __( 'Custom Taxonomies', 'assessment_tool' ),
					'singular_name'     => __( 'Custom Taxonomy', 'assessment_tool' ),
					'search_items'      => __( 'Search Custom Taxonomies', 'assessment_tool' ),
					'all_items'         => __( 'All Custom Taxonomies', 'assessment_tool' ),
					'parent_item'       => __( 'Parent Custom Taxonomy', 'assessment_tool' ),
					'parent_item_colon' => __( 'Parent Custom Taxonomy:', 'assessment_tool' ),
					'view_item'         => __( 'View Custom Taxonomy', 'assessment_tool' ),
					'edit_item'         => __( 'Edit Custom Taxonomy', 'assessment_tool' ),
					'update_item'       => __( 'Update Custom Taxonomy', 'assessment_tool' ),
					'add_new_item'      => __( 'Add New Custom Taxonomy', 'assessment_tool' ),
					'new_item_name'     => __( 'New Custom Taxonomy Name', 'assessment_tool' ),
					'menu_name'         => __( 'Custom Taxonomies', 'assessment_tool' ),
				),
				'hierarchical'      => true,
				'show_ui'           => true,
				'show_admin_column' => true,
				'query_var'         => true,
				'rewrite'           => array( 'slug' => 'custom-taxonomy' ),
			)
		);
		*/
		// phpcs:enable
	}
}
