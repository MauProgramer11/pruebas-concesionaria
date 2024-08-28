export const home = (req, res) => {
    const datos = {
        title: 'Página Principal'
    }
    res.render('home', datos)
}