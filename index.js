const datas = [
    {
        "prefecture": "CONAKRY",
        "sub_prefecture": [
            {
                "town": "Dixinn", 
                "quartier":["Belle-vue école", "Belle-vue-marché", "Camayenne", "Cameroun", "Dixinn-cité1", "Dixinn-cité 2", "Dixinn-gare", "Dixinn-gare-rails", "Dixinn-mosquée", "Dixinn-port", "Hafia 1", "Hafia 2", "Hafia-minière", "Hafia-mosquée", "Kénien", "Landréah", "Minière-cité"]
            },
            {  
                "town": "Kaloum",
                "quartier": ["Almamya", "Boulbinet", "Coronthie", "Fotoba", "Kassa", "Kouléwondy", "Manquepas", "Sandervalia", "Sans-fil", "Témitaye", "Tombo"]
            },
            {
                "town": "Matam",
                "quartier": ["Boussoura", "Bonfi", "Bonfi-marché", "Carrière", "Coléah-centre", "Coléah-cité", "Domino", "Hermakönon", "Imprimerie", "Lanséboudji", "Madina-centre", "Madina-cité", "Madina-école", "Madina-marché", "Madina-mosquée", "Mafanco", "Mafonco-centre", "Matam", "Matam-lido", "Touguiwondy"]
            },
            {
                "town": "Matoto",
                "quartier": ["Béanzin", "Camp Alpha Yaya Diallo", "Citée de l'air", "Dabompa", "Dabondy 1", "Dabondy 2", "Dabondy 3", "Dabondy-école", "Dabondy-rails", "Dar-es-salam", "Gbéssia-centre", "Gbéssia-cité 1", "Gbessia-cité 2", "Gbessia-cité 3", "Gbéssia-école", "Gbéssia-port 1", "Gbéssia-port 2", "Kissosso", "Matoto-centre", "Matoto-marché", "Sangoya-mosquée", "Simbaya 1", "Simbaya 2", "Tanéné-marché", "Tanéné-mosquée", "Tombolia", "Yimbaya-école", "Yimbaya-permanence", "Yimbaya-tannerie"]
            },
            {
                "town": "Ratoma",
                "quartier": ["Cobaya", "Dar-es-salam", "Hamdalaye 1", "Hamdalaye 2", "Hamdalaye-mosquée", "Kaporo-centre", "Kaporo-rails", "Kipé", "Koloma 1", "Koloma 2", "Lambadji", "Nongo", "Ratoma-centre", "Ratoma-dispensaire", "Simbaya-gare", "Sonfonia-gare", "Taouyah", "Wanindara", "Yattayah"]
            }
        ],
        //----------------VARIABLE-------------------//
        "region": true,
        "capital": true,
        "commune": true,
        "quartier": true
        //---------------AND VARIABLE--------------//
    },
    {
        "prefecture": "BOFFA",
        "sub_prefecture": ["Boffa-Centre", "Colia","Doupro", "Koba-Tatema", "Lisso", "Mankountan", "Tamita", "Tougnifili"]
    },
    {
        "prefecture": "BOKE",
        "sub_prefecture": ["Bintimodiya", "Boke-Centre", "Dabiss", "Kamsar", "Kanfarande", "Kolaboui", "Malapouyah", "Sangaredi", "Sansale", "Tanene"],
        
        //-------------------VARIABLE------------//
        "region": true
        //------------------AND VARIABLE---------//
    },
    {
        "prefecture": "FRIA",
        "sub_prefecture": ["Baguinet", "Banguingny", "Fria-Centre", "Tormelin"]
    },
    {
        "prefecture": "GAOUAL",
        "sub_prefecture": ["Foulamory", "Gaoual-Centre", "Kakony", "Koumbia", "Kounsitel", "Malanta", "Touba", "Wendou M'bour"]
    },
    {
        "prefecture": "KOUNDARA",
        "sub_prefecture": ["Guingan", "Kamaby", "Koundara-Centre", "Sambailo", "Sareboido", "Termesse","Youkounkoun"]
    },
    {
        "prefecture": "DABOLA",
        "sub_prefecture": ["Arfamoussaya","Banko","Bissikrima","Dabola-centre","Dogomet","Kankama","Kindoye","Konindou","N'Dema"]
    },
    {
        "prefecture": "DINGUIRAYE",
        "sub_prefecture": ["Banora","Dialakoro","Diatifere","Dinguiraye-centre","Gagnakali","Kalinko","Lansanya","Selouma"]
    },
    {
        "prefecture": "FARANAH",
        "sub_prefecture": ["Banian","Beindou","Faranah-centre","Gnaleah","Heremakonon","Kobikoro","Maréla","Passayah","sandeniah","Songoyah","Tindo","Tiro"],
        //-------------------VARIABLE------------//
        "region": true
        //------------------AND VARIABLE---------//
    },
    {
        "prefecture": "KISSIDOUGOU",
        "sub_prefecture": ["Albadariah","Banama","Bardou","Beindou","Fermesadou","Firawa (Yomadou)","Gbangbadou","kissidougou Centre","Koundiatou","Manfran","Sangardo","Yende-Millimou","Yombiro"]
    },
    {
        "prefecture": "KANKAN",
        "sub_prefecture": ["Balandougou","Bate-nafadji","Boula","Gberedou-Baranama","Kankan-centre","Karifamoriyah","Koumban","Mamouroudou","Missamana","Moribayah","Sabadou-Baranama","Tinti-Oulen","Tokounou"],
         //-------------------VARIABLE------------//
         "region": true
         //------------------AND VARIABLE---------//
    },
    {
        "prefecture": "KEROUANE",
        "sub_prefecture": ["Banankoro","Damaro","Kereouane centre","Komodou","Kounsankoro","Linko","Sibiribaro","Soromaya"]
    },
    {
        "prefecture": "KOUROUSSA",
        "sub_prefecture": ["Babila","Balato","Banfele","Baro","Cissela","Douako","Doura","Kiniero","Komola-Koura","Koumana","Kouroussa centre","Sanguiana"]
    },
    {
        "prefecture": "MANDIANA",
        "sub_prefecture": ["Balandougouba","Dialakoro","Faralako","Kantoumanina","Kinieran","Kondianakoro","Koundian","Mandiana-centre","Morodou","Niantania","Saladou","Sansando"]
    },
    {
        "prefecture": "SIGUIRI",
        "sub_prefecture": ["Bankon","Doko","Franwalia","Kiniebakoura","Kintinian","Malea","Naboun","Niagassola","Niandankoro","Norassoba","Nounkounkan","Siguiri-centre","Siguirini"]
    },
    {
        "prefecture": "COYAH",
        "sub_prefecture": ["Coyah centre","Kouriya","Maneah","Wonkifong"]
    },
    {
        "prefecture": "DUBREKA",
        "sub_prefecture": ["Badi","Dubreka-centre","Falessade","Khorira","Ouassou","Tanene","Tondon"]
    },
    {
        "prefecture": "FORECARIAH",
        "sub_prefecture": ["Alassoya","Benty","Farmoriah","Forecareah Centre","Kaback","Kakossa","Kallia","Maferenya","Moussaya","Sikhourou"]
    },
    {
        "prefecture": "KINDIA",
        "sub_prefecture": ["Bangouyah","Damankanyah","Friguiagbe","Kindia centre","Kolente","Lynsan","Madina Oula","Mambiya","Molota","Samayah","Sougueta"],
         //-------------------VARIABLE------------//
         "region": true
         //------------------AND VARIABLE---------//
    },
    {
        "prefecture": "TELIMELE",
        "sub_prefecture": ["Bourouwal","Daramagnaky","Gougoudje","Koba","Kollet","Konsotamy","Missira","Santou","Sarekaly","Sinta","Sogolon","Tarihoye","Telimele centre","Thionthian"]
    },
    {
        "prefecture": "KOUBIA",
        "sub_prefecture": ["Fafaya","Gadha Woundou","Koubia centre","Matakaou","Missira","Pilimini"]
    },
    {
        "prefecture": "LABE",
        "sub_prefecture": ["Dalein","Daralabe","Diari","Dionfo","Garambe","Hafia","Kaalan","Kouramangui","Labé centre","Noussy","Popodara","Sannoun","Taranbaly","Tountouroun"],
         //-------------------VARIABLE------------//
         "region": true
         //------------------AND VARIABLE---------//
    },
    {
        "prefecture": "LELOUMA",
        "sub_prefecture": ["Balaya","Djountou","Herico","Korbe","Lafou","Lelouma centre","Linsansaran","Manda","Parawol","Sagale","Tyanguel-Bori"]
    },
    {
        "prefecture": "MALI",
        "sub_prefecture": ["Balaki","Donghol Sigon","Dougountouny","Fougou","Gayah","Hidayatou","Lebekere","Madina Wora","Mali centre","Salambande","Telire","Touba","Yembereng"]
    },
    {
        "prefecture": "TOUGUE",
        "sub_prefecture": ["Fatako","Fello Koundoua","Kansangui","Kolangui","Kollet","Konah","Kouratongo","Koyin","Tangaly","Tougue centre"]
    },
    {
        "prefecture": "DALABA",
        "sub_prefecture": ["Bodié","Dalaba centre","Ditinn","Kaalan","Kankalabe","Kebali","Koba","Mafara","Mitty","Mombeyah"]
    },
    {
        "prefecture": "MAMOUN",
        "sub_prefecture": ["Bouliwel","Dounet","Gongoret","Kegneko","Konkoure","Mamou centre","Nyagara","Oure Kaba","Poredaka","Saramoussaya","Soyah","Teguereya","Timbo","Tolo"],
         //-------------------VARIABLE------------//
        "region": true
        //------------------AND VARIABLE---------//
    },
    {
        "prefecture": "PITA",
        "sub_prefecture": ["Bantignel","Bourouwal Tappe","Dongol Touma","Gongore","Ley-Miro","Maci","Ninguelande","Pita centre","Sangareah","Sintaly","Timbi-Madina","Timbi-Touny"]
    },
    {
        "prefecture": "BEYLA",
        "sub_prefecture": ["Beyla centre","Boola","Diarraguerela","Diassadou","Fouala","Gbackédou","Gbéssoba","karala","Koumandou","Mousadou","Nionsomoridou","Samana","Sinko","Sokourala"]
    },
    {
        "prefecture": "GUECKEDOU",
        "sub_prefecture": ["Bolodou","Fangamadou","Guéckédou centre","Guéndembou","Kassadou","Koundou","Nongoa","Ouendé Kénéma","Tékoulo","Terméssadou Djibo"]
    },
    {
        "prefecture": "LOLA",
        "sub_prefecture": ["Bossou","Foumbadou","Gama Berema","Guéassou","Kokota","Laine","Lola centre","N'Zoo","Tounkarata"]
    },
    {
        "prefecture": "MACENTA",
        "sub_prefecture": ["Balizia","Binikala","Bofossou","Daro","Fassankoni","Kouankan","Koyama","Macenta centre","N'Zébéla","Orémaï","Panziazou","Semgbédou","Sérédou","Vasérédou","Watanka"]
    },
    {
        "prefecture": "N'ZEREKORE",
        "sub_prefecture": ["Bounouma","Gouécké","Kobéla","Koropara","Koulé","N'Zérékoré centre","Palé","Samoé","Soulouma","Womey","Yalenzou"],
         //-------------------VARIABLE------------//
         "region": true
         //------------------AND VARIABLE---------//
    },
    {
        "prefecture": "YOMOU",
        "sub_prefecture": ["Banié","Bheta","Bignamou","Bowé","Diécké","Péla","Yomou centre"]
    }
]

