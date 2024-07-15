import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  response.status(200).json(getProductById(request.query.id));
}
