export const handleSubmitProfil = (response, validStatus) => {
  if (response.status === validStatus){
    return {
      alertStyle: "success",
      errorStatus: null,
      message: "Profil mis à jour",
      showMessage: true
    }
  }
  return {
    alertStyle: "error",
    errorStatus: response.status,
    message: response.data.message,
    showMessage: true
  }
} 