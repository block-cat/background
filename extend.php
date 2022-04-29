<?php

/*
 * This file is part of block-cat/background.
 *
 * Copyright (c) 2021 .
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace BlockCat\Background;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Settings())
        ->serializeToForum('block-cat.backType', 'block-cat.back_type')
        ->serializeToForum('block-cat.videoURL', 'block-cat.video_url')
        ->serializeToForum('block-cat.imageURL', 'block-cat.image_url')
        ->serializeToForum('block-cat.color', 'block-cat.color'),
];
