import * as pulumi from "@pulumi/pulumi";
import * as pulumiAws from "@pulumi/aws";
export interface CDNArgsArgs {
    /**
     * A config block that triggers a cloudfront
     * function with specific actions.
     */
    cloudfrontFunctionAssociations?: pulumi.Input<pulumi.Input<pulumiAws.types.input.cloudfront.DistributionOrderedCacheBehaviorFunctionAssociation>[]>;
    /**
     * The forwarded values configuration that specifies how CloudFront handles query strings, cookies and headers.
     */
    forwardedValues?: pulumi.Input<pulumiAws.types.input.cloudfront.DistributionDefaultCacheBehaviorForwardedValues>;
    /**
     * A config block that triggers a lambda
     * function with specific actions.
     */
    lambdaFunctionAssociations?: pulumi.Input<pulumi.Input<pulumiAws.types.input.cloudfront.DistributionOrderedCacheBehaviorLambdaFunctionAssociation>[]>;
}
