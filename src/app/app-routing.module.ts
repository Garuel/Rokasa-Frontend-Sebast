import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { CrearPedidoComponent } from './components/PedidosyEntregas/pedidos/crear-pedido/crear-pedido.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';
import { GestionPersonalComponent } from './components/gestion-personal/gestion-personal.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { EntregasComponent } from './components/PedidosyEntregas/entregas/entregas.component';
import { PedidosComponent } from './components/PedidosyEntregas/pedidos/pedidos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { DetalleEntregaComponent } from './components/detalle-entrega/detalle-entrega.component';
import { DetallesVentasComponent } from './components/detalles-ventas/detalles-ventas.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';
import { CrearEntregaComponent } from './components/PedidosyEntregas/entregas/crear-entrega/crear-entrega.component';



const routes: Routes = [

  { path: 'pedidos', component: PedidosComponent},
  { path: 'entregas', component: EntregasComponent},
  { path: 'detalle-pedido/:id', component: DetallePedidoComponent},
  { path: 'crear-pedido', component: CrearPedidoComponent},
  { path: 'crear-entrega', component: CrearEntregaComponent},
  { path: 'inventario', component: InventarioComponent},
  { path: 'ventas', component: VentasComponent},
  { path: 'detalles-ventas', component: DetallesVentasComponent},
  { path: 'lista-clientes', component: ListaClientesComponent},
  { path: 'agregar-producto', component: AgregarProductoComponent},
  { path: 'reportes', component: ReportesComponent},
  { path: 'personal', component: GestionPersonalComponent},
  {path: 'editar-producto/:id', component: EditarProductoComponent},
  {path:'agregar-cliente',component: AgregarClienteComponent},
  {path: 'edit-cliente/:id', component:EditClienteComponent},
  {path: 'login', component: LoginComponent},
  { path: 'dashboard-admin', component: DashboardAdminComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
