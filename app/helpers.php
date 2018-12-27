<?php

/**
 * Get the path to a webpack bundle asset
 *
 * @param string $bundle Bundle name
 * @param string $type Asset type to take from the bundle ('js' or 'css')
 * @return string Path to asset
 */
if (! function_exists('webpack')) {
    function webpack(string $bundle, string $type) : string
    {
        $path = public_path('manifest.json');

        if (! File::exists($path)) {
            throw new InvalidArgumentException('Unable to locate webpack manifest');
        }

        $manifest = json_decode(File::get($path));

        if (! isset($manifest->$bundle->$type)) {
            throw new InvalidArgumentException("Unable to find the bundle '$bundle' of type '$type'");
        }

        return url($manifest->$bundle->$type);
    }
}
