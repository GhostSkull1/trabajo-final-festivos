package apifestivos.apifestivos.core.DTOs;

public class ResponseDTO {
    private String mensaje;

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public ResponseDTO(String mensaje) {
        this.mensaje = mensaje;
    }
}