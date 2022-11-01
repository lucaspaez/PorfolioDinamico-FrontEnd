export class AboutMe{
    idAboutMe?: number;
    vivoEn: string;
    sitioWeb: string;
    profesion: string;
    trabajoComo: string;
    estudie: string;
    soy: string;
    imgPerfil: string;
    imgHero: string;
    descripcion: string;
    especialistaEn: string;
    facebook: string;
    instagram: string;
    linkedin: string;

    constructor(vivoEn: string, sitioWeb: string, profesion: string,
        trabajoComo: string, estudie: string, soy: string, imgPerfil: string, imgHero: string, descripcion: string, especialistaEn: string,
        facebook: string, instagram: string, linkedin: string){
            this.vivoEn = vivoEn;
            this.sitioWeb = sitioWeb;
            this.profesion = profesion;
            this.trabajoComo = trabajoComo;
            this.estudie = estudie;
            this.soy = soy;
            this.imgPerfil = imgPerfil;
            this.imgHero = imgHero;
            this.descripcion = descripcion;
            this.especialistaEn = especialistaEn;
            this.facebook = facebook;
            this.instagram = instagram;
            this.linkedin = linkedin;
    }
}