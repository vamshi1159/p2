
import React from "react";
import TypoGraphy from "./index";

export default {
    title:'Typography',
    component: TypoGraphy
}
export const H1 = () => <TypoGraphy variant='h1' content = "Sample"/>
export const H1Align = () => <TypoGraphy variant='h1' content = "Sample" align='inherit'/>
export const H1Left = () => <TypoGraphy variant='h1' content = "Sample" align='left'/>
export const H1Right = () => <TypoGraphy variant='h1' content = "Sample" align='right'/>
export const H1Center = () => <TypoGraphy variant='h1' content = "Sample" align='center'/>
export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
export const H1Color = () => <TypoGraphy variant='h1' content = "This is the Sample h1 for the paragraph for the change of the fire" align='justify'  display = 'block' color ="primary"/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>
// export const H1Justify = () => <TypoGraphy variant='h1' content = "Sample" align='justify'/>

export const H2 = () => <TypoGraphy variant= 'h2' content = "Sample"/>
export const H3 = () => <TypoGraphy variant= 'h3' content="Sample"/>
export const H4 = () => <TypoGraphy variant='h4' content="Sample"/>
export const H5 = () => <TypoGraphy variant='h5' content="Sample"/>
export const H6 = () => <TypoGraphy variant='h6' content="Sample"/>
export const subtitle1 = () => <TypoGraphy variant='subtitle1' content = "Sample" />
export const subtitle2 = () =>  <TypoGraphy variant='subtitle2' content = "Sample"/>
export const body2 = () => <TypoGraphy variant='body2' content = "Sample" />
export const caption = () => <TypoGraphy variant='caption' content = "Sample" />
export const button = () => <TypoGraphy variant='button' content = "Sample" />
export const overline = () => <TypoGraphy variant='overline' content = "Sample" />
export const srOnly = () => <TypoGraphy variant='srOnly' content = "Sample" />
export const inherit = () => <TypoGraphy variant='inherit' content = "Sample" />