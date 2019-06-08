import { ProdutoDTO } from '../../models/produto.dto';

export interface CartItem {
    quantidade: number,
    produto: ProdutoDTO
}