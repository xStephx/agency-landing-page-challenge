tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Primary Colors
                SoftRed: 'hsl(7, 99%, 70%)',
                Yellow: 'hsl(51, 100%, 49%)',
                DarkDesaturatedCyanGraphicDesignText: 'hsl(167, 40%, 24%)',
                DarkBluePhotographyText: 'hsl(198, 62%, 26%)',
                DarkModerateCyanFooter: 'hsl(168, 34%, 41%)',

                // Neutral Colors
                VeryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
                VeryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
                DarkGrayishBlue: 'hsl(232, 10%, 55%)',
                GrayishBlue: 'hsl(210, 4%, 67%)',
                White: 'hsl(0, 0%, 100%)',
            },
        },
        fontFamily: {
            Barlow: ['Barlow', 'serif'], // 600
            Fraunces: ['Fraunces', 'serif'] // 700, 900
        },
        backgroundImage: {
            'hero-desktop': "url('./assets/images/desktop/image-header.jpg')",
            'hero-mobile': "url('./assets/images/mobile/image-header.jpg')",
            'section-1-desktop': "url('./assets/images/desktop/image-transform.jpg')",
            'section-1-mobile': "url('./assets/images/mobile/image-transform.jpg')",
          },
    },
    plugins: [],
}