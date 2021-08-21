import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PedidosComponent } from './components/PedidosyEntregas/pedidos/pedidos.component';
import { EntregasComponent } from './components/PedidosyEntregas/entregas/entregas.component';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';
import { CrearPedidoComponent } from './components/PedidosyEntregas/pedidos/crear-pedido/crear-pedido.component';
import { InventarioComponent } from "./components/inventario/inventario.component";
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { GestionPersonalComponent } from './components/gestion-personal/gestion-personal.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { DetallesVentasComponent } from './components/detalles-ventas/detalles-ventas.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { CrearEntregaComponent } from './components/PedidosyEntregas/entregas/crear-entrega/crear-entrega.component';
import { EditarPedidoComponent } from './components/PedidosyEntregas/pedidos/editar-pedido/editar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    PedidosComponent,
    EntregasComponent,
    DetallePedidoComponent,
    CrearPedidoComponent,
    InventarioComponent,
    VentasComponent,
    DetallePedidoComponent,
    AgregarProductoComponent,
    DashboardAdminComponent,
    ReportesComponent,
    ListaClientesComponent,
    GestionPersonalComponent,
    EditarProductoComponent,
    AgregarClienteComponent,
    EditClienteComponent,
    CrearEntregaComponent,
    EditarPedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, SidebarComponent]
})
export class AppModule { }
