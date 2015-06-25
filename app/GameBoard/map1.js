/**
 * Created by Jason Tucker on 6/24/2015.
 */
'use strict';
function getMap1() {
    var map1 = {};
    map1.height = 32;
    map1.width = 23;
    map1.walls = [
        [2, 4, 6, 8, 10, 18, 19, 20, 21, 22], //Row1
        [0, 10, 12, 15, 16, 18, 20, 21], //Row2
        [2, 3, 5, 7, 8, 12, 15], //Row3
        [0, 2, 8, 10, 17, 19, 21, 22], //Row4
        [4, 6, 12, 15], //Row5
        [1, 2, 3, 6, 7, 9, 11, 12, 17, 18, 20, 21], //Row6
        [15, 17], //Row7
        [19, 20, 22], //Row8
        [0, 2, 3, 5, 7, 8, 10, 12, 15, 17], //Row9
        [3, 7, 18, 21], //Row10
        [1, 5, 9, 10, 12, 15, 16, 18, 19, 21], //Row11
        [1, 3, 7, 9, 10], //Row12
        [5, 12], //Row13
        [0, 2, 4, 5, 6, 8, 9, 11, 12, 15, 16, 18, 20, 22], //Row14
        [18], //Row15
        [15, 16, 18, 19, 21], //Row16
        [0, 2, 4, 6, 8, 11, 13], //Row17
        [8, 11, 15, 17, 19, 21], //Row18
        [1, 3, 5, 6, 13], //Row19
        [6, 8, 11, 13, 14, 16, 18, 20, 22], //Row20
        [0, 2, 4], //Row21
        [0, 2, 4, 5, 7, 8], //Row22
        [11, 13, 15, 17, 18, 20, 21], //Row23
        [11, 18], //Row24
        [1, 2, 4, 5, 7, 8, 13, 14, 16, 20, 22], //Row25
        [2, 11, 14, 18], //Row26
        [0, 4, 6, 8, 11, 12, 16, 18, 19, 21], //Row27
        [0, 2, 8, 14, 21], //Row28
        [4, 6, 11, 13, 14, 16, 18, 19], //Row29
        [1, 3, 4, 8, 11, 21], //Row30
        [6, 13, 15, 17, 19], //Row31
        [1, 2, 5, 7, 8, 11, 15, 19, 21] //Row32
    ];
    map1.streets = [
        {
            name: 'Street1',
            start: {row: 0,column: 13},
            end:{row: 15,column: 14}
        },
        {
            name: 'Street2',
            start:{row: 6,column: 0},
            end:{row:7,column:14}
        },
        {
            name: 'Street3',
            start:{row:11, column: 13},
            end:{row:12, column:22}
        },
        {
            name: 'Street4',
            start:{row: 14, column: 0},
            end:{row: 15, column: 14}
        },
        {
            name: 'Street5',
            start:{row: 14, column:9},
            end:{row: 31, column: 10}
        },
        {
            name: 'Street6',
            start:{row: 20, column:9},
            end:{row: 21, column: 22}
        },
        {
            name: 'Street7',
            start:{row:22, column: 0},
            end:{row: 23, column: 10}
        }
    ];
    map1.agentStart = {column: 13, row: 1};
    map1.hunterStart = {column: 10, row: 18};
    return map1;
}