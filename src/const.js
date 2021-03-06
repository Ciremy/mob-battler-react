const SPELL_BACKGROUND = {
    nature : "#5AE43F",
    arcane : "#D398B3",
    "lumière" : "#FEEC8A",
    ombre : "#4e0036",
    physique : "#D3D3D3",
    maladie : "#CC3222",
    soin : "#96DD7E"

}

export const ATTACKS = [ 
    {
        name : "Attaque de base",
        damage : 5,
        manaCost : 0,
        attackType : "Physique",
        imgUrl : "../assets/img/basic_attack.png",
        functionClick :"attaqueBasique()"
    },
    {
        name : "Peste virulente",
        damage : 15,
        manaCost : 5,
        attackType : "Maladie",
        imgUrl : "../assets/img/peste_virulente.jpeg",
        functionClick :"pesteVirulente()"
    },
    {
        name : "Lacération",
        damage : 18,
        manaCost : 7,
        attackType : "Physique",
        imgUrl : "../assets/img/laceration.png",
        functionClick :"laceration()"
    },
    {
        name : "Vomi immonde",
        damage : 12,
        manaCost : 3,
        attackType : "Maladie",
        imgUrl : "../assets/img/vomie_immonde.png",
        functionClick :"vomieImmonde()"
    },
    {
        name : "Attaque de ronce",
        damage : 15,
        manaCost : 3,
        attackType : "Nature",
        imgUrl : "../assets/img/attaque_de_ronce.jpg",
        functionClick :"attaqueRonce()"
    },
    {
        name : "Rage animal",
        damage : 20,
        manaCost : 7,
        attackType : "Physique",
        imgUrl : "../assets/img/rage_animal.jpg",
        functionClick :"rageAnimal()"
    },
    {
        name : "Tempête meurtrières",
        damage : 24,
        manaCost : 15,
        attackType : "Nature",
        imgUrl : "../assets/img/tempete.png",
        functionClick :"guerisonPlante()"
    },
    {
        name : "Charge",
        damage : 16,
        manaCost : 4,
        attackType : "Physique",
        imgUrl : "../assets/img/charge.jpg",
        functionClick :"charge()"
    },
    {
        name : "Morsure venimeuse",
        damage : 22,
        manaCost : 7,
        attackType : "Maladie",
        imgUrl : "../assets/img/morsure.png",
        functionClick :"morsureVenimeuse()"
    },
    {
        name : "Piétinement",
        damage : 8,
        manaCost : 2,
        attackType : "Physique",
        imgUrl : "../assets/img/pietinement.svg",
        functionClick :"pietinement()"
    },
    {
        name : "Frappe sacrée",
        damage : 7,
        manaCost : 2,
        attackType : "Lumière",
        imgUrl : "../assets/img/frappe_sacree.jpg",
        functionClick :"frappeSacree()"
    },
    {
        name : "Zone sacrée",
        damage : 15,
        manaCost : 4,
        attackType : "Lumière",
        imgUrl : "../assets/img/zone_sacree.jpg",
        functionClick :"zoneSacree()"
    },
    {
        name : "Ultime recours",
        damage : 40,
        manaCost : 20,
        attackType : "Lumière",
        imgUrl : "../assets/img/ultime_recours.jpeg",
        functionClick :"ultimeRecours()"
    },
    {
        name : "Ombre grandissante",
        damage : 32,
        manaCost : 18,
        attackType : "Ombre",
        imgUrl : "../assets/img/ombre_grandissante.jpg",
        functionClick :"ombreGrandissante()"
    },
    {
        name : "Vision horrifique",
        damage : 26,
        manaCost : 11,
        attackType : "Ombre",
        imgUrl : "../assets/img/vision_horrifique.jpg",
        functionClick :"visionHorrifique()"
    },
    {
        name : "Ombre enveloppante",
        damage : 18,
        manaCost : 7,
        attackType : "Ombre",
        imgUrl : "../assets/img/ombre_enveloppante.jpg",
        functionClick :"ombreEnveloppante()"
    },

]

export const MONSTERS = [
    {
        name : "Zombie",
        imgUrl : "./assets/img/zombie.jpg",
        lifePoint : 84,
        mana : 12,
        availableAttacks : ["Attaque de base","Peste virulente", "Lacération", "Vomi immonde" ]

    },
    {
        name : "Druide",
        imgUrl : "../assets/img/druide.jpeg",
        lifePoint : 59,
        mana : 27,
        availableAttacks : ["Attaque de base","Attaque de ronce", "Rage animal", "Tempête meurtrières" ]

    },
    {
        name : "Chimère",
        imgUrl : "../assets/img/chimere.jpg",
        lifePoint : 62,
        mana : 19,
        availableAttacks : ["Attaque de base","Charge", "Morsure venimeuse", "Piétinement" ]
    },
    {
        name : "Paladin",
        imgUrl : "../assets/img/paladin.png",
        lifePoint : 95,
        mana : 22,
        availableAttacks : ["Attaque de base","Frappe sacrée", "Zone sacrée", "Ultime recours" ]
    },
    {
        name : "Spectre ombreux",
        imgUrl : "../assets/img/spectre_ombreux.jpg",
        lifePoint : 51,
        mana : 35,
        availableAttacks : ["Attaque de base","Ombre grandissante", "Vision horrifique", "Ombre enveloppante" ]
    },
]
