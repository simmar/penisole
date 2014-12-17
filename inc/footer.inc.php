<div id="footer">
     <div  class="slide_inside">

        <form  action="../traitement.php" method="post" enctype="multipart/form-data"  class="form" id="form-suggestion">
            <h1 class="ptl tac">Contact</h1>
            <div class="seperator"></div>
            <fieldset>
                <div class="form-item form-item-text">
                    <label for="nom">Nom<sup>*</sup></label>
                    <input type="text" name="nom" id="nom" class="form-text" tabindex="10" data-control="saisie"/>
                </div>
                <div class="form-item form-item-text">
                    <label for="prenom">Prénom<sup>*</sup></label>
                    <input type="text" name="prenom" id="prenom" class="form-text" tabindex="20" data-control="saisie"/>
                </div>
                <div class="form-item form-item-text">
                    <label for="email">Email<sup>*</sup></label>
                    <input type="text" name="email" id="email" class="form-text" tabindex="30" data-control="mail"/>
                </div>
            </fieldset>
            <div class="form-item form-item-text commentaire">
                <label for="comment" class="comment">Avez-vous un commentaire ?</label><br />
                <textarea name="comment" id="comment" class="form-textarea"  rows="10" cols="50" data-control="saisie"></textarea>
                <p>*tout les champs sont obligatoire</p>
            </div>
            <div class="button">
                <input id="ok" type="submit" name="submit" value="envoyer " class="btn btn-1 btn-1a">
                <input type="reset" class="btn btn-1 btn-1a second" value=" remise a zero ">
            </div>
        </form>
    </div><!-- #footer -->
</div>