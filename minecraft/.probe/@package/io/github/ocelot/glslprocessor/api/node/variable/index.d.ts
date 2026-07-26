import { $Stream } from "@package/java/util/stream";
import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslTypeQualifier, $GlslSpecifiedType, $GlslStructSpecifier, $GlslType_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/variable" {
    export class $GlslGetArrayNode implements $GlslNode {
        visit(arg0: $GlslNodeVisitor): void;
        setIndex(arg0: $GlslNode): $GlslGetArrayNode;
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        getIndex(): $GlslNode;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetArrayNode;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslVariableNode implements $GlslNode {
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslVariableNode;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslStructDeclarationNode implements $GlslRootNode {
        getStructSpecifier(): $GlslStructSpecifier;
        setSpecifiedType(arg0: $GlslSpecifiedType): $GlslStructDeclarationNode;
        getSpecifiedType(): $GlslSpecifiedType;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslStructDeclarationNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslSpecifiedType);
        get structSpecifier(): $GlslStructSpecifier;
        get nodeType(): $GlslNodeType;
        get struct(): boolean;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslGetFieldNode implements $GlslNode {
        setFieldSelection(arg0: string): $GlslGetFieldNode;
        getFieldSelection(): string;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        stream(): $Stream<$GlslNode>;
        getExpression(): $GlslNode;
        setExpression(arg0: $GlslNode): $GlslGetFieldNode;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslNode, arg1: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslNewFieldNode implements $GlslRootNode {
        getInitializer(): $GlslNode;
        setInitializer(arg0: $GlslNode): $GlslNewFieldNode;
        setType(arg0: $GlslType_): $GlslNewFieldNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslNewFieldNode;
        getType(): $GlslSpecifiedType;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $GlslType_, arg1: string, arg2: $GlslNode);
        get nodeType(): $GlslNodeType;
        get struct(): boolean;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
    }
    export class $GlslVariableDeclarationNode implements $GlslRootNode {
        getTypeQualifiers(): $List<$GlslTypeQualifier>;
        getNames(): $List<string>;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslRootNode;
        asDeclaration(): $GlslVariableDeclarationNode;
        asStruct(): $GlslStructDeclarationNode;
        isStruct(): boolean;
        isField(): boolean;
        isDeclaration(): boolean;
        isFunction(): boolean;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        constructor(arg0: $Collection_<$GlslTypeQualifier>, arg1: $Collection_<string>);
        get typeQualifiers(): $List<$GlslTypeQualifier>;
        get names(): $List<string>;
        get nodeType(): $GlslNodeType;
        get struct(): boolean;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get type(): $GlslSpecifiedType;
    }
}
