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

                let conjured=(this.items[i].name.startsWith('Conjured'))?true:false;
                let itemRealName=(conjured)?this.items[i].name.substring(8,this.items[i].name.length).trimStart():this.items[i].name

                let qualityDegradation=1;

                let timesBy=(itemRealName ==='Aged Brie'||itemRealName ==='Backstage passes to a TAFKAL80ETC concert')?1:(-1)

                if (itemRealName ==='Backstage passes to a TAFKAL80ETC concert')
                    if (this.items[i].sellIn<=0)
                        qualityDegradation=(-1)*this.items[i].quality
                        else 
                            if (this.items[i].sellIn<=5)
                                qualityDegradation=3
                            else if (this.items[i].sellIn<=10)
                                    qualityDegradation=2

                if (this.items[i].sellIn<0) qualityDegradation*=2

                if (conjured) qualityDegradation*=2
               
                let newQuality =this.items[i].quality+qualityDegradation*timesBy
                if (newQuality>=0) 
                    if (newQuality<50) 
                        this.items[i].quality=newQuality
                    else
                        this.items[i].quality=50
                else
                    this.items[i].quality=0
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
//     new Item ("Conjured tea",6,10),
//     new Item ("Conjured Aged Brie",30,20)
// ]

// const gr=new GildedRose(products)
// gr.updateQuality()
// gr.updateQuality()
// gr.updateQuality()
// console.log(gr.items)
