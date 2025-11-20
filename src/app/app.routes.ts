import { Routes } from '@angular/router';
// import { Usermaster } from './User/usermaster/usermaster';
// import { Userhome } from './User/userhome/userhome';
// import { Personaldetails } from './User/personaldetails/personaldetails';
import { Adminmaster } from './Admin/adminmaster/adminmaster';
import { Adminhome } from './Admin/adminhome/adminhome';
import { Personaldetalssearch } from './Admin/personaldetalssearch/personaldetalssearch';
// import { Applicationview } from './User/applicationview/applicationview';
import { Login } from './Guest/login/login';
import { Guestmaster } from './Guest/guestmaster/guestmaster';
import { Guesthome } from './Guest/guesthome/guesthome';
import { Guestlogin } from './Guest/guestlogin/guestlogin';
import { About } from './Guest/about/about';
import { Contact } from './Guest/contact/contact';
import { Gallery } from './Guest/gallery/gallery';
import { News } from './Guest/news/news';
import { Addgallery } from './Admin/addgallery/addgallery';
import { Career } from './Guest/career/career';
import { Management } from './Guest/management/management';
import { Addpersonaldetails } from './Guest/addpersonaldetails/addpersonaldetails';

export const routes: Routes = [

    { path: '', redirectTo: 'guestmaster/guesthome', pathMatch: 'full' },
    {
        path: 'guestmaster', component: Guestmaster,
        children: [
            { path: 'guesthome', component: Guesthome },
            { path: 'guestlogin', component: Guestlogin },
            { path: 'about', component: About },
            { path: 'gallery', component: Gallery },
            { path: 'news', component: News },
            { path: 'contact', component: Contact },
            { path: 'career', component: Career },
            { path:'management',component:Management},
            { path:'addpersonaldetails', component:Addpersonaldetails},
            
        ]
    },



    // {
    //     path: 'usermaster', component: Usermaster,
    //     children: [
    //         { path: 'userhome', component: Userhome },
    //         { path: 'personaldetails', component: Personaldetails },
    //         { path: 'applicationview/:id', component: Applicationview },
    //     ]
    // },
    {
        path: 'adminmaster', component: Adminmaster,
        children: [
            { path: 'adminhome', component: Adminhome },
            { path: 'personaldetailssearch', component: Personaldetalssearch },
            { path: 'addgallery', component: Addgallery },
            { path: 'addservices', component: Addgallery },

        ]
    },
    { path: 'login', component: Login }
];
