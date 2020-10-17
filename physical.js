const electron = require('electron')
const path = require('path')
let filename = 'Phase_data'
let fs = require('fs')
let sno = 0

let win

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600})
    win.loadURL(url.format ({
        pathname: path.join(__dirname, 'physical.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow)
$('#add-to-list').on('click', () => {
    let Density = $('#Density').val()
    let Dynamic_Viscosity = $('#Dynamic_Viscosity').val()
    let Specific_Heat = $('#Sp_heat').val()
    let Thermal_Conductivity = $('#Th_Conductivity').val()
    let Particle_Diameter = $('#Par_Dia').val()
    
    fs.appendFile('Phase_Data', Density + ',' + Dynamic_Viscosity + ',' + Specific_Heat + ',' + Thermal_Conductivity + ',' + Particle_Diameter + '\n')

    addEntry(Density, Dynamic_Viscosity, Specific_Heat, Thermal_Conductivity, Particle_Diameter)
})

function addEntry(Density, Dynamic_Viscosity, Specific_Heat, Thermal_Conductivity, Particle_Diameter) {
    if(Density && Dynamic_Viscosity && Specific_Heat && Thermal_Conductivity && Particle_Diameter) {
        sno++
        let updateString = '<tr><td>'+ sno + '</td><td>'+ Density + '</td><td>'+ Dynamic_Viscosity + '</td><td>'+ Specific_Heat + '</td><td>'+ Thermal_Conductivity + '</td><td>'+ Particle_Diameter + '</td></tr>'
        $('#contact-table').append(updateString)
    }
}

function loadAndDisplayPhaseNumber() {
    //check if the file exists
    if(fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'utf8').split('\n')

        data.forEach((contact, index) => {
            let [ Density, Dynamic_Viscosity, Specific_Heat, Thermal_Conductivity, Particle_Diameter ] = contact.split(',')
            addEntry(Density, Dynamic_Viscosity, Specific_Heat, Thermal_Conductivity, Particle_Diameter)
        })
    } else {
        console.log("File doesn\'t Exist. Creating new file")
        fs.writeFile(filename, '', (err) => {
            if (err)
                console.log(err)
        })
    }
}

loadAndDisplayPhaseNumber()


