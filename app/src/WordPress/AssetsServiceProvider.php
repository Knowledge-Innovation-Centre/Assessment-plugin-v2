<?php

namespace AssessmentTool\WordPress;

use WPEmerge\ServiceProviders\ServiceProviderInterface;

/**
 * Register and enqueues assets.
 */
class AssetsServiceProvider implements ServiceProviderInterface {
	/**
	 * {@inheritDoc}
	 */
	public function register( $container ) {
        $this->register_scripts($this->get_scripts());
        $this->register_styles($this->get_styles());
    }

	/**
	 * {@inheritDoc}
	 */
	public function bootstrap( $container ) {
		add_action( 'wp_enqueue_scripts', [$this, 'enqueueFrontendAssets'] );
		add_action( 'admin_enqueue_scripts', [$this, 'enqueueAdminAssets'] );
		add_action( 'wp_footer', [$this, 'loadSvgSprite'] );
	}

	/**
	 * Enqueue frontend assets.
	 *
	 * @return void
	 */
	public function enqueueFrontendAssets() {
		// Enqueue the built-in comment-reply script for singular pages.
		if ( is_singular() ) {
			wp_enqueue_script( 'comment-reply' );
		}

		// Enqueue scripts.
		\AssessmentTool::core()->assets()->enqueueScript(
			'theme-js-bundle',
			\AssessmentTool::core()->assets()->getBundleUrl( 'frontend', '.js' ),
			[ 'jquery' ],
			true
		);

		// Enqueue styles.
		$style = \AssessmentTool::core()->assets()->getBundleUrl( 'frontend', '.css' );

		if ( $style ) {
			\AssessmentTool::core()->assets()->enqueueStyle(
				'theme-css-bundle',
				$style
			);
		}
	}

	/**
	 * Enqueue admin assets.
	 *
	 * @return void
	 */
	public function enqueueAdminAssets() {
		// Enqueue scripts.
		\AssessmentTool::core()->assets()->enqueueScript(
			'theme-admin-js-bundle',
			\AssessmentTool::core()->assets()->getBundleUrl( 'admin', '.js' ),
			[ 'jquery' ],
			true
		);

		// Enqueue styles.
		$style = \AssessmentTool::core()->assets()->getBundleUrl( 'admin', '.css' );

		if ( $style ) {
			\AssessmentTool::core()->assets()->enqueueStyle(
				'theme-admin-css-bundle',
				$style
			);
		}
	}

	/**
	 * Load SVG sprite.
	 *
	 * @return void
	 */
	public function loadSvgSprite() {
		$file_path = implode(
			DIRECTORY_SEPARATOR,
			array_filter(
				[
					get_template_directory(),
					'dist',
					'images',
					'sprite.svg',
				]
			)
		);

		if ( ! $this->filesystem->exists( $file_path ) ) {
			return;
		}

		echo $this->filesystem->get_contents( $file_path );
	}

    private function register_scripts($scripts)
    {
        foreach ($scripts as $handle => $script) {
            $deps = isset($script['deps']) ? $script['deps'] : false;
            $in_footer = isset($script['in_footer']) ? $script['in_footer'] : false;
            $version = isset($script['version']) ? $script['version'] : APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_VERSION;

            wp_register_script($handle, $script['src'], $deps, $version, $in_footer);
        }
    }

    public function get_scripts()
    {
        $scripts = [
            // 'apprenticeship-online-assessment-tool-runtime'  => [
            //     'src'       => APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_ASSETS . '/js/runtime.js',
            //     'in_footer' => true,
            // ],
            // 'apprenticeship-online-assessment-tool-vendor'   => [
            //     'src'       => APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_ASSETS . '/js/vendors.js',
            //     'in_footer' => true,
            // ],
            // 'apprenticeship-online-assessment-tool-frontend' => [
            //     'src'       => APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_ASSETS . '/js/frontend.js',
            //     'deps'      => ['jquery'],
            //     'in_footer' => true,
            // ],
            // 'apprenticeship-online-assessment-tool-admin'    => [
            //     'src'       => APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_ASSETS . '/js/admin.js',
            //     'deps'      => ['jquery'],
            //     'in_footer' => true,
            // ],
            'apprenticeship-online-assessment-tool-frontend' => [
               'src'       => 'http://localhost:8080/frontend.js',
               'deps'      => ['jquery'],
               'version'   => '',
               'in_footer' => true,
            ],
            'apprenticeship-online-assessment-tool-admin'    => [
               'src'       => 'http://localhost:8080/admin.js',
               'deps'      => ['jquery'],
               'version'   => '',
               'in_footer' => true,
            ],
        ];

        return $scripts;
    }

    /**
     * Register styles
     *
     * @param array $styles
     *
     * @return void
     */
    public function register_styles($styles)
    {
        foreach ($styles as $handle => $style) {
            $deps = isset($style['deps']) ? $style['deps'] : false;

            wp_register_style($handle, $style['src'], $deps, APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_VERSION);
        }
    }

    /**
     * Get registered styles
     *
     * @return array
     */
    public function get_styles()
    {

        $styles = [
            // 'apprenticeship-online-assessment-tool-style'        => [
            //     'src' => APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_ASSETS . '/css/style.css',
            // ],
            // 'apprenticeship-online-assessment-tool-frontend'     => [
            //     'src' => APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_ASSETS . '/css/frontend.css',
            // ],
            // 'apprenticeship-online-assessment-tool-admin'        => [
            //     'src' => APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_ASSETS . '/css/admin.css',
            // ],
            // 'apprenticeship-online-assessment-tool-admin-extend' => [
            //     'src' => APPRENTICESHIP_ONLINE_ASSESSMENT_TOOL_ASSETS . '/css/admin.extend.css',
            // ],
        ];

        return $styles;
    }
}
