
import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    // Add a master test here
    it ('should be equal to the record after 2 days of updates', function() {
        const input_values: Array<Item> = [ 
            new Item ("Aged Brie",5,3),
            new Item ("Aged Brie",25,48),
            new Item ("Something else",7,5),
            new Item ("Bread",2,10),
            new Item ("Cream Cake",2,1),
            new Item ("Sulfuras, Hand of Ragnaros",15,80),
            new Item ("Backstage passes to a TAFKAL80ETC concert",15,10),
            new Item ("Backstage passes to a TAFKAL80ETC concert",10,14),
            new Item ("Backstage passes to a TAFKAL80ETC concert",5,20),
            new Item ("Backstage passes to a TAFKAL80ETC concert",5,48),
            new Item ("Backstage passes to a TAFKAL80ETC concert",1,49)
        ];
        const gr=new GildedRose(input_values)
        gr.updateQuality();
        gr.updateQuality();
        const expected_values: Array<Item> =[
            new Item ("Aged Brie",3,5),
            new Item ("Aged Brie",23,50),
            new Item ("Something else",5,3),
            new Item ("Bread",0,8),
            new Item ("Cream Cake",0,0),
            new Item ("Sulfuras, Hand of Ragnaros",15,80),
            new Item ("Backstage passes to a TAFKAL80ETC concert",13,12),
            new Item ("Backstage passes to a TAFKAL80ETC concert",8,18),
            new Item ("Backstage passes to a TAFKAL80ETC concert",3,26),
            new Item ("Backstage passes to a TAFKAL80ETC concert",3,50),
            new Item ("Backstage passes to a TAFKAL80ETC concert",-1,0)
        ]


        expect(gr.items).to.deep.equal(expected_values);

    });
});

describe('Gilded Rose', function () {
    it ('should be equal to the record after 3 days of updates', function() {
        const input_values: Array<Item> = [ 
            new Item ("Aged Brie",5,3),
            new Item ("Aged Brie",25,48),
            new Item ("Something else",7,5),
            new Item ("Bread",2,10),
            new Item ("Cream Cake",2,1),
            new Item ("Sulfuras, Hand of Ragnaros",15,80),
            new Item ("Backstage passes to a TAFKAL80ETC concert",15,10),
            new Item ("Backstage passes to a TAFKAL80ETC concert",10,14),
            new Item ("Backstage passes to a TAFKAL80ETC concert",5,20),
            new Item ("Backstage passes to a TAFKAL80ETC concert",5,48),
            new Item ("Backstage passes to a TAFKAL80ETC concert",1,49),
            new Item ("Conjured tea",6,10),
            new Item ("Conjured Aged Brie",30,20),
            new Item ("Muffin",7,2)
        ];
        const gr=new GildedRose(input_values)
        gr.updateQuality();
        gr.updateQuality();
        gr.updateQuality();
        const expected_values: Array<Item> =[
            new Item ("Aged Brie",2,6),
            new Item ("Aged Brie",22,50),
            new Item ("Something else",4,2),
            new Item ("Bread",-1,6),
            new Item ("Cream Cake",-1,0),
            new Item ("Sulfuras, Hand of Ragnaros",15,80),
            new Item ("Backstage passes to a TAFKAL80ETC concert",12,13),
            new Item ("Backstage passes to a TAFKAL80ETC concert",7,20),
            new Item ("Backstage passes to a TAFKAL80ETC concert",2,29),
            new Item ("Backstage passes to a TAFKAL80ETC concert",2,50),
            new Item ("Backstage passes to a TAFKAL80ETC concert",-2,0),
            new Item ("Conjured tea",3,4),
            new Item ("Conjured Aged Brie",27,26),
            new Item ("Muffin",4,0)
        ]

        expect(gr.items).to.deep.equal(expected_values);
    });
});

describe('Gilded Rose', function () {
    it ('should be equal to the record after 4 days of updates', function() {
        const input_values: Array<Item> = [ 
            new Item ("Aged Brie",5,3),
            new Item ("Aged Brie",25,48),
            new Item ("Something else",7,5),
            new Item ("Bread",2,10),
            new Item ("Cream Cake",2,1),
            new Item ("Sulfuras, Hand of Ragnaros",15,80),
            new Item ("Backstage passes to a TAFKAL80ETC concert",15,10),
            new Item ("Backstage passes to a TAFKAL80ETC concert",10,14),
            new Item ("Backstage passes to a TAFKAL80ETC concert",5,20),
            new Item ("Backstage passes to a TAFKAL80ETC concert",5,48),
            new Item ("Backstage passes to a TAFKAL80ETC concert",1,49),
            new Item ("Conjured",6,10)
        ];
        const gr=new GildedRose(input_values)
        gr.updateQuality();
        gr.updateQuality();
        gr.updateQuality();
        gr.updateQuality();
        const expected_values: Array<Item> =[
            new Item ("Aged Brie",1,7),
            new Item ("Aged Brie",21,50),
            new Item ("Something else",3,1),
            new Item ("Bread",-2,4),
            new Item ("Cream Cake",-2,0),
            new Item ("Sulfuras, Hand of Ragnaros",15,80),
            new Item ("Backstage passes to a TAFKAL80ETC concert",11,14),
            new Item ("Backstage passes to a TAFKAL80ETC concert",6,22),
            new Item ("Backstage passes to a TAFKAL80ETC concert",1,32),
            new Item ("Backstage passes to a TAFKAL80ETC concert",1,50),
            new Item ("Backstage passes to a TAFKAL80ETC concert",-3,0),
            new Item ("Conjured",2,2)
        ]

        expect(gr.items).to.deep.equal(expected_values);
    });
});
