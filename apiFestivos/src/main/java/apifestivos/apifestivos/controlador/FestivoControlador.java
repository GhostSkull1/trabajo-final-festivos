package apifestivos.apifestivos.controlador;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import apifestivos.apifestivos.core.DTOs.FestivoDTO;
import apifestivos.apifestivos.core.DTOs.ResponseDTO;
import apifestivos.apifestivos.core.interfaces.servicios.IFestivoServicio;


@RestController
@RequestMapping("api/festivos")
public class FestivoControlador {
    
    private IFestivoServicio servicio;

    public FestivoControlador(IFestivoServicio servicio) {
        this.servicio = servicio;
    }

   
    @GetMapping("verificar/{year}/{month}/{day}")
    public ResponseDTO verificarFestivo(
            @PathVariable("year") Integer year,
            @PathVariable("month") Integer month,
            @PathVariable("day") Integer day) {

        try {
            String fecha = String.format("%04d-%02d-%02d", year, month, day);
            SimpleDateFormat formatoFecha = new SimpleDateFormat("yyyy-MM-dd");
            Date fechaParseada = formatoFecha.parse(fecha);
            return servicio.esFestivo(fechaParseada) ? new ResponseDTO("Es festivo.") : new ResponseDTO("No es festivo.");

        } catch (NumberFormatException | ParseException e) {
            return  new ResponseDTO("Diculpe, la solicitud no es válida. Debe seguir la secuencia yyyy/MM/dd.");
        }
    }

    @GetMapping("listar/{año}")
    public List<FestivoDTO> listar(@PathVariable("año") int año) {

        return servicio.obtenerFestivos(año);
    }
} 


