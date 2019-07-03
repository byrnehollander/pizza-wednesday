import React from 'react'
import './VisitedPizzerias.css'

const pizzerias = {
    1: {
        name: 'Sorbillo',
        date: 'Feb 7, 2018',
        link: 'https://www.sorbillonyc.com/nyc.html'
    },
    2: {
        name: 'Prince St',
        date: 'Feb 13, 2018',
        link: 'http://princestpizzanewyork.com/'
    },
    3: {
        name: 'Kesté',
        date: 'Feb 21, 2018',
        link: 'http://kestepizzeria.com/en/menu-bleecker/'
    },
    4: {
        name: 'Emily\'s West Village',
        date: 'Feb 28, 2018',
        link: 'https://www.pizzalovesemily.com/location/west-village/'
    },
    5: {
        name: '&pizza',
        date: 'Mar 7, 2018',
        link: 'https://andpizza.com/'
    },
    6: {
        name: 'Lombardi\'s (delivered)',
        date: 'Mar 14, 2018',
        link: 'https://firstpizza.com/'
    },
    7: {
        name: 'Rubirosa',
        date: 'Mar 21, 2018',
        link: 'https://www.rubirosanyc.com/'
    },
    8: {
        name: 'Johns of Bleecker',
        date: 'Mar 28, 2018',
        link: 'http://www.johnsbrickovenpizza.com/'
    },
    9: {
        name: 'Pasquale Jones',
        date: 'Apr 4, 2018',
        link: 'https://www.pasqualejones.com/'
    },
    10: {
        name: 'Martina',
        date: 'Apr 11, 2018',
        link: 'https://www.martinapizzeria.com/'
    },
    11: {
        name: 'Song \'E Napule',
        date: 'Apr 25, 2018',
        link: 'https://www.songenapulenyc.us/'
    },
    12: {
        name: 'Prince St',
        date: 'May 2, 2018',
        link: 'http://princestpizzanewyork.com/'
    },
    13: {
        name: 'Joe and Pat\'s',
        date: 'May 9, 2018',
        link: 'https://www.joeandpatsnyc.com/'
    },
    14: {
        name: 'Luzzo\'s',
        date: 'May 16, 2018',
        link: 'http://luzzosgroup.com/'
    },
    15: {
        name: 'Motorino',
        date: 'May 23, 2018',
        link: 'https://www.motorinopizza.com/'
    },
    16: {
        name: 'Scarr\'s',
        date: 'June 6, 2018',
        link: 'http://www.scarrspizza.com/'
    },
    17: {
        name: 'Ribalta',
        date: 'June 13, 2018',
        link: 'http://www.ribaltapizzarestaurant.com/nyc'
    },
    18: {
        name: 'Gnocco',
        date: 'June 20, 2018',
        link: 'https://www.gnocco.com/menu/'
    },
    19: {
        name: 'Bruno',
        date: 'June 27, 2018',
        link: 'http://www.brunopizzanyc.com/'
    },
    20: {
        name: 'Fiore\'s Pizza',
        date: 'July 11, 2018',
        link: 'http://www.fiorespizzanyc.com/'
    },
    21: {
        name: 'Rubirosa',
        date: 'July 18, 2018',
        link: 'https://www.rubirosanyc.com/'
    },
    22: {
        name: 'Vic\'s',
        date: 'July 25, 2018',
        link: 'https://www.vicsnewyork.com/'
    },
    23: {
        name: 'Joe and Pat\'s',
        date: 'Aug 1, 2018',
        link: 'https://www.joeandpatsnyc.com/'
    },
    24: {
        name: 'Bleecker St Pizza',
        date: 'August 15, 2018',
        link: 'https://www.bleeckerstreetpizza.com/'
    },
    25: {
        name: 'Emmett\'s',
        date: 'August 22, 2018',
        link: 'https://www.emmettsnyc.com/'
    },
    26: {
        name: 'Mani in Pasta',
        date: 'August 29, 2018',
        link: 'https://www.maniinpastanyc.com/'
    },
    27: {
        name: 'Sorbillo',
        date: 'Sept 5, 2018',
        link: 'https://www.sorbillonyc.com/nyc.html'
    },
    28: {
        name: 'Joe & Pat\'s (delivered)',
        date: 'Sept 12, 2018',
        link: 'https://www.joeandpatsnyc.com/'
    },
    29: {
        name: 'Numero 28',
        date: 'Sept 19, 2018',
        link: 'https://www.numero28.com/menu-and-locations/east-village-new-york/'
    },
    30: {
        name: 'Mercato // CPH',
        date: 'Oct 3, 2018',
        link: 'https://www.mypizzamercato.com/'
    },
    31: {
        name: 'Sauce',
        date: 'Oct 10, 2018',
        link: 'http://saucerestaurant.com/saucepizzeria/'
    },
    32: {
        name: 'Lombardi\'s',
        date: 'Oct 23, 2018',
        link: 'https://firstpizza.com/'
    },
    33: {
        name: 'Denino\'s',
        date: 'Oct 31, 2018',
        link: 'http://deninosgreenwichvillage.com/'
    },
    34: {
        name: 'Williamsburg Pizza LES',
        date: 'Nov 7, 2018',
        link: 'http://www.williamsburgpizza.com/'
    },
    35: {
        name: 'Kesté',
        date: 'Nov 14, 2018',
        link: 'http://kestepizzeria.com/en/menu-bleecker/'
    },
    36: {
        name: 'Gelso & Grand',
        date: 'Dec 5, 2018',
        link: 'https://www.gelsoandgrand.com/'
    },
    37: {
        name: 'Ribalta',
        date: 'Dec 26, 2018',
        link: 'http://www.ribaltapizzarestaurant.com/'
    },
    38: {
        name: 'Neapolitan Express',
        date: 'Jan 9, 2019',
        link: 'http://www.neapolitanexpress.com/'
    },
    39: {
        name: 'La Rossa',
        date: 'Jan 23, 2019',
        link: 'http://larossa.love/'
    },
    40: {
        name: 'Emporio',
        date: 'Jan 30, 2019',
        link: 'http://emporiony.com/'
    },
    41: {
        name: 'Otto Enoteca Pizzeria',
        date: 'Feb 6, 2019',
        link: 'https://ny.ottopizzeria.com/'
    },
    42: {
        name: 'Martina',
        date: 'Feb 13, 2019',
        link: 'https://www.martinapizzeria.com/'
    },
    43: {
        name: 'Sorbillo',
        date: 'Feb 20, 2019',
        link: 'https://www.sorbillonyc.com/nyc.html'
    },
    44: {
        name: 'Luzzo\'s',
        date: 'Feb 27, 2019',
        link: 'http://luzzospizzanyc.com/'
    },
    45: {
        name: 'Famous Ben\'s Pizza',
        date: 'Mar 6, 2019',
        link: 'http://www.famousbenspizzanyc.com'
    },
    46: {
        name: 'Numero 28 Pizzeria',
        date: 'Mar 13, 2019',
        link: 'https://www.numero28.com/menu-and-locations/east-village-new-york/'
    },
    47: {
        name: 'Speedy Romeo',
        date: 'Mar 20, 2019',
        link: 'http://www.speedyromeo.com/location/lower-east-side/'
    },
    48: {
        name: 'Two Boots',
        date: 'Mar 27, 2019',
        link: 'http://twoboots.com/location/east-village/'
    },
    49: {
        name: 'Village Square Pizza',
        date: 'April 3, 2019',
        link: 'https://www.instagram.com/villagesquarepizza'
    },
    50: {
        name: 'Joe and Pat\'s',
        date: 'April 10, 2019',
        link: 'https://www.joeandpatsnyc.com/'
    },
    51: {
        name: 'La Rossa',
        date: 'April 24, 2019',
        link: 'http://larossa.love/'
    },
    52: {
        name: 'Champion Pizza',
        date: 'May 1, 2019',
        link: 'http://championpizzanyc.com/index.html'
    },
    53: {
        name: 'Marcellino',
        date: 'May 8, 2019',
        link: 'https://www.marcellinonyc.com/eat'
    },
    54: {
        name: 'Margherita NYC',
        date: 'May 15, 2019',
        link: 'http://www.margheritanyc.com/'
    },
    55: {
        name: 'La Margarita Pizzeria',
        date: 'May 22, 2019',
        link: 'http://www.lamargaritanyc.com/'
    },
    56: {
        name: 'Artistic Pizza',
        date: 'May 29, 2019',
        link: 'https://artistic-pizza.business.site/'
    },
    57: {
        name: 'L&B Spumoni Gardens',
        date: 'June 5, 2019',
        link: 'https://www.spumonigardens.com/'
    },
    58: {
        name: 'Luigi\'s Pizza',
        date: 'June 5, 2019',
        link: 'http://luigispizzabrooklyn.com/'
    },
    59: {
        name: 'Sam\'s Restaurant',
        date: 'June 5, 2019',
        link: 'https://www.yelp.com/biz/sams-brooklyn'
    },
    60: {
        name: 'Paulie Gee\'s',
        date: 'June 5, 2019',
        link: 'https://pauliegee.com/greenpoint/'
    },
    61: {
        name: 'Proto\'s Pizza',
        date: 'June 19, 2019',
        link: 'https://www.protospizzamenu.com/restaurants/ny/new-york/10003/proto-s-pizza/menu'
    },
    62: {
        name: 'Kesté was closed, not sure where they went',
        date: 'June 26, 2019',
        link: 'https://seatgeek.com'
    },
    63: {
        name: '2 Bros',
        date: 'July 3, 2019',
        link: 'https://www.2brospizza.com/'
    }
}

const formatPizzeriaWithDate = (name, date, link) => {
    if (link) {
        return (<div><a href={ link } target="_blank" rel="noopener noreferrer">{ name }</a> — { date }</div>)
    } else {
        return `${ name } — ${ date }`
    }
}

const createPizzaList = () => {
    return Object.keys(pizzerias).map((keyName) => {
        const pizzeria = pizzerias[ keyName ]
        return (<li key={ keyName }>{formatPizzeriaWithDate(pizzeria.name, pizzeria.date, pizzeria.link ? pizzeria.link : '')}</li>)
    })
}

const pizzeriaList = createPizzaList(pizzerias)

const VisitedPizzerias = () => {
    return (
        <div className="visitedPizzerias">
            <div className="listIntro">
            Places we've been:
            </div>
            <ol>{pizzeriaList}</ol>
        </div>)
}

export default VisitedPizzerias
