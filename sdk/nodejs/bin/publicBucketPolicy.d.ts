import * as pulumi from "@pulumi/pulumi";
import * as pulumiAws from "@pulumi/aws";
export declare class PublicBucketPolicy extends pulumi.ComponentResource {
    /**
     * Returns true if the given object is an instance of PublicBucketPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PublicBucketPolicy;
    readonly ownershipControls: pulumi.Output<pulumiAws.s3.BucketOwnershipControls>;
    readonly publicAccessBlock: pulumi.Output<pulumiAws.s3.BucketPublicAccessBlock>;
    /**
     * Create a PublicBucketPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicBucketPolicyArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
 * The set of arguments for constructing a PublicBucketPolicy resource.
 */
export interface PublicBucketPolicyArgs {
    /**
     * The bucket to apply the public policy to.
     */
    bucket: pulumi.Input<pulumiAws.s3.Bucket>;
}
