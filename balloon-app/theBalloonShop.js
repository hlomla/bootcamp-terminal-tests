module.exports = (pool, validColors) => {
    // insert valid colors into the database here
    async function insertColours(colours){
try {
    await pool.query(`insert into valid_colour(color_name) values($1)`, [colours])
} catch (error) {
    console.error('insertColours fun ==>', error)
}
    }    
    function getValidColors() {

    }

    function requestColor (color) {

    }

    function colorCount (color) {

    }

    function getInvalidColors () {

    }
     
    async function allColors () {
        var colourList = await pool.query('Select * from valid_colour')
        return colourList.rows;    
    }
   
    return {

        insertColours,
        getValidColors,
        requestColor,
        colorCount,
        getInvalidColors,
        allColors
    }
}