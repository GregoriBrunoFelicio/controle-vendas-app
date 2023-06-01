import { toast } from "react-toastify";

export class ToastService {

    notificarSucesso = (mensagem: string) => {
        toast.success(mensagem, this.configuracoes);
    }

    notificarFalha = (mensagem: string) => {
        toast.error(mensagem, this.configuracoes);
    }

    private configuracoes: any = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    }
}