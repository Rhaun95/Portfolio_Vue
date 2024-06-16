import { useBase, createRouter, defineEventHandler } from "h3";
import * as contactCtrl from "~~/server/controller/contact";

const router = createRouter();

router.get("/contact", defineEventHandler(contactCtrl.read));
router.post("/contact", defineEventHandler(contactCtrl.create));
router.get("/contact/:id", defineEventHandler(contactCtrl.detail));


export default useBase("/api", router.handler);