module.exports = {

    getRegions: function(){
        var result = []
        datas.map(function(props){
            if(props.region){
                if(result.length != 0){
                    result.push(props.prefecture)
                }else{
                    result = [''+props.prefecture+'']
                }
            }
        })

        return result.sort()
    },

    getRegionBySubprefecture: function(subprefecture){

    },

    getCommunes: function(){
        var result = []
        var props = datas.filter(function(props){
            return props.commune
        })

        props.map(function(element){
                element.sub_prefecture.map(function(el){
                    if(result.length != 0){
                        result.push(el.town)
                    }else{
                        result = [''+el.town+'']
                    }
                })
        })

        return result.sort()
    },

    getCommuneByQuartier: function(quartier){

    },

    getQuartiers: function(){
        var result = []
        var props = datas.filter(function(props){
            return props.quartier
        })

        props.map(function(element){
            element.sub_prefecture.map(function(el){
                if(result.length != 0){
                    result = result.concat(el.quartier)
                }else{
                    result = el.quartier
                }
            })
        })

        return result.sort()

    },

    getQuartiersByCommune: function(commune){
        var result = []
        var q
        
        var props = datas.filter(function(e){
            return e.quartier
        })

        if(props.length != 0){

            props.map(function(el){
                sp = el.sub_prefecture
                q = sp.filter(function(e){
                   return e.town == commune
                })
            })
            if(q.length != 0){
                q.map(function(el){
                    result = el.quartier
                })

                return result.sort()

            }else{
                return "Erreur! Aucun quartier lié à cette commune"
            }

        }

    },

    getPrefectures: function(){
        var result = []
        datas.map(function(props){
            if(result.length != 0){
               result.push(props.prefecture)
            }else{
                result = [''+props.prefecture+'']
            }
        })
        return result.sort()
    },

    getPrefectureBySubprefecture: function(subprefecture){

    },

    getSubprefectures: function(){
        var result = []
        datas.map(function(props){
            if(result.length != 0){
                if(props.commune){
                    props.sub_prefecture.map(function(el){
                        result.push(el.town)
                    })
                }else{
                    result = result.concat(props.sub_prefecture)
                }
            }else{
                if(props.commune){
                    props.sub_prefecture.map(function(el){
                        if(result.length != 0){
                            result.push(el.town)
                        }else{
                            result = [''+el.town+'']
                        }
                    })
                }else{
                    result = props.sub_prefecture
                }
                
            }
        })
        return result.sort()
    },

    getSubprefecturesByPrefecture: function(prefecture){
        var result = []
        prefecture = prefecture.toUpperCase()
        var props = datas.filter(function(datas){
            return datas.prefecture == prefecture
        })

        if(props.length != 0){
            props.map(function(el){
                if(result.length != 0){
                    result = result.concat(el.sub_prefecture)
                }else{
                    result = el.sub_prefecture
                }
            })

            return result.sort()
        }else{
            return "Erreur! Aucune sous-prefecture liée à cette prefecture n'a été trouvé"
        }

        return result.sort()
    },

    getSubprefecturesByRegion: function(region){

    },

    getCapital: function(){

    }
    
}