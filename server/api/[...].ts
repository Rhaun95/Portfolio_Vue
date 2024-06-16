import { useBase, createRouter, defineEventHandler } from "h3";
import * as contactCtrl from "~~/server/controller/contact";
import * as likeCtrl from "~~/server/controller/like";

const router = createRouter();

router.get("/contact", defineEventHandler(contactCtrl.read));
router.post("/contact", defineEventHandler(contactCtrl.create));
router.get("/contact/:id", defineEventHandler(contactCtrl.detail));

router.get("/like/:project", defineEventHandler(likeCtrl.read));
router.put("/like/:project", defineEventHandler(likeCtrl.update));


// export default  router.handler;
export default useBase("/api", router.handler);