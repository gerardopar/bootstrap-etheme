const animate_intro = () => {
    
    const $intro_wrap = $('.intro__waypoint');
        
    $intro_wrap.waypoint((direction) => {
        if(direction === 'down'){
            $intro_wrap.hide(0).fadeIn(1000)
        } else if (direction === 'up'){
            $intro_wrap.hide(0).fadeOut(1000)
        }
        }, {offset: '80%'});
};

const animate_about = () => {
    
    const $about_wrap = $('.about__waypoint');
        
    $about_wrap.waypoint((direction) => {
        if(direction === 'down'){
            $about_wrap.hide(0).fadeIn(1000)
        } else if (direction === 'up'){
            $about_wrap.hide(0).fadeOut(1000)
        }
        }, {offset: '80%'});
};

const animate_features = () => {
    
    const $features_wrap = $('.features__waypoint');
        
    $features_wrap.waypoint((direction) => {
        if(direction === 'down'){
            $features_wrap.hide(0).fadeIn(1000)
        } else if (direction === 'up'){
            $features_wrap.hide(0).fadeOut(1000)
        }
        }, {offset: '80%'});
};

const animate_gallery = () => {
    
    const $gallery_wrap = $('.gallery__waypoint');
        
    $gallery_wrap.waypoint((direction) => {
        if(direction === 'down'){
            $gallery_wrap.hide(0).fadeIn(1000)
        } else if (direction === 'up'){
            $gallery_wrap.hide(0).fadeOut(1000)
        }
        }, {offset: '80%'});
};

const animate_video = () => {
    
    const $video_wrap = $('.video__waypoint');
        
    $video_wrap.waypoint((direction) => {
        if(direction === 'down'){
            $video_wrap.hide(0).fadeIn(1000)
        } else if (direction === 'up'){
            $video_wrap.hide(0).fadeOut(1000)
        }
        }, {offset: '80%'});
};

const animate_team = () => {
    
    const $team_wrap = $('.team__waypoint');
        
    $team_wrap.waypoint((direction) => {
        if(direction === 'down'){
            $team_wrap.hide(0).fadeIn(1000)
        } else if (direction === 'up'){
            $team_wrap.hide(0).fadeOut(1000)
        }
        }, {offset: '80%'});
};

const animate_tes = () => {
    
    const $tes_wrap = $('.tes__waypoint');
        
    $tes_wrap.waypoint((direction) => {
        if(direction === 'down'){
            $tes_wrap.hide(0).fadeIn(1000)
        } else if (direction === 'up'){
            $tes_wrap.hide(0).fadeOut(1000)
        }
        }, {offset: '80%'});
};

const animate_price = () => {
    
    const $price_wrap = $('.price__waypoint');
        
    $price_wrap.waypoint((direction) => {
        if(direction === 'down'){
            $price_wrap.hide(0).fadeIn(1000)
        } else if (direction === 'up'){
            $price_wrap.hide(0).fadeOut(1000)
        }
        }, {offset: '80%'});
};

// animate_price();
// animate_tes();
// animate_team();
// animate_video();
// animate_gallery();
// animate_features();
// animate_intro();
// animate_about();