import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute
	limit: 10000, // Limite à 100 le nombre de tentatives de requêtes par IP (Ici toutes les minutes).
	standardHeaders: 'draft-7', // Active le header "RateLimit".
	legacyHeaders: false, // Désactive le header "X-Rate-Limit"
  	message: "Trop de tentatives réalisées. Réessayez dans 1 minute"
})

export default limiter