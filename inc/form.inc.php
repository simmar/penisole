<form action="#" method="post" enctype="multipart/form-data">
    
    <label for="recherche">Rechercher</label>
    <input type="text" id="recherche" name="recherche" value="Recherche" onblur="if(this.value == '') this.value = this.defaultValue;" onfocus="if(this.value == this.defaultValue) this.value = '';">
    
    <input type="submit" id="submit" name="submit" value="Envoyer">
    
</form>