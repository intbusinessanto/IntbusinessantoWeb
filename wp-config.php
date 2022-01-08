<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'intbusinessantoweb_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'C/lE?HSh:g^Bc,<1%B&N,WUD@lw[{ccz=dvbQ<o8B[wRI<9l-pKuVks[C:=`tj #' );
define( 'SECURE_AUTH_KEY',  '68|)^Q&aUO`J%7&H0|T&rtJ(gnXbeY[mR9&N{oFj~Pd0.GTeh Y`m:Kwtj.B.b_z' );
define( 'LOGGED_IN_KEY',    '.+;Vg`,jZy*d5GBloblRMv[7G&g$,F.ul$PRm3>v{}G?L/!{?DH$wgSJ)@NGMZpI' );
define( 'NONCE_KEY',        ',9C_C~(k1bL$]rI S%K2qM-Xx99&6*ZaKvbD.X9-bH}XUS8gw(QX&Rh|x5/iYnh?' );
define( 'AUTH_SALT',        'I/ufK;hL/|/IaAjh tjvXNz=DflP+X%kvF!sRGtUDH8/3fqEo>V`lCev+^UO#Vz~' );
define( 'SECURE_AUTH_SALT', 'q1sj{5=2#c^LV+f}R`Y5BOvtBJ;,CU8$29,0{G1$sPHJ<c)-a07NLGnxFH~/k2P#' );
define( 'LOGGED_IN_SALT',   '_m!nuvxXn_-/M$fMiyjvUgb<E[I:gA>avV(l|yRr(Yk6CIcr$lnw@{0d~WWJahLM' );
define( 'NONCE_SALT',       'Yijm+2Iunk>< owjaZSL-s54*Gjv9U?P%1iEGsl-uUiM=&M=v7e>_wz?2@~LQIvr' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
