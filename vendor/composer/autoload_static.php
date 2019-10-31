<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf070b9c43fd8c27d390e8da25568c61b
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Whoops\\' => 7,
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 8,
        ),
        'L' => 
        array (
            'League\\Event\\' => 13,
        ),
        'C' => 
        array (
            'CubeScripts\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Whoops\\' => 
        array (
            0 => __DIR__ . '/..' . '/filp/whoops/src/Whoops',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'League\\Event\\' => 
        array (
            0 => __DIR__ . '/..' . '/league/event/src',
        ),
        'CubeScripts\\' => 
        array (
            0 => __DIR__ . '/../..' . '/iu-application/libraries/psr',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf070b9c43fd8c27d390e8da25568c61b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf070b9c43fd8c27d390e8da25568c61b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
