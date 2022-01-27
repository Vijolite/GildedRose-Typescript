export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {                      
            if (this.items[i].name !='Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn--

                let qualityDegradation=(this.items[i].name !='Conjured')?1:2;
                let timesBy=(this.items[i].name ==='Aged Brie'||this.items[i].name ==='Backstage passes to a TAFKAL80ETC concert')?1:(-1)

                if (this.items[i].name ==='Backstage passes to a TAFKAL80ETC concert')
                    if (this.items[i].sellIn<=0)
                        qualityDegradation=(-1)*this.items[i].quality
                        else 
                            if (this.items[i].sellIn<=5)
                                qualityDegradation=3
                            else if (this.items[i].sellIn<=10)
                                    qualityDegradation=2

                if (this.items[i].sellIn<0)
                    qualityDegradation*=2
               
                if (this.items[i].quality+qualityDegradation*timesBy>=0) 
                    if (this.items[i].quality+qualityDegradation*timesBy<50) 
                        this.items[i].quality=this.items[i].quality+qualityDegradation*timesBy
                    else
                        this.items[i].quality=50
            }
        }
        return this.items;
    }

    
}

// const products: Array<Item> = [
//     new Item ("Aged Brie",5,3),
//     new Item ("Aged Brie",25,48),
//     new Item ("Something else",7,5),
//     new Item ("Bread",2,10),
//     new Item ("Cream Cake",2,1),
//     new Item ("Sulfuras, Hand of Ragnaros",15,80),
//     new Item ("Backstage passes to a TAFKAL80ETC concert",15,10),
//     new Item ("Backstage passes to a TAFKAL80ETC concert",10,14),
//     new Item ("Backstage passes to a TAFKAL80ETC concert",5,20),
//     new Item ("Backstage passes to a TAFKAL80ETC concert",5,48),
//     new Item ("Backstage passes to a TAFKAL80ETC concert",1,49),
//     new Item ("Conjured",6,10)
// ]

// const gr=new GildedRose(products)
// console.log(gr.items)
// gr.updateQuality()
// gr.updateQuality()
// console.log(gr.items)
