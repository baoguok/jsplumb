import { JsPlumbInstance } from "../core";
import { jsPlumbElement, TypeDescriptor } from '../common';
import { AbstractConnector } from "./abstract-connector";
import { Endpoint } from "../endpoint/endpoint";
import { PaintStyle } from "../styles";
import { OverlayCapableComponent } from "../component/overlay-capable-component";
import { OverlaySpec } from "../overlay/overlay";
import { AnchorSpec } from "../factory/anchor-factory";
import { ConnectorSpec } from "./abstract-connector";
import { EndpointSpec } from "../endpoint/endpoint";
export interface ConnectionParams<E> {
    id?: string;
    source?: E;
    target?: E;
    sourceEndpoint?: Endpoint;
    targetEndpoint?: Endpoint;
    scope?: string;
    overlays?: Array<OverlaySpec>;
    connector?: ConnectorSpec;
    type?: string;
    endpoints?: [EndpointSpec, EndpointSpec];
    endpoint?: EndpointSpec;
    endpointStyles?: [PaintStyle, PaintStyle];
    endpointStyle?: PaintStyle;
    endpointHoverStyle?: PaintStyle;
    endpointHoverStyles?: [PaintStyle, PaintStyle];
    outlineStroke?: number;
    outlineWidth?: number;
    uuids?: [string, string];
    deleteEndpointsOnEmpty?: boolean;
    detachable?: boolean;
    reattach?: boolean;
    directed?: boolean;
    cost?: number;
    data?: any;
    cssClass?: string;
    paintStyle?: PaintStyle;
    hoverPaintStyle?: PaintStyle;
    previousConnection?: Connection;
    anchors?: [AnchorSpec, AnchorSpec];
    anchor?: AnchorSpec;
}
export declare class Connection<E = any> extends OverlayCapableComponent {
    instance: JsPlumbInstance;
    id: string;
    connector: AbstractConnector;
    defaultLabelLocation: number;
    scope: string;
    typeId: string;
    getIdPrefix(): string;
    getDefaultOverlayKey(): string;
    getXY(): {
        x: number;
        y: number;
    };
    previousConnection: Connection;
    sourceId: string;
    targetId: string;
    source: any;
    target: any;
    detachable: boolean;
    reattach: boolean;
    uuids: [string, string];
    cost: number;
    directed: boolean;
    endpoints: [Endpoint<E>, Endpoint<E>];
    endpointStyles: [PaintStyle, PaintStyle];
    readonly endpointSpec: EndpointSpec;
    readonly endpointsSpec: [EndpointSpec, EndpointSpec];
    endpointStyle: PaintStyle;
    endpointHoverStyle: PaintStyle;
    endpointHoverStyles: [PaintStyle, PaintStyle];
    suspendedEndpoint: Endpoint<E>;
    suspendedIndex: number;
    suspendedElement: E;
    suspendedElementId: string;
    suspendedElementType: string;
    _forceReattach: boolean;
    _forceDetach: boolean;
    proxies: Array<{
        ep: Endpoint<E>;
        originalEp: Endpoint<E>;
    }>;
    pending: boolean;
    anchors: [AnchorSpec, AnchorSpec];
    anchor: AnchorSpec;
    static updateConnectedClass<E>(instance: JsPlumbInstance, conn: Connection, element: jsPlumbElement<E>, isRemoval: boolean): void;
    constructor(instance: JsPlumbInstance, params: ConnectionParams<E>);
    makeEndpoint(isSource: boolean, el: any, elId: string, ep?: Endpoint): Endpoint;
    getTypeDescriptor(): string;
    isDetachable(ep?: Endpoint): boolean;
    setDetachable(detachable: boolean): void;
    isReattach(): boolean;
    setReattach(reattach: boolean): void;
    applyType(t: TypeDescriptor, typeMap: any): void;
    addClass(c: string, informEndpoints?: boolean): void;
    removeClass(c: string, informEndpoints?: boolean): void;
    setVisible(v: boolean): void;
    destroy(force?: boolean): void;
    updateConnectedClass(isRemoval: boolean): void;
    getUuids(): [string, string];
    getCost(): number;
    setCost(c: number): void;
    isDirected(): boolean;
    getConnector(): AbstractConnector;
    makeConnector(name: string, args: any): AbstractConnector;
    prepareConnector(connectorSpec: ConnectorSpec, typeId?: string): AbstractConnector;
    setPreparedConnector(connector: AbstractConnector, doNotRepaint?: boolean, doNotChangeListenerComponent?: boolean, typeId?: string): void;
    setConnector(connectorSpec: ConnectorSpec, doNotRepaint?: boolean, doNotChangeListenerComponent?: boolean, typeId?: string): void;
    /**
     * Replace the Endpoint at the given index with a new Endpoint.  This is used by the Toolkit edition, if changes to an edge type
     * cause a change in Endpoint.
     * @param idx 0 for source, 1 for target
     * @param endpointDef Spec for the new Endpoint.
     */
    replaceEndpoint(idx: number, endpointDef: EndpointSpec): void;
    static prepareEndpoint<E>(conn: Connection, existing: Endpoint, index: number, element?: E, elementId?: string, endpoint?: EndpointSpec): Endpoint;
    private static _makeAnchor;
}
