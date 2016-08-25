let siteConfig = {
    "neighborhoodDescriptor": "NPA",
    "gaKey": "UA-48797957-1",
    "header": {
        "description": "Quality of Life Dashboard.",
        "keywords": "GIS,Mecklenburg County,parks,libraries,schools,environment,impervious surface,floodplain,zoning,assessment,tax,photos,government",
        "author": "Tobin Bradley",
        "title": "Quality of Life Explorer"
    },
    "description": "Exploring neighborhood character, economics, education, engagement, environment, health, housing, safety and transportation.",
    "qolembedURL": "http://mcmap.org/qol-embed/",
    "qolreportURL": "http://mcmap.org/qol-report/",
    "qoldashboardURL": "http://mcmap.org/qol/",
    "menu": {
        "About": {
            "links": [
                {
                    "href": "downloads/dimensiononepage.pdf",
                    "text": "What is in the Dashboard"
                },
                {
                    "href": "http://qol.charmeck.org/",
                    "text": "About the Project"
                }
            ]
        },
        "Get Data": {
            "links": [
                {
                    "href": "downloads/qol-data.zip",
                    "text": "Download the Quality of Life Dataset"
                },
                {
                    "divider": true
                },
                {
                    "href": "http://maps.co.mecklenburg.nc.us/openmapping/",
                    "text": "Mecklenburg County Open Mapping"
                },
                {
                    "href": "http://clt.charlotte.opendata.arcgis.com/",
                    "text": "City of Charlotte Open Data Portal"
                }
            ]
        }
    }
};

module.exports = siteConfig;
