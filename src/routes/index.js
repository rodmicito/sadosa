const { Router } = require("express");
const router = Router();
const { db } = require("../firebase");

router.get("/",async (req, res) => {
    try {
        const querySnapshot = await db.collection("tareas").get();
        console.log(querySnapshot)
        res.json(querySnapshot.docs[0].data());
      } catch (error) {


        console.error(error);
      }
  });
    try {
      const querySnapshot = await db.collection("tareas").get();
      const tareas = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.json(tareas);
    } catch (error) {
      console.error(error);
    }
  });
  router.post("/nueva-tarea", async (req, res) => {
    console.log(req.body);
    const { firstname, lastname, email, phone } = req.body;
    await db.collection("tareas").add({
      firstname,
      lastname,
      email,
      phone,
    });
    res.json({message:'guardado de manera exitosa'});
  });
  
  router.get("/borrar-tarea/:id", async (req, res) => {
    await db.collection("tareas").doc(req.params.id).delete();
    res.json({message:'borrado de manera exitosa'});
  });
  

  
  router.post("/editar-tarea/:id", async (req, res) => {
    const { firstname, lastname, email, phone } = req.body;
    const { id } = req.params;
    await db
      .collection("tareas")
      .doc(id)
      .update({ firstname, lastname, email, phone });
    res.json({message:'actualizado de manera exitosa'});
  });

module.exports=router;