const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.listen(port, () => {
    console.log('We live on ' + port);
});

app.all('/', (req, res) => {
    res.status(200).send('We are alive');
});

app.get('/products', (req, res) => {
    const products = [
        {
            id: 111,
            name: 'Norco',
            model: 'Ryde',
            price: '849',
            image: 'https://velorution.ca/wp-content/uploads/Norco-One25-2018-300x300.png',
            year: 2018,
            country: 'Canada',
            about: 'Available in two frame sizes and with the same proven geometry as the One25, the Ryde is the perfect bike for anything street or dirt. A chromoly top tube and downtube, tapered headtube and compact slotted dropouts are the base for a bike that is purposefully designed for jumps and tricks. Lightweight, tough components and a rider-influenced geometry make the Ryde the go-to bike for smashing down demanding slopestyle courses or hitting up your backyard dirt jumps at home.'
        },
        {
            id: 222,
            name: 'Norco',
            model: 'Bigfoot V2',
            price: '1199',
            image: 'https://gomonvelo.com/produits/image/cache/catalog/bigfoot-2-concrete-black-980x980.png',
            year: 2018,
            country: 'Canada',
            about: 'With its lightweight, double-butted X6 aluminum frame, disc brakes and clearance for up to 5.0” tires, the Bigfoot stands for cycling versatility in any terrain and season. From snow lines to sand rides, the Bigfoot provides incredible traction and control and proves that there’s no off-season for fat bikes.',

        },
        {
            id: 333,
            name: 'Kona',
            model: 'WO',
            price: '1499',
            image: 'https://cdn.webshopapp.com/shops/192980/files/223726472/500x500x2/kona-wo-2019.jpg',
            year: 2018,
            country: 'Canada',
            about:'The Fat Bike revolution is alive and well, and the Wo lives on to take you to previously untouched terrain. Whether rallying across a Baja beach, or chugging along Wisconsin groomed snow trails, the Wo is ready to push through challenging terrain with its 4.8” Schwalbe Jumbo Jim tires and Shimano Deore 10 speed drive train.',
        },
        {
            id: 444,
            name: 'WeThePeople',
            model: 'Revolver',
            price: '999',
            image: 'https://www.grindbmx.co.uk/ekmps/shops/grindbmxltd/images/wethepeople-battleship-lsd-fc-bmx-bike-brushed-raw-20-57098-p[ekm]500x500[ekm].png',
            year: 2018,
            country: 'Germany',
            about:'Here\'s one we\'ve been working on for a while now. We used larger diameter rear tubing and an invest cast wishbone, to not only give the Revolver a strong and unique look but more importantly to strengthen and stiffen the whole frame up - giving it a stable yet responsive feel.'
        },
        {
            id: 555,
            name: 'Bergamont',
            model: 'Kiez Dirt',
            price: '799',
            image: 'https://www.bikeinn.com/f/13632/136322645/bergamont-kiez-dirt-2017.jpg',
            year: 2018,
            country: 'Germany',
            about: 'Dirt lines, skate park or slopestyle course - the Kiez is right at home wherever people are trying to topple gravity from its throne. This bike is meant to push the limits.'
        },
        {
            id: 666,
            name: 'Mongoose',
            model: 'Ritual',
            price: '699',
            image: 'https://www.tritoncycles.co.uk/images/mongoose-fireball-dirt-jump-bike-2019-p21166-94844_image.jpg',
            year: 2016,
            country: 'USA',
            about:'The 2016 Ritual has a full 4130 cromoly frame with horizontal dropouts and a rigid cromoly fork. The drivetrain features a seamless 3-piece 175 mm crank with 40T chainring and an 11t cassette 1-piece, sealed bearing driver'
        },
        {
            id: 777,
            name: 'Retrospec',
            model: 'Mantra V2',
            price: '449',
            image: 'https://www.bikecraze.com/v/vspfiles/photos/2213-2.jpg',
            year: 2018,
            country: 'USA',
            about:'Hand Built Tig-Welded "UrbanComfort" design high-tensile strength steel frame and fork with bar spin clearance, horizontal drop outs, and no toe overlap'
        },
        {
            id: 888,
            name: 'The State Bicycle',
            model: 'Fixie',
            price: '599',
            image: 'https://www.toptenselect.com/wp-content/uploads/2016/09/51i5gQPFeUL.jpg',
            year: 2018,
            country: 'USA',
            about:'The State Bicycle Fixie bike was developed with feedback from riders. It’s a single-speed bicycle and can be used for several different types of terrain.'
        },
        {
            id: 999,
            name: 'High Tensile',
            model: 'Fixed Bike',
            price: '339',
            image: 'https://image.made-in-china.com/2f0j00ZCqtOhsKwBYF/High-Tensile-Fixed-Gear-Bike-Bicycle.jpg',
            year: 2018,
            country: 'China',
            about:'Fixies are simple and elegant. These single speed bikes have clean lines and a genuine beauty which springs from their lack of complexity. More akin to their high end track bike cousins, fixed gear bikes are stripped to the bare requirements of pedaling, steering and rolling. '
        },
    ];
    const result = JSON.stringify(products);
    res.status(200).send(result);
});

app.post('/products', (req, res) => {
    const inputValue = req.body;
    const cart = req.body;
    console.log(inputValue);
    console.log(cart);
    if (inputValue) {
        res.send('ok');
    } else {
        res.status(400).send();
    }
});
